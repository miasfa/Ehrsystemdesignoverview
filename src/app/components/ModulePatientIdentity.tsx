import { User, Fingerprint, Shield, AlertTriangle, CheckCircle, Users } from "lucide-react";

export function ModulePatientIdentity() {
  return (
    <div className="max-w-7xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Patient Identity System</h1>
        <p className="text-slate-600">
          Foundational module ensuring unique patient identification across the national health system
        </p>
      </div>

      {/* Critical Importance */}
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
        <div className="flex gap-4">
          <Shield className="w-6 h-6 text-blue-600 flex-shrink-0" />
          <div>
            <h2 className="text-lg font-semibold text-blue-900 mb-2">Foundation of System Integrity</h2>
            <p className="text-sm text-blue-800">
              Patient identity is the cornerstone of all clinical and financial transactions. 
              Weak identity management enables: ghost patients for drug diversion, duplicate 
              records causing medical errors, insurance fraud, and resource theft. This module 
              implements defense-in-depth identity verification.
            </p>
          </div>
        </div>
      </div>

      {/* National Patient Identifier */}
      <div className="bg-white rounded-xl border border-slate-200 p-8">
        <h2 className="text-xl font-semibold mb-6">Unique National Patient Identifier (UNPI)</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-lg">
            <h3 className="font-semibold mb-3">Identifier Structure</h3>
            <div className="bg-white p-4 rounded border border-purple-200">
              <p className="font-mono text-lg text-center text-slate-900 mb-2">
                MH-2026-123456789-7
              </p>
              <div className="text-xs text-slate-600 space-y-1">
                <p><strong>MH</strong> = Country code (Ministry of Health)</p>
                <p><strong>2026</strong> = Year of registration</p>
                <p><strong>123456789</strong> = Sequential unique number</p>
                <p><strong>7</strong> = Check digit (Luhn algorithm)</p>
              </div>
            </div>
            <p className="text-sm text-slate-600 mt-3">
              Lifetime identifier that follows patient across all facilities nationally.
            </p>
          </div>

          <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 p-6 rounded-lg">
            <h3 className="font-semibold mb-3">Identifier Properties</h3>
            <ul className="space-y-2 text-sm text-slate-700">
              <li className="flex gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span><strong>Unique:</strong> Never reused, even after death</span>
              </li>
              <li className="flex gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span><strong>Non-intelligent:</strong> Contains no demographic data</span>
              </li>
              <li className="flex gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span><strong>Verifiable:</strong> Check digit prevents typos</span>
              </li>
              <li className="flex gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span><strong>Portable:</strong> Patient card with barcode + QR code</span>
              </li>
              <li className="flex gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span><strong>Linkable:</strong> Can be linked to national ID after assignment</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-slate-50 p-5 rounded-lg">
          <h3 className="font-medium mb-3">Assignment Process:</h3>
          <ol className="space-y-2 text-sm text-slate-700">
            <li className="flex gap-3">
              <span className="font-semibold text-blue-600 flex-shrink-0">1.</span>
              <span>Patient arrives at any facility (hospital, clinic, community health post)</span>
            </li>
            <li className="flex gap-3">
              <span className="font-semibold text-blue-600 flex-shrink-0">2.</span>
              <span>Check if patient already has UNPI (via national ID, phone, or biometric search)</span>
            </li>
            <li className="flex gap-3">
              <span className="font-semibold text-blue-600 flex-shrink-0">3.</span>
              <span>If no UNPI exists: register patient with demographics + optional biometric capture</span>
            </li>
            <li className="flex gap-3">
              <span className="font-semibold text-blue-600 flex-shrink-0">4.</span>
              <span>System generates UNPI via central registry (ensuring uniqueness)</span>
            </li>
            <li className="flex gap-3">
              <span className="font-semibold text-blue-600 flex-shrink-0">5.</span>
              <span>Print patient card immediately (even in offline mode, sync later)</span>
            </li>
          </ol>
        </div>
      </div>

      {/* Biometric Integration */}
      <div className="bg-white rounded-xl border border-slate-200 p-8">
        <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
          <Fingerprint className="w-6 h-6 text-purple-600" />
          Biometric Verification System
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="bg-purple-50 p-5 rounded-lg border border-purple-200">
            <h3 className="font-medium mb-2">Fingerprint Capture</h3>
            <p className="text-sm text-slate-600 mb-3">Primary biometric modality for patient identification</p>
            <ul className="text-sm text-slate-600 space-y-1">
              <li>• All 10 fingerprints captured at registration</li>
              <li>• ISO 19794-2 compliant templates</li>
              <li>• Template stored as irreversible hash</li>
              <li>• 1:N matching for duplicate detection</li>
              <li>• Fallback to photo + demographics if poor quality</li>
            </ul>
          </div>

          <div className="bg-blue-50 p-5 rounded-lg border border-blue-200">
            <h3 className="font-medium mb-2">Facial Recognition</h3>
            <p className="text-sm text-slate-600 mb-3">Secondary verification method</p>
            <ul className="text-sm text-slate-600 space-y-1">
              <li>• Photo captured at registration</li>
              <li>• Facial landmarks extracted and hashed</li>
              <li>• Used for visual confirmation by staff</li>
              <li>• Age progression algorithms for pediatrics</li>
              <li>• Privacy-preserving (no raw images stored centrally)</li>
            </ul>
          </div>

          <div className="bg-emerald-50 p-5 rounded-lg border border-emerald-200">
            <h3 className="font-medium mb-2">Iris Scanning (Optional)</h3>
            <p className="text-sm text-slate-600 mb-3">High-security applications</p>
            <ul className="text-sm text-slate-600 space-y-1">
              <li>• Extremely accurate (1 in 1 million false match)</li>
              <li>• Useful for newborns (fingerprints not developed)</li>
              <li>• Higher equipment cost (deployment in phases)</li>
              <li>• Suitable for national ID card integration</li>
            </ul>
          </div>
        </div>

        <div className="bg-amber-50 border border-amber-200 rounded-lg p-5">
          <h3 className="font-medium mb-2 flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-amber-600" />
            Privacy & Ethical Considerations
          </h3>
          <ul className="text-sm text-slate-700 space-y-2">
            <li>• Biometric data never leaves national borders (data sovereignty)</li>
            <li>• Patient consent required with opt-out option (demographics-only registration allowed)</li>
            <li>• Biometric templates encrypted at rest and in transit</li>
            <li>• No sharing with law enforcement without court order</li>
            <li>• Annual security audit of biometric database</li>
          </ul>
        </div>
      </div>

      {/* Duplicate Detection */}
      <div className="bg-white rounded-xl border border-slate-200 p-8">
        <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
          <Users className="w-6 h-6 text-orange-600" />
          Duplicate Patient Detection & Prevention
        </h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="font-medium mb-3">Real-Time Duplicate Checking:</h3>
            <p className="text-sm text-slate-600 mb-4">
              During registration, system performs multi-factor duplicate search before assigning new UNPI:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                <h4 className="font-medium text-slate-900 mb-2">Deterministic Matching</h4>
                <ul className="text-sm text-slate-600 space-y-1">
                  <li>• Exact match on national ID number</li>
                  <li>• Exact match on phone number</li>
                  <li>• Biometric fingerprint match (&gt;98% confidence)</li>
                </ul>
              </div>
              <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                <h4 className="font-medium text-slate-900 mb-2">Probabilistic Matching</h4>
                <ul className="text-sm text-slate-600 space-y-1">
                  <li>• Soundex match on name + date of birth</li>
                  <li>• Levenshtein distance for typos</li>
                  <li>• Geographic proximity (same village/district)</li>
                  <li>• Weighted scoring algorithm</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-5">
            <h3 className="font-medium mb-3">Potential Duplicate Workflow:</h3>
            <p className="text-sm text-slate-700 mb-3">
              If system detects potential duplicate (score &gt;70%):
            </p>
            <ol className="space-y-2 text-sm text-slate-700">
              <li className="flex gap-3">
                <span className="font-semibold text-blue-600 flex-shrink-0">1.</span>
                <span>Alert registration clerk with side-by-side comparison of potential matches</span>
              </li>
              <li className="flex gap-3">
                <span className="font-semibold text-blue-600 flex-shrink-0">2.</span>
                <span>Clerk interviews patient to verify identity (show photos, addresses from system)</span>
              </li>
              <li className="flex gap-3">
                <span className="font-semibold text-blue-600 flex-shrink-0">3.</span>
                <span>If confirmed duplicate: use existing UNPI, update demographics if changed</span>
              </li>
              <li className="flex gap-3">
                <span className="font-semibold text-blue-600 flex-shrink-0">4.</span>
                <span>If confirmed distinct patient: create new UNPI, flag both records for manual review</span>
              </li>
              <li className="flex gap-3">
                <span className="font-semibold text-blue-600 flex-shrink-0">5.</span>
                <span>Data quality team reviews all flagged cases monthly</span>
              </li>
            </ol>
          </div>

          <div className="bg-red-50 border border-red-200 rounded-lg p-5">
            <h3 className="font-medium mb-2">Record Merging (High-Risk Operation):</h3>
            <p className="text-sm text-slate-700 mb-3">
              If two UNPIs confirmed to be the same person:
            </p>
            <ul className="text-sm text-slate-700 space-y-2">
              <li>• Only facility administrator + data quality officer can merge (dual authorization)</li>
              <li>• All clinical data migrated to primary UNPI</li>
              <li>• Duplicate UNPI marked as "MERGED" (never deleted for audit trail)</li>
              <li>• Merge action logged with full justification</li>
              <li>• 30-day undo window in case of error</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Ghost Patient Prevention */}
      <div className="bg-white rounded-xl border border-slate-200 p-8">
        <h2 className="text-xl font-semibold mb-6">Ghost Patient & Fake Identity Prevention</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-medium mb-3">Detection Mechanisms:</h3>
            <div className="space-y-3">
              {[
                {
                  indicator: "No Clinical Activity",
                  description: "UNPI created but zero encounters/orders after 30 days",
                },
                {
                  indicator: "Orphan Orders",
                  description: "Lab/imaging orders without corresponding encounter",
                },
                {
                  indicator: "Impossible Demographics",
                  description: "Age >120 years, invalid ID format, impossible dates",
                },
                {
                  indicator: "Single-Use Pattern",
                  description: "Patient registers, receives expensive service, never returns",
                },
                {
                  indicator: "Bulk Registration",
                  description: "Single clerk creates &gt;50 patients in one shift",
                },
                {
                  indicator: "Missing Biometrics",
                  description: "High-value encounters without biometric verification",
                },
              ].map((item, index) => (
                <div key={index} className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <p className="font-medium text-slate-900 mb-1">{item.indicator}</p>
                  <p className="text-sm text-slate-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-medium mb-3">Prevention Measures:</h3>
            <div className="space-y-3">
              <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
                <h4 className="font-medium mb-2">Registration Validation:</h4>
                <ul className="text-sm text-slate-600 space-y-1">
                  <li>• National ID verification via government API (if available)</li>
                  <li>• Phone number SMS verification</li>
                  <li>• Mandatory photo capture</li>
                  <li>• Address geocoding (GPS coordinates)</li>
                  <li>• Next-of-kin contact information</li>
                </ul>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h4 className="font-medium mb-2">High-Value Service Gate:</h4>
                <ul className="text-sm text-slate-600 space-y-1">
                  <li>• Expensive tests require biometric re-verification</li>
                  <li>• Surgical procedures need supervisor confirmation</li>
                  <li>• Medication orders &gt;$100 trigger identity check</li>
                  <li>• Insurance claims require biometric proof</li>
                </ul>
              </div>

              <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                <h4 className="font-medium mb-2">Audit & Review:</h4>
                <ul className="text-sm text-slate-600 space-y-1">
                  <li>• Weekly review of flagged registrations</li>
                  <li>• Random sample verification (10% of new UNPIs)</li>
                  <li>• Pattern analysis across facilities</li>
                  <li>• Staff training on fraud indicators</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Patient Lifecycle */}
      <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
        <h3 className="font-semibold mb-4">Patient Lifecycle Tracking</h3>
        <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
          {[
            { status: "Active", color: "emerald", description: "Regular patient with recent encounters" },
            { status: "Inactive", color: "slate", description: "No activity &gt;2 years" },
            { status: "Deceased", color: "red", description: "Death reported, cannot reactivate" },
            { status: "Migrated", color: "blue", description: "Moved abroad, UNPI frozen" },
            { status: "Duplicate", color: "orange", description: "Merged into another UNPI" },
            { status: "Under Review", color: "amber", description: "Flagged for verification" },
          ].map((item, index) => (
            <div key={index} className="bg-blue-50 border border-blue-200 p-3 rounded-lg">
              <p className="font-medium text-blue-900 mb-1">{item.status}</p>
              <p className="text-xs text-slate-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}