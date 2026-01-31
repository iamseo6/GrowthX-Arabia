import { useParams, Link } from "wouter";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowRight, ArrowLeft, CheckCircle2, Workflow, Puzzle, Code, RefreshCw, MessageSquare, Share2, BookOpen, Users, Target, TrendingUp, Mail, Calendar, LayoutDashboard, FileText, LineChart, Database, Settings, FileEdit, Link as LinkIcon, BarChart3, Rocket, Coins, Split, PieChart, MapPin, Building, Star, Map } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { getServiceBySlug } from "@/lib/services-data";
import { useLanguage } from "@/lib/language-context";

const iconMap: { [key: string]: any } = {
  Workflow, Puzzle, Code, RefreshCw, MessageSquare, Share2, BookOpen, Users,
  Target, TrendingUp, Mail, Calendar, LayoutDashboard, FileText, LineChart,
  Database, Settings, FileEdit, Link: LinkIcon, BarChart3, Rocket, Coins,
  Split, PieChart, MapPin, Building, Star, Map
};

export default function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>();
  const { language, isRTL } = useLanguage();
  const service = getServiceBySlug(slug || "");
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!service) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">{isRTL ? "الخدمة غير موجودة" : "Service Not Found"}</h1>
          <Link href="/">
            <Button>{isRTL ? "العودة للرئيسية" : "Back to Home"}</Button>
          </Link>
        </div>
      </div>
    );
  }

  const title = language === "ar" ? service.titleAr : service.title;
  const subtitle = language === "ar" ? service.subtitleAr : service.subtitle;
  const description = language === "ar" ? service.descriptionAr : service.description;
  const ctaText = language === "ar" ? service.ctaTextAr : service.ctaText;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-accent/20 rounded-full blur-[120px]" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={`max-w-4xl mx-auto ${isRTL ? "text-right" : "text-center"}`}
          >
            <Link href="/services">
              <span className={`inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-6 cursor-pointer ${isRTL ? "flex-row-reverse" : ""}`}>
                {isRTL ? <ArrowRight className="h-4 w-4" /> : <ArrowLeft className="h-4 w-4" />}
                {isRTL ? "العودة للخدمات" : "Back to Services"}
              </span>
            </Link>
            
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-cyan-400 to-accent">
                {title}
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-4">{subtitle}</p>
            <p className="text-lg text-muted-foreground/80 max-w-2xl mx-auto">{description}</p>
            
            <div className="mt-8">
              <Link href="/get-started">
                <Button size="lg" className={`bg-primary text-primary-foreground hover:bg-primary/90 font-bold px-8 h-14 rounded-xl ${isRTL ? "flex-row-reverse" : ""}`} data-testid="button-service-cta-top">
                  {ctaText}
                  <ArrowIcon className={`h-5 w-5 ${isRTL ? "mr-2" : "ml-2"}`} />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`mb-12 ${isRTL ? "text-right" : "text-center"}`}
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              {isRTL ? "ما نقدمه" : "What We Deliver"}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {isRTL ? "ميزات وقدرات شاملة لتحقيق أهدافك" : "Comprehensive features and capabilities to achieve your goals"}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.features.map((feature, index) => {
              const IconComponent = iconMap[feature.icon] || CheckCircle2;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full glass-card border-white/10 hover:border-primary/50 transition-colors">
                    <CardContent className={`p-6 ${isRTL ? "text-right" : ""}`}>
                      <div className={`h-12 w-12 rounded-xl bg-primary/20 flex items-center justify-center text-primary mb-4 ${isRTL ? "mr-0" : ""}`}>
                        <IconComponent className="h-6 w-6" />
                      </div>
                      <h3 className="text-lg font-semibold mb-2">
                        {language === "ar" ? feature.titleAr : feature.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {language === "ar" ? feature.descriptionAr : feature.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`mb-12 ${isRTL ? "text-right" : "text-center"}`}
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              {isRTL ? "حالات الاستخدام" : "Use Cases"}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {isRTL ? "كيف تستفيد الشركات من هذه الخدمة" : "How businesses benefit from this service"}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {service.useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 border border-white/10 ${isRTL ? "text-right" : ""}`}
              >
                <div className={`flex items-center gap-3 mb-4 ${isRTL ? "flex-row-reverse" : ""}`}>
                  <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-semibold">
                    {language === "ar" ? useCase.titleAr : useCase.title}
                  </h3>
                </div>
                <p className="text-muted-foreground">
                  {language === "ar" ? useCase.descriptionAr : useCase.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`mb-12 ${isRTL ? "text-right" : "text-center"}`}
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              {isRTL ? "الأسئلة الشائعة" : "Frequently Asked Questions"}
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {service.faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <AccordionItem value={`item-${index}`} className="glass-card border border-white/10 rounded-xl px-6">
                    <AccordionTrigger className={`text-lg font-medium hover:no-underline ${isRTL ? "text-right flex-row-reverse" : ""}`}>
                      {language === "ar" ? faq.questionAr : faq.question}
                    </AccordionTrigger>
                    <AccordionContent className={`text-muted-foreground ${isRTL ? "text-right" : ""}`}>
                      {language === "ar" ? faq.answerAr : faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <section id="contact-cta" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center p-12 rounded-3xl bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 border border-white/10"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              {isRTL ? "هل أنت مستعد للبدء؟" : "Ready to Get Started?"}
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              {isRTL 
                ? "احجز استشارة مجانية مع خبرائنا وناقش كيف يمكننا مساعدتك في تحقيق أهدافك."
                : "Book a free consultation with our experts and discuss how we can help you achieve your goals."
              }
            </p>
            <div className={`flex flex-col sm:flex-row gap-4 justify-center ${isRTL ? "sm:flex-row-reverse" : ""}`}>
              <Link href="/#contact">
                <Button size="lg" className={`bg-primary text-primary-foreground hover:bg-primary/90 font-bold px-8 h-14 rounded-xl ${isRTL ? "flex-row-reverse" : ""}`} data-testid="button-service-contact">
                  {isRTL ? "احجز استشارة" : "Book Consultation"}
                  <ArrowIcon className={`h-5 w-5 ${isRTL ? "mr-2" : "ml-2"}`} />
                </Button>
              </Link>
              <Link href="/">
                <Button size="lg" variant="outline" className="border-white/10 hover:bg-white/5 font-medium px-8 h-14 rounded-xl" data-testid="button-service-explore">
                  {isRTL ? "استكشف خدمات أخرى" : "Explore Other Services"}
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
