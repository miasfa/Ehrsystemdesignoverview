import { Search, Filter, UserPlus, Eye } from 'lucide-react';
import { mockPatients } from './mockData';
import { useState } from 'react';

interface Props {
  onViewPatient: (patientId: string) => void;
}

export function PrototypePatientList({ onViewPatient }: Props) {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterGender, setFilterGender] = useState<string>('all');

  const filteredPatients = mockPatients.filter((patient) => {
    const matchesSearch =
      patient.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      patient.nameArabic.includes(searchTerm) ||
      patient.nationalId.includes(searchTerm) ||
      patient.id.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesGender =
      filterGender === 'all' || patient.gender === filterGender;

    return matchesSearch && matchesGender;
  });

  return (
    <div className="space-y-6">
      {/* Header Actions */}
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
          <input
            type="text"
            placeholder="Search by name, ID, or national ID..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex gap-3">
          <div className="relative">
            <Filter className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <select
              value={filterGender}
              onChange={(e) => setFilterGender(e.target.value)}
              className="pl-10 pr-8 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none bg-white"
            >
              <option value="all">All Genders</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>

          <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            <UserPlus className="w-4 h-4" />
            <span className="hidden sm:inline">New Patient</span>
          </button>
        </div>
      </div>

      {/* Patient Count */}
      <div className="flex items-center justify-between">
        <p className="text-sm text-slate-600">
          Showing <span className="font-semibold">{filteredPatients.length}</span> of{' '}
          <span className="font-semibold">{mockPatients.length}</span> patients
        </p>
      </div>

      {/* Patient Cards */}
      <div className="grid gap-4">
        {filteredPatients.map((patient) => (
          <div
            key={patient.id}
            className="bg-white rounded-xl border border-slate-200 p-6 hover:shadow-lg transition-shadow"
          >
            <div className="flex items-start gap-4">
              {/* Patient Photo/Avatar */}
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0 text-white text-2xl font-bold">
                {patient.name.split(' ')[0][0]}
                {patient.name.split(' ')[1]?.[0] || ''}
              </div>

              {/* Patient Info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-1">
                      {patient.name}
                    </h3>
                    <p className="text-sm text-slate-600 mb-2" dir="rtl">
                      {patient.nameArabic}
                    </p>
                    <div className="flex flex-wrap gap-3 text-sm text-slate-600">
                      <span>
                        <strong>ID:</strong> {patient.id}
                      </span>
                      <span>
                        <strong>National ID:</strong> {patient.nationalId}
                      </span>
                      <span>
                        <strong>Age:</strong> {patient.age} years
                      </span>
                      <span>
                        <strong>Gender:</strong>{' '}
                        {patient.gender === 'male' ? 'Male' : 'Female'}
                      </span>
                      <span>
                        <strong>Blood Type:</strong> {patient.bloodType}
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={() => onViewPatient(patient.id)}
                    className="flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors whitespace-nowrap"
                  >
                    <Eye className="w-4 h-4" />
                    <span>View Details</span>
                  </button>
                </div>

                {/* Contact Info */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-3 text-sm">
                  <div>
                    <span className="text-slate-500">Phone:</span>{' '}
                    <span className="text-slate-700">{patient.phone}</span>
                  </div>
                  <div>
                    <span className="text-slate-500">Registered:</span>{' '}
                    <span className="text-slate-700">
                      {new Date(patient.registeredDate).toLocaleDateString()}
                    </span>
                  </div>
                  <div className="md:col-span-2">
                    <span className="text-slate-500">Address:</span>{' '}
                    <span className="text-slate-700">{patient.address}</span>
                  </div>
                </div>

                {/* Chronic Conditions & Allergies */}
                <div className="flex flex-wrap gap-2">
                  {patient.chronicConditions.length > 0 && (
                    <div className="flex flex-wrap gap-1">
                      {patient.chronicConditions.map((condition, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-amber-100 text-amber-800 text-xs font-medium rounded"
                        >
                          {condition}
                        </span>
                      ))}
                    </div>
                  )}
                  {patient.allergies.length > 0 && (
                    <div className="flex flex-wrap gap-1">
                      {patient.allergies.map((allergy, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-red-100 text-red-800 text-xs font-medium rounded"
                        >
                          ⚠️ Allergy: {allergy}
                        </span>
                      ))}
                    </div>
                  )}
                  {patient.chronicConditions.length === 0 &&
                    patient.allergies.length === 0 && (
                      <span className="text-xs text-slate-500 italic">
                        No chronic conditions or allergies recorded
                      </span>
                    )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredPatients.length === 0 && (
        <div className="bg-white rounded-xl border border-slate-200 p-12 text-center">
          <p className="text-slate-500">No patients found matching your search criteria.</p>
        </div>
      )}
    </div>
  );
}
