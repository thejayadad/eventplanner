import { FiHome, FiCalendar, FiPlus } from "react-icons/fi";

export const routes = [
  {
    href: "/",
    name: "Home",
    icon: <FiHome />,
  },
  {
    href: "/events",
    name: "Events",
    icon: <FiCalendar />,
  },
  {
    href: "/new",
    name: "New Event",
    icon: <FiPlus />,
  },
];
