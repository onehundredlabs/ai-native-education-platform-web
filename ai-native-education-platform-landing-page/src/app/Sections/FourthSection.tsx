"use client";
import { RadarChartCard } from "./../charts/RadarChartCard";
import { AreaChartCard } from "../charts/AreaChartCard";
import { BarChartCard } from "./../charts/BarChartCard";
import { motion } from "framer-motion";

const charts = [
  { id: "area", component: <AreaChartCard /> },
  { id: "bar", component: <BarChartCard /> },
  { id: "radar", component: <RadarChartCard /> },
];

export const FourthSection = () => {
  return (
    <section className="w-5/6 lg:w-3/4 m-auto mb-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2 className="text-5xl font-bold lg:text-center font-geist">
          Progress Tracking & Analytics
        </h2>
        <p className="lg:text-center text-xl font-geist py-3 opacity-70">
          Track and Celebrate Growth
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-10">
        {charts.map((chart, index) => (
          <motion.div
            key={chart.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            {chart.component}
          </motion.div>
        ))}
      </div>
    </section>
  );
};
