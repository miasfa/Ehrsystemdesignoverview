import { Code, CheckCircle } from "lucide-react";

// Helper function to get color classes
function getColorClasses(color: string) {
  const colors: Record<string, { bg: string; border: string; text: string; check: string }> = {
    blue: { bg: "bg-blue-50", border: "border-blue-200", text: "text-blue-900", check: "text-blue-600" },
    purple: { bg: "bg-purple-50", border: "border-purple-200", text: "text-purple-900", check: "text-purple-600" },
    emerald: { bg: "bg-emerald-50", border: "border-emerald-200", text: "text-emerald-900", check: "text-emerald-600" },
    orange: { bg: "bg-orange-50", border: "border-orange-200", text: "text-orange-900", check: "text-orange-600" },
    red: { bg: "bg-red-50", border: "border-red-200", text: "text-red-900", check: "text-red-600" },
    indigo: { bg: "bg-indigo-50", border: "border-indigo-200", text: "text-indigo-900", check: "text-indigo-600" },
    cyan: { bg: "bg-cyan-50", border: "border-cyan-200", text: "text-cyan-900", check: "text-cyan-600" },
    amber: { bg: "bg-amber-50", border: "border-amber-200", text: "text-amber-900", check: "text-amber-600" },
    pink: { bg: "bg-pink-50", border: "border-pink-200", text: "text-pink-900", check: "text-pink-600" },
  };
  return colors[color] || colors.blue;
}

export function TechStack() {
  return (
    <div className="max-w-7xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Recommended Technology Stack</h1>
        <p className="text-slate-600">
          Production-grade technologies selected for reliability, scalability, and long-term maintainability
        </p>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 p-8">
        <h2 className="text-xl font-semibold mb-6">Full Stack Architecture</h2>
        
        <div className="space-y-6">
          {[
            {
              layer: "Frontend / User Interface",
              color: "blue",
              primary: {
                tech: "React 18+ with TypeScript",
                reason: "Component-based, strong ecosystem, TypeScript for type safety"
              },
              additional: [
                "Tailwind CSS for styling",
                "React Query for data fetching/caching",
                "Recharts for analytics visualizations",
                "React Hook Form for complex forms",
                "Zustand for state management",
                "PWA with Workbox for offline support"
              ]
            },
            {
              layer: "Mobile Applications",
              color: "purple",
              primary: {
                tech: "React Native or Flutter",
                reason: "Cross-platform (iOS/Android), code reuse with web"
              },
              additional: [
                "Expo for React Native development acceleration",
                "SQLite for local database",
                "Offline-first with WatermelonDB",
                "React Native Paper (Material Design)",
                "Biometric authentication libraries"
              ]
            },
            {
              layer: "Backend / API Layer",
              color: "emerald",
              primary: {
                tech: "Node.js with Express / NestJS",
                reason: "JavaScript across stack, async I/O, large ecosystem. Alternative: Python FastAPI"
              },
              additional: [
                "GraphQL with Apollo Server (flexible queries)",
                "REST APIs for external integrations",
                "gRPC for microservice communication",
                "Passport.js for authentication",
                "Bull for job queues",
                "Joi for input validation"
              ]
            },
            {
              layer: "Databases",
              color: "orange",
              primary: {
                tech: "PostgreSQL 15+ (Primary Transactional DB)",
                reason: "ACID compliance, mature, excellent for healthcare data, JSON support"
              },
              additional: [
                "CitusDB extension for horizontal scaling",
                "TimescaleDB for time-series (vital signs)",
                "Redis for caching and session management",
                "MongoDB for unstructured clinical notes",
                "Elasticsearch for full-text search"
              ]
            },
            {
              layer: "Message Queue / Event Streaming",
              color: "red",
              primary: {
                tech: "Apache Kafka or RabbitMQ",
                reason: "Reliable event streaming, audit trail preservation, microservice decoupling"
              },
              additional: [
                "Kafka for high-throughput event log",
                "RabbitMQ for task queues",
                "Redis Streams for real-time updates",
                "WebSockets for live clinical data"
              ]
            },
            {
              layer: "Authentication & Authorization",
              color: "indigo",
              primary: {
                tech: "Keycloak or Auth0",
                reason: "OpenID Connect, SAML, LDAP integration, mature RBAC"
              },
              additional: [
                "OAuth 2.0 for third-party integrations",
                "JWT tokens with short expiry",
                "FIDO2/WebAuthn for passwordless",
                "TOTP for 2FA (Google Authenticator)"
              ]
            },
            {
              layer: "File Storage",
              color: "cyan",
              primary: {
                tech: "MinIO (S3-compatible) or AWS S3",
                reason: "Scalable object storage, encryption at rest, versioning"
              },
              additional: [
                "DICOM storage with Orthanc",
                "PDF rendering with Puppeteer",
                "Image optimization pipeline",
                "Encrypted storage buckets"
              ]
            },
            {
              layer: "Monitoring & Observability",
              color: "amber",
              primary: {
                tech: "Prometheus + Grafana",
                reason: "Metrics collection, alerting, dashboards"
              },
              additional: [
                "ELK Stack (Elasticsearch, Logstash, Kibana) for logs",
                "Jaeger for distributed tracing",
                "Sentry for error tracking",
                "Uptime monitoring (UptimeRobot/Pingdom)"
              ]
            },
            {
              layer: "CI/CD Pipeline",
              color: "pink",
              primary: {
                tech: "GitLab CI or GitHub Actions",
                reason: "Automated testing, containerized deployments"
              },
              additional: [
                "Docker for containerization",
                "Kubernetes for orchestration (national scale)",
                "Ansible for configuration management",
                "ArgoCD for GitOps deployments"
              ]
            },
          ].map((section, index) => {
            const colors = getColorClasses(section.color);
            return (
            <div key={index} className={`${colors.bg} border ${colors.border} rounded-lg p-5`}>
              <h3 className={`font-semibold text-lg ${colors.text} mb-3`}>{section.layer}</h3>
              <div className={`bg-white p-4 rounded border border-${section.color}-300 mb-4`}>
                <p className={`font-medium ${colors.text} mb-1`}>{section.primary.tech}</p>
                <p className="text-sm text-slate-600">{section.primary.reason}</p>
              </div>
              <div className="space-y-1.5">
                {section.additional.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <CheckCircle className={`w-4 h-4 ${colors.check} flex-shrink-0 mt-0.5`} />
                    <span className="text-sm text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            );
          })}
        </div>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 p-8">
        <h2 className="text-xl font-semibold mb-6">Healthcare-Specific Integrations</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-blue-50 p-5 rounded-lg">
            <h3 className="font-semibold mb-3">HL7 Integration Engine:</h3>
            <ul className="text-sm text-slate-600 space-y-2">
              <li>• <strong>Mirth Connect:</strong> Open-source HL7 interface engine</li>
              <li>• <strong>HL7 v2.x:</strong> For legacy lab/imaging equipment</li>
              <li>• <strong>HL7 FHIR R4:</strong> Modern REST API standard</li>
              <li>• <strong>IHE Profiles:</strong> XDS, PIX, PDQ for interoperability</li>
            </ul>
          </div>

          <div className="bg-purple-50 p-5 rounded-lg">
            <h3 className="font-semibold mb-3">DICOM for Imaging:</h3>
            <ul className="text-sm text-slate-600 space-y-2">
              <li>• <strong>Orthanc:</strong> Lightweight DICOM server</li>
              <li>• <strong>dcm4che:</strong> DICOM toolkit (Java)</li>
              <li>• <strong>Cornerstone.js:</strong> Web-based DICOM viewer</li>
              <li>• <strong>OHIF Viewer:</strong> Open-source image viewer</li>
            </ul>
          </div>

          <div className="bg-emerald-50 p-5 rounded-lg">
            <h3 className="font-semibold mb-3">Clinical Terminology:</h3>
            <ul className="text-sm text-slate-600 space-y-2">
              <li>• <strong>ICD-10/ICD-11:</strong> Diagnosis coding API</li>
              <li>• <strong>LOINC:</strong> Laboratory test codes</li>
              <li>• <strong>SNOMED CT:</strong> Clinical terminology</li>
              <li>• <strong>RxNorm:</strong> Medication terminology (US) or local formulary</li>
            </ul>
          </div>

          <div className="bg-orange-50 p-5 rounded-lg">
            <h3 className="font-semibold mb-3">Machine Learning / AI:</h3>
            <ul className="text-sm text-slate-600 space-y-2">
              <li>• <strong>Python + scikit-learn:</strong> Fraud detection models</li>
              <li>• <strong>TensorFlow:</strong> Deep learning for diagnostics (future)</li>
              <li>• <strong>spaCy:</strong> NLP for clinical note extraction</li>
              <li>• <strong>MLflow:</strong> Model versioning and deployment</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 p-8">
        <h2 className="text-xl font-semibold mb-4">Development Tools & Best Practices</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h3 className="font-medium mb-2">Version Control:</h3>
            <ul className="text-sm text-slate-600 space-y-1">
              <li>• Git with GitFlow workflow</li>
              <li>• Protected main branch</li>
              <li>• Code review mandatory (2+ reviewers)</li>
              <li>• Semantic versioning</li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium mb-2">Testing:</h3>
            <ul className="text-sm text-slate-600 space-y-1">
              <li>• Jest for unit tests (80% coverage min)</li>
              <li>• Cypress for E2E tests</li>
              <li>• K6 for load testing</li>
              <li>• OWASP ZAP for security testing</li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium mb-2">Documentation:</h3>
            <ul className="text-sm text-slate-600 space-y-1">
              <li>• OpenAPI/Swagger for API docs</li>
              <li>• Storybook for UI components</li>
              <li>• Confluence/Notion for design docs</li>
              <li>• Architecture Decision Records (ADR)</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-slate-50 to-slate-100 rounded-xl p-6 border border-slate-200">
        <h3 className="font-semibold mb-4">Licensing & Cost Considerations</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
          <div>
            <h4 className="font-medium mb-2">Open Source Components (Zero License Cost):</h4>
            <p className="text-slate-600 mb-2">PostgreSQL, React, Node.js, Keycloak, Mirth Connect, Orthanc, Grafana, Prometheus</p>
            <p className="text-slate-600"><strong>Advantages:</strong> No vendor lock-in, community support, full control</p>
          </div>
          <div>
            <h4 className="font-medium mb-2">Commercial Components (Consider for Enterprise):</h4>
            <p className="text-slate-600 mb-2">AWS/Azure/GCP (cloud), Datadog (monitoring), Auth0 (authentication), Tableau (analytics)</p>
            <p className="text-slate-600"><strong>Advantages:</strong> Enterprise support, SLA guarantees, managed services</p>
          </div>
        </div>
      </div>
    </div>
  );
}