import { useState } from 'react';
import { useHospitalStore } from './store';
import { AlertTriangle, Activity, Heart, Thermometer, Wind, Droplet, Brain, Plus, Clock } from 'lucide-react';
import type { Vitals } from './types';

export function IntelligentTriage() {
  const patients = useHospitalStore((state) => state.patients);
  const triageQueue = useHospitalStore((state) => state.triageQueue);
  const encounters = useHospitalStore((state) => state.encounters);
  const createTriageEntry = useHospitalStore((state) => state.createTriageEntry);
  const createEncounter = useHospitalStore((state) => state.createEncounter);
  const currentUser = useHospitalStore((state) => state.currentUser);

  const [showTriageForm, setShowTriageForm] = useState(false);
  const [selectedPatientId, setSelectedPatientId] = useState('');
  const [chiefComplaint, setChiefComplaint] = useState('');
  const [vitals, setVitals] = useState<Vitals>({
    systolicBP: 120,
    diastolicBP: 80,
    heartRate: 75,
    temperature: 37.0,
    spO2: 98,
    respiratoryRate: 16,
    consciousness: 'alert' as const,
  });

  const canEdit = currentUser?.permissions.editTriage;

  const handleCreateTriage = () => {
    if (!selectedPatientId || !chiefComplaint || !currentUser) return;

    // Create encounter first
    const encounter = createEncounter({
      patientId: selectedPatientId,
      type: 'emergency',
      status: 'active',
      priority: 'ROUTINE', // Will be updated by triage
      assignedDoctorId: 'USR-001', // Default doctor
      chiefComplaint,
    });

    // Create triage entry (this will auto-calculate EWS and update encounter priority)
    createTriageEntry({
      patientId: selectedPatientId,
      encounterId: encounter.id,
      vitals,
      chiefComplaint,
      triageBy: currentUser.id,
    });

    // Reset form
    setSelectedPatientId('');
    setChiefComplaint('');
    setVitals({
      systolicBP: 120,
      diastolicBP: 80,
      heartRate: 75,
      temperature: 37.0,
      spO2: 98,
      respiratoryRate: 16,
      consciousness: 'alert',
    });
    setShowTriageForm(false);

    alert('✓ Triage entry created! EWS calculated automatically and patient routed to appropriate priority queue.');
  };

  // Sort triage queue by priority
  const sortedQueue = [...triageQueue].sort((a, b) => {
    const priorityOrder = { EMERGENCY: 0, URGENT: 1, ROUTINE: 2 };
    return priorityOrder[a.priority] - priorityOrder[b.priority];
  });

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'EMERGENCY':
        return 'bg-red-100 text-red-900 border-red-300';
      case 'URGENT':
        return 'bg-amber-100 text-amber-900 border-amber-300';
      case 'ROUTINE':
        return 'bg-blue-100 text-blue-900 border-blue-300';
      default:
        return 'bg-slate-100 text-slate-900 border-slate-300';
    }
  };

  const getEWSColor = (ews: number) => {
    if (ews >= 7) return 'text-red-600';
    if (ews >= 5) return 'text-amber-600';
    return 'text-emerald-600';
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Emergency Triage</h2>
          <p className="text-sm text-slate-600 mt-1">
            Patients in Queue: {triageQueue.length} | Emergency: {triageQueue.filter((t) => t.priority === 'EMERGENCY').length} | 
            Urgent: {triageQueue.filter((t) => t.priority === 'URGENT').length}
          </p>
        </div>
        {canEdit && (
          <button
            onClick={() => setShowTriageForm(true)}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Plus className="w-5 h-5" />
            New Triage Entry
          </button>
        )}
      </div>

      {/* EWS Information Card */}
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
        <div className="flex items-start gap-3">
          <Activity className="w-5 h-5 text-blue-600 mt-0.5" />
          <div>
            <h3 className="font-semibold text-blue-900 mb-1">Early Warning Score (EWS) System</h3>
            <p className="text-sm text-blue-800 mb-2">
              Vitals are automatically analyzed using the NHS Early Warning Score algorithm to calculate patient acuity.
            </p>
            <div className="flex gap-4 text-xs">
              <span className="text-emerald-700">• Score 0-4: <strong>ROUTINE</strong></span>
              <span className="text-amber-700">• Score 5-6: <strong>URGENT</strong></span>
              <span className="text-red-700">• Score 7+: <strong>EMERGENCY</strong></span>
            </div>
          </div>
        </div>
      </div>

      {/* Triage Form Modal */}
      {showTriageForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 overflow-y-auto">
          <div className="bg-white rounded-xl p-6 max-w-4xl w-full my-8">
            <h3 className="text-xl font-bold text-slate-900 mb-4">Create Triage Entry</h3>

            {/* Patient Selection */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-slate-700 mb-2">Select Patient *</label>
              <select
                value={selectedPatientId}
                onChange={(e) => setSelectedPatientId(e.target.value)}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">-- Choose Patient --</option>
                {patients.map((patient) => (
                  <option key={patient.id} value={patient.id}>
                    {patient.name} ({patient.id}) - {patient.gender === 'M' ? 'Male' : 'Female'}, 
                    {Math.floor((Date.now() - new Date(patient.dateOfBirth).getTime()) / (365.25 * 24 * 60 * 60 * 1000))} yrs
                  </option>
                ))}
              </select>
            </div>

            {/* Chief Complaint */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-slate-700 mb-2">Chief Complaint *</label>
              <textarea
                value={chiefComplaint}
                onChange={(e) => setChiefComplaint(e.target.value)}
                rows={3}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="e.g., Chest pain for 2 hours, shortness of breath, fever for 3 days..."
              />
            </div>

            {/* Vitals */}
            <div className="mb-6">
              <h4 className="font-semibold text-slate-900 mb-3">Vital Signs</h4>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1 flex items-center gap-2">
                    <Heart className="w-4 h-4 text-red-500" />
                    Systolic BP (mmHg)
                  </label>
                  <input
                    type="number"
                    value={vitals.systolicBP}
                    onChange={(e) => setVitals({ ...vitals, systolicBP: Number(e.target.value) })}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1 flex items-center gap-2">
                    <Heart className="w-4 h-4 text-red-500" />
                    Diastolic BP (mmHg)
                  </label>
                  <input
                    type="number"
                    value={vitals.diastolicBP}
                    onChange={(e) => setVitals({ ...vitals, diastolicBP: Number(e.target.value) })}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1 flex items-center gap-2">
                    <Activity className="w-4 h-4 text-pink-500" />
                    Heart Rate (bpm)
                  </label>
                  <input
                    type="number"
                    value={vitals.heartRate}
                    onChange={(e) => setVitals({ ...vitals, heartRate: Number(e.target.value) })}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1 flex items-center gap-2">
                    <Thermometer className="w-4 h-4 text-orange-500" />
                    Temperature (°C)
                  </label>
                  <input
                    type="number"
                    step="0.1"
                    value={vitals.temperature}
                    onChange={(e) => setVitals({ ...vitals, temperature: Number(e.target.value) })}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1 flex items-center gap-2">
                    <Droplet className="w-4 h-4 text-blue-500" />
                    SpO2 (%)
                  </label>
                  <input
                    type="number"
                    value={vitals.spO2}
                    onChange={(e) => setVitals({ ...vitals, spO2: Number(e.target.value) })}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1 flex items-center gap-2">
                    <Wind className="w-4 h-4 text-cyan-500" />
                    Respiratory Rate (/min)
                  </label>
                  <input
                    type="number"
                    value={vitals.respiratoryRate}
                    onChange={(e) => setVitals({ ...vitals, respiratoryRate: Number(e.target.value) })}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div className="md:col-span-3">
                  <label className="block text-sm font-medium text-slate-700 mb-1 flex items-center gap-2">
                    <Brain className="w-4 h-4 text-purple-500" />
                    Level of Consciousness
                  </label>
                  <select
                    value={vitals.consciousness}
                    onChange={(e) => setVitals({ ...vitals, consciousness: e.target.value as Vitals['consciousness'] })}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="alert">Alert</option>
                    <option value="verbal">Responds to Verbal</option>
                    <option value="pain">Responds to Pain</option>
                    <option value="unresponsive">Unresponsive</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-3 mb-4">
              <p className="text-sm text-emerald-800">
                <strong>Note:</strong> Early Warning Score (EWS) will be automatically calculated from these vitals. 
                Priority will be assigned based on the score, and critical patients will trigger notifications to medical staff.
              </p>
            </div>

            <div className="flex gap-3 justify-end">
              <button
                onClick={() => setShowTriageForm(false)}
                className="px-4 py-2 border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleCreateTriage}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                disabled={!selectedPatientId || !chiefComplaint}
              >
                Create Triage Entry
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Triage Queue */}
      <div className="space-y-4">
        {sortedQueue.map((triage) => {
          const patient = patients.find((p) => p.id === triage.patientId);
          const encounter = encounters.find((e) => e.id === triage.encounterId);
          
          return (
            <div
              key={triage.id}
              className={`border-2 rounded-xl p-5 ${
                triage.priority === 'EMERGENCY'
                  ? 'bg-red-50 border-red-300'
                  : triage.priority === 'URGENT'
                  ? 'bg-amber-50 border-amber-300'
                  : 'bg-white border-slate-200'
              }`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-lg font-semibold text-slate-900">{patient?.name}</h3>
                    <span className="text-sm text-slate-500">{triage.patientId}</span>
                    <span className={`px-3 py-1 rounded-full text-sm font-bold border-2 ${getPriorityColor(triage.priority)}`}>
                      {triage.priority}
                    </span>
                  </div>
                  <p className="text-sm text-slate-700 mb-2">
                    <strong>Chief Complaint:</strong> {triage.chiefComplaint}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-slate-600">
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {new Date(triage.timestamp).toLocaleTimeString()}
                    </span>
                    <span>Triaged by: {triage.triageBy}</span>
                  </div>
                </div>

                {/* EWS Score */}
                <div className="text-right">
                  <div className={`text-4xl font-bold ${getEWSColor(triage.earlyWarningScore)}`}>
                    {triage.earlyWarningScore}
                  </div>
                  <div className="text-sm text-slate-600">EWS Score</div>
                </div>
              </div>

              {/* Vitals Display */}
              <div className="grid grid-cols-3 md:grid-cols-6 gap-3 bg-white rounded-lg p-3 border border-slate-200">
                <div className="text-center">
                  <div className="text-xs text-slate-500 mb-1">BP</div>
                  <div className="text-sm font-semibold text-slate-900">
                    {triage.vitals.systolicBP}/{triage.vitals.diastolicBP}
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-xs text-slate-500 mb-1">HR</div>
                  <div className="text-sm font-semibold text-slate-900">{triage.vitals.heartRate}</div>
                </div>
                <div className="text-center">
                  <div className="text-xs text-slate-500 mb-1">Temp</div>
                  <div className="text-sm font-semibold text-slate-900">{triage.vitals.temperature}°C</div>
                </div>
                <div className="text-center">
                  <div className="text-xs text-slate-500 mb-1">SpO2</div>
                  <div className="text-sm font-semibold text-slate-900">{triage.vitals.spO2}%</div>
                </div>
                <div className="text-center">
                  <div className="text-xs text-slate-500 mb-1">RR</div>
                  <div className="text-sm font-semibold text-slate-900">{triage.vitals.respiratoryRate}</div>
                </div>
                <div className="text-center">
                  <div className="text-xs text-slate-500 mb-1">Consciousness</div>
                  <div className="text-sm font-semibold text-slate-900 capitalize">{triage.vitals.consciousness}</div>
                </div>
              </div>
            </div>
          );
        })}

        {sortedQueue.length === 0 && (
          <div className="text-center py-12 text-slate-500 bg-white rounded-xl border border-slate-200">
            <AlertTriangle className="w-12 h-12 mx-auto mb-3 text-slate-300" />
            <p>No patients in triage queue</p>
          </div>
        )}
      </div>
    </div>
  );
}
