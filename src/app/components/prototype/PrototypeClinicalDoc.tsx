import { FileText, CheckCircle, Edit, Eye, Clock } from 'lucide-react';
import { mockClinicalNotes, mockPatients } from './mockData';

interface Props {
  onViewPatient: (patientId: string) => void;
}

export function PrototypeClinicalDoc({ onViewPatient }: Props) {
  const getPatientName = (patientId: string) => {
    return mockPatients.find((p) => p.id === patientId)?.name || 'Unknown';
  };

  const getNoteTypeColor = (type: string) => {
    switch (type) {
      case 'admission':
        return 'blue';
      case 'progress':
        return 'emerald';
      case 'discharge':
        return 'purple';
      case 'consult':
        return 'amber';
      case 'procedure':
        return 'red';
      default:
        return 'slate';
    }
  };

  const getNoteTypeLabel = (type: string) => {
    return type.charAt(0).toUpperCase() + type.slice(1) + ' Note';
  };

  return (
    <div className="space-y-6">
      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white rounded-xl border border-slate-200 p-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-slate-600">Total Notes</span>
            <FileText className="w-5 h-5 text-blue-500" />
          </div>
          <p className="text-3xl font-bold text-slate-900">{mockClinicalNotes.length}</p>
        </div>
        <div className="bg-white rounded-xl border border-slate-200 p-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-slate-600">Signed Notes</span>
            <CheckCircle className="w-5 h-5 text-emerald-500" />
          </div>
          <p className="text-3xl font-bold text-emerald-600">
            {mockClinicalNotes.filter((n) => n.signed).length}
          </p>
        </div>
        <div className="bg-white rounded-xl border border-slate-200 p-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-slate-600">Unsigned Notes</span>
            <Edit className="w-5 h-5 text-amber-500" />
          </div>
          <p className="text-3xl font-bold text-amber-600">
            {mockClinicalNotes.filter((n) => !n.signed).length}
          </p>
        </div>
      </div>

      {/* Clinical Notes */}
      <div className="space-y-4">
        {mockClinicalNotes.map((note) => {
          const color = getNoteTypeColor(note.type);

          return (
            <div key={note.id} className="bg-white rounded-xl border border-slate-200 p-6">
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <FileText className={`w-5 h-5 text-${color}-600`} />
                    <h3 className="text-lg font-bold text-slate-900">{note.title}</h3>
                    <span
                      className={`px-2 py-1 bg-${color}-100 text-${color}-900 text-xs font-bold rounded`}
                    >
                      {getNoteTypeLabel(note.type)}
                    </span>
                    {note.signed ? (
                      <span className="px-2 py-1 bg-emerald-100 text-emerald-900 text-xs font-bold rounded flex items-center gap-1">
                        <CheckCircle className="w-3 h-3" />
                        SIGNED
                      </span>
                    ) : (
                      <span className="px-2 py-1 bg-amber-100 text-amber-900 text-xs font-bold rounded flex items-center gap-1">
                        <Edit className="w-3 h-3" />
                        UNSIGNED
                      </span>
                    )}
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-sm text-slate-600 mb-4">
                    <div>
                      <span className="text-slate-500">Patient:</span>{' '}
                      <button
                        onClick={() => onViewPatient(note.patientId)}
                        className="text-blue-600 hover:text-blue-700 font-medium hover:underline"
                      >
                        {getPatientName(note.patientId)}
                      </button>
                    </div>
                    <div>
                      <span className="text-slate-500">Patient ID:</span>{' '}
                      <span className="font-medium">{note.patientId}</span>
                    </div>
                    <div>
                      <span className="text-slate-500">Author:</span>{' '}
                      <span className="font-medium">{note.author}</span>
                    </div>
                    <div>
                      <span className="text-slate-500">Role:</span>{' '}
                      <span className="font-medium">{note.authorRole}</span>
                    </div>
                    <div className="sm:col-span-2">
                      <span className="text-slate-500">Date:</span>{' '}
                      <span>{new Date(note.date).toLocaleString()}</span>
                    </div>
                    {note.signed && note.signedAt && (
                      <div className="sm:col-span-2">
                        <span className="text-slate-500">Signed:</span>{' '}
                        <span>{new Date(note.signedAt).toLocaleString()}</span>
                      </div>
                    )}
                  </div>

                  {/* SOAP Format */}
                  {(note.subjective || note.objective || note.assessment || note.plan) && (
                    <div className="bg-slate-50 rounded-lg p-4 space-y-3">
                      {note.subjective && (
                        <div>
                          <h4 className="text-sm font-bold text-slate-900 mb-1">Subjective:</h4>
                          <p className="text-sm text-slate-700">{note.subjective}</p>
                        </div>
                      )}
                      {note.objective && (
                        <div>
                          <h4 className="text-sm font-bold text-slate-900 mb-1">Objective:</h4>
                          <p className="text-sm text-slate-700">{note.objective}</p>
                        </div>
                      )}
                      {note.assessment && (
                        <div>
                          <h4 className="text-sm font-bold text-slate-900 mb-1">Assessment:</h4>
                          <p className="text-sm text-slate-700">{note.assessment}</p>
                        </div>
                      )}
                      {note.plan && (
                        <div>
                          <h4 className="text-sm font-bold text-slate-900 mb-1">Plan:</h4>
                          <p className="text-sm text-slate-700">{note.plan}</p>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Full Content (if SOAP not available) */}
                  {!note.subjective && !note.objective && !note.assessment && !note.plan && (
                    <div className="bg-slate-50 rounded-lg p-4">
                      <p className="text-sm text-slate-700">{note.content}</p>
                    </div>
                  )}

                  {/* Signature Block */}
                  {note.signed && note.signedAt && (
                    <div className="mt-4 bg-emerald-50 border-l-4 border-emerald-600 p-3 rounded">
                      <div className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-emerald-600" />
                        <span className="text-emerald-900 font-semibold">
                          Electronically signed by {note.author} on{' '}
                          {new Date(note.signedAt).toLocaleString()}
                        </span>
                      </div>
                    </div>
                  )}

                  {!note.signed && (
                    <div className="mt-4 bg-amber-50 border-l-4 border-amber-600 p-3 rounded">
                      <div className="flex items-center justify-between gap-3">
                        <div className="flex items-center gap-2 text-sm">
                          <Clock className="w-4 h-4 text-amber-600" />
                          <span className="text-amber-900 font-semibold">
                            Awaiting signature from {note.author}
                          </span>
                        </div>
                        <button className="px-3 py-1 bg-blue-600 text-white rounded text-xs font-medium hover:bg-blue-700">
                          Sign Now
                        </button>
                      </div>
                    </div>
                  )}
                </div>

                <button
                  onClick={() => onViewPatient(note.patientId)}
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
          <FileText className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
          <div>
            <h3 className="font-semibold text-blue-900 mb-2">
              Clinical Documentation Standards
            </h3>
            <p className="text-sm text-blue-800 mb-3">
              All clinical notes in Avicenna follow SOAP (Subjective, Objective, Assessment, Plan)
              format for consistency and completeness. Notes must be signed within 24 hours of
              creation to maintain compliance.
            </p>
            <ul className="text-sm text-blue-800 space-y-1">
              <li>✓ Timestamped and immutable after signing</li>
              <li>✓ Complete audit trail of all edits</li>
              <li>✓ Cannot be backdated beyond 24 hours</li>
              <li>✓ Mandatory fields enforcement</li>
              <li>✓ Integration with orders and results</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
