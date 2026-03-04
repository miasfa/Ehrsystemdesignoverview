import { useState } from 'react';
import { useHospitalStore } from './store';
import { FileImage, AlertTriangle, Clock, CheckCircle, User } from 'lucide-react';

export function Radiology() {
  const orders = useHospitalStore((state) => state.orders);
  const patients = useHospitalStore((state) => state.patients);
  const currentUser = useHospitalStore((state) => state.currentUser);
  const updateOrderStatus = useHospitalStore((state) => state.updateOrderStatus);
  const submitOrderResult = useHospitalStore((state) => state.submitOrderResult);

  const [showResultForm, setShowResultForm] = useState(false);
  const [selectedOrderId, setSelectedOrderId] = useState<string | null>(null);
  const [resultForm, setResultForm] = useState({
    result: '',
    isCritical: false,
    criticalAckName: '',
  });

  const canEdit = currentUser?.permissions.editRadiology;

  const pendingOrders = orders.filter((o) => o.status === 'pending');
  const inProgressOrders = orders.filter((o) => o.status === 'in-progress');
  const completedOrders = orders.filter((o) => o.status === 'completed');

  const handleAcceptOrder = (orderId: string) => {
    if (!currentUser) return;
    updateOrderStatus(orderId, 'in-progress');
    alert('✓ Imaging order accepted and moved to In Progress queue');
  };

  const handleOpenResultForm = (orderId: string) => {
    setSelectedOrderId(orderId);
    setShowResultForm(true);
    setResultForm({ result: '', isCritical: false, criticalAckName: '' });
  };

  const handleSubmitResult = () => {
    if (!selectedOrderId || !currentUser) return;

    if (resultForm.isCritical && !resultForm.criticalAckName.trim()) {
      alert('❌ Critical findings require name acknowledgment before submission!');
      return;
    }

    submitOrderResult(
      selectedOrderId,
      {
        result: resultForm.result,
        isCritical: resultForm.isCritical,
        resultBy: currentUser.id,
      },
      resultForm.isCritical ? resultForm.criticalAckName : undefined
    );

    setShowResultForm(false);
    setSelectedOrderId(null);
    
    if (resultForm.isCritical) {
      alert('🚨 Critical finding reported! CRITICAL notification sent to ordering physician.');
    } else {
      alert('✓ Radiology report submitted successfully!');
    }
  };

  const renderOrderCard = (order: typeof orders[0], showActions: boolean = false) => {
    const patient = patients.find((p) => p.id === order.patientId);
    
    return (
      <div
        key={order.id}
        className={`border rounded-xl p-4 ${
          order.result?.isCritical 
            ? 'bg-red-50 border-red-300' 
            : 'bg-white border-slate-200'
        }`}
      >
        <div className="flex items-start justify-between mb-3">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <h4 className="font-semibold text-slate-900">{order.description}</h4>
              {order.result?.isCritical && (
                <span className="px-2 py-1 bg-red-600 text-white text-xs font-bold rounded-full animate-pulse">
                  CRITICAL FINDING
                </span>
              )}
            </div>
            <div className="text-sm text-slate-600 space-y-1">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span><strong>Patient:</strong> {patient?.name} ({order.patientId})</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span><strong>Ordered:</strong> {new Date(order.orderedAt).toLocaleString()}</span>
              </div>
              <div>
                <strong>Order ID:</strong> {order.id}
              </div>
              <div>
                <strong>Priority:</strong> 
                <span className={`ml-2 px-2 py-0.5 rounded text-xs font-medium ${
                  order.priority === 'EMERGENCY' ? 'bg-red-100 text-red-700' :
                  order.priority === 'URGENT' ? 'bg-amber-100 text-amber-700' :
                  'bg-blue-100 text-blue-700'
                }`}>
                  {order.priority}
                </span>
              </div>
            </div>
          </div>

          <div className="text-right">
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${
              order.status === 'completed' ? 'bg-emerald-100 text-emerald-700' :
              order.status === 'in-progress' ? 'bg-blue-100 text-blue-700' :
              order.status === 'cancelled' ? 'bg-red-100 text-red-700' :
              'bg-amber-100 text-amber-700'
            }`}>
              {order.status.toUpperCase()}
            </span>
          </div>
        </div>

        {/* Result Display */}
        {order.result && (
          <div className={`mt-3 p-3 rounded-lg ${
            order.result.isCritical ? 'bg-red-100 border-2 border-red-400' : 'bg-slate-50 border border-slate-200'
          }`}>
            <div className="flex items-center gap-2 mb-2">
              {order.result.isCritical && <AlertTriangle className="w-5 h-5 text-red-600" />}
              <strong className={order.result.isCritical ? 'text-red-900' : 'text-slate-900'}>
                Radiology Report:
              </strong>
            </div>
            <p className="text-sm text-slate-700 whitespace-pre-wrap mb-2">{order.result.result}</p>
            <div className="text-xs text-slate-500">
              Reported by: {order.result.resultBy} at {new Date(order.result.resultAt!).toLocaleString()}
            </div>
            {order.result.isCritical && order.result.criticalAckName && (
              <div className="mt-2 pt-2 border-t border-red-200">
                <div className="flex items-center gap-2 text-xs text-red-800">
                  <CheckCircle className="w-4 h-4" />
                  <span><strong>Critical Finding Acknowledged by:</strong> {order.result.criticalAckName}</span>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Action Buttons */}
        {showActions && canEdit && (
          <div className="flex gap-2 mt-3">
            {order.status === 'pending' && (
              <button
                onClick={() => handleAcceptOrder(order.id)}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm"
              >
                Accept Order
              </button>
            )}
            {order.status === 'in-progress' && (
              <button
                onClick={() => handleOpenResultForm(order.id)}
                className="px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors text-sm"
              >
                Submit Report
              </button>
            )}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Radiology & Imaging</h2>
          <p className="text-sm text-slate-600 mt-1">
            Pending: {pendingOrders.length} | In Progress: {inProgressOrders.length} | Completed: {completedOrders.length}
          </p>
        </div>
      </div>

      {/* Critical Finding Warning */}
      <div className="bg-red-50 border border-red-200 rounded-xl p-4">
        <div className="flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 text-red-600 mt-0.5" />
          <div>
            <h3 className="font-semibold text-red-900 mb-1">Critical Finding Protocol</h3>
            <p className="text-sm text-red-800">
              Critical imaging findings (e.g., pneumothorax, intracranial hemorrhage, aortic dissection) require 
              <strong> mandatory radiologist name acknowledgment</strong> before submission. 
              A CRITICAL notification will be immediately sent to the ordering physician.
            </p>
          </div>
        </div>
      </div>

      {/* Result Submission Modal */}
      {showResultForm && selectedOrderId && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 overflow-y-auto">
          <div className="bg-white rounded-xl p-6 max-w-3xl w-full my-8">
            <h3 className="text-xl font-bold text-slate-900 mb-4">Submit Radiology Report</h3>
            
            {/* Order Info */}
            <div className="bg-slate-50 rounded-lg p-3 mb-4">
              <p className="text-sm text-slate-600">
                <strong>Study:</strong> {orders.find((o) => o.id === selectedOrderId)?.description}
              </p>
              <p className="text-sm text-slate-600">
                <strong>Patient:</strong> {patients.find((p) => p.id === orders.find((o) => o.id === selectedOrderId)?.patientId)?.name}
              </p>
            </div>

            <div className="space-y-4 mb-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Radiology Report</label>
                <textarea
                  value={resultForm.result}
                  onChange={(e) => setResultForm({ ...resultForm, result: e.target.value })}
                  rows={10}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 font-mono text-sm"
                  placeholder="TECHNIQUE: ...&#10;&#10;FINDINGS:&#10;&#10;IMPRESSION:"
                />
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={resultForm.isCritical}
                    onChange={(e) => setResultForm({ ...resultForm, isCritical: e.target.checked })}
                    className="mt-1"
                  />
                  <div>
                    <div className="font-semibold text-amber-900">Mark as Critical Finding</div>
                    <p className="text-sm text-amber-800 mt-1">
                      Check this box if the finding is life-threatening or requires immediate clinical action
                      (e.g., pneumothorax, acute hemorrhage, bowel perforation, aortic dissection)
                    </p>
                  </div>
                </label>
              </div>

              {/* Critical Acknowledgment */}
              {resultForm.isCritical && (
                <div className="bg-red-50 border-2 border-red-400 rounded-lg p-4 animate-in fade-in slide-in-from-top-2">
                  <div className="flex items-center gap-2 mb-3">
                    <AlertTriangle className="w-5 h-5 text-red-600" />
                    <h4 className="font-semibold text-red-900">Critical Finding Acknowledgment Required</h4>
                  </div>
                  <label className="block text-sm font-medium text-red-900 mb-2">
                    Enter Your Full Name (Radiologist) to Acknowledge Critical Finding *
                  </label>
                  <input
                    type="text"
                    value={resultForm.criticalAckName}
                    onChange={(e) => setResultForm({ ...resultForm, criticalAckName: e.target.value })}
                    className="w-full px-3 py-2 border-2 border-red-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                    placeholder="Type your full name here..."
                  />
                  <p className="text-xs text-red-800 mt-2">
                    By entering your name, you acknowledge that you have identified a critical finding and understand 
                    that the ordering physician will be immediately notified via CRITICAL alert.
                  </p>
                </div>
              )}
            </div>

            <div className="flex gap-3 justify-end">
              <button
                onClick={() => {
                  setShowResultForm(false);
                  setSelectedOrderId(null);
                }}
                className="px-4 py-2 border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmitResult}
                disabled={!resultForm.result.trim()}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  resultForm.isCritical
                    ? 'bg-red-600 hover:bg-red-700 text-white'
                    : 'bg-blue-600 hover:bg-blue-700 text-white'
                } disabled:opacity-50 disabled:cursor-not-allowed`}
              >
                {resultForm.isCritical ? '🚨 Submit Critical Finding' : 'Submit Report'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Queue Sections */}
      <div className="space-y-6">
        {/* Pending Orders */}
        <div>
          <h3 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
            <Clock className="w-5 h-5 text-amber-600" />
            Pending Studies ({pendingOrders.length})
          </h3>
          <div className="space-y-3">
            {pendingOrders.map((order) => renderOrderCard(order, true))}
            {pendingOrders.length === 0 && (
              <div className="text-center py-8 bg-white rounded-xl border border-slate-200">
                <p className="text-slate-400">No pending imaging orders</p>
              </div>
            )}
          </div>
        </div>

        {/* In Progress Orders */}
        <div>
          <h3 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
            <FileImage className="w-5 h-5 text-blue-600" />
            In Progress ({inProgressOrders.length})
          </h3>
          <div className="space-y-3">
            {inProgressOrders.map((order) => renderOrderCard(order, true))}
            {inProgressOrders.length === 0 && (
              <div className="text-center py-8 bg-white rounded-xl border border-slate-200">
                <p className="text-slate-400">No studies in progress</p>
              </div>
            )}
          </div>
        </div>

        {/* Completed Orders */}
        <div>
          <h3 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-emerald-600" />
            Completed ({completedOrders.length})
          </h3>
          <div className="space-y-3">
            {completedOrders.slice(0, 10).map((order) => renderOrderCard(order, false))}
            {completedOrders.length === 0 && (
              <div className="text-center py-8 bg-white rounded-xl border border-slate-200">
                <p className="text-slate-400">No completed studies</p>
              </div>
            )}
            {completedOrders.length > 10 && (
              <p className="text-center text-sm text-slate-500 mt-3">
                Showing 10 of {completedOrders.length} completed studies
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}