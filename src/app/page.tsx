import { SixthSection } from "./sections/SixthSection";
import { FirstSection } from "./sections/FirstSection";
import { FourthSection } from "./sections/FourthSection";
import { HeroSection } from "./sections/HeroSection";
import { SecondSection } from "./sections/SecondSection";
import { ThirdSection } from "./sections/ThirdSection";
import { FifthSection } from "./sections/FifthSection";

export default function Home() {
  return (
    <section className="pt-20 lg:pt-28 xl:36 z-0 scroll-smooth">
      <HeroSection />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FifthSection />
      <SixthSection />
    </section>
  );
}
