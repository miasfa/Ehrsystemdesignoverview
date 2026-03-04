import { TestTube, Clock, AlertTriangle, CheckCircle, Eye } from 'lucide-react';
import { mockLabResults, mockPatients } from './mockData';

interface Props {
  onViewPatient: (patientId: string) => void;
}

export function PrototypeLab({ onViewPatient }: Props) {
  const getPatientName = (patientId: string) => {
    return mockPatients.find((p) => p.id === patientId)?.name || 'Unknown';
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'emerald';
      case 'in-progress':
        return 'amber';
      case 'pending':
        return 'slate';
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

  return (
    <div className="space-y-6">
      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white rounded-xl border border-slate-200 p-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-slate-600">Pending Tests</span>
            <AlertTriangle className="w-5 h-5 text-slate-400" />
          </div>
          <p className="text-3xl font-bold text-slate-900">
            {mockLabResults.filter((l) => l.status === 'pending').length}
          </p>
        </div>
        <div className="bg-white rounded-xl border border-slate-200 p-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-slate-600">In Progress</span>
            <Clock className="w-5 h-5 text-amber-500" />
          </div>
          <p className="text-3xl font-bold text-amber-600">
            {mockLabResults.filter((l) => l.status === 'in-progress').length}
          </p>
        </div>
        <div className="bg-white rounded-xl border border-slate-200 p-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-slate-600">Completed</span>
            <CheckCircle className="w-5 h-5 text-emerald-500" />
          </div>
          <p className="text-3xl font-bold text-emerald-600">
            {mockLabResults.filter((l) => l.status === 'completed').length}
          </p>
        </div>
      </div>

      {/* Lab Results */}
      <div className="space-y-4">
        {mockLabResults.map((lab) => {
          const color = getStatusColor(lab.status);
          const StatusIcon = getStatusIcon(lab.status);
          const hasCritical = lab.results?.some((r) => r.flag === 'critical');

          return (
            <div
              key={lab.id}
              className={`bg-white rounded-xl border-2 ${
                hasCritical ? 'border-red-500' : 'border-slate-200'
              } p-6`}
            >
              {hasCritical && (
                <div className="bg-red-100 border-l-4 border-red-600 p-3 rounded mb-4">
                  <p className="text-sm font-bold text-red-900">
                    🚨 CRITICAL VALUES DETECTED - Immediate physician review required
                  </p>
                </div>
              )}

              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <TestTube className={`w-5 h-5 text-${color}-600`} />
                    <h3 className="text-lg font-bold text-slate-900">{lab.testType}</h3>
                    <span
                      className={`px-2 py-1 bg-${color}-100 text-${color}-900 text-xs font-bold rounded flex items-center gap-1`}
                    >
                      <StatusIcon className="w-3 h-3" />
                      {lab.status.toUpperCase()}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-sm">
                    <div>
                      <span className="text-slate-500">Patient:</span>{' '}
                      <button
                        onClick={() => onViewPatient(lab.patientId)}
                        className="text-blue-600 hover:text-blue-700 font-medium hover:underline"
                      >
                        {getPatientName(lab.patientId)}
                      </button>
                    </div>
                    <div>
                      <span className="text-slate-500">Patient ID:</span>{' '}
                      <span className="text-slate-700 font-medium">{lab.patientId}</span>
                    </div>
                    <div>
                      <span className="text-slate-500">Ordered:</span>{' '}
                      <span className="text-slate-700">
                        {new Date(lab.orderedDate).toLocaleString()}
                      </span>
                    </div>
                    {lab.completedDate && (
                      <div>
                        <span className="text-slate-500">Completed:</span>{' '}
                        <span className="text-slate-700">
                          {new Date(lab.completedDate).toLocaleString()}
                        </span>
                      </div>
                    )}
                    <div className="sm:col-span-2">
                      <span className="text-slate-500">Ordered by:</span>{' '}
                      <span className="text-slate-700 font-medium">{lab.orderedBy}</span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => onViewPatient(lab.patientId)}
                  className="flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors whitespace-nowrap"
                >
                  <Eye className="w-4 h-4" />
                  <span>View Patient</span>
                </button>
              </div>

              {/* Results Table */}
              {lab.results && lab.results.length > 0 && (
                <div className="bg-slate-50 rounded-lg overflow-hidden">
                  <table className="w-full text-sm">
                    <thead className="bg-slate-200">
                      <tr>
                        <th className="text-left p-3 font-semibold text-slate-700">Parameter</th>
                        <th className="text-left p-3 font-semibold text-slate-700">Value</th>
                        <th className="text-left p-3 font-semibold text-slate-700">Unit</th>
                        <th className="text-left p-3 font-semibold text-slate-700">
                          Normal Range
                        </th>
                        <th className="text-left p-3 font-semibold text-slate-700">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {lab.results.map((result, index) => (
                        <tr
                          key={index}
                          className={`border-t border-slate-200 ${
                            result.flag === 'critical'
                              ? 'bg-red-50'
                              : result.flag === 'high' || result.flag === 'low'
                              ? 'bg-amber-50'
                              : 'bg-white'
                          }`}
                        >
                          <td className="p-3 font-medium text-slate-900">{result.parameter}</td>
                          <td
                            className={`p-3 font-bold ${
                              result.flag === 'critical'
                                ? 'text-red-700'
                                : result.flag === 'high' || result.flag === 'low'
                                ? 'text-amber-700'
                                : 'text-slate-900'
                            }`}
                          >
                            {result.value}
                          </td>
                          <td className="p-3 text-slate-600">{result.unit}</td>
                          <td className="p-3 text-slate-600">{result.normalRange}</td>
                          <td className="p-3">
                            {result.flag ? (
                              <span
                                className={`px-2 py-1 rounded text-xs font-bold ${
                                  result.flag === 'critical'
                                    ? 'bg-red-200 text-red-900'
                                    : 'bg-amber-200 text-amber-900'
                                }`}
                              >
                                {result.flag === 'critical' ? '🚨 CRITICAL' : result.flag.toUpperCase()}
                              </span>
                            ) : (
                              <span className="text-emerald-600 text-xs font-semibold">✓ Normal</span>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {lab.status !== 'completed' && (
                <div className="mt-4 bg-blue-50 border border-blue-200 rounded p-3">
                  <p className="text-sm text-blue-900">
                    {lab.status === 'pending' && '⏳ Test pending - Specimen not yet received in lab'}
                    {lab.status === 'in-progress' && '🔬 Test in progress - Results expected soon'}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
