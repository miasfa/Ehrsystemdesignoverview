import { Shield, Lock, Key, Eye, CheckCircle } from "lucide-react";

export function SecurityModel() {
  return (
    <div className="max-w-7xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Security Model & Access Control</h1>
        <p className="text-slate-600">
          Multi-layered security architecture implementing defense-in-depth principles for patient data protection
        </p>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 p-8">
        <h2 className="text-xl font-semibold mb-6">Role-Based Access Control (RBAC)</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            {
              role: "Nurse",
              permissions: ["View assigned patients", "Document vital signs", "Administer medications", "View orders", "Document care notes"],
              restrictions: ["Cannot order medications", "Cannot access unassigned patients"],
            },
            {
              role: "Physician",
              permissions: ["View all department patients", "Create orders", "Prescribe medications", "Document diagnoses", "Access full medical history"],
              restrictions: ["Cannot access other departments without justification", "Cannot modify audit logs"],
            },
            {
              role: "Pharmacist",
              permissions: ["View medication orders", "Dispense medications", "Clinical intervention", "Inventory management", "Drug utilization review"],
              restrictions: ["Cannot view full clinical notes", "Cannot order tests"],
            },
            {
              role: "Lab Technician",
              permissions: ["View lab orders", "Enter results", "Specimen tracking", "Quality control"],
              restrictions: ["Cannot view clinical diagnosis", "Cannot access pharmacy"],
            },
            {
              role: "Anesthesiologist",
              permissions: ["OR access", "Controlled substance access", "Anesthesia record", "Pre-op assessment"],
              restrictions: ["Only assigned surgical cases", "Requires witness for narcotics"],
            },
            {
              role: "Facility Administrator",
              permissions: ["User management", "System configuration", "Audit review", "Analytics access", "Vendor management"],
              restrictions: ["No direct patient care access", "Cannot modify clinical data"],
            },
            {
              role: "Data Quality Officer",
              permissions: ["Duplicate resolution", "Record merging", "Data cleaning", "Quality reports"],
              restrictions: ["Limited clinical access", "All actions logged"],
            },
            {
              role: "Ministry Auditor",
              permissions: ["Read-only access all facilities", "Audit log access", "Analytics", "Investigation files", "Export reports"],
              restrictions: ["Cannot modify any data", "Access logged for transparency"],
            },
            {
              role: "Registration Clerk",
              permissions: ["Patient registration", "Demographics update", "Insurance verification", "Appointment scheduling"],
              restrictions: ["No clinical data access", "Cannot view financial details"],
            },
          ].map((item, index) => (
            <div key={index} className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <p className="font-medium text-slate-900">{item.role}</p>
                </div>
              </div>
              <div className="mb-3">
                <p className="text-xs font-medium text-slate-700 mb-1">CAN:</p>
                <ul className="space-y-1">
                  {item.permissions.map((perm, idx) => (
                    <li key={idx} className="text-xs text-slate-600 flex gap-1">
                      <CheckCircle className="w-3 h-3 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span>{perm}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-xs font-medium text-slate-700 mb-1">CANNOT:</p>
                <ul className="space-y-1">
                  {item.restrictions.map((rest, idx) => (
                    <li key={idx} className="text-xs text-red-600 flex gap-1">
                      <span>✗</span>
                      <span>{rest}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 p-8">
        <h2 className="text-xl font-semibold mb-6">Authentication & Authorization</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-purple-50 border border-purple-200 rounded-lg p-5">
            <Key className="w-6 h-6 text-purple-600 mb-3" />
            <h3 className="font-semibold mb-2">Multi-Factor Authentication</h3>
            <ul className="text-sm text-slate-600 space-y-1">
              <li>• Username + password (minimum 12 characters)</li>
              <li>• SMS/TOTP second factor</li>
              <li>• Biometric option (fingerprint)</li>
              <li>• Smart card for high-privilege users</li>
              <li>• Session timeout: 15 minutes inactivity</li>
            </ul>
          </div>

          <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-5">
            <Shield className="w-6 h-6 text-emerald-600 mb-3" />
            <h3 className="font-semibold mb-2">Break-Glass Access</h3>
            <ul className="text-sm text-slate-600 space-y-1">
              <li>• Emergency override for life-threatening situations</li>
              <li>• Immediate access, retrospective audit</li>
              <li>• Must document justification within 1 hour</li>
              <li>• Supervisor notification</li>
              <li>• All break-glass events reviewed monthly</li>
            </ul>
          </div>

          <div className="bg-orange-50 border border-orange-200 rounded-lg p-5">
            <Eye className="w-6 h-6 text-orange-600 mb-3" />
            <h3 className="font-semibold mb-2">Context-Based Access</h3>
            <ul className="text-sm text-slate-600 space-y-1">
              <li>• Access based on care relationship</li>
              <li>• Time-based (shift schedules)</li>
              <li>• Location-based (IP geofencing)</li>
              <li>• Device-based (registered terminals only)</li>
              <li>• Automatic access revocation after role change</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 p-8">
        <h2 className="text-xl font-semibold mb-6">Data Encryption</h2>
        
        <div className="space-y-4">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-5">
            <h3 className="font-semibold mb-3">Encryption at Rest:</h3>
            <ul className="text-sm text-slate-600 space-y-2">
              <li>• <strong>Database:</strong> Transparent Data Encryption (TDE) with AES-256</li>
              <li>• <strong>PII Fields:</strong> Application-layer encryption before storage (name, address, phone, ID numbers)</li>
              <li>• <strong>Backups:</strong> Encrypted with separate key stored in HSM</li>
              <li>• <strong>Files/Documents:</strong> Encrypted at object storage level</li>
            </ul>
          </div>

          <div className="bg-purple-50 border border-purple-200 rounded-lg p-5">
            <h3 className="font-semibold mb-3">Encryption in Transit:</h3>
            <ul className="text-sm text-slate-600 space-y-2">
              <li>• <strong>External:</strong> TLS 1.3 with certificate pinning</li>
              <li>• <strong>Internal:</strong> mTLS for service-to-service communication</li>
              <li>• <strong>Database Connections:</strong> SSL/TLS enforced</li>
              <li>• <strong>Mobile Apps:</strong> Certificate-based authentication</li>
            </ul>
          </div>

          <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-5">
            <h3 className="font-semibold mb-3">Key Management:</h3>
            <ul className="text-sm text-slate-600 space-y-2">
              <li>• Hardware Security Modules (HSM) for master keys</li>
              <li>• Automatic key rotation every 90 days</li>
              <li>• Envelope encryption (data encrypted with DEK, DEK encrypted with KEK)</li>
              <li>• Split-knowledge key ceremony for HSM initialization</li>
              <li>• Key backup to secure offline location</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 p-8">
        <h2 className="text-xl font-semibold mb-4">Compliance & Regulatory</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-medium mb-3">Standards Alignment:</h3>
            <ul className="text-sm text-slate-600 space-y-2">
              <li className="flex gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span><strong>HIPAA:</strong> Health Insurance Portability and Accountability Act (if applicable)</span>
              </li>
              <li className="flex gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span><strong>GDPR:</strong> General Data Protection Regulation principles</span>
              </li>
              <li className="flex gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span><strong>ISO 27001:</strong> Information security management</span>
              </li>
              <li className="flex gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span><strong>HITRUST:</strong> Healthcare-specific security framework</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium mb-3">Patient Rights:</h3>
            <ul className="text-sm text-slate-600 space-y-2">
              <li>• Right to access own medical records</li>
              <li>• Right to request corrections</li>
              <li>• Right to audit log of who accessed data</li>
              <li>• Right to data portability (export in standard format)</li>
              <li>• Right to restrict sensitive information disclosure</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-red-50 to-red-100 rounded-xl p-6 border border-red-200">
        <h3 className="font-semibold mb-3 flex items-center gap-2">
          <Lock className="w-5 h-5 text-red-600" />
          Security Incident Response
        </h3>
        <p className="text-sm text-slate-700 mb-3">
          Defined protocol for security breaches: incident detection → containment → eradication → recovery → post-incident review
        </p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 text-xs">
          <div className="bg-white p-3 rounded">
            <p className="font-medium mb-1">Detection</p>
            <p className="text-slate-600">Automated alerts + security monitoring</p>
          </div>
          <div className="bg-white p-3 rounded">
            <p className="font-medium mb-1">Response Time</p>
            <p className="text-slate-600">Critical: &lt;1 hour, High: &lt;4 hours</p>
          </div>
          <div className="bg-white p-3 rounded">
            <p className="font-medium mb-1">Notification</p>
            <p className="text-slate-600">Affected patients within 72 hours</p>
          </div>
          <div className="bg-white p-3 rounded">
            <p className="font-medium mb-1">Documentation</p>
            <p className="text-slate-600">Complete incident report to regulators</p>
          </div>
        </div>
      </div>
    </div>
  );
}