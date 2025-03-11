"use client";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export const SixthSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
      viewport={{ once: true, amount: 0.3 }}
      id="explore"
      className="relative w-5/6 lg:w-3/4 2xl:w-1/2 dark:border-border/35  shadow-lg  rounded-xl m-auto border  p-10 overflow-hidden bg-card scroll-mt-32  mb-32 lg:mb-48"
    >
      <h2 className="text-3xl lg:text-5xl font-geist text-primary font-bold pt-4 relative">
        <span className="text-nowrap lg:text-wrap">Join the Future</span>{" "}
        <br className="lg:hidden" /> of Education <br className="lg:hidden" />{" "}
        Today
      </h2>

      <p className="pl-1 text-lg font-geist lg:w-2/3 pt-7 pb-7 opacity-80 relative ">
        Ready to transform your teaching and learning experience? Sign up now to
        explore our AI-native education platform and see how instant feedback,
        adaptive challenges, and a powerful authoring tool can revolutionize
        online learning.
      </p>

      <div className="space-y-4 lg:space-y-0 lg:space-x-4 flex flex-col lg:flex-row relative  pb-8 lg:pb-14">
        <Button className="text-sm p-5 w-full lg:w-auto">
          Get Started Free
        </Button>
        <Button className="text-sm p-5 w-full lg:w-auto" variant={"outline"}>
          Request a Demo
        </Button>
      </div>
    </motion.section>
  );
};
