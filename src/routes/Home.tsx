import { Hero } from "../components/sections/Hero";
import { FocusAreas } from "../components/sections/FocusAreas";
import { Work } from "../components/sections/Work";
import { About } from "../components/sections/About";
import { Skills } from "../components/sections/Skills";
import { Experience } from "../components/sections/Experience";
import { ContactSection } from "../components/sections/ContactSection";

export function Home() {
  return (
    <>
      <Hero />
      <FocusAreas />
      <Work />
      <About />
      <Skills />
      <Experience />
      <ContactSection />
    </>
  );
}
