import { useEffect, useState } from 'react';
import { Activity, CheckCircle, Loader2 } from 'lucide-react';
import { useHospitalStore } from './store';
import { seedUsers, seedProtocols, seedInventory, seedPatients } from './seedData';

interface ProvisioningScreenProps {
  onComplete: () => void;
}

export function ProvisioningScreen({ onComplete }: ProvisioningScreenProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [logs, setLogs] = useState<string[]>([]);

  const steps = [
    { label: 'Establishing Secure Handshake', duration: 1200 },
    { label: 'Syncing National Formulary', duration: 1500 },
    { label: 'Loading User Accounts (RBAC)', duration: 1000 },
    { label: 'Initializing Inventory Database', duration: 1300 },
    { label: 'Configuring Quick Protocols', duration: 900 },
    { label: 'Importing Patient Registry', duration: 1100 },
    { label: 'Enabling Audit Logging', duration: 800 },
    { label: 'System Ready ✓', duration: 500 },
  ];

  useEffect(() => {
    if (currentStep >= steps.length) {
      // Provision the store with seed data
      const store = useHospitalStore.getState();
      
      // Add users
      store.users.push(...seedUsers);
      
      // Add protocols
      store.quickProtocols.push(...seedProtocols);
      
      // Add inventory
      store.inventory.push(...seedInventory);
      
      // Add patients
      store.patients.push(...seedPatients);
      
      // Mark as provisioned
      store.provisionSystem();
      
      // Set default user
      store.setCurrentUser(seedUsers[0]); // Default to doctor
      
      setTimeout(onComplete, 1000);
      return;
    }

    const timer = setTimeout(() => {
      setLogs((prev) => [...prev, `✓ ${steps[currentStep].label}`]);
      setCurrentStep((prev) => prev + 1);
    }, steps[currentStep].duration);

    return () => clearTimeout(timer);
  }, [currentStep, onComplete]);

  const progress = ((currentStep + 1) / steps.length) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900 flex items-center justify-center p-6">
      <div className="max-w-2xl w-full">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-4 mb-6">
            <Activity className="w-16 h-16 text-blue-300" />
            <h1 className="text-5xl font-bold text-white">Avicenna EHR</h1>
          </div>
          <p className="text-blue-200 text-xl">Hospital-in-a-Box System</p>
          <p className="text-blue-300 text-sm mt-2">Baghdad Central Hospital</p>
        </div>

        {/* QR Code Simulation */}
        <div className="bg-white rounded-2xl p-8 mb-8 shadow-2xl">
          <div className="flex items-center justify-center mb-6">
            <div className="w-48 h-48 bg-slate-100 rounded-xl flex items-center justify-center border-4 border-blue-500">
              <div className="text-center">
                <div className="text-6xl mb-2">📱</div>
                <p className="text-sm text-slate-600 font-mono">FACILITY-001</p>
              </div>
            </div>
          </div>
          <p className="text-center text-slate-600 text-sm">
            Facility QR Code Scanned ✓
          </p>
        </div>

        {/* Progress Bar */}
        <div className="bg-white/10 rounded-full h-3 mb-6 overflow-hidden">
          <div
            className="bg-gradient-to-r from-blue-400 to-emerald-400 h-full transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Terminal Logs */}
        <div className="bg-slate-950 rounded-xl p-6 font-mono text-sm shadow-2xl border border-slate-800">
          <div className="flex items-center gap-2 mb-4 pb-3 border-b border-slate-800">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <span className="text-slate-400 ml-2">system.log</span>
          </div>

          <div className="space-y-2 max-h-64 overflow-y-auto">
            {logs.map((log, index) => (
              <div
                key={index}
                className="text-emerald-400 flex items-center gap-2 animate-in fade-in slide-in-from-left-2 duration-300"
              >
                <CheckCircle className="w-4 h-4 flex-shrink-0" />
                <span>{log}</span>
              </div>
            ))}
            {currentStep < steps.length && (
              <div className="text-blue-400 flex items-center gap-2 animate-pulse">
                <Loader2 className="w-4 h-4 animate-spin flex-shrink-0" />
                <span>{steps[currentStep].label}...</span>
              </div>
            )}
          </div>
        </div>

        {/* Status Footer */}
        <div className="mt-8 text-center">
          <p className="text-blue-200 text-sm">
            {currentStep < steps.length
              ? `Initializing system... ${Math.round(progress)}%`
              : '✓ System provisioned successfully'}
          </p>
        </div>
      </div>
    </div>
  );
}
