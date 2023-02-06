import {
  CalendarIcon,
  FolderIcon,
  HomeIcon,
  UsersIcon,
  LogoutIcon,
  PhotographIcon,
} from "@heroicons/react/outline";
import { Link, useLocation } from "@reach/router";
import classNames from "../utils/classNames";

const navigation = [
  { name: "Dashboard", icon: HomeIcon, href: "#", current: false, link: "/" },
  { name: "Users", icon: UsersIcon, href: "#", current: false, link: "/users" },
  {
    name: "Products",
    icon: FolderIcon,
    href: "#",
    current: false,
    link: "/products",
  },
  {
    name: "Orders",
    icon: CalendarIcon,
    href: "#",
    current: false,
    link: "/orders",
  },
  {
    name: "Logout",
    icon: LogoutIcon,
    href: "#",
    current: false,
    link: "/logout",
  },
];

export default function Menu() {
  const location = useLocation().pathname;
  navigation.forEach((t) => {
    t.current = false;
  });

  const index = navigation.findIndex((t) => t.link === location);
  if (index !== -1) {
    navigation[index].current = true;
  }

  return (
    <div className="flex flex-col flex-grow border-r border-gray-200 pt-5 pb-4 bg-white overflow-y-auto h-full">
      <div className="flex items-center text-sm flex-shrink-0 px-4">
        Clothing Store Admin Panel
      </div>
      <div className="mt-5 flex-grow flex flex-col">
        <nav className="flex-1 px-2 bg-white space-y-1" aria-label="Sidebar">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.link}
              className={classNames(
                item.current
                  ? "bg-gray-100 text-gray-900"
                  : "text-gray-600 hover:bg-gray-50 hover:text-gray-900",
                "group flex items-center px-2 py-2 text-sm font-medium rounded-md"
              )}
            >
              <item.icon
                className={classNames(
                  item.current
                    ? "text-gray-500"
                    : "text-gray-400 group-hover:text-gray-500",
                  "mr-3 flex-shrink-0 h-6 w-6"
                )}
                aria-hidden="true"
              />
              <span className="flex-1">{item.name}</span>
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}
