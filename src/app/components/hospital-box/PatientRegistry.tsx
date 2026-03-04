import { useState } from 'react';
import { useHospitalStore } from './store';
import { User, Plus, Search, Shield, CheckCircle, AlertCircle, Phone, MapPin, Calendar } from 'lucide-react';
import type { Patient } from './types';

export function PatientRegistry() {
  const patients = useHospitalStore((state) => state.patients);
  const registerPatient = useHospitalStore((state) => state.registerPatient);
  const updatePatientIdentityLevel = useHospitalStore((state) => state.updatePatientIdentityLevel);
  const currentUser = useHospitalStore((state) => state.currentUser);

  const [showRegistrationForm, setShowRegistrationForm] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    dateOfBirth: '',
    gender: 'M' as 'M' | 'F' | 'O',
    nationalId: '',
    phone: '',
    address: '',
  });

  const handleRegister = () => {
    if (!formData.name || !formData.dateOfBirth || !currentUser) return;

    registerPatient({
      ...formData,
      identityLevel: 'L0',
      biometricVerified: false,
      registeredBy: currentUser.id,
    });

    setFormData({
      name: '',
      dateOfBirth: '',
      gender: 'M',
      nationalId: '',
      phone: '',
      address: '',
    });
    setShowRegistrationForm(false);
  };

  const handleVerifyBiometric = (patientId: string) => {
    updatePatientIdentityLevel(patientId, 'L2');
    alert('✓ Biometric verification successful! Patient identity level upgraded to L2.');
  };

  const filteredPatients = patients.filter(
    (p) =>
      p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.nationalId?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const canEdit = currentUser?.permissions.editPatients;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Patient Registry</h2>
          <p className="text-sm text-slate-600 mt-1">
            Total Patients: {patients.length} | Verified (L2): {patients.filter((p) => p.identityLevel === 'L2').length}
          </p>
        </div>
        {canEdit && (
          <button
            onClick={() => setShowRegistrationForm(true)}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Plus className="w-5 h-5" />
            Register New Patient
          </button>
        )}
      </div>

      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
        <input
          type="text"
          placeholder="Search by name, ID, or national ID..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Registration Form Modal */}
      {showRegistrationForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl p-6 max-w-2xl w-full">
            <h3 className="text-xl font-bold text-slate-900 mb-4">Register New Patient</h3>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Full Name *</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="e.g., Ali Hassan Mohammed"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Date of Birth *</label>
                <input
                  type="date"
                  value={formData.dateOfBirth}
                  onChange={(e) => setFormData({ ...formData, dateOfBirth: e.target.value })}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Gender *</label>
                <select
                  value={formData.gender}
                  onChange={(e) => setFormData({ ...formData, gender: e.target.value as 'M' | 'F' | 'O' })}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="M">Male</option>
                  <option value="F">Female</option>
                  <option value="O">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">National ID</label>
                <input
                  type="text"
                  value={formData.nationalId}
                  onChange={(e) => setFormData({ ...formData, nationalId: e.target.value })}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="15-digit Iraqi ID"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Phone Number</label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="+964 770 123 4567"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Address</label>
                <input
                  type="text"
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="District, Baghdad"
                />
              </div>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 mb-4">
              <p className="text-sm text-amber-800">
                <strong>Note:</strong> Patient will be registered with Identity Level <strong>L0 (Unverified)</strong>. 
                Biometric verification can be performed after registration to upgrade to L2.
              </p>
            </div>

            <div className="flex gap-3 justify-end">
              <button
                onClick={() => setShowRegistrationForm(false)}
                className="px-4 py-2 border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleRegister}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                disabled={!formData.name || !formData.dateOfBirth}
              >
                Register Patient
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Patient List */}
      <div className="grid grid-cols-1 gap-4">
        {filteredPatients.map((patient) => (
          <div
            key={patient.id}
            className="bg-white border border-slate-200 rounded-xl p-5 hover:shadow-md transition-all"
          >
            <div className="flex items-start justify-between">
              <div className="flex items-start gap-4 flex-1">
                <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <User className="w-8 h-8 text-slate-400" />
                </div>

                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-lg font-semibold text-slate-900">{patient.name}</h3>
                    <span className="text-sm text-slate-500">{patient.id}</span>
                    
                    {/* Identity Level Badge */}
                    {patient.identityLevel === 'L2' ? (
                      <div className="flex items-center gap-1 px-2 py-1 bg-emerald-100 text-emerald-800 rounded-full text-xs font-bold">
                        <Shield className="w-3 h-3" />
                        L2 VERIFIED
                      </div>
                    ) : (
                      <div className="flex items-center gap-1 px-2 py-1 bg-amber-100 text-amber-800 rounded-full text-xs font-bold">
                        <AlertCircle className="w-3 h-3" />
                        L0 UNVERIFIED
                      </div>
                    )}
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
                    <div className="flex items-center gap-2 text-slate-600">
                      <Calendar className="w-4 h-4" />
                      <span>
                        {new Date(patient.dateOfBirth).toLocaleDateString()} 
                        ({Math.floor((Date.now() - new Date(patient.dateOfBirth).getTime()) / (365.25 * 24 * 60 * 60 * 1000))} yrs)
                      </span>
                    </div>

                    <div className="flex items-center gap-2 text-slate-600">
                      <User className="w-4 h-4" />
                      <span>{patient.gender === 'M' ? 'Male' : patient.gender === 'F' ? 'Female' : 'Other'}</span>
                    </div>

                    {patient.phone && (
                      <div className="flex items-center gap-2 text-slate-600">
                        <Phone className="w-4 h-4" />
                        <span>{patient.phone}</span>
                      </div>
                    )}

                    {patient.address && (
                      <div className="flex items-center gap-2 text-slate-600">
                        <MapPin className="w-4 h-4" />
                        <span>{patient.address}</span>
                      </div>
                    )}
                  </div>

                  {patient.nationalId && (
                    <div className="mt-2 text-sm text-slate-500">
                      National ID: {patient.nationalId}
                    </div>
                  )}

                  <div className="mt-2 text-xs text-slate-400">
                    Registered: {new Date(patient.registeredAt).toLocaleString()} by {patient.registeredBy}
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col gap-2">
                {patient.identityLevel === 'L0' && canEdit && (
                  <button
                    onClick={() => handleVerifyBiometric(patient.id)}
                    className="flex items-center gap-2 px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors text-sm"
                  >
                    <CheckCircle className="w-4 h-4" />
                    Verify Biometric
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}

        {filteredPatients.length === 0 && (
          <div className="text-center py-12 text-slate-500">
            <User className="w-12 h-12 mx-auto mb-3 text-slate-300" />
            <p>No patients found</p>
          </div>
        )}
      </div>
    </div>
  );
}
