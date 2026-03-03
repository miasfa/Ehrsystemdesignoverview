import { Map, Target, Calendar, Users, DollarSign, CheckCircle } from "lucide-react";

export function RoadmapPhases() {
  return (
    <div className="max-w-7xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Implementation Roadmap</h1>
        <p className="text-slate-600">
          Phased approach: MVP → Hospital Rollout → Regional Expansion → National Platform
        </p>
      </div>

      {/* Phase Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[
          { phase: "MVP", duration: "6 months", facilities: "1 pilot", budget: "$500K - $800K" },
          { phase: "Phase 2", duration: "12 months", facilities: "10 hospitals", budget: "$3M - $5M" },
          { phase: "Phase 3", duration: "18 months", facilities: "50+ facilities", budget: "$10M - $15M" },
          { phase: "National", duration: "36+ months", facilities: "All facilities", budget: "$50M+" },
        ].map((item, index) => (
          <div key={index} className="bg-gradient-to-br from-blue-50 to-blue-100 p-5 rounded-xl border border-blue-200">
            <h3 className="font-semibold text-xl mb-3">{item.phase}</h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-blue-600" />
                <span className="text-slate-700">{item.duration}</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-blue-600" />
                <span className="text-slate-700">{item.facilities}</span>
              </div>
              <div className="flex items-center gap-2">
                <DollarSign className="w-4 h-4 text-blue-600" />
                <span className="text-slate-700">{item.budget}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* MVP Phase */}
      <div className="bg-white rounded-xl border border-slate-200 p-8">
        <div className="flex items-center gap-3 mb-6">
          <Target className="w-8 h-8 text-emerald-600" />
          <div>
            <h2 className="text-2xl font-semibold">Phase 1: MVP (Months 1-6)</h2>
            <p className="text-slate-600">Minimum Viable Product for single pilot hospital</p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-6">
            <h3 className="font-semibold mb-4">Core Modules to Build:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Patient registration & identity",
                "Encounters & admissions",
                "Basic clinical documentation",
                "Medication orders & dispensing",
                "Laboratory orders & results",
                "Pharmacy inventory tracking",
                "User authentication & RBAC",
                "Basic audit logging",
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-blue-50 p-5 rounded-lg">
              <h3 className="font-medium mb-3">Deliverables:</h3>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• Web application (React)</li>
                <li>• Backend API (Node.js/Python)</li>
                <li>• PostgreSQL database</li>
                <li>• Basic admin dashboard</li>
                <li>• User training materials</li>
                <li>• System documentation</li>
              </ul>
            </div>

            <div className="bg-purple-50 p-5 rounded-lg">
              <h3 className="font-medium mb-3">Success Metrics:</h3>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• 80% patient records digitized</li>
                <li>• &lt;2 minutes average registration time</li>
                <li>• Zero medication dispensing errors</li>
                <li>• 95% system uptime</li>
                <li>• Staff satisfaction score &gt;7/10</li>
              </ul>
            </div>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
            <h3 className="font-medium mb-2">Risk Mitigation:</h3>
            <p className="text-sm text-slate-600">
              Run parallel paper system for 1 month. Daily standups with clinical staff. 
              Dedicated on-site support engineer. Weekly demos to hospital administration.
            </p>
          </div>
        </div>
      </div>

      {/* Phase 2 */}
      <div className="bg-white rounded-xl border border-slate-200 p-8">
        <h2 className="text-2xl font-semibold mb-6">Phase 2: Hospital Rollout (Months 7-18)</h2>

        <div className="space-y-6">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="font-semibold mb-4">Additional Modules:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Operating room & anesthesia module",
                "Advanced pharmacy (controlled substances)",
                "Imaging integration (PACS)",
                "Inventory & supply chain",
                "Billing & insurance claims",
                "Mobile app for field workers",
                "Offline synchronization",
                "Advanced audit & fraud detection",
                "Analytics dashboard",
                "HL7 FHIR API",
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-purple-50 p-5 rounded-lg">
              <h3 className="font-medium mb-3">Infrastructure Expansion:</h3>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• Central data center setup</li>
                <li>• Redundant servers at 10 hospitals</li>
                <li>• VPN network between facilities</li>
                <li>• Biometric devices procurement</li>
                <li>• Barcode scanners for pharmacy/lab</li>
              </ul>
            </div>

            <div className="bg-emerald-50 p-5 rounded-lg">
              <h3 className="font-medium mb-3">Team Expansion:</h3>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• 5 full-stack developers</li>
                <li>• 2 clinical informaticists</li>
                <li>• 1 database administrator</li>
                <li>• 1 security engineer</li>
                <li>• 3 implementation specialists</li>
                <li>• 5 on-site support staff</li>
              </ul>
            </div>
          </div>

          <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
            <h3 className="font-medium mb-2">Integration Milestones:</h3>
            <p className="text-sm text-slate-600">
              Month 9: Lab equipment integration. Month 12: PACS live. Month 15: Mobile app deployed. 
              Month 18: All 10 hospitals fully operational.
            </p>
          </div>
        </div>
      </div>

      {/* Phase 3 */}
      <div className="bg-white rounded-xl border border-slate-200 p-8">
        <h2 className="text-2xl font-semibold mb-6">Phase 3: Regional Expansion (Months 19-36)</h2>

        <div className="space-y-6">
          <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
            <h3 className="font-semibold mb-4">Scale & Optimization:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Microservices refactoring for scale",
                "Multi-tenancy support",
                "Regional data centers (3-5 locations)",
                "Advanced analytics & AI models",
                "Telemedicine integration",
                "Patient portal (view own records)",
                "Insurance company integrations",
                "Public health surveillance",
                "Supply chain optimization AI",
                "Predictive modeling (bed capacity, epidemics)",
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-blue-50 p-5 rounded-lg">
              <h3 className="font-medium mb-3">Facility Types:</h3>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• 10 tertiary hospitals</li>
                <li>• 20 district hospitals</li>
                <li>• 20 health centers</li>
                <li>• 50 rural clinics</li>
                <li>• 100+ community health posts (mobile)</li>
              </ul>
            </div>

            <div className="bg-emerald-50 p-5 rounded-lg">
              <h3 className="font-medium mb-3">Quality Assurance:</h3>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• Automated testing suite (90% coverage)</li>
                <li>• Performance benchmarking</li>
                <li>• Security penetration testing</li>
                <li>• Disaster recovery drills</li>
                <li>• User acceptance testing per facility</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* National Phase */}
      <div className="bg-white rounded-xl border border-slate-200 p-8">
        <h2 className="text-2xl font-semibold mb-6">Phase 4: National Platform (Months 37+)</h2>

        <div className="space-y-6">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-lg p-6">
            <h3 className="font-semibold mb-4">National Health Information Exchange (NHIE):</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Unified patient identifier across all facilities",
                "Real-time data sharing between hospitals",
                "National disease surveillance",
                "Centralized drug formulary management",
                "National medical equipment tracking",
                "Cross-facility provider credentialing",
                "Research data repository (de-identified)",
                "Health economics modeling",
                "AI-driven resource allocation",
                "International health data exchange (IHE)",
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-5">
            <h3 className="font-medium mb-3">Governance Structure:</h3>
            <ul className="text-sm text-slate-600 space-y-2">
              <li>• National EHR Steering Committee (Ministry of Health)</li>
              <li>• Clinical Advisory Board (doctors, nurses, pharmacists)</li>
              <li>• Technical Advisory Board (architects, security experts)</li>
              <li>• Regional Implementation Teams</li>
              <li>• Patient Advocacy Council</li>
            </ul>
          </div>

          <div className="bg-purple-50 border border-purple-200 rounded-lg p-5">
            <h3 className="font-medium mb-3">Sustainability Plan:</h3>
            <ul className="text-sm text-slate-600 space-y-2">
              <li>• Government budget allocation (0.5% of health budget)</li>
              <li>• User fees from private facilities</li>
              <li>• Insurance company data access fees</li>
              <li>• Research institution licensing (de-identified data)</li>
              <li>• International donor support (initial years)</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Timeline Visualization */}
      <div className="bg-white rounded-xl border border-slate-200 p-8">
        <h2 className="text-xl font-semibold mb-6">Visual Timeline</h2>
        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-blue-300 -translate-x-1/2"></div>
          <div className="space-y-8">
            {[
              { month: "Month 0-6", title: "MVP Development", desc: "Core modules, 1 pilot hospital" },
              { month: "Month 7-12", title: "Initial Rollout", desc: "5 additional hospitals" },
              { month: "Month 13-18", title: "Feature Expansion", desc: "Advanced modules, 10 total facilities" },
              { month: "Month 19-24", title: "Regional Phase 1", desc: "25 facilities across 3 regions" },
              { month: "Month 25-36", title: "Regional Phase 2", desc: "100 facilities, mobile deployment" },
              { month: "Month 37+", title: "National Platform", desc: "All facilities, national data exchange" },
            ].map((item, index) => (
              <div key={index} className={`relative ${index % 2 === 0 ? 'pr-1/2 text-right' : 'pl-1/2 text-left'}`}>
                <div className="inline-block bg-blue-100 border border-blue-300 rounded-lg p-4 max-w-md">
                  <p className="text-xs font-semibold text-slate-500 mb-1">{item.month}</p>
                  <h3 className="font-semibold text-slate-900 mb-1">{item.title}</h3>
                  <p className="text-sm text-slate-600">{item.desc}</p>
                </div>
                <div className={`absolute top-1/2 ${index % 2 === 0 ? 'right-1/2 translate-x-1/2' : 'left-1/2 -translate-x-1/2'} w-4 h-4 bg-blue-500 rounded-full border-4 border-white -translate-y-1/2`}></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Budget Breakdown */}
      <div className="bg-gradient-to-r from-slate-50 to-slate-100 rounded-xl p-6 border border-slate-200">
        <h3 className="font-semibold mb-4">Budget Allocation (Phase 1-3 Total: ~$18M)</h3>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-sm">
          <div className="bg-white p-4 rounded">
            <p className="font-semibold text-2xl text-blue-600">35%</p>
            <p className="text-slate-600 mt-1">Software Development</p>
          </div>
          <div className="bg-white p-4 rounded">
            <p className="font-semibold text-2xl text-emerald-600">25%</p>
            <p className="text-slate-600 mt-1">Hardware & Infrastructure</p>
          </div>
          <div className="bg-white p-4 rounded">
            <p className="font-semibold text-2xl text-purple-600">15%</p>
            <p className="text-slate-600 mt-1">Training & Change Mgmt</p>
          </div>
          <div className="bg-white p-4 rounded">
            <p className="font-semibold text-2xl text-orange-600">15%</p>
            <p className="text-slate-600 mt-1">Implementation Support</p>
          </div>
          <div className="bg-white p-4 rounded">
            <p className="font-semibold text-2xl text-red-600">10%</p>
            <p className="text-slate-600 mt-1">Contingency & Ops</p>
          </div>
        </div>
      </div>
    </div>
  );
}