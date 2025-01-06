import React from "react";
import { FiMenu, FiCalendar, FiHome, FiPlus } from "react-icons/fi";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { routes } from "./site-routes";
import NavLink from "./nav-link";
import Logo from "../logo";



const MobileNav = () => {
  return (
    <div className="flex md:hidden items-center space-x-2">
      <div className="drawer">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Page content here */}
          <label htmlFor="my-drawer" className="btn btn-md btn-primary drawer-button">
            <FiMenu />
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <div className="menu bg-base-100 text-white min-h-full w-80 p-4 flex flex-col justify-between">
            {/* Logo Section */}
        <Logo />

            {/* Navigation Links */}
            <ul className="space-y-4">
              {routes.map((route) => (
                <NavLink 
                key={route.href}
                href={route.href}
                name={route.name}
                icon={route.icon}
                />
              ))}
            </ul>

            {/* User Button */}
            <div className="mt-auto pt-6 border-t border-gray-600">
              <UserButton />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
