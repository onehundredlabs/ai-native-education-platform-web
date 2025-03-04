"use client";
import { RadarChartCard } from "./../charts/RadarChartCard";
import { AreaChartCard } from "../charts/AreaChartCard";
import { BarChartCard } from "./../charts/BarChartCard";

export const FourthSection = () => {
  return (
    <section className="w-5/6 lg:w-3/4 m-auto ">
      <div>
        <h2 className="text-5xl font-bold lg:text-center font-geist">
          Progress Tracking & Analytics
        </h2>
        <p className="lg:text-center text-xl font-geist  py-3 opacity-70">
          Track and Celebrate Growth
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5  mt-10 ">
        <div>
          <AreaChartCard />
        </div>
        <div>
          <BarChartCard />
        </div>
        <div>
          <RadarChartCard />
        </div>
      </div>
    </section>
  );
};
