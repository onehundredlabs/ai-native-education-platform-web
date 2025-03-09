import { Button } from "@/components/ui/button";
import { Sparkle } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export const FifthSection = () => {
  return (
    <section id="explore" className="relative w-3/4 h-[400px] rounded-xl m-auto border p-10 overflow-hidden bg-white scroll-mt-32">
      <h2 className="text-5xl font-geist font-bold pt-4 relative">
        Join the Future of Education Today - nedodelane
      </h2>
      <p className="pl-1 text-lg font-geist w-2/3 pt-7 pb-3 opacity-80 relative ">
        Ready to transform your teaching and learning experience? Sign up now to
        explore our AI-native education platform and see how instant feedback,
        adaptive challenges, and a powerful authoring tool can revolutionize
        online learning.
      </p>
      <Badge variant={"outline"} className="mb-5 font-geist">
        <Sparkle size={12} className="mr-1 " /> New version available
      </Badge>
      <div className="space-x-4 relative ">
        <Button className="text-sm p-5 ">Get Started Free</Button>
        <Button id="creation" className="text-sm p-5" variant={"secondary"}>
          Request a Demo
        </Button>
      </div>
    </section>
  );
};
