import React from "react";

import { cn } from "@/lib/utils";
const ChevronRight = React.forwardRef<
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
    viewBox="0 0 24 24"
  >
    <path
      fill="currentColor"
      fill-rule="evenodd"
      d="M7.293 3.293a1 1 0 0 1 1.414 0l8 8a1 1 0 0 1 0 1.414l-8 8a1 1 0 0 1-1.414-1.414L14.586 12L7.293 4.707a1 1 0 0 1 0-1.414"
      clip-rule="evenodd"
    />
  </svg>
));

ChevronRight.displayName = "Discord";
export default ChevronRight;
