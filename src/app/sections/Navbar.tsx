"use client";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { GraduationCap, Menu, SquareArrowOutUpRight, X } from "lucide-react";
import { ThemeButton } from "../ThemeButton";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [is2xlScreen, setIs2xlScreen] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIs2xlScreen(window.innerWidth >= 2100);
    };

    handleResize(); // Nastaví hodnotu při načtení stránky
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section>
      <motion.header
        className={`w-full border-b dark:border-border/35 bg-card
          
         m-auto  lg:hidden fixed z-10 left-1/2 transform -translate-x-1/2`}
        initial={{ height: "80px" }}
        animate={{ height: isMenuOpen ? "330px" : "80px" }}
      >
        <div className="w-5/6 m-auto flex pt-5 justify-between">
          <h1>
            <GraduationCap className="text-primary text-center" size={40} />
          </h1>
          <div className="flex space-x-2">
            <ThemeButton />
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="flex lg:hidden"
              animate={{ rotate: isMenuOpen ? 180 : 0 }} // Animace otočení
              transition={{ duration: 0.3, ease: "easeInOut" }} // Plynulost animace
            >
              {isMenuOpen ? (
                <X size={40} strokeWidth={1} />
              ) : (
                <Menu size={40} strokeWidth={1} />
              )}
            </motion.button>
          </div>
        </div>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 100 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <nav className="flex flex-col mt-3">
              <Button variant="link" asChild>
                <a href="#creation">Creation</a>
              </Button>
              <Button variant="link" asChild>
                <a href="#managment">Managment</a>
              </Button>
              <Button variant="link" asChild>
                <a href="#feedback">Feedback</a>
              </Button>
              <Button variant="link" asChild>
                <a href="#analytics">Analytics</a>
              </Button>
              <Button variant="link" asChild>
                <a href="#collaboration">Collaboration</a>
              </Button>
              <Button variant="link" className="pr-4 lg:pr-0" asChild>
                <a href="#explore">Explore</a>
              </Button>
            </nav>
          </motion.div>
        )}
      </motion.header>
      <motion.header
        initial={{
          width: is2xlScreen ? "50%" : "75%",
          paddingTop: "15px",
          paddingBottom: "15px",
        }}
        animate={{
          width: isScrolled
            ? is2xlScreen
              ? "25%"
              : "50%"
            : is2xlScreen
            ? "50%"
            : "75%",
        }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className={`hidden lg:flex fixed mt-5 z-10 left-1/2 transform -translate-x-1/2 items-center ${
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

        <nav className="w-2/3 flex justify-center space-x-2 ">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="#creation"
                  className={`${navigationMenuTriggerStyle()} bg-card scroll-smooth lg:px-2 xl:px-4 2xl:text-base hover:bg-secondary ${
                    isScrolled && "lg:text-xs xl:text-sm"
                  }`}
                >
                  Creation
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="#managment"
                  className={`${navigationMenuTriggerStyle()} bg-card lg:px-2 xl:px-4  2xl:text-base hover:bg-secondary ${
                    isScrolled && "lg:text-xs xl:text-sm"
                  }`}
                >
                  Management
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="#feedback"
                  className={`${navigationMenuTriggerStyle()} bg-card lg:px-2 xl:px-4  2xl:text-base hover:bg-secondary ${
                    isScrolled && "lg:text-xs xl:text-sm"
                  }`}
                >
                  Feedback
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="#analytics"
                  className={`${navigationMenuTriggerStyle()} bg-card lg:px-2 xl:px-4  2xl:text-base hover:bg-secondary ${
                    isScrolled && "lg:text-xs xl:text-sm"
                  }`}
                >
                  Analytics
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="#collaboration"
                  className={`${navigationMenuTriggerStyle()} bg-card lg:px-2 xl:px-4  2xl:text-base hover:bg-secondary ${
                    isScrolled && "lg:text-xs xl:text-sm"
                  }`}
                >
                  Collaboration
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="#explore"
                  className={`${navigationMenuTriggerStyle()} bg-card lg:px-2 xl:px-4  2xl:text-base hover:bg-secondary ${
                    isScrolled && "lg:text-xs xl:text-sm"
                  }`}
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
    </section>
  );
};
