// Mock Data for Avicenna EHR System Prototype

export interface Patient {
  id: string;
  nationalId: string;
  name: string;
  nameArabic: string;
  dateOfBirth: string;
  age: number;
  gender: 'male' | 'female';
  bloodType: string;
  phone: string;
  address: string;
  photo?: string;
  chronicConditions: string[];
  allergies: string[];
  registeredDate: string;
}

export interface TriageEntry {
  id: string;
  patientId: string;
  arrivalTime: string;
  chiefComplaint: string;
  esiLevel: 1 | 2 | 3 | 4 | 5;
  vitals: {
    bp: string;
    hr: number;
    temp: number;
    o2sat: number;
    pain: number;
  };
  status: 'waiting' | 'in-treatment' | 'completed';
  assignedBed?: string;
  triageNurse: string;
  waitTime: number; // minutes
}

export interface LabResult {
  id: string;
  patientId: string;
  encounterId: string;
  testType: string;
  orderedDate: string;
  completedDate?: string;
  status: 'pending' | 'in-progress' | 'completed';
  orderedBy: string;
  results?: {
    parameter: string;
    value: string;
    unit: string;
    normalRange: string;
    flag?: 'high' | 'low' | 'critical';
  }[];
}

export interface Imaging {
  id: string;
  patientId: string;
  encounterId: string;
  type: 'X-Ray' | 'CT' | 'MRI' | 'Ultrasound';
  bodyPart: string;
  orderedDate: string;
  completedDate?: string;
  status: 'pending' | 'completed';
  orderedBy: string;
  radiologist?: string;
  findings?: string;
  imageUrl?: string;
}

export interface Medication {
  id: string;
  patientId: string;
  encounterId: string;
  name: string;
  dosage: string;
  frequency: string;
  route: string;
  orderedDate: string;
  orderedBy: string;
  dispensedDate?: string;
  dispensedBy?: string;
  status: 'pending' | 'dispensed' | 'administered';
  quantity: number;
}

export interface ORSchedule {
  id: string;
  patientId: string;
  procedure: string;
  scheduledDate: string;
  scheduledTime: string;
  surgeon: string;
  anesthesiologist: string;
  room: string;
  duration: number; // minutes
  status: 'scheduled' | 'in-progress' | 'completed' | 'cancelled';
}

export interface AuditLog {
  id: string;
  timestamp: string;
  userId: string;
  userName: string;
  action: string;
  resourceType: string;
  resourceId: string;
  details: string;
  ipAddress: string;
}

export interface ClinicalNote {
  id: string;
  patientId: string;
  encounterId: string;
  type: 'progress' | 'admission' | 'discharge' | 'consult' | 'procedure';
  date: string;
  author: string;
  authorRole: string;
  title: string;
  subjective?: string;
  objective?: string;
  assessment?: string;
  plan?: string;
  content: string;
  signed: boolean;
  signedAt?: string;
}

export interface Order {
  id: string;
  patientId: string;
  encounterId: string;
  type: 'lab' | 'imaging' | 'medication' | 'procedure' | 'consult';
  description: string;
  orderedBy: string;
  orderedDate: string;
  priority: 'routine' | 'urgent' | 'stat';
  status: 'pending' | 'in-progress' | 'completed' | 'cancelled';
  linkedResourceId?: string;
}

export interface InventoryItem {
  id: string;
  category: 'medication' | 'supply' | 'equipment';
  name: string;
  sku: string;
  currentStock: number;
  minimumStock: number;
  unit: string;
  location: string;
  expiryDate?: string;
  batchNumber?: string;
  costPerUnit: number;
  supplier: string;
  lastRestocked: string;
  status: 'in-stock' | 'low-stock' | 'out-of-stock' | 'expired';
}

export interface StockMovement {
  id: string;
  itemId: string;
  type: 'received' | 'dispensed' | 'transferred' | 'expired' | 'adjusted';
  quantity: number;
  fromLocation?: string;
  toLocation?: string;
  performedBy: string;
  performedAt: string;
  reason: string;
  patientId?: string;
  orderId?: string;
}

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
  avatar?: string;
  permissions: {
    viewDashboard: boolean;
    viewPatients: boolean;
    editPatients: boolean;
    viewTriage: boolean;
    editTriage: boolean;
    viewClinicalDoc: boolean;
    editClinicalDoc: boolean;
    viewOrders: boolean;
    createOrders: boolean;
    viewLab: boolean;
    editLab: boolean;
    viewPharmacy: boolean;
    dispenseMedication: boolean;
    viewImaging: boolean;
    editImaging: boolean;
    viewInventory: boolean;
    editInventory: boolean;
    viewORSchedule: boolean;
    editORSchedule: boolean;
    viewAudit: boolean;
  };
}

export const mockSystemUsers: SystemUser[] = [
  {
    id: 'USR-001',
    name: 'Dr. Karim Al-Baghdadi',
    role: 'doctor',
    department: 'Emergency Medicine',
    permissions: {
      viewDashboard: true,
      viewPatients: true,
      editPatients: true,
      viewTriage: true,
      editTriage: true,
      viewClinicalDoc: true,
      editClinicalDoc: true,
      viewOrders: true,
      createOrders: true,
      viewLab: true,
      editLab: false,
      viewPharmacy: true,
      dispenseMedication: false,
      viewImaging: true,
      editImaging: false,
      viewInventory: true,
      editInventory: false,
      viewORSchedule: true,
      editORSchedule: false,
      viewAudit: false,
    },
  },
  {
    id: 'USR-002',
    name: 'Nurse Fatima Hassan',
    role: 'nurse',
    department: 'Emergency Department',
    permissions: {
      viewDashboard: true,
      viewPatients: true,
      editPatients: false,
      viewTriage: true,
      editTriage: true,
      viewClinicalDoc: true,
      editClinicalDoc: false,
      viewOrders: true,
      createOrders: false,
      viewLab: true,
      editLab: false,
      viewPharmacy: true,
      dispenseMedication: true,
      viewImaging: true,
      editImaging: false,
      viewInventory: true,
      editInventory: false,
      viewORSchedule: true,
      editORSchedule: false,
      viewAudit: false,
    },
  },
  {
    id: 'USR-003',
    name: 'Pharmacist Ahmed Rashid',
    role: 'pharmacist',
    department: 'Pharmacy',
    permissions: {
      viewDashboard: false,
      viewPatients: true,
      editPatients: false,
      viewTriage: false,
      editTriage: false,
      viewClinicalDoc: false,
      editClinicalDoc: false,
      viewOrders: true,
      createOrders: false,
      viewLab: false,
      editLab: false,
      viewPharmacy: true,
      dispenseMedication: true,
      viewImaging: false,
      editImaging: false,
      viewInventory: true,
      editInventory: true,
      viewORSchedule: false,
      editORSchedule: false,
      viewAudit: false,
    },
  },
  {
    id: 'USR-004',
    name: 'Lab Tech Omar Ibrahim',
    role: 'lab-technician',
    department: 'Laboratory',
    permissions: {
      viewDashboard: false,
      viewPatients: true,
      editPatients: false,
      viewTriage: false,
      editTriage: false,
      viewClinicalDoc: false,
      editClinicalDoc: false,
      viewOrders: true,
      createOrders: false,
      viewLab: true,
      editLab: true,
      viewPharmacy: false,
      dispenseMedication: false,
      viewImaging: false,
      editImaging: false,
      viewInventory: false,
      editInventory: false,
      viewORSchedule: false,
      editORSchedule: false,
      viewAudit: false,
    },
  },
  {
    id: 'USR-005',
    name: 'Dr. Sara Al-Najjar',
    role: 'radiologist',
    department: 'Radiology',
    permissions: {
      viewDashboard: false,
      viewPatients: true,
      editPatients: false,
      viewTriage: false,
      editTriage: false,
      viewClinicalDoc: true,
      editClinicalDoc: false,
      viewOrders: true,
      createOrders: false,
      viewLab: false,
      editLab: false,
      viewPharmacy: false,
      dispenseMedication: false,
      viewImaging: true,
      editImaging: true,
      viewInventory: false,
      editInventory: false,
      viewORSchedule: false,
      editORSchedule: false,
      viewAudit: false,
    },
  },
  {
    id: 'USR-006',
    name: 'Receptionist Layla Mohammed',
    role: 'receptionist',
    department: 'Front Desk',
    permissions: {
      viewDashboard: true,
      viewPatients: true,
      editPatients: true,
      viewTriage: true,
      editTriage: true,
      viewClinicalDoc: false,
      editClinicalDoc: false,
      viewOrders: false,
      createOrders: false,
      viewLab: false,
      editLab: false,
      viewPharmacy: false,
      dispenseMedication: false,
      viewImaging: false,
      editImaging: false,
      viewInventory: false,
      editInventory: false,
      viewORSchedule: true,
      editORSchedule: false,
      viewAudit: false,
    },
  },
  {
    id: 'USR-007',
    name: 'Admin Hassan Ali',
    role: 'administrator',
    department: 'IT & Administration',
    permissions: {
      viewDashboard: true,
      viewPatients: true,
      editPatients: true,
      viewTriage: true,
      editTriage: true,
      viewClinicalDoc: true,
      editClinicalDoc: true,
      viewOrders: true,
      createOrders: true,
      viewLab: true,
      editLab: true,
      viewPharmacy: true,
      dispenseMedication: true,
      viewImaging: true,
      editImaging: true,
      viewInventory: true,
      editInventory: true,
      viewORSchedule: true,
      editORSchedule: true,
      viewAudit: true,
    },
  },
  {
    id: 'USR-008',
    name: 'Auditor Noor Khalid',
    role: 'auditor',
    department: 'Compliance & Audit',
    permissions: {
      viewDashboard: true,
      viewPatients: true,
      editPatients: false,
      viewTriage: true,
      editTriage: false,
      viewClinicalDoc: true,
      editClinicalDoc: false,
      viewOrders: true,
      createOrders: false,
      viewLab: true,
      editLab: false,
      viewPharmacy: true,
      dispenseMedication: false,
      viewImaging: true,
      editImaging: false,
      viewInventory: true,
      editInventory: false,
      viewORSchedule: true,
      editORSchedule: false,
      viewAudit: true,
    },
  },
];

export interface Encounter {
  id: string;
  patientId: string;
  type: 'emergency' | 'outpatient' | 'inpatient';
  admissionDate: string;
  dischargeDate?: string;
  chiefComplaint: string;
  diagnosis?: string;
  attendingPhysician: string;
  status: 'active' | 'discharged';
}

// Mock Patients
export const mockPatients: Patient[] = [
  {
    id: 'PAT-001',
    nationalId: '197503251234',
    name: 'Ahmed Hassan Mohammed',
    nameArabic: 'أحمد حسن محمد',
    dateOfBirth: '1975-03-25',
    age: 49,
    gender: 'male',
    bloodType: 'O+',
    phone: '+964 770 123 4567',
    address: 'Al-Karrada District, Baghdad',
    chronicConditions: ['Diabetes Type 2', 'Hypertension'],
    allergies: ['Penicillin'],
    registeredDate: '2024-01-15',
  },
  {
    id: 'PAT-002',
    nationalId: '198806152345',
    name: 'Fatima Ali Hussein',
    nameArabic: 'فاطمة علي حسين',
    dateOfBirth: '1988-06-15',
    age: 36,
    gender: 'female',
    bloodType: 'A+',
    phone: '+964 750 234 5678',
    address: 'Mansour District, Baghdad',
    chronicConditions: [],
    allergies: ['Sulfa drugs'],
    registeredDate: '2024-02-20',
  },
  {
    id: 'PAT-003',
    nationalId: '200112083456',
    name: 'Omar Khalid Rashid',
    nameArabic: 'عمر خالد رشيد',
    dateOfBirth: '2001-12-08',
    age: 23,
    gender: 'male',
    bloodType: 'B+',
    phone: '+964 780 345 6789',
    address: 'Adhamiya District, Baghdad',
    chronicConditions: ['Asthma'],
    allergies: [],
    registeredDate: '2024-03-01',
  },
  {
    id: 'PAT-004',
    nationalId: '195807201567',
    name: 'Zainab Mohammed Karim',
    nameArabic: 'زينب محمد كريم',
    dateOfBirth: '1958-07-20',
    age: 66,
    gender: 'female',
    bloodType: 'AB+',
    phone: '+964 760 456 7890',
    address: 'Kadhimiya District, Baghdad',
    chronicConditions: ['Heart Disease', 'Chronic Kidney Disease'],
    allergies: ['NSAIDs'],
    registeredDate: '2023-11-10',
  },
  {
    id: 'PAT-005',
    nationalId: '199203141678',
    name: 'Hassan Ibrahim Ali',
    nameArabic: 'حسن إبراهيم علي',
    dateOfBirth: '1992-03-14',
    age: 32,
    gender: 'male',
    bloodType: 'O-',
    phone: '+964 770 567 8901',
    address: 'Sadr City, Baghdad',
    chronicConditions: [],
    allergies: [],
    registeredDate: '2024-03-04',
  },
];

// Mock Triage Queue
export const mockTriageQueue: TriageEntry[] = [
  {
    id: 'TRI-001',
    patientId: 'PAT-001',
    arrivalTime: new Date(Date.now() - 25 * 60000).toISOString(),
    chiefComplaint: 'Severe chest pain, shortness of breath',
    esiLevel: 2,
    vitals: {
      bp: '165/95',
      hr: 105,
      temp: 37.2,
      o2sat: 92,
      pain: 8,
    },
    status: 'in-treatment',
    assignedBed: 'Acute-3',
    triageNurse: 'Nurse Layla Ahmed',
    waitTime: 8,
  },
  {
    id: 'TRI-002',
    patientId: 'PAT-003',
    arrivalTime: new Date(Date.now() - 45 * 60000).toISOString(),
    chiefComplaint: 'Severe asthma attack, difficulty breathing',
    esiLevel: 2,
    vitals: {
      bp: '130/80',
      hr: 118,
      temp: 37.0,
      o2sat: 88,
      pain: 6,
    },
    status: 'waiting',
    triageNurse: 'Nurse Sara Mohammed',
    waitTime: 45,
  },
  {
    id: 'TRI-003',
    patientId: 'PAT-002',
    arrivalTime: new Date(Date.now() - 62 * 60000).toISOString(),
    chiefComplaint: 'Severe abdominal pain, vomiting',
    esiLevel: 3,
    vitals: {
      bp: '125/78',
      hr: 88,
      temp: 38.1,
      o2sat: 97,
      pain: 7,
    },
    status: 'waiting',
    triageNurse: 'Nurse Layla Ahmed',
    waitTime: 62,
  },
  {
    id: 'TRI-004',
    patientId: 'PAT-005',
    arrivalTime: new Date(Date.now() - 15 * 60000).toISOString(),
    chiefComplaint: 'Minor cut on hand, needs stitches',
    esiLevel: 4,
    vitals: {
      bp: '120/75',
      hr: 72,
      temp: 36.8,
      o2sat: 99,
      pain: 3,
    },
    status: 'waiting',
    triageNurse: 'Nurse Sara Mohammed',
    waitTime: 15,
  },
];

// Mock Lab Results
export const mockLabResults: LabResult[] = [
  {
    id: 'LAB-001',
    patientId: 'PAT-001',
    encounterId: 'ENC-001',
    testType: 'Complete Blood Count (CBC)',
    orderedDate: new Date(Date.now() - 120 * 60000).toISOString(),
    completedDate: new Date(Date.now() - 45 * 60000).toISOString(),
    status: 'completed',
    orderedBy: 'Dr. Mustafa Al-Hashimi',
    results: [
      { parameter: 'WBC', value: '12.5', unit: '10³/µL', normalRange: '4.5-11.0', flag: 'high' },
      { parameter: 'RBC', value: '4.8', unit: '10⁶/µL', normalRange: '4.5-5.9' },
      { parameter: 'Hemoglobin', value: '14.2', unit: 'g/dL', normalRange: '13.5-17.5' },
      { parameter: 'Platelets', value: '245', unit: '10³/µL', normalRange: '150-400' },
    ],
  },
  {
    id: 'LAB-002',
    patientId: 'PAT-001',
    encounterId: 'ENC-001',
    testType: 'Cardiac Enzymes (Troponin)',
    orderedDate: new Date(Date.now() - 90 * 60000).toISOString(),
    completedDate: new Date(Date.now() - 30 * 60000).toISOString(),
    status: 'completed',
    orderedBy: 'Dr. Mustafa Al-Hashimi',
    results: [
      { parameter: 'Troponin I', value: '2.8', unit: 'ng/mL', normalRange: '<0.04', flag: 'critical' },
      { parameter: 'CK-MB', value: '45', unit: 'ng/mL', normalRange: '<5', flag: 'high' },
    ],
  },
  {
    id: 'LAB-003',
    patientId: 'PAT-002',
    encounterId: 'ENC-003',
    testType: 'Comprehensive Metabolic Panel',
    orderedDate: new Date(Date.now() - 60 * 60000).toISOString(),
    status: 'in-progress',
    orderedBy: 'Dr. Noor Al-Bayati',
  },
  {
    id: 'LAB-004',
    patientId: 'PAT-004',
    encounterId: 'ENC-004',
    testType: 'Kidney Function Tests',
    orderedDate: new Date(Date.now() - 180 * 60000).toISOString(),
    completedDate: new Date(Date.now() - 90 * 60000).toISOString(),
    status: 'completed',
    orderedBy: 'Dr. Ali Hassan',
    results: [
      { parameter: 'Creatinine', value: '2.8', unit: 'mg/dL', normalRange: '0.7-1.3', flag: 'high' },
      { parameter: 'BUN', value: '42', unit: 'mg/dL', normalRange: '7-20', flag: 'high' },
      { parameter: 'eGFR', value: '28', unit: 'mL/min', normalRange: '>60', flag: 'critical' },
    ],
  },
];

// Mock Imaging
export const mockImaging: Imaging[] = [
  {
    id: 'IMG-001',
    patientId: 'PAT-001',
    encounterId: 'ENC-001',
    type: 'X-Ray',
    bodyPart: 'Chest',
    orderedDate: new Date(Date.now() - 90 * 60000).toISOString(),
    completedDate: new Date(Date.now() - 40 * 60000).toISOString(),
    status: 'completed',
    orderedBy: 'Dr. Mustafa Al-Hashimi',
    radiologist: 'Dr. Salma Ibrahim',
    findings: 'Mild cardiomegaly noted. No acute infiltrates or effusions. Recommend follow-up cardiac evaluation.',
    imageUrl: 'chest-xray-1',
  },
  {
    id: 'IMG-002',
    patientId: 'PAT-003',
    encounterId: 'ENC-002',
    type: 'X-Ray',
    bodyPart: 'Chest',
    orderedDate: new Date(Date.now() - 45 * 60000).toISOString(),
    status: 'pending',
    orderedBy: 'Dr. Noor Al-Bayati',
  },
  {
    id: 'IMG-003',
    patientId: 'PAT-002',
    encounterId: 'ENC-003',
    type: 'Ultrasound',
    bodyPart: 'Abdomen',
    orderedDate: new Date(Date.now() - 75 * 60000).toISOString(),
    completedDate: new Date(Date.now() - 20 * 60000).toISOString(),
    status: 'completed',
    orderedBy: 'Dr. Noor Al-Bayati',
    radiologist: 'Dr. Karim Yousef',
    findings: 'Gallbladder shows multiple small stones. No evidence of acute cholecystitis. Liver and kidneys appear normal.',
  },
  {
    id: 'IMG-004',
    patientId: 'PAT-005',
    encounterId: 'ENC-005',
    type: 'X-Ray',
    bodyPart: 'Hand (Left)',
    orderedDate: new Date(Date.now() - 20 * 60000).toISOString(),
    status: 'pending',
    orderedBy: 'Dr. Ali Hassan',
  },
];

// Mock Medications
export const mockMedications: Medication[] = [
  {
    id: 'MED-001',
    patientId: 'PAT-001',
    encounterId: 'ENC-001',
    name: 'Aspirin',
    dosage: '325 mg',
    frequency: 'Once (STAT)',
    route: 'Oral',
    orderedDate: new Date(Date.now() - 85 * 60000).toISOString(),
    orderedBy: 'Dr. Mustafa Al-Hashimi',
    dispensedDate: new Date(Date.now() - 80 * 60000).toISOString(),
    dispensedBy: 'Pharmacist Omar Khalil',
    status: 'administered',
    quantity: 1,
  },
  {
    id: 'MED-002',
    patientId: 'PAT-001',
    encounterId: 'ENC-001',
    name: 'Nitroglycerin',
    dosage: '0.4 mg',
    frequency: 'Sublingual PRN for chest pain',
    route: 'Sublingual',
    orderedDate: new Date(Date.now() - 85 * 60000).toISOString(),
    orderedBy: 'Dr. Mustafa Al-Hashimi',
    dispensedDate: new Date(Date.now() - 80 * 60000).toISOString(),
    dispensedBy: 'Pharmacist Omar Khalil',
    status: 'administered',
    quantity: 3,
  },
  {
    id: 'MED-003',
    patientId: 'PAT-003',
    encounterId: 'ENC-002',
    name: 'Albuterol Inhaler',
    dosage: '2 puffs',
    frequency: 'Every 4 hours',
    route: 'Inhalation',
    orderedDate: new Date(Date.now() - 50 * 60000).toISOString(),
    orderedBy: 'Dr. Noor Al-Bayati',
    status: 'pending',
    quantity: 1,
  },
  {
    id: 'MED-004',
    patientId: 'PAT-002',
    encounterId: 'ENC-003',
    name: 'Ondansetron',
    dosage: '4 mg',
    frequency: 'Every 8 hours',
    route: 'IV',
    orderedDate: new Date(Date.now() - 70 * 60000).toISOString(),
    orderedBy: 'Dr. Noor Al-Bayati',
    dispensedDate: new Date(Date.now() - 65 * 60000).toISOString(),
    dispensedBy: 'Pharmacist Omar Khalil',
    status: 'dispensed',
    quantity: 3,
  },
];

// Mock OR Schedule
export const mockORSchedule: ORSchedule[] = [
  {
    id: 'OR-001',
    patientId: 'PAT-002',
    procedure: 'Laparoscopic Cholecystectomy',
    scheduledDate: new Date(Date.now() + 24 * 60 * 60000).toISOString().split('T')[0],
    scheduledTime: '09:00',
    surgeon: 'Dr. Mustafa Al-Hashimi',
    anesthesiologist: 'Dr. Reem Sadiq',
    room: 'OR-1',
    duration: 120,
    status: 'scheduled',
  },
  {
    id: 'OR-002',
    patientId: 'PAT-004',
    procedure: 'Cardiac Catheterization',
    scheduledDate: new Date().toISOString().split('T')[0],
    scheduledTime: '14:00',
    surgeon: 'Dr. Ali Hassan',
    anesthesiologist: 'Dr. Yasmin Omar',
    room: 'OR-2',
    duration: 90,
    status: 'in-progress',
  },
];

// Mock Encounters
export const mockEncounters: Encounter[] = [
  {
    id: 'ENC-001',
    patientId: 'PAT-001',
    type: 'emergency',
    admissionDate: new Date(Date.now() - 120 * 60000).toISOString(),
    chiefComplaint: 'Chest pain',
    diagnosis: 'Acute Myocardial Infarction (STEMI)',
    attendingPhysician: 'Dr. Mustafa Al-Hashimi',
    status: 'active',
  },
  {
    id: 'ENC-002',
    patientId: 'PAT-003',
    type: 'emergency',
    admissionDate: new Date(Date.now() - 60 * 60000).toISOString(),
    chiefComplaint: 'Severe asthma attack',
    attendingPhysician: 'Dr. Noor Al-Bayati',
    status: 'active',
  },
  {
    id: 'ENC-003',
    patientId: 'PAT-002',
    type: 'emergency',
    admissionDate: new Date(Date.now() - 80 * 60000).toISOString(),
    chiefComplaint: 'Abdominal pain',
    diagnosis: 'Acute Cholecystitis',
    attendingPhysician: 'Dr. Noor Al-Bayati',
    status: 'active',
  },
  {
    id: 'ENC-004',
    patientId: 'PAT-004',
    type: 'inpatient',
    admissionDate: new Date(Date.now() - 5 * 24 * 60 * 60000).toISOString(),
    chiefComplaint: 'Worsening kidney function',
    diagnosis: 'Chronic Kidney Disease Stage 4',
    attendingPhysician: 'Dr. Ali Hassan',
    status: 'active',
  },
  {
    id: 'ENC-005',
    patientId: 'PAT-005',
    type: 'emergency',
    admissionDate: new Date(Date.now() - 30 * 60000).toISOString(),
    chiefComplaint: 'Hand laceration',
    attendingPhysician: 'Dr. Ali Hassan',
    status: 'active',
  },
];

// Mock Audit Logs
export const mockAuditLogs: AuditLog[] = [
  {
    id: 'AUD-001',
    timestamp: new Date(Date.now() - 5 * 60000).toISOString(),
    userId: 'USR-015',
    userName: 'Pharmacist Omar Khalil',
    action: 'DISPENSE_MEDICATION',
    resourceType: 'Medication',
    resourceId: 'MED-004',
    details: 'Dispensed Ondansetron 4mg to PAT-002',
    ipAddress: '192.168.1.45',
  },
  {
    id: 'AUD-002',
    timestamp: new Date(Date.now() - 12 * 60000).toISOString(),
    userId: 'USR-008',
    userName: 'Dr. Salma Ibrahim',
    action: 'VIEW_PATIENT_RECORD',
    resourceType: 'Patient',
    resourceId: 'PAT-001',
    details: 'Viewed complete medical record',
    ipAddress: '192.168.1.28',
  },
  {
    id: 'AUD-003',
    timestamp: new Date(Date.now() - 18 * 60000).toISOString(),
    userId: 'USR-003',
    userName: 'Nurse Layla Ahmed',
    action: 'UPDATE_TRIAGE',
    resourceType: 'Triage',
    resourceId: 'TRI-001',
    details: 'Updated patient status to in-treatment, assigned bed Acute-3',
    ipAddress: '192.168.1.12',
  },
  {
    id: 'AUD-004',
    timestamp: new Date(Date.now() - 25 * 60000).toISOString(),
    userId: 'USR-001',
    userName: 'Dr. Mustafa Al-Hashimi',
    action: 'ORDER_LAB_TEST',
    resourceType: 'LabOrder',
    resourceId: 'LAB-002',
    details: 'Ordered Cardiac Enzymes (Troponin) for PAT-001',
    ipAddress: '192.168.1.22',
  },
  {
    id: 'AUD-005',
    timestamp: new Date(Date.now() - 32 * 60000).toISOString(),
    userId: 'USR-020',
    userName: 'Lab Tech Ahmed Nasser',
    action: 'COMPLETE_LAB_TEST',
    resourceType: 'LabResult',
    resourceId: 'LAB-001',
    details: 'Completed CBC test for PAT-001',
    ipAddress: '192.168.1.55',
  },
  {
    id: 'AUD-006',
    timestamp: new Date(Date.now() - 40 * 60000).toISOString(),
    userId: 'USR-012',
    userName: 'Radiology Tech Sara Karim',
    action: 'UPLOAD_IMAGING',
    resourceType: 'Imaging',
    resourceId: 'IMG-001',
    details: 'Uploaded chest X-ray for PAT-001',
    ipAddress: '192.168.1.67',
  },
  {
    id: 'AUD-007',
    timestamp: new Date(Date.now() - 48 * 60000).toISOString(),
    userId: 'USR-004',
    userName: 'Nurse Sara Mohammed',
    action: 'CREATE_TRIAGE',
    resourceType: 'Triage',
    resourceId: 'TRI-003',
    details: 'Created triage entry for PAT-002, ESI Level 3',
    ipAddress: '192.168.1.14',
  },
];

// Mock Clinical Notes
export const mockClinicalNotes: ClinicalNote[] = [
  {
    id: 'CLN-001',
    patientId: 'PAT-001',
    encounterId: 'ENC-001',
    type: 'admission',
    date: new Date(Date.now() - 120 * 60000).toISOString(),
    author: 'Dr. Mustafa Al-Hashimi',
    authorRole: 'Attending Physician',
    title: 'Admission Note',
    subjective: 'Patient presents with severe chest pain and shortness of breath.',
    objective: 'Vitals: BP 165/95, HR 105, Temp 37.2°C, O2Sat 92%, Pain 8/10.',
    assessment: 'Acute Myocardial Infarction (STEMI) suspected.',
    plan: 'Initiate cardiac care protocol, order Cardiac Enzymes (Troponin) and CBC.',
    content: 'Patient presents with severe chest pain and shortness of breath. Vitals: BP 165/95, HR 105, Temp 37.2°C, O2Sat 92%, Pain 8/10. Acute Myocardial Infarction (STEMI) suspected. Initiate cardiac care protocol, order Cardiac Enzymes (Troponin) and CBC.',
    signed: true,
    signedAt: new Date(Date.now() - 110 * 60000).toISOString(),
  },
  {
    id: 'CLN-002',
    patientId: 'PAT-003',
    encounterId: 'ENC-002',
    type: 'admission',
    date: new Date(Date.now() - 60 * 60000).toISOString(),
    author: 'Dr. Noor Al-Bayati',
    authorRole: 'Attending Physician',
    title: 'Admission Note',
    subjective: 'Patient presents with severe asthma attack and difficulty breathing.',
    objective: 'Vitals: BP 130/80, HR 118, Temp 37.0°C, O2Sat 88%, Pain 6/10.',
    assessment: 'Severe asthma attack.',
    plan: 'Administer Albuterol Inhaler, monitor vitals, and consider hospitalization.',
    content: 'Patient presents with severe asthma attack and difficulty breathing. Vitals: BP 130/80, HR 118, Temp 37.0°C, O2Sat 88%, Pain 6/10. Severe asthma attack. Administer Albuterol Inhaler, monitor vitals, and consider hospitalization.',
    signed: true,
    signedAt: new Date(Date.now() - 50 * 60000).toISOString(),
  },
  {
    id: 'CLN-003',
    patientId: 'PAT-002',
    encounterId: 'ENC-003',
    type: 'admission',
    date: new Date(Date.now() - 80 * 60000).toISOString(),
    author: 'Dr. Noor Al-Bayati',
    authorRole: 'Attending Physician',
    title: 'Admission Note',
    subjective: 'Patient presents with severe abdominal pain and vomiting.',
    objective: 'Vitals: BP 125/78, HR 88, Temp 38.1°C, O2Sat 97%, Pain 7/10.',
    assessment: 'Acute Cholecystitis suspected.',
    plan: 'Order Ultrasound of abdomen, consider surgical intervention.',
    content: 'Patient presents with severe abdominal pain and vomiting. Vitals: BP 125/78, HR 88, Temp 38.1°C, O2Sat 97%, Pain 7/10. Acute Cholecystitis suspected. Order Ultrasound of abdomen, consider surgical intervention.',
    signed: true,
    signedAt: new Date(Date.now() - 70 * 60000).toISOString(),
  },
  {
    id: 'CLN-004',
    patientId: 'PAT-004',
    encounterId: 'ENC-004',
    type: 'admission',
    date: new Date(Date.now() - 5 * 24 * 60 * 60000).toISOString(),
    author: 'Dr. Ali Hassan',
    authorRole: 'Attending Physician',
    title: 'Admission Note',
    subjective: 'Patient presents with worsening kidney function.',
    objective: 'Vitals: BP 120/75, HR 72, Temp 36.8°C, O2Sat 99%, Pain 3/10.',
    assessment: 'Chronic Kidney Disease Stage 4.',
    plan: 'Initiate dialysis, monitor kidney function tests.',
    content: 'Patient presents with worsening kidney function. Vitals: BP 120/75, HR 72, Temp 36.8°C, O2Sat 99%, Pain 3/10. Chronic Kidney Disease Stage 4. Initiate dialysis, monitor kidney function tests.',
    signed: true,
    signedAt: new Date(Date.now() - 4 * 24 * 60 * 60000).toISOString(),
  },
  {
    id: 'CLN-005',
    patientId: 'PAT-005',
    encounterId: 'ENC-005',
    type: 'admission',
    date: new Date(Date.now() - 30 * 60000).toISOString(),
    author: 'Dr. Ali Hassan',
    authorRole: 'Attending Physician',
    title: 'Admission Note',
    subjective: 'Patient presents with a minor cut on hand needing stitches.',
    objective: 'Vitals: BP 120/75, HR 72, Temp 36.8°C, O2Sat 99%, Pain 3/10.',
    assessment: 'Minor laceration.',
    plan: 'Clean wound, administer local anesthesia, apply sutures.',
    content: 'Patient presents with a minor cut on hand needing stitches. Vitals: BP 120/75, HR 72, Temp 36.8°C, O2Sat 99%, Pain 3/10. Minor laceration. Clean wound, administer local anesthesia, apply sutures.',
    signed: true,
    signedAt: new Date(Date.now() - 20 * 60000).toISOString(),
  },
];

// Mock Orders
export const mockOrders: Order[] = [
  {
    id: 'ORD-001',
    patientId: 'PAT-001',
    encounterId: 'ENC-001',
    type: 'lab',
    description: 'Cardiac Enzymes (Troponin)',
    orderedBy: 'Dr. Mustafa Al-Hashimi',
    orderedDate: new Date(Date.now() - 90 * 60000).toISOString(),
    priority: 'stat',
    status: 'completed',
    linkedResourceId: 'LAB-002',
  },
  {
    id: 'ORD-002',
    patientId: 'PAT-001',
    encounterId: 'ENC-001',
    type: 'lab',
    description: 'Complete Blood Count (CBC)',
    orderedBy: 'Dr. Mustafa Al-Hashimi',
    orderedDate: new Date(Date.now() - 120 * 60000).toISOString(),
    priority: 'routine',
    status: 'completed',
    linkedResourceId: 'LAB-001',
  },
  {
    id: 'ORD-003',
    patientId: 'PAT-002',
    encounterId: 'ENC-003',
    type: 'lab',
    description: 'Comprehensive Metabolic Panel',
    orderedBy: 'Dr. Noor Al-Bayati',
    orderedDate: new Date(Date.now() - 60 * 60000).toISOString(),
    priority: 'routine',
    status: 'in-progress',
    linkedResourceId: 'LAB-003',
  },
  {
    id: 'ORD-004',
    patientId: 'PAT-004',
    encounterId: 'ENC-004',
    type: 'lab',
    description: 'Kidney Function Tests',
    orderedBy: 'Dr. Ali Hassan',
    orderedDate: new Date(Date.now() - 180 * 60000).toISOString(),
    priority: 'routine',
    status: 'completed',
    linkedResourceId: 'LAB-004',
  },
  {
    id: 'ORD-005',
    patientId: 'PAT-001',
    encounterId: 'ENC-001',
    type: 'medication',
    description: 'Aspirin 325 mg',
    orderedBy: 'Dr. Mustafa Al-Hashimi',
    orderedDate: new Date(Date.now() - 85 * 60000).toISOString(),
    priority: 'stat',
    status: 'administered',
    linkedResourceId: 'MED-001',
  },
  {
    id: 'ORD-006',
    patientId: 'PAT-001',
    encounterId: 'ENC-001',
    type: 'medication',
    description: 'Nitroglycerin 0.4 mg',
    orderedBy: 'Dr. Mustafa Al-Hashimi',
    orderedDate: new Date(Date.now() - 85 * 60000).toISOString(),
    priority: 'stat',
    status: 'administered',
    linkedResourceId: 'MED-002',
  },
  {
    id: 'ORD-007',
    patientId: 'PAT-003',
    encounterId: 'ENC-002',
    type: 'medication',
    description: 'Albuterol Inhaler 2 puffs',
    orderedBy: 'Dr. Noor Al-Bayati',
    orderedDate: new Date(Date.now() - 50 * 60000).toISOString(),
    priority: 'urgent',
    status: 'pending',
    linkedResourceId: 'MED-003',
  },
  {
    id: 'ORD-008',
    patientId: 'PAT-002',
    encounterId: 'ENC-003',
    type: 'medication',
    description: 'Ondansetron 4 mg',
    orderedBy: 'Dr. Noor Al-Bayati',
    orderedDate: new Date(Date.now() - 70 * 60000).toISOString(),
    priority: 'routine',
    status: 'dispensed',
    linkedResourceId: 'MED-004',
  },
  {
    id: 'ORD-009',
    patientId: 'PAT-002',
    encounterId: 'ENC-003',
    type: 'procedure',
    description: 'Laparoscopic Cholecystectomy',
    orderedBy: 'Dr. Mustafa Al-Hashimi',
    orderedDate: new Date(Date.now() - 24 * 60 * 60000).toISOString(),
    priority: 'stat',
    status: 'scheduled',
    linkedResourceId: 'OR-001',
  },
  {
    id: 'ORD-010',
    patientId: 'PAT-004',
    encounterId: 'ENC-004',
    type: 'procedure',
    description: 'Cardiac Catheterization',
    orderedBy: 'Dr. Ali Hassan',
    orderedDate: new Date(Date.now() - 24 * 60 * 60000).toISOString(),
    priority: 'stat',
    status: 'in-progress',
    linkedResourceId: 'OR-002',
  },
  {
    id: 'ORD-011',
    patientId: 'PAT-001',
    encounterId: 'ENC-001',
    type: 'imaging',
    description: 'X-Ray Chest',
    orderedBy: 'Dr. Mustafa Al-Hashimi',
    orderedDate: new Date(Date.now() - 90 * 60000).toISOString(),
    priority: 'routine',
    status: 'completed',
    linkedResourceId: 'IMG-001',
  },
  {
    id: 'ORD-012',
    patientId: 'PAT-003',
    encounterId: 'ENC-002',
    type: 'imaging',
    description: 'X-Ray Chest',
    orderedBy: 'Dr. Noor Al-Bayati',
    orderedDate: new Date(Date.now() - 45 * 60000).toISOString(),
    priority: 'routine',
    status: 'pending',
    linkedResourceId: 'IMG-002',
  },
  {
    id: 'ORD-013',
    patientId: 'PAT-002',
    encounterId: 'ENC-003',
    type: 'imaging',
    description: 'Ultrasound Abdomen',
    orderedBy: 'Dr. Noor Al-Bayati',
    orderedDate: new Date(Date.now() - 75 * 60000).toISOString(),
    priority: 'routine',
    status: 'completed',
    linkedResourceId: 'IMG-003',
  },
  {
    id: 'ORD-014',
    patientId: 'PAT-005',
    encounterId: 'ENC-005',
    type: 'imaging',
    description: 'X-Ray Hand (Left)',
    orderedBy: 'Dr. Ali Hassan',
    orderedDate: new Date(Date.now() - 20 * 60000).toISOString(),
    priority: 'routine',
    status: 'pending',
    linkedResourceId: 'IMG-004',
  },
];

// Mock Inventory Items
export const mockInventoryItems: InventoryItem[] = [
  {
    id: 'INV-001',
    category: 'medication',
    name: 'Aspirin',
    sku: 'ASPR-001',
    currentStock: 100,
    minimumStock: 50,
    unit: 'tablet',
    location: 'Pharmacy',
    expiryDate: '2025-01-01',
    batchNumber: 'B123456',
    costPerUnit: 0.5,
    supplier: 'PharmaCo',
    lastRestocked: '2024-01-01',
    status: 'in-stock',
  },
  {
    id: 'INV-002',
    category: 'medication',
    name: 'Nitroglycerin',
    sku: 'NITR-001',
    currentStock: 50,
    minimumStock: 20,
    unit: 'tablet',
    location: 'Pharmacy',
    expiryDate: '2025-06-01',
    batchNumber: 'B234567',
    costPerUnit: 1.0,
    supplier: 'PharmaCo',
    lastRestocked: '2024-06-01',
    status: 'in-stock',
  },
  {
    id: 'INV-003',
    category: 'medication',
    name: 'Albuterol Inhaler',
    sku: 'ALB-001',
    currentStock: 30,
    minimumStock: 10,
    unit: 'inhaler',
    location: 'Pharmacy',
    expiryDate: '2025-03-01',
    batchNumber: 'B345678',
    costPerUnit: 5.0,
    supplier: 'PharmaCo',
    lastRestocked: '2024-03-01',
    status: 'in-stock',
  },
  {
    id: 'INV-004',
    category: 'medication',
    name: 'Ondansetron',
    sku: 'OND-001',
    currentStock: 40,
    minimumStock: 15,
    unit: 'tablet',
    location: 'Pharmacy',
    expiryDate: '2025-09-01',
    batchNumber: 'B456789',
    costPerUnit: 2.0,
    supplier: 'PharmaCo',
    lastRestocked: '2024-09-01',
    status: 'in-stock',
  },
  {
    id: 'INV-005',
    category: 'supply',
    name: 'Surgical Gloves',
    sku: 'SG-001',
    currentStock: 200,
    minimumStock: 100,
    unit: 'pair',
    location: 'Surgical Supplies',
    expiryDate: '2025-01-01',
    batchNumber: 'B567890',
    costPerUnit: 0.2,
    supplier: 'SupplyCo',
    lastRestocked: '2024-01-01',
    status: 'in-stock',
  },
  {
    id: 'INV-006',
    category: 'supply',
    name: 'Surgical Masks',
    sku: 'SM-001',
    currentStock: 150,
    minimumStock: 75,
    unit: 'mask',
    location: 'Surgical Supplies',
    expiryDate: '2025-06-01',
    batchNumber: 'B678901',
    costPerUnit: 0.1,
    supplier: 'SupplyCo',
    lastRestocked: '2024-06-01',
    status: 'in-stock',
  },
  {
    id: 'INV-007',
    category: 'equipment',
    name: 'X-Ray Machine',
    sku: 'XR-001',
    currentStock: 1,
    minimumStock: 1,
    unit: 'unit',
    location: 'Radiology',
    expiryDate: '2025-01-01',
    batchNumber: 'B789012',
    costPerUnit: 50000.0,
    supplier: 'EquipmentCo',
    lastRestocked: '2024-01-01',
    status: 'in-stock',
  },
  {
    id: 'INV-008',
    category: 'equipment',
    name: 'CT Scanner',
    sku: 'CT-001',
    currentStock: 1,
    minimumStock: 1,
    unit: 'unit',
    location: 'Radiology',
    expiryDate: '2025-01-01',
    batchNumber: 'B890123',
    costPerUnit: 100000.0,
    supplier: 'EquipmentCo',
    lastRestocked: '2024-01-01',
    status: 'in-stock',
  },
];

// Mock Stock Movements
export const mockStockMovements: StockMovement[] = [
  {
    id: 'STK-001',
    itemId: 'INV-001',
    type: 'received',
    quantity: 50,
    fromLocation: 'Supplier',
    toLocation: 'Pharmacy',
    performedBy: 'Pharmacist Omar Khalil',
    performedAt: new Date(Date.now() - 30 * 60000).toISOString(),
    reason: 'Restock',
    patientId: 'PAT-001',
    orderId: 'ORD-001',
  },
  {
    id: 'STK-002',
    itemId: 'INV-002',
    type: 'received',
    quantity: 30,
    fromLocation: 'Supplier',
    toLocation: 'Pharmacy',
    performedBy: 'Pharmacist Omar Khalil',
    performedAt: new Date(Date.now() - 60 * 60000).toISOString(),
    reason: 'Restock',
    patientId: 'PAT-001',
    orderId: 'ORD-002',
  },
  {
    id: 'STK-003',
    itemId: 'INV-003',
    type: 'received',
    quantity: 20,
    fromLocation: 'Supplier',
    toLocation: 'Pharmacy',
    performedBy: 'Pharmacist Omar Khalil',
    performedAt: new Date(Date.now() - 90 * 60000).toISOString(),
    reason: 'Restock',
    patientId: 'PAT-003',
    orderId: 'ORD-003',
  },
  {
    id: 'STK-004',
    itemId: 'INV-004',
    type: 'received',
    quantity: 25,
    fromLocation: 'Supplier',
    toLocation: 'Pharmacy',
    performedBy: 'Pharmacist Omar Khalil',
    performedAt: new Date(Date.now() - 120 * 60000).toISOString(),
    reason: 'Restock',
    patientId: 'PAT-002',
    orderId: 'ORD-004',
  },
  {
    id: 'STK-005',
    itemId: 'INV-005',
    type: 'received',
    quantity: 100,
    fromLocation: 'Supplier',
    toLocation: 'Surgical Supplies',
    performedBy: 'Nurse Layla Ahmed',
    performedAt: new Date(Date.now() - 150 * 60000).toISOString(),
    reason: 'Restock',
    patientId: 'PAT-001',
    orderId: 'ORD-005',
  },
  {
    id: 'STK-006',
    itemId: 'INV-006',
    type: 'received',
    quantity: 75,
    fromLocation: 'Supplier',
    toLocation: 'Surgical Supplies',
    performedBy: 'Nurse Layla Ahmed',
    performedAt: new Date(Date.now() - 180 * 60000).toISOString(),
    reason: 'Restock',
    patientId: 'PAT-001',
    orderId: 'ORD-006',
  },
  {
    id: 'STK-007',
    itemId: 'INV-007',
    type: 'received',
    quantity: 1,
    fromLocation: 'Supplier',
    toLocation: 'Radiology',
    performedBy: 'Radiology Tech Sara Karim',
    performedAt: new Date(Date.now() - 210 * 60000).toISOString(),
    reason: 'Restock',
    patientId: 'PAT-001',
    orderId: 'ORD-007',
  },
  {
    id: 'STK-008',
    itemId: 'INV-008',
    type: 'received',
    quantity: 1,
    fromLocation: 'Supplier',
    toLocation: 'Radiology',
    performedBy: 'Radiology Tech Sara Karim',
    performedAt: new Date(Date.now() - 240 * 60000).toISOString(),
    reason: 'Restock',
    patientId: 'PAT-001',
    orderId: 'ORD-008',
  },
  {
    id: 'STK-009',
    itemId: 'INV-001',
    type: 'dispensed',
    quantity: 1,
    fromLocation: 'Pharmacy',
    toLocation: 'Patient PAT-001',
    performedBy: 'Pharmacist Omar Khalil',
    performedAt: new Date(Date.now() - 80 * 60000).toISOString(),
    reason: 'Administered',
    patientId: 'PAT-001',
    orderId: 'ORD-001',
  },
  {
    id: 'STK-010',
    itemId: 'INV-002',
    type: 'dispensed',
    quantity: 3,
    fromLocation: 'Pharmacy',
    toLocation: 'Patient PAT-001',
    performedBy: 'Pharmacist Omar Khalil',
    performedAt: new Date(Date.now() - 80 * 60000).toISOString(),
    reason: 'Administered',
    patientId: 'PAT-001',
    orderId: 'ORD-002',
  },
  {
    id: 'STK-011',
    itemId: 'INV-003',
    type: 'dispensed',
    quantity: 1,
    fromLocation: 'Pharmacy',
    toLocation: 'Patient PAT-003',
    performedBy: 'Pharmacist Omar Khalil',
    performedAt: new Date(Date.now() - 50 * 60000).toISOString(),
    reason: 'Pending',
    patientId: 'PAT-003',
    orderId: 'ORD-003',
  },
  {
    id: 'STK-012',
    itemId: 'INV-004',
    type: 'dispensed',
    quantity: 3,
    fromLocation: 'Pharmacy',
    toLocation: 'Patient PAT-002',
    performedBy: 'Pharmacist Omar Khalil',
    performedAt: new Date(Date.now() - 65 * 60000).toISOString(),
    reason: 'Dispensed',
    patientId: 'PAT-002',
    orderId: 'ORD-004',
  },
  {
    id: 'STK-013',
    itemId: 'INV-005',
    type: 'dispensed',
    quantity: 2,
    fromLocation: 'Surgical Supplies',
    toLocation: 'Patient PAT-001',
    performedBy: 'Nurse Layla Ahmed',
    performedAt: new Date(Date.now() - 100 * 60000).toISOString(),
    reason: 'Used',
    patientId: 'PAT-001',
    orderId: 'ORD-005',
  },
  {
    id: 'STK-014',
    itemId: 'INV-006',
    type: 'dispensed',
    quantity: 3,
    fromLocation: 'Surgical Supplies',
    toLocation: 'Patient PAT-001',
    performedBy: 'Nurse Layla Ahmed',
    performedAt: new Date(Date.now() - 130 * 60000).toISOString(),
    reason: 'Used',
    patientId: 'PAT-001',
    orderId: 'ORD-006',
  },
  {
    id: 'STK-015',
    itemId: 'INV-007',
    type: 'dispensed',
    quantity: 1,
    fromLocation: 'Radiology',
    toLocation: 'Patient PAT-001',
    performedBy: 'Radiology Tech Sara Karim',
    performedAt: new Date(Date.now() - 160 * 60000).toISOString(),
    reason: 'Used',
    patientId: 'PAT-001',
    orderId: 'ORD-007',
  },
  {
    id: 'STK-016',
    itemId: 'INV-008',
    type: 'dispensed',
    quantity: 1,
    fromLocation: 'Radiology',
    toLocation: 'Patient PAT-001',
    performedBy: 'Radiology Tech Sara Karim',
    performedAt: new Date(Date.now() - 190 * 60000).toISOString(),
    reason: 'Used',
    patientId: 'PAT-001',
    orderId: 'ORD-008',
  },
];