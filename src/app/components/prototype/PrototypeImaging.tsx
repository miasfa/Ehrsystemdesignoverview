import { FileImage, CheckCircle, Clock, Eye, ZoomIn } from 'lucide-react';
import { mockImaging, mockPatients } from './mockData';
import { useState } from 'react';

interface Props {
  onViewPatient: (patientId: string) => void;
}

export function PrototypeImaging({ onViewPatient }: Props) {
  const [viewingImage, setViewingImage] = useState<string | null>(null);

  const getPatientName = (patientId: string) => {
    return mockPatients.find((p) => p.id === patientId)?.name || 'Unknown';
  };

  // Simulated X-ray image using CSS
  const renderXRayImage = (imageUrl: string) => {
    return (
      <div className="relative w-full aspect-[3/4] bg-slate-900 rounded-lg overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-700 to-slate-900"></div>
        {/* Simulated chest X-ray structure */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-3/4 h-5/6">
            {/* Ribcage */}
            <div className="absolute inset-0">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-full h-px bg-slate-500 opacity-40"
                  style={{ top: `${15 + i * 10}%`, transform: `scaleY(${1 + i * 0.05})` }}
                ></div>
              ))}
            </div>
            {/* Heart shadow */}
            <div className="absolute top-1/4 left-1/3 w-32 h-32 bg-slate-800 rounded-full opacity-60 blur-xl"></div>
            {/* Lungs */}
            <div className="absolute top-1/4 left-1/4 w-24 h-48 bg-slate-700 rounded-full opacity-30 blur-2xl"></div>
            <div className="absolute top-1/4 right-1/4 w-24 h-48 bg-slate-700 rounded-full opacity-30 blur-2xl"></div>
          </div>
        </div>
        <div className="absolute bottom-4 right-4 bg-slate-800 px-3 py-1 rounded text-xs text-slate-300">
          CHEST PA VIEW
        </div>
        <button
          onClick={() => setViewingImage(imageUrl)}
          className="absolute top-4 right-4 p-2 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors"
        >
          <ZoomIn className="w-5 h-5 text-white" />
        </button>
      </div>
    );
  };

  return (
    <>
      <div className="space-y-6">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white rounded-xl border border-slate-200 p-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-slate-600">Pending Studies</span>
              <Clock className="w-5 h-5 text-amber-500" />
            </div>
            <p className="text-3xl font-bold text-amber-600">
              {mockImaging.filter((i) => i.status === 'pending').length}
            </p>
          </div>
          <div className="bg-white rounded-xl border border-slate-200 p-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-slate-600">Completed Studies</span>
              <CheckCircle className="w-5 h-5 text-emerald-500" />
            </div>
            <p className="text-3xl font-bold text-emerald-600">
              {mockImaging.filter((i) => i.status === 'completed').length}
            </p>
          </div>
        </div>

        {/* Imaging Studies */}
        <div className="space-y-4">
          {mockImaging.map((imaging) => {
            const color = imaging.status === 'completed' ? 'emerald' : 'amber';

            return (
              <div key={imaging.id} className="bg-white rounded-xl border border-slate-200 p-6">
                <div className="flex items-start gap-6">
                  {/* Image Preview */}
                  {imaging.status === 'completed' && imaging.imageUrl && (
                    <div className="w-48 flex-shrink-0">
                      {renderXRayImage(imaging.imageUrl)}
                    </div>
                  )}

                  {/* Study Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <FileImage className={`w-5 h-5 text-${color}-600`} />
                          <h3 className="text-lg font-bold text-slate-900">
                            {imaging.type} - {imaging.bodyPart}
                          </h3>
                          <span
                            className={`px-2 py-1 bg-${color}-100 text-${color}-900 text-xs font-bold rounded`}
                          >
                            {imaging.status.toUpperCase()}
                          </span>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-600 mb-3">
                          <div>
                            <span className="text-slate-500">Patient:</span>{' '}
                            <button
                              onClick={() => onViewPatient(imaging.patientId)}
                              className="text-blue-600 hover:text-blue-700 font-medium hover:underline"
                            >
                              {getPatientName(imaging.patientId)}
                            </button>
                          </div>
                          <div>
                            <span className="text-slate-500">Patient ID:</span>{' '}
                            <span className="font-medium">{imaging.patientId}</span>
                          </div>
                          <div>
                            <span className="text-slate-500">Ordered by:</span>{' '}
                            <span className="font-medium">{imaging.orderedBy}</span>
                          </div>
                          <div>
                            <span className="text-slate-500">Ordered:</span>{' '}
                            <span>{new Date(imaging.orderedDate).toLocaleString()}</span>
                          </div>
                          {imaging.radiologist && (
                            <div>
                              <span className="text-slate-500">Radiologist:</span>{' '}
                              <span className="font-medium">{imaging.radiologist}</span>
                            </div>
                          )}
                          {imaging.completedDate && (
                            <div>
                              <span className="text-slate-500">Completed:</span>{' '}
                              <span>{new Date(imaging.completedDate).toLocaleString()}</span>
                            </div>
                          )}
                        </div>

                        {imaging.findings && (
                          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                            <p className="text-sm font-semibold text-blue-900 mb-2">
                              Radiologist Findings:
                            </p>
                            <p className="text-sm text-slate-700">{imaging.findings}</p>
                          </div>
                        )}

                        {imaging.status === 'pending' && (
                          <div className="bg-amber-50 border border-amber-200 rounded p-3 mt-3">
                            <p className="text-sm text-amber-900">
                              ⏳ Study pending - Patient has not yet been imaged
                            </p>
                          </div>
                        )}
                      </div>

                      <button
                        onClick={() => onViewPatient(imaging.patientId)}
                        className="flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors whitespace-nowrap"
                      >
                        <Eye className="w-4 h-4" />
                        <span>View Patient</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Image Viewer Modal */}
      {viewingImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={() => setViewingImage(null)}
        >
          <div className="max-w-4xl w-full">
            <div className="bg-slate-900 rounded-lg overflow-hidden">
              {renderXRayImage(viewingImage)}
            </div>
            <p className="text-white text-center mt-4">Click anywhere to close</p>
          </div>
        </div>
      )}
    </>
  );
}
