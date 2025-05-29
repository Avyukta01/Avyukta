"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      aria-label="Toggle theme"
      className="relative overflow-hidden"
    >
      <Sun
        className={cn(
          "h-5 w-5 transition-all duration-500 ease-in-out transform",
          theme === "light" ? "opacity-100 scale-100 rotate-0" : "opacity-0 scale-50 -rotate-90"
        )}
      />
      <Moon
        className={cn(
          "absolute h-5 w-5 transition-all duration-500 ease-in-out transform",
          theme === "dark" ? "opacity-100 scale-100 rotate-0" : "opacity-0 scale-50 rotate-90"
        )}
      />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
