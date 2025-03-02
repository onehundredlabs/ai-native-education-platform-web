import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BookCheck, Brain, Pencil } from "lucide-react";

export const FirstSection = () => {
  return (
    <section id="creation" className="mb-48  w-3/4 rounded-xl m-auto mt-14 ">
      <div className=" flex font-geist">
        <div className="w-1/2">
          <h2 className="text-5xl font-bold ">Course Authoring Tool</h2>
          <p className="pl-1 text-xl font-geist  py-3 opacity-70">
            Create and Share Your Knowledge Effortlessly
          </p>
        </div>
      </div>
      <div className="h-[40%] grid grid-cols-3 gap-7 mt-7">
        <Card className="border-zinc-300 shadow-lg pb-3">
          <CardHeader>
            <BookCheck
              strokeWidth={1}
              size={70}
              className="mb-12 mt-4 text-primary"
            />
            <CardTitle>Interactive Lesson Editor</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-left opacity-60 font-sans">
              Craft engaging lessons with text, images, video, and interactive
              elements—all in an intuitive drag-and-drop interface.
            </p>
          </CardContent>
          <CardFooter>
            <Button>Start Creating Lessons</Button>
          </CardFooter>
        </Card>
        <Card className="border-zinc-300 shadow-lg  pb-3">
          <CardHeader>
            <Pencil
              strokeWidth={1}
              size={70}
              className="mb-12 mt-4 text-primary"
            />
            <CardTitle>Assignment Configuration</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-left opacity-60 font-sans">
              Add coding challenges, quizzes, or projects with automated checks,
              so you spend less time grading and more time teaching.
            </p>
          </CardContent>
          <CardFooter>
            <Button>Configure Assignments</Button>
          </CardFooter>
        </Card>

        <Card className="border-zinc-300 shadow-lg  pb-3">
          <CardHeader>
            <Brain
              strokeWidth={1}
              size={70}
              className="mb-12 mt-4 text-primary"
            />
            <CardTitle>AI Content Suggestions</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-left opacity-60 font-sans">
              Harness the power of AI to generate course outlines, quiz
              questions, and real-world examples based on your lesson topics.
            </p>
          </CardContent>
          <CardFooter>
            <Button>See Suggestions</Button>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
};
