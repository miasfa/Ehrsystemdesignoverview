import { 
  Server, 
  Database, 
  Shield, 
  Wifi,
  WifiOff,
  ArrowRight,
  Layers,
  Lock,
  Globe,
  Smartphone,
  AlertCircle,
} from "lucide-react";
import { useTranslation } from "../hooks/useTranslation";
import { useLanguage } from "../contexts/LanguageContext";

export function SystemArchitecture() {
  const t = useTranslation();
  const { language } = useLanguage();

  return (
    <div className="max-w-7xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-slate-900 mb-2">{t('arch.title')}</h1>
        <p className="text-slate-600">
          {t('arch.subtitle')}
        </p>
      </div>

      {/* Architecture Diagram Description */}
      <div className="bg-white rounded-xl border border-slate-200 p-8">
        <h2 className="text-xl font-semibold mb-6">{t('arch.highLevel')}</h2>
        
        {/* Layer 1: Presentation */}
        <div className="space-y-6">
          <div className="border-l-4 border-blue-500 pl-6">
            <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
              <Smartphone className="w-5 h-5 text-blue-600" />
              {t('arch.layer1')}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="font-medium mb-2">{t('arch.webApp')}</p>
                <p className="text-sm text-slate-600">
                  {t('arch.webAppDesc')}
                </p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="font-medium mb-2">{t('arch.mobileApp')}</p>
                <p className="text-sm text-slate-600">
                  {t('arch.mobileAppDesc')}
                </p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="font-medium mb-2">{t('arch.kioskMode')}</p>
                <p className="text-sm text-slate-600">
                  {t('arch.kioskModeDesc')}
                </p>
              </div>
            </div>
          </div>

          {/* Arrow */}
          <div className="flex justify-center">
            <ArrowRight className="w-6 h-6 text-slate-400 rotate-90" />
          </div>

          {/* Layer 2: API Gateway */}
          <div className="border-l-4 border-purple-500 pl-6">
            <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
              <Globe className="w-5 h-5 text-purple-600" />
              {t('arch.layer2')}
            </h3>
            <div className="bg-purple-50 p-6 rounded-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <p className="font-medium mb-2">{t('arch.responsibilities')}:</p>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>• {language === 'en' ? 'JWT-based authentication' : 'المصادقة المبنية على JWT'}</li>
                    <li>• {language === 'en' ? 'Role-based access control enforcement' : 'تطبيق التحكم في الوصول القائم على الأدوار'}</li>
                    <li>• {language === 'en' ? 'Rate limiting and DDoS protection' : 'تحديد المعدل والحماية من DDoS'}</li>
                    <li>• {language === 'en' ? 'Request routing to microservices' : 'توجيه الطلبات إلى الخدمات الدقيقة'}</li>
                    <li>• {language === 'en' ? 'API versioning management' : 'إدارة إصدارات API'}</li>
                    <li>• {language === 'en' ? 'Audit logging of all requests' : 'تسجيل تدقيق لجميع الطلبات'}</li>
                  </ul>
                </div>
                <div>
                  <p className="font-medium mb-2">{t('arch.technologies')}:</p>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>• Kong / Nginx / Traefik</li>
                    <li>• OAuth 2.0 / OpenID Connect</li>
                    <li>• Redis {language === 'en' ? 'for session management' : 'لإدارة الجلسات'}</li>
                    <li>• {language === 'en' ? 'Certificate-based auth for facilities' : 'المصادقة المبنية على الشهادات للمنشآت'}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Arrow */}
          <div className="flex justify-center">
            <ArrowRight className="w-6 h-6 text-slate-400 rotate-90" />
          </div>

          {/* Layer 3: Microservices */}
          <div className="border-l-4 border-emerald-500 pl-6">
            <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
              <Layers className="w-5 h-5 text-emerald-600" />
              {t('arch.layer3')}
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                "Patient Identity Service",
                "Clinical Documentation Service",
                "Orders Management Service",
                "Pharmacy Service",
                "Laboratory Service",
                "Imaging Service",
                "Operating Room Service",
                "Inventory Service",
                "Billing & Insurance Service",
                "Audit & Analytics Service",
                "Notification Service",
                "Sync & Replication Service",
              ].map((service, index) => (
                <div key={index} className="bg-emerald-50 p-3 rounded-lg">
                  <p className="text-sm font-medium text-slate-800">{service}</p>
                </div>
              ))}
            </div>
            <div className="mt-4 bg-emerald-100 p-4 rounded-lg">
              <p className="text-sm text-slate-700">
                <strong>Design Pattern:</strong> Each service is independently deployable, 
                has its own database, communicates via REST/gRPC, and publishes events to 
                message queue for async operations.
              </p>
            </div>
          </div>

          {/* Arrow */}
          <div className="flex justify-center">
            <ArrowRight className="w-6 h-6 text-slate-400 rotate-90" />
          </div>

          {/* Layer 4: Data Layer */}
          <div className="border-l-4 border-orange-500 pl-6">
            <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
              <Database className="w-5 h-5 text-orange-600" />
              {t('arch.layer4')}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-orange-50 p-4 rounded-lg">
                <p className="font-medium mb-2">Transactional DB</p>
                <p className="text-sm text-slate-600 mb-2">
                  PostgreSQL with CitusDB for horizontal scaling
                </p>
                <ul className="text-xs text-slate-600 space-y-1">
                  <li>• Patient records</li>
                  <li>• Clinical data</li>
                  <li>• Orders & prescriptions</li>
                  <li>• Inventory transactions</li>
                </ul>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg">
                <p className="font-medium mb-2">Document Store</p>
                <p className="text-sm text-slate-600 mb-2">
                  MongoDB for semi-structured data
                </p>
                <ul className="text-xs text-slate-600 space-y-1">
                  <li>• Clinical notes</li>
                  <li>• Lab results (complex)</li>
                  <li>• Imaging metadata</li>
                  <li>• Audit logs</li>
                </ul>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg">
                <p className="font-medium mb-2">Time-Series DB</p>
                <p className="text-sm text-slate-600 mb-2">
                  TimescaleDB for temporal data
                </p>
                <ul className="text-xs text-slate-600 space-y-1">
                  <li>• Vital signs monitoring</li>
                  <li>• Anesthesia records</li>
                  <li>• System metrics</li>
                  <li>• Audit trail timestamps</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Arrow */}
          <div className="flex justify-center">
            <ArrowRight className="w-6 h-6 text-slate-400 rotate-90" />
          </div>

          {/* Layer 5: Integration */}
          <div className="border-l-4 border-cyan-500 pl-6">
            <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
              <Server className="w-5 h-5 text-cyan-600" />
              {t('arch.layer5')}
            </h3>
            <div className="bg-cyan-50 p-6 rounded-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="font-medium mb-2">{t('arch.standardsSupport')}:</p>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>• HL7 FHIR R4 API endpoints</li>
                    <li>• DICOM for imaging integration</li>
                    <li>• ICD-10 / ICD-11 coding</li>
                    <li>• LOINC for lab results</li>
                    <li>• SNOMED CT for clinical terminology</li>
                  </ul>
                </div>
                <div>
                  <p className="font-medium mb-2">{t('arch.externalIntegrations')}:</p>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>• National ID registry</li>
                    <li>• Insurance clearinghouses</li>
                    <li>• Lab equipment (HL7 v2)</li>
                    <li>• Pharmacy management systems</li>
                    <li>• Public health surveillance</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Offline-First Architecture */}
      <div className="bg-white rounded-xl border border-slate-200 p-8">
        <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
          <WifiOff className="w-6 h-6 text-red-600" />
          {t('arch.offlineFirst')}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <h3 className="font-medium mb-2">{t('arch.clientSideStorage')}</h3>
              <ul className="text-sm text-slate-600 space-y-2">
                <li className="flex gap-2">
                  <span className="text-blue-600">•</span>
                  <span>IndexedDB stores 30 days of local data (patient lists, pending orders, formulary)</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-600">•</span>
                  <span>Service Worker caches UI assets and API responses</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-600">•</span>
                  <span>Conflict-free Replicated Data Types (CRDTs) for eventual consistency</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-600">•</span>
                  <span>Local SQLite for mobile apps with encrypted storage</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-medium mb-2">{t('arch.syncMechanism')}</h3>
              <ul className="text-sm text-slate-600 space-y-2">
                <li className="flex gap-2">
                  <span className="text-emerald-600">•</span>
                  <span>Background sync when connectivity restored</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-emerald-600">•</span>
                  <span>Operational Transform (OT) for conflict resolution</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-emerald-600">•</span>
                  <span>Delta sync (only changed data) to minimize bandwidth</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-emerald-600">•</span>
                  <span>Facility-level sync server acts as regional hub</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-slate-50 p-6 rounded-lg">
            <h3 className="font-medium mb-3">{t('arch.conflictResolutionRules')}</h3>
            <div className="space-y-3 text-sm">
              <div className="bg-white p-3 rounded border border-slate-200">
                <p className="font-medium text-slate-800 mb-1">Patient Demographics</p>
                <p className="text-slate-600">Last-write-wins with audit trail. Manual review flag for critical fields.</p>
              </div>
              <div className="bg-white p-3 rounded border border-slate-200">
                <p className="font-medium text-slate-800 mb-1">Clinical Notes</p>
                <p className="text-slate-600">Append-only. Multiple versions preserved with timestamps.</p>
              </div>
              <div className="bg-white p-3 rounded border border-slate-200">
                <p className="font-medium text-slate-800 mb-1">Medication Orders</p>
                <p className="text-slate-600">Server-authoritative. Offline orders queued for approval.</p>
              </div>
              <div className="bg-white p-3 rounded border border-slate-200">
                <p className="font-medium text-slate-800 mb-1">Inventory Transactions</p>
                <p className="text-slate-600">FIFO merge with reconciliation report.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Security Architecture */}
      <div className="bg-white rounded-xl border border-slate-200 p-8">
        <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
          <Shield className="w-6 h-6 text-purple-600" />
          {t('arch.security')}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-purple-50 p-5 rounded-lg">
            <Lock className="w-6 h-6 text-purple-600 mb-3" />
            <h3 className="font-medium mb-2">{t('arch.encryption')}</h3>
            <ul className="text-sm text-slate-600 space-y-1">
              <li>• TLS 1.3 in transit</li>
              <li>• AES-256 at rest</li>
              <li>• Field-level encryption for PII</li>
              <li>• Hardware security modules (HSM)</li>
            </ul>
          </div>

          <div className="bg-purple-50 p-5 rounded-lg">
            <Shield className="w-6 h-6 text-purple-600 mb-3" />
            <h3 className="font-medium mb-2">{t('arch.accessControl')}</h3>
            <ul className="text-sm text-slate-600 space-y-1">
              <li>• Multi-factor authentication</li>
              <li>• Role-based access (RBAC)</li>
              <li>• Attribute-based (ABAC) for patients</li>
              <li>• Break-glass emergency access</li>
            </ul>
          </div>

          <div className="bg-purple-50 p-5 rounded-lg">
            <AlertCircle className="w-6 h-6 text-purple-600 mb-3" />
            <h3 className="font-medium mb-2">{t('arch.auditCompliance')}</h3>
            <ul className="text-sm text-slate-600 space-y-1">
              <li>• Immutable audit logs</li>
              <li>• Every read/write tracked</li>
              <li>• Blockchain anchoring option</li>
              <li>• GDPR/HIPAA compliance ready</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Event-Driven Architecture */}
      <div className="bg-white rounded-xl border border-slate-200 p-8">
        <h2 className="text-xl font-semibold mb-6">{t('arch.eventDriven')}</h2>
        
        <div className="bg-slate-50 p-6 rounded-lg">
          <p className="text-sm text-slate-700 mb-4">
            Microservices communicate via event streaming for loose coupling and audit trail preservation.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="font-medium mb-2">{t('arch.eventExamples')}:</h3>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• <code className="bg-white px-2 py-0.5 rounded">PatientRegistered</code></li>
                <li>• <code className="bg-white px-2 py-0.5 rounded">OrderPlaced</code></li>
                <li>• <code className="bg-white px-2 py-0.5 rounded">MedicationDispensed</code></li>
                <li>• <code className="bg-white px-2 py-0.5 rounded">LabResultAvailable</code></li>
                <li>• <code className="bg-white px-2 py-0.5 rounded">AnomalyDetected</code></li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-2">{t('arch.messageBroker')}:</h3>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• Apache Kafka for high-throughput</li>
                <li>• RabbitMQ for task queues</li>
                <li>• Redis Streams for real-time</li>
                <li>• Event sourcing for full history</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}