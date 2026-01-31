import { motion } from "framer-motion";
import { ArrowUpRight, BarChart3, Clock, Users, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

import caseStudyLeadGen from "@/assets/images/case-study-lead-gen.png";
import caseStudyCrm from "@/assets/images/case-study-crm.png";
import caseStudyOnboarding from "@/assets/images/case-study-onboarding.png";
import caseStudyEcommerce from "@/assets/images/case-study-ecommerce.png";
import caseStudyBooking from "@/assets/images/case-study-booking.png";
import caseStudySocial from "@/assets/images/case-study-social.png";

const caseStudies = [
  {
    title: "Automated Lead Enrichment Pipeline",
    client: "TechVentures Dubai",
    category: "n8n Automation",
    platform: "n8n",
    description: "Built an n8n workflow that automatically enriches incoming leads with company data, social profiles, and intent signals, then routes qualified leads to the right sales rep in real-time.",
    stats: [
      { label: "Lead Quality", value: "+85%", icon: BarChart3 },
      { label: "Response Time", value: "< 5min", icon: Clock },
      { label: "SQLs Generated", value: "3x", icon: Users },
    ],
    image: caseStudyLeadGen
  },
  {
    title: "Multi-Channel CRM Sync",
    client: "PropTech MENA",
    category: "Make Automation",
    platform: "Make",
    description: "Implemented a Make scenario that syncs customer data across HubSpot, WhatsApp, email campaigns, and their custom CRM, ensuring every touchpoint is tracked and automated.",
    stats: [
      { label: "Data Accuracy", value: "99.5%", icon: BarChart3 },
      { label: "Manual Entry", value: "-95%", icon: Clock },
      { label: "Team Efficiency", value: "+40%", icon: Users },
    ],
    image: caseStudyCrm
  },
  {
    title: "Agency Client Onboarding",
    client: "Digital Growth Agency",
    category: "GHL Automation",
    platform: "GoHighLevel",
    description: "Created a fully automated GHL onboarding system with welcome sequences, intake forms, calendar booking, and automatic sub-account setup for new agency clients.",
    stats: [
      { label: "Onboarding Time", value: "-80%", icon: Clock },
      { label: "Client Satisfaction", value: "4.9/5", icon: Users },
      { label: "Churn Rate", value: "-45%", icon: BarChart3 },
    ],
    image: caseStudyOnboarding
  },
  {
    title: "E-commerce Order Orchestration",
    client: "LuxeCart Arabia",
    category: "n8n + Make",
    platform: "n8n",
    description: "Designed a hybrid automation using n8n and Make that processes orders, updates inventory across 5 warehouses, triggers shipping labels, and sends personalized tracking updates.",
    stats: [
      { label: "Order Processing", value: "< 2min", icon: Zap },
      { label: "Shipping Errors", value: "-92%", icon: BarChart3 },
      { label: "Customer NPS", value: "+35pts", icon: Users },
    ],
    image: caseStudyEcommerce
  },
  {
    title: "Smart Appointment System",
    client: "Elite Medical Center",
    category: "GHL Automation",
    platform: "GoHighLevel",
    description: "Built a GHL-powered appointment system with intelligent scheduling, automated reminders via SMS/WhatsApp, no-show follow-ups, and review request sequences after visits.",
    stats: [
      { label: "No-Shows", value: "-70%", icon: Clock },
      { label: "Bookings", value: "+55%", icon: BarChart3 },
      { label: "5-Star Reviews", value: "3x", icon: Users },
    ],
    image: caseStudyBooking
  },
  {
    title: "Social Media Content Engine",
    client: "Influencer Hub KSA",
    category: "Make Automation",
    platform: "Make",
    description: "Created a Make automation that repurposes long-form content into social posts, schedules across platforms, tracks engagement, and generates weekly performance reports automatically.",
    stats: [
      { label: "Content Output", value: "5x", icon: Zap },
      { label: "Engagement", value: "+120%", icon: BarChart3 },
      { label: "Hours Saved", value: "25h/wk", icon: Clock },
    ],
    image: caseStudySocial
  }
];

const platformColors: Record<string, string> = {
  "n8n": "bg-orange-500/20 text-orange-400 border-orange-500/30",
  "Make": "bg-purple-500/20 text-purple-400 border-purple-500/30",
  "GoHighLevel": "bg-green-500/20 text-green-400 border-green-500/30",
};

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
              Real automation success stories using n8n, Make, and GoHighLevel across the region.
            </p>
          </div>
          <div className="hidden md:flex gap-2">
            <Badge variant="outline" className={platformColors["n8n"]}>n8n</Badge>
            <Badge variant="outline" className={platformColors["Make"]}>Make</Badge>
            <Badge variant="outline" className={platformColors["GoHighLevel"]}>GoHighLevel</Badge>
          </div>
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
              <div className="h-48 w-full relative overflow-hidden">
                <img 
                  src={study.image} 
                  alt={study.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <div className="absolute bottom-4 left-4 flex gap-2">
                  <Badge variant="outline" className={`${platformColors[study.platform]} backdrop-blur-md`}>
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
        
        <div className="mt-12 text-center">
          <a href="/case-studies">
            <Button variant="outline" className="gap-2 border-white/10 hover:bg-white/5">
              View All Case Studies <ArrowUpRight className="h-4 w-4" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
