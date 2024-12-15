import React from "react";
import { cn } from "@/lib/utils";

const Discord = React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  ({ className, ...props }, ref) => (
    <svg
      ref={ref}
      {...props}
      className={cn("", className)}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
    >
      <path
        fill="currentColor"
        d="M13.554 3.016A13.2 13.2 0 0 0 10.253 2a9 9 0 0 0-.423.86a12.3 12.3 0 0 0-3.664 0A9 9 0 0 0 5.744 2A13.4 13.4 0 0 0 2.44 3.018C.351 6.108-.215 9.123.068 12.094a13.3 13.3 0 0 0 4.048 2.033a10 10 0 0 0 .867-1.399a8.6 8.6 0 0 1-1.365-.652q.173-.126.335-.251a9.51 9.51 0 0 0 8.094 0q.165.136.335.251a8.7 8.7 0 0 1-1.368.654a9.7 9.7 0 0 0 .867 1.396a13.3 13.3 0 0 0 4.051-2.03c.332-3.446-.568-6.433-2.379-9.08m-8.212 7.25c-.789 0-1.44-.715-1.44-1.596S4.53 7.067 5.34 7.067s1.456.722 1.442 1.603c-.014.88-.636 1.597-1.44 1.597m5.316 0c-.79 0-1.44-.715-1.44-1.596s.63-1.603 1.44-1.603s1.452.722 1.438 1.603c-.014.88-.634 1.597-1.438 1.597"
      />
    </svg>
  )
);

Discord.displayName = "Discord";
export default Discord;
