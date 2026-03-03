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
                to="/simple-overview"
                className="bg-white text-blue-700 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors flex items-center gap-2"
              >
                <FileText className="w-5 h-5" />
                {language === 'en' ? 'Simple Explanation' : 'شرح مبسط'}
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