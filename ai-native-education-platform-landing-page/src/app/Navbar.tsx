"use client";
import { Button } from "@/components/ui/button";
import { ThemeButton } from "./ThemeButton";
import { Moon } from "lucide-react";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

export const Navbar = () => {
  return (
    <header className="fixed z-10 mt-7 left-1/2 transform -translate-x-1/2 flex justify-around items-center w-3/4 rounded-xl bg-card">
      <div className="w-1/6  p-7">
        <h1 className="font-extrabold text-3xl  text-card-foreground">
          Learnify
        </h1>
      </div>
      <nav className="w-2/3 flex justify-center space-x-2">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-card">
                Creation
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <a
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                        href="/"
                      >
                        <div className="mb-2 mt-4 text-lg font-medium">
                          shadcn/ui
                        </div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          Beautifully designed components that you can copy and
                          paste into your apps. Accessible. Customizable. Open
                          Source.
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <a href="/docs" title="Introduction">
                    Re-usable components built using Radix UI and Tailwind CSS.
                  </a>
                  <a href="/docs/installation" title="Installation">
                    How to install dependencies and structure your app.
                  </a>
                  <a href="/docs/primitives/typography" title="Typography">
                    Styles for headings, paragraphs, lists...etc
                  </a>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                href="/"
                className={`${navigationMenuTriggerStyle()} bg-card`}
              >
                Management
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                href="/"
                className={`${navigationMenuTriggerStyle()} bg-card`}
              >
                Feedback
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                href="/"
                className={`${navigationMenuTriggerStyle()} bg-card`}
              >
                Analytics
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                href="/"
                className={`${navigationMenuTriggerStyle()} bg-card`}
              >
                Collaboration
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                href="/"
                className={`${navigationMenuTriggerStyle()} bg-card`}
              >
                Explore
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </nav>

      <div className="w-1/6 space-x-3 flex justify-end p-7">
        {/* <Button variant={"ghost"}>
          <Moon />
        </Button> */}
        <ThemeButton />
        <Button>Get Started</Button>
      </div>
    </header>
  );
};
