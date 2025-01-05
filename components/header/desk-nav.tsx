import React from "react";
import { routes } from "@/components/header/site-routes";
import { UserButton } from "@clerk/nextjs";
import NavLink from "./nav-link";

const DeskNavbar = () => {
  return (
    <div className="hidden md:flex items-center space-x-4">
   {routes.map((route) => (
        <NavLink
          key={route.href}
          href={route.href}
          name={route.name}
          icon={route.icon}
        />
      ))}
      <UserButton />
    </div>
  );
};

export default DeskNavbar;
