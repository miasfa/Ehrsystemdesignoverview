import { Eye, TrendingUp, AlertCircle, Shield, Activity, Brain } from "lucide-react";

export function ModuleAudit() {
  return (
    <div className="max-w-7xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-slate-900 mb-2">
          Audit & Anti-Corruption Engine
        </h1>
        <p className="text-slate-600">
          Intelligent monitoring system that detects suspicious patterns, prevents fraud, 
          and ensures complete accountability across all system operations
        </p>
      </div>

      {/* Core Philosophy */}
      <div className="bg-gradient-to-r from-red-50 to-red-100 border border-red-200 rounded-xl p-6">
        <div className="flex gap-4">
          <Shield className="w-8 h-8 text-red-600 flex-shrink-0" />
          <div>
            <h2 className="text-lg font-semibold text-red-900 mb-2">
              Transparency as Anti-Corruption Strategy
            </h2>
            <p className="text-sm text-red-800 mb-3">
              This module operates on the principle: <strong>"If it can be measured and monitored, 
              it's harder to steal."</strong> By creating immutable audit trails and intelligent 
              anomaly detection, we make corruption visible, traceable, and prosecutable.
            </p>
            <p className="text-sm text-red-800">
              Every action—from patient registration to drug administration to equipment 
              usage—generates an audit event. Machine learning models analyze patterns to detect 
              deviations that may indicate theft, fraud, or policy violations.
            </p>
          </div>
        </div>
      </div>

      {/* Comprehensive Audit Trail */}
      <div className="bg-white rounded-xl border border-slate-200 p-8">
        <h2 className="text-xl font-semibold mb-6">Immutable Audit Trail Architecture</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-blue-50 p-5 rounded-lg">
            <h3 className="font-semibold mb-3">What Gets Audited:</h3>
            <div className="space-y-2 text-sm text-slate-700">
              <div className="flex gap-2">
                <Activity className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                <span><strong>User Actions:</strong> Login, logout, failed auth attempts, role changes</span>
              </div>
              <div className="flex gap-2">
                <Activity className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                <span><strong>Data Access:</strong> Every patient record view (who, when, why)</span>
              </div>
              <div className="flex gap-2">
                <Activity className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                <span><strong>Data Modifications:</strong> Before/after snapshots of all changes</span>
              </div>
              <div className="flex gap-2">
                <Activity className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                <span><strong>Clinical Orders:</strong> Who ordered, authorized, performed, results</span>
              </div>
              <div className="flex gap-2">
                <Activity className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                <span><strong>Medication Chain:</strong> Full traceability from warehouse to patient</span>
              </div>
              <div className="flex gap-2">
                <Activity className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                <span><strong>Inventory Movements:</strong> Every transfer, wastage, consumption</span>
              </div>
              <div className="flex gap-2">
                <Activity className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                <span><strong>System Events:</strong> Configuration changes, backups, integrations</span>
              </div>
            </div>
          </div>

          <div className="bg-purple-50 p-5 rounded-lg">
            <h3 className="font-semibold mb-3">Audit Log Properties:</h3>
            <div className="space-y-3 text-sm text-slate-700">
              <div className="bg-white p-3 rounded border border-purple-200">
                <p className="font-medium mb-1">Immutability</p>
                <p className="text-xs text-slate-600">
                  Audit logs cannot be edited or deleted. Only INSERT operations allowed. 
                  Blockchain anchoring option for critical events.
                </p>
              </div>
              <div className="bg-white p-3 rounded border border-purple-200">
                <p className="font-medium mb-1">Completeness</p>
                <p className="text-xs text-slate-600">
                  Includes user ID, IP address, device info, timestamp (UTC), action type, 
                  resource affected, old/new values, contextual metadata.
                </p>
              </div>
              <div className="bg-white p-3 rounded border border-purple-200">
                <p className="font-medium mb-1">Tamper-Evidence</p>
                <p className="text-xs text-slate-600">
                  Each log entry cryptographically hashed and chained to previous entry. 
                  Any tampering attempt immediately detectable.
                </p>
              </div>
              <div className="bg-white p-3 rounded border border-purple-200">
                <p className="font-medium mb-1">Long-Term Retention</p>
                <p className="text-xs text-slate-600">
                  Audit logs retained for minimum 7 years (regulatory compliance). 
                  Hot storage 1 year, then cold archive.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-slate-50 p-5 rounded-lg">
          <h3 className="font-medium mb-2">Sample Audit Log Entry:</h3>
          <pre className="text-xs bg-slate-900 text-emerald-400 p-4 rounded overflow-x-auto">
{`{
  "audit_id": "550e8400-e29b-41d4-a716-446655440000",
  "timestamp": "2026-02-27T14:32:18.432Z",
  "user_id": "usr_789abc",
  "user_name": "Dr. Sarah Mwangi",
  "role": "Physician",
  "action": "MEDICATION_ORDER_CREATE",
  "resource_type": "medication_orders",
  "resource_id": "med_order_12345",
  "facility_id": "fac_main_hospital",
  "ip_address": "192.168.1.45",
  "user_agent": "Mozilla/5.0...",
  "context": {
    "patient_id": "MH-2026-000123456-7",
    "encounter_id": "enc_987654",
    "medication": "Ciprofloxacin 500mg",
    "quantity": "20 tablets",
    "justification": "UTI confirmed by culture"
  },
  "new_value": { "status": "PENDING_APPROVAL" },
  "hash": "d3a4f...b92c1",
  "previous_hash": "a1b2c...8f7e6"
}`}
          </pre>
        </div>
      </div>

      {/* Anomaly Detection Algorithms */}
      <div className="bg-white rounded-xl border border-slate-200 p-8">
        <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
          <Brain className="w-6 h-6 text-purple-600" />
          Intelligent Anomaly Detection
        </h2>

        <div className="space-y-6">
          <div>
            <h3 className="font-medium mb-4">Detection Categories:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                {
                  category: "Clinical Anomalies",
                  color: "blue",
                  examples: [
                    "Excessive test ordering (>3x peer average)",
                    "Same tests repeated within 24 hours",
                    "High-cost imaging without clinical justification",
                    "Diagnosis codes inconsistent with procedures",
                  ],
                },
                {
                  category: "Pharmacy Fraud",
                  color: "red",
                  examples: [
                    "Ghost patient prescriptions",
                    "Controlled substance over-prescribing",
                    "Batch number inconsistencies",
                    "Unexplained inventory shrinkage >5%",
                  ],
                },
                {
                  category: "Resource Diversion",
                  color: "orange",
                  examples: [
                    "Equipment usage outside of patient cases",
                    "Consumable consumption 2x expected",
                    "After-hours supply room access",
                    "Missing expensive implants",
                  ],
                },
                {
                  category: "Ghost Patients",
                  color: "purple",
                  examples: [
                    "Patient with zero clinical documentation",
                    "Multiple encounters same day different facilities",
                    "Services billed without corresponding orders",
                    "Deceased patient receiving new prescriptions",
                  ],
                },
                {
                  category: "Staff Behavior",
                  color: "amber",
                  examples: [
                    "Accessing records outside assigned department",
                    "Viewing celebrity/VIP patient records",
                    "Login from unusual location/device",
                    "Role escalation requests without approval",
                  ],
                },
                {
                  category: "Financial Fraud",
                  color: "emerald",
                  examples: [
                    "Upcoding (billing higher complexity)",
                    "Unbundling (splitting procedures)",
                    "Billing for non-rendered services",
                    "Duplicate claim submissions",
                  ],
                },
              ].map((item, index) => (
                <div key={index} className="bg-slate-50 border border-slate-200 rounded-lg p-4">
                  <h4 className="font-semibold text-slate-900 mb-3">{item.category}</h4>
                  <ul className="space-y-1 text-xs text-slate-600">
                    {item.examples.map((ex, i) => (
                      <li key={i} className="flex gap-1.5">
                        <span className="text-blue-600 flex-shrink-0">•</span>
                        <span>{ex}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-50 to-purple-100 border border-purple-200 rounded-lg p-6">
            <h3 className="font-semibold mb-4">Machine Learning Models:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-sm font-medium mb-2">Supervised Learning (Labeled Data):</h4>
                <ul className="text-sm text-slate-700 space-y-1">
                  <li>• Classification: Fraudulent vs. legitimate claims</li>
                  <li>• Decision trees for rule-based detection</li>
                  <li>• Training data from confirmed fraud cases</li>
                  <li>• Continuous retraining with feedback</li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-medium mb-2">Unsupervised Learning (Pattern Discovery):</h4>
                <ul className="text-sm text-slate-700 space-y-1">
                  <li>• Clustering to identify outlier behavior</li>
                  <li>• Isolation forests for anomaly scores</li>
                  <li>• Time-series analysis for trend deviations</li>
                  <li>• Network analysis for collusion detection</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Real-Time Alert System */}
      <div className="bg-white rounded-xl border border-slate-200 p-8">
        <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
          <AlertCircle className="w-6 h-6 text-orange-600" />
          Real-Time Alert & Escalation System
        </h2>

        <div className="space-y-6">
          <div>
            <h3 className="font-medium mb-3">Alert Severity Levels:</h3>
            <div className="space-y-3">
              <div className="bg-red-50 border-l-4 border-red-500 p-4">
                <div className="flex items-start justify-between mb-2">
                  <h4 className="font-semibold text-red-900">CRITICAL</h4>
                  <span className="text-xs bg-red-600 text-white px-2 py-1 rounded">Immediate Action</span>
                </div>
                <p className="text-sm text-slate-700 mb-2">
                  Potential active fraud requiring immediate intervention
                </p>
                <p className="text-xs text-slate-600">
                  <strong>Examples:</strong> Controlled substance diversion, ghost patient with expensive procedure, 
                  database tampering attempt
                </p>
                <p className="text-xs text-slate-600 mt-2">
                  <strong>Notification:</strong> SMS + Email + Dashboard popup to facility director, pharmacy manager, 
                  Ministry of Health auditor (real-time)
                </p>
              </div>

              <div className="bg-orange-50 border-l-4 border-orange-500 p-4">
                <div className="flex items-start justify-between mb-2">
                  <h4 className="font-semibold text-orange-900">HIGH</h4>
                  <span className="text-xs bg-orange-600 text-white px-2 py-1 rounded">Review Within 24h</span>
                </div>
                <p className="text-sm text-slate-700 mb-2">
                  Significant deviation from normal patterns
                </p>
                <p className="text-xs text-slate-600">
                  <strong>Examples:</strong> Excessive ordering, unusual wastage, off-hours access
                </p>
                <p className="text-xs text-slate-600 mt-2">
                  <strong>Notification:</strong> Email to department manager + daily digest
                </p>
              </div>

              <div className="bg-amber-50 border-l-4 border-amber-500 p-4">
                <div className="flex items-start justify-between mb-2">
                  <h4 className="font-semibold text-amber-900">MEDIUM</h4>
                  <span className="text-xs bg-amber-600 text-white px-2 py-1 rounded">Review Within Week</span>
                </div>
                <p className="text-sm text-slate-700 mb-2">
                  Minor policy violations or inefficiencies
                </p>
                <p className="text-xs text-slate-600">
                  <strong>Examples:</strong> Missing documentation, duplicate patient records
                </p>
                <p className="text-xs text-slate-600 mt-2">
                  <strong>Notification:</strong> Weekly summary report
                </p>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
                <div className="flex items-start justify-between mb-2">
                  <h4 className="font-semibold text-blue-900">LOW / INFORMATIONAL</h4>
                  <span className="text-xs bg-blue-600 text-white px-2 py-1 rounded">Monitoring Only</span>
                </div>
                <p className="text-sm text-slate-700 mb-2">
                  Statistical outliers requiring awareness
                </p>
                <p className="text-xs text-slate-600">
                  <strong>Examples:</strong> Trending cost increases, staffing efficiency metrics
                </p>
                <p className="text-xs text-slate-600 mt-2">
                  <strong>Notification:</strong> Monthly analytics dashboard
                </p>
              </div>
            </div>
          </div>

          <div className="bg-slate-50 p-5 rounded-lg">
            <h3 className="font-medium mb-3">Automated Response Actions:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <h4 className="text-sm font-medium">Preventive Actions:</h4>
                <ul className="text-sm text-slate-600 space-y-1">
                  <li>• Temporary account suspension (pending investigation)</li>
                  <li>• Require supervisor approval for next transaction</li>
                  <li>• Elevated authentication (biometric re-verification)</li>
                  <li>• Lockout of specific modules/resources</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h4 className="text-sm font-medium">Investigative Actions:</h4>
                <ul className="text-sm text-slate-600 space-y-1">
                  <li>• Auto-generate investigation case file</li>
                  <li>• Compile evidence package (audit trail snapshot)</li>
                  <li>• Notify compliance officer</li>
                  <li>• Preserve related records (legal hold)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Analytics Dashboard */}
      <div className="bg-white rounded-xl border border-slate-200 p-8">
        <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
          <TrendingUp className="w-6 h-6 text-emerald-600" />
          Ministry-Level Analytics Dashboard
        </h2>

        <div className="space-y-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-gradient-to-br from-red-50 to-red-100 p-5 rounded-lg">
              <p className="text-3xl font-bold text-red-600">127</p>
              <p className="text-sm text-slate-600 mt-1">Active Investigations</p>
              <p className="text-xs text-slate-500 mt-1">↑ 12% vs last month</p>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-5 rounded-lg">
              <p className="text-3xl font-bold text-orange-600">$2.4M</p>
              <p className="text-sm text-slate-600 mt-1">Potential Fraud Detected</p>
              <p className="text-xs text-slate-500 mt-1">YTD aggregate value</p>
            </div>
            <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 p-5 rounded-lg">
              <p className="text-3xl font-bold text-emerald-600">18</p>
              <p className="text-sm text-slate-600 mt-1">Cases Confirmed</p>
              <p className="text-xs text-slate-500 mt-1">Resulted in prosecution</p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-5 rounded-lg">
              <p className="text-3xl font-bold text-blue-600">94.2%</p>
              <p className="text-sm text-slate-600 mt-1">System Compliance</p>
              <p className="text-xs text-slate-500 mt-1">Facilities meeting standards</p>
            </div>
          </div>

          <div>
            <h3 className="font-medium mb-3">Cross-Facility Pattern Analysis:</h3>
            <p className="text-sm text-slate-600 mb-4">
              National-level data aggregation enables detection of sophisticated fraud schemes:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                <h4 className="font-medium text-purple-900 mb-2">Patient Rings</h4>
                <p className="text-sm text-slate-700">
                  Same patient IDs used across multiple facilities simultaneously (impossible without 
                  identity theft or collusion)
                </p>
              </div>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h4 className="font-medium text-blue-900 mb-2">Supply Chain Leakage</h4>
                <p className="text-sm text-slate-700">
                  Drugs shipped to Facility A appearing in inventory of Facility B (diversion tracking)
                </p>
              </div>
              <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
                <h4 className="font-medium text-emerald-900 mb-2">Provider Shopping</h4>
                <p className="text-sm text-slate-700">
                  Patients visiting 5+ facilities in 30 days obtaining controlled substances 
                  (prescription drug abuse detection)
                </p>
              </div>
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                <h4 className="font-medium text-amber-900 mb-2">Regional Outliers</h4>
                <p className="text-sm text-slate-700">
                  One facility's consumption 10x higher than peers with similar patient volume 
                  (potential theft hub)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Legal & Evidentiary Standards */}
      <div className="bg-gradient-to-r from-slate-50 to-slate-100 rounded-xl p-6 border border-slate-200">
        <h3 className="font-semibold mb-4">Legal & Evidentiary Standards</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-slate-700">
          <div>
            <h4 className="font-medium mb-2">Chain of Custody:</h4>
            <p className="text-slate-600">
              All audit logs admissible as evidence in court. Digital signatures and timestamps 
              meet legal standards for authenticity.
            </p>
          </div>
          <div>
            <h4 className="font-medium mb-2">Data Retention:</h4>
            <p className="text-slate-600">
              Audit trail preserved even if primary records deleted/modified. Supports forensic 
              investigation years after incident.
            </p>
          </div>
          <div>
            <h4 className="font-medium mb-2">Expert Witness Ready:</h4>
            <p className="text-slate-600">
              System generates comprehensive reports suitable for prosecution: timeline 
              reconstruction, evidence correlation, statistical analysis.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}