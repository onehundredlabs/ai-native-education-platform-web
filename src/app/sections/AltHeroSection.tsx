"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Sparkle } from "lucide-react";
import Image from "next/image";

export const AltHeroSection = () => {
  return (
    <section className="w-5/6 lg:w-3/4 2xl:w-1/2  m-auto ">
      <div className="py-10 lg:pt-16 h-full flex w-full  flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Badge className="mb-6 2xl:mb-12 font-geist  2xl:text-base 2xl:py-1.5">
            <Sparkle size={12} className="mr-1 2xl:size-5 " /> Coming Soon
          </Badge>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="text-[44px]  lg:text-[65px] leading-none 2xl:text-6xl font-geist  text-center  font-bold text-card-foreground "
        >
          Transform <span className="text-nowrap lg:text-wrap">Education <br className="hidden lg:block" /> with</span>{" "}
          <span className="text-primary">AI-Powered</span>
          <br className="hidden lg:block" /> Learning
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.6 }}
          className=" pt-7 2xl:pt-12 pb-9 2xl:pb-15 lg:w-1/2 opacity-65 2xl:text-xl text-center    font-geist"
        >
          Empower educators with AI-driven courses, instant feedback, automated
          assessments, and adaptive learning—all in one platform.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.9 }}
          className="space-x-4 "
        >
          <Button className="text-sm p-5 2xl:text-lg">Get Started</Button>
          <Button className="text-sm p-5 2xl:text-lg" variant={"secondary"}>
            Request a Demo
          </Button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 1.1 }}
        
      >
        <Card className="relative w-full h-full mt-5 lg:mt-10 shadow-lg dark:border-border/35">
          <div className="absolute scale-0 dark:scale-100 inset-0 flex justify-center items-center">
            <p className="text-3xl">Obrazek z aplikace</p>
          </div>
          <Image
            src={"/placeholder-screen.png"}
            width={1920}
            height={500}
            className="rounded-xl dark:scale-0"
            alt="screenshot of application"
          />
        </Card>
      </motion.div>
    </section>
  );
};
