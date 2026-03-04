> **Instructions:** Use this prompt to build a new project that functions **exactly** like the Hospital-in-a-Box prototype (same modules, logic, and integrity features), but for your specific project name/context.

---

**Your Role:**
You are a Principal Software Engineer and UX Architect. You are building a "High-Fidelity Functional Prototype" for a project named **[INSERT PROJECT NAME HERE]**.

**Context:**
This project is a rapid-deployment healthcare management system. It must replicate the specific functional depth, safety guardrails, and "closed-loop" architecture of the "Hospital-in-a-Box" standard.

**Tech Stack:**
*   **Framework:** React (Vite) + TypeScript.
*   **Styling:** Tailwind CSS (Slate-based "Clinical Utility" theme).
*   **State:** `zustand` (Monolithic client-side store acting as the database).
*   **Icons:** `lucide-react`.

**Core Architectural Rules:**
1.  **Centralized State:** All data (Patients, Encounters, Orders, Inventory, Logs) lives in a single Zustand store.
2.  **Closed-Loop Logic:** Actions in one module MUST immediately affect others (e.g., Doctor orders X-Ray -> Radiology queue updates -> Radiologist submits result -> Doctor gets Notification).
3.  **No Mock APIs:** Manipulate state directly for instant feedback.

**Required Modules & Functions (The "Hospital-in-a-Box" Standard):**

### 1. "Day 0" Provisioning (The Setup)
*   **Function:** A cinematic "Boot Screen" that simulates scanning a Facility QR Code.
*   **Visuals:** Progress bars, terminal logs ("Syncing Formulary...", "Establishing Secure Handshake...").
*   **Outcome:** Populates the store with seed data.

### 2. Patient Registry (Identity)
*   **Function:** Register patients with "Identity Levels".
    *   **L0:** Unverified.
    *   **L2:** Biometrically Verified (Simulate a toggle for this).
*   **Visuals:** Badges showing the identity level.

### 3. Intelligent Triage (Intake)
*   **Function:** Input Vitals (BP, HR, Temp, SpO2).
*   **Logic:** Automatically calculate an **Early Warning Score (EWS)**.
*   **Automation:** If Score > 5, auto-set Priority to "URGENT" or "EMERGENCY" and route to the top of the Doctor's queue.

### 4. Clinical Station (The Workspace)
*   **Layout:** Sidebar with active patient queue. Main area with tabs: Overview, SOAP Notes, Orders, Diagnosis.
*   **Feature - Quick Protocols:** Buttons (e.g., "Malaria Protocol") that auto-fill Diagnosis, Lab Orders, and Med Orders in one click.
*   **Feature - Stewardship:** Show a warning if Antibiotics are ordered without an infection diagnosis.
*   **Feature - Results Feed:** A table showing the status of all orders. Completed results appear here automatically.

### 5. Diagnostic Stations (Lab & Radiology)
*   **Workflow:** View pending orders -> Enter Result -> Finalize.
*   **Critical Safety Feature:** If a result is marked "Critical":
    *   Block the "Submit" button.
    *   Show a **Red Modal** asking: *"Confirmed passed to (Name):"*.
    *   Require the user to type a name before finalizing.
    *   Send a **Critical Notification** to the ordering doctor.

### 6. Pharmacy Station (Inventory & Safety)
*   **Function:** View medication orders.
*   **Safety Feature:** If the drug is "Controlled" (e.g., Morphine):
    *   Show a "Dual Signature" modal.
    *   Require a "Witness Name" and "PIN" to proceed.
*   **Inventory:** Live decrement of stock levels upon dispensing.

### 7. Billing (Revenue Cycle)
*   **Function:** Auto-generate invoices based on completed encounters and orders.
*   **Logic:** Calculate totals (Consultation Fee + Meds + Labs).
*   **Payment:** Accept Cash/Insurance and mark invoice as PAID.

### 8. Integrity & Anti-Corruption Layer
*   **Audit Log:** Record *every* action (Create, Approve, Dispense) with a timestamp and actor.
*   **Dashboard:** Visualize anomalies (e.g., "Queue Jumping Events", "Inventory Leaks").

**UI/UX Style Guide:**
*   **Header:** Include a **Notification Bell** with a badge count that shows alerts from other modules.
*   **Aesthetic:** Clean, white/slate backgrounds, distinct colors for status (Emerald=Safe, Amber=Warning, Rose=Critical).
*   **Interactions:** Use Modals for confirmations. Use Toasts (`alert()`) for success messages.

**Execution Plan:**
1.  **Scaffold:** Set up `types.ts` and `store.ts` with the complete schema (Patients, Encounters, Orders, Notifications).
2.  **Layout:** Build the sidebar navigation and header with the notification system.
3.  **Build Modules:** Implement the pages in the order of the patient journey (Registry -> Triage -> Doctor -> Ancillary -> Billing).
4.  **Connect:** Ensure the "Critical Result" notification loop works perfectly.

**Output:**
Start by generating the `types.ts` and `store.ts` to define the data model, then proceed to the UI components.
