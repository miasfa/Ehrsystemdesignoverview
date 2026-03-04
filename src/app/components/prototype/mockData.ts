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
