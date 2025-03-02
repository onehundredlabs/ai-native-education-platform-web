import { FirstSection } from "./Sections/FirstSection";
import { HeroSection } from "./Sections/HeroSection";
import { SecondSection } from "./Sections/SecondSection";

export default function Home() {
  return (
    <section className="pt-36 z-0">
      <HeroSection />
      <FirstSection />
     <SecondSection/> 
    </section>
  );
}
