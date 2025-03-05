import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
import {
  // ArrowRight,
  BotMessageSquare,
  CircleFadingArrowUp,
  MoveRight,
  User,
  Zap,
} from "lucide-react";
import Image from "next/image";

export const ThirdSection = () => {
  return (
    <section className="w-5/6 lg:w-3/4 m-auto mb-32">
      <div className=" flex font-geist">
        <div className="">
          <h2 className="text-4xl lg:text-5xl font-bold lg:text-left">
            AI Assessment & Feedback
          </h2>
          <p className="pl-1 text-xl font-geist  py-3 opacity-70 lg:text-left">
            Transform How Students Learn Through Real-Time Feedback
          </p>
        </div>
      </div>
      <Card className="w-full  mt-10">
        <Image
          src={"/placeholder-screen.png"}
          width={1400}
          height={500}
          className="rounded-xl"
          alt="screenshot of aplication"
        />
      </Card>

      <div className="flex flex-col space-y-5 lg:space-y-0  lg:flex-row mt-10">
        <div className="lg:w-1/4">
          <div className="flex items-center">
            <p className="lg:text-[18px] text-nowrap xl:text-xl font-semibold font-geist text-primary">
              Automated Grading
            </p>
            <MoveRight size={100} strokeWidth={0.5} className="mx-2 hidden lg:flex" />
          </div>
          <p className="text-muted-foreground  text-lg text-justify w-10/12">
            Automatically grades code using predefined test cases for fast,
            consistent results.
          </p>
          <Badge className="my-4 py-1">
            <BotMessageSquare size={15} className="mr-1" /> No manual reviews
            needed.
          </Badge>
        </div>
        <div className="lg:w-1/4">
          <div className="flex items-center">
            <p className="lg:text-[18px] text-nowrap xl:text-xl text-primary font-semibold font-geist">
              Instant AI Feedback
            </p>
            <MoveRight size={100} strokeWidth={0.5} className="mx-2 hidden lg:flex" />
          </div>
          <p className="text-muted-foreground  text-lg text-justify w-10/12">
            Finds errors and suggests improvements for efficiency, style, and
            correctness.
          </p>
          <Badge className="my-4 py-1">
            <Zap size={15} className="mr-1" />
            Get feedback in seconds.
          </Badge>
        </div>
        <div className="lg:w-1/4">
          <div className="flex items-center">
            <p className="lg:text-[18px] text-primary font-semibold text-nowrap  font-geist">
              Code Quality Insights
            </p>
            <MoveRight size={100} strokeWidth={0.5} className="mx-2 hidden lg:flex" />
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
        <div className="lg:w-1/4">
          <div className="flex items-center">
            <p className="lg:text-[18px]  xl:text-xl text-primary text-nowrap font-semibold font-geist">
              Adaptive Task Difficulty
            </p>
            <MoveRight
              size={100}
              strokeWidth={0.5}
              className="mx-2 opacity-0 hidden lg:flex"
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

      {/* <div className="mt-10 flex flex-col items-center">
        <p className="text-lg text-muted-foreground mb-4 text-center">
          Experience the power of AI-driven learning today.
        </p>
        <Button className="m-auto gap-2">
          Try It <ArrowRight size={20} />
        </Button>
      </div> */}
    </section>
  );
};
