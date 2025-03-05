"use client";
import { Check, TrendingUp } from "lucide-react";
import { Bar, BarChart, XAxis, YAxis } from "recharts";
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
  { month: "January", engagement: 120 },
  { month: "February", engagement: 150 },
  { month: "March", engagement: 180 },
  { month: "April", engagement: 130 },
  { month: "May", engagement: 160 },
  { month: "June", engagement: 200 },
];

const chartConfig = {
  engagement: {
    label: "Activity",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

export function BarChartCard() {
  return (
    <Card className="lg:h-[620px]">
      <CardHeader className="pb-10">
        <CardTitle className="pt-3 b-1">Educator Dashboards</CardTitle>
        <CardDescription>
          Monitor student engagement trends to optimize lesson plans and boost
          participation.
        </CardDescription>
      </CardHeader>
      <CardContent className="lg:h-[250px]">
        <ChartContainer config={chartConfig}>
          <BarChart
            accessibilityLayer
            data={chartData}
            layout="vertical"
            margin={{
              left: -20,
            }}
          >
            <XAxis type="number" dataKey="engagement" hide />
            <YAxis
              dataKey="month"
              type="category"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar
              dataKey="engagement"
              fill="var(--color-engagement)"
              radius={5}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Engagement up by 10% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Tracking student interactions over the last 6 months
        </div>
        <Separator className="my-5 mt-4" />
        <div className="text-sm flex flex-col items-center w-full">
          <ul className="space-y-3  pb-5 ">
            <li className="flex items-center space-x-2">
              <Check className="text-primary" size={18} />
              <span>Analyze engagement trends</span>{" "}
            </li>
            <li className="flex items-center justify-center space-x-2">
              <Check className="text-primary" size={18} />
              <span>Monitor student participation</span>
            </li>
            <li className="flex items-center justify-center space-x-2">
              <Check className="text-primary" size={18} />
              <span>Optimize lesson planning</span>
            </li>
          </ul>
        </div>
      </CardFooter>
    </Card>
  );
}
