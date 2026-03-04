import { createBrowserRouter } from "react-router";
import { Root } from "./components/Root";
import { Dashboard } from "./components/Dashboard";
import { SimpleOverview } from "./components/SimpleOverview";
import { SystemArchitecture } from "./components/SystemArchitecture";
import { DatabaseSchema } from "./components/DatabaseSchema";
import { ModulePharmacy } from "./components/ModulePharmacy";
import { ModuleOperatingRoom } from "./components/ModuleOperatingRoom";
import { ModulePatientIdentity } from "./components/ModulePatientIdentity";
import { ModuleClinicalDoc } from "./components/ModuleClinicalDoc";
import { ModuleOrders } from "./components/ModuleOrders";
import { ModuleLab } from "./components/ModuleLab";
import { ModuleInventory } from "./components/ModuleInventory";
import { ModuleAudit } from "./components/ModuleAudit";
import { ModuleTriage } from "./components/ModuleTriage";
import { SecurityModel } from "./components/SecurityModel";
import { DeploymentStrategy } from "./components/DeploymentStrategy";
import { TechStack } from "./components/TechStack";
import { UIPrototypes } from "./components/UIPrototypes";
import { RoadmapPhases } from "./components/RoadmapPhases";
import { NotFound } from "./components/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Dashboard },
      { path: "simple-overview", Component: SimpleOverview },
      { path: "architecture", Component: SystemArchitecture },
      { path: "database", Component: DatabaseSchema },
      { path: "module-patient-identity", Component: ModulePatientIdentity },
      { path: "module-clinical-doc", Component: ModuleClinicalDoc },
      { path: "module-orders", Component: ModuleOrders },
      { path: "module-pharmacy", Component: ModulePharmacy },
      { path: "module-operating-room", Component: ModuleOperatingRoom },
      { path: "module-lab", Component: ModuleLab },
      { path: "module-inventory", Component: ModuleInventory },
      { path: "module-audit", Component: ModuleAudit },
      { path: "module-triage", Component: ModuleTriage },
      { path: "security", Component: SecurityModel },
      { path: "deployment", Component: DeploymentStrategy },
      { path: "tech-stack", Component: TechStack },
      { path: "ui-prototypes", Component: UIPrototypes },
      { path: "roadmap", Component: RoadmapPhases },
      { path: "*", Component: NotFound },
    ],
  },
]);
