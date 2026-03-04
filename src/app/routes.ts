import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./components/Home";
import { ProjectOverview } from "./components/ProjectOverview";
import { SystemDesign } from "./components/SystemDesign";
import { ArchiveViewer } from "./components/ArchiveViewer";
import { NotFound } from "./components/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "overview", Component: ProjectOverview },
      { path: "design", Component: SystemDesign },
      { path: "archive", Component: ArchiveViewer },
      { path: "*", Component: NotFound },
    ],
  },
]);
