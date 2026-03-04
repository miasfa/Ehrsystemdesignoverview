import { Eye, Shield, Clock, Activity } from 'lucide-react';
import { mockAuditLogs } from './mockData';

export function PrototypeAuditLog() {
  const getActionColor = (action: string) => {
    if (action.includes('VIEW')) return 'blue';
    if (action.includes('CREATE') || action.includes('ORDER')) return 'emerald';
    if (action.includes('UPDATE') || action.includes('DISPENSE')) return 'amber';
    if (action.includes('DELETE')) return 'red';
    if (action.includes('COMPLETE') || action.includes('UPLOAD')) return 'purple';
    return 'slate';
  };

  const getActionIcon = (action: string) => {
    if (action.includes('VIEW')) return Eye;
    return Activity;
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-slate-700 to-slate-900 rounded-xl p-6 text-white">
        <div className="flex items-center gap-3 mb-3">
          <Shield className="w-8 h-8" />
          <div>
            <h2 className="text-2xl font-bold">System Audit Log</h2>
            <p className="text-slate-300">Complete immutable record of all system actions</p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
          <div className="bg-slate-800 rounded-lg p-3">
            <p className="text-sm text-slate-400 mb-1">Total Actions Today</p>
            <p className="text-2xl font-bold">{mockAuditLogs.length}</p>
          </div>
          <div className="bg-slate-800 rounded-lg p-3">
            <p className="text-sm text-slate-400 mb-1">Unique Users</p>
            <p className="text-2xl font-bold">
              {new Set(mockAuditLogs.map((log) => log.userId)).size}
            </p>
          </div>
          <div className="bg-slate-800 rounded-lg p-3">
            <p className="text-sm text-slate-400 mb-1">Resource Types</p>
            <p className="text-2xl font-bold">
              {new Set(mockAuditLogs.map((log) => log.resourceType)).size}
            </p>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl border border-slate-200 p-4">
        <div className="flex flex-wrap gap-3">
          <button className="px-4 py-2 bg-blue-50 text-blue-700 rounded-lg text-sm font-medium hover:bg-blue-100">
            All Actions
          </button>
          <button className="px-4 py-2 bg-slate-50 text-slate-700 rounded-lg text-sm font-medium hover:bg-slate-100">
            Patient Access
          </button>
          <button className="px-4 py-2 bg-slate-50 text-slate-700 rounded-lg text-sm font-medium hover:bg-slate-100">
            Medication Events
          </button>
          <button className="px-4 py-2 bg-slate-50 text-slate-700 rounded-lg text-sm font-medium hover:bg-slate-100">
            Lab Results
          </button>
          <button className="px-4 py-2 bg-slate-50 text-slate-700 rounded-lg text-sm font-medium hover:bg-slate-100">
            Administrative
          </button>
        </div>
      </div>

      {/* Audit Log Entries */}
      <div className="space-y-3">
        {mockAuditLogs.map((log) => {
          const color = getActionColor(log.action);
          const ActionIcon = getActionIcon(log.action);

          return (
            <div
              key={log.id}
              className="bg-white rounded-xl border border-slate-200 p-5 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-4">
                <div className={`p-2 bg-${color}-100 rounded-lg flex-shrink-0`}>
                  <ActionIcon className={`w-5 h-5 text-${color}-600`} />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span
                          className={`px-2 py-0.5 bg-${color}-100 text-${color}-900 text-xs font-bold rounded`}
                        >
                          {log.action.replace(/_/g, ' ')}
                        </span>
                        <span className="text-xs text-slate-500">•</span>
                        <span className="text-xs font-medium text-slate-600">
                          {log.resourceType}
                        </span>
                      </div>
                      <p className="text-sm text-slate-700 mb-2">{log.details}</p>

                      <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-slate-600">
                        <div className="flex items-center gap-1">
                          <span className="text-slate-500">User:</span>
                          <span className="font-medium">{log.userName}</span>
                          <span className="text-slate-400">({log.userId})</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          <span>{new Date(log.timestamp).toLocaleString()}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <span className="text-slate-500">IP:</span>
                          <span className="font-mono">{log.ipAddress}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <span className="text-slate-500">Resource ID:</span>
                          <span className="font-mono">{log.resourceId}</span>
                        </div>
                      </div>
                    </div>

                    <div className="text-right flex-shrink-0">
                      <p className="text-xs text-slate-500">
                        {(() => {
                          const diff = Date.now() - new Date(log.timestamp).getTime();
                          const minutes = Math.floor(diff / 60000);
                          if (minutes < 60) return `${minutes} min ago`;
                          const hours = Math.floor(minutes / 60);
                          if (hours < 24) return `${hours}h ago`;
                          return `${Math.floor(hours / 24)}d ago`;
                        })()}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Info Box */}
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
        <div className="flex gap-3">
          <Shield className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
          <div>
            <h3 className="font-semibold text-blue-900 mb-2">
              Complete Audit Trail for Compliance
            </h3>
            <p className="text-sm text-blue-800 mb-3">
              Every action in the Avicenna EHR system is logged with user identification, timestamp,
              IP address, and action details. Logs are immutable and cannot be deleted or modified,
              ensuring complete accountability and transparency.
            </p>
            <ul className="text-sm text-blue-800 space-y-1">
              <li>✓ All patient record access tracked</li>
              <li>✓ Medication dispensing fully auditable</li>
              <li>✓ Lab results and imaging access logged</li>
              <li>✓ Triage and treatment decisions recorded</li>
              <li>✓ Administrative actions monitored</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
