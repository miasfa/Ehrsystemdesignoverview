// Complete Type Definitions for Hospital-in-a-Box System
// Following the exact specification from data-model.ts

export type IdentityLevel = 'L0' | 'L2';
export type Gender = 'M' | 'F' | 'O';
export type EncounterStatus = 'active' | 'completed' | 'cancelled';
export type TriagePriority = 'ROUTINE' | 'URGENT' | 'EMERGENCY';
export type OrderStatus = 'pending' | 'in-progress' | 'completed' | 'cancelled';
export type OrderType = 'lab' | 'imaging' | 'medication' | 'procedure';
export type InvoiceStatus = 'draft' | 'pending' | 'paid' | 'cancelled';
export type PaymentMethod = 'cash' | 'insurance' | 'credit-card';

// Patient Registry
export interface Patient {
  id: string;
  name: string;
  dateOfBirth: string;
  gender: Gender;
  nationalId?: string;
  phone?: string;
  address?: string;
  identityLevel: IdentityLevel;
  biometricVerified: boolean;
  photoUrl?: string;
  registeredAt: string;
  registeredBy: string;
}

// Vitals & Early Warning Score
export interface Vitals {
  systolicBP: number;
  diastolicBP: number;
  heartRate: number;
  temperature: number;
  spO2: number;
  respiratoryRate: number;
  consciousness: 'alert' | 'verbal' | 'pain' | 'unresponsive';
}

export interface TriageEntry {
  id: string;
  patientId: string;
  encounterId: string;
  vitals: Vitals;
  chiefComplaint: string;
  earlyWarningScore: number; // Auto-calculated
  priority: TriagePriority; // Auto-set based on EWS
  timestamp: string;
  triageBy: string;
}

// Clinical Encounter
export interface Encounter {
  id: string;
  patientId: string;
  type: 'outpatient' | 'emergency' | 'inpatient';
  status: EncounterStatus;
  priority: TriagePriority;
  startTime: string;
  endTime?: string;
  assignedDoctorId: string;
  chiefComplaint: string;
  triageId?: string;
}

// SOAP Notes
export interface SOAPNote {
  id: string;
  encounterId: string;
  patientId: string;
  subjective: string;
  objective: string;
  assessment: string;
  plan: string;
  timestamp: string;
  createdBy: string;
  signed: boolean;
  signedAt?: string;
}

// Diagnosis
export interface Diagnosis {
  id: string;
  encounterId: string;
  patientId: string;
  code: string; // ICD-10 code
  description: string;
  isPrimary: boolean;
  diagnosedAt: string;
  diagnosedBy: string;
}

// Orders (Lab, Imaging, Meds, Procedures)
export interface Order {
  id: string;
  encounterId: string;
  patientId: string;
  type: OrderType;
  description: string;
  status: OrderStatus;
  priority: TriagePriority;
  orderedAt: string;
  orderedBy: string;
  completedAt?: string;
  completedBy?: string;
  result?: OrderResult;
  notes?: string;
}

// Order Results
export interface OrderResult {
  id: string;
  orderId: string;
  type: OrderType;
  values: Record<string, any>; // Flexible structure for lab values, imaging findings, etc.
  isCritical: boolean;
  criticalAcknowledgedBy?: string; // Required for critical results
  criticalAcknowledgedAt?: string;
  interpretation?: string;
  completedBy: string;
  completedAt: string;
}

// Medication Order (extends Order)
export interface MedicationOrder extends Order {
  type: 'medication';
  medicationId: string;
  dosage: string;
  frequency: string;
  duration: string;
  route: string;
  isControlled: boolean; // For dual signature requirement
  dispensedBy?: string;
  dispensedAt?: string;
  witnessName?: string; // For controlled substances
  witnessPIN?: string;
}

// Inventory Item
export interface InventoryItem {
  id: string;
  name: string;
  category: 'medication' | 'supply' | 'equipment';
  sku: string;
  currentStock: number;
  minimumStock: number;
  unitCost: number;
  isControlled: boolean;
  expiryDate?: string;
  lastRestocked?: string;
}

// Billing & Invoices
export interface InvoiceLineItem {
  id: string;
  description: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
  orderId?: string;
}

export interface Invoice {
  id: string;
  encounterId: string;
  patientId: string;
  status: InvoiceStatus;
  lineItems: InvoiceLineItem[];
  subtotal: number;
  tax: number;
  total: number;
  paidAmount: number;
  paymentMethod?: PaymentMethod;
  createdAt: string;
  paidAt?: string;
}

// Notifications (for closed-loop communication)
export interface Notification {
  id: string;
  type: 'critical-result' | 'order-completed' | 'queue-alert' | 'system';
  title: string;
  message: string;
  severity: 'info' | 'warning' | 'critical';
  recipientId: string; // User ID
  relatedEncounterId?: string;
  relatedOrderId?: string;
  isRead: boolean;
  createdAt: string;
}

// Audit Log
export interface AuditLog {
  id: string;
  timestamp: string;
  actor: string;
  action: string;
  resourceType: string;
  resourceId: string;
  details: Record<string, any>;
  ipAddress?: string;
}

// System Users
export type UserRole =
  | 'administrator'
  | 'doctor'
  | 'nurse'
  | 'pharmacist'
  | 'lab-technician'
  | 'radiologist'
  | 'receptionist'
  | 'auditor';

export interface SystemUser {
  id: string;
  name: string;
  role: UserRole;
  department: string;
  pin?: string;
  permissions: {
    viewDashboard: boolean;
    viewPatients: boolean;
    editPatients: boolean;
    viewTriage: boolean;
    editTriage: boolean;
    viewClinical: boolean;
    editClinical: boolean;
    viewOrders: boolean;
    createOrders: boolean;
    viewLab: boolean;
    editLab: boolean;
    viewRadiology: boolean;
    editRadiology: boolean;
    viewPharmacy: boolean;
    dispensePharmacy: boolean;
    viewBilling: boolean;
    editBilling: boolean;
    viewAudit: boolean;
    viewInventory: boolean;
    editInventory: boolean;
  };
}

// Quick Protocol (Pre-configured order sets)
export interface QuickProtocol {
  id: string;
  name: string;
  description: string;
  diagnosis: {
    code: string;
    description: string;
  };
  orders: {
    type: OrderType;
    description: string;
    medicationId?: string;
    dosage?: string;
    frequency?: string;
    duration?: string;
  }[];
}

// Complete Application State
export interface HospitalState {
  // Data
  patients: Patient[];
  encounters: Encounter[];
  triageQueue: TriageEntry[];
  soapNotes: SOAPNote[];
  diagnoses: Diagnosis[];
  orders: Order[];
  orderResults: OrderResult[];
  inventory: InventoryItem[];
  invoices: Invoice[];
  notifications: Notification[];
  auditLogs: AuditLog[];
  users: SystemUser[];
  quickProtocols: QuickProtocol[];

  // Current Session
  currentUser: SystemUser | null;
  isProvisioned: boolean;

  // Actions will be defined in the store
}
