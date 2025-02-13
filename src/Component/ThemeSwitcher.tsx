"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Switch } from "@nextui-org/react";
import { MoonIcon } from "@/Assets/Icon/MoonIcon";
import { SunIcon } from "@/Assets/Icon/SunIcon";
export function ThemeSwitcher() {
  const [mounted, setMounted] = useState<boolean>(false);
  const { theme, setTheme } = useTheme();
 
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
      <Switch
        isSelected={theme === "dark" ? true : false}
        onValueChange={() => setTheme(theme === "light" ? "dark" : "light")}
        defaultSelected
        size="lg"
        color={'primary'}
        thumbIcon={({ isSelected, className }) =>
          isSelected ? (
            <SunIcon className={className} />
          ) : (
            <MoonIcon className={className} />
          )
        }
        id="theme-switcher"
      >
      </Switch>
  );
}
