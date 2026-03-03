import { Server, Wifi, WifiOff, HardDrive, Cloud } from "lucide-react";

export function DeploymentStrategy() {
  return (
    <div className="max-w-7xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Deployment Strategy</h1>
        <p className="text-slate-600">
          Offline-first architecture designed for low-resource environments with intermittent connectivity
        </p>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 p-8">
        <h2 className="text-xl font-semibold mb-6">Infrastructure Tiers</h2>
        
        <div className="space-y-6">
          <div className="border-l-4 border-blue-500 pl-6">
            <h3 className="font-semibold text-lg mb-3">Tier 1: National Data Center</h3>
            <div className="bg-blue-50 p-5 rounded-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium mb-2">Components:</h4>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>• Master database (PostgreSQL cluster)</li>
                    <li>• Central authentication server</li>
                    <li>• National patient registry</li>
                    <li>• Analytics data warehouse</li>
                    <li>• Audit log archive</li>
                    <li>• API gateway (public health integrations)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Requirements:</h4>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>• Redundant power (generator + UPS)</li>
                    <li>• Fiber internet (primary + backup ISP)</li>
                    <li>• 24/7 staffing</li>
                    <li>• Physical security (access control)</li>
                    <li>• Fire suppression system</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="border-l-4 border-emerald-500 pl-6">
            <h3 className="font-semibold text-lg mb-3">Tier 2: Regional Hub (Provincial/District Hospital)</h3>
            <div className="bg-emerald-50 p-5 rounded-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium mb-2">Components:</h4>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>• Local database replica (read/write)</li>
                    <li>• Sync server for satellite facilities</li>
                    <li>• PACS storage (imaging)</li>
                    <li>• Local DNS/DHCP</li>
                    <li>• VPN concentrator</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Specifications:</h4>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>• Server: 32GB RAM, 4TB SSD</li>
                    <li>• UPS: 2 hour runtime</li>
                    <li>• Internet: 10+ Mbps symmetric</li>
                    <li>• Syncs to national every 15 minutes</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="border-l-4 border-orange-500 pl-6">
            <h3 className="font-semibold text-lg mb-3">Tier 3: Facility Server (Clinic/Health Center)</h3>
            <div className="bg-orange-50 p-5 rounded-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium mb-2">Components:</h4>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>• Local SQLite/PostgreSQL database</li>
                    <li>• Web application server</li>
                    <li>• Document storage</li>
                    <li>• Offline queue manager</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Specifications:</h4>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>• Mini PC: 8GB RAM, 256GB SSD</li>
                    <li>• UPS: 30 minute runtime</li>
                    <li>• 3G/4G backup connection</li>
                    <li>• Syncs when connectivity available</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="border-l-4 border-purple-500 pl-6">
            <h3 className="font-semibold text-lg mb-3">Tier 4: Mobile/Field (Community Health Worker)</h3>
            <div className="bg-purple-50 p-5 rounded-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium mb-2">Components:</h4>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>• Android/iOS mobile app</li>
                    <li>• Local SQLite database</li>
                    <li>• Encrypted storage</li>
                    <li>• Background sync service</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Requirements:</h4>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>• Device: Android 8+ or iOS 13+</li>
                    <li>• Storage: 4GB minimum</li>
                    <li>• Offline mode: 7 days of data</li>
                    <li>• Syncs via cellular when available</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 p-8">
        <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
          <WifiOff className="w-6 h-6 text-red-600" />
          Offline Synchronization Architecture
        </h2>

        <div className="space-y-6">
          <div className="bg-slate-50 p-5 rounded-lg">
            <h3 className="font-medium mb-3">Sync Strategy:</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded border border-slate-200">
                <h4 className="font-medium text-sm mb-2">Master-Slave Replication</h4>
                <p className="text-xs text-slate-600">
                  National center is authoritative for patient identity. Facilities are authoritative for clinical data they generate.
                </p>
              </div>
              <div className="bg-white p-4 rounded border border-slate-200">
                <h4 className="font-medium text-sm mb-2">Delta Synchronization</h4>
                <p className="text-xs text-slate-600">
                  Only changed records transmitted (based on timestamp). Reduces bandwidth by 95%.
                </p>
              </div>
              <div className="bg-white p-4 rounded border border-slate-200">
                <h4 className="font-medium text-sm mb-2">Conflict Resolution</h4>
                <p className="text-xs text-slate-600">
                  Last-write-wins for demographics. Append-only for clinical notes. Server-authoritative for orders.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-5">
            <h3 className="font-medium mb-3">Data Prioritization (When Bandwidth Limited):</h3>
            <ol className="space-y-2 text-sm text-slate-700">
              <li className="flex gap-2">
                <span className="font-semibold text-blue-600">1.</span>
                <span><strong>Critical:</strong> Medication orders, lab results, vital signs (sync immediately)</span>
              </li>
              <li className="flex gap-2">
                <span className="font-semibold text-blue-600">2.</span>
                <span><strong>High Priority:</strong> Patient demographics changes, new diagnoses (within 1 hour)</span>
              </li>
              <li className="flex gap-2">
                <span className="font-semibold text-blue-600">3.</span>
                <span><strong>Standard:</strong> Progress notes, historical data (within 24 hours)</span>
              </li>
              <li className="flex gap-2">
                <span className="font-semibold text-blue-600">4.</span>
                <span><strong>Bulk:</strong> Scanned documents, images (during off-peak hours)</span>
              </li>
            </ol>
          </div>

          <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-5">
            <h3 className="font-medium mb-3">Intermittent Connectivity Handling:</h3>
            <ul className="text-sm text-slate-700 space-y-2">
              <li>• <strong>Offline Queue:</strong> All transactions queued locally with guaranteed delivery</li>
              <li>• <strong>Exponential Backoff:</strong> Retry sync every 5min, 10min, 30min, 1hr...</li>
              <li>• <strong>Bandwidth Detection:</strong> Automatically switch to low-bandwidth mode if &lt;1 Mbps</li>
              <li>• <strong>Manual Sync Trigger:</strong> Staff can force immediate sync when connectivity restored</li>
              <li>• <strong>Sync Status Dashboard:</strong> Visual indicator of last successful sync time</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 p-8">
        <h2 className="text-xl font-semibold mb-6">Backup & Disaster Recovery</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-purple-50 p-5 rounded-lg">
            <h3 className="font-semibold mb-3">Backup Strategy:</h3>
            <ul className="text-sm text-slate-600 space-y-2">
              <li>• <strong>Continuous:</strong> WAL (Write-Ahead Log) shipping to standby server</li>
              <li>• <strong>Hourly:</strong> Incremental backups (changed data only)</li>
              <li>• <strong>Daily:</strong> Full database backup to object storage</li>
              <li>• <strong>Weekly:</strong> Offsite tape backup (air-gapped security)</li>
              <li>• <strong>Retention:</strong> 7 days hot, 90 days warm, 7 years cold</li>
            </ul>
          </div>

          <div className="bg-orange-50 p-5 rounded-lg">
            <h3 className="font-semibold mb-3">Recovery Objectives:</h3>
            <ul className="text-sm text-slate-600 space-y-2">
              <li>• <strong>RPO (Recovery Point Objective):</strong> &lt;1 hour data loss max</li>
              <li>• <strong>RTO (Recovery Time Objective):</strong> &lt;4 hours to restore service</li>
              <li>• <strong>Disaster Recovery Site:</strong> Standby in different geographic region</li>
              <li>• <strong>Quarterly DR Drills:</strong> Test failover procedures</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 p-8">
        <h2 className="text-xl font-semibold mb-4">Hardware Recommendations (Per Facility Type)</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-slate-50">
              <tr>
                <th className="px-4 py-3 text-left">Facility Type</th>
                <th className="px-4 py-3 text-left">Server</th>
                <th className="px-4 py-3 text-left">Workstations</th>
                <th className="px-4 py-3 text-left">Network</th>
                <th className="px-4 py-3 text-left">Estimated Cost</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              <tr>
                <td className="px-4 py-3 font-medium">National Hospital (500+ beds)</td>
                <td className="px-4 py-3">Dell PowerEdge R750<br/>64GB RAM, 8TB RAID</td>
                <td className="px-4 py-3">50+ thin clients</td>
                <td className="px-4 py-3">Gigabit Ethernet<br/>Redundant switches</td>
                <td className="px-4 py-3">$80,000 - $150,000</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">District Hospital (100 beds)</td>
                <td className="px-4 py-3">HP ProLiant ML350<br/>32GB RAM, 4TB</td>
                <td className="px-4 py-3">20 workstations</td>
                <td className="px-4 py-3">Managed switches<br/>WiFi coverage</td>
                <td className="px-4 py-3">$25,000 - $40,000</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">Health Center (20 beds)</td>
                <td className="px-4 py-3">Intel NUC i5<br/>16GB RAM, 512GB SSD</td>
                <td className="px-4 py-3">5-10 PCs</td>
                <td className="px-4 py-3">Unmanaged switch<br/>WiFi router</td>
                <td className="px-4 py-3">$5,000 - $10,000</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">Rural Clinic (outpatient)</td>
                <td className="px-4 py-3">Raspberry Pi 4<br/>8GB RAM, 256GB SD</td>
                <td className="px-4 py-3">2-3 tablets</td>
                <td className="px-4 py-3">WiFi router<br/>4G modem</td>
                <td className="px-4 py-3">$1,000 - $2,000</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="bg-gradient-to-r from-slate-50 to-slate-100 rounded-xl p-6 border border-slate-200">
        <h3 className="font-semibold mb-3 flex items-center gap-2">
          <Cloud className="w-5 h-5 text-blue-600" />
          Cloud vs. On-Premise Considerations
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
          <div>
            <h4 className="font-medium mb-2">Hybrid Approach (Recommended):</h4>
            <ul className="text-slate-600 space-y-1">
              <li>• National data center in cloud (AWS/Azure/GCP) with local presence</li>
              <li>• Regional hubs on-premise for data sovereignty</li>
              <li>• Facilities have local servers for offline capability</li>
              <li>• Mobile apps sync peer-to-peer if no internet</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-2">Data Sovereignty Requirements:</h4>
            <ul className="text-slate-600 space-y-1">
              <li>• Patient data stored within national borders</li>
              <li>• Cloud provider with local data centers</li>
              <li>• Government encryption key escrow option</li>
              <li>• Compliance with local health data protection laws</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
