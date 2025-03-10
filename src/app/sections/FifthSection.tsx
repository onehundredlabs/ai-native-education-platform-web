"use client";
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";

export const FifthSection = () => {
  return (
    <section className="relative w-5/6 lg:w-3/4 2xl:w-1/2 m-auto mb-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
        viewport={{ once: true, amount: 0.3 }}
        id="collaboration"
        className="text-center scroll-mt-32"
      >
        <h2 className="text-5xl font-bold font-geist">
          Community & Collaboration
        </h2>
        <p className="text-xl font-geist py-3 opacity-70">
          Empower Learners to Connect, Share, and Grow
        </p>
      </motion.div>
      <div className="flex items-center space-x-2">
        <Switch id="airplane-mode" />
        <Label htmlFor="airplane-mode">Airplane Mode</Label>
      </div>
      <div className="">
        <div></div>
        <Card></Card>
      </div>

      <div className="w-full flex justify-center mt-10 space-x-2 font-geist">
        <div className="flex flex-col items-center  h-2 space-y-1">
          <h2 className="text-6xl font-bold">100+</h2>
          <p className="opacity-70">Happy students</p>
        </div>
        <Separator className="w-1/12 rotate-90 mt-10 " />
        <div className=" flex flex-col items-center  h-20 space-y-1">
          <h2 className="text-6xl font-bold">5k+</h2>
          <p className="opacity-70">Hours spent on craft</p>
        </div>
        <Separator className="w-1/12 rotate-90 mt-10" />
        <div className=" flex flex-col items-center h-20 space-y-1">
          <h2 className="text-6xl font-bold">4.8</h2>
          <p className="opacity-70">Review rate</p>
        </div>
      </div>
    </section>
  );
};
