"use client";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import {
  BotMessageSquare,
  CircleFadingArrowUp,
  MoveRight,
  User,
  Zap,
} from "lucide-react";
import Image from "next/image";

const data = [
  {
    title: "Automated Grading",
    description:
      "Automatically grades code using predefined test cases for fast, consistent results.",
    icon: <BotMessageSquare size={15} className="mr-1" />,
    badge: "No manual reviews needed.",
  },
  {
    title: "Instant AI Feedback",
    description:
      "Finds errors and suggests improvements for efficiency, style, and correctness.",
    icon: <Zap size={15} className="mr-1" />,
    badge: "Get feedback in seconds.",
  },
  {
    title: "Code Quality Insights",
    description:
      "Identifies errors in code and offers troubleshooting tips to guide students through fixes.",
    icon: <CircleFadingArrowUp size={15} className="mr-1" />,
    badge: "Improve readability & efficiency.",
  },
  {
    title: "Adaptive Task Difficulty",
    description:
      "Adjusts challenge levels based on progress to ensure optimal difficulty.",
    icon: <User size={15} className="mr-1" />,
    badge: "Personalized experience.",
  },
];

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.3, duration: 0.5, ease: "easeOut" },
  }),
};

export const ThirdSection = () => {
  return (
    <section className="w-5/6 lg:w-3/4 2xl:w-1/2 m-auto  mb-32 lg:mb-48">
      <motion.div
        id="feedback"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
        viewport={{ once: true, amount: 0.3 }}
        className="flex font-geist scroll-mt-32"
      >
        <div>
          <h2 className="text-4xl lg:text-5xl font-bold lg:text-left">
            AI Assessment & Feedback
          </h2>
          <p className="pl-1 text-xl font-geist py-3 opacity-70 lg:text-left">
            Transform How Students Learn Through Real-Time Feedback
          </p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <Card className="relative w-full h-full mt-10 shadow-lg dark:border-border/35">
          <div className="absolute scale-0 dark:scale-100 inset-0 flex justify-center items-center">
            <p className="text-3xl">Obrazek z textoveho editoru aplikace</p>
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

      <div className="flex flex-col  space-y-5 lg:space-y-0 lg:flex-row lg:justify-center  mt-10">
        {data.map((item, i) => (
          <motion.div
            key={i}
            custom={i}
            initial="hidden"
            whileInView="visible"
            variants={itemVariants}
            viewport={{ once: true, amount: 0.2 }}
            className={` ${i === data.length - 1 ? "lg:w-[20%]" : "lg:w-1/4"}`}
          >
            <div className="h-12 flex items-center">
              <p
                className={`lg:text-[18px] xl:text-xl font-semibold font-geist text-primary ${
                  (i === data.length - 1 && "text-nowrap") ||
                  (i === data.length - 2 && "text-nowrap")
                }`}
              >
                {item.title}
              </p>
              {i === data.length - 1 ? (
                <div></div>
              ) : (
                <MoveRight
                  size={100}
                  strokeWidth={0.5}
                  className={`mx-2 hidden lg:flex dark:opacity-70`}
                />
              )}
            </div>
            <p
              className={`text-muted-foreground text-lg text-justify ${
                i === data.length - 1 ? "w-full " : "lg:w-10/12 w-full"
              } `}
            >
              {item.description}
            </p>
            <Badge className="my-4 py-1">
              {item.icon} {item.badge}
            </Badge>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
