import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Process } from "@/components/sections/Process";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { About } from "@/components/sections/About";
import { Features } from "@/components/sections/Features";
import { Contact } from "@/components/sections/Contact";
import { BackToTop } from "@/components/ui/BackToTop";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/30">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Process />
        <CaseStudies />
        <About />
        <Features />
        <Contact />
      </main>
      
      <Footer />
      <BackToTop />
    </div>
  );
}
