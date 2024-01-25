"use client";
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";
import Image from "next/image";
import { ThemeSwitcher } from "@/Component/ThemeSwitcher";
import { useRouter } from "next/navigation";

export default function NavigationBar() {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      isBordered
      isBlurred
      className="mb-5"
    >
      <NavbarContent justify="start">
        {/* <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        /> */}
        <NavbarBrand>
          <div
            className="flex items-center gap-2 w-fit cursor-pointer"
            onClick={() => router.push("/")}
          >
            <p className="font-bold text-xl hover-underline-animation">
              Submision App
            </p>
          </div>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <ThemeSwitcher />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
