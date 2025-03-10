"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { motion } from "framer-motion";
import { ArrowRight, BookCheck, Brain, Pencil } from "lucide-react";

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.7, ease: "easeOut" },
  }),
};

const data = [
  {
    icon: (
      <BookCheck
        strokeWidth={1}
        size={70}
        className="mb-12 mt-4 text-primary"
      />
    ),
    title: "Interactive Lesson Editor",
    description:
      "Craft engaging lessons with text, images, video, and interactive elements—all in an intuitive drag-and-drop interface.",
    button: "Start Creating Lessons",
  },
  {
    icon: (
      <Pencil strokeWidth={1} size={70} className="mb-12 mt-4 text-primary" />
    ),
    title: "Assignment Configuration",
    description:
      "Add coding challenges, quizzes, or projects with automated checks, so you spend less time grading and more time teaching.",
    button: "Configure Assignments",
  },
  {
    icon: (
      <Brain strokeWidth={1} size={70} className="mb-12 mt-4 text-primary" />
    ),
    title: "AI Content Suggestions",
    description:
      "Harness the power of AI to generate course outlines, quiz questions, and real-world examples based on your lesson topics.",
    button: "See Suggestions",
  },
];

export const FirstSection = () => {
  return (
    <section className="mb-48 lg:mb-48 w-5/6 lg:w-3/4 2xl:w-1/2 rounded-xl m-auto ">
      <div id="creation" className="flex font-geist mt-24 scroll-mt-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
          viewport={{ once: true, amount: 0.5 }}
          className="xl:w-1/2"
        >
          <h2 className="text-4xl lg:text-5xl font-bold">
            Course Authoring Tool
          </h2>
          <p className="pl-1 text-xl font-geist py-3 opacity-70">
            Create and Share Your Knowledge Effortlessly
          </p>
        </motion.div>
      </div>
      <div className="h-[40%] grid grid-cols-1 lg:grid-cols-3 gap-7 mt-7">
        {data.map((item, i) => (
          <motion.div
            key={i}
            custom={i}
            initial="hidden"
            whileInView="visible"
            variants={cardVariants}
            viewport={{ once: true, amount: 0.5 }}
          >
            <Card className="border-border shadow-lg pb-3">
              <CardHeader>
                {item.icon}
                <CardTitle className="lg:text-xl xl:text-2xl">
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-left opacity-60 font-sans">
                  {item.description}
                </p>
              </CardContent>
              <CardFooter>
                <Button>
                  {item.button} <ArrowRight size={20} />
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
