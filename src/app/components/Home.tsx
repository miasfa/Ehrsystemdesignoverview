import { Link } from 'react-router';
import { 
  FileText, 
  Layout, 
  Archive, 
  ArrowRight, 
  CheckCircle,
  Clock,
  AlertCircle
} from 'lucide-react';

export function Home() {
  const projectStatus = {
    phase: 'Planning & Design',
    progress: 35,
    lastUpdate: 'March 4, 2026',
  };

  const quickLinks = [
    {
      title: 'Project Overview',
      description: 'Vision, goals, and strategic planning for the Avicenna EHR system',
      icon: FileText,
      path: '/overview',
      color: 'blue',
    },
    {
      title: 'System Design',
      description: 'Technical architecture, database schema, and module specifications',
      icon: Layout,
      path: '/design',
      color: 'purple',
    },
    {
      title: 'Archive',
      description: 'Previous work, prototypes, and documentation history',
      icon: Archive,
      path: '/archive',
      color: 'slate',
    },
  ];

  const recentActivity = [
    { 
      action: 'Project restructure initiated', 
      timestamp: 'Just now', 
      type: 'info' 
    },
    { 
      action: 'Hospital-in-a-Box prototype completed', 
      timestamp: '2 hours ago', 
      type: 'success' 
    },
    { 
      action: 'System put on hold for reorganization', 
      timestamp: '5 minutes ago', 
      type: 'warning' 
    },
  ];

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <h1 className="text-4xl font-bold mb-3">Avicenna EHR System</h1>
            <p className="text-blue-100 text-lg mb-6 max-w-2xl">
              Building a modern Electronic Health Record system for hospitals in Iraq, 
              designed to scale into a national health platform with offline-first architecture, 
              complete auditability, and enterprise-grade features.
            </p>
            <div className="flex items-center gap-4">
              <Link
                to="/overview"
                className="bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center gap-2"
              >
                Get Started
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/archive"
                className="bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors"
              >
                View Archive
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Project Status */}
      <div className="bg-white rounded-xl p-6 border border-slate-200">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Project Status</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <div className="text-sm text-slate-600 mb-1">Current Phase</div>
            <div className="text-lg font-semibold text-slate-900">{projectStatus.phase}</div>
          </div>
          <div>
            <div className="text-sm text-slate-600 mb-1">Progress</div>
            <div className="flex items-center gap-3">
              <div className="flex-1 bg-slate-200 rounded-full h-2">
                <div 
                  className="bg-blue-600 h-2 rounded-full transition-all"
                  style={{ width: `${projectStatus.progress}%` }}
                />
              </div>
              <span className="text-lg font-semibold text-slate-900">{projectStatus.progress}%</span>
            </div>
          </div>
          <div>
            <div className="text-sm text-slate-600 mb-1">Last Update</div>
            <div className="text-lg font-semibold text-slate-900">{projectStatus.lastUpdate}</div>
          </div>
        </div>
      </div>

      {/* Quick Links Grid */}
      <div>
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Quick Access</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {quickLinks.map((link) => {
            const Icon = link.icon;
            const colorClasses = {
              blue: 'bg-blue-50 text-blue-600 border-blue-200 hover:bg-blue-100',
              purple: 'bg-purple-50 text-purple-600 border-purple-200 hover:bg-purple-100',
              slate: 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100',
            };

            return (
              <Link
                key={link.path}
                to={link.path}
                className="bg-white rounded-xl p-6 border-2 border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all group"
              >
                <div className={`w-12 h-12 rounded-lg ${colorClasses[link.color as keyof typeof colorClasses]} flex items-center justify-center mb-4`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2 group-hover:text-blue-700 transition-colors">
                  {link.title}
                </h3>
                <p className="text-sm text-slate-600">{link.description}</p>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-xl p-6 border border-slate-200">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Recent Activity</h2>
        <div className="space-y-3">
          {recentActivity.map((activity, index) => {
            const iconMap = {
              success: <CheckCircle className="w-5 h-5 text-green-600" />,
              warning: <AlertCircle className="w-5 h-5 text-amber-600" />,
              info: <Clock className="w-5 h-5 text-blue-600" />,
            };

            return (
              <div key={index} className="flex items-start gap-3 p-3 rounded-lg hover:bg-slate-50 transition-colors">
                {iconMap[activity.type as keyof typeof iconMap]}
                <div className="flex-1">
                  <p className="text-sm text-slate-900">{activity.action}</p>
                  <p className="text-xs text-slate-500">{activity.timestamp}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Next Steps */}
      <div className="bg-gradient-to-r from-emerald-50 to-emerald-100 border border-emerald-200 rounded-xl p-6">
        <h2 className="text-xl font-bold text-slate-900 mb-3">🚀 Ready to Continue?</h2>
        <p className="text-slate-700 mb-4">
          The project has been restructured and is ready for the next phase of development. 
          Start by reviewing the Project Overview to understand the vision and goals, 
          then explore the System Design to see the technical architecture.
        </p>
        <Link
          to="/overview"
          className="inline-flex items-center gap-2 bg-emerald-600 text-white px-6 py-3 rounded-lg hover:bg-emerald-700 transition-colors font-semibold"
        >
          Start Planning
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </div>
  );
}
