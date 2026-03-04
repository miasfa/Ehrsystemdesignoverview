import { useState } from 'react';
import { useHospitalStore } from './store';
import { Stethoscope, FileText, Zap, Plus, AlertTriangle, CheckCircle } from 'lucide-react';

export function ClinicalStation() {
  const encounters = useHospitalStore((state) => state.encounters);
  const patients = useHospitalStore((state) => state.patients);
  const soapNotes = useHospitalStore((state) => state.soapNotes);
  const diagnoses = useHospitalStore((state) => state.diagnoses);
  const orders = useHospitalStore((state) => state.orders);
  const quickProtocols = useHospitalStore((state) => state.quickProtocols);
  const currentUser = useHospitalStore((state) => state.currentUser);

  const createSOAPNote = useHospitalStore((state) => state.createSOAPNote);
  const signSOAPNote = useHospitalStore((state) => state.signSOAPNote);
  const addDiagnosis = useHospitalStore((state) => state.addDiagnosis);
  const createOrder = useHospitalStore((state) => state.createOrder);
  const applyQuickProtocol = useHospitalStore((state) => state.applyQuickProtocol);
  const completeEncounter = useHospitalStore((state) => state.completeEncounter);

  const [selectedEncounterId, setSelectedEncounterId] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'overview' | 'soap' | 'diagnosis' | 'orders'>('overview');
  
  const [soapForm, setSoapForm] = useState({
    subjective: '',
    objective: '',
    assessment: '',
    plan: '',
  });

  const [diagnosisForm, setDiagnosisForm] = useState({
    code: '',
    description: '',
    isPrimary: true,
  });

  const [orderForm, setOrderForm] = useState({
    type: 'lab' as 'lab' | 'imaging' | 'medication' | 'procedure',
    description: '',
    priority: 'ROUTINE' as 'ROUTINE' | 'URGENT' | 'EMERGENCY',
  });

  const canEdit = currentUser?.permissions.editClinical;
  const canCreateOrders = currentUser?.permissions.createOrders;

  // Filter in the component, not in the selector
  const activeEncounters = encounters.filter((e) => e.status === 'active');
  const selectedEncounter = activeEncounters.find((e) => e.id === selectedEncounterId);
  const selectedPatient = selectedEncounter ? patients.find((p) => p.id === selectedEncounter.patientId) : null;
  const encounterSOAP = soapNotes.filter((s) => s.encounterId === selectedEncounterId);
  const encounterDiagnoses = diagnoses.filter((d) => d.encounterId === selectedEncounterId);
  const encounterOrders = orders.filter((o) => o.encounterId === selectedEncounterId);

  const handleCreateSOAP = () => {
    if (!selectedEncounterId || !currentUser) return;
    
    const note = createSOAPNote({
      encounterId: selectedEncounterId,
      patientId: selectedEncounter!.patientId,
      subjective: soapForm.subjective,
      objective: soapForm.objective,
      assessment: soapForm.assessment,
      plan: soapForm.plan,
      createdBy: currentUser.id,
    });

    setSoapForm({ subjective: '', objective: '', assessment: '', plan: '' });
    alert('✓ SOAP note created successfully!');
  };

  const handleAddDiagnosis = () => {
    if (!selectedEncounterId || !currentUser) return;

    addDiagnosis({
      encounterId: selectedEncounterId,
      patientId: selectedEncounter!.patientId,
      code: diagnosisForm.code,
      description: diagnosisForm.description,
      isPrimary: diagnosisForm.isPrimary,
      diagnosedBy: currentUser.id,
    });

    setDiagnosisForm({ code: '', description: '', isPrimary: true });
    alert('✓ Diagnosis added successfully!');
  };

  const handleCreateOrder = () => {
    if (!selectedEncounterId || !currentUser) return;

    createOrder({
      encounterId: selectedEncounterId,
      patientId: selectedEncounter!.patientId,
      type: orderForm.type,
      description: orderForm.description,
      priority: orderForm.priority,
      orderedBy: currentUser.id,
    });

    setOrderForm({ type: 'lab', description: '', priority: 'ROUTINE' });
    alert('✓ Order created! Notification sent to receiving department.');
  };

  const handleApplyProtocol = (protocolId: string) => {
    if (!selectedEncounterId || !currentUser) return;

    const protocol = quickProtocols.find((p) => p.id === protocolId);
    if (!protocol) return;

    if (confirm(`Apply "${protocol.name}" protocol? This will create diagnosis and ${protocol.orders.length} orders.`)) {
      applyQuickProtocol(selectedEncounterId, selectedEncounter!.patientId, protocolId);
      alert(`✓ ${protocol.name} applied successfully! Diagnosis and orders created.`);
      setActiveTab('orders');
    }
  };

  const handleCompleteEncounter = () => {
    if (!selectedEncounterId) return;

    if (confirm('Complete this encounter? An invoice will be automatically generated.')) {
      completeEncounter(selectedEncounterId);
      alert('✓ Encounter completed! Invoice generated automatically.');
      setSelectedEncounterId(null);
    }
  };

  // Check for antibiotic stewardship warning
  const hasInfectionDiagnosis = encounterDiagnoses.some((d) =>
    d.code.startsWith('A') || d.code.startsWith('B') || d.code.startsWith('J')
  );
  const hasAntibioticOrder = encounterOrders.some((o) =>
    o.description.toLowerCase().includes('antibiotic') ||
    o.description.toLowerCase().includes('amoxicillin') ||
    o.description.toLowerCase().includes('azithromycin') ||
    o.description.toLowerCase().includes('ciprofloxacin')
  );
  const showStewardshipWarning = hasAntibioticOrder && !hasInfectionDiagnosis;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Clinical Station</h2>
          <p className="text-sm text-slate-600 mt-1">Active Encounters: {activeEncounters.length}</p>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-6">
        {/* Patient Queue Sidebar */}
        <div className="col-span-3 space-y-2">
          <h3 className="font-semibold text-slate-900 mb-3">Active Patients</h3>
          {activeEncounters.map((encounter) => {
            const patient = patients.find((p) => p.id === encounter.patientId);
            return (
              <button
                key={encounter.id}
                onClick={() => setSelectedEncounterId(encounter.id)}
                className={`w-full text-left p-3 rounded-lg border-2 transition-all ${
                  selectedEncounterId === encounter.id
                    ? 'bg-blue-50 border-blue-500'
                    : 'bg-white border-slate-200 hover:border-blue-300'
                }`}
              >
                <div className="font-medium text-slate-900">{patient?.name}</div>
                <div className="text-xs text-slate-500 mt-1">{encounter.id}</div>
                <div className={`text-xs mt-1 px-2 py-0.5 rounded-full inline-block ${
                  encounter.priority === 'EMERGENCY'
                    ? 'bg-red-100 text-red-700'
                    : encounter.priority === 'URGENT'
                    ? 'bg-amber-100 text-amber-700'
                    : 'bg-blue-100 text-blue-700'
                }`}>
                  {encounter.priority}
                </div>
              </button>
            );
          })}
          {activeEncounters.length === 0 && (
            <div className="text-center py-8 text-slate-400 text-sm">No active encounters</div>
          )}
        </div>

        {/* Main Content Area */}
        <div className="col-span-9">
          {selectedEncounter && selectedPatient ? (
            <div className="space-y-6">
              {/* Patient Header */}
              <div className="bg-white rounded-xl p-5 border border-slate-200">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">{selectedPatient.name}</h3>
                    <p className="text-sm text-slate-600 mt-1">
                      {selectedPatient.gender === 'M' ? 'Male' : 'Female'} • 
                      {Math.floor((Date.now() - new Date(selectedPatient.dateOfBirth).getTime()) / (365.25 * 24 * 60 * 60 * 1000))} years old • 
                      {selectedPatient.id}
                    </p>
                    <p className="text-sm text-slate-600 mt-1">
                      <strong>Chief Complaint:</strong> {selectedEncounter.chiefComplaint}
                    </p>
                  </div>
                  {canEdit && (
                    <button
                      onClick={handleCompleteEncounter}
                      className="px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors"
                    >
                      Complete Encounter
                    </button>
                  )}
                </div>
              </div>

              {/* Antibiotic Stewardship Warning */}
              {showStewardshipWarning && (
                <div className="bg-amber-50 border-2 border-amber-400 rounded-xl p-4">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-amber-900 mb-1">⚠️ Antibiotic Stewardship Alert</h4>
                      <p className="text-sm text-amber-800">
                        Antibiotics have been ordered without an infection diagnosis. Please add appropriate ICD-10 code
                        (A00-B99 for infections, J00-J99 for respiratory infections).
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Quick Protocols */}
              <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-5 border border-purple-200">
                <div className="flex items-center gap-2 mb-3">
                  <Zap className="w-5 h-5 text-purple-600" />
                  <h4 className="font-semibold text-slate-900">Quick Protocols</h4>
                </div>
                <p className="text-sm text-slate-600 mb-3">
                  One-click order sets that automatically create diagnosis and orders
                </p>
                <div className="flex flex-wrap gap-2">
                  {quickProtocols.map((protocol) => (
                    <button
                      key={protocol.id}
                      onClick={() => handleApplyProtocol(protocol.id)}
                      disabled={!canCreateOrders}
                      className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {protocol.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Tabs */}
              <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
                <div className="flex border-b border-slate-200">
                  {['overview', 'soap', 'diagnosis', 'orders'].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab as typeof activeTab)}
                      className={`flex-1 px-4 py-3 font-medium capitalize ${
                        activeTab === tab
                          ? 'bg-blue-50 text-blue-700 border-b-2 border-blue-600'
                          : 'text-slate-600 hover:bg-slate-50'
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>

                <div className="p-6">
                  {/* Overview Tab */}
                  {activeTab === 'overview' && (
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-2">Encounter Summary</h4>
                        <div className="grid grid-cols-2 gap-3 text-sm">
                          <div>
                            <span className="text-slate-600">Status:</span>
                            <span className="ml-2 font-medium">{selectedEncounter.status}</span>
                          </div>
                          <div>
                            <span className="text-slate-600">Priority:</span>
                            <span className="ml-2 font-medium">{selectedEncounter.priority}</span>
                          </div>
                          <div>
                            <span className="text-slate-600">Start Time:</span>
                            <span className="ml-2 font-medium">{new Date(selectedEncounter.startTime).toLocaleString()}</span>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold text-slate-900 mb-2">Quick Stats</h4>
                        <div className="grid grid-cols-3 gap-3">
                          <div className="bg-blue-50 rounded-lg p-3">
                            <div className="text-2xl font-bold text-blue-700">{encounterSOAP.length}</div>
                            <div className="text-xs text-slate-600">SOAP Notes</div>
                          </div>
                          <div className="bg-purple-50 rounded-lg p-3">
                            <div className="text-2xl font-bold text-purple-700">{encounterDiagnoses.length}</div>
                            <div className="text-xs text-slate-600">Diagnoses</div>
                          </div>
                          <div className="bg-emerald-50 rounded-lg p-3">
                            <div className="text-2xl font-bold text-emerald-700">{encounterOrders.length}</div>
                            <div className="text-xs text-slate-600">Orders</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* SOAP Tab */}
                  {activeTab === 'soap' && (
                    <div className="space-y-4">
                      {canEdit && (
                        <div className="space-y-3 bg-slate-50 rounded-lg p-4">
                          <h4 className="font-semibold text-slate-900">Create SOAP Note</h4>
                          <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">Subjective</label>
                            <textarea
                              value={soapForm.subjective}
                              onChange={(e) => setSoapForm({ ...soapForm, subjective: e.target.value })}
                              rows={2}
                              className="w-full px-3 py-2 border border-slate-300 rounded-lg"
                              placeholder="Patient's reported symptoms..."
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">Objective</label>
                            <textarea
                              value={soapForm.objective}
                              onChange={(e) => setSoapForm({ ...soapForm, objective: e.target.value })}
                              rows={2}
                              className="w-full px-3 py-2 border border-slate-300 rounded-lg"
                              placeholder="Physical exam findings, vitals..."
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">Assessment</label>
                            <textarea
                              value={soapForm.assessment}
                              onChange={(e) => setSoapForm({ ...soapForm, assessment: e.target.value })}
                              rows={2}
                              className="w-full px-3 py-2 border border-slate-300 rounded-lg"
                              placeholder="Clinical impression..."
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">Plan</label>
                            <textarea
                              value={soapForm.plan}
                              onChange={(e) => setSoapForm({ ...soapForm, plan: e.target.value })}
                              rows={2}
                              className="w-full px-3 py-2 border border-slate-300 rounded-lg"
                              placeholder="Treatment plan..."
                            />
                          </div>
                          <button
                            onClick={handleCreateSOAP}
                            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                          >
                            Create SOAP Note
                          </button>
                        </div>
                      )}

                      <div className="space-y-3">
                        {encounterSOAP.map((note) => (
                          <div key={note.id} className="border border-slate-200 rounded-lg p-4">
                            <div className="flex items-center justify-between mb-3">
                              <span className="text-xs text-slate-500">{new Date(note.timestamp).toLocaleString()}</span>
                              {note.signed ? (
                                <span className="flex items-center gap-1 text-xs text-emerald-600">
                                  <CheckCircle className="w-3 h-3" />
                                  Signed
                                </span>
                              ) : (
                                <span className="text-xs text-amber-600">Unsigned</span>
                              )}
                            </div>
                            <div className="space-y-2 text-sm">
                              <div><strong>S:</strong> {note.subjective}</div>
                              <div><strong>O:</strong> {note.objective}</div>
                              <div><strong>A:</strong> {note.assessment}</div>
                              <div><strong>P:</strong> {note.plan}</div>
                            </div>
                          </div>
                        ))}
                        {encounterSOAP.length === 0 && (
                          <div className="text-center py-8 text-slate-400">No SOAP notes</div>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Diagnosis Tab */}
                  {activeTab === 'diagnosis' && (
                    <div className="space-y-4">
                      {canEdit && (
                        <div className="space-y-3 bg-slate-50 rounded-lg p-4">
                          <h4 className="font-semibold text-slate-900">Add Diagnosis</h4>
                          <div className="grid grid-cols-2 gap-3">
                            <div>
                              <label className="block text-sm font-medium text-slate-700 mb-1">ICD-10 Code</label>
                              <input
                                type="text"
                                value={diagnosisForm.code}
                                onChange={(e) => setDiagnosisForm({ ...diagnosisForm, code: e.target.value })}
                                className="w-full px-3 py-2 border border-slate-300 rounded-lg"
                                placeholder="e.g., B50.9"
                              />
                            </div>
                            <div>
                              <label className="block text-sm font-medium text-slate-700 mb-1">Description</label>
                              <input
                                type="text"
                                value={diagnosisForm.description}
                                onChange={(e) => setDiagnosisForm({ ...diagnosisForm, description: e.target.value })}
                                className="w-full px-3 py-2 border border-slate-300 rounded-lg"
                                placeholder="e.g., Malaria"
                              />
                            </div>
                          </div>
                          <label className="flex items-center gap-2 text-sm">
                            <input
                              type="checkbox"
                              checked={diagnosisForm.isPrimary}
                              onChange={(e) => setDiagnosisForm({ ...diagnosisForm, isPrimary: e.target.checked })}
                              className="rounded"
                            />
                            Primary Diagnosis
                          </label>
                          <button
                            onClick={handleAddDiagnosis}
                            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                          >
                            Add Diagnosis
                          </button>
                        </div>
                      )}

                      <div className="space-y-2">
                        {encounterDiagnoses.map((dx) => (
                          <div key={dx.id} className="border border-slate-200 rounded-lg p-3">
                            <div className="flex items-center gap-2 mb-1">
                              <span className="font-mono text-sm font-semibold text-blue-600">{dx.code}</span>
                              {dx.isPrimary && (
                                <span className="text-xs px-2 py-0.5 bg-blue-100 text-blue-700 rounded-full">Primary</span>
                              )}
                            </div>
                            <div className="text-sm text-slate-700">{dx.description}</div>
                            <div className="text-xs text-slate-500 mt-1">
                              {new Date(dx.diagnosedAt).toLocaleString()} by {dx.diagnosedBy}
                            </div>
                          </div>
                        ))}
                        {encounterDiagnoses.length === 0 && (
                          <div className="text-center py-8 text-slate-400">No diagnoses</div>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Orders Tab */}
                  {activeTab === 'orders' && (
                    <div className="space-y-4">
                      {canCreateOrders && (
                        <div className="space-y-3 bg-slate-50 rounded-lg p-4">
                          <h4 className="font-semibold text-slate-900">Create Order</h4>
                          <div className="grid grid-cols-3 gap-3">
                            <div>
                              <label className="block text-sm font-medium text-slate-700 mb-1">Type</label>
                              <select
                                value={orderForm.type}
                                onChange={(e) => setOrderForm({ ...orderForm, type: e.target.value as any })}
                                className="w-full px-3 py-2 border border-slate-300 rounded-lg"
                              >
                                <option value="lab">Lab</option>
                                <option value="imaging">Imaging</option>
                                <option value="medication">Medication</option>
                                <option value="procedure">Procedure</option>
                              </select>
                            </div>
                            <div>
                              <label className="block text-sm font-medium text-slate-700 mb-1">Priority</label>
                              <select
                                value={orderForm.priority}
                                onChange={(e) => setOrderForm({ ...orderForm, priority: e.target.value as any })}
                                className="w-full px-3 py-2 border border-slate-300 rounded-lg"
                              >
                                <option value="ROUTINE">Routine</option>
                                <option value="URGENT">Urgent</option>
                                <option value="EMERGENCY">Emergency</option>
                              </select>
                            </div>
                            <div className="col-span-3">
                              <label className="block text-sm font-medium text-slate-700 mb-1">Description</label>
                              <input
                                type="text"
                                value={orderForm.description}
                                onChange={(e) => setOrderForm({ ...orderForm, description: e.target.value })}
                                className="w-full px-3 py-2 border border-slate-300 rounded-lg"
                                placeholder="e.g., Complete Blood Count (CBC)"
                              />
                            </div>
                          </div>
                          <button
                            onClick={handleCreateOrder}
                            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                          >
                            Create Order
                          </button>
                        </div>
                      )}

                      <div className="space-y-2">
                        {encounterOrders.map((order) => (
                          <div key={order.id} className="border border-slate-200 rounded-lg p-3">
                            <div className="flex items-center justify-between mb-2">
                              <div className="flex items-center gap-2">
                                <span className="text-xs px-2 py-1 bg-slate-100 text-slate-700 rounded uppercase font-medium">
                                  {order.type}
                                </span>
                                <span className={`text-xs px-2 py-1 rounded ${
                                  order.status === 'completed' ? 'bg-emerald-100 text-emerald-700' :
                                  order.status === 'in-progress' ? 'bg-blue-100 text-blue-700' :
                                  order.status === 'cancelled' ? 'bg-red-100 text-red-700' :
                                  'bg-amber-100 text-amber-700'
                                }`}>
                                  {order.status}
                                </span>
                              </div>
                              <span className="text-xs text-slate-500">{order.id}</span>
                            </div>
                            <div className="text-sm font-medium text-slate-900 mb-1">{order.description}</div>
                            <div className="text-xs text-slate-500">
                              Ordered: {new Date(order.orderedAt).toLocaleString()}
                            </div>
                          </div>
                        ))}
                        {encounterOrders.length === 0 && (
                          <div className="text-center py-8 text-slate-400">No orders</div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-xl border border-slate-200 p-12 text-center">
              <Stethoscope className="w-16 h-16 mx-auto mb-4 text-slate-300" />
              <p className="text-slate-500">Select a patient from the queue to begin</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}