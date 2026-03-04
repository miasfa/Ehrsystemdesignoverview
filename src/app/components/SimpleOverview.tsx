import { 
  Heart, 
  Shield, 
  Users, 
  FileText, 
  Package, 
  Activity,
  CheckCircle,
  AlertCircle,
  Target,
  Workflow,
  Globe,
  Smartphone,
  Building2,
  TrendingUp,
  Clock,
  Lock,
  Eye,
  DollarSign,
  Zap
} from "lucide-react";
import { useTranslation } from "../hooks/useTranslation";
import { useLanguage } from "../contexts/LanguageContext";

export function SimpleOverview() {
  const t = useTranslation();
  const { language } = useLanguage();

  return (
    <div className="max-w-5xl mx-auto space-y-12 pb-16">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white">
        <Heart className="w-12 h-12 mb-4" />
        <h1 className="text-4xl font-bold mb-3">
          {language === 'en' 
            ? 'Understanding Avicenna Digital Hospital System'
            : 'فهم نظام المستشفى الرقمي Avicenna'}
        </h1>
        <p className="text-blue-100 text-lg">
          {language === 'en'
            ? 'A simple explanation of how modern digital health records can transform our hospital'
            : 'شرح بسيط لكيفية تحويل السجلات الصحية الرقمية الحديثة لحضرانا'}
        </p>
      </div>

      {/* The Problem */}
      <section className="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg">
        <h2 className="text-2xl font-bold text-red-900 mb-4 flex items-center gap-2">
          <AlertCircle className="w-6 h-6" />
          {language === 'en' ? 'Current System Challenges' : 'تحديات النظام الحالي'}
        </h2>
        <div className="space-y-3 text-red-900">
          {language === 'en' ? (
            <>
              <p><strong>Paper-based inefficiencies:</strong> Patient files are vulnerable to loss, duplication, or damage. Healthcare providers cannot access critical medical history when needed.</p>
              <p><strong>Limited supply chain visibility:</strong> Pharmaceuticals and medical supplies lack proper tracking systems, resulting in resource wastage and inventory discrepancies.</p>
              <p><strong>Insufficient oversight mechanisms:</strong> Manual record-keeping systems create opportunities for unauthorized transactions and billing irregularities.</p>
              <p><strong>Fragmented care coordination:</strong> When patients visit multiple facilities, healthcare providers lack access to complete medical histories, leading to redundant diagnostic procedures.</p>
              <p><strong>Limited accountability:</strong> Current systems make it difficult to establish clear audit trails for clinical and administrative actions.</p>
            </>
          ) : (
            <>
              <p><strong>عدم كفاءة السجلات الورقية:</strong> ملفات المرضى عرضة للضياع أو التكرار أو التلف. مقدمو الرعاية الصحية لا يمكنهم الوصول إلى التاريخ الطبي الحرج عند الحاجة.</p>
              <p><strong>محدودية رؤية سلسلة التوريد:</strong> الأدوية والإمدادات الطبية تفتقر إلى أنظمة تتبع مناسبة، مما يؤدي إلى هدر الموارد وتناقضات المخزون.</p>
              <p><strong>آليات إشراف غير كافية:</strong> أنظمة حفظ السجلات اليدوية تخلق فرصًا للمعاملات غير المصرح بها ومخالفات الفواتير.</p>
              <p><strong>تنسيق رعاية مجزأ:</strong> عندما يزور المرضى منشآت متعددة، يفتقر مقدمو الرعاية الصحية إلى الوصول إلى السجلات الطبية الكاملة، مما يؤدي إلى إجراءات تشخيصية زائدة.</p>
              <p><strong>مساءلة محدودة:</strong> الأنظمة الحالية تجعل من الصعب إنشاء مسارات تدقيق واضحة للإجراءات السريرية والإدارية.</p>
            </>
          )}
        </div>
      </section>

      {/* The Solution */}
      <section>
        <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
          <Target className="w-6 h-6 text-blue-600" />
          {language === 'en' ? 'Our Solution: Digital Health Records' : 'حلنا: السجلات الصحية الرقمية'}
        </h2>
        <p className="text-slate-700 text-lg leading-relaxed">
          {language === 'en'
            ? 'We\'re building a modern computer system that replaces paper files with digital records. Every patient gets a unique ID that follows them everywhere. Every doctor, nurse, and pharmacist logs what they do. Every pill, bandage, and medical supply is tracked from delivery to use.'
            : 'نحن نبني نظام كمبيوتر حديث يستبدل الملفات الورقية بسجلات رقمية. كل مريض يحصل على معرف فريد يتبعه في كل مكان. كل طبيب وممرض وصيدلي يسجل ما يفعله. كل حبة دواء وضمادة ومستلزم طبي يتم تتبعه من التسليم إلى الاستخدام.'}
        </p>
      </section>

      {/* Core Principles in Simple Terms */}
      <section className="bg-white border border-slate-200 rounded-xl p-6">
        <h2 className="text-2xl font-bold text-slate-900 mb-6">
          {language === 'en' ? 'What Makes This System Special' : 'ما يجعل هذا النظام مميزًا'}
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {/* Works Offline */}
          <div className="flex gap-4">
            <div className="bg-blue-100 p-3 rounded-lg h-fit">
              <Zap className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 mb-2">
                {language === 'en' ? 'Works Without Internet' : 'يعمل بدون إنترنت'}
              </h3>
              <p className="text-sm text-slate-600">
                {language === 'en'
                  ? 'Many clinics have poor internet. This system works offline and syncs data when connection is available.'
                  : 'العديد من العيادات لديها إنترنت ضعيف. هذا النظام يعمل دون اتصال ويزامن البيانات عندما يتوفر الاتصال.'}
              </p>
            </div>
          </div>

          {/* Complete Tracking */}
          <div className="flex gap-4">
            <div className="bg-emerald-100 p-3 rounded-lg h-fit">
              <Eye className="w-6 h-6 text-emerald-600" />
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 mb-2">
                {language === 'en' ? 'Everything is Tracked' : 'كل شيء يتم تتبعه'}
              </h3>
              <p className="text-sm text-slate-600">
                {language === 'en'
                  ? 'Every action is recorded with who did it, when, and why. Nobody can delete or hide records.'
                  : 'كل إجراء يتم تسجيله مع من فعله ومتى ولماذا. لا أحد يمكنه حذف أو إخفاء السجلات.'}
              </p>
            </div>
          </div>

          {/* Prevents Theft */}
          <div className="flex gap-4">
            <div className="bg-red-100 p-3 rounded-lg h-fit">
              <Shield className="w-6 h-6 text-red-600" />
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 mb-2">
                {language === 'en' ? 'Prevents Theft & Fraud' : 'يمنع السرقة والاحتيال'}
              </h3>
              <p className="text-sm text-slate-600">
                {language === 'en'
                  ? 'Medicines can\'t disappear mysteriously. The system alerts supervisors to suspicious patterns automatically.'
                  : 'الأدوية لا يمكن أن تختفي بشكل غامض. النظام ينبه المشرفين إلى الأنماط المشبوهة تلقائيًا.'}
              </p>
            </div>
          </div>

          {/* Easy to Use */}
          <div className="flex gap-4">
            <div className="bg-purple-100 p-3 rounded-lg h-fit">
              <Users className="w-6 h-6 text-purple-600" />
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 mb-2">
                {language === 'en' ? 'Simple for All Staff' : 'بسيط لجميع الموظفين'}
              </h3>
              <p className="text-sm text-slate-600">
                {language === 'en'
                  ? 'Designed for nurses and staff with basic computer skills. No complex training required.'
                  : 'مصمم للممرضات والموظفين ذوي المهارات الأساسية في الكمبيوتر. لا يتطلب تدريبًا معقدًا.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works - Step by Step */}
      <section>
        <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
          <Workflow className="w-6 h-6 text-blue-600" />
          {language === 'en' ? 'How It Works in Real Life' : 'كيف يعمل في الحياة الواقعية'}
        </h2>
        
        <div className="space-y-6">
          {/* Step 1 */}
          <div className="flex gap-4 bg-slate-50 p-6 rounded-lg">
            <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 font-bold">
              1
            </div>
            <div>
              <h3 className="font-semibold text-lg text-slate-900 mb-2">
                {language === 'en' ? 'Patient Arrives at Hospital' : 'المريض يصل إلى المستشفى'}
              </h3>
              <p className="text-slate-600">
                {language === 'en'
                  ? 'Reception checks if the patient already exists in the system. If not, they register them with fingerprint scan. The system prevents duplicate records for the same person.'
                  : 'الاستقبال يتحقق إذا كان المريض موجودًا بالفعل في النظام. إذا لم يكن كذلك، يسجلونه ببصمة الإصبع. النظام يمنع السجلات المكررة لنفس الشخص.'}
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex gap-4 bg-slate-50 p-6 rounded-lg">
            <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 font-bold">
              2
            </div>
            <div>
              <h3 className="font-semibold text-lg text-slate-900 mb-2">
                {language === 'en' ? 'Doctor Sees Patient' : 'الطبيب يفحص المريض'}
              </h3>
              <p className="text-slate-600">
                {language === 'en'
                  ? 'Doctor opens the patient\'s file and sees complete medical history - previous visits, allergies, medications. After examination, doctor enters diagnosis and orders (lab tests, X-rays, prescriptions).'
                  : 'الطبيب يفتح ملف المريض ويرى التاريخ الطبي الكامل - الزيارات السابقة، الحساسية، الأدوية. بعد الفحص، الطبيب يدخل التشخيص والطلبات (فحوصات المختبر، الأشعة السينية، الوصفات الطبية).'}
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex gap-4 bg-slate-50 p-6 rounded-lg">
            <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 font-bold">
              3
            </div>
            <div>
              <h3 className="font-semibold text-lg text-slate-900 mb-2">
                {language === 'en' ? 'Pharmacy Dispenses Medicine' : 'الصيدلية توزع الدواء'}
              </h3>
              <p className="text-slate-600">
                {language === 'en'
                  ? 'Pharmacist sees the prescription in the system. They scan the medicine batch number before giving it to patient. System records exactly which pills went to which patient, preventing theft.'
                  : 'الصيدلي يرى الوصفة الطبية في النظام. يمسح رقم دفعة الدواء قبل إعطائه للمريض. النظام يسجل بالضبط أي حبوب ذهبت إلى أي مريض، مما يمنع السرقة.'}
              </p>
            </div>
          </div>

          {/* Step 4 */}
          <div className="flex gap-4 bg-slate-50 p-6 rounded-lg">
            <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 font-bold">
              4
            </div>
            <div>
              <h3 className="font-semibold text-lg text-slate-900 mb-2">
                {language === 'en' ? 'Lab Processes Tests' : 'المختبر يعالج الفحوصات'}
              </h3>
              <p className="text-slate-600">
                {language === 'en'
                  ? 'Lab technician sees the test orders. They process samples and enter results directly into the system. Doctor gets notified immediately when results are ready.'
                  : 'فني المختبر يرى طلبات الفحوصات. يعالج العينات ويدخل النتائج مباشرة في النظام. الطبيب يتلقى إشعارًا فوريًا عندما تكن النتائج جاهزة.'}
              </p>
            </div>
          </div>

          {/* Step 5 */}
          <div className="flex gap-4 bg-slate-50 p-6 rounded-lg">
            <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 font-bold">
              5
            </div>
            <div>
              <h3 className="font-semibold text-lg text-slate-900 mb-2">
                {language === 'en' ? 'System Watches for Problems' : 'النظام يراقب المشاكل'}
              </h3>
              <p className="text-slate-600">
                {language === 'en'
                  ? 'Behind the scenes, the system constantly monitors for suspicious activity: same person registered twice, medicine dispensed without prescription, unusual patterns. Supervisors get automatic alerts.'
                  : 'خلف الكواليس، النظام يراقب باستمرار النشاط المشبوه: نفس الشخص مسجل مرتين، الدواء يوزع بدون وصفة طبية، أنماط غير عادية. المشرفون يحصلون على تنبيهات تلقائية.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Gets Tracked */}
      <section className="bg-blue-50 rounded-xl p-6">
        <h2 className="text-2xl font-bold text-slate-900 mb-6">
          {language === 'en' ? 'Everything That Gets Tracked' : 'كل ما يتم تتبعه'}
        </h2>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-lg">
            <Users className="w-8 h-8 text-blue-600 mb-2" />
            <h4 className="font-semibold mb-1">
              {language === 'en' ? 'Patient Records' : 'سجلات المرضى'}
            </h4>
            <ul className="text-sm text-slate-600 space-y-1">
              <li>• {language === 'en' ? 'Personal information' : 'المعلومات الشخصية'}</li>
              <li>• {language === 'en' ? 'Medical history' : 'التاريخ الطبي'}</li>
              <li>• {language === 'en' ? 'Allergies & warnings' : 'الحساسية والتحذيرات'}</li>
              <li>• {language === 'en' ? 'Every visit' : 'كل زيارة'}</li>
            </ul>
          </div>

          <div className="bg-white p-4 rounded-lg">
            <Package className="w-8 h-8 text-emerald-600 mb-2" />
            <h4 className="font-semibold mb-1">
              {language === 'en' ? 'Medical Supplies' : 'المستلزمات الطبية'}
            </h4>
            <ul className="text-sm text-slate-600 space-y-1">
              <li>• {language === 'en' ? 'Every medicine bottle' : 'كل زجاجة دواء'}</li>
              <li>• {language === 'en' ? 'Surgical equipment' : 'المعدات الجراحية'}</li>
              <li>• {language === 'en' ? 'Bandages & supplies' : 'الضمادات والمستلزمات'}</li>
              <li>• {language === 'en' ? 'Who used what, when' : 'من استخدم ماذا ومتى'}</li>
            </ul>
          </div>

          <div className="bg-white p-4 rounded-lg">
            <Activity className="w-8 h-8 text-purple-600 mb-2" />
            <h4 className="font-semibold mb-1">
              {language === 'en' ? 'Staff Actions' : 'إجراءات الموظفين'}
            </h4>
            <ul className="text-sm text-slate-600 space-y-1">
              <li>• {language === 'en' ? 'Who logged in' : 'من قام بتسجيل الدخول'}</li>
              <li>• {language === 'en' ? 'What they did' : 'ما فعلوه'}</li>
              <li>• {language === 'en' ? 'Time & date' : 'الوقت والتاريخ'}</li>
              <li>• {language === 'en' ? 'Cannot be deleted' : 'لا يمكن حذفها'}</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section>
        <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
          <TrendingUp className="w-6 h-6 text-emerald-600" />
          {language === 'en' ? 'Real Benefits for Everyone' : 'فوائد حقيقية للجميع'}
        </h2>
        
        <div className="space-y-4">
          <div className="flex gap-3 items-start">
            <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-slate-900">
                {language === 'en' ? 'For Patients:' : 'للمرضى:'}
              </p>
              <p className="text-slate-600">
                {language === 'en'
                  ? 'Medical history follows them everywhere. No need to remember medication names. Less repeated tests. Faster service.'
                  : 'التاريخ الطبي يتبعهم في كل مكان. لا حاجة لتذكر أسماء الأدوية. فحوصات متكررة أقل. خدمة أسرع.'}
              </p>
            </div>
          </div>

          <div className="flex gap-3 items-start">
            <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-slate-900">
                {language === 'en' ? 'For Doctors & Nurses:' : 'للأطباء والممرضات:'}
              </p>
              <p className="text-slate-600">
                {language === 'en'
                  ? 'Complete patient information instantly available. Less paperwork. Avoid dangerous drug interactions. Make better decisions faster.'
                  : 'معلومات المريض الكاملة متاحة على الفور. أقل أعمال ورقية. تجنب التفاعلات الدوائية الخطيرة. اتخاذ قرارات أفضل بشكل أسرع.'}
              </p>
            </div>
          </div>

          <div className="flex gap-3 items-start">
            <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-slate-900">
                {language === 'en' ? 'For Hospital Administrators:' : 'لمديري المستشفيات:'}
              </p>
              <p className="text-slate-600">
                {language === 'en'
                  ? 'Know exactly where resources go. Spot theft immediately. Better planning. Proof of compliance for auditors.'
                  : 'معرفة بالضبط أين تذهب الموارد. اكتشاف السرقة على الفور. تخطيط أفضل. دليل الامتثال للمدققين.'}
              </p>
            </div>
          </div>

          <div className="flex gap-3 items-start">
            <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-slate-900">
                {language === 'en' ? 'For Ministry of Health:' : 'لوزارة الصحة:'}
              </p>
              <p className="text-slate-600">
                {language === 'en'
                  ? 'Real-time data on disease outbreaks. Track health trends nationally. Ensure quality standards. Stop corruption at the source.'
                  : 'بيانات فورية عن تفشي الأمراض. تتبع الاتجاهات الصحية وطنيًا. ضمان معايير الجودة. وقف الفساد من المصدر.'}
              </p>
            </div>
          </div>

          <div className="flex gap-3 items-start">
            <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-slate-900">
                {language === 'en' ? 'For Taxpayers:' : 'لدافعي الضرائب:'}
              </p>
              <p className="text-slate-600">
                {language === 'en'
                  ? 'Public money is protected. Less waste of expensive medicines. Better value from healthcare budget. Transparent spending.'
                  : 'الأموال العامة محمية. هدر أقل من الأدوية الباهظة الثمن. قيمة أفضل من ميزانية الرعاية الصحية. إنفاق شفاف.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation */}
      <section className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-lg">
        <h2 className="text-2xl font-bold text-amber-900 mb-4 flex items-center gap-2">
          <Clock className="w-6 h-6" />
          {language === 'en' ? 'Implementation Timeline' : 'الجدول الزمني للتنفيذ'}
        </h2>
        <div className="space-y-4 text-amber-900">
          {language === 'en' ? (
            <>
              <div className="bg-white rounded-lg p-4">
                <p className="font-semibold text-lg mb-2">🏥 Phase 1 (Months 1-4): Single Hospital Pilot</p>
                <p className="text-sm mb-2"><strong>Goal:</strong> Prove the system works in real-world conditions</p>
                <ul className="text-sm space-y-1 ml-4">
                  <li>• Install hardware (computers, fingerprint scanners, barcode readers)</li>
                  <li>• Train 50-100 staff members (doctors, nurses, pharmacists, clerks)</li>
                  <li>• Start with outpatient clinic and pharmacy only</li>
                  <li>• Run parallel with paper for first month</li>
                  <li>• Identify and fix issues quickly</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-4">
                <p className="font-semibold text-lg mb-2">🏥 Phase 2 (Months 5-8): Full Hospital Deployment</p>
                <p className="text-sm mb-2"><strong>Goal:</strong> Expand to all departments in pilot hospital</p>
                <ul className="text-sm space-y-1 ml-4">
                  <li>• Add emergency department, labs, and operating rooms</li>
                  <li>• Implement inventory and billing modules</li>
                  <li>• Turn on fraud detection and audit alerts</li>
                  <li>• Measure success: time saved, theft reduced, errors prevented</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-4">
                <p className="font-semibold text-lg mb-2">🌍 Phase 3 (Months 9-24): Regional Expansion</p>
                <p className="text-sm mb-2"><strong>Goal:</strong> Scale to other hospitals using lessons learned</p>
                <ul className="text-sm space-y-1 ml-4">
                  <li>• Deploy to 5-10 additional hospitals in same region</li>
                  <li>• Connect hospitals so patient data follows them</li>
                  <li>• Regional health data for disease tracking</li>
                  <li>• Eventually expand nationally once proven</li>
                </ul>
              </div>
            </>
          ) : (
            <>
              <div className="bg-white rounded-lg p-4">
                <p className="font-semibold text-lg mb-2">🏥 المرحلة 1 (الأشهر 1-4): تجربة مستشفى واحد</p>
                <p className="text-sm mb-2"><strong>الهدف:</strong> إثبات أن النظام يعمل في ظروف العالم الحقيقي</p>
                <ul className="text-sm space-y-1 ml-4">
                  <li>• تثبيت الأجهزة (الحواسيب، ماسحات البصمات، قارئات الباركود)</li>
                  <li>• تدريب 50-100 موظف (أطباء، ممرضات، صيادلة، كتبة)</li>
                  <li>• البدء بالعيادة الخارجية والصيدلية فقط</li>
                  <li>• التشغيل بالتوازي مع الورق للشهر الأول</li>
                  <li>• تحديد المشاكل وإصلاحها بسرعة</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-4">
                <p className="font-semibold text-lg mb-2">🏥 المرحلة 2 (الأشهر 5-8): النشر الكامل للمستشفى</p>
                <p className="text-sm mb-2"><strong>الهدف:</strong> التوسع لجميع الأقسام في المستشفى التجريبي</p>
                <ul className="text-sm space-y-1 ml-4">
                  <li>• إضافة قسم الطوارئ والمختبرات وغرف العمليات</li>
                  <li>• تنفيذ وحدات المخزون والفواتير</li>
                  <li>• تشغيل كشف الاحتيال وتنبيهات التدقيق</li>
                  <li>• قياس النجاح: الوقت الموفر، السرقة المخفضة، الأخطاء المنع</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-4">
                <p className="font-semibold text-lg mb-2">🌍 المرحلة 3 (الأشهر 9-24): التوسع الإقليمي</p>
                <p className="text-sm mb-2"><strong>الهدف:</strong> التوسع لمستشفيات أخرى باستخدام الدروس المستفادة</p>
                <ul className="text-sm space-y-1 ml-4">
                  <li>• النشر ل5-10 مستشفيات إضافية في نفس المنطقة</li>
                  <li>• ربط المستشفيات بحيث تتبع بيانات المريض</li>
                  <li>• بيانات صحية إقليمية لتتبع الأمراض</li>
                  <li>• التوسع الوطني في النهاية بمجرد الإثبات</li>
                </ul>
              </div>
            </>
          )}
        </div>
        <div className="mt-4 bg-blue-100 border border-blue-300 rounded-lg p-4">
          <p className="text-sm text-blue-900">
            <strong>{language === 'en' ? '💡 Smart Approach:' : '💡 نهج ذكي:'}</strong>
            {' '}
            {language === 'en'
              ? 'Start small with ONE hospital. Learn what works. Fix what doesn\'t. Then scale confidently to other facilities.'
              : 'ابدأ صغيرًا بمستشفى واحد. تعلم ما يعمل. أصلح ما لا يعمل. ثم توسع بثقة للمرافق الأخرى.'}
          </p>
        </div>
      </section>

      {/* Cost Savings */}
      <section className="bg-emerald-50 rounded-xl p-6">
        <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
          <DollarSign className="w-6 h-6 text-emerald-600" />
          {language === 'en' ? 'Will This Save Money?' : 'هل سيوفر هذا المال؟'}
        </h2>
        <p className="text-slate-700 mb-4">
          {language === 'en' 
            ? 'Yes! Here\'s how this system pays for itself:'
            : 'نعم! إليك كيف يدفع هذا النظام تكلفته:'}
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-lg">
            <p className="font-semibold text-slate-900 mb-2">
              {language === 'en' ? '🔒 Stop Medicine Theft' : '🔒 وقف سرقة الأدوية'}
            </p>
            <p className="text-sm text-slate-600">
              {language === 'en'
                ? 'Studies show 10-30% of medicines disappear in systems without tracking. This alone can save millions.'
                : 'الدراسات تظهر أن 10-30٪ من الأدوية تختفي في الأنظمة بدون تتبع. هذا وحده يمكن أن يوفر الملايين.'}
            </p>
          </div>

          <div className="bg-white p-4 rounded-lg">
            <p className="font-semibold text-slate-900 mb-2">
              {language === 'en' ? '📋 Reduce Duplicate Tests' : '📋 تقليل الفحوصات المكررة'}
            </p>
            <p className="text-sm text-slate-600">
              {language === 'en'
                ? 'Patients won\'t need the same X-ray or blood test repeated at every hospital visit.'
                : 'المرضى لن يحتاجوا إلى نفس الأشعة السينية أو فحص الدم المتكرر في كل زيارة للمستشفى.'}
            </p>
          </div>

          <div className="bg-white p-4 rounded-lg">
            <p className="font-semibold text-slate-900 mb-2">
              {language === 'en' ? '⚡ Faster Service' : '⚡ خدمة أسرع'}
            </p>
            <p className="text-sm text-slate-600">
              {language === 'en'
                ? 'No time wasted searching for paper files. See more patients per day with same staff.'
                : 'لا وقت مهدر في البحث عن الملفات الورقية. رؤية المزيد من المرضى يوميًا بنفس الموظفين.'}
            </p>
          </div>

          <div className="bg-white p-4 rounded-lg">
            <p className="font-semibold text-slate-900 mb-2">
              {language === 'en' ? '🎯 Better Inventory Control' : '🎯 تحكم أفضل في المخزون'}
            </p>
            <p className="text-sm text-slate-600">
              {language === 'en'
                ? 'Know exactly what supplies you have. Order only what\'s needed. Less expired medicine waste.'
                : 'اعرف بالضبط ما لديك من مستلزمات. اطلب فقط ما هو مطلوب. هدر أقل من الأدوية منتهية الصلاحية.'}
            </p>
          </div>
        </div>
      </section>

      {/* Security & Privacy */}
      <section>
        <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
          <Lock className="w-6 h-6 text-blue-600" />
          {language === 'en' ? 'Is Patient Information Safe?' : 'هل معلومات المريض آمنة؟'}
        </h2>
        <div className="bg-blue-50 p-6 rounded-lg space-y-3">
          {language === 'en' ? (
            <>
              <p className="text-slate-700">
                <strong>Yes. Patient privacy is the top priority.</strong> Here's how we protect it:
              </p>
              <ul className="space-y-2 text-slate-700">
                <li>• <strong>Encrypted data:</strong> Medical records are scrambled so hackers can't read them</li>
                <li>• <strong>Role-based access:</strong> Receptionists can't see medical details. Pharmacists can't see billing. Everyone sees only what they need.</li>
                <li>• <strong>Audit trail:</strong> Every time someone opens a patient file, it's logged. If someone looks at files they shouldn't, we catch them.</li>
                <li>• <strong>Secure login:</strong> Each staff member has unique login. Can't share passwords. Automatic logout after inactivity.</li>
                <li>• <strong>No external access:</strong> Outside internet cannot access medical records. System is isolated.</li>
              </ul>
            </>
          ) : (
            <>
              <p className="text-slate-700">
                <strong>نعم. خصوصية المريض هي الأولوية القصوى.</strong> إليك كيف نحميها:
              </p>
              <ul className="space-y-2 text-slate-700">
                <li>• <strong>بيانات مشفرة:</strong> السجلات الطبية مشفرة حتى لا يستطيع المتسللون قراءتها</li>
                <li>• <strong>وصول قائم على الأدوار:</strong> موظفو الاستقبال لا يمكنهم رؤية التفاصيل الطبية. الصيادلة لا يمكنهم رؤية الفواتير. الجميع يرى فقط ما يحتاجونه.</li>
                <li>• <strong>مسار التدقيق:</strong> كل مرة يفتح شخص ما ملف مريض، يتم تسجيله. إذا نظر شخص ما إلى ملفات لا ينبغي له، نمسك به.</li>
                <li>• <strong>تسجيل دخول آمن:</strong> كل موظف لديه تسجيل دخول فريد. لا يمكن مشاركة كلمات المرور. تسجيل خروج تلقائي بعد عدم النشاط.</li>
                <li>• <strong>لا وصول خارجي:</strong> الإنترنت الخارجي لا يمكنه الوصول إلى السجلات الطية. النظام معزول.</li>
              </ul>
            </>
          )}
        </div>
      </section>

      {/* Common Questions */}
      <section>
        <h2 className="text-2xl font-bold text-slate-900 mb-6">
          {language === 'en' ? 'Common Questions' : 'الأسئلة الشائعة'}
        </h2>
        <div className="space-y-4">
          <details className="bg-slate-50 p-4 rounded-lg">
            <summary className="font-semibold cursor-pointer text-slate-900">
              {language === 'en' 
                ? 'What if staff don\'t know how to use computers?' 
                : 'ماذا لو كان الموظفون لا يعرفون كيفية استخدام الكمبيوتر؟'}
            </summary>
            <p className="mt-3 text-slate-600">
              {language === 'en'
                ? 'The system is designed to be very simple - like using a smartphone. We provide training for all staff. Most people learn the basics in 1-2 days. The interface uses large buttons, clear icons, and minimal text.'
                : 'النظام مصمم ليكون بسيطًا جدًا - مثل استخدام الهاتف الذكي. نحن نوفر التدريب لجميع الموظفين. معظم الناس يتعلمون الأساسيات في يوم أو يومين. الواجهة تستخدم أزرارًا كبيرة ورموزًا واضحة ونصًا بسيطًا.'}
            </p>
          </details>

          <details className="bg-slate-50 p-4 rounded-lg">
            <summary className="font-semibold cursor-pointer text-slate-900">
              {language === 'en' 
                ? 'What happens if internet goes down?' 
                : 'ماذا يحدث إذا انقطع الإنترنت؟'}
            </summary>
            <p className="mt-3 text-slate-600">
              {language === 'en'
                ? 'The system works completely offline. Each hospital/clinic has local copies of all data. When internet returns, the system automatically syncs new data. Healthcare services never stop.'
                : 'النظام يعمل تمامًا دون اتصال. كل مستشفى/عيادة لديها نسخ محلية من جميع البيانات. عندما يعود الإنترنت، النظام يزامن البيانات الجديدة تلقائيًا. الخدمات الصحية لا تتوقف أبدًا.'}
            </p>
          </details>

          <details className="bg-slate-50 p-4 rounded-lg">
            <summary className="font-semibold cursor-pointer text-slate-900">
              {language === 'en' 
                ? 'How much does this cost?' 
                : 'كم تكلفة هذا؟'}
            </summary>
            <p className="mt-3 text-slate-600">
              {language === 'en'
                ? 'Initial investment includes software, computers, scanners, and training. However, the system saves far more money than it costs by preventing theft and waste. Many governments recover the investment within 2-3 years just from reduced medicine theft alone.'
                : 'الاستثمار الأولي يشمل البرامج والحواسيب والماسحات الضوئية والتدريب. ومع ذلك، النظام يوفر أموالًا أكثر بكثير مما يكلفه بمنع السرقة والهدر. العديد من الحكومات تسترد الاستثمار في غضون 2-3 سنوات فقط من الحد من سرقة الأدوية.'}
            </p>
          </details>

          <details className="bg-slate-50 p-4 rounded-lg">
            <summary className="font-semibold cursor-pointer text-slate-900">
              {language === 'en' 
                ? 'Can the system handle emergency situations?' 
                : 'هل يمكن للنظام التعامل مع حالات الطوارئ؟'}
            </summary>
            <p className="mt-3 text-slate-600">
              {language === 'en'
                ? 'Yes! Emergency mode allows fast access to critical information. Staff can quickly see allergies, current medications, and emergency contacts. The system never slows down emergency care.'
                : 'نعم! وضع الطوارئ يسمح بالوصول السريع إلى المعلومات الحرجة. الموظفون يمكنهم رؤية الحساسية والأدوية الحالية وجهات الاتصال للطوارئ بسرعة. النظام لا يبطئ أبدًا رعاية الطوارئ.'}
            </p>
          </details>
        </div>
      </section>

      {/* Conclusion */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white">
        <h2 className="text-2xl font-bold mb-4">
          {language === 'en' ? 'The Bottom Line' : 'الخلاصة'}
        </h2>
        <p className="text-lg text-blue-100">
          {language === 'en'
            ? 'This system replaces chaos with order, theft with accountability, and guesswork with data. It protects patients, supports healthcare workers, and ensures every dollar spent on healthcare actually helps people. This is not just technology - it\'s a fundamental improvement in how we care for our citizens.'
            : 'هذا النظام يستبدل الفوضى بالنظام، والسرقة بالمساءلة، والتخمين بالبيانات. يحمي المرضى، ويدعم العاملين في الرعاية الصحية، ويضمن أن كل دولار يُنفق على الرعاية الصحية يساعد الناس فعليًا. هذا ليس مجرد تكنولوجيا - إنه تحسين أساسي في كيفية رعايتنا لمواطنينا.'}
        </p>
      </section>
    </div>
  );
}