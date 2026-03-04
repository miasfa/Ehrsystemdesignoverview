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
  CreditCard,
} from 'lucide-react';
import { useHospitalStore } from './store';
import { ProvisioningScreen } from './ProvisioningScreen';
import { PatientRegistry } from './PatientRegistry';
import { IntelligentTriage } from './IntelligentTriage';
import { ClinicalStation } from './ClinicalStation';
import { Laboratory } from './Laboratory';
import { Radiology } from './Radiology';
import { Pharmacy } from './Pharmacy';
import { InventoryManagement } from './InventoryManagement';

type View =
  | 'dashboard'
  | 'patients'
  | 'triage'
  | 'clinical'
  | 'orders'
  | 'lab'
  | 'radiology'
  | 'pharmacy'
  | 'inventory'
  | 'billing'
  | 'audit';

export function HospitalBox() {
  const [currentView, setCurrentView] = useState<View>('dashboard');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);

  const isProvisioned = useHospitalStore((state) => state.isProvisioned);
  const currentUser = useHospitalStore((state) => state.currentUser);
  const notifications = useHospitalStore((state) => state.notifications);
  const users = useHospitalStore((state) => state.users);
  const setCurrentUser = useHospitalStore((state) => state.setCurrentUser);
  const markNotificationAsRead = useHospitalStore((state) => state.markNotificationAsRead);

  const [showNotifications, setShowNotifications] = useState(false);

  const handleProvisioningComplete = () => {
    // Provisioning automatically sets isProvisioned to true
  };

  const handleUserSwitch = (userId: string) => {
    const user = users.find((u) => u.id === userId);
    if (user) {
      setCurrentUser(user);
      setUserDropdownOpen(false);
      // Navigate to first available view
      const firstView = getFirstAvailableView(user);
      setCurrentView(firstView);
    }
  };

  const getFirstAvailableView = (user: typeof currentUser): View => {
    if (!user) return 'dashboard';
    if (user.permissions.viewDashboard) return 'dashboard';
    if (user.permissions.viewPatients) return 'patients';
    if (user.permissions.viewTriage) return 'triage';
    if (user.permissions.viewClinical) return 'clinical';
    if (user.permissions.viewLab) return 'lab';
    if (user.permissions.viewRadiology) return 'radiology';
    if (user.permissions.viewPharmacy) return 'pharmacy';
    if (user.permissions.viewBilling) return 'billing';
    if (user.permissions.viewAudit) return 'audit';
    return 'dashboard';
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
    { id: 'dashboard' as View, label: 'Dashboard', icon: LayoutDashboard, permission: 'viewDashboard' },
    { id: 'triage' as View, label: 'Emergency Triage', icon: AlertTriangle, permission: 'viewTriage' },
    { id: 'patients' as View, label: 'Patient Registry', icon: Users, permission: 'viewPatients' },
    { id: 'clinical' as View, label: 'Clinical Station', icon: Stethoscope, permission: 'viewClinical' },
    { id: 'orders' as View, label: 'Orders', icon: ClipboardList, permission: 'viewOrders' },
    { id: 'lab' as View, label: 'Laboratory', icon: TestTube, permission: 'viewLab' },
    { id: 'radiology' as View, label: 'Radiology', icon: FileImage, permission: 'viewRadiology' },
    { id: 'pharmacy' as View, label: 'Pharmacy', icon: Pill, permission: 'viewPharmacy' },
    { id: 'inventory' as View, label: 'Inventory', icon: Package, permission: 'viewInventory' },
    { id: 'billing' as View, label: 'Billing', icon: CreditCard, permission: 'viewBilling' },
    { id: 'audit' as View, label: 'Audit Logs', icon: Eye, permission: 'viewAudit' },
  ];

  // Filter menu items based on permissions
  const visibleMenuItems = menuItems.filter((item) => {
    if (!currentUser) return false;
    return currentUser.permissions[item.permission as keyof typeof currentUser.permissions];
  });

  // Count unread notifications for current user
  const unreadCount = notifications.filter(
    (n) => !n.isRead && (n.recipientId === currentUser?.id || n.recipientId === 'all-doctors')
  ).length;

  // Get notifications for current user
  const userNotifications = notifications.filter(
    (n) => n.recipientId === currentUser?.id || n.recipientId === 'all-doctors'
  );

  if (!isProvisioned) {
    return <ProvisioningScreen onComplete={handleProvisioningComplete} />;
  }

  return (
    <div className="min-h-screen bg-slate-100 flex">
      {/* Sidebar */}
      <div
        className={`${
          isSidebarOpen ? 'w-64' : 'w-0'
        } bg-gradient-to-b from-blue-600 to-blue-800 text-white transition-all duration-300 flex flex-col overflow-hidden`}
      >
        {/* Logo & Title */}
        <div className="p-6 border-b border-blue-500">
          <div className="flex items-center gap-3">
            <Activity className="w-8 h-8" />
            <div>
              <h1 className="text-xl font-bold">Avicenna EHR</h1>
              <p className="text-xs text-blue-200">Hospital-in-a-Box</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
          {visibleMenuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setCurrentView(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                currentView === item.id
                  ? 'bg-blue-700 text-white'
                  : 'text-blue-100 hover:bg-blue-700/50'
              }`}
            >
              <item.icon className="w-5 h-5" />
              <span className="font-medium">{item.label}</span>
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
              <p className="text-sm font-medium truncate">{currentUser?.name}</p>
              <p className="text-xs text-blue-200 truncate">{getRoleLabel(currentUser?.role || '')}</p>
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
        {/* Top Navigation Bar */}
        <div className="bg-white border-b border-slate-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                className="lg:hidden p-2 hover:bg-slate-100 rounded-lg"
              >
                {isSidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
              <div>
                <h1 className="text-xl font-bold text-slate-900">Avicenna EHR</h1>
                <p className="text-xs text-slate-500">Hospital-in-a-Box System</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              {/* Getting Started Button */}
              <a
                href="/getting-started"
                className="hidden md:flex items-center gap-2 px-3 py-2 bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100 transition-colors text-sm font-medium"
              >
                <Eye className="w-4 h-4" />
                Getting Started
              </a>

              {/* Notification Bell */}
              <div className="relative">
                <button
                  onClick={() => setShowNotifications(!showNotifications)}
                  className="relative p-2 hover:bg-slate-100 rounded-lg transition-colors"
                >
                  <Bell className="w-6 h-6 text-slate-600" />
                  {unreadCount > 0 && (
                    <span className="absolute top-0 right-0 w-5 h-5 bg-red-500 text-white text-xs font-bold rounded-full flex items-center justify-center">
                      {unreadCount}
                    </span>
                  )}
                </button>

                {/* Notification Dropdown */}
                {showNotifications && (
                  <div className="absolute right-0 top-full mt-2 w-96 bg-white rounded-lg shadow-xl border border-slate-200 py-2 z-50 max-h-96 overflow-y-auto">
                    <div className="px-4 py-2 border-b border-slate-200">
                      <p className="text-sm font-semibold text-slate-900">Notifications</p>
                      <p className="text-xs text-slate-500">{unreadCount} unread</p>
                    </div>

                    {userNotifications.length === 0 ? (
                      <div className="px-4 py-8 text-center text-slate-500 text-sm">
                        No notifications
                      </div>
                    ) : (
                      <div>
                        {userNotifications.map((notification) => (
                          <button
                            key={notification.id}
                            onClick={() => {
                              markNotificationAsRead(notification.id);
                              setShowNotifications(false);
                            }}
                            className={`w-full px-4 py-3 text-left hover:bg-slate-50 transition-colors border-b border-slate-100 ${
                              !notification.isRead ? 'bg-blue-50' : ''
                            }`}
                          >
                            <div className="flex items-start gap-3">
                              <div
                                className={`w-2 h-2 rounded-full mt-1.5 flex-shrink-0 ${
                                  notification.severity === 'critical'
                                    ? 'bg-red-500'
                                    : notification.severity === 'warning'
                                    ? 'bg-amber-500'
                                    : 'bg-blue-500'
                                }`}
                              />
                              <div className="flex-1 min-w-0">
                                <p className="text-sm font-medium text-slate-900">
                                  {notification.title}
                                </p>
                                <p className="text-xs text-slate-600 mt-0.5">{notification.message}</p>
                                <p className="text-xs text-slate-400 mt-1">
                                  {new Date(notification.createdAt).toLocaleTimeString()}
                                </p>
                              </div>
                            </div>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* User Switcher Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                  className="flex items-center gap-3 px-4 py-2 hover:bg-slate-100 rounded-lg transition-colors"
                >
                  <div className="text-right">
                    <p className="text-sm font-medium text-slate-900">{currentUser?.name}</p>
                    <div className="flex items-center gap-2 justify-end">
                      <span
                        className={`text-xs px-2 py-0.5 rounded border ${getRoleBadgeColor(
                          currentUser?.role || ''
                        )}`}
                      >
                        {getRoleLabel(currentUser?.role || '')}
                      </span>
                      <span className="text-xs text-slate-500">{currentUser?.id}</span>
                    </div>
                  </div>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-600 transition-transform ${
                      userDropdownOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {/* User Dropdown Menu */}
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
                      {users.map((user) => (
                        <button
                          key={user.id}
                          onClick={() => handleUserSwitch(user.id)}
                          className={`w-full px-4 py-3 text-left hover:bg-slate-50 transition-colors ${
                            currentUser?.id === user.id ? 'bg-blue-50' : ''
                          }`}
                        >
                          <div className="flex items-start gap-3">
                            <div className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center flex-shrink-0">
                              <User className="w-5 h-5 text-slate-600" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2 mb-1">
                                <p className="text-sm font-medium text-slate-900">{user.name}</p>
                                {currentUser?.id === user.id && (
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
          {currentView === 'patients' && <PatientRegistry />}
          {currentView === 'triage' && <IntelligentTriage />}
          {currentView === 'clinical' && <ClinicalStation />}
          {currentView === 'lab' && <Laboratory />}
          {currentView === 'radiology' && <Radiology />}
          {currentView === 'pharmacy' && <Pharmacy />}
          {currentView === 'inventory' && <InventoryManagement />}
          
          {/* Placeholder for other views */}
          {!['patients', 'triage', 'clinical', 'lab', 'radiology', 'pharmacy', 'inventory'].includes(currentView) && (
            <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-200">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                {menuItems.find((item) => item.id === currentView)?.label}
              </h3>
              <p className="text-slate-600 mb-4">
                The complete Hospital-in-a-Box system includes:
              </p>
              <ul className="mt-4 space-y-2 text-slate-600">
                <li>✅ Patient Registry with Identity Levels (L0, L2)</li>
                <li>✅ Intelligent Triage with Auto-EWS Calculation</li>
                <li>✅ Clinical Station with Quick Protocols & Antibiotic Stewardship</li>
                <li>✅ Laboratory with Critical Result Workflow</li>
                <li>✅ Radiology with Critical Finding Protocol</li>
                <li>✅ Pharmacy with Dual Signature for Controlled Substances</li>
                <li>✅ Inventory Management with Real-time Stock Tracking</li>
                <li>• Billing with Auto-Invoice Generation (Coming Soon)</li>
                <li>• Audit Dashboard with Anomaly Detection (Coming Soon)</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}