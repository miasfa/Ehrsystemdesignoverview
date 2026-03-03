import { TestTube, CheckCircle } from "lucide-react";

export function ModuleLab() {
  return (
    <div className="max-w-7xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Laboratory & Imaging Module</h1>
        <p className="text-slate-600">
          Integration with diagnostic equipment, result management, and fraud prevention for test orders
        </p>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 p-8">
        <h2 className="text-xl font-semibold mb-6">Laboratory Information System (LIS) Integration</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-blue-50 p-5 rounded-lg">
            <h3 className="font-semibold mb-3">Specimen Tracking:</h3>
            <div className="space-y-2">
              {[
                "Barcode label generation at collection",
                "Chain of custody from bedside to lab",
                "Specimen adequacy verification",
                "Temperature monitoring for sensitive tests",
                "Rejection reason documentation",
                "Storage location tracking",
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-purple-50 p-5 rounded-lg">
            <h3 className="font-semibold mb-3">Analyzer Integration (HL7 v2):</h3>
            <div className="space-y-2">
              {[
                "Automated result import from lab equipment",
                "Quality control result verification",
                "Delta check (comparison with previous results)",
                "Critical value alerting",
                "Auto-validation for normal ranges",
                "Technician review for flagged results",
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 p-8">
        <h2 className="text-xl font-semibold mb-4">Fraud Prevention Mechanisms</h2>
        <div className="space-y-4">
          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <h3 className="font-medium mb-2">Phantom Testing Detection:</h3>
            <p className="text-sm text-slate-600">Tests ordered under fake patients or performed without specimen collection. System flags tests lacking specimen barcode scan or results entered manually without analyzer link.</p>
          </div>
          
          <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
            <h3 className="font-medium mb-2">External Result Export Control:</h3>
            <p className="text-sm text-slate-600">Audit trail of all result report generations. Excessive printing/exporting by single user triggers investigation. Watermarking prevents unauthorized duplication.</p>
          </div>
          
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
            <h3 className="font-medium mb-2">Reagent Consumption Tracking:</h3>
            <p className="text-sm text-slate-600">Cross-reference reagent usage with number of tests performed. Discrepancies indicate potential reagent theft or unreported testing.</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 p-8">
        <h2 className="text-xl font-semibold mb-4">Imaging (PACS Integration)</h2>
        <div className="space-y-3 text-sm text-slate-600">
          <p>• <strong>DICOM Modality Worklist:</strong> Studies scheduled in EHR appear on scanner console</p>
          <p>• <strong>PACS Storage:</strong> Images stored in secure archive with 10-year retention</p>
          <p>• <strong>Radiologist Reporting:</strong> Structured templates with voice recognition</p>
          <p>• <strong>Critical Finding Alerts:</strong> Radiologist can trigger stat notification to ordering physician</p>
          <p>• <strong>Dose Tracking:</strong> Cumulative radiation exposure monitoring</p>
        </div>
      </div>
    </div>
  );
}
