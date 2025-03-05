import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Github, Globe, Linkedin, Twitter } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="mt-32 w-5/6 lg:w-3/4 m-auto">
      <div className="flex flex-col lg:flex-row items-center w-full justify-between">
        <h3 className="font-geist text-2xl font-bold opacity-80 mb-5 lg:mb-0">Learnify</h3>

        <nav className="flex flex-col lg:flex-row">
          <Button variant="link" asChild>
            <a href="">Creation</a>
          </Button>
          <Button variant="link" asChild>
            <a href="">Managment</a>
          </Button>
          <Button variant="link" asChild>
            <a href="">Feedback</a>
          </Button>
          <Button variant="link" asChild>
            <a href="">Analytics</a>
          </Button>
          <Button variant="link" asChild>
            <a href="">Collaboration</a>
          </Button>
          <Button variant="link" className="pr-4 lg:pr-0" asChild>
            <a href="">Explore</a>
          </Button>
        </nav>
      </div>
      <div className="flex justify-center lg:justify-start gap-4 mt-5 ">
        <a href="" className="opacity-65 hover:opacity-100 transition">
          <Github strokeWidth={1.5}  size={27} />
        </a>
        <a href="" className="opacity-65 hover:opacity-100 transition">
          <Twitter strokeWidth={1.5}   size={27} />
        </a>
        <a href="" className="opacity-65 hover:opacity-100 transition">
          <Linkedin strokeWidth={1.5}   size={27} />
        </a>
        <a href="" className="opacity-65 hover:opacity-100 transition">
          <Globe strokeWidth={1.5}   size={27} />
        </a>
      </div>

      <Separator className="my-8" />
      <div className="flex justify-between items-center mb-10">
        <p className="text-center text-sm text-muted-foreground">
          © 2025 Learnify.
        </p>
        <p className="text-center text-sm text-muted-foreground">
          Made by{" "}
          <Button variant={"link"} asChild className="pl-1 pr-0">
            <a href="">One Hundred Labs</a>
          </Button>
        </p>
      </div>
    </footer>
  );
};
