"use client";
import { Button } from "@/components/ui/button";
import { ThemeButton } from "./ThemeButton";

import {
  NavigationMenu,
  
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

export const Navbar = () => {
  return (
    
    <header className="fixed z-10  pt-2 left-1/2 transform -translate-x-1/2 flex justify-around items-center w-3/4 bg-card">
      <div className="w-1/6  py-7">
        <h1 className="font-extrabold text-3xl  text-card-foreground">
          Learnify
        </h1>
      </div>
      <nav className="w-2/3 flex justify-center space-x-2">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink
                href="#creation"
                className={`${navigationMenuTriggerStyle()} bg-card hover:bg-secondary `}
              >
                Creation
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                href="/"
                className={`${navigationMenuTriggerStyle()} bg-card hover:bg-secondary`}
              >
                Management
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                href="/"
                className={`${navigationMenuTriggerStyle()} bg-card hover:bg-secondary`}
              >
                Feedback
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                href="/"
                className={`${navigationMenuTriggerStyle()} bg-card hover:bg-secondary`}
              >
                Analytics
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                href="/"
                className={`${navigationMenuTriggerStyle()} bg-card hover:bg-secondary`}
              >
                Collaboration
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                href="/"
                className={`${navigationMenuTriggerStyle()} bg-card hover:bg-secondary `}
              >
                Explore
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </nav>

      <div className="w-1/6 space-x-3 flex justify-end py-7">
        {/* <Button variant={"ghost"}>
          <Moon />
        </Button> */}
        <ThemeButton />
        <Button>Get Started</Button>
      </div>
    </header>
  );
};
