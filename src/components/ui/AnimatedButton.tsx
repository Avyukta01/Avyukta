
"use client";

import * as React from "react";
import { Button, type ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface AnimatedButtonProps extends ButtonProps {
  pulseAnimation?: boolean;
}

const AnimatedButton = React.forwardRef<HTMLButtonElement, AnimatedButtonProps>(
  ({ className, pulseAnimation = false, children, ...props }, ref) => {
    return (
      <Button
        ref={ref}
        className={cn(
          pulseAnimation && "animate-pulse-glow", // Changed from animate-pulse-slow
          className
        )}
        {...props}
      >
        {children}
      </Button>
    );
  }
);
AnimatedButton.displayName = "AnimatedButton";

export { AnimatedButton };
