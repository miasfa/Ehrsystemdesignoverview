import { Pill, CheckCircle, Clock, AlertTriangle, Eye } from 'lucide-react';
import { mockMedications, mockPatients } from './mockData';

interface Props {
  onViewPatient: (patientId: string) => void;
}

export function PrototypePharmacy({ onViewPatient }: Props) {
  const getPatientName = (patientId: string) => {
    return mockPatients.find((p) => p.id === patientId)?.name || 'Unknown';
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'administered':
        return 'emerald';
      case 'dispensed':
        return 'blue';
      case 'pending':
        return 'amber';
      default:
        return 'slate';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'administered':
        return CheckCircle;
      case 'dispensed':
        return Pill;
      case 'pending':
        return AlertTriangle;
      default:
        return Clock;
    }
  };

  return (
    <div className="space-y-6">
      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white rounded-xl border border-slate-200 p-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-slate-600">Pending Orders</span>
            <AlertTriangle className="w-5 h-5 text-amber-500" />
          </div>
          <p className="text-3xl font-bold text-amber-600">
            {mockMedications.filter((m) => m.status === 'pending').length}
          </p>
        </div>
        <div className="bg-white rounded-xl border border-slate-200 p-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-slate-600">Dispensed</span>
            <Pill className="w-5 h-5 text-blue-500" />
          </div>
          <p className="text-3xl font-bold text-blue-600">
            {mockMedications.filter((m) => m.status === 'dispensed').length}
          </p>
        </div>
        <div className="bg-white rounded-xl border border-slate-200 p-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-slate-600">Administered</span>
            <CheckCircle className="w-5 h-5 text-emerald-500" />
          </div>
          <p className="text-3xl font-bold text-emerald-600">
            {mockMedications.filter((m) => m.status === 'administered').length}
          </p>
        </div>
      </div>

      {/* Medication Orders */}
      <div className="space-y-4">
        {mockMedications.map((med) => {
          const color = getStatusColor(med.status);
          const StatusIcon = getStatusIcon(med.status);

          return (
            <div key={med.id} className="bg-white rounded-xl border border-slate-200 p-6">
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <Pill className={`w-5 h-5 text-${color}-600`} />
                    <h3 className="text-lg font-bold text-slate-900">{med.name}</h3>
                    <span
                      className={`px-2 py-1 bg-${color}-100 text-${color}-900 text-xs font-bold rounded flex items-center gap-1`}
                    >
                      <StatusIcon className="w-3 h-3" />
                      {med.status.toUpperCase()}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-sm mb-3">
                    <div className="bg-slate-50 rounded p-3">
                      <span className="text-slate-500 block mb-1">Dosage</span>
                      <span className="text-slate-900 font-bold">{med.dosage}</span>
                    </div>
                    <div className="bg-slate-50 rounded p-3">
                      <span className="text-slate-500 block mb-1">Frequency</span>
                      <span className="text-slate-900 font-bold">{med.frequency}</span>
                    </div>
                    <div className="bg-slate-50 rounded p-3">
                      <span className="text-slate-500 block mb-1">Route</span>
                      <span className="text-slate-900 font-bold">{med.route}</span>
                    </div>
                    <div className="bg-slate-50 rounded p-3">
                      <span className="text-slate-500 block mb-1">Quantity</span>
                      <span className="text-slate-900 font-bold">{med.quantity}</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-600">
                    <div>
                      <span className="text-slate-500">Patient:</span>{' '}
                      <button
                        onClick={() => onViewPatient(med.patientId)}
                        className="text-blue-600 hover:text-blue-700 font-medium hover:underline"
                      >
                        {getPatientName(med.patientId)}
                      </button>
                    </div>
                    <div>
                      <span className="text-slate-500">Patient ID:</span>{' '}
                      <span className="font-medium">{med.patientId}</span>
                    </div>
                    <div>
                      <span className="text-slate-500">Ordered by:</span>{' '}
                      <span className="font-medium">{med.orderedBy}</span>
                    </div>
                    <div>
                      <span className="text-slate-500">Ordered:</span>{' '}
                      <span>{new Date(med.orderedDate).toLocaleString()}</span>
                    </div>
                    {med.dispensedDate && med.dispensedBy && (
                      <>
                        <div>
                          <span className="text-slate-500">Dispensed by:</span>{' '}
                          <span className="font-medium">{med.dispensedBy}</span>
                        </div>
                        <div>
                          <span className="text-slate-500">Dispensed:</span>{' '}
                          <span>{new Date(med.dispensedDate).toLocaleString()}</span>
                        </div>
                      </>
                    )}
                  </div>
                </div>

                <button
                  onClick={() => onViewPatient(med.patientId)}
                  className="flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors whitespace-nowrap"
                >
                  <Eye className="w-4 h-4" />
                  <span>View Patient</span>
                </button>
              </div>

              {/* Status Timeline */}
              <div className="bg-slate-50 rounded-lg p-4">
                <div className="flex items-center gap-2">
                  <div
                    className={`w-8 h-8 rounded-full ${
                      med.status !== 'pending' ? 'bg-emerald-500' : 'bg-slate-300'
                    } flex items-center justify-center text-white`}
                  >
                    {med.status !== 'pending' ? '✓' : '1'}
                  </div>
                  <div className="flex-1 h-1 bg-slate-300">
                    <div
                      className={`h-full ${
                        med.status === 'administered' ? 'bg-emerald-500' : 'bg-slate-300'
                      }`}
                      style={{
                        width:
                          med.status === 'administered'
                            ? '100%'
                            : med.status === 'dispensed'
                            ? '50%'
                            : '0%',
                      }}
                    ></div>
                  </div>
                  <div
                    className={`w-8 h-8 rounded-full ${
                      med.status === 'administered' ? 'bg-emerald-500' : 'bg-slate-300'
                    } flex items-center justify-center text-white`}
                  >
                    {med.status === 'administered' ? '✓' : '2'}
                  </div>
                </div>
                <div className="flex justify-between mt-2 text-xs">
                  <span
                    className={med.status !== 'pending' ? 'text-emerald-700 font-semibold' : 'text-slate-500'}
                  >
                    Dispensed
                  </span>
                  <span
                    className={med.status === 'administered' ? 'text-emerald-700 font-semibold' : 'text-slate-500'}
                  >
                    Administered
                  </span>
                </div>
              </div>

              {med.status === 'pending' && (
                <div className="mt-4">
                  <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
                    Dispense Medication
                  </button>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
