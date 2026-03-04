import { Link } from "react-router";
import {
  Activity,
  Database,
  Shield,
  Layers,
  Pill,
  Stethoscope,
  User,
  FileText,
  ClipboardList,
  TestTube,
  Package,
  Eye,
  Server,
  Code,
  Layout,
  Map,
  AlertTriangle,
  CheckCircle,
  Target,
  Play,
} from "lucide-react";
import { useTranslation } from "../hooks/useTranslation";
import { useLanguage } from "../contexts/LanguageContext";

export function Dashboard() {
  const t = useTranslation();
  const { language } = useLanguage();

  const coreModules = [
    {
      title: t('module.patientIdentity'),
      href: "/module-patient-identity",
      icon: User,
      description: t('module.patientIdentityDesc'),
      priority: t('common.critical'),
    },
    {
      title: language === 'en' ? 'Emergency Triage' : 'تصنيف الطوارئ',
      href: "/module-triage",
      icon: AlertTriangle,
      description: language === 'en' ? 'Patient prioritization, ESI scoring, queue management' : 'تحديد أولويات المرضى، تسجيل ESI، إدارة قوائم الانتظار',
      priority: t('common.critical'),
    },
    {
      title: t('module.clinicalDoc'),
      href: "/module-clinical-doc",
      icon: FileText,
      description: t('module.clinicalDocDesc'),
      priority: t('common.critical'),
    },
    {
      title: t('module.orders'),
      href: "/module-orders",
      icon: ClipboardList,
      description: t('module.ordersDesc'),
      priority: t('common.high'),
    },
    {
      title: t('module.pharmacy'),
      href: "/module-pharmacy",
      icon: Pill,
      description: t('module.pharmacyDesc'),
      priority: t('common.critical'),
    },
    {
      title: t('module.operatingRoom'),
      href: "/module-operating-room",
      icon: Stethoscope,
      description: t('module.operatingRoomDesc'),
      priority: t('common.critical'),
    },
    {
      title: t('module.lab'),
      href: "/module-lab",
      icon: TestTube,
      description: t('module.labDesc'),
      priority: t('common.high'),
    },
    {
      title: t('module.inventory'),
      href: "/module-inventory",
      icon: Package,
      description: t('module.inventoryDesc'),
      priority: t('common.high'),
    },
    {
      title: t('module.audit'),
      href: "/module-audit",
      icon: Eye,
      description: t('module.auditDesc'),
      priority: t('common.critical'),
    },
  ];

  const technicalDocs = [
    {
      title: t('tech.architecture'),
      href: "/architecture",
      icon: Layers,
      description: t('tech.architectureDesc'),
    },
    {
      title: t('tech.database'),
      href: "/database",
      icon: Database,
      description: t('tech.databaseDesc'),
    },
    {
      title: t('tech.security'),
      href: "/security",
      icon: Shield,
      description: t('tech.securityDesc'),
    },
    {
      title: t('tech.deployment'),
      href: "/deployment",
      icon: Server,
      description: t('tech.deploymentDesc'),
    },
    {
      title: t('tech.techStack'),
      href: "/tech-stack",
      icon: Code,
      description: t('tech.techStackDesc'),
    },
  ];

  return (
    <div className="max-w-7xl mx-auto space-y-8">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white">
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-3">
              {t('dashboard.title')}
            </h1>
            <p className="text-blue-100 text-lg mb-6 max-w-3xl">
              {t('dashboard.subtitle')}
            </p>
            <div className="flex gap-4">
              <Link
                to="/getting-started"
                className="bg-white text-blue-700 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors flex items-center gap-2 ring-2 ring-white/50"
              >
                <Play className="w-5 h-5" />
                {language === 'en' ? '🎓 Getting Started Guide' : '🎓 دليل البدء'}
              </Link>
              <Link
                to="/simple-overview"
                className="bg-white text-blue-700 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors flex items-center gap-2"
              >
                <FileText className="w-5 h-5" />
                {language === 'en' ? 'Simple Explanation' : 'شرح مبسط'}
              </Link>
              <Link
                to="/hospital-box"
                className="bg-emerald-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-emerald-600 transition-colors flex items-center gap-2"
              >
                <Activity className="w-5 h-5" />
                {language === 'en' ? '🚀 Live Working System' : '🚀 نظام عامل حي'}
              </Link>
              <Link
                to="/strategy-planning"
                className="bg-emerald-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-emerald-400 transition-colors flex items-center gap-2"
              >
                <Target className="w-5 h-5" />
                {language === 'en' ? 'Strategy & Planning' : 'الاستراتيجية'}
              </Link>
              <Link
                to="/architecture"
                className="bg-blue-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-400 transition-colors"
              >
                {t('dashboard.viewArchitecture')}
              </Link>
              <Link
                to="/ui-prototypes"
                className="bg-blue-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-400 transition-colors"
              >
                {t('dashboard.uiPrototypes')}
              </Link>
            </div>
          </div>
          <Activity className="w-16 h-16 opacity-50" />
        </div>
      </div>

      {/* Design Principles */}
      <div className="bg-white rounded-xl p-6 border border-slate-200">
        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <Target className="w-5 h-5 text-blue-600" />
          {t('dashboard.corePrinciples')}
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
            <div key={num} className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
              <span className="text-sm text-slate-700">{t(`dashboard.principle${num}`)}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Core Modules */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">
          {t('dashboard.coreModules')}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {coreModules.map((module) => {
            const Icon = module.icon;
            return (
              <Link
                key={module.href}
                to={module.href}
                className="bg-white border border-slate-200 rounded-xl p-5 hover:shadow-lg transition-all hover:border-blue-300"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="p-2 bg-blue-50 rounded-lg">
                    <Icon className="w-5 h-5 text-blue-600" />
                  </div>
                  <span
                    className={`text-xs px-2 py-1 rounded-full ${
                      module.priority === "Critical"
                        ? "bg-red-100 text-red-700"
                        : "bg-amber-100 text-amber-700"
                    }`}
                  >
                    {module.priority}
                  </span>
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">{module.title}</h3>
                <p className="text-sm text-slate-600">{module.description}</p>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Technical Documentation */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">{t('dashboard.technicalDocs')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {technicalDocs.map((doc) => {
            const Icon = doc.icon;
            return (
              <Link
                key={doc.href}
                to={doc.href}
                className="bg-white border border-slate-200 rounded-xl p-5 hover:shadow-lg transition-all hover:border-blue-300"
              >
                <div className="p-2 bg-slate-50 rounded-lg w-fit mb-3">
                  <Icon className="w-5 h-5 text-slate-700" />
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">{doc.title}</h3>
                <p className="text-sm text-slate-600">{doc.description}</p>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Quick Access */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Link
          to="/ui-prototypes"
          className="bg-gradient-to-r from-purple-50 to-purple-100 border border-purple-200 rounded-xl p-6 hover:shadow-lg transition-all"
        >
          <Layout className="w-8 h-8 text-purple-600 mb-3" />
          <h3 className="font-semibold text-slate-900 mb-2">{t('tech.uiPrototypes')}</h3>
          <p className="text-sm text-slate-600">
            {t('tech.uiPrototypesDesc')}
          </p>
        </Link>

        <Link
          to="/roadmap"
          className="bg-gradient-to-r from-emerald-50 to-emerald-100 border border-emerald-200 rounded-xl p-6 hover:shadow-lg transition-all"
        >
          <Map className="w-8 h-8 text-emerald-600 mb-3" />
          <h3 className="font-semibold text-slate-900 mb-2">{t('tech.roadmap')}</h3>
          <p className="text-sm text-slate-600">
            {t('tech.roadmapDesc')}
          </p>
        </Link>
      </div>

      {/* Functional Prototypes */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">Live Functional Prototypes</h2>
        <div className="grid grid-cols-1 gap-4">
          <Link
            to="/hospital-box"
            className="bg-gradient-to-r from-emerald-50 to-emerald-100 border-2 border-emerald-400 rounded-xl p-8 hover:shadow-xl transition-all ring-4 ring-emerald-200"
          >
            <div className="flex items-center gap-3 mb-4">
              <CheckCircle className="w-12 h-12 text-emerald-600" />
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-2xl font-bold text-slate-900">Hospital-in-a-Box</h3>
                  <span className="text-xs px-3 py-1 bg-emerald-600 text-white rounded-full font-bold">LIVE SYSTEM ✨</span>
                </div>
                <p className="text-sm text-emerald-700 font-semibold">Production-Ready EHR with Real Workflows</p>
              </div>
            </div>
            <p className="text-slate-700 mb-4">
              Complete functional EHR system with Zustand state management, 7 working modules, RBAC (8 roles), 
              closed-loop workflows, auto-EWS calculation, critical result protocols, dual signature verification, 
              antibiotic stewardship, and complete audit trails.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-4">
              <div className="bg-white rounded-lg p-3 text-center border border-emerald-200">
                <div className="text-2xl font-bold text-emerald-600">8</div>
                <div className="text-xs text-slate-600">User Roles</div>
              </div>
              <div className="bg-white rounded-lg p-3 text-center border border-emerald-200">
                <div className="text-2xl font-bold text-emerald-600">7</div>
                <div className="text-xs text-slate-600">Live Modules</div>
              </div>
              <div className="bg-white rounded-lg p-3 text-center border border-emerald-200">
                <div className="text-2xl font-bold text-emerald-600">15</div>
                <div className="text-xs text-slate-600">Inventory Items</div>
              </div>
              <div className="bg-white rounded-lg p-3 text-center border border-emerald-200">
                <div className="text-2xl font-bold text-emerald-600">4</div>
                <div className="text-xs text-slate-600">Quick Protocols</div>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="text-xs px-3 py-1 bg-emerald-600 text-white rounded-full font-semibold">✅ Patient Registry</span>
              <span className="text-xs px-3 py-1 bg-emerald-600 text-white rounded-full font-semibold">✅ Auto-EWS Triage</span>
              <span className="text-xs px-3 py-1 bg-emerald-600 text-white rounded-full font-semibold">✅ Clinical Station</span>
              <span className="text-xs px-3 py-1 bg-emerald-600 text-white rounded-full font-semibold">✅ Laboratory</span>
              <span className="text-xs px-3 py-1 bg-emerald-600 text-white rounded-full font-semibold">✅ Radiology</span>
              <span className="text-xs px-3 py-1 bg-emerald-600 text-white rounded-full font-semibold">✅ Pharmacy</span>
              <span className="text-xs px-3 py-1 bg-emerald-600 text-white rounded-full font-semibold">✅ Inventory</span>
            </div>
          </Link>

          <Link
            to="/prototype"
            className="bg-gradient-to-r from-slate-50 to-slate-100 border border-slate-300 rounded-xl p-6 hover:shadow-md transition-all opacity-75"
          >
            <div className="flex items-center gap-3 mb-3">
              <Activity className="w-8 h-8 text-slate-500" />
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-lg font-semibold text-slate-700">Original UI Prototype</h3>
                  <span className="text-xs px-2 py-0.5 bg-slate-300 text-slate-700 rounded-full">Legacy / Archive</span>
                </div>
              </div>
            </div>
            <p className="text-sm text-slate-600">
              Static mockup with sample data (5 Iraqi patients, X-ray viewer, lab results). Now superseded by the live Hospital-in-a-Box system above.
            </p>
          </Link>
        </div>
      </div>

      {/* Critical Warning */}
      <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
        <div className="flex gap-3">
          <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
          <div>
            <h3 className="font-semibold text-amber-900 mb-1">{t('dashboard.implementationNote')}</h3>
            <p className="text-sm text-amber-800">
              {t('dashboard.implementationWarning')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}