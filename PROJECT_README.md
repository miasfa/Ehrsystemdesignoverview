# Avicenna EHR System

## 🏥 Project Overview

**Avicenna EHR** is a modern Electronic Health Record system being designed for hospitals in Iraq. The goal is to transition from paper-based workflows to a transparent, accountable digital infrastructure that can eventually scale into a national health platform.

### Key Objectives

- **Transparency & Traceability**: Complete audit trails for every action
- **Resource Control**: End-to-end tracking of medications, supplies, and equipment
- **Offline-First Architecture**: Works in low-infrastructure environments
- **Safety-First Design**: Critical result notifications, dual signatures for controlled substances
- **National Scalability**: Start with one hospital, scale to nationwide platform

---

## 📁 Project Structure (Restructured - March 4, 2026)

The project has been completely reorganized for clarity and ease of development:

```
/src/app/
├── App.tsx                          # Main application entry point
├── routes.ts                        # React Router configuration
├── components/
│   ├── Layout.tsx                   # Main layout with navigation
│   ├── Home.tsx                     # Landing page / dashboard
│   ├── ProjectOverview.tsx          # Vision, goals, roadmap
│   ├── SystemDesign.tsx             # Technical architecture & specs
│   ├── ArchiveViewer.tsx            # Browse previous work
│   ├── NotFound.tsx                 # 404 page
│   └── hospital-box/                # ARCHIVED: Hospital-in-a-Box prototype
│       ├── HospitalBox.tsx          # Main prototype container
│       ├── ClinicalStation.tsx      # Clinical documentation module
│       ├── Pharmacy.tsx             # Pharmacy & dispensing module
│       ├── Laboratory.tsx           # Lab orders & results
│       ├── Radiology.tsx            # Imaging orders & results
│       ├── IntelligentTriage.tsx    # Triage with Early Warning Score
│       ├── PatientRegistry.tsx      # Patient registration
│       ├── InventoryManagement.tsx  # Inventory tracking
│       ├── store.ts                 # Zustand state management
│       ├── types.ts                 # TypeScript definitions
│       └── seed-data.ts             # Demo data
├── contexts/
│   └── LanguageContext.tsx          # i18n context (EN/AR)
└── translations/
    └── index.ts                     # Translation strings
```

---

## 🚀 Current Status

### ✅ Completed
- [x] Project vision and strategic planning
- [x] Complete system architecture design
- [x] Database schema (35+ tables)
- [x] Module specifications (10 core modules)
- [x] Security model (RBAC, dual signatures, audit logs)
- [x] Working Hospital-in-a-Box prototype with 7 modules
- [x] UI/UX prototypes
- [x] Project restructure and documentation

### 🔄 In Progress
- [ ] Planning next development phase
- [ ] Backend API design
- [ ] Offline sync mechanism design

### 📋 Upcoming
- [ ] Backend implementation
- [ ] Frontend-backend integration
- [ ] Security implementation (JWT, encryption)
- [ ] Testing & validation
- [ ] Pilot deployment preparation

---

## 🏗️ System Architecture

### Frontend Layer
- **Framework**: React 18 + TypeScript
- **Routing**: React Router v7
- **Styling**: Tailwind CSS v4
- **State Management**: Zustand
- **Forms**: React Hook Form
- **Icons**: Lucide React

### Backend Layer (Planned)
- **Language**: Node.js or Python (TBD)
- **Framework**: Express.js or FastAPI
- **Database**: PostgreSQL 14+
- **Auth**: JWT + bcrypt
- **API**: RESTful

### Key Features
- **Offline-First**: Works without internet connection
- **Complete Auditability**: Every action logged
- **Role-Based Access**: 8+ user roles with granular permissions
- **Closed-Loop Workflows**: Orders → Results → Notifications
- **Safety Features**: Critical result alerts, dual signatures

---

## 🎯 Core Modules

1. **Patient Registry & Identity Management**
   - L0 (basic) and L2 (biometric) identity levels
   - Photo capture and demographic data
   - Unique patient identifier generation

2. **Clinical Documentation**
   - SOAP notes (Subjective, Objective, Assessment, Plan)
   - ICD-10 diagnosis coding
   - Quick protocols for common conditions

3. **Orders & Results**
   - Lab orders with critical result workflow
   - Imaging orders with radiologist reports
   - Medication orders with prescription tracking
   - Closed-loop communication

4. **Pharmacy & Dispensing**
   - Medication order queue
   - Dual signature for controlled substances
   - Inventory integration
   - Anti-diversion controls

5. **Laboratory**
   - Order acceptance and result entry
   - Critical result mandatory acknowledgment
   - Quality control tracking

6. **Radiology & Imaging**
   - Imaging order management
   - Report entry with structured templates
   - Critical findings workflow

7. **Intelligent Triage**
   - Auto-calculated Early Warning Score (EWS)
   - Priority-based routing (Routine/Urgent/Emergency)
   - Vitals capture with validation

8. **Inventory Management**
   - Real-time stock tracking
   - Low-stock alerts
   - Controlled substance monitoring

9. **Billing & Invoicing**
   - Auto-invoice generation from encounters
   - Line-item tracking linked to orders
   - Payment processing

10. **Audit & Compliance**
    - Complete audit logs for all actions
    - User activity tracking
    - Immutable audit trail

---

## 📚 Archive

All previous work has been preserved in the Archive section:

- **Hospital-in-a-Box Prototype**: Fully functional demo with 7 working modules
- **UI/UX Prototypes**: Early design mockups
- **Database Schema**: Complete schema documentation
- **Module Specifications**: Detailed specs for all modules
- **System Architecture**: Technical design documents
- **Strategic Planning**: Vision, goals, and roadmap

Access the archive at: `/archive`

---

## 🛠️ Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation
```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

### Navigation
- **Home** (`/`): Project dashboard and quick links
- **Project Overview** (`/overview`): Vision, goals, and roadmap
- **System Design** (`/design`): Technical architecture and specs
- **Archive** (`/archive`): Browse previous work and prototypes

---

## 🗺️ Roadmap

### Phase 1: Foundation (60% Complete)
- Requirements gathering ✓
- System architecture design ✓
- Database schema design ✓
- Core module specifications ✓
- UI/UX prototypes (In Progress)

### Phase 2: Single Hospital Pilot (Planning)
- Backend API development
- Frontend implementation
- Offline sync mechanism
- Security & authentication
- Testing & validation

### Phase 3: Deployment & Refinement
- Deploy to pilot hospital
- Staff training
- Monitor real-world usage
- Collect feedback
- Iterate and improve

### Phase 4: National Expansion (Future)
- Multi-hospital architecture
- National patient registry
- Interoperability standards
- Government integration
- Nationwide deployment

---

## 🔒 Security Model

- **Role-Based Access Control (RBAC)**: 8 user roles with granular permissions
- **Dual Signature**: Controlled substances require witness verification with PIN
- **Complete Audit Trails**: Every action logged with timestamp, user, and details
- **Data Encryption**: At rest and in transit
- **Patient Privacy**: PHI protection with access logging

---

## 🌍 Localization

- Bilingual support: English and Arabic
- RTL (Right-to-Left) layout for Arabic
- Medical terminology translated appropriately

---

## 📝 License

[To be determined]

---

## 👥 Contact

For questions or collaboration inquiries regarding the Avicenna EHR project, please reach out through the appropriate channels.

---

**Last Updated**: March 4, 2026  
**Status**: On hold - Restructure complete, ready to resume development
