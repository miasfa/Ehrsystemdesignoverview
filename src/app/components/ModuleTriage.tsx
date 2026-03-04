import {
  AlertTriangle,
  Heart,
  ThermometerSun,
  Activity,
  Clock,
  Users,
  CheckCircle,
  XCircle,
  Shield,
  Eye,
  TrendingUp,
  Stethoscope,
  ClipboardList,
  Timer,
  UserPlus,
  AlertCircle,
  Zap
} from "lucide-react";

export function ModuleTriage() {
  return (
    <div className="max-w-6xl mx-auto space-y-8 pb-16">
      {/* Header */}
      <div className="bg-gradient-to-r from-red-600 to-orange-600 rounded-2xl p-8 text-white">
        <AlertTriangle className="w-12 h-12 mb-4" />
        <h1 className="text-4xl font-bold mb-3">Emergency Department Triage Module</h1>
        <p className="text-red-100 text-lg">
          Systematic patient prioritization ensuring critical cases receive immediate attention
          while maintaining complete accountability and preventing queue-jumping fraud
        </p>
      </div>

      {/* Why Triage is Critical */}
      <section className="bg-white rounded-xl border border-slate-200 p-8">
        <div className="flex items-center gap-3 mb-6">
          <Heart className="w-8 h-8 text-red-600" />
          <h2 className="text-2xl font-bold text-slate-900">Why Triage is Mission-Critical</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-lg">
            <h3 className="font-semibold text-red-900 mb-3">The Problem</h3>
            <ul className="space-y-2 text-sm text-slate-700">
              <li className="flex items-start gap-2">
                <XCircle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                <span><strong>Overcrowded emergency departments:</strong> 50-100+ patients waiting at once</span>
              </li>
              <li className="flex items-start gap-2">
                <XCircle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                <span><strong>Critical patients lost in chaos:</strong> Heart attack victims waiting behind minor complaints</span>
              </li>
              <li className="flex items-start gap-2">
                <XCircle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                <span><strong>Corruption & favoritism:</strong> VIPs, relatives, bribes skip the queue</span>
              </li>
              <li className="flex items-start gap-2">
                <XCircle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                <span><strong>No accountability:</strong> No record of who was seen first or why</span>
              </li>
              <li className="flex items-start gap-2">
                <XCircle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                <span><strong>Angry families:</strong> Violence breaks out over perceived unfairness</span>
              </li>
            </ul>
          </div>

          <div className="bg-emerald-50 border-l-4 border-emerald-600 p-6 rounded-lg">
            <h3 className="font-semibold text-emerald-900 mb-3">The Solution</h3>
            <ul className="space-y-2 text-sm text-slate-700">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                <span><strong>Standardized scoring system:</strong> Every patient assessed using same criteria (ESI/Manchester)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                <span><strong>Automatic prioritization:</strong> System calculates urgency score - no human bias</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                <span><strong>Complete audit trail:</strong> Every override logged and must be justified</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                <span><strong>Real-time monitoring:</strong> Supervisors see wait times, alerts for deteriorating patients</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                <span><strong>Transparent display:</strong> Public screen shows queue status (privacy-protected)</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Triage Categories (ESI Model) */}
      <section className="bg-white rounded-xl border border-slate-200 p-8">
        <div className="flex items-center gap-3 mb-6">
          <Activity className="w-8 h-8 text-blue-600" />
          <h2 className="text-2xl font-bold text-slate-900">Emergency Severity Index (ESI) - 5 Levels</h2>
        </div>

        <p className="text-slate-600 mb-6">
          Internationally recognized triage system (ESI) validated by research. Used by hospitals worldwide.
        </p>

        <div className="space-y-4">
          {/* Level 1 - Resuscitation */}
          <div className="bg-red-600 text-white rounded-lg p-6">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <Zap className="w-8 h-8" />
                <div>
                  <h3 className="text-2xl font-bold">LEVEL 1 - RESUSCITATION</h3>
                  <p className="text-red-100">Immediate life-saving intervention required</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-3xl font-bold">0 min</p>
                <p className="text-red-100 text-sm">Target Wait Time</p>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-4 mt-4">
              <div className="bg-red-700 rounded p-3">
                <p className="font-semibold mb-2">Examples:</p>
                <ul className="text-sm space-y-1">
                  <li>• Cardiac arrest (no pulse)</li>
                  <li>• Not breathing / severe respiratory distress</li>
                  <li>• Massive hemorrhage (uncontrolled bleeding)</li>
                  <li>• Unconscious / unresponsive</li>
                  <li>• Severe trauma (gunshot, major accident)</li>
                </ul>
              </div>
              <div className="bg-red-700 rounded p-3">
                <p className="font-semibold mb-2">Vital Signs:</p>
                <ul className="text-sm space-y-1">
                  <li>• Absent or severely abnormal</li>
                  <li>• Oxygen saturation &lt;85%</li>
                  <li>• Shock signs (cold, clammy)</li>
                  <li>• Altered mental status</li>
                </ul>
              </div>
              <div className="bg-red-700 rounded p-3">
                <p className="font-semibold mb-2">Action:</p>
                <ul className="text-sm space-y-1">
                  <li>• Bypass all steps</li>
                  <li>• Direct to resuscitation bay</li>
                  <li>• Call code blue/trauma team</li>
                  <li>• Start CPR/interventions immediately</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Level 2 - Emergent */}
          <div className="bg-orange-600 text-white rounded-lg p-6">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <AlertCircle className="w-8 h-8" />
                <div>
                  <h3 className="text-2xl font-bold">LEVEL 2 - EMERGENT (High Risk)</h3>
                  <p className="text-orange-100">Potentially life-threatening, requires rapid assessment</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-3xl font-bold">≤10 min</p>
                <p className="text-orange-100 text-sm">Target Wait Time</p>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-4 mt-4">
              <div className="bg-orange-700 rounded p-3">
                <p className="font-semibold mb-2">Examples:</p>
                <ul className="text-sm space-y-1">
                  <li>• Chest pain (possible heart attack)</li>
                  <li>• Severe difficulty breathing</li>
                  <li>• Stroke symptoms (face droop, weakness)</li>
                  <li>• Severe burns (&gt;10% body)</li>
                  <li>• Severe bleeding</li>
                  <li>• Altered mental status</li>
                </ul>
              </div>
              <div className="bg-orange-700 rounded p-3">
                <p className="font-semibold mb-2">Vital Signs:</p>
                <ul className="text-sm space-y-1">
                  <li>• O2 saturation 85-90%</li>
                  <li>• Heart rate &gt;150 or &lt;40</li>
                  <li>• Severe pain (9-10/10)</li>
                  <li>• Temperature &gt;40°C</li>
                </ul>
              </div>
              <div className="bg-orange-700 rounded p-3">
                <p className="font-semibold mb-2">Action:</p>
                <ul className="text-sm space-y-1">
                  <li>• Fast-track to acute area</li>
                  <li>• Continuous monitoring</li>
                  <li>• IV access, ECG, labs</li>
                  <li>• Senior doctor review within 10 min</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Level 3 - Urgent */}
          <div className="bg-amber-500 text-white rounded-lg p-5">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <Timer className="w-7 h-7" />
                <div>
                  <h3 className="text-xl font-bold">LEVEL 3 - URGENT</h3>
                  <p className="text-amber-100">Needs multiple resources, stable but requires attention</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold">≤30 min</p>
                <p className="text-amber-100 text-sm">Target Wait Time</p>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-3 mt-3 text-sm">
              <div className="bg-amber-600 rounded p-3">
                <p className="font-semibold mb-1">Examples:</p>
                <p>Moderate pain, vomiting, moderate bleeding, asthma, fractures</p>
              </div>
              <div className="bg-amber-600 rounded p-3">
                <p className="font-semibold mb-1">Vitals:</p>
                <p>Abnormal but stable. Moderate pain (6-8/10)</p>
              </div>
              <div className="bg-amber-600 rounded p-3">
                <p className="font-semibold mb-1">Action:</p>
                <p>Standard ED bed, multiple tests/imaging expected</p>
              </div>
            </div>
          </div>

          {/* Level 4 - Less Urgent */}
          <div className="bg-yellow-500 text-slate-900 rounded-lg p-5">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <Clock className="w-7 h-7" />
                <div>
                  <h3 className="text-xl font-bold">LEVEL 4 - LESS URGENT</h3>
                  <p className="text-slate-700">One resource needed (1 test/procedure)</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold">≤60 min</p>
                <p className="text-slate-700 text-sm">Target Wait Time</p>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-3 mt-3 text-sm">
              <div className="bg-yellow-600 text-white rounded p-3">
                <p className="font-semibold mb-1">Examples:</p>
                <p>Minor cuts, sprains, UTI, mild pain, rash</p>
              </div>
              <div className="bg-yellow-600 text-white rounded p-3">
                <p className="font-semibold mb-1">Vitals:</p>
                <p>Normal. Mild pain (3-5/10)</p>
              </div>
              <div className="bg-yellow-600 text-white rounded p-3">
                <p className="font-semibold mb-1">Action:</p>
                <p>Fast track area, 1 test (X-ray or labs), then discharge</p>
              </div>
            </div>
          </div>

          {/* Level 5 - Non-Urgent */}
          <div className="bg-green-500 text-slate-900 rounded-lg p-5">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <UserPlus className="w-7 h-7" />
                <div>
                  <h3 className="text-xl font-bold">LEVEL 5 - NON-URGENT</h3>
                  <p className="text-slate-700">No resources needed, could wait for clinic</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold">≤120 min</p>
                <p className="text-slate-700 text-sm">Target Wait Time</p>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-3 mt-3 text-sm">
              <div className="bg-green-600 text-white rounded p-3">
                <p className="font-semibold mb-1">Examples:</p>
                <p>Chronic issues, refill requests, cold symptoms, minor aches</p>
              </div>
              <div className="bg-green-600 text-white rounded p-3">
                <p className="font-semibold mb-1">Vitals:</p>
                <p>All normal. Minimal/no pain</p>
              </div>
              <div className="bg-green-600 text-white rounded p-3">
                <p className="font-semibold mb-1">Action:</p>
                <p>Should be redirected to outpatient clinic if possible</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 bg-blue-50 border border-blue-300 rounded-lg p-4">
          <p className="text-sm text-blue-900">
            <strong>⚠️ Important:</strong> Triage is dynamic. Patients are re-assessed every 15-30 minutes. 
            If condition worsens, they are automatically upgraded. Waiting Level 4 patient who develops 
            chest pain immediately becomes Level 2.
          </p>
        </div>
      </section>

      {/* Perfect Patient Flow */}
      <section className="bg-white rounded-xl border border-slate-200 p-8">
        <div className="flex items-center gap-3 mb-6">
          <Stethoscope className="w-8 h-8 text-purple-600" />
          <h2 className="text-2xl font-bold text-slate-900">Complete ED Patient Flow (Step-by-Step)</h2>
        </div>

        <div className="space-y-6">
          {/* Step 1 */}
          <div className="flex gap-4">
            <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">
              1
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Patient Arrival & Registration</h3>
              <div className="bg-slate-50 rounded-lg p-4">
                <p className="text-sm text-slate-700 mb-3">
                  <strong>Location:</strong> ED Reception Desk
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="font-medium text-sm mb-2">Actions:</p>
                    <ul className="text-xs text-slate-600 space-y-1">
                      <li>• Quick registration (name, national ID, chief complaint)</li>
                      <li>• System searches for existing patient record</li>
                      <li>• If new: fingerprint scan to prevent duplicates</li>
                      <li>• Print triage wristband with barcode</li>
                      <li>• Record arrival timestamp</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-medium text-sm mb-2">Data Captured:</p>
                    <ul className="text-xs text-slate-600 space-y-1">
                      <li>• Arrival time (auto)</li>
                      <li>• Chief complaint (brief: "chest pain", "fever")</li>
                      <li>• Mode of arrival (ambulance/walk-in)</li>
                      <li>• Emergency contact info</li>
                    </ul>
                  </div>
                </div>
                <p className="text-xs text-amber-700 mt-3 bg-amber-50 p-2 rounded">
                  ⏱️ <strong>Time limit:</strong> 2-3 minutes max. Critical patients bypass and go straight to triage nurse.
                </p>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex gap-4">
            <div className="bg-red-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">
              2
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Triage Assessment</h3>
              <div className="bg-slate-50 rounded-lg p-4">
                <p className="text-sm text-slate-700 mb-3">
                  <strong>Location:</strong> Triage Room (private area)
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="font-medium text-sm mb-2">Nurse Actions:</p>
                    <ul className="text-xs text-slate-600 space-y-1">
                      <li>• Scan patient wristband</li>
                      <li>• Measure vital signs (BP, pulse, temp, O2 sat, pain scale)</li>
                      <li>• Brief history (symptoms, duration, medications)</li>
                      <li>• Document allergies and chronic conditions</li>
                      <li>• ESI algorithm guides questions</li>
                      <li>• System auto-calculates ESI level based on inputs</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-medium text-sm mb-2">System Logic:</p>
                    <ul className="text-xs text-slate-600 space-y-1">
                      <li>✅ Vital signs abnormal → Level 1-2</li>
                      <li>✅ Life-threatening symptoms → Level 1-2</li>
                      <li>✅ Needs multiple resources → Level 3</li>
                      <li>✅ Needs 1 resource → Level 4</li>
                      <li>✅ No resources needed → Level 5</li>
                      <li>✅ AI flags high-risk patterns (e.g., cardiac symptoms in diabetic)</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-3 grid md:grid-cols-2 gap-3">
                  <div className="bg-emerald-50 border border-emerald-300 rounded p-2">
                    <p className="text-xs text-emerald-900">
                      <strong>✅ Anti-Corruption:</strong> Nurse CANNOT manually set level without justification. 
                      All overrides logged and reviewed by supervisor.
                    </p>
                  </div>
                  <div className="bg-blue-50 border border-blue-300 rounded p-2">
                    <p className="text-xs text-blue-900">
                      <strong>⏱️ Time limit:</strong> 5 minutes max for initial triage. Level 1 patients assessed in &lt;60 seconds.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex gap-4">
            <div className="bg-purple-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">
              3
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Waiting Area Assignment</h3>
              <div className="bg-slate-50 rounded-lg p-4">
                <p className="text-sm text-slate-700 mb-3">
                  <strong>System automatically assigns patients to appropriate waiting area based on ESI level</strong>
                </p>
                <div className="grid md:grid-cols-3 gap-3">
                  <div className="bg-red-100 border border-red-300 rounded p-3">
                    <p className="font-semibold text-sm text-red-900 mb-2">Level 1-2 → Acute Area</p>
                    <ul className="text-xs text-slate-700 space-y-1">
                      <li>• No waiting</li>
                      <li>• Immediate bed assignment</li>
                      <li>• Continuous monitoring</li>
                      <li>• Resuscitation equipment ready</li>
                    </ul>
                  </div>
                  <div className="bg-yellow-100 border border-yellow-300 rounded p-3">
                    <p className="font-semibold text-sm text-yellow-900 mb-2">Level 3 → Main ED Queue</p>
                    <ul className="text-xs text-slate-700 space-y-1">
                      <li>• Wait for available bed</li>
                      <li>• Monitored waiting area</li>
                      <li>• Chairs with nurse visibility</li>
                      <li>• Re-triage every 30 min</li>
                    </ul>
                  </div>
                  <div className="bg-green-100 border border-green-300 rounded p-3">
                    <p className="font-semibold text-sm text-green-900 mb-2">Level 4-5 → Fast Track</p>
                    <ul className="text-xs text-slate-700 space-y-1">
                      <li>• Separate minor care area</li>
                      <li>• Seen by mid-level provider</li>
                      <li>• Quick evaluation & discharge</li>
                      <li>• Reduces main ED congestion</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-3 bg-slate-100 rounded p-3">
                  <p className="text-xs text-slate-700">
                    <strong>Public Display Board:</strong> Shows queue status (privacy-protected - only queue numbers, no names). 
                    "Queue #47 (Level 3) - Estimated wait: 45 minutes". Families can see progress transparently.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Step 4 */}
          <div className="flex gap-4">
            <div className="bg-cyan-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">
              4
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Monitoring & Re-Triage</h3>
              <div className="bg-slate-50 rounded-lg p-4">
                <p className="text-sm text-slate-700 mb-3">
                  <strong>Continuous monitoring prevents deterioration while waiting</strong>
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="font-medium text-sm mb-2">System Alerts:</p>
                    <ul className="text-xs text-slate-600 space-y-1">
                      <li>🔴 <strong>Critical Alert:</strong> Level 4-5 patient waiting &gt;60 min → nurse checks</li>
                      <li>🟠 <strong>Warning:</strong> Level 3 patient waiting &gt;45 min → re-assess</li>
                      <li>⚠️ <strong>Escalation:</strong> Any patient complaining of new/worse symptoms → immediate re-triage</li>
                      <li>📊 <strong>Dashboard:</strong> Supervisor sees real-time: "12 patients waiting, 3 overdue, 1 critical alert"</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-medium text-sm mb-2">Nurse Actions:</p>
                    <ul className="text-xs text-slate-600 space-y-1">
                      <li>• Periodic visual checks of waiting area</li>
                      <li>• Re-check vitals if patient appears worse</li>
                      <li>• Update triage level if condition changes</li>
                      <li>• Document all re-assessments in system</li>
                      <li>• Escalate concerns to charge nurse</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Step 5 */}
          <div className="flex gap-4">
            <div className="bg-emerald-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">
              5
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Doctor Assessment & Treatment</h3>
              <div className="bg-slate-50 rounded-lg p-4">
                <p className="text-sm text-slate-700 mb-3">
                  <strong>Bed becomes available → System calls next patient by priority</strong>
                </p>
                <div className="space-y-3">
                  <div className="bg-blue-50 border border-blue-300 rounded p-3">
                    <p className="font-semibold text-sm text-blue-900 mb-2">Calling Algorithm:</p>
                    <ul className="text-xs text-slate-700 space-y-1">
                      <li>1. <strong>Priority:</strong> Highest ESI level first (Level 2 before Level 3)</li>
                      <li>2. <strong>Within same level:</strong> Longest wait time first (FIFO)</li>
                      <li>3. <strong>Exception:</strong> If patient upgraded during wait, they jump queue</li>
                      <li>4. <strong>Override:</strong> Doctor can request specific patient (must justify - logged)</li>
                    </ul>
                  </div>
                  <div className="grid md:grid-cols-2 gap-3">
                    <div className="bg-slate-100 rounded p-2">
                      <p className="text-xs text-slate-700">
                        <strong>Doctor sees:</strong> Full triage notes, vital trends, previous ED visits, 
                        allergies, current medications, chronic conditions
                      </p>
                    </div>
                    <div className="bg-slate-100 rounded p-2">
                      <p className="text-xs text-slate-700">
                        <strong>Treatment tracked:</strong> Orders (labs, imaging, consultations), medications 
                        administered, procedures performed - all timestamped
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Step 6 */}
          <div className="flex gap-4">
            <div className="bg-slate-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">
              6
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Disposition & Closure</h3>
              <div className="bg-slate-50 rounded-lg p-4">
                <p className="text-sm text-slate-700 mb-3">
                  <strong>Three possible outcomes</strong>
                </p>
                <div className="grid md:grid-cols-3 gap-3">
                  <div className="bg-emerald-100 border border-emerald-300 rounded p-3">
                    <p className="font-semibold text-sm text-emerald-900 mb-2">✅ Discharge Home</p>
                    <ul className="text-xs text-slate-700 space-y-1">
                      <li>• Diagnosis recorded</li>
                      <li>• Prescriptions issued</li>
                      <li>• Follow-up instructions</li>
                      <li>• ED visit summary printed</li>
                      <li>• Timestamp of departure</li>
                    </ul>
                  </div>
                  <div className="bg-orange-100 border border-orange-300 rounded p-3">
                    <p className="font-semibold text-sm text-orange-900 mb-2">🏥 Admit to Hospital</p>
                    <ul className="text-xs text-slate-700 space-y-1">
                      <li>• Admission orders entered</li>
                      <li>• Bed request to inpatient</li>
                      <li>• Patient moved to ward</li>
                      <li>• ED visit closed</li>
                      <li>• Inpatient record opened</li>
                    </ul>
                  </div>
                  <div className="bg-blue-100 border border-blue-300 rounded p-3">
                    <p className="font-semibold text-sm text-blue-900 mb-2">🚑 Transfer to Another Facility</p>
                    <ul className="text-xs text-slate-700 space-y-1">
                      <li>• Transfer reason documented</li>
                      <li>• Receiving hospital notified</li>
                      <li>• Patient stabilized first</li>
                      <li>• Transfer handoff recorded</li>
                      <li>• Ambulance arranged</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 bg-purple-50 border border-purple-300 rounded-lg p-4">
          <p className="text-sm text-purple-900">
            <strong>📊 Complete Metrics:</strong> System tracks: door-to-triage time, door-to-doctor time, 
            length of stay, left without being seen (LWBS) rate, triage accuracy, wait times by level. 
            Supervisors use this to optimize staffing and identify bottlenecks.
          </p>
        </div>
      </section>

      {/* Anti-Corruption Features */}
      <section className="bg-white rounded-xl border border-slate-200 p-8">
        <div className="flex items-center gap-3 mb-6">
          <Shield className="w-8 h-8 text-red-600" />
          <h2 className="text-2xl font-bold text-slate-900">Anti-Corruption & Accountability</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="bg-red-50 border-l-4 border-red-600 p-4 rounded-lg">
              <h3 className="font-semibold text-red-900 mb-2">🚨 Fraud Detection Rules</h3>
              <ul className="text-sm text-slate-700 space-y-2">
                <li>
                  <strong>Queue Jumping Detection:</strong> If Level 4 patient seen before Level 3 who arrived earlier 
                  → automatic alert to supervisor. Must have documented reason (patient upgraded, specific request).
                </li>
                <li>
                  <strong>VIP Override Tracking:</strong> Any manual priority override generates incident report. 
                  "Dr. Ali moved patient #45 to front. Reason: Family member." Reviewed weekly.
                </li>
                <li>
                  <strong>Pattern Analysis:</strong> AI detects if certain nurses consistently assign lower triage 
                  levels (making their friends wait less). Flags for review.
                </li>
                <li>
                  <strong>Waiting Time Violations:</strong> System alerts if Level 2 patient waiting &gt;15 min. 
                  Charge nurse must document why (e.g., "All beds full, ambulances incoming").
                </li>
              </ul>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded-lg">
              <h3 className="font-semibold text-blue-900 mb-2">📋 Complete Audit Trail</h3>
              <ul className="text-sm text-slate-700 space-y-1">
                <li>• Every patient assessment timestamped</li>
                <li>• All triage level changes logged with reason</li>
                <li>• Vital signs stored (not editable after 5 min)</li>
                <li>• Queue position movements tracked</li>
                <li>• Staff actions: who scanned wristband, who triaged, who treated</li>
                <li>• Supervisor overrides flagged for monthly review</li>
              </ul>
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-emerald-50 border-l-4 border-emerald-600 p-4 rounded-lg">
              <h3 className="font-semibold text-emerald-900 mb-2">✅ Quality Assurance</h3>
              <ul className="text-sm text-slate-700 space-y-2">
                <li>
                  <strong>Triage Accuracy Monitoring:</strong> System compares nurse's triage level with final 
                  diagnosis. If Level 5 patient turns out to have heart attack → triage error flagged for training.
                </li>
                <li>
                  <strong>Inter-Rater Reliability:</strong> Periodically, two nurses independently triage same 
                  patient (training scenario). System ensures they reach same ESI level.
                </li>
                <li>
                  <strong>Outcome Tracking:</strong> Tracks: How many Level 3 patients admitted vs discharged? 
                  Helps validate triage accuracy.
                </li>
              </ul>
            </div>

            <div className="bg-purple-50 border-l-4 border-purple-600 p-4 rounded-lg">
              <h3 className="font-semibold text-purple-900 mb-2">👁️ Real-Time Dashboards</h3>
              <ul className="text-sm text-slate-700 space-y-1">
                <li><strong>Charge Nurse View:</strong> See all waiting patients, ESI levels, wait times, alerts</li>
                <li><strong>Doctor View:</strong> Next patient in queue, their acuity, brief history</li>
                <li><strong>Public Display:</strong> Anonymous queue status (builds trust with families)</li>
                <li><strong>Administrator View:</strong> ED census, bed occupancy, avg wait times, throughput metrics</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Data Model */}
      <section className="bg-white rounded-xl border border-slate-200 p-8">
        <div className="flex items-center gap-3 mb-6">
          <ClipboardList className="w-8 h-8 text-indigo-600" />
          <h2 className="text-2xl font-bold text-slate-900">Database Schema: Triage Module</h2>
        </div>

        <div className="space-y-4">
          <div className="bg-slate-50 rounded-lg p-4 font-mono text-xs">
            <pre className="text-slate-800">
{`CREATE TABLE ed_triage_encounters (
  triage_id UUID PRIMARY KEY,
  patient_id UUID REFERENCES patients(patient_id),
  encounter_id UUID REFERENCES encounters(encounter_id),
  
  arrival_timestamp TIMESTAMP NOT NULL,
  arrival_mode VARCHAR(50), -- walk-in, ambulance, police
  chief_complaint TEXT NOT NULL,
  
  triage_timestamp TIMESTAMP NOT NULL,
  triage_nurse_id UUID REFERENCES staff(staff_id),
  
  esi_level INT NOT NULL CHECK (esi_level BETWEEN 1 AND 5),
  esi_calculated_by_system BOOLEAN DEFAULT TRUE,
  esi_override_reason TEXT, -- if nurse manually changed it
  
  -- Vital Signs at Triage
  blood_pressure_systolic INT,
  blood_pressure_diastolic INT,
  heart_rate INT,
  respiratory_rate INT,
  temperature_celsius DECIMAL(4,2),
  oxygen_saturation INT,
  pain_scale INT CHECK (pain_scale BETWEEN 0 AND 10),
  glasgow_coma_scale INT,
  
  -- Clinical Assessment
  chief_complaint_details TEXT,
  allergies TEXT,
  current_medications TEXT,
  brief_history TEXT,
  pertinent_findings TEXT,
  
  -- Waiting & Treatment
  waiting_area_assigned VARCHAR(50), -- acute, main_ed, fast_track
  bed_assigned VARCHAR(20),
  bed_assignment_timestamp TIMESTAMP,
  doctor_id UUID REFERENCES staff(staff_id),
  doctor_start_timestamp TIMESTAMP,
  
  -- Disposition
  disposition VARCHAR(50), -- discharged, admitted, transferred, LWBS, died
  disposition_timestamp TIMESTAMP,
  disposition_destination TEXT,
  
  -- Re-Triage Events (if upgraded/downgraded while waiting)
  re_triage_count INT DEFAULT 0,
  last_re_triage_timestamp TIMESTAMP,
  
  -- Audit
  created_by UUID REFERENCES staff(staff_id),
  created_at TIMESTAMP DEFAULT NOW(),
  last_modified_by UUID,
  last_modified_at TIMESTAMP,
  
  CONSTRAINT valid_timestamps CHECK (
    triage_timestamp >= arrival_timestamp AND
    (bed_assignment_timestamp IS NULL OR bed_assignment_timestamp >= triage_timestamp) AND
    (disposition_timestamp IS NULL OR disposition_timestamp >= triage_timestamp)
  )
);

CREATE TABLE triage_re_assessments (
  reassessment_id UUID PRIMARY KEY,
  triage_id UUID REFERENCES ed_triage_encounters(triage_id),
  reassessment_timestamp TIMESTAMP NOT NULL,
  reassessed_by UUID REFERENCES staff(staff_id),
  
  previous_esi_level INT,
  new_esi_level INT,
  reason_for_change TEXT NOT NULL,
  
  new_vital_signs JSONB, -- stores updated vitals
  clinical_notes TEXT
);

CREATE TABLE triage_alerts (
  alert_id UUID PRIMARY KEY,
  triage_id UUID REFERENCES ed_triage_encounters(triage_id),
  alert_type VARCHAR(50), -- wait_time_exceeded, deterioration_suspected, queue_jump_detected
  alert_timestamp TIMESTAMP DEFAULT NOW(),
  alert_severity VARCHAR(20), -- warning, critical, urgent
  alert_message TEXT,
  acknowledged_by UUID REFERENCES staff(staff_id),
  acknowledged_at TIMESTAMP,
  resolution_notes TEXT
);

-- Indexes for Performance
CREATE INDEX idx_triage_patient ON ed_triage_encounters(patient_id);
CREATE INDEX idx_triage_esi_level ON ed_triage_encounters(esi_level);
CREATE INDEX idx_triage_waiting ON ed_triage_encounters(disposition) WHERE disposition IS NULL;
CREATE INDEX idx_triage_timestamps ON ed_triage_encounters(arrival_timestamp, triage_timestamp);`}
            </pre>
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="bg-white rounded-xl border border-slate-200 p-8">
        <div className="flex items-center gap-3 mb-6">
          <TrendingUp className="w-8 h-8 text-emerald-600" />
          <h2 className="text-2xl font-bold text-slate-900">Success Metrics & KPIs</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-blue-50 border border-blue-300 rounded-lg p-4">
            <p className="font-semibold text-blue-900 mb-3">Timeliness Metrics</p>
            <ul className="text-sm text-slate-700 space-y-1">
              <li>• Door-to-triage time (target: &lt;10 min)</li>
              <li>• Door-to-doctor time by ESI level</li>
              <li>• Waiting time adherence to targets</li>
              <li>• Length of stay (ED arrival to disposition)</li>
              <li>• Re-triage frequency</li>
            </ul>
          </div>

          <div className="bg-emerald-50 border border-emerald-300 rounded-lg p-4">
            <p className="font-semibold text-emerald-900 mb-3">Quality Metrics</p>
            <ul className="text-sm text-slate-700 space-y-1">
              <li>• Triage accuracy (ESI vs final diagnosis)</li>
              <li>• Left without being seen (LWBS) rate</li>
              <li>• Unexpected returns within 72 hours</li>
              <li>• Mortality/adverse events</li>
              <li>• Patient/family complaints about waiting</li>
            </ul>
          </div>

          <div className="bg-red-50 border border-red-300 rounded-lg p-4">
            <p className="font-semibold text-red-900 mb-3">Integrity Metrics</p>
            <ul className="text-sm text-slate-700 space-y-1">
              <li>• Queue jump incidents</li>
              <li>• Override frequency by nurse</li>
              <li>• Alert acknowledgment times</li>
              <li>• Audit findings from random reviews</li>
              <li>• Pattern anomalies detected</li>
            </ul>
          </div>
        </div>

        <div className="mt-6 bg-gradient-to-r from-emerald-600 to-teal-700 rounded-lg p-6 text-white">
          <h3 className="font-semibold text-lg mb-3">🎯 Expected Impact of Digital Triage System</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <p className="font-medium mb-2">Before (Paper-Based Chaos)</p>
              <ul className="text-sm text-emerald-100 space-y-1">
                <li>• Critical patients sometimes missed</li>
                <li>• Average wait time: 2-4 hours (all patients)</li>
                <li>• No data on queue jumping</li>
                <li>• Families angry, violence common</li>
                <li>• No accountability for errors</li>
              </ul>
            </div>
            <div>
              <p className="font-medium mb-2">After (Digital Avicenna System)</p>
              <ul className="text-sm text-emerald-100 space-y-1">
                <li>✅ Zero Level 1 patients missed</li>
                <li>✅ Level 2 seen within 10 min (90%+)</li>
                <li>✅ Queue jumping reduced by 95%</li>
                <li>✅ Transparent process = less anger</li>
                <li>✅ Complete audit trail for litigation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
