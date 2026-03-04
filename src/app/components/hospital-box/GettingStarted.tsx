import { useState } from 'react';
import { 
  Play, 
  User, 
  CheckCircle, 
  ArrowRight, 
  AlertTriangle,
  TestTube,
  Pill,
  FileImage,
  Activity,
  Shield,
  Clock,
  Target
} from 'lucide-react';

export function GettingStarted() {
  const [expandedDemo, setExpandedDemo] = useState<number | null>(null);

  const demoScenarios = [
    {
      id: 1,
      title: "Critical Lab Result Workflow",
      duration: "3 minutes",
      icon: TestTube,
      difficulty: "Intermediate",
      steps: [
        {
          role: "Doctor (Dr. Karim)",
          action: "Create a patient encounter",
          details: [
            "Go to 'Clinical Station' module",
            "Select patient 'Mohammed Al-Sadr'",
            "Click 'Start Encounter'",
            "Add diagnosis: E11.9 (Type 2 Diabetes)",
            "Order lab test: 'Serum Potassium'",
            "Complete encounter"
          ]
        },
        {
          role: "Lab Tech (Omar Ibrahim)",
          action: "Process and report critical result",
          details: [
            "Switch user to 'Omar Ibrahim' (click profile → Switch User → omar-ibrahim)",
            "Go to 'Laboratory' module",
            "Find the Serum Potassium order in 'Pending Orders'",
            "Click 'Accept Order' (moves to In Progress)",
            "Click 'Submit Result'",
            "Enter result: 'Serum Potassium: 2.1 mmol/L (Critical Low)'",
            "✅ Check 'Mark as Critical Result'",
            "Enter your full name: 'Omar Ibrahim'",
            "Click 'Submit Critical Result'"
          ]
        },
        {
          role: "Doctor (Dr. Karim)",
          action: "View critical notification",
          details: [
            "Switch back to 'Dr. Karim Al-Baghdadi'",
            "Notice the red notification badge (🔴 1)",
            "Click the bell icon in top-right",
            "See: '🚨 Critical Lab Result: Patient Mohammed...'",
            "Click notification to view details"
          ]
        }
      ],
      outcome: "✅ Critical result safely communicated with mandatory acknowledgment and instant notification!"
    },
    {
      id: 2,
      title: "Controlled Substance Dual Signature",
      duration: "4 minutes",
      icon: Pill,
      difficulty: "Advanced",
      steps: [
        {
          role: "Doctor (Dr. Karim)",
          action: "Order controlled medication",
          details: [
            "Go to 'Clinical Station'",
            "Select patient 'Fatima Hassan'",
            "Start encounter",
            "Add diagnosis: R52 (Pain, unspecified)",
            "Create medication order manually:",
            "  - Description: 'Morphine 10mg IV'",
            "  - Select medication: 'Morphine 10mg/mL injection' (controlled)",
            "  - Dosage: '10mg', Frequency: 'Q4H PRN', Duration: '48 hours'",
            "Complete encounter"
          ]
        },
        {
          role: "Pharmacist (Ahmed Rashid)",
          action: "Attempt to dispense with witness",
          details: [
            "Switch to 'Ahmed Rashid' (pharmacist)",
            "Go to 'Pharmacy' module",
            "Find Morphine order in 'Pending Orders'",
            "Click 'Accept Order'",
            "Click '🔐 Dispense (Dual Signature)'",
            "Notice: System detects CONTROLLED SUBSTANCE",
            "Set quantity: 2 ampules",
            "Select witness: 'Nurse Fatima' from dropdown",
            "Ask witness to enter their PIN: 5678",
            "Click 'Dispense with Dual Signature'"
          ]
        },
        {
          role: "System Verification",
          action: "Security checks performed",
          details: [
            "✅ System validates witness PIN against database",
            "✅ System blocks self-witnessing (pharmacist can't witness themselves)",
            "✅ Inventory auto-decrements by 2 units",
            "✅ Audit log created with both signatures",
            "✅ Dual signature badge displayed on dispensed order"
          ]
        }
      ],
      outcome: "✅ Controlled substance safely dispensed with dual signature verification preventing diversion!"
    },
    {
      id: 3,
      title: "Auto-EWS Triage with Priority Routing",
      duration: "2 minutes",
      icon: Activity,
      difficulty: "Beginner",
      steps: [
        {
          role: "Nurse (Layla Ahmed)",
          action: "Triage a patient with vitals",
          details: [
            "Switch to 'Layla Ahmed' (nurse)",
            "Go to 'Intelligent Triage' module",
            "Select patient 'Ahmed Khalil' from dropdown",
            "Enter vitals:",
            "  - Blood Pressure: 85/50 (Systolic < 90 = 3 points)",
            "  - Heart Rate: 125 (>110 = 2 points)",
            "  - Respiratory Rate: 25 (21-24 = 2 points)",
            "  - Temperature: 38.5°C (normal = 0 points)",
            "  - SpO2: 94% (normal = 0 points)",
            "  - Consciousness: Alert (normal = 0 points)",
            "Click 'Calculate EWS & Triage'",
            "Watch the system auto-calculate: EWS = 7 points"
          ]
        },
        {
          role: "System Auto-Actions",
          action: "Automatic priority assignment",
          details: [
            "✅ System assigns priority: EMERGENCY (EWS ≥ 7)",
            "✅ Patient appears in red 'EMERGENCY' section",
            "✅ Critical notification created for doctors",
            "✅ Auto-invoice generated in billing",
            "✅ All actions logged in audit trail"
          ]
        }
      ],
      outcome: "✅ High-risk patient automatically identified and routed to emergency care!"
    },
    {
      id: 4,
      title: "Quick Protocol: Malaria Workup",
      duration: "2 minutes",
      icon: Target,
      difficulty: "Beginner",
      steps: [
        {
          role: "Doctor (Dr. Karim)",
          action: "Apply one-click protocol",
          details: [
            "Ensure you're logged in as 'Dr. Karim Al-Baghdadi'",
            "Go to 'Clinical Station'",
            "Select patient 'Zainab Ali' (Female, 28 years)",
            "Click 'Start Encounter'",
            "In 'Quick Protocols' section, click 'Malaria Protocol'",
            "Watch the system auto-populate:"
          ]
        },
        {
          role: "System Auto-Creates",
          action: "All orders generated instantly",
          details: [
            "📋 Diagnosis Added:",
            "  - B50.9 (Plasmodium falciparum malaria, unspecified)",
            "",
            "🧪 Lab Orders Created:",
            "  - Blood smear for malaria parasites (URGENT)",
            "  - Malaria Rapid Diagnostic Test (URGENT)",
            "  - Complete Blood Count (URGENT)",
            "",
            "💊 Medications Prescribed:",
            "  - Coartem 80/480mg BID x 3 days",
            "  - Paracetamol 500mg Q6H PRN",
            "",
            "🔔 Notifications Sent:",
            "  - Lab: 3 pending orders",
            "  - Pharmacy: 2 medication orders"
          ]
        }
      ],
      outcome: "✅ Complete malaria workup created in 5 seconds instead of 5 minutes of manual entry!"
    },
    {
      id: 5,
      title: "Antibiotic Stewardship Alert",
      duration: "2 minutes",
      icon: Shield,
      difficulty: "Beginner",
      steps: [
        {
          role: "Doctor (Dr. Karim)",
          action: "Trigger stewardship warning",
          details: [
            "Go to 'Clinical Station'",
            "Start encounter for any patient",
            "Add a non-infection diagnosis (e.g., J00 - Acute URI)",
            "Try to order an antibiotic medication:",
            "  - Description: 'Amoxicillin 500mg PO TID'",
            "  - Select: 'Amoxicillin 500mg capsule'",
            "Click 'Create Order'",
            "⚠️ System shows ANTIBIOTIC STEWARDSHIP WARNING:",
            "  'You are prescribing an antibiotic but no infection...'",
            "You can still proceed, but the warning is logged"
          ]
        }
      ],
      outcome: "✅ System promotes rational antibiotic use and reduces resistance!"
    },
    {
      id: 6,
      title: "Role-Based Access Control (RBAC)",
      duration: "3 minutes",
      icon: User,
      difficulty: "Beginner",
      steps: [
        {
          role: "Test Different Roles",
          action: "Switch between users",
          details: [
            "Click profile icon (top-right) → 'Switch User'",
            "Try each role and observe access:",
            "",
            "👨‍⚕️ Dr. Karim (Doctor):",
            "  - Can: Clinical, Triage (view), Patients",
            "  - Cannot: Pharmacy, Lab, Radiology",
            "",
            "👩‍⚕️ Nurse Layla (Nurse):",
            "  - Can: Triage only",
            "  - Cannot: Create orders, dispense",
            "",
            "💊 Ahmed Rashid (Pharmacist):",
            "  - Can: Pharmacy, Inventory",
            "  - Cannot: Clinical, Triage",
            "",
            "🔬 Omar Ibrahim (Lab Tech):",
            "  - Can: Laboratory only",
            "  - Cannot: All other modules",
            "",
            "🏥 Dr. Hassan (Administrator):",
            "  - Can: ALL modules",
            "  - Full system access"
          ]
        }
      ],
      outcome: "✅ Each user sees only what they need - preventing unauthorized actions!"
    }
  ];

  const quickTips = [
    {
      icon: User,
      title: "Switch Users",
      description: "Click your profile icon (top-right) → 'Switch User' to test different roles"
    },
    {
      icon: Clock,
      title: "Watch Day 0 Provisioning",
      description: "The first time you visit, watch the 8-second setup animation creating users, patients, and inventory"
    },
    {
      icon: AlertTriangle,
      title: "Critical Workflows",
      description: "Look for orange/red badges marked 'CRITICAL' or 'CONTROLLED' - these have special safety workflows"
    },
    {
      icon: CheckCircle,
      title: "Closed-Loop Tracking",
      description: "Every action creates notifications, updates queues, and logs audit trails automatically"
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 rounded-xl p-8 text-white">
        <h1 className="text-3xl font-bold mb-3">🚀 Getting Started with Hospital-in-a-Box</h1>
        <p className="text-emerald-100 text-lg">
          Follow these interactive demos to explore all the enterprise features of the Avicenna EHR system
        </p>
      </div>

      {/* Quick Tips */}
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
        <h2 className="text-xl font-semibold text-slate-900 mb-4 flex items-center gap-2">
          <Play className="w-6 h-6 text-blue-600" />
          Quick Tips Before You Start
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {quickTips.map((tip, index) => {
            const Icon = tip.icon;
            return (
              <div key={index} className="flex gap-3 bg-white rounded-lg p-4 border border-blue-100">
                <div className="p-2 bg-blue-50 rounded-lg h-fit">
                  <Icon className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">{tip.title}</h3>
                  <p className="text-sm text-slate-600">{tip.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Demo Scenarios */}
      <div>
        <h2 className="text-2xl font-semibold text-slate-900 mb-4">Interactive Demo Scenarios</h2>
        <p className="text-slate-600 mb-6">
          Click each scenario to expand and see step-by-step instructions. Follow along in the Hospital-in-a-Box system!
        </p>

        <div className="space-y-4">
          {demoScenarios.map((demo) => {
            const Icon = demo.icon;
            const isExpanded = expandedDemo === demo.id;

            return (
              <div
                key={demo.id}
                className="bg-white border-2 border-slate-200 rounded-xl overflow-hidden hover:border-emerald-300 transition-colors"
              >
                {/* Demo Header */}
                <button
                  onClick={() => setExpandedDemo(isExpanded ? null : demo.id)}
                  className="w-full p-6 flex items-center justify-between hover:bg-slate-50 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-emerald-50 rounded-xl">
                      <Icon className="w-6 h-6 text-emerald-600" />
                    </div>
                    <div className="text-left">
                      <h3 className="text-lg font-semibold text-slate-900 mb-1">
                        {demo.title}
                      </h3>
                      <div className="flex items-center gap-3 text-sm text-slate-600">
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {demo.duration}
                        </span>
                        <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                          demo.difficulty === 'Beginner' ? 'bg-green-100 text-green-700' :
                          demo.difficulty === 'Intermediate' ? 'bg-blue-100 text-blue-700' :
                          'bg-purple-100 text-purple-700'
                        }`}>
                          {demo.difficulty}
                        </span>
                      </div>
                    </div>
                  </div>
                  <ArrowRight className={`w-5 h-5 text-slate-400 transition-transform ${
                    isExpanded ? 'rotate-90' : ''
                  }`} />
                </button>

                {/* Demo Steps */}
                {isExpanded && (
                  <div className="px-6 pb-6 border-t border-slate-200 animate-in slide-in-from-top-2">
                    <div className="mt-6 space-y-6">
                      {demo.steps.map((step, stepIndex) => (
                        <div key={stepIndex} className="flex gap-4">
                          <div className="flex flex-col items-center">
                            <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 font-bold flex items-center justify-center flex-shrink-0">
                              {stepIndex + 1}
                            </div>
                            {stepIndex < demo.steps.length - 1 && (
                              <div className="w-0.5 h-full bg-emerald-200 my-2"></div>
                            )}
                          </div>
                          <div className="flex-1 pb-4">
                            <div className="bg-slate-50 rounded-lg p-4 mb-3">
                              <h4 className="font-semibold text-slate-900 mb-1">{step.role}</h4>
                              <p className="text-sm text-emerald-700 font-medium">{step.action}</p>
                            </div>
                            <ul className="space-y-2">
                              {step.details.map((detail, detailIndex) => (
                                <li key={detailIndex} className="text-sm text-slate-700 flex gap-2">
                                  {detail.trim() === '' ? (
                                    <div className="h-2"></div>
                                  ) : detail.startsWith('✅') || detail.startsWith('⚠️') || 
                                     detail.startsWith('📋') || detail.startsWith('🧪') || 
                                     detail.startsWith('💊') || detail.startsWith('🔔') ? (
                                    <span className="whitespace-pre-wrap">{detail}</span>
                                  ) : detail.startsWith('  -') ? (
                                    <>
                                      <span className="text-slate-400 ml-4">└</span>
                                      <span>{detail.substring(4)}</span>
                                    </>
                                  ) : (
                                    <>
                                      <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                                      <span>{detail}</span>
                                    </>
                                  )}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      ))}

                      {/* Outcome */}
                      <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4">
                        <h4 className="font-semibold text-emerald-900 mb-2 flex items-center gap-2">
                          <CheckCircle className="w-5 h-5" />
                          Expected Outcome
                        </h4>
                        <p className="text-sm text-emerald-800">{demo.outcome}</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* User Credentials Reference */}
      <div className="bg-white border border-slate-200 rounded-xl p-6">
        <h2 className="text-xl font-semibold text-slate-900 mb-4 flex items-center gap-2">
          <User className="w-6 h-6 text-slate-600" />
          User Credentials Quick Reference
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
          {[
            { name: 'Dr. Karim Al-Baghdadi', role: 'Doctor', id: 'karim-baghdadi', pin: '1234' },
            { name: 'Nurse Layla Ahmed', role: 'Nurse', id: 'layla-ahmed', pin: '2345' },
            { name: 'Ahmed Rashid', role: 'Pharmacist', id: 'ahmed-rashid', pin: '3456' },
            { name: 'Omar Ibrahim', role: 'Lab Tech', id: 'omar-ibrahim', pin: '4567' },
            { name: 'Nurse Fatima', role: 'Nurse', id: 'fatima-nurse', pin: '5678' },
            { name: 'Dr. Radiologist', role: 'Radiologist', id: 'radiologist-dr', pin: '6789' },
            { name: 'Sara Receptionist', role: 'Receptionist', id: 'sara-reception', pin: '7890' },
            { name: 'Dr. Hassan', role: 'Administrator', id: 'admin-hassan', pin: '0000' },
          ].map((user) => (
            <div key={user.id} className="bg-slate-50 rounded-lg p-3 border border-slate-200">
              <div className="font-semibold text-slate-900 text-sm mb-1">{user.name}</div>
              <div className="text-xs text-slate-600 mb-2">{user.role}</div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-500">ID: {user.id}</span>
                <span className="text-slate-500 font-mono">PIN: {user.pin}</span>
              </div>
            </div>
          ))}
        </div>
        <p className="text-sm text-slate-500 mt-4">
          💡 Tip: PINs are used for dual signature verification in controlled substance dispensing
        </p>
      </div>

      {/* Next Steps */}
      <div className="bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200 rounded-xl p-6">
        <h2 className="text-xl font-semibold text-slate-900 mb-3">Ready to Explore?</h2>
        <p className="text-slate-700 mb-4">
          Start with the <strong>Auto-EWS Triage</strong> demo (easiest) or jump into 
          <strong> Critical Lab Results</strong> to see the full safety workflow in action!
        </p>
        <a
          href="/hospital-box"
          className="inline-flex items-center gap-2 bg-emerald-600 text-white px-6 py-3 rounded-lg hover:bg-emerald-700 transition-colors font-semibold"
        >
          <Play className="w-5 h-5" />
          Launch Hospital-in-a-Box
        </a>
      </div>
    </div>
  );
}
