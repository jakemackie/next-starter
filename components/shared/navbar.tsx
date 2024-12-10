"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import Link from "next/link";

const aboutNavItems: { title: string; href: string; description: string }[] = [
  {
    title: "Our Mission",
    href: "/about/mission",
    description:
      "Learn about our core values and what drives our company forward.",
  },
  {
    title: "Our Team",
    href: "/about/team",
    description: "Meet the passionate individuals behind our success.",
  },
  {
    title: "Careers",
    href: "/about/careers",
    description: "Explore open positions and join our growing team.",
  },
  {
    title: "Press",
    href: "/about/press",
    description: "Read the latest news and updates about our company.",
  },
  {
    title: "Testimonials",
    href: "/about/testimonials",
    description: "See what our clients and partners have to say about us.",
  },
  {
    title: "Contact Us",
    href: "/about/contact",
    description: "Get in touch with us for any inquiries or feedback.",
  },
];

const supportNavItems: { title: string; href: string; description: string }[] =
  [
    {
      title: "Help Center",
      href: "/support/help-center",
      description: "Find answers to common questions and troubleshooting tips.",
    },
    {
      title: "Documentation",
      href: "/support/documentation",
      description: "Access detailed guides and technical documentation.",
    },
    {
      title: "Community Forum",
      href: "/support/forum",
      description: "Connect with other users and share your experiences.",
    },
    {
      title: "Submit a Ticket",
      href: "/support/ticket",
      description: "Reach out to our support team for personalized assistance.",
    },
    {
      title: "System Status",
      href: "/support/system-status",
      description: "View real-time updates on our system's operational status.",
    },
    {
      title: "Live Chat",
      href: "/support/live-chat",
      description: "Get instant support from our team via live chat.",
    },
  ];

export default function Navbar() {
  return (
    <NavigationMenu className="z-50 w-full mx-auto max-w-screen-md py-2">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>About us</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {aboutNavItems.map((item) => (
                <ListItem key={item.title} title={item.title} href={item.href}>
                  {item.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Support</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {supportNavItems.map((item) => (
                <ListItem key={item.title} title={item.title} href={item.href}>
                  {item.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link href="/login" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Login
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link href="/signup" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Sign up
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
