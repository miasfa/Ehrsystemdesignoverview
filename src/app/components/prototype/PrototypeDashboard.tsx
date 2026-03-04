import { 
  Users, 
  AlertTriangle, 
  TestTube, 
  Pill, 
  FileImage, 
  Stethoscope,
  TrendingUp,
  Clock,
  Activity,
  AlertCircle,
  FileText,
  ClipboardList,
  Package,
} from 'lucide-react';
import { 
  mockPatients, 
  mockTriageQueue, 
  mockLabResults, 
  mockMedications,
  mockImaging,
  mockORSchedule,
  mockClinicalNotes,
  mockOrders,
  mockInventoryItems,
} from './mockData';

interface Props {
  onNavigate: (view: string) => void;
  onViewPatient: (patientId: string) => void;
}

export function PrototypeDashboard({ onNavigate, onViewPatient }: Props) {
  const activePatients = mockPatients.length;
  const criticalTriageCount = mockTriageQueue.filter(t => t.esiLevel <= 2).length;
  const pendingLabTests = mockLabResults.filter(l => l.status !== 'completed').length;
  const pendingMeds = mockMedications.filter(m => m.status === 'pending').length;
  const pendingImaging = mockImaging.filter(i => i.status === 'pending').length;
  const todayORs = mockORSchedule.filter(o => 
    o.scheduledDate === new Date().toISOString().split('T')[0]
  ).length;

  const criticalAlerts = [
    {
      id: '1',
      type: 'critical',
      message: 'Cardiac Troponin CRITICAL for Ahmed Hassan Mohammed (PAT-001)',
      time: '12 min ago',
      patientId: 'PAT-001',
    },
    {
      id: '2',
      type: 'warning',
      message: 'Omar Khalid Rashid (PAT-003) waiting 45+ minutes - ESI Level 2',
      time: '8 min ago',
      patientId: 'PAT-003',
    },
    {
      id: '3',
      type: 'info',
      message: 'Operating Room 2 - Cardiac Catheterization in progress',
      time: '15 min ago',
      patientId: null,
    },
  ];

  const recentActivity = [
    { action: 'Lab result completed', patient: 'Ahmed Hassan Mohammed', time: '5 min ago', patientId: 'PAT-001' },
    { action: 'Medication dispensed', patient: 'Fatima Ali Hussein', time: '8 min ago', patientId: 'PAT-002' },
    { action: 'X-Ray completed', patient: 'Ahmed Hassan Mohammed', time: '12 min ago', patientId: 'PAT-001' },
    { action: 'New triage entry', patient: 'Hassan Ibrahim Ali', time: '15 min ago', patientId: 'PAT-005' },
    { action: 'Patient admitted', patient: 'Omar Khalid Rashid', time: '18 min ago', patientId: 'PAT-003' },
  ];

  const statCards = [
    {
      title: 'Active Patients',
      value: activePatients,
      icon: Users,
      color: 'blue',
      onClick: () => onNavigate('patients'),
    },
    {
      title: 'Critical Triage',
      value: criticalTriageCount,
      icon: AlertTriangle,
      color: 'red',
      badge: 'URGENT',
      onClick: () => onNavigate('triage'),
    },
    {
      title: 'Pending Labs',
      value: pendingLabTests,
      icon: TestTube,
      color: 'purple',
      onClick: () => onNavigate('lab'),
    },
    {
      title: 'Pending Meds',
      value: pendingMeds,
      icon: Pill,
      color: 'emerald',
      onClick: () => onNavigate('pharmacy'),
    },
    {
      title: 'Pending Imaging',
      value: pendingImaging,
      icon: FileImage,
      color: 'amber',
      onClick: () => onNavigate('imaging'),
    },
    {
      title: "Today's Surgeries",
      value: todayORs,
      icon: Stethoscope,
      color: 'indigo',
      onClick: () => onNavigate('or-schedule'),
    },
  ];

  return (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {statCards.map((stat, index) => (
          <button
            key={index}
            onClick={stat.onClick}
            className="bg-white rounded-xl border border-slate-200 p-6 hover:shadow-lg transition-shadow text-left relative overflow-hidden group"
          >
            <div className={`absolute top-0 right-0 w-32 h-32 bg-${stat.color}-50 rounded-full -translate-y-16 translate-x-16 group-hover:scale-110 transition-transform`}></div>
            <div className="relative">
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 bg-${stat.color}-100 rounded-lg`}>
                  <stat.icon className={`w-6 h-6 text-${stat.color}-600`} />
                </div>
                {stat.badge && (
                  <span className="bg-red-100 text-red-700 text-xs font-bold px-2 py-1 rounded">
                    {stat.badge}
                  </span>
                )}
              </div>
              <p className="text-3xl font-bold text-slate-900 mb-1">{stat.value}</p>
              <p className="text-sm text-slate-600">{stat.title}</p>
            </div>
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Critical Alerts */}
        <div className="bg-white rounded-xl border border-slate-200 p-6">
          <div className="flex items-center gap-3 mb-4">
            <AlertCircle className="w-6 h-6 text-red-600" />
            <h2 className="text-lg font-bold text-slate-900">Critical Alerts</h2>
          </div>
          <div className="space-y-3">
            {criticalAlerts.map((alert) => (
              <div
                key={alert.id}
                className={`p-4 rounded-lg border-l-4 ${
                  alert.type === 'critical'
                    ? 'bg-red-50 border-red-500'
                    : alert.type === 'warning'
                    ? 'bg-amber-50 border-amber-500'
                    : 'bg-blue-50 border-blue-500'
                }`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1">
                    <p className="text-sm font-medium text-slate-900 mb-1">{alert.message}</p>
                    <div className="flex items-center gap-2">
                      <Clock className="w-3 h-3 text-slate-500" />
                      <p className="text-xs text-slate-600">{alert.time}</p>
                    </div>
                  </div>
                  {alert.patientId && (
                    <button
                      onClick={() => onViewPatient(alert.patientId!)}
                      className="text-xs font-medium text-blue-600 hover:text-blue-700 whitespace-nowrap"
                    >
                      View Patient
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-xl border border-slate-200 p-6">
          <div className="flex items-center gap-3 mb-4">
            <Activity className="w-6 h-6 text-blue-600" />
            <h2 className="text-lg font-bold text-slate-900">Recent Activity</h2>
          </div>
          <div className="space-y-3">
            {recentActivity.map((activity, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-3 hover:bg-slate-50 rounded-lg transition-colors"
              >
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-slate-900">{activity.action}</p>
                  <button
                    onClick={() => onViewPatient(activity.patientId)}
                    className="text-sm text-blue-600 hover:text-blue-700 hover:underline"
                  >
                    {activity.patient}
                  </button>
                  <div className="flex items-center gap-2 mt-1">
                    <Clock className="w-3 h-3 text-slate-500" />
                    <p className="text-xs text-slate-600">{activity.time}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ED Triage Overview */}
      <div className="bg-white rounded-xl border border-slate-200 p-6">
        <div className="flex items-center gap-3 mb-4">
          <TrendingUp className="w-6 h-6 text-purple-600" />
          <h2 className="text-lg font-bold text-slate-900">Emergency Department - Current Status</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {[
            { level: 1, label: 'Resuscitation', count: 0, color: 'red', wait: '0 min' },
            { level: 2, label: 'Emergent', count: 2, color: 'orange', wait: '8-45 min' },
            { level: 3, label: 'Urgent', count: 1, color: 'amber', wait: '62 min' },
            { level: 4, label: 'Less Urgent', count: 1, color: 'yellow', wait: '15 min' },
            { level: 5, label: 'Non-Urgent', count: 0, color: 'green', wait: '-' },
          ].map((level) => (
            <div
              key={level.level}
              className={`bg-${level.color}-50 border border-${level.color}-200 rounded-lg p-4 text-center`}
            >
              <div className={`text-3xl font-bold text-${level.color}-700 mb-1`}>{level.count}</div>
              <div className={`text-xs font-semibold text-${level.color}-900 mb-2`}>
                Level {level.level}
              </div>
              <div className={`text-xs text-${level.color}-700`}>{level.label}</div>
              <div className={`text-xs text-${level.color}-600 mt-2`}>Wait: {level.wait}</div>
            </div>
          ))}
        </div>
        <div className="mt-4 flex justify-end">
          <button
            onClick={() => onNavigate('triage')}
            className="text-sm font-medium text-blue-600 hover:text-blue-700"
          >
            View Full Triage Queue →
          </button>
        </div>
      </div>
    </div>
  );
}