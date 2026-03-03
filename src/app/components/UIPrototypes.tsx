import { Layout, User, Pill, FileText, Activity, TestTube, Package, AlertTriangle, Clock, Scissors, Search, DollarSign, BarChart3 } from "lucide-react";
import { useState } from "react";

export function UIPrototypes() {
  const [activePrototype, setActivePrototype] = useState("patient-registration");

  const prototypes = [
    { id: "patient-registration", name: "Patient Registration", icon: User },
    { id: "medication-dispensing", name: "Medication Dispensing", icon: Pill },
    { id: "clinical-encounter", name: "Clinical Encounter", icon: FileText },
    { id: "vital-signs", name: "Vital Signs Entry", icon: Activity },
    { id: "lab-order", name: "Lab Order & Results", icon: TestTube },
    { id: "inventory-management", name: "Inventory Management", icon: Package },
    { id: "audit-alerts", name: "Audit & Fraud Detection", icon: AlertTriangle },
    { id: "emergency-admission", name: "Emergency Admission", icon: Clock },
    { id: "surgery-scheduling", name: "Surgery Scheduling", icon: Scissors },
    { id: "patient-search", name: "Advanced Patient Search", icon: Search },
    { id: "billing", name: "Billing & Claims", icon: DollarSign },
    { id: "analytics", name: "Analytics Dashboard", icon: BarChart3 },
  ];

  return (
    <div className="max-w-7xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-slate-900 mb-2">UI/UX Prototypes</h1>
        <p className="text-slate-600">
          Interactive workflow demonstrations for key clinical scenarios
        </p>
      </div>

      {/* Prototype Selector */}
      <div className="bg-white rounded-xl border border-slate-200 p-6">
        <h2 className="text-lg font-semibold mb-4">Select Workflow to Preview:</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {prototypes.map((proto) => {
            const Icon = proto.icon;
            return (
              <button
                key={proto.id}
                onClick={() => setActivePrototype(proto.id)}
                className={`p-4 rounded-lg border-2 transition-all ${
                  activePrototype === proto.id
                    ? "border-blue-500 bg-blue-50"
                    : "border-slate-200 hover:border-blue-300"
                }`}
              >
                <Icon className={`w-6 h-6 mx-auto mb-2 ${
                  activePrototype === proto.id ? "text-blue-600" : "text-slate-400"
                }`} />
                <p className={`text-sm font-medium text-center ${
                  activePrototype === proto.id ? "text-blue-900" : "text-slate-700"
                }`}>
                  {proto.name}
                </p>
              </button>
            );
          })}
        </div>
      </div>

      {/* Prototype Displays */}
      {activePrototype === "patient-registration" && <PatientRegistrationProto />}
      {activePrototype === "medication-dispensing" && <MedicationDispensingProto />}
      {activePrototype === "clinical-encounter" && <ClinicalEncounterProto />}
      {activePrototype === "vital-signs" && <VitalSignsProto />}
      {activePrototype === "lab-order" && <LabOrderProto />}
      {activePrototype === "inventory-management" && <InventoryManagementProto />}
      {activePrototype === "audit-alerts" && <AuditAlertsProto />}
      {activePrototype === "emergency-admission" && <EmergencyAdmissionProto />}
      {activePrototype === "surgery-scheduling" && <SurgerySchedulingProto />}
      {activePrototype === "patient-search" && <PatientSearchProto />}
      {activePrototype === "billing" && <BillingProto />}
      {activePrototype === "analytics" && <AnalyticsProto />}
    </div>
  );
}

function PatientRegistrationProto() {
  return (
    <div className="bg-white rounded-xl border border-slate-200 p-8">
      <h2 className="text-xl font-semibold mb-6">Patient Registration Workflow</h2>
      
      <div className="bg-slate-50 rounded-lg border-2 border-slate-300 p-8">
        {/* Header */}
        <div className="bg-blue-600 text-white px-6 py-3 rounded-t-lg flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <User className="w-5 h-5" />
            <span className="font-semibold">Patient Registration</span>
          </div>
          <span className="text-sm">Clerk: Jane Mwangi | St. Mary's Hospital</span>
        </div>

        {/* Search Existing Patient */}
        <div className="bg-white rounded-lg border border-slate-200 p-6 mb-6">
          <h3 className="font-semibold mb-4">Step 1: Search for Existing Patient</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Search by National ID, Phone, or Name
              </label>
              <input
                type="text"
                placeholder="Enter search term..."
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div className="flex gap-3">
              <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                Search
              </button>
              <button className="px-6 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700">
                Scan Fingerprint
              </button>
            </div>
          </div>

          {/* Potential Matches Alert */}
          <div className="mt-6 bg-amber-50 border border-amber-200 rounded-lg p-4">
            <p className="font-medium text-amber-900 mb-2">⚠️ Potential Duplicate Found</p>
            <div className="bg-white rounded border border-amber-300 p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">John Kamau</p>
                  <p className="text-sm text-slate-600">DOB: 1985-03-15 | ID: MH-2025-987654321-3</p>
                  <p className="text-sm text-slate-600">Phone: +254712345678</p>
                </div>
                <div className="flex gap-2">
                  <button className="px-4 py-2 bg-emerald-600 text-white text-sm rounded hover:bg-emerald-700">
                    Use This Patient
                  </button>
                  <button className="px-4 py-2 bg-slate-300 text-slate-700 text-sm rounded hover:bg-slate-400">
                    Not the Same
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* New Registration Form */}
        <div className="bg-white rounded-lg border border-slate-200 p-6">
          <h3 className="font-semibold mb-4">Step 2: New Patient Registration</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">First Name *</label>
              <input
                type="text"
                placeholder="First name"
                className="w-full px-4 py-2 border border-slate-300 rounded-lg"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Last Name *</label>
              <input
                type="text"
                placeholder="Last name"
                className="w-full px-4 py-2 border border-slate-300 rounded-lg"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Date of Birth *</label>
              <input
                type="date"
                className="w-full px-4 py-2 border border-slate-300 rounded-lg"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Gender *</label>
              <select className="w-full px-4 py-2 border border-slate-300 rounded-lg">
                <option>Select gender</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">National ID</label>
              <input
                type="text"
                placeholder="Government ID number"
                className="w-full px-4 py-2 border border-slate-300 rounded-lg"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Phone Number</label>
              <input
                type="tel"
                placeholder="+254..."
                className="w-full px-4 py-2 border border-slate-300 rounded-lg"
              />
            </div>
          </div>

          <div className="mt-6 flex items-center gap-4">
            <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium">
              Capture Photo
            </button>
            <button className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 font-medium">
              Scan Fingerprints
            </button>
          </div>

          <div className="mt-6 pt-6 border-t border-slate-200 flex justify-end gap-3">
            <button className="px-6 py-3 bg-slate-300 text-slate-700 rounded-lg hover:bg-slate-400">
              Cancel
            </button>
            <button className="px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 font-medium">
              Register & Generate UNPI
            </button>
          </div>
        </div>

        {/* Success Message */}
        <div className="mt-6 bg-emerald-50 border border-emerald-200 rounded-lg p-4">
          <p className="font-medium text-emerald-900 mb-2">✓ Patient Registered Successfully</p>
          <p className="text-sm text-slate-700">
            Unique National Patient ID: <span className="font-mono font-semibold">MH-2026-123456789-7</span>
          </p>
          <button className="mt-3 px-4 py-2 bg-emerald-600 text-white text-sm rounded hover:bg-emerald-700">
            Print Patient Card
          </button>
        </div>
      </div>
    </div>
  );
}

function MedicationDispensingProto() {
  return (
    <div className="bg-white rounded-xl border border-slate-200 p-8">
      <h2 className="text-xl font-semibold mb-6">Medication Dispensing Workflow</h2>
      
      <div className="bg-slate-50 rounded-lg border-2 border-slate-300 p-8">
        {/* Header */}
        <div className="bg-purple-600 text-white px-6 py-3 rounded-t-lg flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <Pill className="w-5 h-5" />
            <span className="font-semibold">Pharmacy - Medication Dispensing</span>
          </div>
          <span className="text-sm">Pharmacist: Dr. Sarah Omondi</span>
        </div>

        {/* Scan Prescription */}
        <div className="bg-white rounded-lg border border-slate-200 p-6 mb-6">
          <h3 className="font-semibold mb-4">Step 1: Scan Prescription or Enter Order ID</h3>
          <div className="flex gap-3">
            <input
              type="text"
              placeholder="Scan barcode or enter order ID..."
              className="flex-1 px-4 py-3 border border-slate-300 rounded-lg text-lg"
              defaultValue="MED-ORD-2026-00123"
            />
            <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Load Order
            </button>
          </div>
        </div>

        {/* Order Details */}
        <div className="bg-white rounded-lg border border-slate-200 p-6 mb-6">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="font-semibold text-lg">Patient: John Kamau</h3>
              <p className="text-sm text-slate-600">UNPI: MH-2026-123456789-7 | Age: 39 | Allergies: Penicillin</p>
            </div>
            <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium">
              APPROVED
            </span>
          </div>

          <div className="space-y-4">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <p className="font-semibold">Ciprofloxacin 500mg Tablets</p>
                  <p className="text-sm text-slate-600">Quantity: 20 tablets</p>
                  <p className="text-sm text-slate-600">Sig: Take 1 tablet twice daily for 10 days</p>
                </div>
                <span className="text-xs bg-blue-600 text-white px-2 py-1 rounded">NEW</span>
              </div>
              <div className="mt-3 pt-3 border-t border-blue-300">
                <p className="text-xs text-slate-600">
                  <strong>Prescribed by:</strong> Dr. Peter Mutua | Date: Feb 27, 2026 14:32
                </p>
                <p className="text-xs text-slate-600 mt-1">
                  <strong>Indication:</strong> Urinary tract infection confirmed by culture
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Clinical Verification */}
        <div className="bg-white rounded-lg border border-slate-200 p-6 mb-6">
          <h3 className="font-semibold mb-4">Step 2: Clinical Verification</h3>
          
          {/* Drug Interaction Check */}
          <div className="bg-amber-50 border border-amber-300 rounded-lg p-4 mb-4">
            <p className="font-medium text-amber-900 mb-2">⚠️ Potential Drug Interaction</p>
            <p className="text-sm text-slate-700">
              Patient is currently taking Warfarin. Ciprofloxacin may increase anticoagulant effect. 
              Monitor INR closely.
            </p>
            <button className="mt-2 px-4 py-2 bg-amber-600 text-white text-sm rounded hover:bg-amber-700">
              Document Clinical Intervention
            </button>
          </div>

          {/* Allergy Check */}
          <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
            <p className="font-medium text-emerald-900">✓ No Allergy Conflicts</p>
            <p className="text-sm text-slate-600">Ciprofloxacin is safe for this patient (Penicillin allergy documented)</p>
          </div>
        </div>

        {/* Batch Selection */}
        <div className="bg-white rounded-lg border border-slate-200 p-6 mb-6">
          <h3 className="font-semibold mb-4">Step 3: Select Batch (FEFO - First Expired First Out)</h3>
          <div className="space-y-3">
            <div className="bg-emerald-50 border-2 border-emerald-500 rounded-lg p-4 cursor-pointer">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold">Batch: CIP-2025-11-8734</p>
                  <p className="text-sm text-slate-600">Expiry: Nov 30, 2027 | Available: 450 tablets</p>
                  <p className="text-sm text-slate-600">Supplier: PharmaCo Ltd</p>
                </div>
                <span className="text-emerald-600 font-semibold">SELECTED</span>
              </div>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 opacity-50">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold">Batch: CIP-2026-02-1256</p>
                  <p className="text-sm text-slate-600">Expiry: Feb 28, 2028 | Available: 280 tablets</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Dispensing */}
        <div className="bg-white rounded-lg border border-slate-200 p-6 mb-6">
          <h3 className="font-semibold mb-4">Step 4: Dispense Medication</h3>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="flex-1">
                <label className="block text-sm font-medium text-slate-700 mb-2">Quantity Dispensed</label>
                <input
                  type="number"
                  defaultValue="20"
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg"
                />
              </div>
              <div className="flex-1">
                <label className="block text-sm font-medium text-slate-700 mb-2">Package Label</label>
                <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                  Print Label with Batch Number
                </button>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Patient Counseling Points</label>
              <textarea
                className="w-full px-4 py-2 border border-slate-300 rounded-lg"
                rows={3}
                placeholder="Document counseling provided to patient..."
                defaultValue="Advised patient to take with food, complete full course even if symptoms improve. Warned about photosensitivity. Instructed to avoid dairy products 2h before/after dose."
              />
            </div>

            <div className="flex items-center gap-2">
              <input type="checkbox" id="counseling" className="w-4 h-4" defaultChecked />
              <label htmlFor="counseling" className="text-sm text-slate-700">
                I confirm patient counseling was provided and understood
              </label>
            </div>
          </div>
        </div>

        {/* Final Actions */}
        <div className="flex justify-end gap-3">
          <button className="px-6 py-3 bg-slate-300 text-slate-700 rounded-lg hover:bg-slate-400">
            Cancel
          </button>
          <button className="px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 font-medium">
            Complete Dispensing & Update Inventory
          </button>
        </div>

        {/* Success */}
        <div className="mt-6 bg-emerald-50 border border-emerald-200 rounded-lg p-4">
          <p className="font-medium text-emerald-900">✓ Medication Dispensed Successfully</p>
          <p className="text-sm text-slate-700 mt-1">
            Inventory updated. Batch CIP-2025-11-8734 remaining: 430 tablets. 
            Patient notified via SMS with pickup time.
          </p>
        </div>
      </div>
    </div>
  );
}

function ClinicalEncounterProto() {
  return (
    <div className="bg-white rounded-xl border border-slate-200 p-8">
      <h2 className="text-xl font-semibold mb-6">Clinical Encounter Documentation</h2>
      
      <div className="bg-slate-50 rounded-lg border-2 border-slate-300 p-8">
        <div className="bg-emerald-600 text-white px-6 py-3 rounded-t-lg flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <FileText className="w-5 h-5" />
            <span className="font-semibold">Outpatient Encounter</span>
          </div>
          <span className="text-sm">Dr. Peter Mutua | Internal Medicine</span>
        </div>

        {/* Patient Banner */}
        <div className="bg-white rounded-lg border-2 border-blue-500 p-4 mb-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold text-lg">John Kamau</h3>
              <p className="text-sm text-slate-600">39 yo Male | UNPI: MH-2026-123456789-7</p>
              <p className="text-sm text-red-600 font-medium">⚠️ Allergies: Penicillin (anaphylaxis)</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-slate-600">Encounter: Feb 27, 2026 14:15</p>
              <p className="text-sm text-slate-600">Last Visit: Jan 10, 2026</p>
            </div>
          </div>
        </div>

        {/* SOAP Note Tabs */}
        <div className="bg-white rounded-lg border border-slate-200 p-6">
          <div className="flex gap-2 mb-6 border-b border-slate-200">
            {["Subjective", "Objective", "Assessment", "Plan"].map((tab) => (
              <button
                key={tab}
                className="px-4 py-2 font-medium border-b-2 border-blue-500 text-blue-600"
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Chief Complaint</label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-slate-300 rounded-lg"
                defaultValue="Burning sensation during urination for 3 days"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">History of Present Illness</label>
              <textarea
                className="w-full px-4 py-2 border border-slate-300 rounded-lg"
                rows={4}
                defaultValue="39yo male presents with 3-day history of dysuria, frequency, and urgency. No fever, no flank pain. No hematuria. Last UTI 2 years ago. Denies recent sexual activity. Adequate fluid intake."
              />
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="font-medium mb-2">Diagnosis Coding (ICD-10)</p>
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Search ICD code..."
                  className="flex-1 px-4 py-2 border border-slate-300 rounded-lg"
                  defaultValue="N39.0 - Urinary tract infection, site not specified"
                />
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                  Add Diagnosis
                </button>
              </div>
            </div>

            <button className="px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 font-medium">
              Sign & Complete Note
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function VitalSignsProto() {
  return (
    <div className="bg-white rounded-xl border border-slate-200 p-8">
      <h2 className="text-xl font-semibold mb-6">Vital Signs Entry</h2>
      
      <div className="bg-slate-50 rounded-lg border-2 border-slate-300 p-8">
        <div className="bg-red-600 text-white px-6 py-3 rounded-t-lg flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <Activity className="w-5 h-5" />
            <span className="font-semibold">Vital Signs Flowsheet</span>
          </div>
          <span className="text-sm">Nurse: Mary Wanjiru | Ward 3B</span>
        </div>

        <div className="bg-white rounded-lg border border-slate-200 p-6">
          <h3 className="font-semibold mb-4">Patient: John Kamau | Time: 14:30</h3>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Blood Pressure (mmHg)</label>
              <div className="flex gap-2">
                <input
                  type="number"
                  placeholder="Systolic"
                  defaultValue="138"
                  className="w-20 px-3 py-2 border border-slate-300 rounded-lg"
                />
                <span className="text-2xl text-slate-400">/</span>
                <input
                  type="number"
                  placeholder="Diastolic"
                  defaultValue="86"
                  className="w-20 px-3 py-2 border border-slate-300 rounded-lg"
                />
              </div>
              <p className="text-xs text-amber-600 mt-1">⚠️ Slightly elevated</p>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Heart Rate (bpm)</label>
              <input
                type="number"
                defaultValue="78"
                className="w-full px-4 py-2 border border-slate-300 rounded-lg"
              />
              <p className="text-xs text-emerald-600 mt-1">✓ Normal</p>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Temperature (°C)</label>
              <input
                type="number"
                step="0.1"
                defaultValue="36.8"
                className="w-full px-4 py-2 border border-slate-300 rounded-lg"
              />
              <p className="text-xs text-emerald-600 mt-1">✓ Normal</p>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Respiratory Rate</label>
              <input
                type="number"
                defaultValue="16"
                className="w-full px-4 py-2 border border-slate-300 rounded-lg"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">SpO2 (%)</label>
              <input
                type="number"
                defaultValue="98"
                className="w-full px-4 py-2 border border-slate-300 rounded-lg"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Pain Score (0-10)</label>
              <input
                type="number"
                min="0"
                max="10"
                defaultValue="3"
                className="w-full px-4 py-2 border border-slate-300 rounded-lg"
              />
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-slate-200">
            <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium">
              Save Vital Signs
            </button>
          </div>

          {/* Early Warning Score */}
          <div className="mt-6 bg-emerald-50 border border-emerald-200 rounded-lg p-4">
            <p className="font-medium text-emerald-900">NEWS2 Score: 1 (Low Risk)</p>
            <p className="text-sm text-slate-600">Continue routine monitoring every 4 hours</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// NEW PROTOTYPES

function LabOrderProto() {
  return (
    <div className="bg-white rounded-xl border border-slate-200 p-8">
      <h2 className="text-xl font-semibold mb-6">Laboratory Order & Results Workflow</h2>
      
      <div className="bg-slate-50 rounded-lg border-2 border-slate-300 p-8">
        <div className="bg-cyan-600 text-white px-6 py-3 rounded-t-lg flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <TestTube className="w-5 h-5" />
            <span className="font-semibold">Laboratory - Test Orders</span>
          </div>
          <span className="text-sm">Lab Tech: James Odhiambo | St. Mary's Lab</span>
        </div>

        {/* Pending Orders */}
        <div className="bg-white rounded-lg border border-slate-200 p-6 mb-6">
          <h3 className="font-semibold mb-4">Pending Test Orders</h3>
          
          <div className="space-y-3">
            <div className="bg-blue-50 border-2 border-blue-500 rounded-lg p-4">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <p className="font-semibold">Complete Blood Count (CBC)</p>
                  <p className="text-sm text-slate-600">Patient: John Kamau | UNPI: MH-2026-123456789-7</p>
                  <p className="text-sm text-slate-600">Ordered by: Dr. Peter Mutua | Priority: ROUTINE</p>
                  <p className="text-xs text-slate-500 mt-1">Order ID: LAB-ORD-2026-00456 | Feb 27, 2026 14:45</p>
                </div>
                <span className="px-3 py-1 bg-blue-600 text-white rounded-full text-sm font-medium">
                  PENDING
                </span>
              </div>
              <div className="mt-3 flex gap-2">
                <button className="px-4 py-2 bg-blue-600 text-white text-sm rounded hover:bg-blue-700">
                  Start Collection
                </button>
                <button className="px-4 py-2 bg-slate-300 text-slate-700 text-sm rounded hover:bg-slate-400">
                  View Clinical Info
                </button>
              </div>
            </div>

            <div className="bg-amber-50 border border-amber-300 rounded-lg p-4">
              <div className="flex items-start justify-between">
                <div>
                  <p className="font-semibold">Blood Culture x2</p>
                  <p className="text-sm text-slate-600">Patient: Sarah Njeri | UNPI: MH-2026-223344556-2</p>
                  <p className="text-sm text-slate-600">Ordered by: Dr. Alice Kimani | Priority: <span className="text-red-600 font-semibold">URGENT</span></p>
                </div>
                <span className="px-3 py-1 bg-amber-500 text-white rounded-full text-sm font-medium">
                  URGENT
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Sample Collection */}
        <div className="bg-white rounded-lg border border-slate-200 p-6 mb-6">
          <h3 className="font-semibold mb-4">Step 1: Sample Collection & Labeling</h3>
          
          <div className="space-y-4">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="font-medium mb-2">Patient Verification</p>
              <div className="flex items-center gap-3">
                <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                  Scan Patient Wristband
                </button>
                <span className="text-sm text-slate-600">or manually verify UNPI</span>
              </div>
              <div className="mt-3 bg-emerald-50 border border-emerald-200 rounded p-3">
                <p className="text-emerald-900 font-medium text-sm">✓ Patient verified: John Kamau</p>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Sample Barcode</label>
              <input
                type="text"
                placeholder="Scan or enter tube barcode..."
                className="w-full px-4 py-2 border border-slate-300 rounded-lg"
                defaultValue="SMPL-CBC-2026-789012"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Sample Type</label>
              <select className="w-full px-4 py-2 border border-slate-300 rounded-lg">
                <option>Venous Blood (EDTA tube)</option>
                <option>Serum</option>
                <option>Urine</option>
                <option>Sputum</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Collection Notes</label>
              <textarea
                className="w-full px-4 py-2 border border-slate-300 rounded-lg"
                rows={2}
                placeholder="Any issues during collection..."
              />
            </div>

            <button className="px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 font-medium">
              Confirm Collection & Send to Lab
            </button>
          </div>
        </div>

        {/* Results Entry */}
        <div className="bg-white rounded-lg border border-slate-200 p-6 mb-6">
          <h3 className="font-semibold mb-4">Step 2: Enter Test Results</h3>
          
          <div className="bg-slate-50 rounded-lg p-4 mb-4">
            <p className="text-sm font-medium text-slate-700 mb-1">CBC Results for: John Kamau</p>
            <p className="text-xs text-slate-500">Sample: SMPL-CBC-2026-789012 | Analyzed: Feb 27, 2026 16:20</p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">WBC (10^9/L)</label>
              <input
                type="number"
                step="0.1"
                defaultValue="7.2"
                className="w-full px-4 py-2 border border-slate-300 rounded-lg"
              />
              <p className="text-xs text-slate-500 mt-1">Reference: 4.0-11.0</p>
              <p className="text-xs text-emerald-600 mt-1">✓ Normal</p>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">RBC (10^12/L)</label>
              <input
                type="number"
                step="0.01"
                defaultValue="4.85"
                className="w-full px-4 py-2 border border-slate-300 rounded-lg"
              />
              <p className="text-xs text-slate-500 mt-1">Reference: 4.5-5.9</p>
              <p className="text-xs text-emerald-600 mt-1">✓ Normal</p>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Hemoglobin (g/dL)</label>
              <input
                type="number"
                step="0.1"
                defaultValue="10.8"
                className="w-full px-4 py-2 border border-amber-300 rounded-lg"
              />
              <p className="text-xs text-slate-500 mt-1">Reference: 13.0-17.0</p>
              <p className="text-xs text-amber-600 mt-1">⚠️ Low - Mild anemia</p>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Platelets (10^9/L)</label>
              <input
                type="number"
                defaultValue="245"
                className="w-full px-4 py-2 border border-slate-300 rounded-lg"
              />
              <p className="text-xs text-slate-500 mt-1">Reference: 150-400</p>
              <p className="text-xs text-emerald-600 mt-1">✓ Normal</p>
            </div>
          </div>

          <div className="mt-4">
            <label className="block text-sm font-medium text-slate-700 mb-2">Technician Notes</label>
            <textarea
              className="w-full px-4 py-2 border border-slate-300 rounded-lg"
              rows={2}
              placeholder="Any observations, sample quality issues, etc."
            />
          </div>

          <div className="mt-6 flex items-center gap-2">
            <input type="checkbox" id="verified" className="w-4 h-4" />
            <label htmlFor="verified" className="text-sm text-slate-700">
              I verify these results have been double-checked and are accurate
            </label>
          </div>

          <div className="mt-4 flex gap-3">
            <button className="px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 font-medium">
              Submit Results for Review
            </button>
            <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium">
              Critical Value Alert
            </button>
          </div>
        </div>

        {/* Success */}
        <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
          <p className="font-medium text-emerald-900">✓ Results Submitted Successfully</p>
          <p className="text-sm text-slate-700 mt-1">
            Dr. Peter Mutua has been notified. Results visible in patient chart. TAT: 1h 35min.
          </p>
        </div>
      </div>
    </div>
  );
}

function InventoryManagementProto() {
  return (
    <div className="bg-white rounded-xl border border-slate-200 p-8">
      <h2 className="text-xl font-semibold mb-6">Inventory Management - Stock Control</h2>
      
      <div className="bg-slate-50 rounded-lg border-2 border-slate-300 p-8">
        <div className="bg-orange-600 text-white px-6 py-3 rounded-t-lg flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <Package className="w-5 h-5" />
            <span className="font-semibold">Central Pharmacy - Inventory Control</span>
          </div>
          <span className="text-sm">Inventory Manager: David Mwangi</span>
        </div>

        {/* Dashboard Overview */}
        <div className="grid md:grid-cols-4 gap-4 mb-6">
          <div className="bg-white rounded-lg border border-slate-200 p-4">
            <p className="text-sm text-slate-600">Low Stock Alerts</p>
            <p className="text-3xl font-bold text-red-600">12</p>
          </div>
          <div className="bg-white rounded-lg border border-slate-200 p-4">
            <p className="text-sm text-slate-600">Expiring Soon (30d)</p>
            <p className="text-3xl font-bold text-amber-600">8</p>
          </div>
          <div className="bg-white rounded-lg border border-slate-200 p-4">
            <p className="text-sm text-slate-600">Total SKUs</p>
            <p className="text-3xl font-bold text-blue-600">1,247</p>
          </div>
          <div className="bg-white rounded-lg border border-slate-200 p-4">
            <p className="text-sm text-slate-600">Inventory Value</p>
            <p className="text-3xl font-bold text-emerald-600">$487K</p>
          </div>
        </div>

        {/* Low Stock Alerts */}
        <div className="bg-white rounded-lg border border-slate-200 p-6 mb-6">
          <h3 className="font-semibold mb-4 flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-red-600" />
            Critical Stock Alerts
          </h3>
          
          <div className="space-y-3">
            <div className="bg-red-50 border-2 border-red-300 rounded-lg p-4">
              <div className="flex items-start justify-between">
                <div>
                  <p className="font-semibold">Amoxicillin 500mg Capsules</p>
                  <p className="text-sm text-slate-600">Current Stock: 45 units | Reorder Level: 200 units</p>
                  <p className="text-sm text-slate-600">Average Daily Usage: 35 units | Days Until Stockout: 1.3 days</p>
                  <p className="text-xs text-slate-500 mt-1">Last Ordered: Feb 15, 2026 | Supplier: MedSupply Ltd</p>
                </div>
                <span className="px-3 py-1 bg-red-600 text-white rounded-full text-sm font-semibold">
                  CRITICAL
                </span>
              </div>
              <div className="mt-3 flex gap-2">
                <button className="px-4 py-2 bg-red-600 text-white text-sm rounded hover:bg-red-700">
                  Emergency Order
                </button>
                <button className="px-4 py-2 bg-blue-600 text-white text-sm rounded hover:bg-blue-700">
                  Check Other Facilities
                </button>
              </div>
            </div>

            <div className="bg-amber-50 border border-amber-300 rounded-lg p-4">
              <div className="flex items-start justify-between">
                <div>
                  <p className="font-semibold">Insulin (Glargine) 100units/mL</p>
                  <p className="text-sm text-slate-600">Current Stock: 18 vials | Reorder Level: 30 vials</p>
                  <p className="text-sm text-slate-600">Average Daily Usage: 4 vials | Days Until Stockout: 4.5 days</p>
                </div>
                <span className="px-3 py-1 bg-amber-600 text-white rounded-full text-sm font-medium">
                  LOW
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Receive Shipment */}
        <div className="bg-white rounded-lg border border-slate-200 p-6 mb-6">
          <h3 className="font-semibold mb-4">Receive New Shipment</h3>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Purchase Order Number</label>
              <input
                type="text"
                placeholder="Scan or enter PO number..."
                className="w-full px-4 py-2 border border-slate-300 rounded-lg"
                defaultValue="PO-2026-00892"
              />
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="font-medium mb-2">PO Details Loaded</p>
              <p className="text-sm text-slate-600">Supplier: PharmaCo Ltd | Expected: Feb 27, 2026</p>
              <p className="text-sm text-slate-600">Items: 15 | Total Value: $12,450</p>
            </div>

            <div className="space-y-3 mt-4">
              <div className="bg-slate-50 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex-1">
                    <p className="font-semibold">Ciprofloxacin 500mg Tablets</p>
                    <p className="text-sm text-slate-600">Expected: 500 units | Batch: CIP-2026-03-2341</p>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-3 mt-3">
                  <div>
                    <label className="block text-xs text-slate-600 mb-1">Qty Received</label>
                    <input
                      type="number"
                      defaultValue="500"
                      className="w-full px-3 py-2 border border-slate-300 rounded text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-slate-600 mb-1">Expiry Date</label>
                    <input
                      type="date"
                      defaultValue="2028-03-15"
                      className="w-full px-3 py-2 border border-slate-300 rounded text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-slate-600 mb-1">Batch Number</label>
                    <input
                      type="text"
                      defaultValue="CIP-2026-03-2341"
                      className="w-full px-3 py-2 border border-slate-300 rounded text-sm"
                    />
                  </div>
                </div>
                <div className="mt-2 flex items-center gap-2">
                  <input type="checkbox" id="inspected1" className="w-4 h-4" />
                  <label htmlFor="inspected1" className="text-sm text-slate-700">
                    Packaging intact, no damage, proper storage temp maintained
                  </label>
                </div>
              </div>

              <div className="bg-slate-50 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex-1">
                    <p className="font-semibold">IV Saline 0.9% 1000mL bags</p>
                    <p className="text-sm text-slate-600">Expected: 200 units | Batch: SAL-2026-02-8821</p>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-3 mt-3">
                  <div>
                    <label className="block text-xs text-slate-600 mb-1">Qty Received</label>
                    <input
                      type="number"
                      defaultValue="195"
                      className="w-full px-3 py-2 border border-amber-300 rounded text-sm"
                    />
                    <p className="text-xs text-amber-600 mt-1">⚠️ Quantity mismatch</p>
                  </div>
                  <div>
                    <label className="block text-xs text-slate-600 mb-1">Expiry Date</label>
                    <input
                      type="date"
                      defaultValue="2027-02-28"
                      className="w-full px-3 py-2 border border-slate-300 rounded text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-slate-600 mb-1">Batch Number</label>
                    <input
                      type="text"
                      defaultValue="SAL-2026-02-8821"
                      className="w-full px-3 py-2 border border-slate-300 rounded text-sm"
                    />
                  </div>
                </div>
                <div className="mt-2">
                  <label className="block text-xs text-slate-600 mb-1">Discrepancy Notes</label>
                  <textarea
                    className="w-full px-3 py-2 border border-slate-300 rounded text-sm"
                    rows={2}
                    placeholder="Document reason for quantity mismatch..."
                    defaultValue="5 bags damaged in transit - boxes crushed. Photos taken and supplier notified."
                  />
                </div>
              </div>
            </div>

            <div className="mt-6 flex gap-3">
              <button className="px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 font-medium">
                Complete Receipt & Update Inventory
              </button>
              <button className="px-6 py-3 bg-amber-600 text-white rounded-lg hover:bg-amber-700 font-medium">
                Flag Discrepancy for Review
              </button>
            </div>
          </div>
        </div>

        {/* Success */}
        <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
          <p className="font-medium text-emerald-900">✓ Shipment Processed Successfully</p>
          <p className="text-sm text-slate-700 mt-1">
            Inventory updated. All batches logged. Discrepancy report sent to procurement for supplier follow-up.
          </p>
        </div>
      </div>
    </div>
  );
}

function AuditAlertsProto() {
  return (
    <div className="bg-white rounded-xl border border-slate-200 p-8">
      <h2 className="text-xl font-semibold mb-6">Audit & Fraud Detection Dashboard</h2>
      
      <div className="bg-slate-50 rounded-lg border-2 border-slate-300 p-8">
        <div className="bg-red-700 text-white px-6 py-3 rounded-t-lg flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <AlertTriangle className="w-5 h-5" />
            <span className="font-semibold">System Audit & Anomaly Detection</span>
          </div>
          <span className="text-sm">Supervisor: Dr. Grace Wambui | Hospital Administrator</span>
        </div>

        {/* Alert Summary */}
        <div className="grid md:grid-cols-4 gap-4 mb-6">
          <div className="bg-white rounded-lg border-2 border-red-500 p-4">
            <p className="text-sm text-slate-600">Critical Alerts</p>
            <p className="text-3xl font-bold text-red-600">3</p>
            <p className="text-xs text-slate-500 mt-1">Require immediate action</p>
          </div>
          <div className="bg-white rounded-lg border border-amber-300 p-4">
            <p className="text-sm text-slate-600">High Priority</p>
            <p className="text-3xl font-bold text-amber-600">7</p>
            <p className="text-xs text-slate-500 mt-1">Review within 24h</p>
          </div>
          <div className="bg-white rounded-lg border border-blue-300 p-4">
            <p className="text-sm text-slate-600">Medium Priority</p>
            <p className="text-3xl font-bold text-blue-600">15</p>
            <p className="text-xs text-slate-500 mt-1">Review within 7 days</p>
          </div>
          <div className="bg-white rounded-lg border border-slate-200 p-4">
            <p className="text-sm text-slate-600">Resolved Today</p>
            <p className="text-3xl font-bold text-emerald-600">12</p>
            <p className="text-xs text-slate-500 mt-1">False positives cleared</p>
          </div>
        </div>

        {/* Critical Alerts */}
        <div className="bg-white rounded-lg border border-slate-200 p-6 mb-6">
          <h3 className="font-semibold mb-4 text-red-700">🚨 Critical Fraud Alerts</h3>
          
          <div className="space-y-4">
            <div className="bg-red-50 border-2 border-red-400 rounded-lg p-4">
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <p className="font-semibold text-red-900">Suspicious Medication Dispensing Pattern</p>
                  <p className="text-sm text-slate-700 mt-1">
                    <strong>Pharmacist: Thomas Ochieng</strong> | Central Pharmacy
                  </p>
                  <p className="text-sm text-slate-600 mt-2">
                    <strong>Issue:</strong> Dispensed Tramadol 100mg (controlled substance) to 8 different patients in last 2 hours. 
                    All patients registered to same address. No prescribing physician notes in 6 of 8 cases.
                  </p>
                  <div className="mt-2 flex gap-3 text-xs">
                    <span className="text-slate-600">⏰ Detected: Feb 27, 2026 16:45</span>
                    <span className="text-slate-600">📊 Confidence: 94%</span>
                    <span className="text-slate-600">🎯 Pattern: Narcotic Diversion</span>
                  </div>
                </div>
                <span className="px-3 py-1 bg-red-700 text-white rounded-full text-sm font-bold whitespace-nowrap ml-3">
                  CRITICAL
                </span>
              </div>
              <div className="mt-3 pt-3 border-t border-red-200 flex gap-2">
                <button className="px-4 py-2 bg-red-700 text-white text-sm rounded hover:bg-red-800">
                  Suspend User Access
                </button>
                <button className="px-4 py-2 bg-blue-600 text-white text-sm rounded hover:bg-blue-700">
                  View Full Audit Trail
                </button>
                <button className="px-4 py-2 bg-amber-600 text-white text-sm rounded hover:bg-amber-700">
                  Escalate to Security
                </button>
                <button className="px-4 py-2 bg-slate-300 text-slate-700 text-sm rounded hover:bg-slate-400">
                  Mark False Positive
                </button>
              </div>
            </div>

            <div className="bg-red-50 border-2 border-red-400 rounded-lg p-4">
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <p className="font-semibold text-red-900">Duplicate Patient Records Created</p>
                  <p className="text-sm text-slate-700 mt-1">
                    <strong>Clerk: Mary Akinyi</strong> | Registration Desk
                  </p>
                  <p className="text-sm text-slate-600 mt-2">
                    <strong>Issue:</strong> Created 4 new patient records with identical fingerprints to existing patients. 
                    System biometric match override used each time. Potential identity fraud or billing scheme.
                  </p>
                  <div className="mt-2 flex gap-3 text-xs">
                    <span className="text-slate-600">⏰ Detected: Feb 27, 2026 15:20</span>
                    <span className="text-slate-600">📊 Confidence: 97%</span>
                    <span className="text-slate-600">🎯 Pattern: Identity Fraud</span>
                  </div>
                </div>
                <span className="px-3 py-1 bg-red-700 text-white rounded-full text-sm font-bold whitespace-nowrap ml-3">
                  CRITICAL
                </span>
              </div>
              <div className="mt-3 pt-3 border-t border-red-200 flex gap-2">
                <button className="px-4 py-2 bg-red-700 text-white text-sm rounded hover:bg-red-800">
                  Suspend User & Lock Records
                </button>
                <button className="px-4 py-2 bg-blue-600 text-white text-sm rounded hover:bg-blue-700">
                  Compare Records
                </button>
              </div>
            </div>

            <div className="bg-red-50 border-2 border-red-400 rounded-lg p-4">
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <p className="font-semibold text-red-900">Inventory Discrepancy - High Value Items</p>
                  <p className="text-sm text-slate-700 mt-1">
                    <strong>Location:</strong> Operating Room 3 | Surgical Supply Storage
                  </p>
                  <p className="text-sm text-slate-600 mt-2">
                    <strong>Issue:</strong> 12 units of Cardiac Stents (value: $18,000) marked as "used in surgery" but no corresponding 
                    surgical procedures documented. Last access: Night Shift Nurse Peter Kamau.
                  </p>
                  <div className="mt-2 flex gap-3 text-xs">
                    <span className="text-slate-600">⏰ Detected: Feb 27, 2026 08:15</span>
                    <span className="text-slate-600">📊 Confidence: 89%</span>
                    <span className="text-slate-600">🎯 Pattern: Equipment Theft</span>
                  </div>
                </div>
                <span className="px-3 py-1 bg-red-700 text-white rounded-full text-sm font-bold whitespace-nowrap ml-3">
                  CRITICAL
                </span>
              </div>
              <div className="mt-3 pt-3 border-t border-red-200 flex gap-2">
                <button className="px-4 py-2 bg-red-700 text-white text-sm rounded hover:bg-red-800">
                  Initiate Investigation
                </button>
                <button className="px-4 py-2 bg-blue-600 text-white text-sm rounded hover:bg-blue-700">
                  Physical Inventory Count
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* High Priority Alerts */}
        <div className="bg-white rounded-lg border border-slate-200 p-6">
          <h3 className="font-semibold mb-4 text-amber-700">⚠️ High Priority Alerts</h3>
          
          <div className="space-y-3">
            <div className="bg-amber-50 border border-amber-300 rounded-lg p-4">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <p className="font-semibold">Unusual After-Hours Access</p>
                  <p className="text-sm text-slate-600">Dr. Joseph Mwangi accessed 47 patient records between 11PM-3AM with no scheduled shifts</p>
                </div>
                <span className="px-3 py-1 bg-amber-600 text-white rounded-full text-sm font-medium whitespace-nowrap ml-3">
                  HIGH
                </span>
              </div>
            </div>

            <div className="bg-amber-50 border border-amber-300 rounded-lg p-4">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <p className="font-semibold">Prescription Override Pattern</p>
                  <p className="text-sm text-slate-600">Dr. Alice Njeri overrode drug interaction warnings 15 times this week (avg: 2/week)</p>
                </div>
                <span className="px-3 py-1 bg-amber-600 text-white rounded-full text-sm font-medium whitespace-nowrap ml-3">
                  HIGH
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function EmergencyAdmissionProto() {
  return (
    <div className="bg-white rounded-xl border border-slate-200 p-8">
      <h2 className="text-xl font-semibold mb-6">Emergency Department - Fast Track Admission</h2>
      
      <div className="bg-slate-50 rounded-lg border-2 border-slate-300 p-8">
        <div className="bg-red-600 text-white px-6 py-3 rounded-t-lg flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <Clock className="w-5 h-5" />
            <span className="font-semibold">Emergency Admission - Triage Mode</span>
          </div>
          <span className="text-sm">Nurse: Elizabeth Wanjiru | ED Triage</span>
        </div>

        {/* Quick Search */}
        <div className="bg-white rounded-lg border-2 border-red-500 p-6 mb-6">
          <h3 className="font-semibold mb-4 text-red-700">⚡ Quick Patient Lookup</h3>
          <div className="flex gap-3 mb-4">
            <input
              type="text"
              placeholder="National ID, Phone, or Name..."
              className="flex-1 px-4 py-3 border border-slate-300 rounded-lg text-lg"
            />
            <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium">
              Search
            </button>
            <button className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 font-medium">
              Fingerprint
            </button>
          </div>
          
          <div className="bg-amber-50 border border-amber-300 rounded p-3">
            <p className="text-sm text-amber-900">
              <strong>⚠️ Emergency Mode:</strong> If patient unconscious/unresponsive, use "Unknown Patient" option. 
              Identity can be confirmed later.
            </p>
          </div>
        </div>

        {/* Triage Assessment */}
        <div className="bg-white rounded-lg border border-slate-200 p-6 mb-6">
          <h3 className="font-semibold mb-4">Triage Assessment (ESI Level)</h3>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Chief Complaint *</label>
              <input
                type="text"
                placeholder="Brief description..."
                className="w-full px-4 py-2 border border-slate-300 rounded-lg"
                defaultValue="Chest pain radiating to left arm, 30 minutes duration"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-3">Emergency Severity Index (ESI) *</label>
              <div className="grid grid-cols-5 gap-2">
                <button className="p-3 border-2 border-red-600 bg-red-50 rounded-lg text-center">
                  <div className="text-2xl font-bold text-red-600">1</div>
                  <div className="text-xs text-red-900">Resuscitation</div>
                </button>
                <button className="p-3 border-2 border-orange-600 bg-orange-50 rounded-lg text-center">
                  <div className="text-2xl font-bold text-orange-600">2</div>
                  <div className="text-xs text-orange-900">Emergent</div>
                </button>
                <button className="p-3 border-2 border-amber-500 bg-amber-50 rounded-lg text-center">
                  <div className="text-2xl font-bold text-amber-600">3</div>
                  <div className="text-xs text-amber-900">Urgent</div>
                </button>
                <button className="p-3 border border-slate-300 bg-white rounded-lg text-center">
                  <div className="text-2xl font-bold text-slate-600">4</div>
                  <div className="text-xs text-slate-600">Less Urgent</div>
                </button>
                <button className="p-3 border border-slate-300 bg-white rounded-lg text-center">
                  <div className="text-2xl font-bold text-slate-600">5</div>
                  <div className="text-xs text-slate-600">Non-Urgent</div>
                </button>
              </div>
            </div>

            {/* Quick Vitals */}
            <div className="bg-slate-50 rounded-lg p-4">
              <p className="font-medium mb-3">Quick Vital Signs</p>
              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs text-slate-600 mb-1">BP</label>
                  <div className="flex gap-1">
                    <input type="number" defaultValue="165" className="w-16 px-2 py-1 border rounded text-sm" />
                    <span className="text-slate-400">/</span>
                    <input type="number" defaultValue="95" className="w-16 px-2 py-1 border rounded text-sm" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs text-slate-600 mb-1">HR</label>
                  <input type="number" defaultValue="102" className="w-full px-2 py-1 border rounded text-sm" />
                </div>
                <div>
                  <label className="block text-xs text-slate-600 mb-1">SpO2</label>
                  <input type="number" defaultValue="96" className="w-full px-2 py-1 border rounded text-sm" />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Triage Notes</label>
              <textarea
                className="w-full px-4 py-2 border border-slate-300 rounded-lg"
                rows={3}
                placeholder="Brief assessment, vital signs, immediate concerns..."
                defaultValue="45yo male, alert and oriented. Describes crushing chest pain 7/10, started while climbing stairs. Diaphoretic, anxious. No previous cardiac history. Aspirin given immediately."
              />
            </div>
          </div>
        </div>

        {/* Fast Actions */}
        <div className="bg-white rounded-lg border border-slate-200 p-6 mb-6">
          <h3 className="font-semibold mb-4">Emergency Orders (Pre-Physician)</h3>
          <div className="grid md:grid-cols-2 gap-3">
            <button className="px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-left flex items-center gap-2">
              <span className="text-2xl">💊</span>
              <span>Aspirin 300mg STAT</span>
            </button>
            <button className="px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-left flex items-center gap-2">
              <span className="text-2xl">❤️</span>
              <span>12-Lead ECG</span>
            </button>
            <button className="px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-left flex items-center gap-2">
              <span className="text-2xl">💉</span>
              <span>IV Access + Bloods</span>
            </button>
            <button className="px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-left flex items-center gap-2">
              <span className="text-2xl">🩺</span>
              <span>Continuous Monitoring</span>
            </button>
          </div>
        </div>

        {/* Admission Decision */}
        <div className="flex gap-3">
          <button className="flex-1 px-6 py-4 bg-red-600 text-white rounded-lg hover:bg-red-700 font-bold text-lg">
            🚨 Admit to Resuscitation Bay
          </button>
          <button className="flex-1 px-6 py-4 bg-orange-600 text-white rounded-lg hover:bg-orange-700 font-bold text-lg">
            ⚡ Fast Track to ED Bed
          </button>
        </div>

        {/* Success */}
        <div className="mt-6 bg-emerald-50 border border-emerald-200 rounded-lg p-4">
          <p className="font-medium text-emerald-900">✓ Patient Triaged Successfully</p>
          <p className="text-sm text-slate-700 mt-1">
            Assigned to Resuscitation Bay 2. ED physician Dr. James Omondi notified. 
            Cardiology on standby. Time to triage: 3 minutes.
          </p>
        </div>
      </div>
    </div>
  );
}

function SurgerySchedulingProto() {
  return (
    <div className="bg-white rounded-xl border border-slate-200 p-8">
      <h2 className="text-xl font-semibold mb-6">Operating Room Scheduling & Resource Management</h2>
      
      <div className="bg-slate-50 rounded-lg border-2 border-slate-300 p-8">
        <div className="bg-teal-600 text-white px-6 py-3 rounded-t-lg flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <Scissors className="w-5 h-5" />
            <span className="font-semibold">OR Scheduling - Surgery Coordination</span>
          </div>
          <span className="text-sm">Coordinator: Nancy Achieng | Surgical Services</span>
        </div>

        {/* OR Calendar View */}
        <div className="bg-white rounded-lg border border-slate-200 p-6 mb-6">
          <h3 className="font-semibold mb-4">Today's OR Schedule - March 2, 2026</h3>
          
          <div className="space-y-2">
            {/* OR 1 */}
            <div className="border-l-4 border-emerald-500 bg-emerald-50 p-4 rounded">
              <div className="flex items-start justify-between">
                <div>
                  <p className="font-semibold">OR 1 | 08:00 - 11:00</p>
                  <p className="text-sm text-slate-700">Laparoscopic Cholecystectomy</p>
                  <p className="text-xs text-slate-600">Patient: Sarah Njeri | Surgeon: Dr. David Kimani</p>
                </div>
                <span className="px-2 py-1 bg-emerald-600 text-white rounded text-xs">IN PROGRESS</span>
              </div>
            </div>

            {/* OR 2 */}
            <div className="border-l-4 border-blue-500 bg-blue-50 p-4 rounded">
              <div className="flex items-start justify-between">
                <div>
                  <p className="font-semibold">OR 2 | 09:00 - 13:00</p>
                  <p className="text-sm text-slate-700">Total Hip Replacement</p>
                  <p className="text-xs text-slate-600">Patient: John Kamau | Surgeon: Dr. Peter Omondi</p>
                </div>
                <span className="px-2 py-1 bg-blue-600 text-white rounded text-xs">SCHEDULED</span>
              </div>
            </div>

            {/* OR 3 */}
            <div className="border-l-4 border-amber-500 bg-amber-50 p-4 rounded">
              <div className="flex items-start justify-between">
                <div>
                  <p className="font-semibold">OR 3 | 14:00 - 16:00</p>
                  <p className="text-sm text-slate-700">Appendectomy</p>
                  <p className="text-xs text-slate-600">Patient: TBD | Surgeon: Dr. Grace Wambui</p>
                </div>
                <span className="px-2 py-1 bg-amber-600 text-white rounded text-xs">TENTATIVE</span>
              </div>
            </div>
          </div>
        </div>

        {/* New Surgery Booking */}
        <div className="bg-white rounded-lg border border-slate-200 p-6 mb-6">
          <h3 className="font-semibold mb-4">Schedule New Surgery</h3>
          
          <div className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Patient UNPI *</label>
                <input
                  type="text"
                  placeholder="Scan or enter patient ID..."
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg"
                  defaultValue="MH-2026-345678901-4"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Surgeon *</label>
                <select className="w-full px-4 py-2 border border-slate-300 rounded-lg">
                  <option>Dr. David Kimani - General Surgery</option>
                  <option>Dr. Peter Omondi - Orthopedics</option>
                  <option>Dr. Grace Wambui - General Surgery</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Procedure *</label>
              <input
                type="text"
                placeholder="Search procedure..."
                className="w-full px-4 py-2 border border-slate-300 rounded-lg"
                defaultValue="Inguinal Hernia Repair - Laparoscopic"
              />
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Priority</label>
                <select className="w-full px-4 py-2 border border-slate-300 rounded-lg">
                  <option>Elective</option>
                  <option>Urgent (within 7 days)</option>
                  <option>Emergency (within 24h)</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Estimated Duration</label>
                <input
                  type="text"
                  defaultValue="2 hours"
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Anesthesia Type</label>
                <select className="w-full px-4 py-2 border border-slate-300 rounded-lg">
                  <option>General</option>
                  <option>Spinal</option>
                  <option>Local</option>
                </select>
              </div>
            </div>

            {/* Resource Requirements */}
            <div className="bg-slate-50 rounded-lg p-4">
              <p className="font-medium mb-3">Required Resources</p>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <input type="checkbox" id="equip1" className="w-4 h-4" defaultChecked />
                  <label htmlFor="equip1" className="text-sm">Laparoscopic equipment set</label>
                </div>
                <div className="flex items-center gap-2">
                  <input type="checkbox" id="equip2" className="w-4 h-4" defaultChecked />
                  <label htmlFor="equip2" className="text-sm">Mesh implant (medium)</label>
                </div>
                <div className="flex items-center gap-2">
                  <input type="checkbox" id="equip3" className="w-4 h-4" />
                  <label htmlFor="equip3" className="text-sm">Blood products on standby</label>
                </div>
              </div>
            </div>

            {/* Availability Check */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="font-medium mb-2">Available Time Slots</p>
              <div className="grid grid-cols-3 gap-2">
                <button className="px-3 py-2 bg-emerald-100 border border-emerald-400 rounded text-sm hover:bg-emerald-200">
                  Mar 5, 10:00 AM
                </button>
                <button className="px-3 py-2 bg-emerald-100 border border-emerald-400 rounded text-sm hover:bg-emerald-200">
                  Mar 6, 14:00 PM
                </button>
                <button className="px-3 py-2 bg-emerald-100 border border-emerald-400 rounded text-sm hover:bg-emerald-200">
                  Mar 8, 09:00 AM
                </button>
              </div>
            </div>

            <button className="w-full px-6 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 font-medium">
              Book Surgery & Reserve OR
            </button>
          </div>
        </div>

        {/* Success */}
        <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
          <p className="font-medium text-emerald-900">✓ Surgery Scheduled Successfully</p>
          <p className="text-sm text-slate-700 mt-1">
            OR 2 reserved for March 5, 2026 at 10:00 AM. Pre-op assessment scheduled. 
            Surgeon, anesthesiologist, and nursing team notified.
          </p>
        </div>
      </div>
    </div>
  );
}

function PatientSearchProto() {
  return (
    <div className="bg-white rounded-xl border border-slate-200 p-8">
      <h2 className="text-xl font-semibold mb-6">Advanced Patient Search & Record Retrieval</h2>
      
      <div className="bg-slate-50 rounded-lg border-2 border-slate-300 p-8">
        <div className="bg-indigo-600 text-white px-6 py-3 rounded-t-lg flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <Search className="w-5 h-5" />
            <span className="font-semibold">Patient Search - Multi-criteria Lookup</span>
          </div>
          <span className="text-sm">All Staff | National EHR Database</span>
        </div>

        {/* Search Filters */}
        <div className="bg-white rounded-lg border border-slate-200 p-6 mb-6">
          <h3 className="font-semibold mb-4">Search Criteria</h3>
          
          <div className="space-y-4">
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">National ID</label>
                <input
                  type="text"
                  placeholder="Enter ID number..."
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Patient UNPI</label>
                <input
                  type="text"
                  placeholder="MH-YYYY-XXXXXXXXX-C"
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Phone Number</label>
                <input
                  type="tel"
                  placeholder="+254..."
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">First Name</label>
                <input
                  type="text"
                  placeholder="Enter first name..."
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg"
                  defaultValue="John"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Last Name</label>
                <input
                  type="text"
                  placeholder="Enter last name..."
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg"
                  defaultValue="Kamau"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Date of Birth</label>
                <input
                  type="date"
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg"
                />
              </div>
            </div>

            <div className="flex gap-3">
              <button className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 font-medium">
                Search Records
              </button>
              <button className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 font-medium">
                Biometric Search
              </button>
              <button className="px-6 py-3 bg-slate-300 text-slate-700 rounded-lg hover:bg-slate-400">
                Clear Filters
              </button>
            </div>
          </div>
        </div>

        {/* Search Results */}
        <div className="bg-white rounded-lg border border-slate-200 p-6">
          <h3 className="font-semibold mb-4">Search Results (3 matches found)</h3>
          
          <div className="space-y-3">
            {/* Result 1 - Exact Match */}
            <div className="bg-emerald-50 border-2 border-emerald-500 rounded-lg p-4">
              <div className="flex items-start justify-between mb-2">
                <div className="flex-1">
                  <p className="font-semibold text-lg">John Kamau</p>
                  <div className="grid md:grid-cols-2 gap-x-6 mt-2">
                    <p className="text-sm text-slate-600">UNPI: <span className="font-mono">MH-2026-123456789-7</span></p>
                    <p className="text-sm text-slate-600">DOB: March 15, 1985 (39 years)</p>
                    <p className="text-sm text-slate-600">Gender: Male</p>
                    <p className="text-sm text-slate-600">Phone: +254712345678</p>
                    <p className="text-sm text-slate-600">National ID: 12345678</p>
                    <p className="text-sm text-slate-600">Last Visit: Feb 27, 2026</p>
                  </div>
                  <div className="mt-2">
                    <span className="text-xs bg-red-100 text-red-700 px-2 py-1 rounded mr-2">Allergy: Penicillin</span>
                    <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">Chronic: Hypertension</span>
                  </div>
                </div>
                <span className="px-3 py-1 bg-emerald-600 text-white rounded-full text-sm font-semibold ml-3">
                  EXACT MATCH
                </span>
              </div>
              <div className="mt-3 pt-3 border-t border-emerald-200 flex gap-2">
                <button className="px-4 py-2 bg-emerald-600 text-white text-sm rounded hover:bg-emerald-700">
                  View Full Record
                </button>
                <button className="px-4 py-2 bg-blue-600 text-white text-sm rounded hover:bg-blue-700">
                  New Encounter
                </button>
                <button className="px-4 py-2 bg-slate-300 text-slate-700 text-sm rounded hover:bg-slate-400">
                  View Timeline
                </button>
              </div>
            </div>

            {/* Result 2 - Partial Match */}
            <div className="bg-slate-50 border border-slate-300 rounded-lg p-4">
              <div className="flex items-start justify-between mb-2">
                <div className="flex-1">
                  <p className="font-semibold">John Kariuki Kamau</p>
                  <div className="grid md:grid-cols-2 gap-x-6 mt-2">
                    <p className="text-sm text-slate-600">UNPI: <span className="font-mono">MH-2024-887766554-9</span></p>
                    <p className="text-sm text-slate-600">DOB: July 22, 1988 (37 years)</p>
                    <p className="text-sm text-slate-600">Gender: Male</p>
                    <p className="text-sm text-slate-600">Phone: +254798765432</p>
                  </div>
                </div>
                <span className="px-3 py-1 bg-slate-400 text-white rounded-full text-sm ml-3">
                  PARTIAL
                </span>
              </div>
            </div>

            {/* Result 3 - Partial Match */}
            <div className="bg-slate-50 border border-slate-300 rounded-lg p-4">
              <div className="flex items-start justify-between mb-2">
                <div className="flex-1">
                  <p className="font-semibold">John Mwangi Kamau</p>
                  <div className="grid md:grid-cols-2 gap-x-6 mt-2">
                    <p className="text-sm text-slate-600">UNPI: <span className="font-mono">MH-2025-445566778-2</span></p>
                    <p className="text-sm text-slate-600">DOB: December 3, 1990 (35 years)</p>
                    <p className="text-sm text-slate-600">Gender: Male</p>
                    <p className="text-sm text-slate-600">Phone: +254723456789</p>
                  </div>
                </div>
                <span className="px-3 py-1 bg-slate-400 text-white rounded-full text-sm ml-3">
                  PARTIAL
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function BillingProto() {
  return (
    <div className="bg-white rounded-xl border border-slate-200 p-8">
      <h2 className="text-xl font-semibold mb-6">Billing & Insurance Claims Processing</h2>
      
      <div className="bg-slate-50 rounded-lg border-2 border-slate-300 p-8">
        <div className="bg-green-700 text-white px-6 py-3 rounded-t-lg flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <DollarSign className="w-5 h-5" />
            <span className="font-semibold">Billing Department - Claims Processing</span>
          </div>
          <span className="text-sm">Billing Officer: Lucy Wanjiku | Finance Dept</span>
        </div>

        {/* Patient Encounter Summary */}
        <div className="bg-white rounded-lg border border-slate-200 p-6 mb-6">
          <h3 className="font-semibold mb-4">Encounter Billing Summary</h3>
          
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm font-medium text-slate-700">Patient: John Kamau</p>
                <p className="text-xs text-slate-600">UNPI: MH-2026-123456789-7</p>
                <p className="text-xs text-slate-600">Insurance: National Health Insurance (NHI)</p>
                <p className="text-xs text-slate-600">Policy: NHI-2026-123456</p>
              </div>
              <div>
                <p className="text-sm font-medium text-slate-700">Encounter: Outpatient Visit</p>
                <p className="text-xs text-slate-600">Date: Feb 27, 2026</p>
                <p className="text-xs text-slate-600">Provider: Dr. Peter Mutua</p>
                <p className="text-xs text-slate-600">Facility: St. Mary's Hospital</p>
              </div>
            </div>
          </div>

          {/* Itemized Charges */}
          <div className="space-y-2">
            <div className="bg-slate-50 rounded p-3 flex justify-between items-center">
              <div>
                <p className="font-medium text-sm">Consultation - Internal Medicine</p>
                <p className="text-xs text-slate-600">CPT Code: 99214 | Provider: Dr. Peter Mutua</p>
              </div>
              <p className="font-semibold">$45.00</p>
            </div>

            <div className="bg-slate-50 rounded p-3 flex justify-between items-center">
              <div>
                <p className="font-medium text-sm">Urinalysis with Culture</p>
                <p className="text-xs text-slate-600">CPT Code: 87088 | Lab: St. Mary's Lab</p>
              </div>
              <p className="font-semibold">$28.00</p>
            </div>

            <div className="bg-slate-50 rounded p-3 flex justify-between items-center">
              <div>
                <p className="font-medium text-sm">Complete Blood Count (CBC)</p>
                <p className="text-xs text-slate-600">CPT Code: 85025 | Lab: St. Mary's Lab</p>
              </div>
              <p className="font-semibold">$18.00</p>
            </div>

            <div className="bg-slate-50 rounded p-3 flex justify-between items-center">
              <div>
                <p className="font-medium text-sm">Ciprofloxacin 500mg x20 tablets</p>
                <p className="text-xs text-slate-600">NDC: 12345-678-90 | Pharmacy</p>
              </div>
              <p className="font-semibold">$12.50</p>
            </div>
          </div>

          {/* Total Calculation */}
          <div className="mt-4 pt-4 border-t-2 border-slate-300">
            <div className="flex justify-between items-center mb-2">
              <p className="text-sm">Subtotal</p>
              <p className="font-semibold">$103.50</p>
            </div>
            <div className="flex justify-between items-center mb-2">
              <p className="text-sm text-emerald-700">Insurance Coverage (80%)</p>
              <p className="font-semibold text-emerald-700">-$82.80</p>
            </div>
            <div className="flex justify-between items-center text-lg font-bold pt-2 border-t border-slate-200">
              <p>Patient Responsibility</p>
              <p className="text-blue-700">$20.70</p>
            </div>
          </div>
        </div>

        {/* Insurance Verification */}
        <div className="bg-white rounded-lg border border-slate-200 p-6 mb-6">
          <h3 className="font-semibold mb-4">Insurance Verification Status</h3>
          
          <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4 mb-3">
            <div className="flex items-start gap-3">
              <div className="bg-emerald-600 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">
                ✓
              </div>
              <div className="flex-1">
                <p className="font-medium text-emerald-900">Coverage Verified</p>
                <p className="text-sm text-slate-600 mt-1">
                  Policy active. Outpatient services covered at 80%. 
                  Pre-authorization not required for routine consultations.
                </p>
                <p className="text-xs text-slate-500 mt-2">
                  Verified on: Feb 27, 2026 14:52 | Response time: 2.3 seconds
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-3">
            <div className="bg-slate-50 rounded p-3">
              <p className="text-xs text-slate-600">Annual Deductible</p>
              <p className="font-semibold">$150 / $500</p>
              <p className="text-xs text-emerald-600">$350 remaining</p>
            </div>
            <div className="bg-slate-50 rounded p-3">
              <p className="text-xs text-slate-600">Out-of-Pocket Max</p>
              <p className="font-semibold">$280 / $2,000</p>
              <p className="text-xs text-slate-600">$1,720 remaining</p>
            </div>
            <div className="bg-slate-50 rounded p-3">
              <p className="text-xs text-slate-600">Policy Expires</p>
              <p className="font-semibold">Dec 31, 2026</p>
              <p className="text-xs text-blue-600">304 days</p>
            </div>
          </div>
        </div>

        {/* Submit Claim */}
        <div className="bg-white rounded-lg border border-slate-200 p-6 mb-6">
          <h3 className="font-semibold mb-4">Submit Insurance Claim</h3>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Diagnosis Codes (ICD-10)</label>
              <div className="bg-slate-50 rounded p-3">
                <p className="text-sm">N39.0 - Urinary tract infection, site not specified</p>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Additional Notes for Insurer</label>
              <textarea
                className="w-full px-4 py-2 border border-slate-300 rounded-lg"
                rows={2}
                placeholder="Any special circumstances or documentation..."
              />
            </div>

            <div className="flex items-center gap-2">
              <input type="checkbox" id="medical-necessity" className="w-4 h-4" defaultChecked />
              <label htmlFor="medical-necessity" className="text-sm text-slate-700">
                I certify that services provided were medically necessary
              </label>
            </div>

            <div className="flex gap-3">
              <button className="px-6 py-3 bg-green-700 text-white rounded-lg hover:bg-green-800 font-medium">
                Submit Claim to NHI
              </button>
              <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium">
                Generate Patient Invoice
              </button>
            </div>
          </div>
        </div>

        {/* Success */}
        <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
          <p className="font-medium text-emerald-900">✓ Claim Submitted Successfully</p>
          <p className="text-sm text-slate-700 mt-1">
            Claim ID: CLM-2026-0012345 | Expected adjudication: 3-5 business days. 
            Patient invoice generated and sent via SMS.
          </p>
        </div>
      </div>
    </div>
  );
}

function AnalyticsProto() {
  return (
    <div className="bg-white rounded-xl border border-slate-200 p-8">
      <h2 className="text-xl font-semibold mb-6">Hospital Analytics & Performance Dashboard</h2>
      
      <div className="bg-slate-50 rounded-lg border-2 border-slate-300 p-8">
        <div className="bg-violet-700 text-white px-6 py-3 rounded-t-lg flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <BarChart3 className="w-5 h-5" />
            <span className="font-semibold">Executive Dashboard - Real-time Analytics</span>
          </div>
          <span className="text-sm">Director: Dr. Susan Karanja | Hospital Administration</span>
        </div>

        {/* Key Metrics */}
        <div className="grid md:grid-cols-4 gap-4 mb-6">
          <div className="bg-white rounded-lg border border-slate-200 p-4">
            <p className="text-sm text-slate-600">Daily Encounters</p>
            <p className="text-3xl font-bold text-blue-600">347</p>
            <p className="text-xs text-emerald-600 mt-1">↑ 12% vs last week</p>
          </div>
          <div className="bg-white rounded-lg border border-slate-200 p-4">
            <p className="text-sm text-slate-600">Bed Occupancy</p>
            <p className="text-3xl font-bold text-amber-600">86%</p>
            <p className="text-xs text-slate-500 mt-1">203 / 236 beds</p>
          </div>
          <div className="bg-white rounded-lg border border-slate-200 p-4">
            <p className="text-sm text-slate-600">Avg Wait Time (ED)</p>
            <p className="text-3xl font-bold text-red-600">42min</p>
            <p className="text-xs text-red-600 mt-1">↑ Above target (30min)</p>
          </div>
          <div className="bg-white rounded-lg border border-slate-200 p-4">
            <p className="text-sm text-slate-600">Revenue (Today)</p>
            <p className="text-3xl font-bold text-emerald-600">$28.4K</p>
            <p className="text-xs text-emerald-600 mt-1">↑ 8% vs average</p>
          </div>
        </div>

        {/* Charts Section */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {/* Patient Volume Chart */}
          <div className="bg-white rounded-lg border border-slate-200 p-6">
            <h3 className="font-semibold mb-4">Patient Volume - Last 7 Days</h3>
            <div className="space-y-2">
              {[
                { day: 'Mon', count: 312, color: 'bg-blue-500', width: '78%' },
                { day: 'Tue', count: 298, color: 'bg-blue-500', width: '75%' },
                { day: 'Wed', count: 334, color: 'bg-blue-500', width: '84%' },
                { day: 'Thu', count: 289, color: 'bg-blue-500', width: '72%' },
                { day: 'Fri', count: 356, color: 'bg-blue-500', width: '89%' },
                { day: 'Sat', count: 267, color: 'bg-slate-400', width: '67%' },
                { day: 'Sun', count: 245, color: 'bg-slate-400', width: '61%' },
              ].map((item) => (
                <div key={item.day} className="flex items-center gap-3">
                  <span className="text-sm font-medium w-12">{item.day}</span>
                  <div className="flex-1 bg-slate-100 rounded-full h-8 relative">
                    <div 
                      className={`${item.color} h-8 rounded-full flex items-center justify-end pr-3`}
                      style={{ width: item.width }}
                    >
                      <span className="text-white text-sm font-semibold">{item.count}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Department Performance */}
          <div className="bg-white rounded-lg border border-slate-200 p-6">
            <h3 className="font-semibold mb-4">Department Activity</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-slate-50 rounded">
                <div>
                  <p className="font-medium">Emergency Department</p>
                  <p className="text-xs text-slate-600">78 patients today</p>
                </div>
                <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm font-medium">
                  BUSY
                </span>
              </div>
              <div className="flex items-center justify-between p-3 bg-slate-50 rounded">
                <div>
                  <p className="font-medium">Outpatient Clinic</p>
                  <p className="text-xs text-slate-600">156 patients today</p>
                </div>
                <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium">
                  NORMAL
                </span>
              </div>
              <div className="flex items-center justify-between p-3 bg-slate-50 rounded">
                <div>
                  <p className="font-medium">Laboratory</p>
                  <p className="text-xs text-slate-600">234 tests processed</p>
                </div>
                <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium">
                  NORMAL
                </span>
              </div>
              <div className="flex items-center justify-between p-3 bg-slate-50 rounded">
                <div>
                  <p className="font-medium">Pharmacy</p>
                  <p className="text-xs text-slate-600">412 prescriptions filled</p>
                </div>
                <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-sm font-medium">
                  HIGH
                </span>
              </div>
              <div className="flex items-center justify-between p-3 bg-slate-50 rounded">
                <div>
                  <p className="font-medium">Operating Rooms</p>
                  <p className="text-xs text-slate-600">8 surgeries completed</p>
                </div>
                <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium">
                  ON TRACK
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Quality Metrics */}
        <div className="bg-white rounded-lg border border-slate-200 p-6 mb-6">
          <h3 className="font-semibold mb-4">Quality & Safety Indicators</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-emerald-50 border border-emerald-200 rounded">
              <p className="text-sm text-slate-700 mb-2">Medication Errors</p>
              <p className="text-2xl font-bold text-emerald-700">0</p>
              <p className="text-xs text-slate-600 mt-1">Last 30 days</p>
            </div>
            <div className="p-4 bg-blue-50 border border-blue-200 rounded">
              <p className="text-sm text-slate-700 mb-2">Patient Satisfaction</p>
              <p className="text-2xl font-bold text-blue-700">4.6/5</p>
              <p className="text-xs text-slate-600 mt-1">Based on 234 surveys</p>
            </div>
            <div className="p-4 bg-emerald-50 border border-emerald-200 rounded">
              <p className="text-sm text-slate-700 mb-2">Hand Hygiene Compliance</p>
              <p className="text-2xl font-bold text-emerald-700">94%</p>
              <p className="text-xs text-slate-600 mt-1">Target: 90%</p>
            </div>
          </div>
        </div>

        {/* Financial Summary */}
        <div className="bg-white rounded-lg border border-slate-200 p-6">
          <h3 className="font-semibold mb-4">Financial Overview - Current Month</h3>
          <div className="grid md:grid-cols-4 gap-4">
            <div className="p-4 bg-slate-50 rounded">
              <p className="text-xs text-slate-600">Total Revenue</p>
              <p className="text-xl font-bold text-slate-900">$847K</p>
            </div>
            <div className="p-4 bg-slate-50 rounded">
              <p className="text-xs text-slate-600">Insurance Claims</p>
              <p className="text-xl font-bold text-blue-700">$634K</p>
              <p className="text-xs text-slate-500">75% of revenue</p>
            </div>
            <div className="p-4 bg-slate-50 rounded">
              <p className="text-xs text-slate-600">Out-of-Pocket</p>
              <p className="text-xl font-bold text-emerald-700">$213K</p>
              <p className="text-xs text-slate-500">25% of revenue</p>
            </div>
            <div className="p-4 bg-slate-50 rounded">
              <p className="text-xs text-slate-600">Collection Rate</p>
              <p className="text-xl font-bold text-emerald-700">91%</p>
              <p className="text-xs text-emerald-600">Above target</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
