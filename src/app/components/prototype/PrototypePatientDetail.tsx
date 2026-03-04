import { ArrowLeft, User, Heart, TestTube, Pill, FileImage, Clock, AlertTriangle } from 'lucide-react';
import {
  mockPatients,
  mockEncounters,
  mockLabResults,
  mockMedications,
  mockImaging,
  mockTriageQueue,
} from './mockData';

interface Props {
  patientId: string;
  onBack: () => void;
}

export function PrototypePatientDetail({ patientId, onBack }: Props) {
  const patient = mockPatients.find((p) => p.id === patientId);
  const encounters = mockEncounters.filter((e) => e.patientId === patientId);
  const labs = mockLabResults.filter((l) => l.patientId === patientId);
  const medications = mockMedications.filter((m) => m.patientId === patientId);
  const imaging = mockImaging.filter((i) => i.patientId === patientId);
  const triage = mockTriageQueue.find((t) => t.patientId === patientId);

  if (!patient) {
    return (
      <div className="bg-white rounded-xl border border-slate-200 p-12 text-center">
        <p className="text-slate-500">Patient not found</p>
        <button onClick={onBack} className="mt-4 text-blue-600 hover:text-blue-700">
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Back Button */}
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-slate-600 hover:text-slate-900 font-medium"
      >
        <ArrowLeft className="w-5 h-5" />
        Back to Patient List
      </button>

      {/* Patient Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl p-8 text-white">
        <div className="flex items-start gap-6">
          <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center flex-shrink-0 text-blue-600 text-4xl font-bold">
            {patient.name.split(' ')[0][0]}
            {patient.name.split(' ')[1]?.[0] || ''}
          </div>

          <div className="flex-1">
            <h1 className="text-3xl font-bold mb-2">{patient.name}</h1>
            <p className="text-xl text-blue-100 mb-4" dir="rtl">
              {patient.nameArabic}
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div>
                <p className="text-xs text-blue-200 mb-1">Patient ID</p>
                <p className="font-semibold">{patient.id}</p>
              </div>
              <div>
                <p className="text-xs text-blue-200 mb-1">National ID</p>
                <p className="font-semibold">{patient.nationalId}</p>
              </div>
              <div>
                <p className="text-xs text-blue-200 mb-1">Age / Gender</p>
                <p className="font-semibold">
                  {patient.age} years / {patient.gender === 'male' ? 'Male' : 'Female'}
                </p>
              </div>
              <div>
                <p className="text-xs text-blue-200 mb-1">Blood Type</p>
                <p className="font-semibold">{patient.bloodType}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-blue-500">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-blue-200 mb-1">Phone</p>
              <p>{patient.phone}</p>
            </div>
            <div>
              <p className="text-blue-200 mb-1">Address</p>
              <p>{patient.address}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Alerts */}
      {(patient.allergies.length > 0 || patient.chronicConditions.length > 0 || triage) && (
        <div className="space-y-3">
          {patient.allergies.length > 0 && (
            <div className="bg-red-100 border-l-4 border-red-600 p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle className="w-5 h-5 text-red-600" />
                <h3 className="font-bold text-red-900">ALLERGIES</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {patient.allergies.map((allergy, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-red-200 text-red-900 font-semibold rounded"
                  >
                    {allergy}
                  </span>
                ))}
              </div>
            </div>
          )}

          {patient.chronicConditions.length > 0 && (
            <div className="bg-amber-100 border-l-4 border-amber-600 p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Heart className="w-5 h-5 text-amber-600" />
                <h3 className="font-bold text-amber-900">CHRONIC CONDITIONS</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {patient.chronicConditions.map((condition, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-amber-200 text-amber-900 font-semibold rounded"
                  >
                    {condition}
                  </span>
                ))}
              </div>
            </div>
          )}

          {triage && (
            <div className="bg-orange-100 border-l-4 border-orange-600 p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle className="w-5 h-5 text-orange-600" />
                <h3 className="font-bold text-orange-900">CURRENTLY IN EMERGENCY DEPARTMENT</h3>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-sm">
                <div>
                  <p className="text-orange-700 mb-1">ESI Level</p>
                  <p className="font-bold text-orange-900">Level {triage.esiLevel}</p>
                </div>
                <div>
                  <p className="text-orange-700 mb-1">Chief Complaint</p>
                  <p className="font-bold text-orange-900">{triage.chiefComplaint}</p>
                </div>
                <div>
                  <p className="text-orange-700 mb-1">Status</p>
                  <p className="font-bold text-orange-900">{triage.status}</p>
                </div>
                <div>
                  <p className="text-orange-700 mb-1">Wait Time</p>
                  <p className="font-bold text-orange-900">{triage.waitTime} min</p>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Current Encounters */}
      {encounters.length > 0 && (
        <div className="bg-white rounded-xl border border-slate-200 p-6">
          <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
            <User className="w-6 h-6 text-blue-600" />
            Current Encounters
          </h2>
          <div className="space-y-3">
            {encounters.map((encounter) => (
              <div key={encounter.id} className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-2 py-1 bg-blue-100 text-blue-900 text-xs font-bold rounded">
                        {encounter.type.toUpperCase()}
                      </span>
                      <span
                        className={`px-2 py-1 ${
                          encounter.status === 'active'
                            ? 'bg-emerald-100 text-emerald-900'
                            : 'bg-slate-100 text-slate-900'
                        } text-xs font-bold rounded`}
                      >
                        {encounter.status.toUpperCase()}
                      </span>
                    </div>
                    <p className="text-sm text-slate-700 mb-1">
                      <strong>Chief Complaint:</strong> {encounter.chiefComplaint}
                    </p>
                    {encounter.diagnosis && (
                      <p className="text-sm text-slate-700 mb-1">
                        <strong>Diagnosis:</strong> {encounter.diagnosis}
                      </p>
                    )}
                    <p className="text-sm text-slate-700">
                      <strong>Attending:</strong> {encounter.attendingPhysician}
                    </p>
                  </div>
                  <div className="text-right text-xs text-slate-600">
                    <p>
                      <strong>Admitted:</strong>
                    </p>
                    <p>{new Date(encounter.admissionDate).toLocaleString()}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Lab Results */}
      {labs.length > 0 && (
        <div className="bg-white rounded-xl border border-slate-200 p-6">
          <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
            <TestTube className="w-6 h-6 text-purple-600" />
            Laboratory Results
          </h2>
          <div className="space-y-3">
            {labs.map((lab) => (
              <div key={lab.id} className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div className="flex-1">
                    <h3 className="font-bold text-slate-900 mb-1">{lab.testType}</h3>
                    <div className="flex items-center gap-3 text-xs text-slate-600">
                      <span>
                        <strong>Ordered:</strong> {new Date(lab.orderedDate).toLocaleString()}
                      </span>
                      {lab.completedDate && (
                        <span>
                          <strong>Completed:</strong> {new Date(lab.completedDate).toLocaleString()}
                        </span>
                      )}
                    </div>
                  </div>
                  <span
                    className={`px-2 py-1 text-xs font-bold rounded ${
                      lab.status === 'completed'
                        ? 'bg-emerald-100 text-emerald-900'
                        : lab.status === 'in-progress'
                        ? 'bg-amber-100 text-amber-900'
                        : 'bg-slate-100 text-slate-900'
                    }`}
                  >
                    {lab.status.toUpperCase()}
                  </span>
                </div>

                {lab.results && lab.results.length > 0 && (
                  <div className="bg-white rounded border border-slate-200 overflow-hidden">
                    <table className="w-full text-xs">
                      <thead className="bg-slate-100">
                        <tr>
                          <th className="text-left p-2 font-semibold">Parameter</th>
                          <th className="text-left p-2 font-semibold">Value</th>
                          <th className="text-left p-2 font-semibold">Range</th>
                          <th className="text-left p-2 font-semibold">Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        {lab.results.map((result, idx) => (
                          <tr key={idx} className="border-t border-slate-200">
                            <td className="p-2 font-medium">{result.parameter}</td>
                            <td
                              className={`p-2 font-bold ${
                                result.flag === 'critical'
                                  ? 'text-red-700'
                                  : result.flag
                                  ? 'text-amber-700'
                                  : ''
                              }`}
                            >
                              {result.value} {result.unit}
                            </td>
                            <td className="p-2 text-slate-600">{result.normalRange}</td>
                            <td className="p-2">
                              {result.flag === 'critical' ? (
                                <span className="text-red-700 font-bold">🚨 CRITICAL</span>
                              ) : result.flag ? (
                                <span className="text-amber-700 font-bold">{result.flag.toUpperCase()}</span>
                              ) : (
                                <span className="text-emerald-600">✓ Normal</span>
                              )}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Medications */}
      {medications.length > 0 && (
        <div className="bg-white rounded-xl border border-slate-200 p-6">
          <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
            <Pill className="w-6 h-6 text-emerald-600" />
            Medications
          </h2>
          <div className="space-y-3">
            {medications.map((med) => (
              <div key={med.id} className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="font-bold text-slate-900 mb-2">{med.name}</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs mb-2">
                      <div>
                        <p className="text-slate-500">Dosage</p>
                        <p className="font-semibold">{med.dosage}</p>
                      </div>
                      <div>
                        <p className="text-slate-500">Frequency</p>
                        <p className="font-semibold">{med.frequency}</p>
                      </div>
                      <div>
                        <p className="text-slate-500">Route</p>
                        <p className="font-semibold">{med.route}</p>
                      </div>
                      <div>
                        <p className="text-slate-500">Quantity</p>
                        <p className="font-semibold">{med.quantity}</p>
                      </div>
                    </div>
                    <p className="text-xs text-slate-600">
                      <strong>Ordered by:</strong> {med.orderedBy} •{' '}
                      {new Date(med.orderedDate).toLocaleString()}
                    </p>
                  </div>
                  <span
                    className={`px-2 py-1 text-xs font-bold rounded whitespace-nowrap ${
                      med.status === 'administered'
                        ? 'bg-emerald-100 text-emerald-900'
                        : med.status === 'dispensed'
                        ? 'bg-blue-100 text-blue-900'
                        : 'bg-amber-100 text-amber-900'
                    }`}
                  >
                    {med.status.toUpperCase()}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Imaging */}
      {imaging.length > 0 && (
        <div className="bg-white rounded-xl border border-slate-200 p-6">
          <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
            <FileImage className="w-6 h-6 text-blue-600" />
            Imaging Studies
          </h2>
          <div className="space-y-3">
            {imaging.map((img) => (
              <div key={img.id} className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div className="flex-1">
                    <h3 className="font-bold text-slate-900 mb-1">
                      {img.type} - {img.bodyPart}
                    </h3>
                    <p className="text-xs text-slate-600 mb-2">
                      <strong>Ordered by:</strong> {img.orderedBy} •{' '}
                      {new Date(img.orderedDate).toLocaleString()}
                    </p>
                    {img.findings && (
                      <div className="bg-blue-50 border border-blue-200 rounded p-3 mt-2">
                        <p className="text-xs font-semibold text-blue-900 mb-1">Findings:</p>
                        <p className="text-xs text-slate-700">{img.findings}</p>
                        {img.radiologist && (
                          <p className="text-xs text-slate-600 mt-1">— {img.radiologist}</p>
                        )}
                      </div>
                    )}
                  </div>
                  <span
                    className={`px-2 py-1 text-xs font-bold rounded whitespace-nowrap ${
                      img.status === 'completed'
                        ? 'bg-emerald-100 text-emerald-900'
                        : 'bg-amber-100 text-amber-900'
                    }`}
                  >
                    {img.status.toUpperCase()}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Patient Timeline */}
      <div className="bg-white rounded-xl border border-slate-200 p-6">
        <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
          <Clock className="w-6 h-6 text-slate-600" />
          Patient Timeline
        </h2>
        <div className="relative border-l-2 border-slate-200 pl-6 space-y-4">
          {encounters.map((encounter) => (
            <div key={encounter.id} className="relative">
              <div className="absolute -left-8 w-4 h-4 bg-blue-500 rounded-full border-4 border-white"></div>
              <p className="text-xs text-slate-500 mb-1">
                {new Date(encounter.admissionDate).toLocaleString()}
              </p>
              <p className="text-sm font-semibold text-slate-900">
                {encounter.type === 'emergency' ? 'Emergency Visit' : 'Hospital Admission'}
              </p>
              <p className="text-sm text-slate-600">{encounter.chiefComplaint}</p>
            </div>
          ))}
          <div className="relative">
            <div className="absolute -left-8 w-4 h-4 bg-emerald-500 rounded-full border-4 border-white"></div>
            <p className="text-xs text-slate-500 mb-1">
              {new Date(patient.registeredDate).toLocaleDateString()}
            </p>
            <p className="text-sm font-semibold text-slate-900">Patient Registered</p>
            <p className="text-sm text-slate-600">Initial registration in Avicenna EHR system</p>
          </div>
        </div>
      </div>
    </div>
  );
}
