"use client";
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";
import { Switch } from "@/components/ui/switch";
import { Card } from "@/components/ui/card";
import { useState } from "react";
import { Sparkle } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export const FifthSection = () => {
  const [isAiEnabled, setIsAiEnabled] = useState<boolean>(false);

  return (
    <section className="relative w-5/6 lg:w-3/4 2xl:w-1/2 m-auto  mb-32 lg:mb-48">
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
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
        viewport={{ once: true, amount: 0.3 }}
        className="flex items-center space-x-2 mt-10"
      >
        <Switch
          id="is-ai"
          checked={isAiEnabled}
          onCheckedChange={setIsAiEnabled}
        />
        <Badge variant={isAiEnabled ? "default" : "outline"} className="py-1">
          <Sparkle size={12} className="mr-1" /> Ai
        </Badge>
      </motion.div>
      {isAiEnabled ? (
        <motion.div
          key="ai-enabled" // Klíč pro rozpoznání změny
          className="flex flex-col lg:flex-row mt-5"
          initial={{ opacity: 0, y: 20 }} // Výchozí stav pro animaci při přepnutí
          animate={{ opacity: 1, y: 0 }} // Animace pro přechod
          exit={{ opacity: 0, y: 20 }} // Animace výstupu při změně
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { delay: 0.5, duration: 0.7, ease: "easeOut" },
            }}
            viewport={{ once: true, amount: 0.5 }}
            className="lg:w-2/3"
          >
            <Card className="w-full h-[400px] flex items-center justify-center">
              <p>video chatu s ai/ ai demo</p>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { delay: 0.5, duration: 0.7, ease: "easeOut" },
            }}
            viewport={{ once: true, amount: 0.5 }}
            className="lg:w-1/3 font-geist lg:pl-10 pt-10 lg:pt-0 flex flex-col justify-center"
          >
            <h3 className="text-4xl font-bold">Peer Review</h3>
            <p className="text-lg mt-5 opacity-70 text-justify">
              Encourage students to learn from one another by offering
              structured code reviews—moderated by educators or AI for accuracy
              and support.
            </p>
          </motion.div>
        </motion.div>
      ) : (
        <motion.div
          key="ai-disabled" // Klíč pro rozpoznání změny
          className="flex flex-col lg:flex-row  mt-5"
          initial={{ opacity: 0, y: 20 }} // Výchozí stav pro animaci při přepnutí
          animate={{ opacity: 1, y: 0 }} // Animace pro přechod
          exit={{ opacity: 0, y: 20 }} // Animace výstupu při změně
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { delay: 0.2, duration: 0.7, ease: "easeOut" },
            }}
            viewport={{ once: true, amount: 0.5 }}
            className="lg:w-2/3"
          >
            <Card className="w-full h-[400px] flex items-center justify-center">
              <p>video chatu s clovekem</p>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { delay: 0.5, duration: 0.7, ease: "easeOut" },
            }}
            viewport={{ once: true, amount: 0.5 }}
            className="lg:w-1/3 font-geist lg:pl-10 pt-10 lg:pt-0 flex flex-col justify-center"
          >
            <h3 className="text-4xl font-bold">Discussion Forums</h3>
            <p className="text-lg mt-5 opacity-70 text-justify">
              Learners and educators can exchange ideas, with AI
              auto-suggestions for frequent questions and best answers.
            </p>
          </motion.div>
        </motion.div>
      )}
      <div className="w-full flex flex-col lg:flex-row justify-center mt-20 space-x-2 font-geist">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { delay: 0.2, duration: 0.7, ease: "easeOut" },
          }}
          viewport={{ once: true, amount: 0.5 }}
          className="flex flex-col items-center  h-2 space-y-1"
        >
          <h2 className="text-6xl font-bold">100+</h2>
          <p className="opacity-70">Happy students</p>
        </motion.div>
        <Separator className="lg:w-1/12 lg:rotate-90 mt-28 lg:mt-10 " />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { delay: 0.5, duration: 0.7, ease: "easeOut" },
          }}
          viewport={{ once: true, amount: 0.5 }}
          className=" flex flex-col items-center pt-5 lg:pt-0 h-20 space-y-1"
        >
          <h2 className="text-6xl font-bold">5k+</h2>
          <p className="opacity-70">Hours spent on craft</p>
        </motion.div>
        <Separator className=" w-3/ lg:w-1/12 lg:rotate-90 mt-14 lg:mt-10" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { delay: 0.8, duration: 0.7, ease: "easeOut" },
          }}
          viewport={{ once: true, amount: 0.5 }}
          className=" flex flex-col pt-5 lg:pt-0 items-center h-20 space-y-1"
        >
          <h2 className="text-6xl font-bold">4.8</h2>
          <p className="opacity-70">Review rate</p>
        </motion.div>
      </div>
    </section>
  );
};
