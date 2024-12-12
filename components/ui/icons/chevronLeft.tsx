import React from "react";

import { cn } from "@/lib/utils";
const ChevronLeft = React.forwardRef<
  SVGSVGElement,
  React.SVGProps<SVGSVGElement>
>(({ className, ...props }, ref) => (
  <svg
    ref={ref}
    {...props}
    className={cn("", className)}
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 1024 1024"
  >
    <path
      fill="currentColor"
      d="M685.248 104.704a64 64 0 0 1 0 90.496L368.448 512l316.8 316.8a64 64 0 0 1-90.496 90.496L232.704 557.248a64 64 0 0 1 0-90.496l362.048-362.048a64 64 0 0 1 90.496 0"
    />
  </svg>
));

ChevronLeft.displayName = "Chevron left";
export default ChevronLeft;
