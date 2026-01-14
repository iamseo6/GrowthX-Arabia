import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Bot, Zap, Network } from "lucide-react";
import heroImage from "@assets/generated_images/abstract_3d_ai_network_visualization_with_glowing_nodes.png";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-background">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-accent/20 rounded-full blur-[120px]" />
        <div className="absolute inset-0 bg-grid-pattern opacity-20" />
      </div>

      <div className="container mx-auto px-4 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-left"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="text-xs font-medium text-primary tracking-wide">AI-POWERED AUTOMATION</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-heading font-bold leading-tight mb-6">
            Scale Faster with <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-cyan-400 to-accent text-glow">
              Intelligent AI
            </span>
          </h1>
          
          <p className="text-lg text-muted-foreground mb-8 max-w-xl leading-relaxed">
            GrowthX Arabia empowers businesses to automate workflows, reduce costs, and unlock exponential growth using cutting-edge Artificial Intelligence.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold text-md px-8 h-14 rounded-xl">
              Start Automating
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-white/10 text-foreground hover:bg-white/5 font-medium text-md px-8 h-14 rounded-xl">
              View Case Studies
            </Button>
          </div>

          <div className="mt-12 flex items-center gap-8 text-muted-foreground/50">
            <div className="flex items-center gap-2">
              <Bot className="h-5 w-5" />
              <span className="text-sm font-medium">AI Agents</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="h-5 w-5" />
              <span className="text-sm font-medium">Workflow Auto</span>
            </div>
            <div className="flex items-center gap-2">
              <Network className="h-5 w-5" />
              <span className="text-sm font-medium">Data Pipe</span>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative h-[500px] w-full rounded-2xl overflow-hidden glass-card p-2"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-accent/10 z-10" />
          <img 
            src={heroImage} 
            alt="AI Visualization" 
            className="w-full h-full object-cover rounded-xl"
          />
          
          {/* Floating Cards */}
          <motion.div 
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-10 right-10 z-20 glass-card p-4 rounded-xl border border-white/10 flex items-center gap-3 w-48"
          >
            <div className="h-10 w-10 rounded-lg bg-primary/20 flex items-center justify-center text-primary">
              <Zap className="h-5 w-5" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Efficiency</p>
              <p className="text-lg font-bold text-white">+450%</p>
            </div>
          </motion.div>

          <motion.div 
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-10 left-10 z-20 glass-card p-4 rounded-xl border border-white/10 flex items-center gap-3 w-48"
          >
            <div className="h-10 w-10 rounded-lg bg-accent/20 flex items-center justify-center text-accent">
              <Bot className="h-5 w-5" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Active Agents</p>
              <p className="text-lg font-bold text-white">24/7</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}