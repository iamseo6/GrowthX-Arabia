import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Process } from "@/components/sections/Process";
import { About } from "@/components/sections/About";
import { Features } from "@/components/sections/Features";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/30">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Process />
        <About />
        <Features />
        <Contact />
      </main>
      
      <footer className="py-8 border-t border-white/10 bg-black/50 text-center text-sm text-muted-foreground">
        <div className="container mx-auto px-4">
          <p>© 2024 GrowthX Arabia. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}