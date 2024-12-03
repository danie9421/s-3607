import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

const menuItems = [
  { name: "首页", path: "/" },
  { name: "案例", path: "/cases" },
  { name: "解决方案", path: "/solutions" },
  { name: "客户", path: "/clients" },
  { name: "关于", path: "/about" },
];

export const Navbar = () => {
  const currentPath = window.location.pathname;

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <div className="w-8 h-8">
                <svg viewBox="0 0 24 24" className="fill-teal-600">
                  <path d="M21 16.5c0 .38-.21.71-.53.88l-7.9 4.44c-.16.12-.36.18-.57.18-.21 0-.41-.06-.57-.18l-7.9-4.44A.991.991 0 013 16.5v-9c0-.38.21-.71.53-.88l7.9-4.44c.16-.12.36-.18.57-.18.21 0 .41.06.57.18l7.9 4.44c.32.17.53.5.53.88v9z"/>
                </svg>
              </div>
            </Link>
            <div className="ml-6 flex space-x-8">
              {menuItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={cn(
                    "inline-flex items-center px-1 pt-1 text-sm font-medium border-b-2",
                    currentPath === item.path
                      ? "border-teal-600 text-teal-600"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex items-center">
            <button className="text-sm text-gray-500 hover:text-gray-700">
              中/EN
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};