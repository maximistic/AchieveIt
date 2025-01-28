import { IconType } from "react-icons";
import { FaTachometerAlt, FaBullseye, FaCalendarAlt, FaChartLine, FaQuestionCircle, FaListUl } from "react-icons/fa";

export interface SidebarItem {
  label: string;
  icon: IconType;
  path: string;
}

export const sidebarItems: SidebarItem[] = [
  { label: "Dashboard", icon: FaTachometerAlt, path: "/dashboard" },
  { label: "Goals", icon: FaBullseye, path: "/goals" },
  { label: "Habits", icon: FaListUl, path: "/habits" },
  { label: "Calendar", icon: FaCalendarAlt, path: "/calendar" },
  { label: "Analytics", icon: FaChartLine, path: "/analytics" },
  { label: "Help", icon: FaQuestionCircle, path: "/help" },
];