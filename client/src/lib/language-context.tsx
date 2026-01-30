import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Language = "en" | "ar";

type TranslationValue = string | string[] | Record<string, any>;

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  tArray: (key: string) => any[];
  isRTL: boolean;
}

const translations: Record<Language, Record<string, TranslationValue>> = {
  en: {
    // Navbar
    "nav.services": "Services",
    "nav.process": "Process",
    "nav.caseStudies": "Case Studies",
    "nav.about": "About",
    "nav.contact": "Contact",
    "nav.getStarted": "Get Started",
    
    // Hero
    "hero.title1": "AI-Powered",
    "hero.title2": "Automation",
    "hero.title3": "for the Middle East",
    "hero.subtitle": "Transform your business operations with intelligent automation solutions. We help enterprises across the Gulf region achieve 10x efficiency through custom AI implementations.",
    "hero.cta1": "Book a Consultation",
    "hero.cta2": "See Our Work",
    
    // Services
    "services.titlePart1": "Our",
    "services.titlePart2": "Services",
    "services.subtitle": "End-to-end AI automation solutions designed for enterprise scale",
    "services.items": [
      {
        title: "Workflow Automation",
        description: "Streamline repetitive tasks with n8n, Make, and custom integrations that connect your entire tech stack."
      },
      {
        title: "AI Chatbots & Agents",
        description: "Deploy intelligent conversational agents that handle customer inquiries 24/7 with human-like understanding."
      },
      {
        title: "CRM Automation",
        description: "Automate lead nurturing, follow-ups, and client management with GoHighLevel and HubSpot integrations."
      },
      {
        title: "Document Processing",
        description: "Extract, analyze, and process documents automatically using advanced OCR and NLP technologies."
      },
      {
        title: "Data Analytics",
        description: "Turn raw data into actionable insights with automated reporting and predictive analytics dashboards."
      },
      {
        title: "Custom AI Solutions",
        description: "Bespoke AI implementations tailored to your unique business challenges and industry requirements."
      }
    ],
    
    // Process
    "process.titlePart1": "Our",
    "process.titlePart2": "Process",
    "process.subtitle": "A proven methodology for successful AI implementation",
    "process.steps": [
      { number: "01", title: "Discovery", description: "We analyze your workflows and identify automation opportunities" },
      { number: "02", title: "Strategy", description: "Custom roadmap with clear milestones and expected ROI" },
      { number: "03", title: "Build", description: "Rapid development using agile methodology" },
      { number: "04", title: "Deploy & Scale", description: "Launch, monitor, and continuously optimize" }
    ],
    
    // Case Studies
    "caseStudies.title": "Proven Results",
    "caseStudies.subtitle": "Real automation success stories using n8n, Make, and GoHighLevel across the region.",
    "caseStudies.viewAll": "View All Case Studies",
    "caseStudies.readMore": "Read Full Case Study",
    
    // About
    "about.title": "About GrowthX Arabia",
    "about.description": "We're a team of AI engineers, automation specialists, and business strategists dedicated to transforming how Middle Eastern businesses operate. With deep expertise in enterprise automation and a passion for innovation, we bridge the gap between cutting-edge AI technology and practical business applications.",
    "about.mission": "Our Mission",
    "about.missionText": "To empower businesses across the Middle East with intelligent automation solutions that drive growth, efficiency, and competitive advantage.",
    
    // Features
    "features.title": "Why leading companies choose",
    "features.items": [
      { title: "Rapid Implementation", desc: "Deploy AI solutions in weeks, not months." },
      { title: "Enterprise Grade Security", desc: "Bank-level encryption and data privacy compliance." },
      { title: "Scalable Architecture", desc: "Systems that grow effortlessly with your business volume." },
      { title: "ROI Focused", desc: "Every solution is designed to deliver measurable business impact." }
    ],
    "features.stats": {
      accuracy: "Accuracy Rate",
      roi: "ROI Average",
      operations: "Operations",
      clients: "Enterprise Clients"
    },
    
    // FAQ
    "faq.title": "Frequently Asked",
    "faq.titleHighlight": "Questions",
    "faq.subtitle": "Everything you need to know about our AI automation services",
    
    // Contact
    "contact.title": "Ready to",
    "contact.titleHighlight": "Transform?",
    "contact.subtitle": "Schedule a consultation with our AI architects today.",
    "contact.firstName": "First Name",
    "contact.lastName": "Last Name",
    "contact.email": "Email",
    "contact.website": "Website (optional)",
    "contact.message": "Message",
    "contact.messagePlaceholder": "Tell us about your automation needs...",
    "contact.submit": "Send Message",
    "contact.sending": "Sending...",
    "contact.success": "Message Sent!",
    "contact.successDesc": "We'll get back to you within 24 hours.",
    
    // Footer
    "footer.description": "Transforming businesses across the Middle East with intelligent AI automation solutions.",
    "footer.newsletter": "Newsletter",
    "footer.newsletterDesc": "Stay updated with the latest in AI automation",
    "footer.subscribe": "Subscribe",
    "footer.rights": "All rights reserved.",
    "footer.sections": {
      company: { title: "Company", links: ["About", "Careers", "Contact"] },
      services: { title: "Services", links: ["AI Chatbots", "Automation", "Analytics"] },
      legal: { title: "Legal", links: ["Privacy Policy", "Terms of Service", "Cookie Policy"] }
    }
  },
  ar: {
    // Navbar
    "nav.services": "الخدمات",
    "nav.process": "العملية",
    "nav.caseStudies": "دراسات الحالة",
    "nav.about": "عنّا",
    "nav.contact": "تواصل معنا",
    "nav.getStarted": "ابدأ الآن",
    
    // Hero
    "hero.title1": "أتمتة مدعومة",
    "hero.title2": "بالذكاء الاصطناعي",
    "hero.title3": "للشرق الأوسط",
    "hero.subtitle": "حوّل عمليات أعمالك مع حلول الأتمتة الذكية. نساعد المؤسسات في منطقة الخليج على تحقيق كفاءة أعلى بـ 10 أضعاف من خلال تطبيقات الذكاء الاصطناعي المخصصة.",
    "hero.cta1": "احجز استشارة",
    "hero.cta2": "شاهد أعمالنا",
    
    // Services
    "services.titlePart1": "",
    "services.titlePart2": "خدماتنا",
    "services.subtitle": "حلول أتمتة الذكاء الاصطناعي الشاملة المصممة للمؤسسات",
    "services.items": [
      {
        title: "أتمتة سير العمل",
        description: "بسّط المهام المتكررة باستخدام n8n و Make والتكاملات المخصصة التي تربط جميع أنظمتك."
      },
      {
        title: "روبوتات الدردشة الذكية",
        description: "انشر وكلاء محادثة ذكيين يتعاملون مع استفسارات العملاء على مدار الساعة بفهم شبيه بالإنسان."
      },
      {
        title: "أتمتة إدارة العملاء",
        description: "أتمتة رعاية العملاء المحتملين والمتابعات وإدارة العملاء مع تكاملات GoHighLevel و HubSpot."
      },
      {
        title: "معالجة المستندات",
        description: "استخراج وتحليل ومعالجة المستندات تلقائياً باستخدام تقنيات OCR و NLP المتقدمة."
      },
      {
        title: "تحليلات البيانات",
        description: "حوّل البيانات الخام إلى رؤى قابلة للتنفيذ مع التقارير الآلية ولوحات التحليلات التنبؤية."
      },
      {
        title: "حلول ذكاء اصطناعي مخصصة",
        description: "تطبيقات ذكاء اصطناعي مخصصة حسب تحديات أعمالك الفريدة ومتطلبات صناعتك."
      }
    ],
    
    // Process
    "process.titlePart1": "",
    "process.titlePart2": "منهجيتنا",
    "process.subtitle": "منهجية مثبتة لتنفيذ ناجح للذكاء الاصطناعي",
    "process.steps": [
      { number: "٠١", title: "الاكتشاف", description: "نحلل سير عملك ونحدد فرص الأتمتة" },
      { number: "٠٢", title: "الاستراتيجية", description: "خارطة طريق مخصصة بمعالم واضحة وعائد استثمار متوقع" },
      { number: "٠٣", title: "البناء", description: "تطوير سريع باستخدام منهجية أجايل" },
      { number: "٠٤", title: "الإطلاق والتوسع", description: "إطلاق ومراقبة وتحسين مستمر" }
    ],
    
    // Case Studies
    "caseStudies.title": "نتائج مثبتة",
    "caseStudies.subtitle": "قصص نجاح حقيقية للأتمتة باستخدام n8n و Make و GoHighLevel في المنطقة.",
    "caseStudies.viewAll": "عرض جميع دراسات الحالة",
    "caseStudies.readMore": "اقرأ الدراسة كاملة",
    
    // About
    "about.title": "عن GrowthX Arabia",
    "about.description": "نحن فريق من مهندسي الذكاء الاصطناعي ومتخصصي الأتمتة واستراتيجيي الأعمال المكرسين لتحويل طريقة عمل الشركات في الشرق الأوسط. مع خبرة عميقة في أتمتة المؤسسات وشغف بالابتكار، نسد الفجوة بين تقنية الذكاء الاصطناعي المتطورة والتطبيقات التجارية العملية.",
    "about.mission": "مهمتنا",
    "about.missionText": "تمكين الشركات في جميع أنحاء الشرق الأوسط بحلول الأتمتة الذكية التي تدفع النمو والكفاءة والميزة التنافسية.",
    
    // Features
    "features.title": "لماذا تختارنا الشركات الرائدة",
    "features.items": [
      { title: "تنفيذ سريع", desc: "انشر حلول الذكاء الاصطناعي في أسابيع، ليس أشهر." },
      { title: "أمان على مستوى المؤسسات", desc: "تشفير بمستوى البنوك والامتثال لخصوصية البيانات." },
      { title: "بنية قابلة للتوسع", desc: "أنظمة تنمو بسهولة مع حجم أعمالك." },
      { title: "تركيز على العائد", desc: "كل حل مصمم لتقديم تأثير تجاري قابل للقياس." }
    ],
    "features.stats": {
      accuracy: "معدل الدقة",
      roi: "متوسط العائد",
      operations: "العمليات",
      clients: "عملاء المؤسسات"
    },
    
    // FAQ
    "faq.title": "الأسئلة",
    "faq.titleHighlight": "الشائعة",
    "faq.subtitle": "كل ما تحتاج معرفته عن خدمات أتمتة الذكاء الاصطناعي لدينا",
    
    // Contact
    "contact.title": "هل أنت مستعد",
    "contact.titleHighlight": "للتحول؟",
    "contact.subtitle": "احجز استشارة مع مهندسي الذكاء الاصطناعي لدينا اليوم.",
    "contact.firstName": "الاسم الأول",
    "contact.lastName": "اسم العائلة",
    "contact.email": "البريد الإلكتروني",
    "contact.website": "الموقع الإلكتروني (اختياري)",
    "contact.message": "الرسالة",
    "contact.messagePlaceholder": "أخبرنا عن احتياجات الأتمتة الخاصة بك...",
    "contact.submit": "إرسال الرسالة",
    "contact.sending": "جاري الإرسال...",
    "contact.success": "تم الإرسال!",
    "contact.successDesc": "سنتواصل معك خلال 24 ساعة.",
    
    // Footer
    "footer.description": "نحوّل الشركات في جميع أنحاء الشرق الأوسط بحلول أتمتة الذكاء الاصطناعي الذكية.",
    "footer.newsletter": "النشرة الإخبارية",
    "footer.newsletterDesc": "ابق على اطلاع بآخر أخبار أتمتة الذكاء الاصطناعي",
    "footer.subscribe": "اشترك",
    "footer.rights": "جميع الحقوق محفوظة.",
    "footer.sections": {
      company: { title: "الشركة", links: ["عنّا", "الوظائف", "تواصل معنا"] },
      services: { title: "الخدمات", links: ["روبوتات الدردشة", "الأتمتة", "التحليلات"] },
      legal: { title: "قانوني", links: ["سياسة الخصوصية", "شروط الخدمة", "سياسة ملفات تعريف الارتباط"] }
    }
  }
};

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("language") as Language;
      return saved || "en";
    }
    return "en";
  });

  const isRTL = language === "ar";

  useEffect(() => {
    localStorage.setItem("language", language);
    document.documentElement.dir = isRTL ? "rtl" : "ltr";
    document.documentElement.lang = language;
  }, [language, isRTL]);

  const t = (key: string): string => {
    const value = translations[language][key];
    if (typeof value === "string") return value;
    return key;
  };

  const tArray = (key: string): any[] => {
    const value = translations[language][key];
    if (Array.isArray(value)) return value;
    return [];
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, tArray, isRTL }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
