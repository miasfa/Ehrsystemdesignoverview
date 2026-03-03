import { Package, TrendingDown, CheckCircle } from "lucide-react";

export function ModuleInventory() {
  return (
    <div className="max-w-7xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Inventory & Resource Tracking Module</h1>
        <p className="text-slate-600">
          Comprehensive tracking of consumables, implants, surgical kits, and equipment with automated anomaly detection
        </p>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 p-8">
        <h2 className="text-xl font-semibold mb-6">Tracked Item Categories</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            {
              category: "Medical Consumables",
              color: "blue",
              items: ["Syringes", "IV catheters", "Gloves", "Sutures", "Dressings", "Catheters"],
            },
            {
              category: "Surgical Implants",
              color: "purple",
              items: ["Orthopedic implants", "Cardiac stents", "Pacemakers", "Meshes", "Prosthetics"],
            },
            {
              category: "Equipment",
              color: "emerald",
              items: ["Ventilators", "Infusion pumps", "Monitors", "Defibrillators", "Ultrasound"],
            },
            {
              category: "Kits & Packs",
              color: "orange",
              items: ["Surgical trays", "Central line kits", "Delivery packs", "Trauma kits"],
            },
          ].map((cat, index) => (
            <div key={index} className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h3 className="font-semibold text-blue-900 mb-3">{cat.category}</h3>
              <ul className="space-y-1">
                {cat.items.map((item, idx) => (
                  <li key={idx} className="text-sm text-slate-600">• {item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 p-8">
        <h2 className="text-xl font-semibold mb-6">Tracking Methodology</h2>
        
        <div className="space-y-6">
          <div className="bg-blue-50 p-5 rounded-lg">
            <h3 className="font-semibold mb-3">Per-Item Tracking (High-Value Items):</h3>
            <p className="text-sm text-slate-600 mb-3">Each item assigned unique serial number/barcode. Tracked from receiving to patient use.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {[
                "Scan at goods receipt",
                "Assign to storage location",
                "Scan when issued to department",
                "Link to specific patient/procedure",
                "Document explantation (if applicable)",
                "Complete lifecycle visibility",
              ].map((step, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-700">{step}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-emerald-50 p-5 rounded-lg">
            <h3 className="font-semibold mb-3">Bulk Tracking (Consumables):</h3>
            <p className="text-sm text-slate-600 mb-3">Tracked at batch/lot level with periodic physical counts.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {[
                "Par level management (min/max quantities)",
                "Automated reorder points",
                "Department-level allocation",
                "Monthly consumption reporting",
                "Variance analysis (system vs. physical)",
                "Expiry date monitoring",
              ].map((step, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-700">{step}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 p-8">
        <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
          <TrendingDown className="w-6 h-6 text-red-600" />
          Abnormal Consumption Detection
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            {
              title: "Statistical Outliers",
              description: "Department consumption >2 standard deviations above mean",
              severity: "HIGH",
            },
            {
              title: "Shrinkage Rate",
              description: "Physical count < system balance by >10% (potential theft)",
              severity: "CRITICAL",
            },
            {
              title: "Usage Without Patient Link",
              description: "High-value items marked used but not linked to patient record",
              severity: "CRITICAL",
            },
            {
              title: "After-Hours Access",
              description: "Supply room accessed outside normal operating hours without justification",
              severity: "MEDIUM",
            },
            {
              title: "Expired Item Usage",
              description: "Items past expiry scanned for patient use",
              severity: "HIGH",
            },
            {
              title: "Peer Comparison",
              description: "One facility's consumption 3x higher than similar facilities",
              severity: "HIGH",
            },
          ].map((detection, index) => (
            <div key={index} className="bg-red-50 border border-red-200 rounded-lg p-4">
              <div className="flex items-start justify-between mb-2">
                <h3 className="font-medium text-slate-900">{detection.title}</h3>
                <span
                  className={`text-xs px-2 py-1 rounded ${
                    detection.severity === "CRITICAL"
                      ? "bg-red-600 text-white"
                      : detection.severity === "HIGH"
                      ? "bg-orange-600 text-white"
                      : "bg-amber-600 text-white"
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

      <div className="bg-white rounded-xl border border-slate-200 p-8">
        <h2 className="text-xl font-semibold mb-4">Equipment Management</h2>
        <div className="space-y-3 text-sm text-slate-600">
          <p>• <strong>Maintenance Scheduling:</strong> Preventive maintenance calendar with automated reminders</p>
          <p>• <strong>Calibration Tracking:</strong> Regulatory compliance for measurement devices</p>
          <p>• <strong>Utilization Metrics:</strong> Hours of operation, case volume per equipment</p>
          <p>• <strong>Downtime Logging:</strong> Repair history and Mean Time Between Failures (MTBF)</p>
          <p>• <strong>Asset Tagging:</strong> RFID/barcode for location tracking and theft prevention</p>
        </div>
      </div>
    </div>
  );
}