"use client";
import { Check, TrendingUp } from "lucide-react";
import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Separator } from "@/components/ui/separator";
const chartData = [
  { skill: "Coding", level: 85 },
  { skill: "Algorithms", level: 75 },
  { skill: "Debugging", level: 90 },
  { skill: "Problem Solving", level: 80 },
  { skill: "Collaboration", level: 70 },
  { skill: "Creativity", level: 88 },
];

const chartConfig = {
  skill: {
    label: "Desktop",
    color: "hsl(var(--color-desktop))",
  },
} satisfies ChartConfig;

export function RadarChartCard() {
  return (
    <Card className="lg:h-[620px] 2xl:h-[700px] shadow-lg">
      <CardHeader className=" pb-6">
        <CardTitle className="text-left pt-3 b-1">
          Digital Certificates
        </CardTitle>
        <CardDescription>
        Reward milestones or completion with certificates to celebrate achievements.        </CardDescription>
      </CardHeader>
      <CardContent className="">
        <ChartContainer
          config={chartConfig}
          className="w-full aspect-square max-h-[238px] 2xl:max-h-[338px]"
        >
          <RadarChart data={chartData}>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <PolarGrid gridType="circle" />
            <PolarAngleAxis dataKey="skill" />
            <Radar
              dataKey="level"
              fill="rgb(59, 130, 255)"
              fillOpacity={0.6}
              dot={{
                r: 4,
                fillOpacity: 1,
              }}
            />
          </RadarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="flex items-center gap-2 leading-none text-muted-foreground">
          January - June 2024
        </div>

        <Separator className="my-5" />
        <div className="text-sm">
          <ul className="space-y-3  pb-5">
            <li className="flex items-center space-x-2">
              <Check className="text-primary" size={18} />
              <span>Track learning milestones</span>
            </li>
            <li className="flex items-center justify-center space-x-2">
              <Check className="text-primary" size={18} />
              <span>Monitor quiz performance</span>
            </li>
            <li className="flex items-center justify-center space-x-2">
              <Check className="text-primary" size={18} />
              <span>Visualize progress trends</span>
            </li>
          </ul>
        </div>
      </CardFooter>
    </Card>
  );
}
