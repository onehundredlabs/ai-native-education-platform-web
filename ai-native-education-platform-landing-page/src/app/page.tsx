import { FifthSection } from "./sections/FifthSection";
import { FirstSection } from "./sections/FirstSection";
import { FourthSection } from "./sections/FourthSection";
import { HeroSection } from "./sections/HeroSection";
import { SecondSection } from "./sections/SecondSection";
import { ThirdSection } from "./sections/ThirdSection";

export default function Home() {
  return (
    <section className="pt-20 lg:pt-28 xl:36 z-0 scroll-smooth">
      <HeroSection />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FifthSection />
    </section>
  );
}
