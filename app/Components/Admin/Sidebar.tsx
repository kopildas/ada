'use client'
 
import { usePathname } from 'next/navigation'
import { FaBars, FaCommentAlt, FaRegChartBar, FaTh, FaUserAlt } from "react-icons/fa";
import Link from "next/link";

interface MenuItem {
  path: string;
  name: string;
  icon: JSX.Element;
}

const menuItem: MenuItem[] = [
  {
    path: "/admin",
    name: "Dashboard",
    icon: <FaTh />,
  },
  {
    path: "/admin/addnews",
    name: "Add news",
    icon: <FaUserAlt />,
  },
  {
    path: "/admin/orders",
    name: "All News",
    icon: <FaRegChartBar />,
  },
  {
    path: "/admin/review",
    name: "Review",
    icon: <FaCommentAlt />,
  },
];

export default function Sidebar() {
  const pathname = usePathname()

  // Function to determine if a menu item is active
  const isActive = (path: string) => pathname === path;

  return (
    <div className="flex sticky z-40">
      <div className="bg-black scroll-none text-white transition-all duration-500 flex-shrink-0">
        <div className="top_section">
          <div className="bars md:hidden">
            <FaBars className="text-3xl flex right-2" />
          </div>
        </div>
        <div className="menu-items-container mt-5" style={{ position: "sticky", top: 10 }}>
          {menuItem.map((item, index) => (
            <Link key={index} href={item.path} className={`sidebar-item bg-red-30 ${isActive(item.path) ? 'bg-zinc-800' : ''}`}>
                <div className="sidebar-title flex link_text text-lg">
                  <span className="flex gap-2">
                    <div>{item.icon}</div>
                    <div className={`text text-xs ${isActive(item.path) ? 'text-white' : ''}`} id={item.name}>
                      {item.name}
                    </div>
                  </span>
                </div>
              
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
