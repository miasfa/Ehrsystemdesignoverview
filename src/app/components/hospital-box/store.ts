import { create } from 'zustand';
import type {
  HospitalState,
  Patient,
  TriageEntry,
  Encounter,
  Order,
  OrderResult,
  Diagnosis,
  SOAPNote,
  MedicationOrder,
  Invoice,
  Notification,
  AuditLog,
  SystemUser,
  Vitals,
  QuickProtocol,
} from './types';

// Helper: Calculate Early Warning Score
function calculateEWS(vitals: Vitals): number {
  let score = 0;

  // Respiratory Rate
  if (vitals.respiratoryRate < 9) score += 3;
  else if (vitals.respiratoryRate >= 9 && vitals.respiratoryRate <= 11) score += 1;
  else if (vitals.respiratoryRate >= 21 && vitals.respiratoryRate <= 24) score += 2;
  else if (vitals.respiratoryRate > 24) score += 3;

  // SpO2
  if (vitals.spO2 < 92) score += 3;
  else if (vitals.spO2 >= 92 && vitals.spO2 <= 93) score += 2;
  else if (vitals.spO2 >= 94 && vitals.spO2 <= 95) score += 1;

  // Temperature
  if (vitals.temperature < 35) score += 3;
  else if (vitals.temperature >= 35 && vitals.temperature < 36) score += 1;
  else if (vitals.temperature >= 38 && vitals.temperature < 39) score += 1;
  else if (vitals.temperature >= 39) score += 2;

  // Systolic BP
  if (vitals.systolicBP < 90) score += 3;
  else if (vitals.systolicBP >= 90 && vitals.systolicBP < 100) score += 2;
  else if (vitals.systolicBP >= 100 && vitals.systolicBP < 110) score += 1;
  else if (vitals.systolicBP >= 220) score += 3;

  // Heart Rate
  if (vitals.heartRate < 40) score += 3;
  else if (vitals.heartRate >= 40 && vitals.heartRate < 50) score += 1;
  else if (vitals.heartRate >= 91 && vitals.heartRate < 110) score += 1;
  else if (vitals.heartRate >= 111 && vitals.heartRate < 130) score += 2;
  else if (vitals.heartRate >= 130) score += 3;

  // Consciousness
  if (vitals.consciousness !== 'alert') score += 3;

  return score;
}

// Helper: Auto-set priority based on EWS
function getPriorityFromEWS(ews: number): 'ROUTINE' | 'URGENT' | 'EMERGENCY' {
  if (ews >= 7) return 'EMERGENCY';
  if (ews >= 5) return 'URGENT';
  return 'ROUTINE';
}

interface HospitalActions {
  // Provisioning
  provisionSystem: () => void;

  // Patient Management
  registerPatient: (patient: Omit<Patient, 'id' | 'registeredAt'>) => Patient;
  updatePatientIdentityLevel: (patientId: string, level: 'L0' | 'L2') => void;

  // Triage
  createTriageEntry: (entry: Omit<TriageEntry, 'id' | 'earlyWarningScore' | 'priority' | 'timestamp'>) => TriageEntry;

  // Encounters
  createEncounter: (encounter: Omit<Encounter, 'id' | 'startTime'>) => Encounter;
  completeEncounter: (encounterId: string) => void;

  // Clinical Documentation
  createSOAPNote: (note: Omit<SOAPNote, 'id' | 'timestamp' | 'signed'>) => SOAPNote;
  signSOAPNote: (noteId: string) => void;

  // Diagnosis
  addDiagnosis: (diagnosis: Omit<Diagnosis, 'id' | 'diagnosedAt'>) => Diagnosis;

  // Orders
  createOrder: (order: Omit<Order, 'id' | 'orderedAt' | 'status'>) => Order;
  applyQuickProtocol: (encounterId: string, patientId: string, protocolId: string) => void;
  updateOrderStatus: (orderId: string, status: Order['status']) => void;

  // Lab & Radiology
  submitOrderResult: (result: Omit<OrderResult, 'id' | 'completedAt'>) => void;
  acknowledgeCriticalResult: (resultId: string, acknowledgedBy: string) => void;

  // Pharmacy
  dispenseMedication: (orderId: string, dispensedBy: string, witnessName?: string, witnessPIN?: string) => void;

  // Inventory
  updateInventoryStock: (itemId: string, quantity: number, reason: string) => void;

  // Billing
  generateInvoice: (encounterId: string) => Invoice;
  processPayment: (invoiceId: string, amount: number, method: Invoice['paymentMethod']) => void;

  // Notifications
  markNotificationAsRead: (notificationId: string) => void;
  clearAllNotifications: () => void;

  // System
  setCurrentUser: (user: SystemUser) => void;
  logAudit: (action: string, resourceType: string, resourceId: string, details: Record<string, any>) => void;
}

export const useHospitalStore = create<HospitalState & HospitalActions>((set, get) => ({
  // Initial State
  patients: [],
  encounters: [],
  triageQueue: [],
  soapNotes: [],
  diagnoses: [],
  orders: [],
  orderResults: [],
  inventory: [],
  invoices: [],
  notifications: [],
  auditLogs: [],
  users: [],
  quickProtocols: [],
  currentUser: null,
  isProvisioned: false,

  // Provisioning
  provisionSystem: () => {
    // This will be populated with seed data
    set({ isProvisioned: true });
    get().logAudit('SYSTEM_PROVISIONED', 'system', 'system', {});
  },

  // Patient Management
  registerPatient: (patientData) => {
    const patient: Patient = {
      ...patientData,
      id: `PAT-${Date.now()}`,
      registeredAt: new Date().toISOString(),
    };

    set((state) => ({
      patients: [...state.patients, patient],
    }));

    get().logAudit('PATIENT_REGISTERED', 'patient', patient.id, { name: patient.name });
    return patient;
  },

  updatePatientIdentityLevel: (patientId, level) => {
    set((state) => ({
      patients: state.patients.map((p) =>
        p.id === patientId
          ? { ...p, identityLevel: level, biometricVerified: level === 'L2' }
          : p
      ),
    }));

    get().logAudit('IDENTITY_VERIFIED', 'patient', patientId, { level });
  },

  // Triage with Auto-EWS Calculation
  createTriageEntry: (entryData) => {
    const ews = calculateEWS(entryData.vitals);
    const priority = getPriorityFromEWS(ews);

    const entry: TriageEntry = {
      ...entryData,
      id: `TRI-${Date.now()}`,
      earlyWarningScore: ews,
      priority,
      timestamp: new Date().toISOString(),
    };

    set((state) => ({
      triageQueue: [...state.triageQueue, entry],
    }));

    // Update encounter priority if exists
    if (entryData.encounterId) {
      set((state) => ({
        encounters: state.encounters.map((e) =>
          e.id === entryData.encounterId ? { ...e, priority } : e
        ),
      }));
    }

    // Create notification if critical
    if (priority === 'EMERGENCY') {
      const notification: Notification = {
        id: `NOT-${Date.now()}`,
        type: 'queue-alert',
        title: 'EMERGENCY Patient',
        message: `Patient ${entryData.patientId} requires immediate attention. EWS: ${ews}`,
        severity: 'critical',
        recipientId: 'all-doctors',
        relatedEncounterId: entryData.encounterId,
        isRead: false,
        createdAt: new Date().toISOString(),
      };

      set((state) => ({
        notifications: [...state.notifications, notification],
      }));
    }

    get().logAudit('TRIAGE_CREATED', 'triage', entry.id, { ews, priority });
    return entry;
  },

  // Encounters
  createEncounter: (encounterData) => {
    const encounter: Encounter = {
      ...encounterData,
      id: `ENC-${Date.now()}`,
      startTime: new Date().toISOString(),
    };

    set((state) => ({
      encounters: [...state.encounters, encounter],
    }));

    get().logAudit('ENCOUNTER_CREATED', 'encounter', encounter.id, { patientId: encounter.patientId });
    return encounter;
  },

  completeEncounter: (encounterId) => {
    set((state) => ({
      encounters: state.encounters.map((e) =>
        e.id === encounterId
          ? { ...e, status: 'completed', endTime: new Date().toISOString() }
          : e
      ),
    }));

    // Auto-generate invoice
    get().generateInvoice(encounterId);
    get().logAudit('ENCOUNTER_COMPLETED', 'encounter', encounterId, {});
  },

  // Clinical Documentation
  createSOAPNote: (noteData) => {
    const note: SOAPNote = {
      ...noteData,
      id: `SOAP-${Date.now()}`,
      timestamp: new Date().toISOString(),
      signed: false,
    };

    set((state) => ({
      soapNotes: [...state.soapNotes, note],
    }));

    get().logAudit('SOAP_NOTE_CREATED', 'soap_note', note.id, { encounterId: note.encounterId });
    return note;
  },

  signSOAPNote: (noteId) => {
    set((state) => ({
      soapNotes: state.soapNotes.map((n) =>
        n.id === noteId
          ? { ...n, signed: true, signedAt: new Date().toISOString() }
          : n
      ),
    }));

    get().logAudit('SOAP_NOTE_SIGNED', 'soap_note', noteId, {});
  },

  // Diagnosis
  addDiagnosis: (diagnosisData) => {
    const diagnosis: Diagnosis = {
      ...diagnosisData,
      id: `DX-${Date.now()}`,
      diagnosedAt: new Date().toISOString(),
    };

    set((state) => ({
      diagnoses: [...state.diagnoses, diagnosis],
    }));

    get().logAudit('DIAGNOSIS_ADDED', 'diagnosis', diagnosis.id, { code: diagnosis.code });
    return diagnosis;
  },

  // Orders
  createOrder: (orderData) => {
    const order: Order = {
      ...orderData,
      id: `ORD-${Date.now()}`,
      orderedAt: new Date().toISOString(),
      status: 'pending',
    };

    set((state) => ({
      orders: [...state.orders, order],
    }));

    // Create notification for receiving department
    const notification: Notification = {
      id: `NOT-${Date.now()}`,
      type: 'system',
      title: `New ${order.type} Order`,
      message: `${order.description} ordered for patient ${order.patientId}`,
      severity: order.priority === 'EMERGENCY' ? 'critical' : 'info',
      recipientId: `${order.type}-department`,
      relatedOrderId: order.id,
      relatedEncounterId: order.encounterId,
      isRead: false,
      createdAt: new Date().toISOString(),
    };

    set((state) => ({
      notifications: [...state.notifications, notification],
    }));

    get().logAudit('ORDER_CREATED', 'order', order.id, { type: order.type, description: order.description });
    return order;
  },

  applyQuickProtocol: (encounterId, patientId, protocolId) => {
    const protocol = get().quickProtocols.find((p) => p.id === protocolId);
    if (!protocol) return;

    // Add diagnosis
    get().addDiagnosis({
      encounterId,
      patientId,
      code: protocol.diagnosis.code,
      description: protocol.diagnosis.description,
      isPrimary: true,
      diagnosedBy: get().currentUser?.id || 'system',
    });

    // Create orders
    protocol.orders.forEach((orderTemplate) => {
      get().createOrder({
        encounterId,
        patientId,
        type: orderTemplate.type,
        description: orderTemplate.description,
        priority: 'ROUTINE',
        orderedBy: get().currentUser?.id || 'system',
      });
    });

    get().logAudit('QUICK_PROTOCOL_APPLIED', 'protocol', protocolId, { encounterId });
  },

  updateOrderStatus: (orderId, status) => {
    set((state) => ({
      orders: state.orders.map((o) =>
        o.id === orderId
          ? {
              ...o,
              status,
              completedAt: status === 'completed' ? new Date().toISOString() : o.completedAt,
              completedBy: status === 'completed' ? get().currentUser?.id : o.completedBy,
            }
          : o
      ),
    }));

    get().logAudit('ORDER_STATUS_UPDATED', 'order', orderId, { status });
  },

  // Lab & Radiology Results (Closed-Loop)
  submitOrderResult: (resultData) => {
    const result: OrderResult = {
      ...resultData,
      id: `RES-${Date.now()}`,
      completedAt: new Date().toISOString(),
    };

    set((state) => ({
      orderResults: [...state.orderResults, result],
    }));

    // Update order status
    get().updateOrderStatus(result.orderId, 'completed');

    // Create notification for ordering doctor
    const order = get().orders.find((o) => o.id === result.orderId);
    if (order) {
      const notification: Notification = {
        id: `NOT-${Date.now()}`,
        type: result.isCritical ? 'critical-result' : 'order-completed',
        title: result.isCritical ? '🚨 CRITICAL RESULT' : 'Result Available',
        message: `${order.description} result is ${result.isCritical ? 'CRITICAL' : 'ready'} for patient ${order.patientId}`,
        severity: result.isCritical ? 'critical' : 'info',
        recipientId: order.orderedBy,
        relatedOrderId: order.id,
        relatedEncounterId: order.encounterId,
        isRead: false,
        createdAt: new Date().toISOString(),
      };

      set((state) => ({
        notifications: [...state.notifications, notification],
      }));
    }

    get().logAudit('RESULT_SUBMITTED', 'result', result.id, { isCritical: result.isCritical });
  },

  acknowledgeCriticalResult: (resultId, acknowledgedBy) => {
    set((state) => ({
      orderResults: state.orderResults.map((r) =>
        r.id === resultId
          ? {
              ...r,
              criticalAcknowledgedBy: acknowledgedBy,
              criticalAcknowledgedAt: new Date().toISOString(),
            }
          : r
      ),
    }));

    get().logAudit('CRITICAL_RESULT_ACKNOWLEDGED', 'result', resultId, { acknowledgedBy });
  },

  // Pharmacy
  dispenseMedication: (orderId, dispensedBy, witnessName, witnessPIN) => {
    const order = get().orders.find((o) => o.id === orderId) as MedicationOrder;
    if (!order) return;

    // Decrease inventory
    const medication = get().inventory.find((i) => i.id === order.medicationId);
    if (medication) {
      get().updateInventoryStock(medication.id, -1, `Dispensed for order ${orderId}`);
    }

    // Mark order as completed
    set((state) => ({
      orders: state.orders.map((o) =>
        o.id === orderId
          ? {
              ...o,
              status: 'completed',
              dispensedBy,
              dispensedAt: new Date().toISOString(),
              witnessName,
              witnessPIN,
            }
          : o
      ),
    }));

    get().logAudit('MEDICATION_DISPENSED', 'order', orderId, {
      dispensedBy,
      witnessName,
      isControlled: order.isControlled,
    });
  },

  // Inventory
  updateInventoryStock: (itemId, quantity, reason) => {
    set((state) => ({
      inventory: state.inventory.map((i) =>
        i.id === itemId
          ? { ...i, currentStock: i.currentStock + quantity }
          : i
      ),
    }));

    get().logAudit('INVENTORY_UPDATED', 'inventory', itemId, { quantity, reason });
  },

  // Billing
  generateInvoice: (encounterId) => {
    const encounter = get().encounters.find((e) => e.id === encounterId);
    if (!encounter) return {} as Invoice;

    const orders = get().orders.filter((o) => o.encounterId === encounterId);
    const lineItems = orders.map((order, idx) => ({
      id: `LI-${Date.now()}-${idx}`,
      description: order.description,
      quantity: 1,
      unitPrice: 50, // Placeholder pricing
      totalPrice: 50,
      orderId: order.id,
    }));

    // Add consultation fee
    lineItems.unshift({
      id: `LI-${Date.now()}-consult`,
      description: 'Consultation Fee',
      quantity: 1,
      unitPrice: 100,
      totalPrice: 100,
    });

    const subtotal = lineItems.reduce((sum, item) => sum + item.totalPrice, 0);
    const tax = subtotal * 0.05; // 5% tax
    const total = subtotal + tax;

    const invoice: Invoice = {
      id: `INV-${Date.now()}`,
      encounterId,
      patientId: encounter.patientId,
      status: 'pending',
      lineItems,
      subtotal,
      tax,
      total,
      paidAmount: 0,
      createdAt: new Date().toISOString(),
    };

    set((state) => ({
      invoices: [...state.invoices, invoice],
    }));

    get().logAudit('INVOICE_GENERATED', 'invoice', invoice.id, { total });
    return invoice;
  },

  processPayment: (invoiceId, amount, method) => {
    set((state) => ({
      invoices: state.invoices.map((i) =>
        i.id === invoiceId
          ? {
              ...i,
              paidAmount: i.paidAmount + amount,
              status: i.paidAmount + amount >= i.total ? 'paid' : 'pending',
              paymentMethod: method,
              paidAt: i.paidAmount + amount >= i.total ? new Date().toISOString() : i.paidAt,
            }
          : i
      ),
    }));

    get().logAudit('PAYMENT_PROCESSED', 'invoice', invoiceId, { amount, method });
  },

  // Notifications
  markNotificationAsRead: (notificationId) => {
    set((state) => ({
      notifications: state.notifications.map((n) =>
        n.id === notificationId ? { ...n, isRead: true } : n
      ),
    }));
  },

  clearAllNotifications: () => {
    set({ notifications: [] });
  },

  // System
  setCurrentUser: (user) => {
    set({ currentUser: user });
    get().logAudit('USER_LOGIN', 'user', user.id, { role: user.role });
  },

  logAudit: (action, resourceType, resourceId, details) => {
    const log: AuditLog = {
      id: `AUD-${Date.now()}`,
      timestamp: new Date().toISOString(),
      actor: get().currentUser?.id || 'system',
      action,
      resourceType,
      resourceId,
      details,
    };

    set((state) => ({
      auditLogs: [...state.auditLogs, log],
    }));
  },
}));
