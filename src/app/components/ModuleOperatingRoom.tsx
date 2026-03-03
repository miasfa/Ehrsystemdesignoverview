import { Stethoscope, Clock, AlertTriangle, CheckCircle, Activity, Syringe } from "lucide-react";

export function ModuleOperatingRoom() {
  return (
    <div className="max-w-7xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-slate-900 mb-2">
          Operating Room & Anesthesia Module
        </h1>
        <p className="text-slate-600">
          Complete perioperative workflow management with critical anesthesia drug accountability
        </p>
      </div>

      {/* Critical Focus */}
      <div className="bg-red-50 border border-red-200 rounded-xl p-6">
        <div className="flex gap-4">
          <AlertTriangle className="w-6 h-6 text-red-600 flex-shrink-0" />
          <div>
            <h2 className="text-lg font-semibold text-red-900 mb-2">Anesthesia Drug Diversion Prevention</h2>
            <p className="text-sm text-red-800">
              Operating rooms are high-risk areas for controlled substance diversion. Propofol, fentanyl, 
              and ketamine are frequently diverted by healthcare workers. This module ensures every milligram 
              is accounted for from pharmacy to patient administration.
            </p>
          </div>
        </div>
      </div>

      {/* Perioperative Workflow */}
      <div className="bg-white rounded-xl border border-slate-200 p-8">
        <h2 className="text-xl font-semibold mb-6">Complete Perioperative Workflow</h2>
        
        <div className="space-y-6">
          <div className="border-l-4 border-blue-500 pl-6">
            <h3 className="font-semibold text-lg mb-3">Phase 1: Pre-Operative Assessment</h3>
            <div className="bg-blue-50 p-5 rounded-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium mb-2">Surgical Planning:</h4>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>• Surgical case scheduling</li>
                    <li>• Procedure type & complexity code</li>
                    <li>• Surgeon assignment</li>
                    <li>• Estimated duration</li>
                    <li>• Required equipment/implants</li>
                    <li>• Blood product reservation</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Anesthesia Pre-Op:</h4>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>• Patient risk assessment (ASA classification)</li>
                    <li>• Airway evaluation (Mallampati score)</li>
                    <li>• Allergies review</li>
                    <li>• NPO status verification</li>
                    <li>• Consent documentation</li>
                    <li>• Anesthesia plan selection</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="border-l-4 border-purple-500 pl-6">
            <h3 className="font-semibold text-lg mb-3">Phase 2: Anesthesia Drug Preparation</h3>
            <div className="bg-purple-50 p-5 rounded-lg">
              <div className="space-y-4">
                <div className="bg-white border border-purple-200 rounded-lg p-4">
                  <h4 className="font-medium mb-3 flex items-center gap-2">
                    <Syringe className="w-5 h-5 text-purple-600" />
                    Drug Cart Assignment & Accountability
                  </h4>
                  <ul className="text-sm text-slate-600 space-y-2">
                    <li className="flex gap-2">
                      <CheckCircle className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" />
                      <span><strong>Personal Cart System:</strong> Each anesthesiologist assigned unique cart at shift start</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" />
                      <span><strong>Initial Inventory:</strong> Digital checklist of all drugs with batch numbers</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" />
                      <span><strong>Case-Specific Pull:</strong> Additional drugs withdrawn based on planned procedure</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" />
                      <span><strong>Syringe Labeling:</strong> Barcode labels printed with drug name, concentration, preparer, time</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" />
                      <span><strong>Witness Requirement:</strong> Narcotic preparation requires circulating nurse witness</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="border-l-4 border-emerald-500 pl-6">
            <h3 className="font-semibold text-lg mb-3">Phase 3: Intra-Operative Monitoring & Administration</h3>
            <div className="bg-emerald-50 p-5 rounded-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium mb-2">Anesthesia Record (Real-Time):</h4>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>• Continuous vital signs capture (automated from monitors)</li>
                    <li>• Drug administration timestamps (to-the-minute)</li>
                    <li>• Dosage, route, batch number for every medication</li>
                    <li>• Induction, maintenance, emergence events</li>
                    <li>• Airway management details</li>
                    <li>• Fluid balance tracking</li>
                    <li>• Blood products administered</li>
                    <li>• Complications/critical events</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Drug Administration Logging:</h4>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>• Every syringe scanned before administration</li>
                    <li>• System verifies: correct patient, correct drug</li>
                    <li>• Timestamp auto-captured</li>
                    <li>• Partial doses documented (e.g., 3mL of 10mL syringe)</li>
                    <li>• Remaining volume marked for wastage</li>
                    <li>• Infusion rates for continuous drugs</li>
                    <li>• Emergency drug override process</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="border-l-4 border-orange-500 pl-6">
            <h3 className="font-semibold text-lg mb-3">Phase 4: Post-Operative Drug Reconciliation</h3>
            <div className="bg-orange-50 p-5 rounded-lg">
              <div className="space-y-3">
                <div className="bg-white border border-orange-200 rounded-lg p-4">
                  <h4 className="font-medium mb-2">End-of-Case Reconciliation:</h4>
                  <p className="text-sm text-slate-600 mb-3">
                    Before leaving OR, anesthesiologist must reconcile all drugs withdrawn:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    <div className="bg-emerald-50 p-3 rounded border border-emerald-200">
                      <p className="text-sm font-medium text-emerald-900">Administered</p>
                      <p className="text-xs text-slate-600">Documented in anesthesia record with batch numbers</p>
                    </div>
                    <div className="bg-blue-50 p-3 rounded border border-blue-200">
                      <p className="text-sm font-medium text-blue-900">Returned Unopened</p>
                      <p className="text-xs text-slate-600">Scanned back into cart inventory</p>
                    </div>
                    <div className="bg-red-50 p-3 rounded border border-red-200">
                      <p className="text-sm font-medium text-red-900">Wasted</p>
                      <p className="text-xs text-slate-600">Witnessed destruction with photo documentation</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white border border-orange-200 rounded-lg p-4">
                  <h4 className="font-medium mb-2">Discrepancy Resolution:</h4>
                  <p className="text-sm text-slate-600">
                    If cart inventory doesn't match system records: immediate investigation triggered, 
                    supervisor notified, cart impounded until resolved. No checkout until 100% reconciled.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="border-l-4 border-cyan-500 pl-6">
            <h3 className="font-semibold text-lg mb-3">Phase 5: Recovery & Post-Op Orders</h3>
            <div className="bg-cyan-50 p-5 rounded-lg">
              <ul className="text-sm text-slate-600 space-y-2">
                <li className="flex gap-2">
                  <CheckCircle className="w-4 h-4 text-cyan-600 flex-shrink-0 mt-0.5" />
                  <span>PACU (Post-Anesthesia Care Unit) handoff checklist</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle className="w-4 h-4 text-cyan-600 flex-shrink-0 mt-0.5" />
                  <span>Pain management orders (PCA pump settings if applicable)</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle className="w-4 h-4 text-cyan-600 flex-shrink-0 mt-0.5" />
                  <span>Post-op vital signs monitoring protocol</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle className="w-4 h-4 text-cyan-600 flex-shrink-0 mt-0.5" />
                  <span>Complications documentation and reporting</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Fraud Detection Specific to OR */}
      <div className="bg-white rounded-xl border border-slate-200 p-8">
        <h2 className="text-xl font-semibold mb-6">OR-Specific Fraud Detection Algorithms</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              title: "Unrealistic Drug Usage",
              description: "Drug quantities don't match case complexity (e.g., 500mg propofol for 15-minute procedure)",
              color: "red",
            },
            {
              title: "Pattern Deviation",
              description: "Anesthesiologist's usage 3x higher than peer average for similar cases",
              color: "red",
            },
            {
              title: "Missing Batch Numbers",
              description: "Administered drugs without corresponding batch number documentation",
              color: "red",
            },
            {
              title: "Excessive Wastage",
              description: "Individual consistently reports >30% wastage rate",
              color: "orange",
            },
            {
              title: "Time Inconsistencies",
              description: "Drug administration timestamp outside surgical case timeframe",
              color: "orange",
            },
            {
              title: "Phantom Cases",
              description: "Drug withdrawal without corresponding scheduled OR case",
              color: "red",
            },
            {
              title: "Unopened Vial Wastage",
              description: "Waste logged for unopened/unbroken seals",
              color: "red",
            },
            {
              title: "Missing Witness Signatures",
              description: "Controlled substance wastage without required second signature",
              color: "red",
            },
          ].map((detection, index) => (
            <div key={index} className="bg-orange-50 border border-orange-200 rounded-lg p-4">
              <div className="flex items-start justify-between mb-2">
                <h3 className="font-medium text-slate-900">{detection.title}</h3>
                <AlertTriangle className="w-5 h-5 text-orange-600" />
              </div>
              <p className="text-sm text-slate-600">{detection.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Technical Integration */}
      <div className="bg-white rounded-xl border border-slate-200 p-8">
        <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
          <Activity className="w-6 h-6 text-blue-600" />
          Medical Device Integration
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-blue-50 p-5 rounded-lg">
            <h3 className="font-medium mb-3">Anesthesia Machine Integration:</h3>
            <ul className="text-sm text-slate-600 space-y-2">
              <li>• HL7 interface for vital signs (HR, BP, SpO2, EtCO2)</li>
              <li>• Automatic data capture every 5 minutes</li>
              <li>• Gas concentrations (O2, N2O, Sevoflurane)</li>
              <li>• Alarm events logged automatically</li>
              <li>• Ventilator settings and parameters</li>
            </ul>
          </div>
          
          <div className="bg-emerald-50 p-5 rounded-lg">
            <h3 className="font-medium mb-3">Infusion Pump Integration:</h3>
            <ul className="text-sm text-slate-600 space-y-2">
              <li>• Real-time infusion rate data</li>
              <li>• Total volume infused tracking</li>
              <li>• Drug library compliance checking</li>
              <li>• Pump alarm history</li>
              <li>• Automatic documentation elimination</li>
            </ul>
          </div>
        </div>
      </div>

      {/* OR Dashboard Concept */}
      <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
        <h3 className="font-semibold mb-4 flex items-center gap-2">
          <Clock className="w-5 h-5 text-slate-600" />
          OR Management Dashboard
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-white p-4 rounded-lg border border-slate-200">
            <p className="text-2xl font-bold text-blue-600">8/12</p>
            <p className="text-sm text-slate-600">ORs Currently Active</p>
          </div>
          <div className="bg-white p-4 rounded-lg border border-slate-200">
            <p className="text-2xl font-bold text-emerald-600">94%</p>
            <p className="text-sm text-slate-600">On-Time Starts Today</p>
          </div>
          <div className="bg-white p-4 rounded-lg border border-slate-200">
            <p className="text-2xl font-bold text-orange-600">2</p>
            <p className="text-sm text-slate-600">Cases Running Over</p>
          </div>
          <div className="bg-white p-4 rounded-lg border border-slate-200">
            <p className="text-2xl font-bold text-red-600">1</p>
            <p className="text-sm text-slate-600">Drug Discrepancy Alerts</p>
          </div>
        </div>
      </div>
    </div>
  );
}