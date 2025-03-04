import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Code, MessageSquareCode, Wind } from "lucide-react";

export const SecondSection = () => {
  return (
    <section className="mb-32">
      <div className="w-5/6 lg:w-3/4 m-auto ">
        <h2 className="text-4xl lg:text-5xl font-bold lg:text-center font-geist">
          Learning Management
        </h2>
        <p className="lg:text-center text-xl font-geist  py-3 opacity-70">
          Make Learning Interactive and Personalized
        </p>
      </div>

      <div className="w-5/6 lg:w-3/4 m-auto grid grid-cols-1 lg:grid-cols-2 gap-y-14 gap-x-16 mt-10 font-geist">
        <div className="border rounded-xl shadow-lg p-10 flex flex-col items-center  bg-card">
          <Wind strokeWidth={0.75} size={150} className="text-primary  mb-5" />
          <h3 className="text-2xl font-bold text-center">
            Interactive Lesson Flow
          </h3>
          <div className="lg:space-x-2 space-y-2 mt-4 flex flex-col items-center">
            <Badge variant={"outline"}>Interactive Learning</Badge>
            <Badge variant={"outline"}>Continuous Progress</Badge>
            <Badge variant={"outline"}>Hands-on Tasks</Badge>
          </div>
          <p className="text-center lg:w-2/3 py-5 opacity-80">
            Merge explanations, code examples, quizzes, and hands-on tasks into
            one continuous learning experience.
          </p>

          <Button className="px-10 mt-5 py-5">Learn More</Button>
        </div>

        <div className="border rounded-xl shadow-lg p-10 flex flex-col items-center bg-card">
          <Code strokeWidth={0.75} size={150} className="text-primary mb-5" />
          <h3 className="text-2xl font-bold text-center">
            Built-In Coding Sandbox
          </h3>
          <div className="lg:space-x-2 space-y-2  mt-4 flex flex-col items-center">
            <Badge variant={"outline"}>Code Testing</Badge>
            <Badge variant={"outline"}>Web Editor</Badge>
            <Badge variant={"outline"}>JavaScript Support</Badge>
          </div>
          <p className="text-center w-2/3 py-5 opacity-80">
            Let learners write and test JavaScript directly in the browser.
            Powered by a familiar web-based editor like Monaco.
          </p>

          <Button className="px-10 mt-5 py-5">Learn More</Button>
        </div>

        <div className="border rounded-xl shadow-lg lg:col-span-2 lg:place-self-center h-full w-full lg:w-1/2 p-10 flex flex-col items-center bg-card">
          <MessageSquareCode
            strokeWidth={0.75}
            size={150}
            className="text-primary mb-5"
          />
          <h3 className="text-2xl font-bold text-center">AI Mentor/Chatbot</h3>
          <div className="lg:space-x-2 space-y-2  mt-4 flex flex-col items-center">
            <Badge variant={"outline"}>Instant Support</Badge>
            <Badge variant={"outline"}>Code Review</Badge>
            <Badge variant={"outline"}>Personalized Guidance</Badge>
          </div>
          <p className="text-center w-full lg:w-2/3 py-5 opacity-80">
            Students can ask questions, request hints, or get instant code
            reviews—perfect for personalized, just-in-time support.
          </p>

          <Button className="px-10 mt-5 py-5">Learn More</Button>
        </div>
      </div>
    </section>
  );
};
