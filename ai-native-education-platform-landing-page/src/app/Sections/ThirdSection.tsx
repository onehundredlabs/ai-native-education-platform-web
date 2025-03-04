import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  ArrowRight,
  BotMessageSquare,
  CircleFadingArrowUp,
  MoveRight,
  User,
  Zap,
} from "lucide-react";

export const ThirdSection = () => {
  return (
    <section className="w-3/4 m-auto mb-32">
      <div className=" flex font-geist">
        <div className="">
          <h2 className="text-5xl font-bold ">AI Assessment & Feedback</h2>
          <p className="pl-1 text-xl font-geist  py-3 opacity-70">
            Transform How Students Learn Through Real-Time Feedback
          </p>
        </div>
      </div>

      <div className="flex mt-2">
        <div className="w-1/4">
          <div className="flex items-center">
            <p className="text-xl font-semibold font-geist text-primary">
              Automated Grading
            </p>
            <MoveRight size={100} strokeWidth={0.5} className="mx-2" />
          </div>
          <p className="text-muted-foreground  text-lg text-justify w-10/12">
            Provides real-time suggestions on code quality, helping students
            improve efficiency and style.
          </p>
          <Badge className="my-4 py-1">
            <BotMessageSquare size={15} className="mr-1" /> No manual reviews
            needed.
          </Badge>
        </div>
        <div className="w-1/4">
          <div className="flex items-center">
            <p className="text-xl text-primary font-semibold font-geist">
              Instant AI Feedback
            </p>
            <MoveRight size={100} strokeWidth={0.5} className="mx-2" />
          </div>
          <p className="text-muted-foreground  text-lg text-justify w-10/12">
            Identifies errors in code and offers troubleshooting tips to guide
            students through fixes.
          </p>
          <Badge className="my-4 py-1">
            <Zap size={15} className="mr-1" />
            Get feedback in seconds.
          </Badge>
        </div>
        <div className="w-1/4">
          <div className="flex items-center">
            <p className="text-xl text-primary font-semibold text-nowrap  font-geist">
              Code Quality Insights
            </p>
            <MoveRight size={100} strokeWidth={0.5} className="mx-2" />
          </div>
          <p className="text-muted-foreground  text-lg text-justify w-10/12">
            Identifies errors in code and offers troubleshooting tips to guide
            students through fixes.
          </p>
          <Badge className="my-4 py-1">
            <CircleFadingArrowUp size={15} className="mr-1" />
            Improve readability & efficiency.
          </Badge>
        </div>
        <div className="w-1/4">
          <div className="flex items-center">
            <p className="text-xl text-primary text-nowrap font-semibold font-geist">
              Adaptive Task Difficulty
            </p>
            <MoveRight
              size={100}
              strokeWidth={0.5}
              className="mx-2 opacity-0"
            />
          </div>
          <p className="text-muted-foreground  text-lg text-justify w-10/12">
            Adjusts challenge levels based on student progress to ensure
            appropriate difficulty.
          </p>
          <Badge className="my-4 py-1">
            <User size={15} className="mr-1" />
            Personalized experience.
          </Badge>
        </div>
      </div>
      <Separator className="mt-10" />
      <div className="mt-5">
        <p className="text-lg text-muted-foreground mb-4">
          Experience the power of AI-driven learning today.
        </p>
        <Button className="flex items-center gap-2">
          Try It <ArrowRight size={20} />
        </Button>
      </div>
    </section>
  );
};
