import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  return (
    <section className="w-3/4  h-[750px] m-auto  bg-gradient-to-b from-card via-card to-background rounded-xl ">
      <div className="pt-36 flex flex-col items-center h-full">
        <h2 className="text-7xl font-semibold text-card-foreground opacity-80 text-center w-3/4">
        Reinvent Your Teaching & Learning with <span className="text-primary">AI-Powered</span> Education
        </h2>

        <p className="w-2/4 pt-6 pb-8 opacity-65 text-center">
          Empower educators to create engaging, interactive courses with instant
          AI feedback, automated assessments, and adaptive learning paths—all
          from one seamless platform.
        </p>
        <div className="space-x-4 ">
          <Button className="text-sm p-5">Get Started</Button>
          <Button className="text-sm p-5" variant={"secondary"}>Learn More</Button>
        </div>
      </div>
    </section>
  );
};
