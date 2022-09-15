import Dashboard from "./views/Dashboard/Dashboard";
import Tables from "./views/Dashboard/Tables";
import KPIAnayltics from "./views/Dashboard/KPIAnayltics";
import { HomeIcon, StatsIcon, CreditIcon } from "./components/Icons/Icons";

const dashRoutes = [
  {
    path: "/dashboard",
    name: "Population Analytics",
    icon: <HomeIcon color="inherit" />,
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/tables",
    name: "Video Performance",
    icon: <StatsIcon color="inherit" />,
    component: Tables,
    layout: "/admin",
  },
  {
    path: "/social",
    name: "Social KPI's",
    icon: <CreditIcon color="inherit" />,
    component: KPIAnayltics,
    layout: "/admin",
  },
];
export default dashRoutes;
