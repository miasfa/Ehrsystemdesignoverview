import { Stethoscope, Clock, CheckCircle, Calendar, Eye } from 'lucide-react';
import { mockORSchedule, mockPatients } from './mockData';

interface Props {
  onViewPatient: (patientId: string) => void;
}

export function PrototypeORSchedule({ onViewPatient }: Props) {
  const getPatientName = (patientId: string) => {
    return mockPatients.find((p) => p.id === patientId)?.name || 'Unknown';
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'emerald';
      case 'in-progress':
        return 'blue';
      case 'scheduled':
        return 'amber';
      case 'cancelled':
        return 'red';
      default:
        return 'slate';
    }
  };

  return (
    <div className="space-y-6">
      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white rounded-xl border border-slate-200 p-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-slate-600">Today's Surgeries</span>
            <Calendar className="w-5 h-5 text-blue-500" />
          </div>
          <p className="text-3xl font-bold text-blue-600">
            {
              mockORSchedule.filter(
                (o) => o.scheduledDate === new Date().toISOString().split('T')[0]
              ).length
            }
          </p>
        </div>
        <div className="bg-white rounded-xl border border-slate-200 p-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-slate-600">In Progress</span>
            <Stethoscope className="w-5 h-5 text-blue-600" />
          </div>
          <p className="text-3xl font-bold text-blue-600">
            {mockORSchedule.filter((o) => o.status === 'in-progress').length}
          </p>
        </div>
        <div className="bg-white rounded-xl border border-slate-200 p-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-slate-600">Scheduled</span>
            <Clock className="w-5 h-5 text-amber-500" />
          </div>
          <p className="text-3xl font-bold text-amber-600">
            {mockORSchedule.filter((o) => o.status === 'scheduled').length}
          </p>
        </div>
      </div>

      {/* OR Schedule */}
      <div className="space-y-4">
        {mockORSchedule.map((surgery) => {
          const color = getStatusColor(surgery.status);
          const isToday = surgery.scheduledDate === new Date().toISOString().split('T')[0];

          return (
            <div
              key={surgery.id}
              className={`bg-white rounded-xl border-2 ${
                surgery.status === 'in-progress' ? 'border-blue-500' : 'border-slate-200'
              } p-6`}
            >
              {surgery.status === 'in-progress' && (
                <div className="bg-blue-100 border-l-4 border-blue-600 p-3 rounded mb-4">
                  <p className="text-sm font-bold text-blue-900">
                    🏥 SURGERY IN PROGRESS - {surgery.room}
                  </p>
                </div>
              )}

              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <Stethoscope className={`w-6 h-6 text-${color}-600`} />
                    <h3 className="text-xl font-bold text-slate-900">{surgery.procedure}</h3>
                    <span
                      className={`px-2 py-1 bg-${color}-100 text-${color}-900 text-xs font-bold rounded`}
                    >
                      {surgery.status.toUpperCase()}
                    </span>
                    {isToday && (
                      <span className="px-2 py-1 bg-purple-100 text-purple-900 text-xs font-bold rounded">
                        TODAY
                      </span>
                    )}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
                    <div className="bg-slate-50 rounded-lg p-4">
                      <p className="text-xs text-slate-500 mb-1">Patient</p>
                      <button
                        onClick={() => onViewPatient(surgery.patientId)}
                        className="text-sm font-bold text-blue-600 hover:text-blue-700 hover:underline"
                      >
                        {getPatientName(surgery.patientId)}
                      </button>
                      <p className="text-xs text-slate-600 mt-1">{surgery.patientId}</p>
                    </div>

                    <div className="bg-slate-50 rounded-lg p-4">
                      <p className="text-xs text-slate-500 mb-1">Date & Time</p>
                      <p className="text-sm font-bold text-slate-900">
                        {new Date(surgery.scheduledDate).toLocaleDateString()}
                      </p>
                      <p className="text-xs text-slate-600 mt-1">{surgery.scheduledTime}</p>
                    </div>

                    <div className="bg-slate-50 rounded-lg p-4">
                      <p className="text-xs text-slate-500 mb-1">Operating Room</p>
                      <p className="text-sm font-bold text-slate-900">{surgery.room}</p>
                      <p className="text-xs text-slate-600 mt-1">
                        Duration: {surgery.duration} min
                      </p>
                    </div>

                    <div className="bg-slate-50 rounded-lg p-4">
                      <p className="text-xs text-slate-500 mb-1">Surgeon</p>
                      <p className="text-sm font-bold text-slate-900">{surgery.surgeon}</p>
                    </div>

                    <div className="bg-slate-50 rounded-lg p-4">
                      <p className="text-xs text-slate-500 mb-1">Anesthesiologist</p>
                      <p className="text-sm font-bold text-slate-900">
                        {surgery.anesthesiologist}
                      </p>
                    </div>

                    <div className="bg-slate-50 rounded-lg p-4">
                      <p className="text-xs text-slate-500 mb-1">Expected End</p>
                      <p className="text-sm font-bold text-slate-900">
                        {(() => {
                          const [hours, minutes] = surgery.scheduledTime.split(':');
                          const endTime = new Date();
                          endTime.setHours(parseInt(hours));
                          endTime.setMinutes(parseInt(minutes) + surgery.duration);
                          return endTime.toLocaleTimeString([], {
                            hour: '2-digit',
                            minute: '2-digit',
                          });
                        })()}
                      </p>
                    </div>
                  </div>

                  {/* Progress Bar for in-progress surgeries */}
                  {surgery.status === 'in-progress' && (
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-semibold text-blue-900">
                          Surgery Progress
                        </span>
                        <span className="text-xs text-blue-700">Est. 45 min remaining</span>
                      </div>
                      <div className="w-full h-2 bg-blue-200 rounded-full overflow-hidden">
                        <div className="h-full bg-blue-600 rounded-full" style={{ width: '60%' }}></div>
                      </div>
                    </div>
                  )}
                </div>

                <button
                  onClick={() => onViewPatient(surgery.patientId)}
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

      {/* OR Room Status */}
      <div className="bg-white rounded-xl border border-slate-200 p-6">
        <h2 className="text-lg font-bold text-slate-900 mb-4">Operating Room Status</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {['OR-1', 'OR-2', 'OR-3'].map((room) => {
            const activeCase = mockORSchedule.find(
              (s) => s.room === room && s.status === 'in-progress'
            );
            return (
              <div
                key={room}
                className={`rounded-lg p-4 ${
                  activeCase ? 'bg-blue-100 border-2 border-blue-500' : 'bg-slate-50 border border-slate-200'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-slate-900">{room}</h3>
                  <div
                    className={`w-3 h-3 rounded-full ${
                      activeCase ? 'bg-blue-600' : 'bg-emerald-500'
                    }`}
                  ></div>
                </div>
                <p className="text-sm text-slate-700">
                  {activeCase ? (
                    <>
                      <span className="font-semibold">Occupied</span>
                      <br />
                      {activeCase.procedure}
                    </>
                  ) : (
                    'Available'
                  )}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
