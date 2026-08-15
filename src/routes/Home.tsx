import { Hero } from "../components/sections/Hero";
import { Work } from "../components/sections/Work";
import { About } from "../components/sections/About";
import { Experience } from "../components/sections/Experience";

export function Home() {
  return (
    <>
      <Hero />
      <Work />
      <About />
      <Experience />
    </>
  );
}
