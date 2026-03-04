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
  ChevronDown,
  Shield,
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
import { mockSystemUsers, type SystemUser } from './mockData';

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
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [selectedPatientId, setSelectedPatientId] = useState<string | null>(null);
  const [currentUser, setCurrentUser] = useState<SystemUser>(mockSystemUsers[0]); // Default to doctor
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);

  const handleViewPatient = (patientId: string) => {
    setSelectedPatientId(patientId);
    setCurrentView('patient-detail');
  };

  const handleBackToList = () => {
    setCurrentView('patients');
    setSelectedPatientId(null);
  };

  const handleNavigate = (view: View) => {
    setCurrentView(view);
    if (view !== 'patient-detail') {
      setSelectedPatientId(null);
    }
  };

  const handleUserSwitch = (user: SystemUser) => {
    setCurrentUser(user);
    setUserDropdownOpen(false);
    // Reset to dashboard or first available view when switching users
    const firstAvailableView = getFirstAvailableView(user);
    setCurrentView(firstAvailableView);
  };

  const getFirstAvailableView = (user: SystemUser): View => {
    if (user.permissions.viewDashboard) return 'dashboard';
    if (user.permissions.viewPatients) return 'patients';
    if (user.permissions.viewTriage) return 'triage';
    if (user.permissions.viewLab) return 'lab';
    if (user.permissions.viewPharmacy) return 'pharmacy';
    if (user.permissions.viewImaging) return 'imaging';
    if (user.permissions.viewInventory) return 'inventory';
    if (user.permissions.viewORSchedule) return 'or-schedule';
    if (user.permissions.viewAudit) return 'audit';
    return 'patients'; // fallback
  };

  const getRoleBadgeColor = (role: string) => {
    switch (role) {
      case 'administrator':
        return 'bg-purple-100 text-purple-900 border-purple-300';
      case 'doctor':
        return 'bg-blue-100 text-blue-900 border-blue-300';
      case 'nurse':
        return 'bg-emerald-100 text-emerald-900 border-emerald-300';
      case 'pharmacist':
        return 'bg-amber-100 text-amber-900 border-amber-300';
      case 'lab-technician':
        return 'bg-purple-100 text-purple-900 border-purple-300';
      case 'radiologist':
        return 'bg-blue-100 text-blue-900 border-blue-300';
      case 'receptionist':
        return 'bg-slate-100 text-slate-900 border-slate-300';
      case 'auditor':
        return 'bg-red-100 text-red-900 border-red-300';
      default:
        return 'bg-slate-100 text-slate-900 border-slate-300';
    }
  };

  const getRoleLabel = (role: string) => {
    return role
      .split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  const menuItems = [
    { id: 'dashboard' as View, label: 'Dashboard', icon: LayoutDashboard, badge: null, permission: 'viewDashboard' },
    { id: 'triage' as View, label: 'Emergency Triage', icon: AlertTriangle, badge: 4, permission: 'viewTriage' },
    { id: 'patients' as View, label: 'Patients', icon: Users, badge: null, permission: 'viewPatients' },
    { id: 'lab' as View, label: 'Laboratory', icon: TestTube, badge: 2, permission: 'viewLab' },
    { id: 'pharmacy' as View, label: 'Pharmacy', icon: Pill, badge: 1, permission: 'viewPharmacy' },
    { id: 'imaging' as View, label: 'Imaging', icon: FileImage, badge: 2, permission: 'viewImaging' },
    { id: 'or-schedule' as View, label: 'Operating Room', icon: Stethoscope, badge: null, permission: 'viewORSchedule' },
    { id: 'audit' as View, label: 'Audit Logs', icon: Eye, badge: null, permission: 'viewAudit' },
    { id: 'clinical-doc' as View, label: 'Clinical Documents', icon: FileText, badge: null, permission: 'viewClinicalDoc' },
    { id: 'orders' as View, label: 'Orders', icon: ClipboardList, badge: null, permission: 'viewOrders' },
    { id: 'inventory' as View, label: 'Inventory', icon: Package, badge: null, permission: 'viewInventory' },
  ];

  // Filter menu items based on user permissions
  const visibleMenuItems = menuItems.filter((item) => {
    return currentUser.permissions[item.permission as keyof typeof currentUser.permissions];
  });

  const hasAccess = (view: View) => {
    const item = menuItems.find((i) => i.id === view);
    if (!item) return true; // Allow patient detail always if they have patient view
    return currentUser.permissions[item.permission as keyof typeof currentUser.permissions];
  };

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
          {visibleMenuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavigate(item.id)}
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

              {/* User Switcher Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                  className="flex items-center gap-3 px-4 py-2 hover:bg-slate-100 rounded-lg transition-colors"
                >
                  <div className="text-right">
                    <p className="text-sm font-medium text-slate-900">{currentUser.name}</p>
                    <div className="flex items-center gap-2 justify-end">
                      <span
                        className={`text-xs px-2 py-0.5 rounded border ${getRoleBadgeColor(
                          currentUser.role
                        )}`}
                      >
                        {getRoleLabel(currentUser.role)}
                      </span>
                      <span className="text-xs text-slate-500">{currentUser.id}</span>
                    </div>
                  </div>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-600 transition-transform ${
                      userDropdownOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {/* Dropdown Menu */}
                {userDropdownOpen && (
                  <div className="absolute right-0 top-full mt-2 w-80 bg-white rounded-lg shadow-xl border border-slate-200 py-2 z-50">
                    <div className="px-4 py-2 border-b border-slate-200">
                      <div className="flex items-center gap-2 mb-1">
                        <Shield className="w-4 h-4 text-blue-600" />
                        <p className="text-xs font-semibold text-slate-600 uppercase">
                          Switch User Account (RBAC Demo)
                        </p>
                      </div>
                      <p className="text-xs text-slate-500">
                        Select a different user role to see permission-based access
                      </p>
                    </div>
                    <div className="max-h-96 overflow-y-auto">
                      {mockSystemUsers.map((user) => (
                        <button
                          key={user.id}
                          onClick={() => handleUserSwitch(user)}
                          className={`w-full px-4 py-3 text-left hover:bg-slate-50 transition-colors ${
                            currentUser.id === user.id ? 'bg-blue-50' : ''
                          }`}
                        >
                          <div className="flex items-start gap-3">
                            <div className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center flex-shrink-0">
                              <User className="w-5 h-5 text-slate-600" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2 mb-1">
                                <p className="text-sm font-medium text-slate-900">{user.name}</p>
                                {currentUser.id === user.id && (
                                  <span className="px-1.5 py-0.5 bg-blue-100 text-blue-700 text-xs font-bold rounded">
                                    ACTIVE
                                  </span>
                                )}
                              </div>
                              <div className="flex items-center gap-2 flex-wrap">
                                <span
                                  className={`text-xs px-2 py-0.5 rounded border ${getRoleBadgeColor(
                                    user.role
                                  )}`}
                                >
                                  {getRoleLabel(user.role)}
                                </span>
                                <span className="text-xs text-slate-500">{user.department}</span>
                              </div>
                            </div>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
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
              onBack={handleBackToList} 
            />
          )}
        </div>
      </div>
    </div>
  );
}