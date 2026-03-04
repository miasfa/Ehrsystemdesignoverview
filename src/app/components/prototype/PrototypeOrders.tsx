import { ClipboardList, Eye, AlertTriangle, CheckCircle, Clock, Zap } from 'lucide-react';
import { mockOrders, mockPatients } from './mockData';

interface Props {
  onViewPatient: (patientId: string) => void;
}

export function PrototypeOrders({ onViewPatient }: Props) {
  const getPatientName = (patientId: string) => {
    return mockPatients.find((p) => p.id === patientId)?.name || 'Unknown';
  };

  const getOrderTypeColor = (type: string) => {
    switch (type) {
      case 'lab':
        return 'purple';
      case 'imaging':
        return 'blue';
      case 'medication':
        return 'emerald';
      case 'procedure':
        return 'red';
      case 'consult':
        return 'amber';
      default:
        return 'slate';
    }
  };

  const getOrderTypeLabel = (type: string) => {
    return type.charAt(0).toUpperCase() + type.slice(1);
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'stat':
        return 'red';
      case 'urgent':
        return 'amber';
      case 'routine':
        return 'blue';
      default:
        return 'slate';
    }
  };

  const getPriorityIcon = (priority: string) => {
    if (priority === 'stat') return Zap;
    if (priority === 'urgent') return AlertTriangle;
    return Clock;
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'emerald';
      case 'in-progress':
        return 'blue';
      case 'pending':
        return 'amber';
      case 'cancelled':
        return 'red';
      default:
        return 'slate';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return CheckCircle;
      case 'in-progress':
        return Clock;
      case 'pending':
        return AlertTriangle;
      default:
        return Clock;
    }
  };

  // Sort orders by priority and date
  const sortedOrders = [...mockOrders].sort((a, b) => {
    const priorityOrder = { stat: 0, urgent: 1, routine: 2 };
    if (priorityOrder[a.priority] !== priorityOrder[b.priority]) {
      return priorityOrder[a.priority] - priorityOrder[b.priority];
    }
    return new Date(b.orderedDate).getTime() - new Date(a.orderedDate).getTime();
  });

  // Group by type
  const ordersByType = mockOrders.reduce((acc, order) => {
    acc[order.type] = (acc[order.type] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const ordersByStatus = mockOrders.reduce((acc, order) => {
    acc[order.status] = (acc[order.status] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  return (
    <div className="space-y-6">
      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        <div className="bg-white rounded-xl border border-slate-200 p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-slate-600">Total Orders</span>
            <ClipboardList className="w-4 h-4 text-slate-400" />
          </div>
          <p className="text-2xl font-bold text-slate-900">{mockOrders.length}</p>
        </div>
        <div className="bg-white rounded-xl border border-slate-200 p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-slate-600">Pending</span>
            <Clock className="w-4 h-4 text-amber-500" />
          </div>
          <p className="text-2xl font-bold text-amber-600">{ordersByStatus['pending'] || 0}</p>
        </div>
        <div className="bg-white rounded-xl border border-slate-200 p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-slate-600">In Progress</span>
            <Clock className="w-4 h-4 text-blue-500" />
          </div>
          <p className="text-2xl font-bold text-blue-600">{ordersByStatus['in-progress'] || 0}</p>
        </div>
        <div className="bg-white rounded-xl border border-slate-200 p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-slate-600">Completed</span>
            <CheckCircle className="w-4 h-4 text-emerald-500" />
          </div>
          <p className="text-2xl font-bold text-emerald-600">{ordersByStatus['completed'] || 0}</p>
        </div>
        <div className="bg-white rounded-xl border border-slate-200 p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-slate-600">STAT</span>
            <Zap className="w-4 h-4 text-red-500" />
          </div>
          <p className="text-2xl font-bold text-red-600">
            {mockOrders.filter((o) => o.priority === 'stat').length}
          </p>
        </div>
      </div>

      {/* Order Type Summary */}
      <div className="bg-white rounded-xl border border-slate-200 p-6">
        <h2 className="text-lg font-bold text-slate-900 mb-4">Orders by Type</h2>
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
          {Object.entries(ordersByType).map(([type, count]) => {
            const color = getOrderTypeColor(type);
            return (
              <div key={type} className={`bg-${color}-50 rounded-lg p-3 text-center`}>
                <p className={`text-2xl font-bold text-${color}-700`}>{count}</p>
                <p className={`text-xs text-${color}-900 font-medium`}>
                  {getOrderTypeLabel(type)}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Orders List */}
      <div className="space-y-3">
        {sortedOrders.map((order) => {
          const typeColor = getOrderTypeColor(order.type);
          const priorityColor = getPriorityColor(order.priority);
          const statusColor = getStatusColor(order.status);
          const PriorityIcon = getPriorityIcon(order.priority);
          const StatusIcon = getStatusIcon(order.status);

          return (
            <div
              key={order.id}
              className={`bg-white rounded-xl border-2 ${
                order.priority === 'stat' ? 'border-red-500' : 'border-slate-200'
              } p-5`}
            >
              {order.priority === 'stat' && (
                <div className="bg-red-100 border-l-4 border-red-600 p-2 rounded mb-3">
                  <div className="flex items-center gap-2">
                    <Zap className="w-4 h-4 text-red-600" />
                    <p className="text-xs font-bold text-red-900">STAT ORDER - IMMEDIATE ATTENTION REQUIRED</p>
                  </div>
                </div>
              )}

              <div className="flex items-start gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-3 flex-wrap">
                    <span
                      className={`px-2 py-1 bg-${typeColor}-100 text-${typeColor}-900 text-xs font-bold rounded`}
                    >
                      {getOrderTypeLabel(order.type).toUpperCase()}
                    </span>
                    <span
                      className={`px-2 py-1 bg-${priorityColor}-100 text-${priorityColor}-900 text-xs font-bold rounded flex items-center gap-1`}
                    >
                      <PriorityIcon className="w-3 h-3" />
                      {order.priority.toUpperCase()}
                    </span>
                    <span
                      className={`px-2 py-1 bg-${statusColor}-100 text-${statusColor}-900 text-xs font-bold rounded flex items-center gap-1`}
                    >
                      <StatusIcon className="w-3 h-3" />
                      {order.status.toUpperCase()}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 mb-2">{order.description}</h3>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs text-slate-600">
                    <div>
                      <span className="text-slate-500">Order ID:</span>{' '}
                      <span className="font-mono font-medium">{order.id}</span>
                    </div>
                    <div>
                      <span className="text-slate-500">Patient:</span>{' '}
                      <button
                        onClick={() => onViewPatient(order.patientId)}
                        className="text-blue-600 hover:text-blue-700 font-medium hover:underline"
                      >
                        {getPatientName(order.patientId)}
                      </button>
                    </div>
                    <div>
                      <span className="text-slate-500">Patient ID:</span>{' '}
                      <span className="font-medium">{order.patientId}</span>
                    </div>
                    <div>
                      <span className="text-slate-500">Ordered By:</span>{' '}
                      <span className="font-medium">{order.orderedBy}</span>
                    </div>
                    <div className="sm:col-span-2">
                      <span className="text-slate-500">Ordered:</span>{' '}
                      <span>{new Date(order.orderedDate).toLocaleString()}</span>
                    </div>
                    {order.linkedResourceId && (
                      <div className="sm:col-span-2">
                        <span className="text-slate-500">Linked Resource:</span>{' '}
                        <span className="font-mono font-medium">{order.linkedResourceId}</span>
                      </div>
                    )}
                  </div>

                  {/* Order Timeline */}
                  <div className="mt-4 bg-slate-50 rounded-lg p-3">
                    <div className="flex items-center gap-2">
                      <div
                        className={`w-6 h-6 rounded-full ${
                          order.status !== 'pending' ? 'bg-emerald-500' : 'bg-slate-300'
                        } flex items-center justify-center text-white text-xs`}
                      >
                        {order.status !== 'pending' ? '✓' : '1'}
                      </div>
                      <div className="flex-1 h-1 bg-slate-300">
                        <div
                          className={`h-full ${
                            order.status === 'completed' ? 'bg-emerald-500' : 'bg-slate-300'
                          }`}
                          style={{
                            width:
                              order.status === 'completed'
                                ? '100%'
                                : order.status === 'in-progress'
                                ? '50%'
                                : '0%',
                          }}
                        ></div>
                      </div>
                      <div
                        className={`w-6 h-6 rounded-full ${
                          order.status === 'completed' ? 'bg-emerald-500' : 'bg-slate-300'
                        } flex items-center justify-center text-white text-xs`}
                      >
                        {order.status === 'completed' ? '✓' : '2'}
                      </div>
                    </div>
                    <div className="flex justify-between mt-1 text-xs">
                      <span
                        className={
                          order.status !== 'pending'
                            ? 'text-emerald-700 font-semibold'
                            : 'text-slate-500'
                        }
                      >
                        Received
                      </span>
                      <span
                        className={
                          order.status === 'completed'
                            ? 'text-emerald-700 font-semibold'
                            : 'text-slate-500'
                        }
                      >
                        Completed
                      </span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => onViewPatient(order.patientId)}
                  className="flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors whitespace-nowrap"
                >
                  <Eye className="w-4 h-4" />
                  <span>View Patient</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Info Box */}
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
        <div className="flex gap-3">
          <ClipboardList className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
          <div>
            <h3 className="font-semibold text-blue-900 mb-2">
              Centralized Order Management System
            </h3>
            <p className="text-sm text-blue-800 mb-3">
              All orders (lab, imaging, medications, procedures, consults) are tracked in one unified
              system. STAT orders are immediately flagged for urgent attention, and every order
              generates a complete audit trail from creation to completion.
            </p>
            <ul className="text-sm text-blue-800 space-y-1">
              <li>✓ Real-time status tracking</li>
              <li>✓ Priority-based workflow</li>
              <li>✓ Automatic department routing</li>
              <li>✓ Duplicate order detection</li>
              <li>✓ Integration with inventory and billing</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
