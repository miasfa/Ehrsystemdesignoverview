import { 
  Target, 
  Globe, 
  Shield, 
  Zap, 
  Users, 
  Database,
  CheckCircle,
  TrendingUp
} from 'lucide-react';

export function ProjectOverview() {
  const keyGoals = [
    {
      title: 'Transparency & Traceability',
      description: 'Every action logged with complete audit trails',
      icon: Shield,
    },
    {
      title: 'Resource Control',
      description: 'End-to-end tracking of medications, supplies, and equipment',
      icon: Database,
    },
    {
      title: 'Offline-First Architecture',
      description: 'Works in low-infrastructure environments with automatic sync',
      icon: Zap,
    },
    {
      title: 'National Scalability',
      description: 'Start with one hospital, scale to nationwide platform',
      icon: Globe,
    },
  ];

  const coreModules = [
    { name: 'Patient Registry & Identity Management', status: 'Designed' },
    { name: 'Clinical Documentation (SOAP Notes)', status: 'Designed' },
    { name: 'Orders & Results (Lab/Imaging/Meds)', status: 'Designed' },
    { name: 'Pharmacy & Controlled Substances', status: 'Designed' },
    { name: 'Laboratory & Critical Results', status: 'Designed' },
    { name: 'Radiology & Imaging', status: 'Designed' },
    { name: 'Intelligent Triage (Early Warning Score)', status: 'Designed' },
    { name: 'Billing & Auto-Invoicing', status: 'Designed' },
    { name: 'Audit Logs & Compliance', status: 'Designed' },
    { name: 'Role-Based Access Control (RBAC)', status: 'Designed' },
  ];

  const milestones = [
    {
      phase: 'Phase 1: Foundation',
      status: 'In Progress',
      progress: 60,
      items: [
        'Requirements gathering ✓',
        'System architecture design ✓',
        'Database schema design ✓',
        'Core module specifications ✓',
        'UI/UX prototypes - In Progress',
      ],
    },
    {
      phase: 'Phase 2: Single Hospital Pilot',
      status: 'Planning',
      progress: 10,
      items: [
        'Backend API development',
        'Frontend implementation',
        'Offline sync mechanism',
        'Security & authentication',
        'Testing & validation',
      ],
    },
    {
      phase: 'Phase 3: Deployment & Refinement',
      status: 'Not Started',
      progress: 0,
      items: [
        'Deploy to pilot hospital',
        'Staff training',
        'Monitor real-world usage',
        'Collect feedback',
        'Iterate and improve',
      ],
    },
    {
      phase: 'Phase 4: National Expansion',
      status: 'Future',
      progress: 0,
      items: [
        'Multi-hospital architecture',
        'National patient registry',
        'Interoperability standards',
        'Government integration',
        'Scale to nationwide deployment',
      ],
    },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-slate-900 mb-3">Project Overview</h1>
        <p className="text-lg text-slate-600 max-w-4xl">
          Avicenna EHR is designed to bring modern healthcare technology to Iraq, starting with 
          a single hospital pilot and scaling to a national health information system.
        </p>
      </div>

      {/* Vision Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-8 text-white">
        <div className="flex items-start gap-4 mb-4">
          <Target className="w-8 h-8" />
          <div>
            <h2 className="text-2xl font-bold mb-2">Vision</h2>
            <p className="text-blue-100 text-lg">
              Transform Iraqi healthcare from paper-based workflows to a modern, transparent, 
              and accountable digital infrastructure that prioritizes patient safety, 
              resource control, and data-driven decision making.
            </p>
          </div>
        </div>
      </div>

      {/* Key Goals */}
      <div>
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Key Goals</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {keyGoals.map((goal) => {
            const Icon = goal.icon;
            return (
              <div key={goal.title} className="bg-white rounded-xl p-6 border border-slate-200">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-50 rounded-lg">
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">{goal.title}</h3>
                    <p className="text-slate-600">{goal.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Core Modules */}
      <div className="bg-white rounded-xl p-6 border border-slate-200">
        <div className="flex items-center gap-3 mb-6">
          <Users className="w-6 h-6 text-slate-900" />
          <h2 className="text-2xl font-bold text-slate-900">Core Modules</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {coreModules.map((module) => (
            <div 
              key={module.name} 
              className="flex items-start gap-3 p-3 rounded-lg border border-slate-200 hover:bg-slate-50 transition-colors"
            >
              <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
              <div className="flex-1">
                <div className="font-medium text-slate-900">{module.name}</div>
                <div className="text-sm text-green-600">{module.status}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Roadmap */}
      <div>
        <div className="flex items-center gap-3 mb-6">
          <TrendingUp className="w-6 h-6 text-slate-900" />
          <h2 className="text-2xl font-bold text-slate-900">Development Roadmap</h2>
        </div>
        <div className="space-y-6">
          {milestones.map((milestone, index) => (
            <div 
              key={milestone.phase} 
              className="bg-white rounded-xl p-6 border-2 border-slate-200"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-700 font-bold flex items-center justify-center">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">{milestone.phase}</h3>
                    <div className={`text-sm font-medium ${
                      milestone.status === 'In Progress' ? 'text-blue-600' :
                      milestone.status === 'Planning' ? 'text-amber-600' :
                      milestone.status === 'Not Started' ? 'text-slate-400' :
                      'text-slate-400'
                    }`}>
                      {milestone.status}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-32 bg-slate-200 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full transition-all ${
                        milestone.status === 'In Progress' ? 'bg-blue-600' :
                        milestone.status === 'Planning' ? 'bg-amber-600' :
                        'bg-slate-400'
                      }`}
                      style={{ width: `${milestone.progress}%` }}
                    />
                  </div>
                  <span className="text-sm font-semibold text-slate-600 w-12">
                    {milestone.progress}%
                  </span>
                </div>
              </div>
              <ul className="space-y-2 ml-11">
                {milestone.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="text-sm text-slate-600 flex items-start gap-2">
                    <span className="text-slate-400 mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Key Principles */}
      <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Key Design Principles</h2>
        <ul className="space-y-2">
          <li className="flex items-start gap-2">
            <CheckCircle className="w-5 h-5 text-amber-600 mt-0.5" />
            <span className="text-slate-700">
              <strong>Enterprise-grade features</strong> with low infrastructure requirements
            </span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle className="w-5 h-5 text-amber-600 mt-0.5" />
            <span className="text-slate-700">
              <strong>Closed-loop workflows</strong> for every order and result
            </span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle className="w-5 h-5 text-amber-600 mt-0.5" />
            <span className="text-slate-700">
              <strong>Safety-first design</strong> with critical result notifications and dual signatures
            </span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle className="w-5 h-5 text-amber-600 mt-0.5" />
            <span className="text-slate-700">
              <strong>Complete auditability</strong> of every action, change, and transaction
            </span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle className="w-5 h-5 text-amber-600 mt-0.5" />
            <span className="text-slate-700">
              <strong>Modular architecture</strong> ready for microservices and national scaling
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}
