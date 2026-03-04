import { useState } from 'react';
import { 
  Database, 
  Layers, 
  GitBranch, 
  Shield,
  FileCode,
  Server,
  Cloud,
  ChevronDown,
  ChevronRight
} from 'lucide-react';

export function SystemDesign() {
  const [expandedSection, setExpandedSection] = useState<string | null>('architecture');

  const sections = {
    architecture: {
      title: 'System Architecture',
      icon: Layers,
      content: (
        <div className="space-y-4">
          <p className="text-slate-700">
            The Avicenna EHR system is built on a modular, offline-first architecture designed 
            for resource-constrained environments while maintaining enterprise-grade capabilities.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h4 className="font-semibold text-blue-900 mb-2">Frontend Layer</h4>
              <ul className="text-sm text-blue-800 space-y-1">
                <li>• React + TypeScript</li>
                <li>• Offline-first PWA</li>
                <li>• Tailwind CSS</li>
                <li>• Local state management</li>
              </ul>
            </div>
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
              <h4 className="font-semibold text-purple-900 mb-2">Backend Layer</h4>
              <ul className="text-sm text-purple-800 space-y-1">
                <li>• Node.js / Python (TBD)</li>
                <li>• RESTful API</li>
                <li>• JWT authentication</li>
                <li>• Microservices-ready</li>
              </ul>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h4 className="font-semibold text-green-900 mb-2">Data Layer</h4>
              <ul className="text-sm text-green-800 space-y-1">
                <li>• PostgreSQL (primary)</li>
                <li>• Local SQLite (offline)</li>
                <li>• Sync engine</li>
                <li>• Audit log store</li>
              </ul>
            </div>
          </div>
        </div>
      ),
    },
    database: {
      title: 'Database Schema',
      icon: Database,
      content: (
        <div className="space-y-4">
          <p className="text-slate-700">
            The database is designed with complete normalization, foreign key constraints, 
            and audit trails for every table.
          </p>
          <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
            <h4 className="font-semibold text-slate-900 mb-3">Core Tables</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
              <div className="space-y-2">
                <div className="font-medium text-slate-900">Patient Management</div>
                <ul className="text-slate-600 space-y-1 ml-4">
                  <li>• patients</li>
                  <li>• patient_identities</li>
                  <li>• patient_contacts</li>
                </ul>
              </div>
              <div className="space-y-2">
                <div className="font-medium text-slate-900">Clinical</div>
                <ul className="text-slate-600 space-y-1 ml-4">
                  <li>• encounters</li>
                  <li>• diagnoses (ICD-10)</li>
                  <li>• soap_notes</li>
                  <li>• vitals</li>
                </ul>
              </div>
              <div className="space-y-2">
                <div className="font-medium text-slate-900">Orders & Results</div>
                <ul className="text-slate-600 space-y-1 ml-4">
                  <li>• orders</li>
                  <li>• order_results</li>
                  <li>• medication_orders</li>
                  <li>• lab_orders</li>
                  <li>• imaging_orders</li>
                </ul>
              </div>
              <div className="space-y-2">
                <div className="font-medium text-slate-900">Inventory & Billing</div>
                <ul className="text-slate-600 space-y-1 ml-4">
                  <li>• inventory_items</li>
                  <li>• inventory_transactions</li>
                  <li>• invoices</li>
                  <li>• invoice_line_items</li>
                </ul>
              </div>
              <div className="space-y-2">
                <div className="font-medium text-slate-900">System</div>
                <ul className="text-slate-600 space-y-1 ml-4">
                  <li>• users</li>
                  <li>• roles</li>
                  <li>• permissions</li>
                  <li>• audit_logs</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    security: {
      title: 'Security Model',
      icon: Shield,
      content: (
        <div className="space-y-4">
          <p className="text-slate-700">
            Multi-layered security ensuring data protection, access control, and audit compliance.
          </p>
          <div className="space-y-3">
            <div className="bg-white border-l-4 border-blue-500 rounded-lg p-4">
              <h4 className="font-semibold text-slate-900 mb-2">Role-Based Access Control (RBAC)</h4>
              <p className="text-sm text-slate-600">
                Every user assigned specific roles (Doctor, Nurse, Pharmacist, etc.) with 
                granular permissions controlling what they can view, edit, and approve.
              </p>
            </div>
            <div className="bg-white border-l-4 border-purple-500 rounded-lg p-4">
              <h4 className="font-semibold text-slate-900 mb-2">Dual Signature for Controlled Substances</h4>
              <p className="text-sm text-slate-600">
                High-risk medications require witness verification with PIN validation to 
                prevent diversion and ensure accountability.
              </p>
            </div>
            <div className="bg-white border-l-4 border-green-500 rounded-lg p-4">
              <h4 className="font-semibold text-slate-900 mb-2">Complete Audit Trails</h4>
              <p className="text-sm text-slate-600">
                Every action logged with timestamp, user ID, IP address, and change details. 
                Audit logs are immutable and stored separately.
              </p>
            </div>
            <div className="bg-white border-l-4 border-amber-500 rounded-lg p-4">
              <h4 className="font-semibold text-slate-900 mb-2">Data Encryption</h4>
              <p className="text-sm text-slate-600">
                Data encrypted at rest and in transit. Patient PHI protected with additional 
                encryption layers and access logging.
              </p>
            </div>
          </div>
        </div>
      ),
    },
    modules: {
      title: 'Module Specifications',
      icon: GitBranch,
      content: (
        <div className="space-y-4">
          <p className="text-slate-700">
            Each module is designed as an independent component with clear interfaces, 
            ready for microservices architecture.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { name: 'Patient Registry', color: 'blue', features: ['L0/L2 identity levels', 'Biometric support', 'Photo capture', 'Contact management'] },
              { name: 'Clinical Station', color: 'purple', features: ['SOAP notes', 'ICD-10 diagnoses', 'Order creation', 'Quick protocols'] },
              { name: 'Laboratory', color: 'green', features: ['Order queue', 'Result entry', 'Critical result workflow', 'Quality control'] },
              { name: 'Pharmacy', color: 'red', features: ['Dispensing workflow', 'Dual signature', 'Inventory tracking', 'Controlled substances'] },
              { name: 'Radiology', color: 'indigo', features: ['Imaging orders', 'Report entry', 'Critical findings', 'PACS integration ready'] },
              { name: 'Triage', color: 'amber', features: ['Early Warning Score', 'Auto-prioritization', 'Vitals capture', 'Queue management'] },
            ].map((module) => (
              <div key={module.name} className={`bg-${module.color}-50 border border-${module.color}-200 rounded-lg p-4`}>
                <h4 className={`font-semibold text-${module.color}-900 mb-2`}>{module.name}</h4>
                <ul className={`text-sm text-${module.color}-800 space-y-1`}>
                  {module.features.map((feature, i) => (
                    <li key={i}>• {feature}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      ),
    },
    deployment: {
      title: 'Deployment Strategy',
      icon: Cloud,
      content: (
        <div className="space-y-4">
          <p className="text-slate-700">
            Flexible deployment options to support various infrastructure scenarios in Iraq.
          </p>
          <div className="space-y-3">
            <div className="bg-white rounded-lg p-4 border-2 border-slate-200">
              <h4 className="font-semibold text-slate-900 mb-2">Phase 1: Single Hospital (On-Premise)</h4>
              <ul className="text-sm text-slate-600 space-y-1 ml-4">
                <li>• Local server in hospital data center</li>
                <li>• Offline-capable workstations</li>
                <li>• Local backup systems</li>
                <li>• No internet dependency</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg p-4 border-2 border-slate-200">
              <h4 className="font-semibold text-slate-900 mb-2">Phase 2: Multi-Hospital (Hybrid)</h4>
              <ul className="text-sm text-slate-600 space-y-1 ml-4">
                <li>• Central cloud server for coordination</li>
                <li>• Hospital-level edge servers</li>
                <li>• Sync when connectivity available</li>
                <li>• Regional data redundancy</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg p-4 border-2 border-slate-200">
              <h4 className="font-semibold text-slate-900 mb-2">Phase 3: National Platform (Cloud)</h4>
              <ul className="text-sm text-slate-600 space-y-1 ml-4">
                <li>• Ministry of Health central platform</li>
                <li>• National patient registry</li>
                <li>• Inter-hospital data sharing</li>
                <li>• Analytics and reporting dashboard</li>
              </ul>
            </div>
          </div>
        </div>
      ),
    },
    tech: {
      title: 'Technology Stack',
      icon: FileCode,
      content: (
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white rounded-lg p-4 border border-slate-200">
              <h4 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                <Server className="w-5 h-5 text-blue-600" />
                Backend (Proposed)
              </h4>
              <ul className="text-sm text-slate-600 space-y-2">
                <li><strong>Language:</strong> Node.js or Python (FastAPI)</li>
                <li><strong>Framework:</strong> Express.js / FastAPI</li>
                <li><strong>Database:</strong> PostgreSQL 14+</li>
                <li><strong>ORM:</strong> Prisma / SQLAlchemy</li>
                <li><strong>Auth:</strong> JWT + bcrypt</li>
                <li><strong>Validation:</strong> Zod / Pydantic</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg p-4 border border-slate-200">
              <h4 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                <FileCode className="w-5 h-5 text-purple-600" />
                Frontend (Current)
              </h4>
              <ul className="text-sm text-slate-600 space-y-2">
                <li><strong>Framework:</strong> React 18 + TypeScript</li>
                <li><strong>Routing:</strong> React Router v7</li>
                <li><strong>Styling:</strong> Tailwind CSS v4</li>
                <li><strong>State:</strong> Zustand</li>
                <li><strong>Forms:</strong> React Hook Form</li>
                <li><strong>Icons:</strong> Lucide React</li>
              </ul>
            </div>
          </div>
        </div>
      ),
    },
  };

  const toggleSection = (key: string) => {
    setExpandedSection(expandedSection === key ? null : key);
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-slate-900 mb-3">System Design</h1>
        <p className="text-lg text-slate-600 max-w-4xl">
          Technical architecture, database design, security model, and deployment strategy 
          for the Avicenna EHR system.
        </p>
      </div>

      {/* Expandable Sections */}
      <div className="space-y-4">
        {Object.entries(sections).map(([key, section]) => {
          const Icon = section.icon;
          const isExpanded = expandedSection === key;

          return (
            <div key={key} className="bg-white rounded-xl border-2 border-slate-200 overflow-hidden">
              <button
                onClick={() => toggleSection(key)}
                className="w-full p-6 flex items-center justify-between hover:bg-slate-50 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-50 rounded-lg">
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h2 className="text-xl font-semibold text-slate-900">{section.title}</h2>
                </div>
                {isExpanded ? (
                  <ChevronDown className="w-6 h-6 text-slate-400" />
                ) : (
                  <ChevronRight className="w-6 h-6 text-slate-400" />
                )}
              </button>
              
              {isExpanded && (
                <div className="px-6 pb-6 border-t border-slate-200 pt-6 animate-in slide-in-from-top-2">
                  {section.content}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-lg p-4 border border-slate-200 text-center">
          <div className="text-3xl font-bold text-blue-600">10</div>
          <div className="text-sm text-slate-600 mt-1">Core Modules</div>
        </div>
        <div className="bg-white rounded-lg p-4 border border-slate-200 text-center">
          <div className="text-3xl font-bold text-purple-600">35+</div>
          <div className="text-sm text-slate-600 mt-1">Database Tables</div>
        </div>
        <div className="bg-white rounded-lg p-4 border border-slate-200 text-center">
          <div className="text-3xl font-bold text-green-600">8</div>
          <div className="text-sm text-slate-600 mt-1">User Roles</div>
        </div>
        <div className="bg-white rounded-lg p-4 border border-slate-200 text-center">
          <div className="text-3xl font-bold text-amber-600">100%</div>
          <div className="text-sm text-slate-600 mt-1">Audit Coverage</div>
        </div>
      </div>
    </div>
  );
}
