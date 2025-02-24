import { FirstSection } from "./FirstSection";
import { HeroSection } from "./HeroSection";

export default function Home() {
  return (
    <section className="pt-36 z-0">
      <HeroSection />
      <FirstSection />
    </section>
  );
}
