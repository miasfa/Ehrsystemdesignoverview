import { useState } from 'react';
import { 
  Archive, 
  FolderOpen, 
  FileText, 
  Image, 
  Code,
  Calendar,
  ChevronRight
} from 'lucide-react';

export function ArchiveViewer() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const archiveItems = [
    {
      id: 'hospital-box',
      title: 'Hospital-in-a-Box Prototype',
      category: 'prototypes',
      date: 'March 4, 2026',
      description: 'Complete functional prototype with 7 working modules including Clinical Station, Pharmacy, Laboratory, Radiology, Triage, Inventory, and Patient Registry',
      type: 'demo',
      icon: Code,
      color: 'emerald',
      status: 'Completed',
      links: [
        { label: 'View Demo', path: '/archive/hospital-box' },
        { label: 'Source Code', path: '/archive/hospital-box/code' },
      ],
    },
    {
      id: 'ui-prototypes',
      title: 'UI/UX Prototypes',
      category: 'designs',
      date: 'March 3, 2026',
      description: 'Early UI mockups for patient registration, medication dispensing, clinical encounters, vital signs, and lab orders',
      type: 'designs',
      icon: Image,
      color: 'purple',
      status: 'Reference',
      links: [
        { label: 'View Prototypes', path: '/archive/ui-prototypes' },
      ],
    },
    {
      id: 'database-schema',
      title: 'Database Schema Documentation',
      category: 'documentation',
      date: 'March 2, 2026',
      description: 'Complete database schema with 35+ tables, relationships, and constraints for all core modules',
      type: 'documentation',
      icon: FileText,
      color: 'blue',
      status: 'Current',
      links: [
        { label: 'View Schema', path: '/archive/database' },
      ],
    },
    {
      id: 'module-specs',
      title: 'Module Specifications',
      category: 'documentation',
      date: 'March 1, 2026',
      description: 'Detailed specifications for Pharmacy, Lab, Inventory, Audit, Triage, Clinical Documentation, Orders, and Patient Identity modules',
      type: 'documentation',
      icon: FileText,
      color: 'blue',
      status: 'Current',
      links: [
        { label: 'View Modules', path: '/archive/modules' },
      ],
    },
    {
      id: 'architecture',
      title: 'System Architecture Design',
      category: 'documentation',
      date: 'February 28, 2026',
      description: 'Complete system architecture including offline-first design, sync mechanisms, and microservices readiness',
      type: 'documentation',
      icon: FileText,
      color: 'blue',
      status: 'Current',
      links: [
        { label: 'View Architecture', path: '/archive/architecture' },
      ],
    },
    {
      id: 'strategy',
      title: 'Strategic Planning Documents',
      category: 'documentation',
      date: 'February 27, 2026',
      description: 'Vision, goals, problem statement, and roadmap for transitioning from paper-based to digital healthcare in Iraq',
      type: 'documentation',
      icon: FileText,
      color: 'blue',
      status: 'Current',
      links: [
        { label: 'View Strategy', path: '/archive/strategy' },
      ],
    },
    {
      id: 'getting-started',
      title: 'Getting Started Guide',
      category: 'documentation',
      date: 'March 4, 2026',
      description: 'Interactive demo scenarios with step-by-step instructions for testing all Hospital-in-a-Box features',
      type: 'documentation',
      icon: FileText,
      color: 'amber',
      status: 'Reference',
      links: [
        { label: 'View Guide', path: '/archive/getting-started' },
      ],
    },
  ];

  const categories = [
    { id: 'all', label: 'All Items', count: archiveItems.length },
    { id: 'prototypes', label: 'Prototypes', count: archiveItems.filter(i => i.category === 'prototypes').length },
    { id: 'designs', label: 'Designs', count: archiveItems.filter(i => i.category === 'designs').length },
    { id: 'documentation', label: 'Documentation', count: archiveItems.filter(i => i.category === 'documentation').length },
  ];

  const filteredItems = selectedCategory === 'all' 
    ? archiveItems 
    : archiveItems.filter(item => item.category === selectedCategory);

  const getColorClasses = (color: string) => {
    const colors: Record<string, string> = {
      emerald: 'bg-emerald-50 text-emerald-600 border-emerald-200',
      purple: 'bg-purple-50 text-purple-600 border-purple-200',
      blue: 'bg-blue-50 text-blue-600 border-blue-200',
      amber: 'bg-amber-50 text-amber-600 border-amber-200',
    };
    return colors[color] || colors.blue;
  };

  const getStatusBadge = (status: string) => {
    const statusColors: Record<string, string> = {
      Completed: 'bg-green-100 text-green-700',
      Current: 'bg-blue-100 text-blue-700',
      Reference: 'bg-slate-100 text-slate-700',
    };
    return statusColors[status] || statusColors.Reference;
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-slate-900 mb-3">Archive</h1>
        <p className="text-lg text-slate-600 max-w-4xl">
          Browse previous work, prototypes, and documentation created during the development process.
        </p>
      </div>

      {/* Info Banner */}
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
        <div className="flex items-start gap-3">
          <Archive className="w-6 h-6 text-blue-600 mt-0.5" />
          <div>
            <h3 className="font-semibold text-blue-900 mb-1">About the Archive</h3>
            <p className="text-sm text-blue-800">
              All previous work has been preserved here for reference. The Hospital-in-a-Box prototype 
              demonstrates a fully functional system with all core modules implemented. You can explore 
              the working demo or review the technical documentation.
            </p>
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              selectedCategory === category.id
                ? 'bg-blue-600 text-white'
                : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
            }`}
          >
            {category.label} ({category.count})
          </button>
        ))}
      </div>

      {/* Archive Items Grid */}
      <div className="grid grid-cols-1 gap-6">
        {filteredItems.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.id}
              className="bg-white rounded-xl p-6 border-2 border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-start gap-4 flex-1">
                  <div className={`p-3 rounded-lg border ${getColorClasses(item.color)}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-semibold text-slate-900">{item.title}</h3>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusBadge(item.status)}`}>
                        {item.status}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-500 mb-3">
                      <Calendar className="w-4 h-4" />
                      <span>{item.date}</span>
                    </div>
                    <p className="text-slate-600 mb-4">{item.description}</p>
                    
                    {/* Links */}
                    <div className="flex flex-wrap gap-2">
                      {item.links.map((link, index) => (
                        <a
                          key={index}
                          href={link.path}
                          className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200 transition-colors text-sm font-medium"
                        >
                          {link.label}
                          <ChevronRight className="w-4 h-4" />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Empty State */}
      {filteredItems.length === 0 && (
        <div className="text-center py-12 bg-white rounded-xl border border-slate-200">
          <FolderOpen className="w-12 h-12 text-slate-300 mx-auto mb-3" />
          <p className="text-slate-500">No items in this category</p>
        </div>
      )}

      {/* Stats */}
      <div className="bg-gradient-to-r from-slate-50 to-slate-100 border border-slate-200 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-slate-900 mb-4">Archive Statistics</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="text-3xl font-bold text-emerald-600">1</div>
            <div className="text-sm text-slate-600 mt-1">Working Prototype</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600">5</div>
            <div className="text-sm text-slate-600 mt-1">UI Mockups</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600">6</div>
            <div className="text-sm text-slate-600 mt-1">Documentation Pages</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-amber-600">7</div>
            <div className="text-sm text-slate-600 mt-1">Functional Modules</div>
          </div>
        </div>
      </div>
    </div>
  );
}
