'use client'
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLinkProps {
  href: string;
  name: string;
  icon: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ href, name, icon }) => {
  const pathname = usePathname(); // Get the current route

  const isActive = pathname === href; // Check if the link is active

  return (
    <Link
      href={href}
      className={`flex space-x-1 items-center  ${
        isActive ? "text-secondary" : "text-primary hover:text-secondary/90"
      }`}
    >
      {icon}
      <span>{name}</span>
    </Link>
  );
};

export default NavLink;
