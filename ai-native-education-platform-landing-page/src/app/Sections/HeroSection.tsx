"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Sparkle } from "lucide-react";

import Image from "next/image";
export const HeroSection = () => {
  return (
    <section className="w-5/6 lg:w-3/4   xl:h-[calc(100vh-200px)] m-auto bg-gradient-to-b  from-card via-card to-background rounded-xl">
      <div className="flex flex-col lg:flex-row justify-between items-center xl:pt-20">
        <div className="py-10 h-full w-full lg:w-7/12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Badge className="mb-6 font-geist">
              <Sparkle size={12} className="mr-1" /> New version available
            </Badge>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="text-[45px] lg:text-[53px] font-geist leading-none font-bold text-card-foreground text-left"
          >
            <span className="text-nowrap lg:text-wrap">Reinvent Your</span>{" "}
            Teaching &<br className="hidden lg:flex" />{" "}
            <span className="text-nowrap lg:text-wrap">Learning with</span>{" "}
            <span className="text-nowrap lg:text-wrap">
              {" "}
              <span className="text-primary">AI-Powered</span>
              <br /> Education
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.6 }}
            className=" pt-7 pb-9 opacity-65  xl:w-full lg:w-5/6 w-[95%]  text-justify  font-geist"
          >
            Empower educators to create engaging, interactive courses with
            instant AI feedback, <br className="hidden xl:block" />
            automated assessments, and adaptive learning paths—all from one
            seamless platform.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.9 }}
            className="space-x-4 "
          >
            <Button className="text-sm p-5">Get Started</Button>
            <Button id="creation" className="text-sm p-5" variant={"secondary"}>
              Request a Demo
            </Button>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="w-5/12 hidden lg:flex"
        >
          <Image
            className=" opacity-85 mt-5"
            src="/third-bg.png"
            width={650}
            height={500}
            alt="A vibrant banner showcasing a student coding in a browser-based editor, with an AI chatbot on the side providing guidanceF"
          />
        </motion.div>
      </div>
    </section>
  );
};
