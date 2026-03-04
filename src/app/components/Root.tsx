import { Outlet, Link, useLocation } from "react-router";
import {
  Activity,
  AlertTriangle,
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
  Menu,
  X,
} from "lucide-react";
import { useState } from "react";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { useLanguage } from "../contexts/LanguageContext";
import { translate } from "../translations";

export function Root() {
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const { language } = useLanguage();

  const navigation = [
    { name: translate("nav.dashboard", language), href: "/", icon: Activity },
    { name: translate("nav.architecture", language), href: "/architecture", icon: Layers },
    { name: translate("nav.database", language), href: "/database", icon: Database },
    {
      name: translate("nav.modules", language),
      type: "separator",
      children: [
        { name: translate("nav.patientIdentity", language), href: "/module-patient-identity", icon: User },
        { name: translate("nav.triage", language), href: "/module-triage", icon: AlertTriangle },
        { name: translate("nav.clinicalDoc", language), href: "/module-clinical-doc", icon: FileText },
        { name: translate("nav.orders", language), href: "/module-orders", icon: ClipboardList },
        { name: translate("nav.pharmacy", language), href: "/module-pharmacy", icon: Pill },
        { name: translate("nav.operatingRoom", language), href: "/module-operating-room", icon: Stethoscope },
        { name: translate("nav.lab", language), href: "/module-lab", icon: TestTube },
        { name: translate("nav.inventory", language), href: "/module-inventory", icon: Package },
        { name: translate("nav.audit", language), href: "/module-audit", icon: Eye },
      ],
    },
    {
      name: translate("nav.infrastructure", language),
      type: "separator",
      children: [
        { name: translate("nav.security", language), href: "/security", icon: Shield },
        { name: translate("nav.deployment", language), href: "/deployment", icon: Server },
        { name: translate("nav.techStack", language), href: "/tech-stack", icon: Code },
      ],
    },
    { name: translate("nav.uiPrototypes", language), href: "/ui-prototypes", icon: Layout },
    { name: translate("nav.roadmap", language), href: "/roadmap", icon: Map },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-40">
        <div className="flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
            >
              {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
            <div>
              <h1 className="text-xl font-semibold text-slate-900">
                {language === 'en' ? 'National EHR System' : 'نظام السجلات الصحية الإلكترونية الوطني'}
              </h1>
              <p className="text-sm text-slate-600">
                {language === 'en' ? 'Enterprise Architecture Documentation' : 'توثيق هندسة المؤسسات'}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <LanguageSwitcher />
            <div className="flex items-center gap-2 text-sm text-slate-600">
              <Shield className="w-4 h-4 text-emerald-600" />
              <span>{language === 'en' ? 'Secure by Design' : 'آمن حسب التصميم'}</span>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside
          className={`${
            sidebarOpen ? "w-72" : "w-0"
          } bg-white border-r border-slate-200 transition-all duration-300 overflow-hidden sticky top-[73px] h-[calc(100vh-73px)]`}
        >
          <nav className="p-4 space-y-1 overflow-y-auto h-full">
            {/* Navigation */}
            <nav className="flex-1 px-4 space-y-6 overflow-y-auto">
              {/* Quick Access */}
              <div>
                <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3 px-3">
                  {translate('nav.quickAccess', language) || (language === 'en' ? 'Quick Access' : 'الوصول السريع')}
                </h3>
                <Link
                  to="/simple-overview"
                  className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                    location.pathname === '/simple-overview'
                      ? 'bg-blue-50 text-blue-700'
                      : 'text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  <FileText className="w-5 h-5" />
                  <span className="text-sm font-medium">
                    {language === 'en' ? 'Simple Explanation' : 'شرح مبسط'}
                  </span>
                </Link>
              </div>

              <div>
                <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3 px-3">
                  {translate('nav.overview', language) || (language === 'en' ? 'Overview' : 'نظرة عامة')}
                </h3>
                {navigation.map((item, index) => {
                  if (item.type === "separator") {
                    return (
                      <div key={index} className="pt-6">
                        <p className="px-3 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                          {item.name}
                        </p>
                        {item.children?.map((child) => {
                          const Icon = child.icon;
                          const isActive = location.pathname === child.href;
                          return (
                            <Link
                              key={child.href}
                              to={child.href}
                              className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                                isActive
                                  ? "bg-blue-50 text-blue-700"
                                  : "text-slate-700 hover:bg-slate-100"
                              }`}
                            >
                              <Icon className="w-4 h-4 flex-shrink-0" />
                              <span className="text-sm">{child.name}</span>
                            </Link>
                          );
                        })}
                      </div>
                    );
                  }

                  const Icon = item.icon;
                  const isActive = location.pathname === item.href;
                  return (
                    <Link
                      key={item.href}
                      to={item.href}
                      className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                        isActive
                          ? "bg-blue-50 text-blue-700"
                          : "text-slate-700 hover:bg-slate-100"
                      }`}
                    >
                      <Icon className="w-4 h-4 flex-shrink-0" />
                      <span className="text-sm">{item.name}</span>
                    </Link>
                  );
                })}
              </div>
            </nav>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
