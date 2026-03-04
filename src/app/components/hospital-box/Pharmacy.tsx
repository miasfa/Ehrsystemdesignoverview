import { useState } from 'react';
import { useHospitalStore } from './store';
import { Pill, AlertTriangle, Clock, CheckCircle, User, ShieldAlert } from 'lucide-react';

export function Pharmacy() {
  const orders = useHospitalStore((state) => state.orders);
  const patients = useHospitalStore((state) => state.patients);
  const inventory = useHospitalStore((state) => state.inventory);
  const currentUser = useHospitalStore((state) => state.currentUser);
  const users = useHospitalStore((state) => state.users);
  
  const updateOrderStatus = useHospitalStore((state) => state.updateOrderStatus);
  const dispenseMedication = useHospitalStore((state) => state.dispenseMedication);

  // Filter for medication orders only
  const medicationOrders = orders.filter((o) => o.type === 'medication') as any[];

  const [showDispenseForm, setShowDispenseForm] = useState(false);
  const [selectedMedicationOrderId, setSelectedMedicationOrderId] = useState<string | null>(null);
  const [dispenseForm, setDispenseForm] = useState({
    quantity: 1,
    witnessId: '',
    witnessPIN: '',
  });

  const canDispense = currentUser?.permissions.dispensePharmacy;

  const pendingOrders = medicationOrders.filter((mo) => mo.status === 'pending');
  const dispensedOrders = medicationOrders.filter((mo) => (mo as any).dispensedAt);

  const handleAcceptOrder = (orderId: string) => {
    if (!currentUser) return;
    updateOrderStatus(orderId, 'in-progress');
    alert('✓ Medication order accepted');
  };

  const handleOpenDispenseForm = (medicationOrderId: string) => {
    const medOrder = medicationOrders.find((mo) => mo.id === medicationOrderId);
    setSelectedMedicationOrderId(medicationOrderId);
    setShowDispenseForm(true);
    setDispenseForm({ 
      quantity: 1, 
      witnessId: '',
      witnessPIN: '',
    });
  };

  const handleDispense = () => {
    if (!selectedMedicationOrderId || !currentUser) return;

    const medOrder = medicationOrders.find((mo) => mo.id === selectedMedicationOrderId);
    if (!medOrder) return;

    const medication = inventory.find((item) => item.id === medOrder.medicationId);
    
    // Check if controlled substance
    if (medication?.isControlled) {
      if (!dispenseForm.witnessId || !dispenseForm.witnessPIN) {
        alert('❌ Controlled substance requires witness signature and PIN!');
        return;
      }

      // Verify witness PIN
      const witness = users.find((u) => u.id === dispenseForm.witnessId);
      if (!witness || witness.pin !== dispenseForm.witnessPIN) {
        alert('❌ Invalid witness PIN! Controlled substance dispensing blocked.');
        return;
      }

      if (witness.id === currentUser.id) {
        alert('❌ Witness must be a different person! Self-witnessing is not allowed.');
        return;
      }
    }

    dispenseMedication(
      selectedMedicationOrderId,
      currentUser.id,
      medication?.isControlled ? dispenseForm.witnessId : undefined,
      medication?.isControlled ? dispenseForm.witnessPIN : undefined
    );

    setShowDispenseForm(false);
    setSelectedMedicationOrderId(null);
    
    if (medication?.isControlled) {
      alert('✓ Controlled substance dispensed with dual signature verification!');
    } else {
      alert('✓ Medication dispensed successfully!');
    }
  };

  const renderMedicationOrderCard = (medOrder: typeof medicationOrders[0], showActions: boolean = false) => {
    const order = orders.find((o) => o.id === medOrder.id);
    const patient = patients.find((p) => p.id === order?.patientId);
    const medication = inventory.find((item) => item.id === medOrder.medicationId);
    const witness = medOrder.witnessId ? users.find((u) => u.id === medOrder.witnessId) : null;
    
    return (
      <div
        key={medOrder.id}
        className={`border rounded-xl p-4 ${
          medication?.isControlled 
            ? 'bg-amber-50 border-amber-300 border-2' 
            : 'bg-white border-slate-200'
        }`}
      >
        <div className="flex items-start justify-between mb-3">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <h4 className="font-semibold text-slate-900">{order?.description || 'Medication'}</h4>
              {medication?.isControlled && (
                <span className="px-2 py-1 bg-red-600 text-white text-xs font-bold rounded-full flex items-center gap-1">
                  <ShieldAlert className="w-3 h-3" />
                  CONTROLLED
                </span>
              )}
            </div>
            <div className="text-sm text-slate-600 space-y-1">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span><strong>Patient:</strong> {patient?.name} ({order?.patientId})</span>
              </div>
              <div>
                <strong>Medication:</strong> {medication?.name || medOrder.medicationId}
              </div>
              <div>
                <strong>Dosage:</strong> {medOrder.dosage} | <strong>Frequency:</strong> {medOrder.frequency}
              </div>
              <div>
                <strong>Duration:</strong> {medOrder.duration}
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span><strong>Ordered:</strong> {new Date(order?.orderedAt || '').toLocaleString()}</span>
              </div>
              <div>
                <strong>Order ID:</strong> {medOrder.id}
              </div>
            </div>

            {/* Stock Warning */}
            {medication && medication.currentStock < medication.minimumStock && (
              <div className="mt-2 bg-red-100 border border-red-300 rounded-lg p-2 text-xs text-red-800">
                <AlertTriangle className="w-4 h-4 inline mr-1" />
                <strong>Low Stock Warning:</strong> {medication.currentStock} units remaining (Min: {medication.minimumStock})
              </div>
            )}
          </div>

          <div className="text-right">
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${
              medOrder.dispensedAt ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'
            }`}>
              {medOrder.dispensedAt ? 'DISPENSED' : 'PENDING'}
            </span>
          </div>
        </div>

        {/* Dispensing Info */}
        {medOrder.dispensedAt && (
          <div className="mt-3 p-3 bg-slate-50 border border-slate-200 rounded-lg">
            <div className="text-sm text-slate-700 space-y-1">
              <div>
                <strong>Dispensed:</strong> {new Date(medOrder.dispensedAt).toLocaleString()}
              </div>
              <div>
                <strong>Dispensed by:</strong> {medOrder.dispensedBy}
              </div>
              <div>
                <strong>Quantity:</strong> {medOrder.quantityDispensed} unit(s)
              </div>
              
              {/* Dual Signature Display */}
              {medication?.isControlled && witness && (
                <div className="mt-2 pt-2 border-t border-slate-300 bg-amber-50 -m-3 p-3 rounded-b-lg">
                  <div className="flex items-center gap-2 text-amber-900 font-semibold mb-1">
                    <CheckCircle className="w-4 h-4" />
                    Dual Signature Verified
                  </div>
                  <div className="text-xs text-amber-800">
                    <div><strong>Pharmacist:</strong> {medOrder.dispensedBy}</div>
                    <div><strong>Witness:</strong> {witness.name} ({witness.id})</div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Action Buttons */}
        {showActions && canDispense && !medOrder.dispensedAt && (
          <div className="flex gap-2 mt-3">
            {order?.status === 'pending' && (
              <button
                onClick={() => handleAcceptOrder(medOrder.id)}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm"
              >
                Accept Order
              </button>
            )}
            {order?.status === 'in-progress' && (
              <button
                onClick={() => handleOpenDispenseForm(medOrder.id)}
                className={`px-4 py-2 rounded-lg transition-colors text-sm ${
                  medication?.isControlled
                    ? 'bg-amber-600 hover:bg-amber-700 text-white'
                    : 'bg-emerald-600 hover:bg-emerald-700 text-white'
                }`}
              >
                {medication?.isControlled ? '🔐 Dispense (Dual Signature)' : 'Dispense'}
              </button>
            )}
          </div>
        )}
      </div>
    );
  };

  const selectedMedOrder = medicationOrders.find((mo) => mo.id === selectedMedicationOrderId);
  const selectedMedication = selectedMedOrder ? inventory.find((item) => item.id === selectedMedOrder.medicationId) : null;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Pharmacy</h2>
          <p className="text-sm text-slate-600 mt-1">
            Pending: {pendingOrders.length} | Dispensed: {dispensedOrders.length}
          </p>
        </div>
      </div>

      {/* Controlled Substance Warning */}
      <div className="bg-red-50 border border-red-200 rounded-xl p-4">
        <div className="flex items-start gap-3">
          <ShieldAlert className="w-5 h-5 text-red-600 mt-0.5" />
          <div>
            <h3 className="font-semibold text-red-900 mb-1">Controlled Substance Protocol</h3>
            <p className="text-sm text-red-800">
              Controlled substances (opioids, benzodiazepines) require <strong>dual signature verification</strong> before dispensing. 
              A second staff member must witness and enter their PIN. Self-witnessing is blocked by the system.
            </p>
          </div>
        </div>
      </div>

      {/* Dispense Modal */}
      {showDispenseForm && selectedMedicationOrderId && selectedMedOrder && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl p-6 max-w-2xl w-full">
            <h3 className="text-xl font-bold text-slate-900 mb-4">Dispense Medication</h3>
            
            {/* Medication Info */}
            <div className={`rounded-lg p-4 mb-4 ${
              selectedMedication?.isControlled ? 'bg-amber-50 border-2 border-amber-400' : 'bg-slate-50 border border-slate-200'
            }`}>
              <div className="flex items-center gap-2 mb-2">
                {selectedMedication?.isControlled && <ShieldAlert className="w-5 h-5 text-red-600" />}
                <h4 className="font-semibold text-slate-900">{selectedMedication?.name}</h4>
              </div>
              <div className="text-sm text-slate-600 space-y-1">
                <div><strong>Patient:</strong> {patients.find((p) => p.id === orders.find((o) => o.id === selectedMedOrder.id)?.patientId)?.name}</div>
                <div><strong>Dosage:</strong> {selectedMedOrder.dosage} | <strong>Frequency:</strong> {selectedMedOrder.frequency}</div>
                <div><strong>Duration:</strong> {selectedMedOrder.duration}</div>
                <div><strong>Available Stock:</strong> {selectedMedication?.currentStock} units</div>
              </div>
            </div>

            <div className="space-y-4 mb-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Quantity to Dispense</label>
                <input
                  type="number"
                  min="1"
                  max={selectedMedication?.currentStock || 1}
                  value={dispenseForm.quantity}
                  onChange={(e) => setDispenseForm({ ...dispenseForm, quantity: Number(e.target.value) })}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Dual Signature Section for Controlled Substances */}
              {selectedMedication?.isControlled && (
                <div className="bg-red-50 border-2 border-red-400 rounded-lg p-4 animate-in fade-in slide-in-from-top-2">
                  <div className="flex items-center gap-2 mb-3">
                    <ShieldAlert className="w-5 h-5 text-red-600" />
                    <h4 className="font-semibold text-red-900">Dual Signature Required</h4>
                  </div>
                  
                  <p className="text-sm text-red-800 mb-4">
                    <strong>CONTROLLED SUBSTANCE:</strong> This medication requires verification by a second staff member.
                    The witness must be physically present and enter their own credentials.
                  </p>

                  <div className="space-y-3">
                    <div>
                      <label className="block text-sm font-medium text-red-900 mb-2">
                        Witness Staff Member *
                      </label>
                      <select
                        value={dispenseForm.witnessId}
                        onChange={(e) => setDispenseForm({ ...dispenseForm, witnessId: e.target.value })}
                        className="w-full px-3 py-2 border-2 border-red-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                      >
                        <option value="">-- Select Witness --</option>
                        {users
                          .filter((u) => u.id !== currentUser?.id) // Can't witness yourself
                          .map((user) => (
                            <option key={user.id} value={user.id}>
                              {user.name} - {user.role} ({user.id})
                            </option>
                          ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-red-900 mb-2">
                        Witness PIN *
                      </label>
                      <input
                        type="password"
                        value={dispenseForm.witnessPIN}
                        onChange={(e) => setDispenseForm({ ...dispenseForm, witnessPIN: e.target.value })}
                        className="w-full px-3 py-2 border-2 border-red-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                        placeholder="Witness must enter their own PIN"
                        maxLength={4}
                      />
                    </div>
                  </div>

                  <div className="mt-3 p-3 bg-red-100 rounded-lg">
                    <p className="text-xs text-red-900">
                      <strong>Security Note:</strong> The witness must physically verify that the correct medication 
                      and quantity is being dispensed. Self-witnessing is blocked. Invalid PIN will prevent dispensing.
                    </p>
                  </div>
                </div>
              )}
            </div>

            <div className="flex gap-3 justify-end">
              <button
                onClick={() => {
                  setShowDispenseForm(false);
                  setSelectedMedicationOrderId(null);
                }}
                className="px-4 py-2 border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleDispense}
                disabled={dispenseForm.quantity < 1 || dispenseForm.quantity > (selectedMedication?.currentStock || 0)}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  selectedMedication?.isControlled
                    ? 'bg-red-600 hover:bg-red-700 text-white'
                    : 'bg-emerald-600 hover:bg-emerald-700 text-white'
                } disabled:opacity-50 disabled:cursor-not-allowed`}
              >
                {selectedMedication?.isControlled ? '🔐 Dispense with Dual Signature' : 'Dispense Medication'}
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
            Pending Orders ({pendingOrders.length})
          </h3>
          <div className="space-y-3">
            {pendingOrders.map((medOrder) => renderMedicationOrderCard(medOrder, true))}
            {pendingOrders.length === 0 && (
              <div className="text-center py-8 bg-white rounded-xl border border-slate-200">
                <p className="text-slate-400">No pending medication orders</p>
              </div>
            )}
          </div>
        </div>

        {/* Dispensed Orders */}
        <div>
          <h3 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-emerald-600" />
            Dispensed ({dispensedOrders.length})
          </h3>
          <div className="space-y-3">
            {dispensedOrders.slice(0, 10).map((medOrder) => renderMedicationOrderCard(medOrder, false))}
            {dispensedOrders.length === 0 && (
              <div className="text-center py-8 bg-white rounded-xl border border-slate-200">
                <p className="text-slate-400">No dispensed medications</p>
              </div>
            )}
            {dispensedOrders.length > 10 && (
              <p className="text-center text-sm text-slate-500 mt-3">
                Showing 10 of {dispensedOrders.length} dispensed orders
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}