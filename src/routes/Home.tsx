import { Hero } from "../components/sections/Hero";
import { FocusAreas } from "../components/sections/FocusAreas";
import { Work } from "../components/sections/Work";
import { About } from "../components/sections/About";
import { Experience } from "../components/sections/Experience";

export function Home() {
  return (
    <>
      <Hero />
      <FocusAreas />
      <Work />
      <About />
      <Experience />
    </>
  );
}
