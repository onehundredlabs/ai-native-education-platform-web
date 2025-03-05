import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRight, BookCheck, Brain, Pencil } from "lucide-react";

export const FirstSection = () => {
  return (
    <section id="creation" className="mb-20 lg:mb-48  w-5/6 lg:w-3/4  rounded-xl m-auto mt-24 ">
      <div className=" flex font-geist">
        <div className="xl:w-1/2">
          <h2 className="text-4xl lg:text-5xl font-bold ">Course Authoring Tool</h2>
          <p className="pl-1 text-xl font-geist  py-3 opacity-70">
            Create and Share Your Knowledge Effortlessly
          </p>
        </div>
      </div>
      <div className="h-[40%] grid grid-cols-1 lg:grid-cols-3 gap-7 mt-7">
        <Card className="border-border shadow-lg pb-3">
          <CardHeader>
            <BookCheck
              strokeWidth={1}
              size={70}
              className="mb-12 mt-4 text-primary"
            />
            <CardTitle className="lg:text-xl xl:text-2xl">Interactive Lesson Editor</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-left opacity-60 font-sans">
              Craft engaging lessons with text, images, video, and interactive
              elements—all in an intuitive drag-and-drop interface.
            </p>
          </CardContent>
          <CardFooter>
            <Button>Start Creating Lessons <ArrowRight size={20} /></Button>
          </CardFooter>
        </Card>
        <Card className="border-border shadow-lg  pb-3">
          <CardHeader>
            <Pencil
              strokeWidth={1}
              size={70}
              className="mb-12 mt-4 text-primary"
            />
            <CardTitle className="lg:text-xl xl:text-2xl">Assignment Configuration</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-left opacity-60 font-sans">
              Add coding challenges, quizzes, or projects with automated checks,
              so you spend less time grading and more time teaching.
            </p>
          </CardContent>
          <CardFooter>
            <Button>Configure Assignments <ArrowRight size={20} /></Button>
          </CardFooter>
        </Card>

        <Card className="border-border shadow-lg  pb-3">
          <CardHeader>
            <Brain
              strokeWidth={1}
              size={70}
              className="mb-12 mt-4 text-primary"
            />
            <CardTitle className="lg:text-xl xl:text-2xl">AI Content Suggestions</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-left opacity-60 font-sans">
              Harness the power of AI to generate course outlines, quiz
              questions, and real-world examples based on your lesson topics.
            </p>
          </CardContent>
          <CardFooter>
            <Button>See Suggestions <ArrowRight size={20} /></Button>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
};
