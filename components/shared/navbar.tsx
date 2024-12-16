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
import { Button } from "@/components/ui/button";
import { createClient } from "@/supabase/server";

const aboutNavItems: { title: string; href: string; description: string }[] = [
  {
    title: "FAQs",
    href: "/faqs",
    description: "A list of frequently asked questions."
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

export default async function Navbar() {
  const supabase = await createClient();

  const { data, error } = await supabase.auth.getUser();

  return (
    <NavigationMenu className="z-50 w-full mx-auto max-w-none md:max-w-screen-lg flex justify-between p-2">
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Home
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>About us</NavigationMenuTrigger>
          <NavigationMenuContent className="m-2">
            <ul className="grid w-full gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {aboutNavItems.map((item) => (
                <ListItem key={item.title} title={item.title} href={item.href}>
                  {item.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>

      <NavigationMenuList>
        {!error && data?.user ? (
          <NavigationMenuItem>
            <Link href="/dashboard" legacyBehavior passHref>
              <Button variant="secondary">Go to dashboard</Button>
            </Link>
          </NavigationMenuItem>
        ) : null}

        {error || !data?.user ? (
          <NavigationMenuItem>
            <Link href="/login" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Login
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        ) : null}

        {error || !data?.user ? (
          <NavigationMenuItem>
            <Link href="/signup" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Sign up
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        ) : null}
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
