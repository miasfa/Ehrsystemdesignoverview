import { AlertTriangle, Clock, Activity, Eye } from 'lucide-react';
import { mockTriageQueue, mockPatients } from './mockData';

interface Props {
  onViewPatient: (patientId: string) => void;
}

export function PrototypeTriageQueue({ onViewPatient }: Props) {
  const getPatientName = (patientId: string) => {
    return mockPatients.find((p) => p.id === patientId)?.name || 'Unknown';
  };

  const getESIColor = (level: number) => {
    switch (level) {
      case 1:
        return 'red';
      case 2:
        return 'orange';
      case 3:
        return 'amber';
      case 4:
        return 'yellow';
      case 5:
        return 'green';
      default:
        return 'slate';
    }
  };

  const getESILabel = (level: number) => {
    switch (level) {
      case 1:
        return 'Resuscitation';
      case 2:
        return 'Emergent';
      case 3:
        return 'Urgent';
      case 4:
        return 'Less Urgent';
      case 5:
        return 'Non-Urgent';
      default:
        return 'Unknown';
    }
  };

  const sortedQueue = [...mockTriageQueue].sort((a, b) => {
    if (a.esiLevel !== b.esiLevel) {
      return a.esiLevel - b.esiLevel;
    }
    return new Date(a.arrivalTime).getTime() - new Date(b.arrivalTime).getTime();
  });

  return (
    <div className="space-y-6">
      {/* Queue Summary */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {[
          { level: 1, count: sortedQueue.filter((t) => t.esiLevel === 1).length },
          { level: 2, count: sortedQueue.filter((t) => t.esiLevel === 2).length },
          { level: 3, count: sortedQueue.filter((t) => t.esiLevel === 3).length },
          { level: 4, count: sortedQueue.filter((t) => t.esiLevel === 4).length },
          { level: 5, count: sortedQueue.filter((t) => t.esiLevel === 5).length },
        ].map((item) => {
          const color = getESIColor(item.level);
          return (
            <div
              key={item.level}
              className={`bg-${color}-50 border-2 border-${color}-200 rounded-xl p-4 text-center`}
            >
              <div className={`text-3xl font-bold text-${color}-700 mb-1`}>{item.count}</div>
              <div className={`text-xs font-semibold text-${color}-900`}>
                Level {item.level}
              </div>
              <div className={`text-xs text-${color}-700`}>{getESILabel(item.level)}</div>
            </div>
          );
        })}
      </div>

      {/* Current Queue */}
      <div className="bg-white rounded-xl border border-slate-200 p-6">
        <div className="flex items-center gap-3 mb-6">
          <AlertTriangle className="w-6 h-6 text-red-600" />
          <h2 className="text-xl font-bold text-slate-900">
            Emergency Department Queue ({sortedQueue.length} patients)
          </h2>
        </div>

        <div className="space-y-4">
          {sortedQueue.map((entry) => {
            const color = getESIColor(entry.esiLevel);
            const patient = mockPatients.find((p) => p.id === entry.patientId);

            return (
              <div
                key={entry.id}
                className={`border-2 border-${color}-300 bg-${color}-50 rounded-lg p-5`}
              >
                <div className="flex items-start gap-4">
                  {/* ESI Level Badge */}
                  <div
                    className={`w-16 h-16 bg-${color}-600 text-white rounded-full flex flex-col items-center justify-center flex-shrink-0`}
                  >
                    <div className="text-2xl font-bold">{entry.esiLevel}</div>
                    <div className="text-[10px]">ESI</div>
                  </div>

                  {/* Patient Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-lg font-bold text-slate-900">
                            {getPatientName(entry.patientId)}
                          </h3>
                          <span
                            className={`px-2 py-1 bg-${color}-200 text-${color}-900 text-xs font-bold rounded`}
                          >
                            {getESILabel(entry.esiLevel)}
                          </span>
                          {entry.status === 'in-treatment' && (
                            <span className="px-2 py-1 bg-blue-200 text-blue-900 text-xs font-bold rounded">
                              IN TREATMENT
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-slate-700 font-medium mb-1">
                          {entry.chiefComplaint}
                        </p>
                        <div className="flex flex-wrap gap-3 text-xs text-slate-600">
                          <span>
                            <strong>Patient ID:</strong> {entry.patientId}
                          </span>
                          <span>
                            <strong>Arrived:</strong>{' '}
                            {new Date(entry.arrivalTime).toLocaleTimeString()}
                          </span>
                          <span>
                            <strong>Triaged by:</strong> {entry.triageNurse}
                          </span>
                          {entry.assignedBed && (
                            <span>
                              <strong>Bed:</strong> {entry.assignedBed}
                            </span>
                          )}
                        </div>
                      </div>

                      <button
                        onClick={() => onViewPatient(entry.patientId)}
                        className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-300 rounded-lg hover:bg-slate-50 transition-colors whitespace-nowrap"
                      >
                        <Eye className="w-4 h-4" />
                        <span>View Patient</span>
                      </button>
                    </div>

                    {/* Vitals */}
                    <div className="grid grid-cols-2 sm:grid-cols-6 gap-3 mb-3">
                      <div className="bg-white rounded p-2 text-center border border-slate-200">
                        <div className="text-xs text-slate-500 mb-1">BP</div>
                        <div className="text-sm font-bold text-slate-900">{entry.vitals.bp}</div>
                      </div>
                      <div className="bg-white rounded p-2 text-center border border-slate-200">
                        <div className="text-xs text-slate-500 mb-1">HR</div>
                        <div className="text-sm font-bold text-slate-900">{entry.vitals.hr}</div>
                      </div>
                      <div className="bg-white rounded p-2 text-center border border-slate-200">
                        <div className="text-xs text-slate-500 mb-1">Temp</div>
                        <div className="text-sm font-bold text-slate-900">
                          {entry.vitals.temp}°C
                        </div>
                      </div>
                      <div className="bg-white rounded p-2 text-center border border-slate-200">
                        <div className="text-xs text-slate-500 mb-1">O2 Sat</div>
                        <div
                          className={`text-sm font-bold ${
                            entry.vitals.o2sat < 90 ? 'text-red-600' : 'text-slate-900'
                          }`}
                        >
                          {entry.vitals.o2sat}%
                        </div>
                      </div>
                      <div className="bg-white rounded p-2 text-center border border-slate-200">
                        <div className="text-xs text-slate-500 mb-1">Pain</div>
                        <div
                          className={`text-sm font-bold ${
                            entry.vitals.pain >= 7
                              ? 'text-red-600'
                              : entry.vitals.pain >= 4
                              ? 'text-amber-600'
                              : 'text-slate-900'
                          }`}
                        >
                          {entry.vitals.pain}/10
                        </div>
                      </div>
                      <div className="bg-white rounded p-2 text-center border border-slate-200">
                        <div className="text-xs text-slate-500 mb-1">Wait</div>
                        <div
                          className={`text-sm font-bold ${
                            entry.waitTime > 30 ? 'text-red-600' : 'text-slate-900'
                          }`}
                        >
                          {entry.waitTime} min
                        </div>
                      </div>
                    </div>

                    {/* Wait Time Alert */}
                    {entry.status === 'waiting' &&
                      ((entry.esiLevel === 2 && entry.waitTime > 10) ||
                        (entry.esiLevel === 3 && entry.waitTime > 30)) && (
                        <div className="bg-red-100 border-l-4 border-red-600 p-3 rounded">
                          <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4 text-red-600" />
                            <p className="text-sm font-semibold text-red-900">
                              ⚠️ WAIT TIME EXCEEDED TARGET - Patient needs immediate assessment
                            </p>
                          </div>
                        </div>
                      )}

                    {/* Patient Allergies Warning */}
                    {patient && patient.allergies.length > 0 && (
                      <div className="bg-yellow-100 border-l-4 border-yellow-600 p-2 rounded">
                        <p className="text-xs font-semibold text-yellow-900">
                          ⚠️ ALLERGIES: {patient.allergies.join(', ')}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Legend */}
      <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
        <h3 className="text-sm font-semibold text-slate-900 mb-3">ESI Level Reference</h3>
        <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 text-xs">
          <div>
            <span className="font-bold text-red-700">Level 1:</span> Immediate (0 min)
          </div>
          <div>
            <span className="font-bold text-orange-700">Level 2:</span> ≤10 minutes
          </div>
          <div>
            <span className="font-bold text-amber-700">Level 3:</span> ≤30 minutes
          </div>
          <div>
            <span className="font-bold text-yellow-700">Level 4:</span> ≤60 minutes
          </div>
          <div>
            <span className="font-bold text-green-700">Level 5:</span> ≤120 minutes
          </div>
        </div>
      </div>
    </div>
  );
}
