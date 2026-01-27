import { motion } from "framer-motion";
import { ArrowUpRight, BarChart3, Clock, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const caseStudies = [
  {
    title: "FinTech Automated Support",
    client: "PayFlow Arabia",
    category: "AI Support Agents",
    description: "Deployed a custom LLM-powered support agent that handles 85% of Level 1 queries autonomously, reducing response time from 4 hours to 30 seconds.",
    stats: [
      { label: "Cost Reduction", value: "65%", icon: BarChart3 },
      { label: "Response Time", value: "-98%", icon: Clock },
      { label: "CSAT Score", value: "4.8/5", icon: Users },
    ],
    image: "linear-gradient(135deg, #0ea5e9 0%, #3b82f6 100%)"
  },
  {
    title: "E-commerce Logistics",
    client: "SouqExpress",
    category: "Process Automation",
    description: "Implemented an intelligent inventory forecasting system that predicts stock shortages 2 weeks in advance and automates reordering workflows.",
    stats: [
      { label: "Stockouts", value: "-90%", icon: BarChart3 },
      { label: "Manual Hours", value: "-40h/wk", icon: Clock },
      { label: "Revenue", value: "+22%", icon: Users },
    ],
    image: "linear-gradient(135deg, #8b5cf6 0%, #d946ef 100%)"
  },
  {
    title: "Legal Document Analysis",
    client: "Al-Amir Law Firm",
    category: "NLP & Data Extraction",
    description: "Built a document processing pipeline that extracts key clauses and risks from contracts, reducing manual review time by days per case.",
    stats: [
      { label: "Processing Speed", value: "120x", icon: Clock },
      { label: "Accuracy", value: "99.2%", icon: BarChart3 },
      { label: "Billable Hours", value: "+30%", icon: Users },
    ],
    image: "linear-gradient(135deg, #10b981 0%, #06b6d4 100%)"
  }
];

export function CaseStudies() {
  return (
    <section id="case-studies" className="py-24 bg-background relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
              Proven <span className="text-primary">Results</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              See how we've transformed businesses across the region with intelligent automation.
            </p>
          </div>
          <Button variant="outline" className="hidden md:flex gap-2 border-white/10 hover:bg-white/5">
            View All Projects <ArrowUpRight className="h-4 w-4" />
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative rounded-2xl overflow-hidden glass-card border border-white/5 hover:border-primary/50 transition-all duration-300"
            >
              {/* Abstract Image Placeholder */}
              <div 
                className="h-48 w-full relative overflow-hidden"
                style={{ background: study.image }}
              >
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute bottom-4 left-4">
                  <Badge variant="secondary" className="bg-black/50 text-white border-none backdrop-blur-md">
                    {study.category}
                  </Badge>
                </div>
              </div>

              <div className="p-6">
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-primary mb-1">{study.client}</h4>
                  <h3 className="text-xl font-bold font-heading mb-2">{study.title}</h3>
                  <p className="text-muted-foreground text-sm line-clamp-3">
                    {study.description}
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-2 py-4 border-t border-white/5">
                  {study.stats.map((stat, i) => (
                    <div key={i} className="text-center">
                      <p className="text-lg font-bold text-white">{stat.value}</p>
                      <p className="text-[10px] uppercase tracking-wider text-muted-foreground">{stat.label}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-4 pt-4 border-t border-white/5 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                  <span className="text-sm font-medium text-white">Read Full Case Study</span>
                  <ArrowUpRight className="h-4 w-4 text-primary" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-8 text-center md:hidden">
          <Button variant="outline" className="gap-2 border-white/10 hover:bg-white/5 w-full">
            View All Projects <ArrowUpRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}