import Hero from "@/components/Hero";
import AboutKudan from "@/components/AboutKudan"
import Chairman from "@/components/Chairman";
import Agri from "@/components/Agri";
import News from "@/components/News";
import Project from "@/components/Project";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <AboutKudan />
      <Chairman />
      <Agri />
      <News />
      <Project />
    </div>
  );
}