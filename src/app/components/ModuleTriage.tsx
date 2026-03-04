import { Activity, AlertTriangle, CheckCircle, Clock, Shield, Users, Zap, RefreshCw, Brain } from "lucide-react";

export function ModuleTriage() {
  return (
    <div className="max-w-7xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Triage Module</h1>
        <p className="text-slate-600">
          Standalone clinical triage system for rapid patient acuity assessment, queue management,
          and safe handoff to clinical care — designed for high-volume Iraqi hospital EDs
        </p>
      </div>

      {/* Why Triage is a Standalone Module */}
      <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
        <div className="flex gap-4">
          <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0" />
          <div>
            <h2 className="text-lg font-semibold text-amber-900 mb-2">
              Why Triage Has Its Own Module
            </h2>
            <p className="text-sm text-amber-800 mb-3">
              Triage is architecturally distinct from patient registration and clinical documentation.
              It operates under unique constraints that demand a dedicated module:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                "Must function before registration is complete (unknown/unconscious patients)",
                "Performed exclusively by nurses — not doctors or clerks",
                "Target completion time: under 3 minutes per patient",
                "Generates independent medico-legal audit trail (triage time is legally critical)",
                "Feeds real-time queue management and bed allocation displays",
                "Triggers AI early-warning scoring on vital signs",
                "Requires re-triage capability while patient waits",
                "Operates in offline mode — cannot depend on network for patient safety",
              ].map((point, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-amber-900">{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Patient Journey */}
      <div className="bg-white rounded-xl border border-slate-200 p-8">
        <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
          <Activity className="w-5 h-5 text-blue-600" />
          Patient Journey: Arrival → Triage → Clinical Handoff
        </h2>

        <div className="space-y-4">
          {[
            {
              step: "1",
              color: "slate",
              title: "Door Screening",
              actor: "Security / Porter",
              time: "< 30 seconds",
              description:
                "Binary assessment at entrance: Can the patient walk? Is this a trauma or cardiac event? Ambulatory patients join triage queue. Non-ambulatory or critical patients bypass to Resuscitation Bay immediately — triage is performed bedside simultaneously.",
            },
            {
              step: "2",
              color: "blue",
              title: "Identity Lookup",
              actor: "Triage Nurse",
              time: "< 60 seconds",
              description:
                'Search by National ID, phone number, or fingerprint scan. If patient is unconscious or unresponsive, select "Unknown Patient" — a temporary placeholder ID is assigned. Identity is confirmed later by a clerk at the bedside. Registration never blocks triage for ESI 1–2 patients.',
            },
            {
              step: "3",
              color: "blue",
              title: "Chief Complaint & Vitals",
              actor: "Triage Nurse",
              time: "< 90 seconds",
              description:
                "Nurse records a 1–2 sentence chief complaint in Arabic or English. Quick vitals captured: BP, HR, RR, SpO₂, temperature, GCS, pain score (0–10), blood glucose if indicated. Device auto-import supported via HL7 where available; manual entry as fallback.",
            },
            {
              step: "4",
              color: "orange",
              title: "AI-Assisted Category Assignment",
              actor: "Triage Nurse + AI",
              time: "< 30 seconds",
              description:
                "System calculates an AI-suggested ESI category based on vitals and keyword analysis of chief complaint. Suggestion is displayed with supporting flags (e.g. HYPOXIA, TACHYCARDIA, HIGH_RISK_KEYWORD). Nurse confirms or overrides — if overriding, a reason is required and logged for audit. AI runs entirely on-device; no internet needed.",
            },
            {
              step: "5",
              color: "emerald",
              title: "Disposition & Handoff",
              actor: "Triage Nurse",
              time: "< 30 seconds",
              description:
                "Patient assigned to zone (Resus / Majors / Minors / Fast Track / Waiting Room). Bed or queue position allocated. Relevant clinical team notified via in-system alert. Triage note immediately visible to ED physician on their dashboard. Wristband printed if printer available.",
            },
            {
              step: "6",
              color: "purple",
              title: "Waiting Room Monitoring & Re-Triage",
              actor: "Triage Nurse (ongoing)",
              time: "Continuous",
              description:
                "System auto-prompts re-assessment if ESI 3 patient waits > 30 min, or ESI 4 > 60 min. Any patient reporting deterioration via bedside tablet or nurse call triggers immediate re-triage alert. All re-assessments are logged as separate events with category change tracking.",
            },
          ].map((phase) => (
            <div key={phase.step} className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                {phase.step}
              </div>
              <div className="flex-1 bg-slate-50 rounded-lg p-4 border border-slate-200">
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <h3 className="font-semibold text-slate-900">{phase.title}</h3>
                  <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full">
                    {phase.actor}
                  </span>
                  <span className="text-xs bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {phase.time}
                  </span>
                </div>
                <p className="text-sm text-slate-600">{phase.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ESI Categories */}
      <div className="bg-white rounded-xl border border-slate-200 p-8">
        <h2 className="text-xl font-semibold mb-2">
          Triage Scale: Emergency Severity Index (ESI)
        </h2>
        <p className="text-slate-500 text-sm mb-6">
          ESI 1–5 adopted as the primary triage scale, with an optional Iraqi MoH variant
          (MOH_IQ) configurable per facility. Pediatric modifiers applied automatically for
          patients under 12.
        </p>

        <div className="space-y-3">
          {[
            {
              level: "1",
              nameEn: "Resuscitation",
              nameAr: "إنعاش",
              color: "red",
              targetTime: "Immediate — physician at bedside",
              examples: "Cardiac arrest, no pulse, apnea, unresponsive, massive hemorrhage, severe trauma",
              vitalsFlag: "Any life-threatening vital sign abnormality",
            },
            {
              level: "2",
              nameEn: "Emergent",
              nameAr: "طارئ",
              color: "orange",
              targetTime: "< 10 minutes",
              examples:
                "Chest pain (cardiac concern), stroke symptoms, severe respiratory distress, sepsis, altered consciousness, fractures with neurovascular compromise",
              vitalsFlag: "SpO₂ < 94%, HR > 130, BP < 90 systolic, GCS < 14, Temp > 39.5°C",
            },
            {
              level: "3",
              nameEn: "Urgent",
              nameAr: "عاجل",
              color: "amber",
              targetTime: "< 30 minutes",
              examples:
                "Abdominal pain, moderate fever, closed fractures, significant lacerations, moderate asthma, dehydration",
              vitalsFlag: "Abnormal but not immediately life-threatening",
            },
            {
              level: "4",
              nameEn: "Less Urgent",
              nameAr: "أقل إلحاحاً",
              color: "green",
              targetTime: "< 60 minutes",
              examples:
                "Minor wounds, mild pain, UTI symptoms, ear pain, simple sprains, chronic medication issues",
              vitalsFlag: "Normal vital signs expected",
            },
            {
              level: "5",
              nameEn: "Non-Urgent",
              nameAr: "غير عاجل",
              color: "slate",
              targetTime: "< 120 minutes",
              examples:
                "Prescription refills, minor rashes, chronic complaints without acute change, administrative follow-up",
              vitalsFlag: "Normal vital signs",
            },
          ].map((cat) => (
            <div
              key={cat.level}
              className="grid grid-cols-1 md:grid-cols-5 gap-4 p-4 rounded-lg border border-slate-200 bg-slate-50"
            >
              <div className="flex items-center gap-3 md:col-span-1">
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center text-2xl font-bold text-white flex-shrink-0 ${
                    cat.color === "red"
                      ? "bg-red-600"
                      : cat.color === "orange"
                      ? "bg-orange-500"
                      : cat.color === "amber"
                      ? "bg-amber-500"
                      : cat.color === "green"
                      ? "bg-emerald-500"
                      : "bg-slate-400"
                  }`}
                >
                  {cat.level}
                </div>
                <div>
                  <p className="font-semibold text-slate-900">{cat.nameEn}</p>
                  <p className="text-sm text-slate-500 font-arabic">{cat.nameAr}</p>
                </div>
              </div>
              <div className="md:col-span-4 grid grid-cols-1 md:grid-cols-3 gap-3">
                <div>
                  <p className="text-xs font-semibold text-slate-500 uppercase mb-1">Target Time</p>
                  <p className="text-sm text-slate-700 font-medium">{cat.targetTime}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-500 uppercase mb-1">Examples</p>
                  <p className="text-sm text-slate-600">{cat.examples}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-500 uppercase mb-1">Vital Sign Flags</p>
                  <p className="text-sm text-slate-600">{cat.vitalsFlag}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* AI Triage Engine */}
      <div className="bg-white rounded-xl border border-slate-200 p-8">
        <h2 className="text-xl font-semibold mb-2 flex items-center gap-2">
          <Brain className="w-5 h-5 text-purple-600" />
          AI-Assisted Triage Scoring Engine
        </h2>
        <p className="text-slate-500 text-sm mb-6">
          Runs entirely on the local hospital server — no internet dependency. Assists nurses; does
          not replace clinical judgment. All AI suggestions are logged with the nurse's confirmation
          or override for audit and model improvement.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="bg-purple-50 p-5 rounded-lg border border-purple-200">
            <h3 className="font-medium mb-3">Input Signals</h3>
            <ul className="text-sm text-slate-600 space-y-1">
              <li>• Chief complaint text (Arabic + English)</li>
              <li>• All triage vital signs</li>
              <li>• Patient age and known allergies</li>
              <li>• Arrival mode (ambulance = higher baseline)</li>
              <li>• Mechanism of injury if applicable</li>
              <li>• Historical diagnoses (if UNPI found)</li>
            </ul>
          </div>
          <div className="bg-purple-50 p-5 rounded-lg border border-purple-200">
            <h3 className="font-medium mb-3">Detection Rules</h3>
            <ul className="text-sm text-slate-600 space-y-1">
              <li>• Critical keyword matching (EN + AR)</li>
              <li>• Vital sign threshold rules (18 parameters)</li>
              <li>• Age vulnerability modifiers (&lt;2 or &gt;75)</li>
              <li>• Composite risk scoring</li>
              <li>• Pediatric normal range adjustments</li>
              <li>• Pregnancy flag triggers</li>
            </ul>
          </div>
          <div className="bg-purple-50 p-5 rounded-lg border border-purple-200">
            <h3 className="font-medium mb-3">Output</h3>
            <ul className="text-sm text-slate-600 space-y-1">
              <li>• Suggested ESI category (1–5)</li>
              <li>• Confidence level (HIGH / MEDIUM / LOW)</li>
              <li>• Named flags (e.g. TACHYCARDIA, HYPOXIA)</li>
              <li>• Recommended disposition zone</li>
              <li>• Team notification suggestions</li>
              <li>• Override reason required if nurse disagrees</li>
            </ul>
          </div>
        </div>

        <div className="bg-slate-50 rounded-lg p-5 border border-slate-200">
          <h3 className="font-medium mb-3">Vital Sign Flag Thresholds</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { flag: "CRITICAL_HYPOXIA", condition: "SpO₂ < 90%", category: "ESI 1" },
              { flag: "HYPOXIA", condition: "SpO₂ 90–93%", category: "ESI 2" },
              { flag: "BRADYCARDIA", condition: "HR < 45 bpm", category: "ESI 1" },
              { flag: "TACHYCARDIA", condition: "HR > 130 bpm", category: "ESI 2" },
              { flag: "HYPOTENSION", condition: "SBP < 85 mmHg", category: "ESI 1" },
              { flag: "HYPERTENSIVE_CRISIS", condition: "SBP > 200 mmHg", category: "ESI 2" },
              { flag: "ALTERED_CONSCIOUSNESS", condition: "GCS < 9", category: "ESI 1" },
              { flag: "REDUCED_GCS", condition: "GCS 9–13", category: "ESI 2" },
              { flag: "TACHYPNEA", condition: "RR > 30/min", category: "ESI 2" },
              { flag: "HIGH_FEVER", condition: "Temp > 39.5°C", category: "ESI 2" },
              { flag: "HYPOTHERMIA", condition: "Temp < 35°C", category: "ESI 1" },
              { flag: "SEVERE_PAIN", condition: "Pain score ≥ 8/10", category: "ESI 2" },
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-3 rounded border border-slate-200">
                <p className="text-xs font-mono font-semibold text-purple-700 mb-1">{item.flag}</p>
                <p className="text-xs text-slate-600">{item.condition}</p>
                <p className="text-xs font-semibold text-slate-500 mt-1">→ {item.category}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Registration Integration */}
      <div className="bg-white rounded-xl border border-slate-200 p-8">
        <h2 className="text-xl font-semibold mb-2 flex items-center gap-2">
          <Users className="w-5 h-5 text-blue-600" />
          Integration with Patient Registration
        </h2>
        <p className="text-slate-500 text-sm mb-6">
          Triage and Registration operate independently but are tightly linked. The integration
          decision depends on ESI category — clinical urgency always takes precedence over
          administrative completeness.
        </p>

        <div className="space-y-4">
          {[
            {
              category: "ESI 1–2 (Critical / Emergent)",
              color: "red",
              rule: "Triage FIRST. Registration happens bedside after stabilisation.",
              detail:
                'Identity status set to "Unknown" or "Probable" at triage. A registration clerk is dispatched to the bedside — the patient never goes to a registration desk. UNPI can be assigned retroactively. Insurance and payment captured post-stabilisation.',
            },
            {
              category: "ESI 3 (Urgent)",
              color: "amber",
              rule: "Triage and Registration run IN PARALLEL.",
              detail:
                "Patient goes to their assigned zone immediately after triage. A second staff member or kiosk captures demographics concurrently. If registration is incomplete at 15 minutes, a supervisor alert is triggered. Clinical care is not delayed.",
            },
            {
              category: "ESI 4–5 (Less Urgent / Non-Urgent)",
              color: "green",
              rule: "Registration FIRST, then Triage.",
              detail:
                "Full UNPI verification, payment method, and insurance confirmation captured at the registration desk before triage assessment. Standard queue model applies. This enables financial compliance without impacting patient safety for non-critical cases.",
            },
          ].map((item, idx) => (
            <div key={idx} className="rounded-lg border border-slate-200 overflow-hidden">
              <div
                className={`px-5 py-3 flex items-center gap-3 ${
                  item.color === "red"
                    ? "bg-red-50 border-b border-red-200"
                    : item.color === "amber"
                    ? "bg-amber-50 border-b border-amber-200"
                    : "bg-emerald-50 border-b border-emerald-200"
                }`}
              >
                <span
                  className={`font-bold text-sm px-2 py-0.5 rounded ${
                    item.color === "red"
                      ? "bg-red-600 text-white"
                      : item.color === "amber"
                      ? "bg-amber-500 text-white"
                      : "bg-emerald-500 text-white"
                  }`}
                >
                  {item.category}
                </span>
                <span className="font-medium text-slate-800 text-sm">{item.rule}</span>
              </div>
              <div className="px-5 py-3 bg-white">
                <p className="text-sm text-slate-600">{item.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Re-Triage & Waiting Room Safety */}
      <div className="bg-white rounded-xl border border-slate-200 p-8">
        <h2 className="text-xl font-semibold mb-2 flex items-center gap-2">
          <RefreshCw className="w-5 h-5 text-orange-600" />
          Re-Triage & Waiting Room Safety Rules
        </h2>
        <p className="text-slate-500 text-sm mb-6">
          Patient deterioration while waiting is one of the most preventable causes of adverse
          outcomes in busy EDs. Avicenna enforces automatic re-triage prompts and escalation rules.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold mb-3 text-slate-800">Automatic Re-Triage Triggers</h3>
            <div className="space-y-2">
              {[
                { trigger: "ESI 3 patient waits > 30 minutes", action: "Nurse prompted to re-assess", severity: "warn" },
                { trigger: "ESI 3 patient waits > 45 minutes", action: "Supervisor notified by system", severity: "alert" },
                { trigger: "ESI 4 patient waits > 60 minutes", action: "Nurse prompted to re-assess", severity: "warn" },
                { trigger: "Any patient leaves waiting area", action: "LWBS (Left Without Being Seen) risk flag raised", severity: "warn" },
                { trigger: "Patient reports pain increase (kiosk/tablet)", action: "Nurse alerted immediately", severity: "alert" },
                { trigger: "Repeat vitals show deterioration", action: "Automatic ESI upgrade suggested", severity: "alert" },
              ].map((rule, idx) => (
                <div key={idx} className="flex gap-3 p-3 rounded-lg bg-slate-50 border border-slate-200">
                  <div
                    className={`w-2 rounded-full flex-shrink-0 ${
                      rule.severity === "alert" ? "bg-red-500" : "bg-amber-400"
                    }`}
                  />
                  <div>
                    <p className="text-sm font-medium text-slate-800">{rule.trigger}</p>
                    <p className="text-xs text-slate-500 mt-0.5">→ {rule.action}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-3 text-slate-800">Re-Triage Audit Requirements</h3>
            <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 mb-4">
              <p className="text-sm text-orange-900">
                Every re-triage is stored as a separate <code className="bg-orange-100 px-1 rounded">triage_reassessments</code> record
                — never overwriting the original. This creates a complete timeline of the patient's
                acuity changes while waiting, which is critical for medico-legal protection and
                quality improvement audits.
              </p>
            </div>
            <ul className="space-y-2 text-sm text-slate-600">
              <li className="flex gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span>Previous and new ESI category both stored</span>
              </li>
              <li className="flex gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span>Reassessing nurse ID and timestamp logged</span>
              </li>
              <li className="flex gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span>Reason for category change required if escalation</span>
              </li>
              <li className="flex gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span>System-initiated vs. nurse-initiated flagged separately</span>
              </li>
              <li className="flex gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span>Escalation notification chain recorded</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* RBAC */}
      <div className="bg-white rounded-xl border border-slate-200 p-8">
        <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
          <Shield className="w-5 h-5 text-purple-600" />
          Role-Based Access Control
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-slate-50">
                <th className="text-left px-4 py-3 font-semibold text-slate-700 rounded-tl-lg">Role</th>
                <th className="text-center px-4 py-3 font-semibold text-slate-700">Create Triage</th>
                <th className="text-center px-4 py-3 font-semibold text-slate-700">View Records</th>
                <th className="text-center px-4 py-3 font-semibold text-slate-700">Assign Category</th>
                <th className="text-center px-4 py-3 font-semibold text-slate-700">Override AI</th>
                <th className="text-center px-4 py-3 font-semibold text-slate-700">Re-Triage</th>
                <th className="text-center px-4 py-3 font-semibold text-slate-700 rounded-tr-lg">Queue View</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {[
                {
                  role: "Triage Nurse",
                  create: true, view: "Own shift", assign: true, override: "With reason", retriage: true, queue: true,
                },
                {
                  role: "ED Physician",
                  create: false, view: "All", assign: true, override: true, retriage: true, queue: true,
                },
                {
                  role: "Ward Nurse",
                  create: false, view: "Own ward", assign: false, override: false, retriage: false, queue: true,
                },
                {
                  role: "Registration Clerk",
                  create: false, view: "Limited (name/status)", assign: false, override: false, retriage: false, queue: true,
                },
                {
                  role: "Supervisor / Charge Nurse",
                  create: true, view: "All", assign: true, override: true, retriage: true, queue: true,
                },
                {
                  role: "Auditor",
                  create: false, view: "Read-only (all)", assign: false, override: false, retriage: false, queue: true,
                },
              ].map((row, idx) => (
                <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                  <td className="px-4 py-3 font-medium text-slate-800">{row.role}</td>
                  {[row.create, row.view, row.assign, row.override, row.retriage, row.queue].map(
                    (val, i) => (
                      <td key={i} className="px-4 py-3 text-center">
                        {val === true ? (
                          <span className="text-emerald-600 font-semibold">✓</span>
                        ) : val === false ? (
                          <span className="text-slate-300">—</span>
                        ) : (
                          <span className="text-xs text-slate-600 bg-slate-100 px-2 py-0.5 rounded-full">
                            {val}
                          </span>
                        )}
                      </td>
                    )
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Data Model */}
      <div className="bg-white rounded-xl border border-slate-200 p-8">
        <h2 className="text-xl font-semibold mb-6">Core Data Model</h2>

        <div className="space-y-6">
          {[
            {
              table: "triage_encounters",
              description: "One record per triage event. Never updated in place — amendments create reassessment records.",
              keyFields: [
                { field: "triage_id", type: "UUID PK" },
                { field: "patient_id", type: "UUID FK → patients (nullable for unknown patients)" },
                { field: "arrival_time", type: "TIMESTAMPTZ — legally critical, immutable after save" },
                { field: "triage_start_time / triage_end_time", type: "TIMESTAMPTZ — door-to-triage KPI auto-computed" },
                { field: "arrival_mode", type: "ENUM: WALK_IN | AMBULANCE | POLICE | REFERRAL | TRANSFER | AIR" },
                { field: "identity_status", type: "ENUM: CONFIRMED | PROBABLE | UNKNOWN" },
                { field: "chief_complaint + chief_complaint_ar", type: "TEXT — bilingual storage" },
                { field: "triage_scale", type: "ENUM: ESI | MTS | CTAS | MOH_IQ" },
                { field: "triage_category", type: "SMALLINT 1–5" },
                { field: "ai_suggested_category", type: "SMALLINT — stored for audit/ML improvement" },
                { field: "category_override_reason", type: "TEXT — required when nurse deviates from AI" },
                { field: "triage_disposition", type: "ENUM: RESUS_BAY | MAJORS | MINORS | FAST_TRACK | WAITING_ROOM | LWBS | REFERRED_OUT | DOA" },
                { field: "requires_isolation + isolation_reason", type: "BOOLEAN + TEXT — infection control flag" },
                { field: "interpreter_needed + language_needed", type: "For non-Arabic/Kurdish speakers" },
              ],
            },
            {
              table: "triage_vitals",
              description: "Separate table from encounter to support multiple vital sign readings (initial triage + re-triage). Device source tracked.",
              keyFields: [
                { field: "vital_id", type: "UUID PK" },
                { field: "triage_id", type: "UUID FK → triage_encounters" },
                { field: "bp_systolic / bp_diastolic", type: "SMALLINT mmHg" },
                { field: "heart_rate", type: "SMALLINT bpm" },
                { field: "respiratory_rate", type: "SMALLINT breaths/min" },
                { field: "spo2_percent", type: "DECIMAL(4,1)" },
                { field: "temperature_celsius", type: "DECIMAL(4,1)" },
                { field: "gcs_total + gcs_eye + gcs_verbal + gcs_motor", type: "SMALLINT — full GCS breakdown" },
                { field: "blood_glucose_mmol", type: "DECIMAL(4,1) — optional" },
                { field: "weight_kg", type: "DECIMAL(5,1) — required for pediatric patients" },
                { field: "is_abnormal", type: "BOOLEAN — generated column, auto-computed from thresholds" },
                { field: "vital_source", type: "ENUM: MANUAL | DEVICE_AUTO | IMPORTED" },
              ],
            },
            {
              table: "triage_reassessments",
              description: "Append-only log of every re-triage event. Preserves complete timeline for medico-legal audit.",
              keyFields: [
                { field: "reassessment_id", type: "UUID PK" },
                { field: "original_triage_id", type: "UUID FK → triage_encounters" },
                { field: "previous_category + new_category", type: "SMALLINT — both stored" },
                { field: "reason", type: "TEXT — required for escalations" },
                { field: "initiated_by", type: "ENUM: NURSE | SYSTEM | PHYSICIAN" },
                { field: "escalated", type: "BOOLEAN" },
              ],
            },
          ].map((schema, idx) => (
            <div key={idx} className="border border-slate-200 rounded-lg overflow-hidden">
              <div className="bg-slate-800 px-5 py-3">
                <code className="text-emerald-400 font-mono font-semibold">{schema.table}</code>
                <span className="text-slate-400 text-sm ml-3">{schema.description}</span>
              </div>
              <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-2">
                {schema.keyFields.map((f, i) => (
                  <div key={i} className="flex gap-2 text-sm">
                    <code className="text-blue-600 font-mono font-medium flex-shrink-0">{f.field}</code>
                    <span className="text-slate-500">— {f.type}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Offline Behaviour */}
      <div className="bg-white rounded-xl border border-slate-200 p-8">
        <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
          <Zap className="w-5 h-5 text-amber-500" />
          Offline Operation
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-5">
            <h3 className="font-medium mb-3">What Works Without Internet</h3>
            <ul className="text-sm text-slate-700 space-y-2">
              {[
                "Full triage assessment and recording",
                "AI category suggestion (runs on local server)",
                "Vital signs capture and abnormality flagging",
                "Patient lookup from cached local index",
                "Unknown patient placeholder creation",
                "Wristband printing (local network printer)",
                "Queue display (cached, local broadcast)",
                "Re-triage and reassessment logging",
              ].map((item, i) => (
                <li key={i} className="flex gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-slate-50 border border-slate-200 rounded-lg p-5">
            <h3 className="font-medium mb-3">Sync Behaviour on Reconnection</h3>
            <ul className="text-sm text-slate-600 space-y-2">
              {[
                "All offline triage records pushed to central server in order of arrival_time",
                "Conflict resolution: server-authoritative on UNPI assignment",
                "Duplicate triage check runs after sync (same patient, same time window)",
                "Sync status visible to supervisor on dashboard",
                "Failed sync items held in local queue with retry logic",
                "Sync log immutable — cannot be cleared by clinical staff",
              ].map((item, i) => (
                <li key={i} className="flex gap-2">
                  <div className="w-1.5 h-1.5 bg-slate-400 rounded-full flex-shrink-0 mt-1.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Anti-Corruption Controls */}
      <div className="bg-red-50 border border-red-200 rounded-xl p-6">
        <h2 className="text-lg font-semibold text-red-900 mb-4 flex items-center gap-2">
          <Shield className="w-5 h-5 text-red-600" />
          Anti-Corruption & Fraud Prevention Controls
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            {
              control: "Immutable arrival timestamps",
              detail: "arrival_time is set server-side on record creation. Cannot be edited by any user role. Protects against backdating.",
            },
            {
              control: "AI override audit trail",
              detail:
                "Every deviation from AI suggestion requires a written reason, stored permanently. Patterns of unexplained overrides trigger audit engine alerts.",
            },
            {
              control: "Unknown patient controls",
              detail:
                "Unknown patient placeholders must be resolved within 24 hours or a supervisor alert fires. Prevents ghost patient records from persisting.",
            },
            {
              control: "Category inflation detection",
              detail:
                "Audit engine flags nurses who consistently assign ESI 2 to patients with ESI 4–5 vital signs — a pattern associated with billing fraud in some systems.",
            },
            {
              control: "Queue position immutability",
              detail:
                "Patients cannot be moved to a higher-priority queue position without a documented re-triage. Prevents queue jumping via staff relationships.",
            },
            {
              control: "Dual verification for ESI 1 bypass",
              detail:
                "Resuscitation Bay admissions require triage nurse entry + supervising physician acknowledgement within 5 minutes, logged separately.",
            },
          ].map((item, idx) => (
            <div key={idx} className="bg-white rounded-lg p-4 border border-red-100">
              <p className="font-medium text-red-900 mb-1">{item.control}</p>
              <p className="text-sm text-slate-600">{item.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
