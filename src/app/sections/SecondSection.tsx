"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Code, MessageSquareCode, Wind } from "lucide-react";

const data = [
  {
    icon: <Wind strokeWidth={0.75} size={150} className="text-primary mb-5" />,
    title: "Interactive Lesson Flow",
    description:
      "Merge explanations, code examples, quizzes, and hands-on tasks into one continuous learning experience.",
    badges: ["Interactive Learning", "Continuous Progress", "Hands-on Tasks"],
  },
  {
    icon: <Code strokeWidth={0.75} size={150} className="text-primary mb-5" />,
    title: "Built-In Coding Sandbox",
    description:
      "Let learners write and test JavaScript directly in the browser. Powered by a familiar web-based editor like Monaco.",
    badges: ["Code Testing", "Web Editor", "JavaScript Support"],
  },
  {
    icon: (
      <MessageSquareCode
        strokeWidth={0.75}
        size={150}
        className="text-primary mb-5"
      />
    ),
    title: "AI Mentor/Chatbot",
    description:
      "Students can ask questions, request hints, or get instant code reviews—perfect for personalized, just-in-time support.",
    badges: ["Instant Support", "Code Review", "Personalized Guidance"],
    wide: true, // Označuje, že by měl být širší (přes 2 sloupce)
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.5, ease: "easeOut" },
  }),
};

export const SecondSection = () => {
  return (
    <section className=" mb-32 lg:mb-48">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
        viewport={{ once: true, amount: 0.3 }}
        id="managment"
        className="w-5/6 lg:w-3/4 2xl:w-1/2 m-auto text-center scroll-mt-32"
      >
        <h2 className="text-4xl lg:text-5xl font-bold font-geist">
          Learning Management
        </h2>
        <p className="text-xl font-geist py-3 opacity-70">
          Make Learning Interactive and Personalized
        </p>
      </motion.div>

      <div className="w-5/6 lg:w-3/4 2xl:w-1/2 m-auto grid grid-cols-1 lg:grid-cols-3 gap-y-14 gap-x-14 mt-10 font-geist">
        {data.map((item, i) => (
          <motion.div
            key={i}
            custom={i}
            initial="hidden"
            whileInView="visible"
            variants={cardVariants}
            viewport={{ once: true, amount: 0.5 }}
            className={`border rounded-xl shadow-lg p-10 flex flex-col items-center bg-card 
            }`}
          >
            {item.icon}
            <h3 className="text-2xl font-bold text-center">{item.title}</h3>
            <p className="text-center py-5 opacity-80">{item.description}</p>
            <div className="lg:space-x-2 space-y-2 mt-2 mb-4 flex flex-col items-center">
              {item.badges.map((badge, j) => (
                <Badge key={j} variant="outline">
                  {badge}
                </Badge>
              ))}
            </div>
            <Button className="px-10 mt-5 py-5">Learn More</Button>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
