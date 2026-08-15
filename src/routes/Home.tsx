import { Hero } from "../components/sections/Hero";
import { FocusAreas } from "../components/sections/FocusAreas";
import { Work } from "../components/sections/Work";
import { About } from "../components/sections/About";
import { HowIBuild } from "../components/sections/HowIBuild";
import { DataPipelineShowcase } from "../components/sections/DataPipelineShowcase";
import { Skills } from "../components/sections/Skills";
import { PositioningStatement } from "../components/sections/PositioningStatement";
import { Experience } from "../components/sections/Experience";
import { ContactSection } from "../components/sections/ContactSection";

export function Home() {
  return (
    <>
      <Hero />
      <FocusAreas />
      <Work />
      <About />
      <HowIBuild />
      <DataPipelineShowcase />
      <Skills />
      <PositioningStatement />
      <Experience />
      <ContactSection />
    </>
  );
}
