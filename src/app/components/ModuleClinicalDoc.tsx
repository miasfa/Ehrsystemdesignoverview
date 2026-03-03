import { FileText, CheckCircle } from "lucide-react";

export function ModuleClinicalDoc() {
  return (
    <div className="max-w-7xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Clinical Documentation Module</h1>
        <p className="text-slate-600">
          Comprehensive encounter management, progress notes, diagnoses, and procedures with ICD coding integration
        </p>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 p-8">
        <h2 className="text-xl font-semibold mb-6">Core Components</h2>
        
        <div className="space-y-6">
          {[
            {
              title: "Encounters & Admissions",
              items: [
                "Outpatient, inpatient, emergency visit types",
                "Chief complaint documentation",
                "Triage assessment (severity scoring)",
                "Admission/discharge workflow",
                "Transfer between departments",
                "Length of stay tracking",
              ],
            },
            {
              title: "Progress Notes",
              items: [
                "SOAP format support (Subjective, Objective, Assessment, Plan)",
                "Voice-to-text dictation integration",
                "Template library for common conditions",
                "Attending physician co-signature for residents",
                "Amendment tracking (with reason justification)",
                "Addendum append-only model",
              ],
            },
            {
              title: "Diagnoses (ICD Integration)",
              items: [
                "ICD-10 and ICD-11 code search",
                "Primary vs. secondary diagnosis",
                "Complications and comorbidities",
                "Onset and resolution dates",
                "Clinical decision support for coding accuracy",
                "DRG (Diagnosis Related Group) auto-calculation",
              ],
            },
            {
              title: "Procedures",
              items: [
                "CPT/HCPCS procedure coding",
                "Operative notes with structured templates",
                "Procedure authorization workflow",
                "Consent form management (e-signature)",
                "Complication documentation",
                "Surgical safety checklist integration",
              ],
            },
            {
              title: "Vital Signs",
              items: [
                "Manual entry or automated device capture",
                "Configurable vital sign flowsheets",
                "Pediatric vs. adult normal ranges",
                "Early warning score calculations (NEWS2, PEWS)",
                "Trend visualization and alerts",
                "Integration with monitoring equipment (HL7)",
              ],
            },
            {
              title: "Attachments & Scanned Documents",
              items: [
                "PDF upload for external records",
                "OCR (Optical Character Recognition) for text extraction",
                "DICOM viewer for embedded imaging",
                "Lab reports from external facilities",
                "Consent forms and legal documents",
                "Metadata tagging and search",
              ],
            },
          ].map((section, index) => (
            <div key={index} className="bg-blue-50 border border-blue-200 rounded-lg p-5">
              <h3 className="font-semibold text-lg mb-3">{section.title}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {section.items.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 p-8">
        <h2 className="text-xl font-semibold mb-4">Anti-Fraud Controls</h2>
        <div className="space-y-3 text-sm text-slate-600">
          <p>• <strong>Timestamp Verification:</strong> Clinical notes cannot be backdated beyond 24 hours</p>
          <p>• <strong>Encounter Linkage:</strong> All documentation must be linked to valid patient encounter</p>
          <p>• <strong>Author Authentication:</strong> Digital signatures with PKI for legal authenticity</p>
          <p>• <strong>Version Control:</strong> Complete history of amendments preserved indefinitely</p>
        </div>
      </div>
    </div>
  );
}
