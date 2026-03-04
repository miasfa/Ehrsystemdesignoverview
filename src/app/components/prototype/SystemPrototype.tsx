import { useState } from 'react';
import {
  Activity,
  Users,
  AlertTriangle,
  TestTube,
  Pill,
  FileImage,
  Stethoscope,
  Eye,
  LayoutDashboard,
  Menu,
  X,
  LogOut,
  User,
  Bell,
  FileText,
  ClipboardList,
  Package,
} from 'lucide-react';
import { PrototypeDashboard } from './PrototypeDashboard';
import { PrototypePatientList } from './PrototypePatientList';
import { PrototypeTriageQueue } from './PrototypeTriageQueue';
import { PrototypeLab } from './PrototypeLab';
import { PrototypePharmacy } from './PrototypePharmacy';
import { PrototypeImaging } from './PrototypeImaging';
import { PrototypeORSchedule } from './PrototypeORSchedule';
import { PrototypeAuditLog } from './PrototypeAuditLog';
import { PrototypePatientDetail } from './PrototypePatientDetail';
import { PrototypeClinicalDoc } from './PrototypeClinicalDoc';
import { PrototypeOrders } from './PrototypeOrders';
import { PrototypeInventory } from './PrototypeInventory';

type View = 
  | 'dashboard' 
  | 'patients' 
  | 'triage' 
  | 'clinical-doc'
  | 'orders'
  | 'lab' 
  | 'pharmacy' 
  | 'imaging' 
  | 'inventory'
  | 'or-schedule' 
  | 'audit'
  | 'patient-detail';

export function SystemPrototype() {
  const [currentView, setCurrentView] = useState<View>('dashboard');
  const [selectedPatientId, setSelectedPatientId] = useState<string | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [currentUser] = useState({
    name: 'Dr. Mustafa Al-Hashimi',
    role: 'Emergency Physician',
    id: 'USR-001',
  });

  const handleViewPatient = (patientId: string) => {
    setSelectedPatientId(patientId);
    setCurrentView('patient-detail');
  };

  const menuItems = [
    { id: 'dashboard' as View, label: 'Dashboard', icon: LayoutDashboard, badge: null },
    { id: 'triage' as View, label: 'Emergency Triage', icon: AlertTriangle, badge: 4 },
    { id: 'patients' as View, label: 'Patients', icon: Users, badge: null },
    { id: 'lab' as View, label: 'Laboratory', icon: TestTube, badge: 2 },
    { id: 'pharmacy' as View, label: 'Pharmacy', icon: Pill, badge: 1 },
    { id: 'imaging' as View, label: 'Imaging', icon: FileImage, badge: 2 },
    { id: 'or-schedule' as View, label: 'Operating Room', icon: Stethoscope, badge: null },
    { id: 'audit' as View, label: 'Audit Logs', icon: Eye, badge: null },
    { id: 'clinical-doc' as View, label: 'Clinical Documents', icon: FileText, badge: null },
    { id: 'orders' as View, label: 'Orders', icon: ClipboardList, badge: null },
    { id: 'inventory' as View, label: 'Inventory', icon: Package, badge: null },
  ];

  return (
    <div className="min-h-screen bg-slate-100 flex">
      {/* Sidebar */}
      <div
        className={`${
          sidebarOpen ? 'w-64' : 'w-0'
        } bg-gradient-to-b from-blue-600 to-blue-800 text-white transition-all duration-300 flex flex-col overflow-hidden`}
      >
        {/* Logo & Title */}
        <div className="p-6 border-b border-blue-500">
          <div className="flex items-center gap-3">
            <Activity className="w-8 h-8" />
            <div>
              <h1 className="text-xl font-bold">Avicenna EHR</h1>
              <p className="text-xs text-blue-200">Baghdad Central Hospital</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setCurrentView(item.id);
                if (item.id !== 'patient-detail') {
                  setSelectedPatientId(null);
                }
              }}
              className={`w-full flex items-center justify-between gap-3 px-4 py-3 rounded-lg transition-colors ${
                currentView === item.id
                  ? 'bg-blue-700 text-white'
                  : 'text-blue-100 hover:bg-blue-700/50'
              }`}
            >
              <div className="flex items-center gap-3">
                <item.icon className="w-5 h-5" />
                <span className="font-medium">{item.label}</span>
              </div>
              {item.badge !== null && item.badge > 0 && (
                <span className="bg-red-500 text-white text-xs font-bold rounded-full px-2 py-0.5 min-w-[20px] text-center">
                  {item.badge}
                </span>
              )}
            </button>
          ))}
        </nav>

        {/* User Info */}
        <div className="p-4 border-t border-blue-500">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center">
              <User className="w-6 h-6" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium truncate">{currentUser.name}</p>
              <p className="text-xs text-blue-200 truncate">{currentUser.role}</p>
            </div>
          </div>
          <button className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-blue-700 hover:bg-blue-600 rounded-lg transition-colors">
            <LogOut className="w-4 h-4" />
            <span className="text-sm">Logout</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Bar */}
        <div className="bg-white border-b border-slate-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
              >
                {sidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
              <div>
                <h2 className="text-xl font-bold text-slate-900">
                  {menuItems.find((item) => item.id === currentView)?.label || 'Patient Detail'}
                </h2>
                <p className="text-sm text-slate-500">
                  {new Date().toLocaleDateString('en-US', {
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button className="relative p-2 hover:bg-slate-100 rounded-lg transition-colors">
                <Bell className="w-6 h-6 text-slate-600" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              <div className="text-right">
                <p className="text-sm font-medium text-slate-900">{currentUser.name}</p>
                <p className="text-xs text-slate-500">{currentUser.id}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-auto p-6">
          {currentView === 'dashboard' && <PrototypeDashboard onNavigate={setCurrentView} onViewPatient={handleViewPatient} />}
          {currentView === 'patients' && <PrototypePatientList onViewPatient={handleViewPatient} />}
          {currentView === 'triage' && <PrototypeTriageQueue onViewPatient={handleViewPatient} />}
          {currentView === 'lab' && <PrototypeLab onViewPatient={handleViewPatient} />}
          {currentView === 'pharmacy' && <PrototypePharmacy onViewPatient={handleViewPatient} />}
          {currentView === 'imaging' && <PrototypeImaging onViewPatient={handleViewPatient} />}
          {currentView === 'or-schedule' && <PrototypeORSchedule onViewPatient={handleViewPatient} />}
          {currentView === 'audit' && <PrototypeAuditLog />}
          {currentView === 'clinical-doc' && <PrototypeClinicalDoc onViewPatient={handleViewPatient} />}
          {currentView === 'orders' && <PrototypeOrders onViewPatient={handleViewPatient} />}
          {currentView === 'inventory' && <PrototypeInventory />}
          {currentView === 'patient-detail' && selectedPatientId && (
            <PrototypePatientDetail 
              patientId={selectedPatientId} 
              onBack={() => setCurrentView('patients')} 
            />
          )}
        </div>
      </div>
    </div>
  );
}