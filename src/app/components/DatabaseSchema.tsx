import { Database, Key, Link2, Shield, Clock } from "lucide-react";

export function DatabaseSchema() {
  const coreEntities = [
    {
      name: "patients",
      description: "Central patient identity registry",
      fields: [
        { name: "patient_id", type: "UUID", key: "PK", description: "Unique national identifier" },
        { name: "national_id", type: "VARCHAR(50)", key: "UNIQUE", description: "Government ID number" },
        { name: "biometric_hash", type: "VARCHAR(255)", key: "INDEX", description: "Fingerprint/iris hash" },
        { name: "first_name", type: "VARCHAR(100)", description: "Encrypted PII" },
        { name: "last_name", type: "VARCHAR(100)", description: "Encrypted PII" },
        { name: "date_of_birth", type: "DATE", description: "" },
        { name: "gender", type: "CHAR(1)", description: "M/F/O" },
        { name: "phone_encrypted", type: "TEXT", description: "Encrypted contact" },
        { name: "address_encrypted", type: "TEXT", description: "Encrypted address" },
        { name: "photo_url", type: "VARCHAR(255)", description: "Secure storage reference" },
        { name: "duplicate_flag", type: "BOOLEAN", description: "Potential duplicate detection" },
        { name: "created_at", type: "TIMESTAMP", description: "" },
        { name: "created_by", type: "UUID", description: "FK to users" },
        { name: "updated_at", type: "TIMESTAMP", description: "" },
      ],
      indexes: ["national_id", "biometric_hash", "created_at"],
    },
    {
      name: "encounters",
      description: "Every patient interaction with healthcare facility",
      fields: [
        { name: "encounter_id", type: "UUID", key: "PK" },
        { name: "patient_id", type: "UUID", key: "FK", description: "→ patients" },
        { name: "facility_id", type: "UUID", key: "FK", description: "→ facilities" },
        { name: "encounter_type", type: "VARCHAR(50)", description: "OUTPATIENT/INPATIENT/EMERGENCY" },
        { name: "admission_date", type: "TIMESTAMP" },
        { name: "discharge_date", type: "TIMESTAMP" },
        { name: "attending_physician_id", type: "UUID", key: "FK" },
        { name: "department_id", type: "UUID", key: "FK" },
        { name: "chief_complaint", type: "TEXT" },
        { name: "status", type: "VARCHAR(20)", description: "ACTIVE/DISCHARGED/TRANSFERRED" },
        { name: "created_at", type: "TIMESTAMP" },
        { name: "created_by", type: "UUID" },
      ],
      indexes: ["patient_id", "facility_id", "admission_date", "status"],
    },
    {
      name: "clinical_notes",
      description: "Progress notes, discharge summaries, consultations",
      fields: [
        { name: "note_id", type: "UUID", key: "PK" },
        { name: "encounter_id", type: "UUID", key: "FK" },
        { name: "note_type", type: "VARCHAR(50)", description: "PROGRESS/ADMISSION/DISCHARGE/CONSULT" },
        { name: "note_content", type: "TEXT", description: "Rich text or structured" },
        { name: "author_id", type: "UUID", key: "FK" },
        { name: "cosigner_id", type: "UUID", key: "FK", description: "For resident notes" },
        { name: "signed_at", type: "TIMESTAMP" },
        { name: "amended", type: "BOOLEAN" },
        { name: "amendment_reason", type: "TEXT" },
        { name: "created_at", type: "TIMESTAMP" },
      ],
      indexes: ["encounter_id", "author_id", "created_at"],
    },
    {
      name: "diagnoses",
      description: "ICD-coded diagnoses",
      fields: [
        { name: "diagnosis_id", type: "UUID", key: "PK" },
        { name: "encounter_id", type: "UUID", key: "FK" },
        { name: "icd_code", type: "VARCHAR(10)", description: "ICD-10/11 code" },
        { name: "diagnosis_description", type: "VARCHAR(500)" },
        { name: "diagnosis_type", type: "VARCHAR(20)", description: "PRIMARY/SECONDARY/COMPLICATION" },
        { name: "onset_date", type: "DATE" },
        { name: "resolved_date", type: "DATE" },
        { name: "diagnosed_by", type: "UUID", key: "FK" },
        { name: "created_at", type: "TIMESTAMP" },
      ],
      indexes: ["encounter_id", "icd_code"],
    },
    {
      name: "orders",
      description: "All clinical orders (lab, imaging, procedures, medications)",
      fields: [
        { name: "order_id", type: "UUID", key: "PK" },
        { name: "encounter_id", type: "UUID", key: "FK" },
        { name: "order_type", type: "VARCHAR(50)", description: "LAB/IMAGING/MEDICATION/PROCEDURE" },
        { name: "order_code", type: "VARCHAR(50)", description: "LOINC/CPT code" },
        { name: "order_description", type: "TEXT" },
        { name: "priority", type: "VARCHAR(20)", description: "ROUTINE/URGENT/STAT" },
        { name: "ordered_by", type: "UUID", key: "FK" },
        { name: "ordered_at", type: "TIMESTAMP" },
        { name: "authorized_by", type: "UUID", key: "FK", description: "Senior approval if needed" },
        { name: "status", type: "VARCHAR(20)", description: "PENDING/APPROVED/IN_PROGRESS/COMPLETED/CANCELLED" },
        { name: "performed_by", type: "UUID", key: "FK" },
        { name: "performed_at", type: "TIMESTAMP" },
        { name: "result_available_at", type: "TIMESTAMP" },
        { name: "cancellation_reason", type: "TEXT" },
        { name: "fraud_flag", type: "BOOLEAN", description: "Flagged by AI system" },
        { name: "created_at", type: "TIMESTAMP" },
      ],
      indexes: ["encounter_id", "order_type", "status", "ordered_by", "fraud_flag"],
    },
  ];

  const pharmacyEntities = [
    {
      name: "medications_master",
      description: "National drug formulary",
      fields: [
        { name: "medication_id", type: "UUID", key: "PK" },
        { name: "generic_name", type: "VARCHAR(200)" },
        { name: "brand_name", type: "VARCHAR(200)" },
        { name: "drug_class", type: "VARCHAR(100)" },
        { name: "controlled_substance_schedule", type: "VARCHAR(10)", description: "I-V or null" },
        { name: "requires_authorization", type: "BOOLEAN" },
        { name: "unit_of_measure", type: "VARCHAR(50)", description: "mg, mL, tablet" },
        { name: "standard_cost", type: "DECIMAL(10,2)" },
        { name: "atc_code", type: "VARCHAR(10)", description: "WHO ATC classification" },
        { name: "active", type: "BOOLEAN" },
      ],
    },
    {
      name: "medication_stock",
      description: "Inventory at each storage location",
      fields: [
        { name: "stock_id", type: "UUID", key: "PK" },
        { name: "medication_id", type: "UUID", key: "FK" },
        { name: "location_id", type: "UUID", key: "FK", description: "Central/Pharmacy/Ward" },
        { name: "batch_number", type: "VARCHAR(100)", key: "INDEX" },
        { name: "expiry_date", type: "DATE", key: "INDEX" },
        { name: "quantity", type: "INTEGER" },
        { name: "received_date", type: "DATE" },
        { name: "supplier_id", type: "UUID", key: "FK" },
        { name: "unit_cost", type: "DECIMAL(10,2)" },
        { name: "quarantine", type: "BOOLEAN", description: "Quality hold" },
      ],
      indexes: ["medication_id", "location_id", "batch_number", "expiry_date"],
    },
    {
      name: "medication_orders",
      description: "Prescriptions and medication orders",
      fields: [
        { name: "med_order_id", type: "UUID", key: "PK" },
        { name: "order_id", type: "UUID", key: "FK", description: "→ orders" },
        { name: "medication_id", type: "UUID", key: "FK" },
        { name: "dose", type: "VARCHAR(100)", description: "500mg" },
        { name: "route", type: "VARCHAR(50)", description: "PO/IV/IM" },
        { name: "frequency", type: "VARCHAR(100)", description: "BID/TID/Q6H" },
        { name: "duration_days", type: "INTEGER" },
        { name: "indication", type: "TEXT" },
        { name: "substitution_allowed", type: "BOOLEAN" },
        { name: "prescriber_id", type: "UUID", key: "FK" },
        { name: "pharmacy_verified_by", type: "UUID", key: "FK" },
        { name: "dispensed_by", type: "UUID", key: "FK" },
        { name: "dispensed_at", type: "TIMESTAMP" },
        { name: "batch_dispensed", type: "VARCHAR(100)" },
      ],
    },
    {
      name: "medication_administration",
      description: "Each dose given to patient (critical audit trail)",
      fields: [
        { name: "administration_id", type: "UUID", key: "PK" },
        { name: "med_order_id", type: "UUID", key: "FK" },
        { name: "scheduled_time", type: "TIMESTAMP" },
        { name: "administered_time", type: "TIMESTAMP" },
        { name: "administered_by", type: "UUID", key: "FK" },
        { name: "witnessed_by", type: "UUID", key: "FK", description: "For controlled drugs" },
        { name: "dose_given", type: "VARCHAR(100)" },
        { name: "route_used", type: "VARCHAR(50)" },
        { name: "batch_number", type: "VARCHAR(100)", key: "INDEX", description: "CRITICAL for traceability" },
        { name: "patient_refused", type: "BOOLEAN" },
        { name: "refusal_reason", type: "TEXT" },
        { name: "adverse_reaction", type: "BOOLEAN" },
        { name: "reaction_details", type: "TEXT" },
        { name: "wastage", type: "DECIMAL(10,2)", description: "Amount wasted" },
        { name: "wastage_reason", type: "TEXT" },
        { name: "wastage_witnessed_by", type: "UUID", key: "FK" },
      ],
      indexes: ["med_order_id", "administered_by", "batch_number", "administered_time"],
    },
  ];

  const auditEntities = [
    {
      name: "audit_log",
      description: "Immutable audit trail of all system actions",
      fields: [
        { name: "audit_id", type: "UUID", key: "PK" },
        { name: "user_id", type: "UUID", key: "FK" },
        { name: "action", type: "VARCHAR(100)", description: "CREATE/READ/UPDATE/DELETE" },
        { name: "resource_type", type: "VARCHAR(100)", description: "Table name" },
        { name: "resource_id", type: "UUID", description: "Record ID" },
        { name: "old_value", type: "JSONB", description: "Before state" },
        { name: "new_value", type: "JSONB", description: "After state" },
        { name: "ip_address", type: "INET" },
        { name: "user_agent", type: "TEXT" },
        { name: "facility_id", type: "UUID", key: "FK" },
        { name: "timestamp", type: "TIMESTAMP", key: "INDEX" },
        { name: "blockchain_hash", type: "VARCHAR(64)", description: "Optional integrity check" },
      ],
      indexes: ["user_id", "resource_type", "resource_id", "timestamp"],
    },
    {
      name: "anomaly_detections",
      description: "AI-detected suspicious patterns",
      fields: [
        { name: "anomaly_id", type: "UUID", key: "PK" },
        { name: "detection_type", type: "VARCHAR(100)", description: "EXCESSIVE_ORDERING/GHOST_PATIENT/INVENTORY_LEAK" },
        { name: "severity", type: "VARCHAR(20)", description: "LOW/MEDIUM/HIGH/CRITICAL" },
        { name: "related_user_id", type: "UUID", key: "FK" },
        { name: "related_resource_type", type: "VARCHAR(100)" },
        { name: "related_resource_id", type: "UUID" },
        { name: "evidence_data", type: "JSONB", description: "Supporting metrics" },
        { name: "reviewed", type: "BOOLEAN" },
        { name: "reviewed_by", type: "UUID", key: "FK" },
        { name: "review_outcome", type: "VARCHAR(50)", description: "FALSE_POSITIVE/CONFIRMED/ESCALATED" },
        { name: "detected_at", type: "TIMESTAMP" },
      ],
      indexes: ["detection_type", "severity", "reviewed", "related_user_id"],
    },
  ];

  return (
    <div className="max-w-7xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Database Schema Design</h1>
        <p className="text-slate-600">
          Relational database structure optimized for transactional integrity, audit trails, 
          and anti-corruption controls
        </p>
      </div>

      {/* Schema Principles */}
      <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-6 border border-blue-200">
        <h2 className="text-lg font-semibold mb-4">Design Principles</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex gap-3">
            <Key className="w-5 h-5 text-blue-600 flex-shrink-0" />
            <div>
              <p className="font-medium text-slate-900">Immutable Audit Trails</p>
              <p className="text-sm text-slate-600">Every write creates audit log entry. No deletions, only soft deletes.</p>
            </div>
          </div>
          <div className="flex gap-3">
            <Link2 className="w-5 h-5 text-blue-600 flex-shrink-0" />
            <div>
              <p className="font-medium text-slate-900">Referential Integrity</p>
              <p className="text-sm text-slate-600">Foreign keys enforced. Cascade rules prevent orphaned records.</p>
            </div>
          </div>
          <div className="flex gap-3">
            <Shield className="w-5 h-5 text-blue-600 flex-shrink-0" />
            <div>
              <p className="font-medium text-slate-900">Field-Level Encryption</p>
              <p className="text-sm text-slate-600">PII encrypted at application layer before database storage.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Core Entities */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">Core Clinical Entities</h2>
        <div className="space-y-6">
          {coreEntities.map((entity) => (
            <div key={entity.name} className="bg-white rounded-xl border border-slate-200 overflow-hidden">
              <div className="bg-slate-50 px-6 py-4 border-b border-slate-200">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 font-mono">{entity.name}</h3>
                    <p className="text-sm text-slate-600 mt-1">{entity.description}</p>
                  </div>
                  <Database className="w-5 h-5 text-slate-400" />
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-slate-50 text-xs uppercase text-slate-600">
                    <tr>
                      <th className="px-6 py-3 text-left">Field Name</th>
                      <th className="px-6 py-3 text-left">Type</th>
                      <th className="px-6 py-3 text-left">Constraints</th>
                      <th className="px-6 py-3 text-left">Description</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    {entity.fields.map((field, idx) => (
                      <tr key={idx} className="hover:bg-slate-50">
                        <td className="px-6 py-3 font-mono text-sm text-slate-900">{field.name}</td>
                        <td className="px-6 py-3 font-mono text-sm text-blue-600">{field.type}</td>
                        <td className="px-6 py-3">
                          {field.key && (
                            <span className="inline-block px-2 py-1 text-xs rounded bg-purple-100 text-purple-700 font-medium">
                              {field.key}
                            </span>
                          )}
                        </td>
                        <td className="px-6 py-3 text-sm text-slate-600">{field.description}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              {entity.indexes && (
                <div className="bg-slate-50 px-6 py-3 border-t border-slate-200">
                  <p className="text-xs text-slate-600">
                    <span className="font-medium">Indexes:</span> {entity.indexes.join(", ")}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Pharmacy Entities */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">Pharmacy & Medication Tracking</h2>
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6">
          <p className="text-sm text-amber-800">
            <strong>Critical:</strong> This schema enables complete drug traceability from supplier to patient 
            administration. Every batch number is tracked to prevent diversion of controlled substances.
          </p>
        </div>
        <div className="space-y-6">
          {pharmacyEntities.map((entity) => (
            <div key={entity.name} className="bg-white rounded-xl border border-slate-200 overflow-hidden">
              <div className="bg-emerald-50 px-6 py-4 border-b border-emerald-200">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 font-mono">{entity.name}</h3>
                    <p className="text-sm text-slate-600 mt-1">{entity.description}</p>
                  </div>
                  <Database className="w-5 h-5 text-emerald-600" />
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-slate-50 text-xs uppercase text-slate-600">
                    <tr>
                      <th className="px-6 py-3 text-left">Field Name</th>
                      <th className="px-6 py-3 text-left">Type</th>
                      <th className="px-6 py-3 text-left">Constraints</th>
                      <th className="px-6 py-3 text-left">Description</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    {entity.fields.map((field, idx) => (
                      <tr key={idx} className="hover:bg-slate-50">
                        <td className="px-6 py-3 font-mono text-sm text-slate-900">{field.name}</td>
                        <td className="px-6 py-3 font-mono text-sm text-blue-600">{field.type}</td>
                        <td className="px-6 py-3">
                          {field.key && (
                            <span className="inline-block px-2 py-1 text-xs rounded bg-purple-100 text-purple-700 font-medium">
                              {field.key}
                            </span>
                          )}
                        </td>
                        <td className="px-6 py-3 text-sm text-slate-600">{field.description}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              {entity.indexes && (
                <div className="bg-slate-50 px-6 py-3 border-t border-slate-200">
                  <p className="text-xs text-slate-600">
                    <span className="font-medium">Indexes:</span> {entity.indexes.join(", ")}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Audit Entities */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">Audit & Anti-Corruption Tables</h2>
        <div className="space-y-6">
          {auditEntities.map((entity) => (
            <div key={entity.name} className="bg-white rounded-xl border border-slate-200 overflow-hidden">
              <div className="bg-red-50 px-6 py-4 border-b border-red-200">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 font-mono">{entity.name}</h3>
                    <p className="text-sm text-slate-600 mt-1">{entity.description}</p>
                  </div>
                  <Shield className="w-5 h-5 text-red-600" />
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-slate-50 text-xs uppercase text-slate-600">
                    <tr>
                      <th className="px-6 py-3 text-left">Field Name</th>
                      <th className="px-6 py-3 text-left">Type</th>
                      <th className="px-6 py-3 text-left">Constraints</th>
                      <th className="px-6 py-3 text-left">Description</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    {entity.fields.map((field, idx) => (
                      <tr key={idx} className="hover:bg-slate-50">
                        <td className="px-6 py-3 font-mono text-sm text-slate-900">{field.name}</td>
                        <td className="px-6 py-3 font-mono text-sm text-blue-600">{field.type}</td>
                        <td className="px-6 py-3">
                          {field.key && (
                            <span className="inline-block px-2 py-1 text-xs rounded bg-purple-100 text-purple-700 font-medium">
                              {field.key}
                            </span>
                          )}
                        </td>
                        <td className="px-6 py-3 text-sm text-slate-600">{field.description}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              {entity.indexes && (
                <div className="bg-slate-50 px-6 py-3 border-t border-slate-200">
                  <p className="text-xs text-slate-600">
                    <span className="font-medium">Indexes:</span> {entity.indexes.join(", ")}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Additional Technical Notes */}
      <div className="bg-white rounded-xl border border-slate-200 p-6">
        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <Clock className="w-5 h-5 text-slate-600" />
          Database Performance & Scalability
        </h2>
        <div className="space-y-4 text-sm text-slate-700">
          <div>
            <h3 className="font-medium mb-2">Partitioning Strategy:</h3>
            <ul className="list-disc list-inside space-y-1 text-slate-600">
              <li>audit_log partitioned by timestamp (monthly partitions)</li>
              <li>encounters partitioned by admission_date (yearly partitions)</li>
              <li>medication_administration partitioned by administered_time (quarterly)</li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium mb-2">Replication:</h3>
            <ul className="list-disc list-inside space-y-1 text-slate-600">
              <li>Master-slave replication for read scaling</li>
              <li>Multi-master for geographically distributed facilities</li>
              <li>Conflict resolution via vector clocks</li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium mb-2">Backup & Recovery:</h3>
            <ul className="list-disc list-inside space-y-1 text-slate-600">
              <li>Continuous WAL archiving to object storage</li>
              <li>Daily full backups with 7-year retention</li>
              <li>Point-in-time recovery capability</li>
              <li>Encrypted backups with separate key management</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
