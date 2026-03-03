import { ClipboardList, CheckCircle } from "lucide-react";

export function ModuleOrders() {
  return (
    <div className="max-w-7xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Orders Management Module</h1>
        <p className="text-slate-600">
          Centralized ordering system for lab tests, imaging, consultations, and procedures with authorization workflow
        </p>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 p-8">
        <h2 className="text-xl font-semibold mb-6">Order Types</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              type: "Laboratory Orders",
              color: "purple",
              features: [
                "LOINC-coded test catalog",
                "Panel ordering (e.g., CBC with differential)",
                "Specimen collection tracking",
                "Priority levels (Routine/Urgent/STAT)",
                "Fasting/preparation instructions",
                "Result interface from LIS",
              ],
            },
            {
              type: "Imaging Orders",
              color: "blue",
              features: [
                "DICOM modality worklist integration",
                "Contrast allergy screening",
                "Radiation dose tracking",
                "Protocol selection (e.g., CT Head with/without contrast)",
                "Prior authorization for expensive studies",
                "Radiologist assignment",
              ],
            },
            {
              type: "Consultation Requests",
              color: "emerald",
              features: [
                "Specialist routing based on availability",
                "Clinical question documentation",
                "Relevant history summary",
                "Urgency level (Routine/Urgent/Emergency)",
                "Response time SLA tracking",
                "Consultant recommendations capture",
              ],
            },
            {
              type: "Procedure Orders",
              color: "orange",
              features: [
                "Procedure consent workflow",
                "Scheduling integration (OR, cath lab, endoscopy)",
                "Equipment/implant reservation",
                "Pre-procedure checklist",
                "Sedation requirements",
                "Post-procedure orders set",
              ],
            },
          ].map((order, index) => (
            <div key={index} className="bg-blue-50 border border-blue-200 rounded-lg p-5">
              <h3 className="font-semibold text-lg text-blue-900 mb-3">{order.type}</h3>
              <div className="space-y-2">
                {order.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 p-8">
        <h2 className="text-xl font-semibold mb-4">Authorization Workflow (Fraud Prevention)</h2>
        <div className="space-y-4">
          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <h3 className="font-medium mb-2">High-Cost Orders (Requires Senior Approval):</h3>
            <p className="text-sm text-slate-600 mb-2">Orders exceeding cost threshold ($500) or flagged as high-risk require attending physician or department head authorization before execution.</p>
            <ul className="text-sm text-slate-600 space-y-1">
              <li>• MRI/CT scans</li>
              <li>• Genetic testing</li>
              <li>• Extensive immunology panels</li>
              <li>• Interventional procedures</li>
            </ul>
          </div>
          
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h3 className="font-medium mb-2">Duplicate Order Detection:</h3>
            <p className="text-sm text-slate-600">System alerts if identical test ordered within clinical relevance window (e.g., same CBC within 24 hours). Requires clinical justification to proceed.</p>
          </div>
          
          <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
            <h3 className="font-medium mb-2">Ghost Patient Prevention:</h3>
            <p className="text-sm text-slate-600">Orders can only be placed for patients with active encounters. System validates patient presence at facility before accepting expensive test orders.</p>
          </div>
        </div>
      </div>
    </div>
  );
}