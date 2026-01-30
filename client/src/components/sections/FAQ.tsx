import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What types of AI automation services do you offer?",
    answer: "We offer a comprehensive range of AI automation services including intelligent chatbots, document processing, workflow automation, predictive analytics, and custom AI solutions tailored to your specific business needs."
  },
  {
    question: "How long does it typically take to implement an AI solution?",
    answer: "Implementation timelines vary based on complexity. Simple automations can be deployed in 2-4 weeks, while more complex enterprise solutions typically take 2-3 months. We always provide a detailed timeline during our initial consultation."
  },
  {
    question: "Do you work with businesses in the Middle East specifically?",
    answer: "Yes! GrowthX Arabia specializes in serving businesses across the Middle East. We understand the unique challenges and opportunities in this region and provide solutions that align with local business practices and regulations."
  },
  {
    question: "What kind of ROI can I expect from AI automation?",
    answer: "Our clients typically see a 10x return on their AI investment within the first year. This comes from reduced operational costs, increased efficiency, fewer errors, and the ability to scale operations without proportionally increasing headcount."
  },
  {
    question: "Is my data secure with your AI solutions?",
    answer: "Absolutely. We implement enterprise-grade security with bank-level encryption, comply with international data privacy standards, and can work within your existing security infrastructure. Data privacy and protection are our top priorities."
  },
  {
    question: "Do I need technical expertise to use your AI solutions?",
    answer: "No technical expertise is required. We design our solutions with user-friendly interfaces and provide comprehensive training. Our team also offers ongoing support to ensure your team can effectively use and manage the AI tools."
  },
  {
    question: "Can your solutions integrate with our existing systems?",
    answer: "Yes, our AI solutions are designed to integrate seamlessly with popular business tools including CRMs, ERPs, communication platforms, and custom software. We conduct a thorough integration assessment during the planning phase."
  },
  {
    question: "What ongoing support do you provide after implementation?",
    answer: "We offer 24/7 technical support, regular system updates, performance monitoring, and continuous optimization. Our partnership doesn't end at deployment – we're committed to ensuring long-term success with your AI solutions."
  }
];

export function FAQ() {
  return (
    <section id="faq" className="py-24 relative bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Everything you need to know about our AI automation services
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="glass-card border border-white/10 rounded-xl px-6 data-[state=open]:border-primary/30"
              >
                <AccordionTrigger className="text-left text-lg font-medium hover:text-primary hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 text-base leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
