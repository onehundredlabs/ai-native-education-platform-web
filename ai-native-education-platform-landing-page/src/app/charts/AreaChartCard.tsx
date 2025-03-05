"use client";
import { Check, TrendingUp } from "lucide-react";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";
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
  { month: "January", lessons: 12, quizzes: 50 },
  { month: "February", lessons: 18, quizzes: 55 },
  { month: "March", lessons: 22, quizzes: 60 },
  { month: "April", lessons: 25, quizzes: 67 },
  { month: "May", lessons: 27, quizzes: 62 },
  { month: "June", lessons: 30, quizzes: 65 },
];

const chartConfig = {
  lessons: {
    label: "Lessons",
    color: "hsl(var(--chart-1))",
  },
  quizzes: {
    label: "Quiz Scores",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

export function AreaChartCard() {
  return (
    <Card className="lg:h-[620px]">
      <CardHeader className="pb-10">
        <CardTitle className="pt-3 pb-1">Learner Dashboards</CardTitle>
        <CardDescription>
          Students can see completed lessons and quiz scores to track their
          progress.
        </CardDescription>
      </CardHeader>
      <CardContent className="lg:h-[250px]">
        <ChartContainer config={chartConfig} className="max-h-[250px]">
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dot" />}
            />
            <Area
              dataKey="lessons"
              type="natural"
              fill="var(--color-lessons)"
              fillOpacity={0.4}
              stroke="var(--color-lessons)"
              stackId="a"
            />
            <Area
              dataKey="quizzes"
              type="natural"
              fill="var(--color-quizzes)"
              fillOpacity={0.4}
              stroke="var(--color-quizzes)"
              stackId="a"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex flex-col">
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 font-medium leading-none">
              Progress up by 12% this month <TrendingUp className="h-4 w-4" />
            </div>
            <div className="flex items-center gap-2 leading-none text-muted-foreground">
              January - June 2024
            </div>
          </div>
        </div>
        <Separator className="my-5" />
        <div className="text-sm">
          <ul className="space-y-3  pb-5 pt-2">
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
