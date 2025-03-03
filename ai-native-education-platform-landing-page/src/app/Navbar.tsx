"use client";
import { Button } from "@/components/ui/button";
import { ThemeButton } from "./ThemeButton";
import { useState, useEffect } from "react";
import { motion } from "framer-motion"; // ✅ Importujeme Framer Motion
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { GraduationCap, SquareArrowOutUpRight } from "lucide-react";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ width: "75%", paddingTop: "15px", paddingBottom: "15px" }}
      animate={{ width: isScrolled ? "50%" : "75%" }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className={`fixed mt-5 z-10 left-1/2 transform -translate-x-1/2 flex items-center ${
        isScrolled ? "rounded-xl shadow-xl justify-between" : "justify-around"
      } bg-card`}
    >
      <motion.div
        className={`w-1/6 ${isScrolled && "flex justify-center"}`}
        initial={{ scale: 1, borderRadius: "0px" }}
        animate={{
          scale: isScrolled ? 0.8 : 1,
          borderRadius: isScrolled ? "50px" : "0px",
        }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <h1 className="font-extrabold text-3xl text-card-foreground">
          {isScrolled ? (
            <GraduationCap className="text-primary text-center" size={40} />
          ) : (
            "Learnify"
          )}
        </h1>
      </motion.div>

      <nav className="w-2/3 flex justify-center space-x-2">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink
                href="#creation"
                className={`${navigationMenuTriggerStyle()} bg-card hover:bg-secondary`}
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
                className={`${navigationMenuTriggerStyle()} bg-card hover:bg-secondary`}
              >
                Explore
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </nav>

      {/* 🔵 Morph efekt na poslední sekci */}
      <motion.div
        className="w-1/6 flex justify-center space-x-3"
        initial={{ scale: 1, borderRadius: "0px" }}
        animate={{
          scale: isScrolled ? 0.8 : 1,
          borderRadius: isScrolled ? "50px" : "0px",
        }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <ThemeButton />
        <Button>
          {isScrolled ? <SquareArrowOutUpRight /> : "Get Started"}
        </Button>
      </motion.div>
    </motion.header>
  );
};
