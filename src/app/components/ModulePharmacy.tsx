import { Pill, AlertTriangle, Package, ArrowRight, CheckCircle, Eye, TrendingUp } from "lucide-react";

export function ModulePharmacy() {
  return (
    <div className="max-w-7xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-slate-900 mb-2">
          Pharmacy & Medication Control Module
        </h1>
        <p className="text-slate-600">
          Complete medication traceability chain from supplier to patient administration - 
          designed specifically to prevent drug diversion and corruption
        </p>
      </div>

      {/* Critical Importance */}
      <div className="bg-red-50 border border-red-200 rounded-xl p-6">
        <div className="flex gap-4">
          <AlertTriangle className="w-6 h-6 text-red-600 flex-shrink-0" />
          <div>
            <h2 className="text-lg font-semibold text-red-900 mb-2">CRITICAL MODULE</h2>
            <p className="text-sm text-red-800 mb-3">
              Medication theft and diversion is one of the most common forms of corruption in 
              healthcare systems, particularly for:
            </p>
            <ul className="text-sm text-red-800 space-y-1">
              <li>• Anesthesia drugs (propofol, fentanyl, ketamine)</li>
              <li>• Chemotherapy agents</li>
              <li>• Antibiotics (especially broad-spectrum)</li>
              <li>• Pain medications (opioids)</li>
              <li>• High-value biologics</li>
            </ul>
            <p className="text-sm text-red-800 mt-3 font-medium">
              This module creates an unbreakable audit chain where every tablet can be traced 
              from manufacturer to patient bedside.
            </p>
          </div>
        </div>
      </div>

      {/* Supply Chain Flow */}
      <div className="bg-white rounded-xl border border-slate-200 p-8">
        <h2 className="text-xl font-semibold mb-6">Complete Supply Chain Traceability</h2>
        
        <div className="space-y-4">
          {[
            {
              stage: "1. Supplier → Central Storage",
              color: "blue",
              description: "Goods Receipt",
              controls: [
                "Purchase order verification",
                "Batch number registration",
                "Expiry date capture",
                "Quality inspection",
                "Supplier invoice matching",
                "Physical count vs. documentation",
                "Temperature/storage condition logging",
                "Receiving staff signature with timestamp",
              ],
            },
            {
              stage: "2. Central Storage → Facility Pharmacy",
              color: "purple",
              description: "Internal Transfer",
              controls: [
                "Transfer order creation",
                "Batch selection (FEFO - First Expired First Out)",
                "Dual signature required",
                "Real-time inventory deduction",
                "Transport vehicle logging",
                "Receiving confirmation at destination",
                "Discrepancy reporting mechanism",
              ],
            },
            {
              stage: "3. Pharmacy → Ward/Department",
              color: "emerald",
              description: "Ward Stock Distribution",
              controls: [
                "Department-specific formulary restrictions",
                "Automated reorder points",
                "Par level management",
                "Nurse/pharmacist dual sign-off",
                "Batch tracking continues",
                "Emergency stock separate tracking",
              ],
            },
            {
              stage: "4. Ward → Patient (Dispensing)",
              color: "amber",
              description: "Medication Dispensing",
              controls: [
                "Valid prescription required",
                "Pharmacist clinical review",
                "Drug interaction checking",
                "Allergy verification",
                "Patient identity confirmation",
                "Batch number recorded on label",
                "Counseling documentation",
              ],
            },
            {
              stage: "5. Patient Administration",
              color: "red",
              description: "Bedside Administration",
              controls: [
                "Electronic Medication Administration Record (eMAR)",
                "Barcode scanning (patient + medication)",
                "Five Rights verification",
                "Witness requirement for controlled drugs",
                "Wastage documentation with witness",
                "Adverse reaction immediate reporting",
                "Refusal documentation",
              ],
            },
          ].map((stage, index) => (
            <div key={index}>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-semibold text-lg text-slate-900">{stage.stage}</h3>
                    <p className="text-sm text-slate-600">{stage.description}</p>
                  </div>
                  <Package className="w-6 h-6 text-blue-600" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {stage.controls.map((control, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-slate-700">{control}</span>
                    </div>
                  ))}
                </div>
              </div>
              {index < 4 && (
                <div className="flex justify-center my-2">
                  <ArrowRight className="w-5 h-5 text-slate-400 rotate-90" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Special Handling */}
      <div className="bg-white rounded-xl border border-slate-200 p-8">
        <h2 className="text-xl font-semibold mb-6">Special Drug Categories - Enhanced Controls</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-red-50 border border-red-200 rounded-lg p-5">
            <h3 className="font-semibold text-red-900 mb-3">Controlled Substances (Schedule II-IV)</h3>
            <ul className="space-y-2 text-sm text-slate-700">
              <li className="flex gap-2">
                <span className="text-red-600">•</span>
                <span><strong>Dual custody:</strong> Two authorized staff required for access</span>
              </li>
              <li className="flex gap-2">
                <span className="text-red-600">•</span>
                <span><strong>Narcotic log:</strong> Every removal documented immediately</span>
              </li>
              <li className="flex gap-2">
                <span className="text-red-600">•</span>
                <span><strong>Wastage witness:</strong> Mandatory second person signature</span>
              </li>
              <li className="flex gap-2">
                <span className="text-red-600">•</span>
                <span><strong>Reconciliation:</strong> Daily count vs. system balance</span>
              </li>
              <li className="flex gap-2">
                <span className="text-red-600">•</span>
                <span><strong>Video surveillance:</strong> Storage areas under CCTV</span>
              </li>
              <li className="flex gap-2">
                <span className="text-red-600">•</span>
                <span><strong>Regulatory reporting:</strong> Monthly submission to authorities</span>
              </li>
            </ul>
          </div>

          <div className="bg-purple-50 border border-purple-200 rounded-lg p-5">
            <h3 className="font-semibold text-purple-900 mb-3">High-Value Medications</h3>
            <ul className="space-y-2 text-sm text-slate-700">
              <li className="flex gap-2">
                <span className="text-purple-600">•</span>
                <span><strong>Chemotherapy:</strong> Pharmacist preparation + verification photo</span>
              </li>
              <li className="flex gap-2">
                <span className="text-purple-600">•</span>
                <span><strong>Biologics:</strong> Cold chain temperature monitoring (IoT sensors)</span>
              </li>
              <li className="flex gap-2">
                <span className="text-purple-600">•</span>
                <span><strong>Immunoglobulins:</strong> Patient-specific allocation</span>
              </li>
              <li className="flex gap-2">
                <span className="text-purple-600">•</span>
                <span><strong>Specialty drugs:</strong> Prior authorization with clinical justification</span>
              </li>
              <li className="flex gap-2">
                <span className="text-purple-600">•</span>
                <span><strong>Cost tracking:</strong> Real-time budget impact alerts</span>
              </li>
            </ul>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-5">
            <h3 className="font-semibold text-amber-900 mb-3">Anesthesia Drugs</h3>
            <ul className="space-y-2 text-sm text-slate-700">
              <li className="flex gap-2">
                <span className="text-amber-600">•</span>
                <span><strong>OR integration:</strong> Linked to surgical case</span>
              </li>
              <li className="flex gap-2">
                <span className="text-amber-600">•</span>
                <span><strong>Anesthesiologist accountability:</strong> Personal drug cart assignment</span>
              </li>
              <li className="flex gap-2">
                <span className="text-amber-600">•</span>
                <span><strong>Pre-op vs. post-op:</strong> Return unused vials with reconciliation</span>
              </li>
              <li className="flex gap-2">
                <span className="text-amber-600">•</span>
                <span><strong>Diversion detection:</strong> Usage pattern analysis vs. case complexity</span>
              </li>
              <li className="flex gap-2">
                <span className="text-amber-600">•</span>
                <span><strong>Syringe labeling:</strong> Barcode labels with preparer ID</span>
              </li>
            </ul>
          </div>

          <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-5">
            <h3 className="font-semibold text-emerald-900 mb-3">Antibiotics</h3>
            <ul className="space-y-2 text-sm text-slate-700">
              <li className="flex gap-2">
                <span className="text-emerald-600">•</span>
                <span><strong>Stewardship program:</strong> Restricted antibiotics require ID consult</span>
              </li>
              <li className="flex gap-2">
                <span className="text-emerald-600">•</span>
                <span><strong>Culture requirement:</strong> Broad-spectrum needs microbiology justification</span>
              </li>
              <li className="flex gap-2">
                <span className="text-emerald-600">•</span>
                <span><strong>Auto-stop orders:</strong> 72-hour reassessment mandatory</span>
              </li>
              <li className="flex gap-2">
                <span className="text-emerald-600">•</span>
                <span><strong>De-escalation prompts:</strong> System suggests narrower spectrum</span>
              </li>
              <li className="flex gap-2">
                <span className="text-emerald-600">•</span>
                <span><strong>Resistance tracking:</strong> Facility antibiogram integration</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Fraud Prevention Features */}
      <div className="bg-white rounded-xl border border-slate-200 p-8">
        <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
          <Eye className="w-6 h-6 text-blue-600" />
          Anti-Corruption & Fraud Detection
        </h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="font-medium mb-3">Automated Detection Algorithms:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  title: "Ghost Patient Dispensing",
                  description: "Medication dispensed to patients with no active encounter or admission",
                  severity: "CRITICAL",
                },
                {
                  title: "Excessive Wastage Pattern",
                  description: "Individual staff member has >20% wastage rate vs. peers",
                  severity: "HIGH",
                },
                {
                  title: "Batch Number Mismatch",
                  description: "Administered drug batch doesn't match available inventory",
                  severity: "CRITICAL",
                },
                {
                  title: "Off-Hours Access",
                  description: "Narcotic cabinet accessed outside normal shift times",
                  severity: "MEDIUM",
                },
                {
                  title: "Formulary Violations",
                  description: "Department receiving drugs outside approved list",
                  severity: "HIGH",
                },
                {
                  title: "Duplicate Prescriptions",
                  description: "Same medication ordered by multiple prescribers for one patient",
                  severity: "MEDIUM",
                },
                {
                  title: "Expiry Manipulation",
                  description: "Expired drugs marked as wasted after expiry date",
                  severity: "HIGH",
                },
                {
                  title: "Quantity Inflation",
                  description: "Prescribed quantity significantly exceeds clinical norm",
                  severity: "HIGH",
                },
              ].map((detection, index) => (
                <div key={index} className="bg-slate-50 border border-slate-200 rounded-lg p-4">
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-medium text-slate-900">{detection.title}</h4>
                    <span
                      className={`text-xs px-2 py-1 rounded ${
                        detection.severity === "CRITICAL"
                          ? "bg-red-100 text-red-700"
                          : detection.severity === "HIGH"
                          ? "bg-orange-100 text-orange-700"
                          : "bg-amber-100 text-amber-700"
                      }`}
                    >
                      {detection.severity}
                    </span>
                  </div>
                  <p className="text-sm text-slate-600">{detection.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-medium mb-3">Real-Time Alerts & Escalation:</h3>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Immediate notification to pharmacy manager on critical anomalies</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Daily summary report of all flagged transactions</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Automatic case file creation for investigation</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Ministry of Health dashboard for cross-facility pattern analysis</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Temporary access suspension for staff under investigation</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Analytics Dashboard Concept */}
      <div className="bg-white rounded-xl border border-slate-200 p-8">
        <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
          <TrendingUp className="w-6 h-6 text-emerald-600" />
          Pharmacy Analytics & Reporting
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-5 rounded-lg">
            <h3 className="font-medium text-slate-900 mb-2">Consumption Analysis</h3>
            <ul className="text-sm text-slate-600 space-y-1">
              <li>• Drug utilization by department</li>
              <li>• Cost per patient day</li>
              <li>• Generic vs. brand ratio</li>
              <li>• Seasonal trend analysis</li>
            </ul>
          </div>
          
          <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 p-5 rounded-lg">
            <h3 className="font-medium text-slate-900 mb-2">Inventory Optimization</h3>
            <ul className="text-sm text-slate-600 space-y-1">
              <li>• Stock-out predictions</li>
              <li>• Expiry risk alerts</li>
              <li>• Slow-moving item identification</li>
              <li>• Optimal par level calculation</li>
            </ul>
          </div>
          
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-5 rounded-lg">
            <h3 className="font-medium text-slate-900 mb-2">Compliance Reporting</h3>
            <ul className="text-sm text-slate-600 space-y-1">
              <li>• Narcotic usage reports</li>
              <li>• Antibiotic stewardship metrics</li>
              <li>• Pharmacist intervention rate</li>
              <li>• Adverse drug reaction incidence</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Technical Implementation */}
      <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
        <h3 className="font-semibold mb-4">Technical Implementation Notes</h3>
        <div className="space-y-3 text-sm text-slate-700">
          <p>
            <strong>Barcode/RFID Integration:</strong> All medication packages labeled with GS1-compliant 
            barcodes encoding NDC, batch, expiry. Automated scanners at dispensing cabinets.
          </p>
          <p>
            <strong>Blockchain Anchoring (Optional):</strong> Critical transactions hashed and anchored 
            to blockchain for tamper-proof evidence. Useful for high-value drugs.
          </p>
          <p>
            <strong>Machine Learning Models:</strong> Train on 6+ months of data to detect anomalies. 
            Models updated monthly with false positive feedback.
          </p>
          <p>
            <strong>Offline Capability:</strong> Pharmacy module caches formulary and local stock data. 
            Dispensing transactions queued offline and synced when online.
          </p>
        </div>
      </div>
    </div>
  );
}