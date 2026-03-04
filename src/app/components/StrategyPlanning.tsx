import { 
  Target, 
  Users, 
  MapPin, 
  Shield, 
  FileText, 
  Building2,
  TrendingUp,
  CheckCircle,
  AlertTriangle,
  Lightbulb,
  Activity,
  Scale,
  Globe,
  DollarSign
} from "lucide-react";

export function StrategyPlanning() {
  return (
    <div className="max-w-6xl mx-auto space-y-8 pb-16">
      {/* Header */}
      <div className="bg-gradient-to-r from-emerald-600 to-teal-700 rounded-2xl p-8 text-white">
        <Target className="w-12 h-12 mb-4" />
        <h1 className="text-4xl font-bold mb-3">Strategy & Planning Framework</h1>
        <p className="text-emerald-100 text-lg">
          Complete roadmap from vision to national healthcare transformation in Iraq
        </p>
      </div>

      {/* Project Vision */}
      <section className="bg-white rounded-xl border border-slate-200 p-8">
        <div className="flex items-center gap-3 mb-6">
          <Lightbulb className="w-8 h-8 text-emerald-600" />
          <h2 className="text-2xl font-bold text-slate-900">Project Vision & Goals</h2>
        </div>
        
        <div className="space-y-6">
          <div className="bg-emerald-50 border-l-4 border-emerald-600 p-6 rounded-lg">
            <h3 className="font-semibold text-lg text-emerald-900 mb-2">Our Vision</h3>
            <p className="text-slate-700">
              Transform Iraqi healthcare from paper-based workflows to a transparent, efficient, 
              and accountability-focused digital system. Start with one pilot hospital, prove 
              the model works, then scale to create Iraq's first comprehensive national 
              Electronic Health Record infrastructure.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="font-semibold text-blue-900 mb-3">Short-Term Goals (6-12 months)</h3>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span>Deploy working system in one pilot hospital</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span>Digitize patient records and eliminate paper files</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span>Track all medication from delivery to patient</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span>Reduce medication theft by 80%</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span>Demonstrate ROI and cost savings</span>
                </li>
              </ul>
            </div>

            <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
              <h3 className="font-semibold text-purple-900 mb-3">Long-Term Goals (2-5 years)</h3>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                  <span>Expand to 50+ hospitals across Iraq</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                  <span>Create national patient ID registry</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                  <span>Enable national disease surveillance</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                  <span>Reduce national healthcare fraud by 50%</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                  <span>Become regional healthcare IT leader</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Iraqi Healthcare Context */}
      <section className="bg-white rounded-xl border border-slate-200 p-8">
        <div className="flex items-center gap-3 mb-6">
          <MapPin className="w-8 h-8 text-red-600" />
          <h2 className="text-2xl font-bold text-slate-900">Iraqi Healthcare Environment</h2>
        </div>

        <div className="space-y-6">
          <div className="bg-amber-50 border border-amber-300 rounded-lg p-6">
            <h3 className="font-semibold text-amber-900 mb-3 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5" />
              Key Challenges to Address
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="font-medium text-sm text-slate-900 mb-1">🏥 Infrastructure Issues</p>
                <ul className="text-xs text-slate-700 space-y-1 ml-4">
                  <li>• Unreliable electricity (frequent outages)</li>
                  <li>• Poor internet connectivity in many areas</li>
                  <li>• Limited IT infrastructure in hospitals</li>
                  <li>• Lack of computer literacy among staff</li>
                </ul>
              </div>
              <div>
                <p className="font-medium text-sm text-slate-900 mb-1">💰 Financial Constraints</p>
                <ul className="text-xs text-slate-700 space-y-1 ml-4">
                  <li>• Limited healthcare budget</li>
                  <li>• Medication and supply shortages</li>
                  <li>• Brain drain (doctors leaving country)</li>
                  <li>• Expensive imported medical equipment</li>
                </ul>
              </div>
              <div>
                <p className="font-medium text-sm text-slate-900 mb-1">🚨 Corruption & Fraud</p>
                <ul className="text-xs text-slate-700 space-y-1 ml-4">
                  <li>• Widespread medication theft</li>
                  <li>• Ghost patients for insurance fraud</li>
                  <li>• Untracked medical supply chains</li>
                  <li>• Counterfeit drugs in market</li>
                </ul>
              </div>
              <div>
                <p className="font-medium text-sm text-slate-900 mb-1">📋 Operational Problems</p>
                <ul className="text-xs text-slate-700 space-y-1 ml-4">
                  <li>• Lost or damaged paper files</li>
                  <li>• Duplicate patient registrations</li>
                  <li>• No coordination between hospitals</li>
                  <li>• Manual, time-consuming processes</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-emerald-50 border border-emerald-300 rounded-lg p-6">
            <h3 className="font-semibold text-emerald-900 mb-3 flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              Opportunities for Success
            </h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white rounded p-3">
                <p className="font-medium text-sm text-emerald-900 mb-2">🎯 Strong Need</p>
                <p className="text-xs text-slate-600">
                  Healthcare crisis creates urgent demand for solutions. 
                  Government actively seeking modernization.
                </p>
              </div>
              <div className="bg-white rounded p-3">
                <p className="font-medium text-sm text-emerald-900 mb-2">🌍 Regional First</p>
                <p className="text-xs text-slate-600">
                  No comprehensive EHR in Iraq. Opportunity to be first mover and set standards.
                </p>
              </div>
              <div className="bg-white rounded p-3">
                <p className="font-medium text-sm text-emerald-900 mb-2">💡 AI Potential</p>
                <p className="text-xs text-slate-600">
                  Fraud detection, Arabic medical transcription, disease prediction can showcase innovation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pilot Hospital Requirements */}
      <section className="bg-white rounded-xl border border-slate-200 p-8">
        <div className="flex items-center gap-3 mb-6">
          <Building2 className="w-8 h-8 text-blue-600" />
          <h2 className="text-2xl font-bold text-slate-900">Pilot Hospital Selection Criteria</h2>
        </div>

        <div className="space-y-4">
          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-lg">
            <h3 className="font-semibold text-blue-900 mb-3">Ideal Pilot Hospital Profile</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="font-medium text-sm text-blue-900 mb-2">Essential Requirements</p>
                <ul className="text-sm text-slate-700 space-y-1">
                  <li>✅ 100-300 beds (manageable size)</li>
                  <li>✅ Progressive hospital director who supports innovation</li>
                  <li>✅ Relatively stable electricity (generator backup)</li>
                  <li>✅ Some internet connectivity (even if intermittent)</li>
                  <li>✅ Located in accessible city (Baghdad, Basra, Erbil)</li>
                  <li>✅ Mix of departments (OPD, ED, pharmacy, lab, OR)</li>
                </ul>
              </div>
              <div>
                <p className="font-medium text-sm text-blue-900 mb-2">Desirable Characteristics</p>
                <ul className="text-sm text-slate-700 space-y-1">
                  <li>💡 Some staff with basic computer skills</li>
                  <li>💡 Experience with any existing digital tools</li>
                  <li>💡 Documented corruption/theft problems (shows need)</li>
                  <li>💡 Government hospital (not private)</li>
                  <li>💡 Teaching hospital (more open to change)</li>
                  <li>💡 Visible to Ministry of Health for showcase</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
              <p className="font-semibold text-slate-900 mb-2">Minimum Infrastructure</p>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• 20-30 desktop computers</li>
                <li>• 5-10 fingerprint scanners</li>
                <li>• Barcode scanners (10+)</li>
                <li>• Network switches/WiFi</li>
                <li>• Backup power (UPS)</li>
                <li>• 1-2 servers (can start with 1)</li>
              </ul>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
              <p className="font-semibold text-slate-900 mb-2">Human Resources</p>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• 15-20 doctors</li>
                <li>• 40-60 nurses</li>
                <li>• 5-10 pharmacists</li>
                <li>• 10-15 lab technicians</li>
                <li>• 5-10 admin staff</li>
                <li>• 1 IT person (can train)</li>
              </ul>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
              <p className="font-semibold text-slate-900 mb-2">Estimated Budget</p>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• Hardware: $30-50K</li>
                <li>• Software licenses: $10-15K/year</li>
                <li>• Training: $5-10K</li>
                <li>• Implementation: $15-20K</li>
                <li>• Ongoing support: $5K/month</li>
                <li><strong>• Total Year 1: ~$100-150K</strong></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Legal & Compliance */}
      <section className="bg-white rounded-xl border border-slate-200 p-8">
        <div className="flex items-center gap-3 mb-6">
          <Scale className="w-8 h-8 text-purple-600" />
          <h2 className="text-2xl font-bold text-slate-900">Legal & Compliance Requirements</h2>
        </div>

        <div className="space-y-4">
          <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
            <h3 className="font-semibold text-purple-900 mb-3">Iraqi Regulatory Framework</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="font-medium text-sm mb-2">Data Protection & Privacy</p>
                <ul className="text-sm text-slate-700 space-y-1">
                  <li>• Iraqi data protection laws (if any)</li>
                  <li>• Patient consent requirements</li>
                  <li>• Data residency requirements (data stays in Iraq)</li>
                  <li>• Access logs and audit trails</li>
                  <li>• Right to patient data portability</li>
                </ul>
              </div>
              <div>
                <p className="font-medium text-sm mb-2">Medical Regulations</p>
                <ul className="text-sm text-slate-700 space-y-1">
                  <li>• Ministry of Health approvals</li>
                  <li>• Medical record retention requirements</li>
                  <li>• Controlled substance tracking (narcotics)</li>
                  <li>• Medical device regulations</li>
                  <li>• Pharmacy licensing requirements</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-red-50 border border-red-300 rounded-lg p-6">
            <h3 className="font-semibold text-red-900 mb-3 flex items-center gap-2">
              <Shield className="w-5 h-5" />
              Security & Anti-Corruption Measures
            </h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <p className="font-medium text-sm text-red-900 mb-2">Data Security</p>
                <ul className="text-xs text-slate-700 space-y-1">
                  <li>• AES-256 encryption at rest</li>
                  <li>• TLS 1.3 for data in transit</li>
                  <li>• Multi-factor authentication</li>
                  <li>• Role-based access control</li>
                  <li>• Regular security audits</li>
                </ul>
              </div>
              <div>
                <p className="font-medium text-sm text-red-900 mb-2">Audit & Traceability</p>
                <ul className="text-xs text-slate-700 space-y-1">
                  <li>• Every action logged</li>
                  <li>• Immutable audit trail</li>
                  <li>• User activity monitoring</li>
                  <li>• Automated anomaly detection</li>
                  <li>• Supervisor alerts</li>
                </ul>
              </div>
              <div>
                <p className="font-medium text-sm text-red-900 mb-2">Fraud Prevention</p>
                <ul className="text-xs text-slate-700 space-y-1">
                  <li>• Duplicate patient detection</li>
                  <li>• Medication batch tracking</li>
                  <li>• AI pattern recognition</li>
                  <li>• Cannot delete records</li>
                  <li>• Real-time theft alerts</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Opportunities */}
      <section className="bg-white rounded-xl border border-slate-200 p-8">
        <div className="flex items-center gap-3 mb-6">
          <Activity className="w-8 h-8 text-cyan-600" />
          <h2 className="text-2xl font-bold text-slate-900">AI Integration Opportunities</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-cyan-50 border border-cyan-200 rounded-lg p-6">
            <h3 className="font-semibold text-cyan-900 mb-3">Phase 1: Quick Wins</h3>
            <div className="space-y-3">
              <div className="bg-white rounded p-3">
                <p className="font-medium text-sm text-cyan-900 mb-1">🔍 Fraud Detection AI</p>
                <p className="text-xs text-slate-600">
                  Automatically detect suspicious patterns: duplicate patients, medication theft, 
                  unusual prescribing patterns. Alert supervisors immediately.
                </p>
              </div>
              <div className="bg-white rounded p-3">
                <p className="font-medium text-sm text-cyan-900 mb-1">🗣️ Arabic Medical Transcription</p>
                <p className="text-xs text-slate-600">
                  Convert doctor's voice notes to text in Arabic. Save time on documentation. 
                  Integrate with speech-to-text models.
                </p>
              </div>
              <div className="bg-white rounded p-3">
                <p className="font-medium text-sm text-cyan-900 mb-1">📊 Inventory Optimization</p>
                <p className="text-xs text-slate-600">
                  Predict medication needs based on historical usage. Prevent stockouts and 
                  reduce expired medicine waste.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-6">
            <h3 className="font-semibold text-indigo-900 mb-3">Phase 2: Advanced Features</h3>
            <div className="space-y-3">
              <div className="bg-white rounded p-3">
                <p className="font-medium text-sm text-indigo-900 mb-1">🏥 Clinical Decision Support</p>
                <p className="text-xs text-slate-600">
                  Suggest diagnoses based on symptoms, lab results. Alert to dangerous 
                  drug interactions. Evidence-based treatment recommendations.
                </p>
              </div>
              <div className="bg-white rounded p-3">
                <p className="font-medium text-sm text-indigo-900 mb-1">📈 Disease Surveillance</p>
                <p className="text-xs text-slate-600">
                  Detect disease outbreaks early by analyzing patterns across hospitals. 
                  Cholera, COVID, measles detection.
                </p>
              </div>
              <div className="bg-white rounded p-3">
                <p className="font-medium text-sm text-indigo-900 mb-1">🔮 Predictive Analytics</p>
                <p className="text-xs text-slate-600">
                  Predict patient readmission risk. Identify high-risk patients needing 
                  follow-up. Optimize bed allocation and staffing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expansion Strategy */}
      <section className="bg-white rounded-xl border border-slate-200 p-8">
        <div className="flex items-center gap-3 mb-6">
          <Globe className="w-8 h-8 text-blue-600" />
          <h2 className="text-2xl font-bold text-slate-900">National Expansion Strategy</h2>
        </div>

        <div className="space-y-4">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-blue-50 border border-blue-300 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-3">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                  1
                </div>
                <p className="font-semibold text-blue-900">Pilot Success</p>
              </div>
              <p className="text-sm text-slate-700 mb-2">
                Prove system works in pilot hospital. Demonstrate ROI and collect testimonials.
              </p>
              <p className="text-xs text-slate-500">Months 1-6</p>
            </div>

            <div className="bg-blue-50 border border-blue-300 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-3">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                  2
                </div>
                <p className="font-semibold text-blue-900">Regional Expansion</p>
              </div>
              <p className="text-sm text-slate-700 mb-2">
                Deploy to 10-15 hospitals in same city/region. Build reputation and case studies.
              </p>
              <p className="text-xs text-slate-500">Months 7-18</p>
            </div>

            <div className="bg-blue-50 border border-blue-300 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-3">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                  3
                </div>
                <p className="font-semibold text-blue-900">National Rollout</p>
              </div>
              <p className="text-sm text-slate-700 mb-2">
                Secure government contract. Deploy to 100+ hospitals nationwide. National patient registry.
              </p>
              <p className="text-xs text-slate-500">Months 19-48</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-emerald-600 to-teal-700 rounded-lg p-6 text-white">
            <h3 className="font-semibold text-lg mb-3">🎯 Ultimate Goal: National Healthcare Infrastructure</h3>
            <p className="text-emerald-100 mb-4">
              Become the backbone of Iraq's healthcare system. Every hospital connected. 
              Every patient with a digital health record. Real-time disease surveillance. 
              Complete elimination of medication theft. Transparent, accountable, and efficient healthcare for all Iraqis.
            </p>
            <div className="flex gap-4 text-sm">
              <div className="bg-white/20 rounded px-3 py-2">
                <p className="font-semibold">50+ Hospitals</p>
              </div>
              <div className="bg-white/20 rounded px-3 py-2">
                <p className="font-semibold">10M+ Patients</p>
              </div>
              <div className="bg-white/20 rounded px-3 py-2">
                <p className="font-semibold">$100M+ Savings</p>
              </div>
              <div className="bg-white/20 rounded px-3 py-2">
                <p className="font-semibold">Regional Leader</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}