export interface ServiceFeature {
  title: string;
  titleAr: string;
  description: string;
  descriptionAr: string;
  icon: string;
}

export interface ServiceUseCase {
  title: string;
  titleAr: string;
  description: string;
  descriptionAr: string;
}

export interface ServiceFAQ {
  question: string;
  questionAr: string;
  answer: string;
  answerAr: string;
}

export interface ServiceData {
  slug: string;
  title: string;
  titleAr: string;
  subtitle: string;
  subtitleAr: string;
  description: string;
  descriptionAr: string;
  features: ServiceFeature[];
  useCases: ServiceUseCase[];
  faqs: ServiceFAQ[];
  ctaText: string;
  ctaTextAr: string;
}

export const servicesData: ServiceData[] = [
  {
    slug: "workflow-automation",
    title: "Workflow Automation",
    titleAr: "أتمتة سير العمل",
    subtitle: "Streamline Your Business Operations",
    subtitleAr: "بسّط عمليات أعمالك",
    description: "Automate repetitive tasks and connect your entire tech stack with powerful integrations using n8n, Make, and custom solutions.",
    descriptionAr: "أتمتة المهام المتكررة وربط جميع أنظمتك التقنية مع تكاملات قوية باستخدام n8n و Make والحلول المخصصة.",
    features: [
      {
        title: "n8n Workflows",
        titleAr: "سير عمل n8n",
        description: "Build complex automation workflows with our open-source friendly n8n expertise.",
        descriptionAr: "بناء سير عمل أتمتة معقد بخبرتنا في n8n مفتوح المصدر.",
        icon: "Workflow"
      },
      {
        title: "Make (Integromat)",
        titleAr: "Make (إنتيغرومات)",
        description: "Visual automation scenarios connecting 1000+ apps seamlessly.",
        descriptionAr: "سيناريوهات أتمتة مرئية تربط أكثر من 1000 تطبيق بسلاسة.",
        icon: "Puzzle"
      },
      {
        title: "Custom API Integrations",
        titleAr: "تكاملات API مخصصة",
        description: "Bespoke integrations tailored to your unique business requirements.",
        descriptionAr: "تكاملات مخصصة مصممة لمتطلبات عملك الفريدة.",
        icon: "Code"
      },
      {
        title: "Data Sync & ETL",
        titleAr: "مزامنة البيانات و ETL",
        description: "Keep your data consistent across all platforms with automated syncing.",
        descriptionAr: "حافظ على اتساق بياناتك عبر جميع المنصات مع المزامنة الآلية.",
        icon: "RefreshCw"
      }
    ],
    useCases: [
      {
        title: "E-commerce Order Processing",
        titleAr: "معالجة طلبات التجارة الإلكترونية",
        description: "Automatically sync orders, update inventory, and trigger fulfillment workflows.",
        descriptionAr: "مزامنة الطلبات تلقائياً وتحديث المخزون وتفعيل سير عمل التنفيذ."
      },
      {
        title: "Lead Management",
        titleAr: "إدارة العملاء المحتملين",
        description: "Route leads to the right team, enrich data, and automate follow-ups.",
        descriptionAr: "توجيه العملاء المحتملين للفريق المناسب وإثراء البيانات وأتمتة المتابعات."
      },
      {
        title: "Document Processing",
        titleAr: "معالجة المستندات",
        description: "Extract data from documents, generate reports, and automate approvals.",
        descriptionAr: "استخراج البيانات من المستندات وإنشاء التقارير وأتمتة الموافقات."
      }
    ],
    faqs: [
      {
        question: "What platforms can you integrate?",
        questionAr: "ما المنصات التي يمكنكم دمجها؟",
        answer: "We can integrate virtually any platform with an API, including CRMs, ERPs, e-commerce platforms, marketing tools, and custom applications.",
        answerAr: "يمكننا دمج أي منصة تقريباً لديها API، بما في ذلك أنظمة CRM و ERP ومنصات التجارة الإلكترونية وأدوات التسويق والتطبيقات المخصصة."
      },
      {
        question: "How long does implementation take?",
        questionAr: "كم يستغرق التنفيذ؟",
        answer: "Simple workflows can be deployed in 1-2 weeks. Complex enterprise integrations typically take 4-8 weeks.",
        answerAr: "يمكن نشر سير العمل البسيط في 1-2 أسبوع. التكاملات المؤسسية المعقدة تستغرق عادة 4-8 أسابيع."
      }
    ],
    ctaText: "Automate Your Workflows",
    ctaTextAr: "أتمت سير عملك"
  },
  {
    slug: "ai-chatbots",
    title: "AI Chatbots & Agents",
    titleAr: "روبوتات الدردشة والوكلاء الذكية",
    subtitle: "24/7 Intelligent Customer Engagement",
    subtitleAr: "تفاعل ذكي مع العملاء على مدار الساعة",
    description: "Deploy conversational AI agents that understand context, handle complex queries, and deliver human-like customer experiences.",
    descriptionAr: "انشر وكلاء ذكاء اصطناعي محادثين يفهمون السياق ويتعاملون مع الاستفسارات المعقدة ويقدمون تجارب عملاء شبيهة بالبشر.",
    features: [
      {
        title: "Natural Language Understanding",
        titleAr: "فهم اللغة الطبيعية",
        description: "AI that truly understands intent, context, and nuance in conversations.",
        descriptionAr: "ذكاء اصطناعي يفهم النية والسياق والفروق الدقيقة في المحادثات.",
        icon: "MessageSquare"
      },
      {
        title: "Multi-Channel Deployment",
        titleAr: "النشر متعدد القنوات",
        description: "Deploy across WhatsApp, website, social media, and more.",
        descriptionAr: "النشر عبر واتساب والموقع الإلكتروني ووسائل التواصل الاجتماعي والمزيد.",
        icon: "Share2"
      },
      {
        title: "Knowledge Base Integration",
        titleAr: "تكامل قاعدة المعرفة",
        description: "Connect your docs, FAQs, and data sources for accurate responses.",
        descriptionAr: "ربط مستنداتك والأسئلة الشائعة ومصادر البيانات للحصول على ردود دقيقة.",
        icon: "BookOpen"
      },
      {
        title: "Human Handoff",
        titleAr: "التحويل للبشر",
        description: "Seamless escalation to human agents when needed.",
        descriptionAr: "تصعيد سلس للوكلاء البشريين عند الحاجة.",
        icon: "Users"
      }
    ],
    useCases: [
      {
        title: "Customer Support",
        titleAr: "دعم العملاء",
        description: "Handle common inquiries, troubleshoot issues, and provide instant answers.",
        descriptionAr: "التعامل مع الاستفسارات الشائعة واستكشاف المشكلات وتقديم إجابات فورية."
      },
      {
        title: "Sales Assistant",
        titleAr: "مساعد المبيعات",
        description: "Qualify leads, answer product questions, and book meetings automatically.",
        descriptionAr: "تأهيل العملاء المحتملين والإجابة على أسئلة المنتج وحجز الاجتماعات تلقائياً."
      },
      {
        title: "Internal Helpdesk",
        titleAr: "مكتب المساعدة الداخلي",
        description: "Help employees find information and complete HR/IT requests faster.",
        descriptionAr: "مساعدة الموظفين في العثور على المعلومات وإكمال طلبات الموارد البشرية/تقنية المعلومات بشكل أسرع."
      }
    ],
    faqs: [
      {
        question: "Can the chatbot handle Arabic?",
        questionAr: "هل يمكن للروبوت التعامل مع اللغة العربية؟",
        answer: "Yes! Our AI chatbots are fully bilingual and can seamlessly switch between Arabic and English based on user preference.",
        answerAr: "نعم! روبوتات الدردشة لدينا ثنائية اللغة بالكامل ويمكنها التبديل بسلاسة بين العربية والإنجليزية حسب تفضيل المستخدم."
      },
      {
        question: "What happens when the AI can't answer?",
        questionAr: "ماذا يحدث عندما لا يستطيع الذكاء الاصطناعي الإجابة؟",
        answer: "The system automatically escalates to a human agent with full conversation context, ensuring no customer is left without help.",
        answerAr: "يقوم النظام تلقائياً بالتصعيد لوكيل بشري مع سياق المحادثة الكامل، مما يضمن عدم ترك أي عميل بدون مساعدة."
      }
    ],
    ctaText: "Deploy Your AI Agent",
    ctaTextAr: "انشر وكيلك الذكي"
  },
  {
    slug: "crm-automation",
    title: "CRM Automation",
    titleAr: "أتمتة إدارة العملاء",
    subtitle: "Supercharge Your Sales Pipeline",
    subtitleAr: "عزز خط مبيعاتك",
    description: "Transform your CRM into a powerful automation engine with GoHighLevel and custom integrations that close deals faster.",
    descriptionAr: "حوّل نظام إدارة العملاء الخاص بك إلى محرك أتمتة قوي مع GoHighLevel والتكاملات المخصصة التي تغلق الصفقات بشكل أسرع.",
    features: [
      {
        title: "GoHighLevel Expertise",
        titleAr: "خبرة GoHighLevel",
        description: "Full implementation and optimization of GHL for your business.",
        descriptionAr: "تنفيذ كامل وتحسين GHL لعملك.",
        icon: "Target"
      },
      {
        title: "Pipeline Automation",
        titleAr: "أتمتة خط الأنابيب",
        description: "Automatic lead scoring, assignment, and stage progression.",
        descriptionAr: "تسجيل العملاء المحتملين تلقائياً والتعيين والتقدم في المراحل.",
        icon: "TrendingUp"
      },
      {
        title: "Email & SMS Sequences",
        titleAr: "تسلسلات البريد والرسائل",
        description: "Personalized nurture campaigns that run on autopilot.",
        descriptionAr: "حملات رعاية مخصصة تعمل على الطيار الآلي.",
        icon: "Mail"
      },
      {
        title: "Appointment Booking",
        titleAr: "حجز المواعيد",
        description: "Automated scheduling with reminders and follow-ups.",
        descriptionAr: "جدولة آلية مع تذكيرات ومتابعات.",
        icon: "Calendar"
      }
    ],
    useCases: [
      {
        title: "Real Estate Agencies",
        titleAr: "الوكالات العقارية",
        description: "Nurture property leads and automate showing scheduling.",
        descriptionAr: "رعاية العملاء المحتملين للعقارات وأتمتة جدولة العروض."
      },
      {
        title: "Service Businesses",
        titleAr: "شركات الخدمات",
        description: "Streamline quotes, bookings, and customer follow-ups.",
        descriptionAr: "تبسيط عروض الأسعار والحجوزات ومتابعات العملاء."
      },
      {
        title: "B2B Sales Teams",
        titleAr: "فرق مبيعات B2B",
        description: "Accelerate deal cycles with automated touchpoints.",
        descriptionAr: "تسريع دورات الصفقات مع نقاط اتصال آلية."
      }
    ],
    faqs: [
      {
        question: "Do we need to switch CRMs?",
        questionAr: "هل نحتاج لتغيير نظام إدارة العملاء؟",
        answer: "Not necessarily. We can enhance your existing CRM with automations, or help you migrate to GoHighLevel for maximum automation capabilities.",
        answerAr: "ليس بالضرورة. يمكننا تعزيز نظام إدارة العملاء الحالي بالأتمتة، أو مساعدتك في الانتقال إلى GoHighLevel لأقصى قدرات الأتمتة."
      },
      {
        question: "Can you integrate with our existing tools?",
        questionAr: "هل يمكنكم الدمج مع أدواتنا الحالية؟",
        answer: "Absolutely. We specialize in connecting CRMs with your website, ads, email marketing, and other business tools.",
        answerAr: "بالتأكيد. نحن متخصصون في ربط أنظمة إدارة العملاء بموقعك والإعلانات والتسويق عبر البريد الإلكتروني وأدوات العمل الأخرى."
      }
    ],
    ctaText: "Optimize Your CRM",
    ctaTextAr: "حسّن إدارة عملائك"
  },
  {
    slug: "data-analytics",
    title: "Data Analytics & Insights",
    titleAr: "تحليلات البيانات والرؤى",
    subtitle: "Turn Data Into Decisions",
    subtitleAr: "حوّل البيانات إلى قرارات",
    description: "Unlock actionable insights from your business data with AI-powered analytics dashboards and automated reporting.",
    descriptionAr: "اكتشف رؤى قابلة للتنفيذ من بيانات عملك مع لوحات تحليلات مدعومة بالذكاء الاصطناعي وتقارير آلية.",
    features: [
      {
        title: "Custom Dashboards",
        titleAr: "لوحات مخصصة",
        description: "Real-time dashboards tailored to your KPIs and metrics.",
        descriptionAr: "لوحات بيانات في الوقت الفعلي مصممة لمؤشرات الأداء والمقاييس الخاصة بك.",
        icon: "LayoutDashboard"
      },
      {
        title: "Automated Reporting",
        titleAr: "التقارير الآلية",
        description: "Scheduled reports delivered to stakeholders automatically.",
        descriptionAr: "تقارير مجدولة يتم تسليمها لأصحاب المصلحة تلقائياً.",
        icon: "FileText"
      },
      {
        title: "Predictive Analytics",
        titleAr: "التحليلات التنبؤية",
        description: "AI models that forecast trends and identify opportunities.",
        descriptionAr: "نماذج ذكاء اصطناعي تتنبأ بالاتجاهات وتحدد الفرص.",
        icon: "LineChart"
      },
      {
        title: "Data Integration",
        titleAr: "تكامل البيانات",
        description: "Consolidate data from multiple sources into one view.",
        descriptionAr: "توحيد البيانات من مصادر متعددة في عرض واحد.",
        icon: "Database"
      }
    ],
    useCases: [
      {
        title: "Executive Dashboards",
        titleAr: "لوحات المديرين التنفيذيين",
        description: "Give leadership real-time visibility into business performance.",
        descriptionAr: "امنح القيادة رؤية في الوقت الفعلي لأداء الأعمال."
      },
      {
        title: "Marketing Analytics",
        titleAr: "تحليلات التسويق",
        description: "Track campaign performance and ROI across all channels.",
        descriptionAr: "تتبع أداء الحملات والعائد على الاستثمار عبر جميع القنوات."
      },
      {
        title: "Operations Monitoring",
        titleAr: "مراقبة العمليات",
        description: "Monitor operational metrics and get alerts on anomalies.",
        descriptionAr: "مراقبة المقاييس التشغيلية والحصول على تنبيهات بشأن الشذوذ."
      }
    ],
    faqs: [
      {
        question: "What data sources can you connect?",
        questionAr: "ما مصادر البيانات التي يمكنكم ربطها؟",
        answer: "We can connect to databases, APIs, spreadsheets, CRMs, marketing platforms, and virtually any data source with export capabilities.",
        answerAr: "يمكننا الاتصال بقواعد البيانات وواجهات API وجداول البيانات وأنظمة إدارة العملاء ومنصات التسويق وأي مصدر بيانات تقريباً مع قدرات التصدير."
      },
      {
        question: "Do you provide ongoing support?",
        questionAr: "هل تقدمون دعماً مستمراً؟",
        answer: "Yes, we offer maintenance packages that include dashboard updates, new report creation, and data source additions.",
        answerAr: "نعم، نقدم حزم صيانة تشمل تحديثات اللوحات وإنشاء تقارير جديدة وإضافة مصادر بيانات."
      }
    ],
    ctaText: "Unlock Your Data",
    ctaTextAr: "اكتشف إمكانات بياناتك"
  },
  {
    slug: "ai-seo",
    title: "AI Automated SEO",
    titleAr: "تحسين محركات البحث الآلي بالذكاء الاصطناعي",
    subtitle: "Dominate Search Rankings with AI",
    subtitleAr: "تصدّر نتائج البحث بالذكاء الاصطناعي",
    description: "Let AI handle 99% of your SEO work—from technical fixes to content creation and link building—all automated.",
    descriptionAr: "دع الذكاء الاصطناعي يتولى 99% من عمل تحسين محركات البحث—من الإصلاحات التقنية إلى إنشاء المحتوى وبناء الروابط—كل شيء آلي.",
    features: [
      {
        title: "Technical SEO Automation",
        titleAr: "أتمتة SEO التقنية",
        description: "Auto-fix meta tags, schema markup, broken links, and Core Web Vitals.",
        descriptionAr: "إصلاح تلقائي للوسوم الوصفية وترميز السكيما والروابط المعطلة ومؤشرات الويب الأساسية.",
        icon: "Settings"
      },
      {
        title: "AI Content Generation",
        titleAr: "إنشاء المحتوى بالذكاء الاصطناعي",
        description: "Generate SEO-optimized articles, landing pages, and blog posts at scale.",
        descriptionAr: "إنشاء مقالات وصفحات هبوط ومنشورات مدونة محسّنة لمحركات البحث على نطاق واسع.",
        icon: "FileEdit"
      },
      {
        title: "Automated Link Building",
        titleAr: "بناء الروابط الآلي",
        description: "AI-powered outreach and digital PR for high-quality backlinks.",
        descriptionAr: "تواصل مدعوم بالذكاء الاصطناعي وعلاقات عامة رقمية للحصول على روابط خلفية عالية الجودة.",
        icon: "Link"
      },
      {
        title: "Rank Tracking & Reporting",
        titleAr: "تتبع الترتيب والتقارير",
        description: "Monitor rankings across keywords with automated weekly reports.",
        descriptionAr: "مراقبة الترتيب عبر الكلمات المفتاحية مع تقارير أسبوعية آلية.",
        icon: "BarChart3"
      }
    ],
    useCases: [
      {
        title: "E-commerce Stores",
        titleAr: "متاجر التجارة الإلكترونية",
        description: "Optimize thousands of product pages and category descriptions automatically.",
        descriptionAr: "تحسين آلاف صفحات المنتجات وأوصاف الفئات تلقائياً."
      },
      {
        title: "Content Publishers",
        titleAr: "ناشري المحتوى",
        description: "Scale content production while maintaining SEO quality standards.",
        descriptionAr: "توسيع إنتاج المحتوى مع الحفاظ على معايير جودة SEO."
      },
      {
        title: "Agency Clients",
        titleAr: "عملاء الوكالات",
        description: "Deliver comprehensive SEO services efficiently across multiple clients.",
        descriptionAr: "تقديم خدمات SEO شاملة بكفاءة عبر عملاء متعددين."
      }
    ],
    faqs: [
      {
        question: "How is AI SEO different from traditional SEO?",
        questionAr: "كيف يختلف SEO بالذكاء الاصطناعي عن SEO التقليدي؟",
        answer: "AI SEO automates manual tasks like content writing, technical audits, and link outreach that would normally take hours. What used to take weeks now happens in days.",
        answerAr: "يؤتمت SEO بالذكاء الاصطناعي المهام اليدوية مثل كتابة المحتوى والتدقيق التقني والتواصل للروابط التي تستغرق عادة ساعات. ما كان يستغرق أسابيع يحدث الآن في أيام."
      },
      {
        question: "Will AI-generated content get penalized?",
        questionAr: "هل سيتم معاقبة المحتوى المولّد بالذكاء الاصطناعي؟",
        answer: "Our AI content is designed to meet Google's quality guidelines. It's optimized for helpfulness and uniqueness, not just keyword stuffing.",
        answerAr: "تم تصميم محتوى الذكاء الاصطناعي لدينا لتلبية إرشادات جودة جوجل. تم تحسينه للمفيدة والتفرد، وليس فقط حشو الكلمات المفتاحية."
      }
    ],
    ctaText: "Automate Your SEO",
    ctaTextAr: "أتمت تحسين محركات بحثك"
  },
  {
    slug: "ai-google-ads",
    title: "AI Automated Google Ads",
    titleAr: "إعلانات جوجل الآلية بالذكاء الاصطناعي",
    subtitle: "Maximize ROI with AI-Powered Campaigns",
    subtitleAr: "زيادة العائد على الاستثمار مع حملات مدعومة بالذكاء الاصطناعي",
    description: "Let AI create, optimize, and scale your Google Ads campaigns for maximum conversions at the lowest cost.",
    descriptionAr: "دع الذكاء الاصطناعي ينشئ ويحسّن ويوسّع حملات إعلانات جوجل الخاصة بك لتحقيق أقصى تحويلات بأقل تكلفة.",
    features: [
      {
        title: "AI Campaign Creation",
        titleAr: "إنشاء الحملات بالذكاء الاصطناعي",
        description: "Generate complete campaign structures with optimized ad copy and keywords.",
        descriptionAr: "إنشاء هياكل حملات كاملة مع نصوص إعلانية وكلمات مفتاحية محسّنة.",
        icon: "Rocket"
      },
      {
        title: "Smart Bidding Optimization",
        titleAr: "تحسين المزايدة الذكية",
        description: "AI continuously adjusts bids to maximize conversions within budget.",
        descriptionAr: "يقوم الذكاء الاصطناعي بتعديل المزايدات باستمرار لزيادة التحويلات ضمن الميزانية.",
        icon: "Coins"
      },
      {
        title: "Ad Copy Testing",
        titleAr: "اختبار نصوص الإعلانات",
        description: "Automated A/B testing of headlines, descriptions, and extensions.",
        descriptionAr: "اختبار A/B آلي للعناوين والأوصاف والإضافات.",
        icon: "Split"
      },
      {
        title: "Performance Reporting",
        titleAr: "تقارير الأداء",
        description: "Real-time dashboards with actionable insights and recommendations.",
        descriptionAr: "لوحات بيانات في الوقت الفعلي مع رؤى وتوصيات قابلة للتنفيذ.",
        icon: "PieChart"
      }
    ],
    useCases: [
      {
        title: "Lead Generation",
        titleAr: "توليد العملاء المحتملين",
        description: "Drive qualified leads with optimized search and display campaigns.",
        descriptionAr: "جذب عملاء محتملين مؤهلين مع حملات بحث وعرض محسّنة."
      },
      {
        title: "E-commerce Sales",
        titleAr: "مبيعات التجارة الإلكترونية",
        description: "Maximize ROAS with AI-optimized shopping and performance max campaigns.",
        descriptionAr: "زيادة العائد على الإنفاق الإعلاني مع حملات تسوق وأداء أقصى محسّنة بالذكاء الاصطناعي."
      },
      {
        title: "Brand Awareness",
        titleAr: "الوعي بالعلامة التجارية",
        description: "Expand reach efficiently with AI-targeted display and video campaigns.",
        descriptionAr: "توسيع الوصول بكفاءة مع حملات عرض وفيديو مستهدفة بالذكاء الاصطناعي."
      }
    ],
    faqs: [
      {
        question: "How much ad spend do you recommend?",
        questionAr: "ما مقدار الإنفاق الإعلاني الذي توصون به؟",
        answer: "We recommend starting with at least $1,000/month to gather enough data for AI optimization. Results improve significantly at $5,000+/month.",
        answerAr: "نوصي بالبدء بـ 1,000 دولار على الأقل شهرياً لجمع بيانات كافية لتحسين الذكاء الاصطناعي. تتحسن النتائج بشكل ملحوظ عند 5,000 دولار أو أكثر شهرياً."
      },
      {
        question: "Do you manage our Google Ads account?",
        questionAr: "هل تديرون حساب إعلانات جوجل الخاص بنا؟",
        answer: "Yes, we provide full management including setup, optimization, and reporting. You retain full ownership of your account.",
        answerAr: "نعم، نقدم إدارة كاملة بما في ذلك الإعداد والتحسين والتقارير. تحتفظ بالملكية الكاملة لحسابك."
      }
    ],
    ctaText: "Launch AI Campaigns",
    ctaTextAr: "أطلق حملات الذكاء الاصطناعي"
  },
  {
    slug: "ai-local-seo",
    title: "AI Automated Local SEO",
    titleAr: "تحسين البحث المحلي الآلي بالذكاء الاصطناعي",
    subtitle: "Dominate Local Search Results",
    subtitleAr: "تصدّر نتائج البحث المحلي",
    description: "Automate your Google Business Profile optimization, local citations, and review management to attract more local customers.",
    descriptionAr: "أتمتة تحسين ملفك التجاري على جوجل والاستشهادات المحلية وإدارة المراجعات لجذب المزيد من العملاء المحليين.",
    features: [
      {
        title: "Google Business Optimization",
        titleAr: "تحسين ملف جوجل التجاري",
        description: "AI-powered optimization of your GBP with posts, photos, and updates.",
        descriptionAr: "تحسين مدعوم بالذكاء الاصطناعي لملفك التجاري على جوجل مع منشورات وصور وتحديثات.",
        icon: "MapPin"
      },
      {
        title: "Citation Building",
        titleAr: "بناء الاستشهادات",
        description: "Automated submission to 100+ local directories and data aggregators.",
        descriptionAr: "إرسال آلي لأكثر من 100 دليل محلي ومجمّع بيانات.",
        icon: "Building"
      },
      {
        title: "Review Management",
        titleAr: "إدارة المراجعات",
        description: "Monitor and respond to reviews with AI-assisted replies.",
        descriptionAr: "مراقبة والرد على المراجعات مع ردود بمساعدة الذكاء الاصطناعي.",
        icon: "Star"
      },
      {
        title: "Local Rank Tracking",
        titleAr: "تتبع الترتيب المحلي",
        description: "Geographic heatmaps showing your rankings across locations.",
        descriptionAr: "خرائط حرارية جغرافية تظهر ترتيبك عبر المواقع.",
        icon: "Map"
      }
    ],
    useCases: [
      {
        title: "Multi-Location Businesses",
        titleAr: "الأعمال متعددة المواقع",
        description: "Manage SEO for dozens or hundreds of locations from one dashboard.",
        descriptionAr: "إدارة SEO لعشرات أو مئات المواقع من لوحة واحدة."
      },
      {
        title: "Service Area Businesses",
        titleAr: "أعمال منطقة الخدمة",
        description: "Rank in multiple cities and neighborhoods you serve.",
        descriptionAr: "الترتيب في مدن وأحياء متعددة تخدمها."
      },
      {
        title: "Franchises",
        titleAr: "الامتيازات التجارية",
        description: "Ensure brand consistency while optimizing each franchise location.",
        descriptionAr: "ضمان اتساق العلامة التجارية أثناء تحسين كل موقع امتياز."
      }
    ],
    faqs: [
      {
        question: "How long until we see local ranking improvements?",
        questionAr: "كم من الوقت حتى نرى تحسينات في الترتيب المحلي؟",
        answer: "Most clients see noticeable improvements within 30-60 days. Significant ranking jumps typically occur within 3-6 months.",
        answerAr: "يرى معظم العملاء تحسينات ملحوظة خلال 30-60 يوماً. عادة ما تحدث قفزات الترتيب الكبيرة خلال 3-6 أشهر."
      },
      {
        question: "Can you help with negative reviews?",
        questionAr: "هل يمكنكم المساعدة في المراجعات السلبية؟",
        answer: "Yes, we help craft professional responses to negative reviews and implement strategies to generate more positive reviews.",
        answerAr: "نعم، نساعد في صياغة ردود احترافية على المراجعات السلبية وتنفيذ استراتيجيات لتوليد المزيد من المراجعات الإيجابية."
      }
    ],
    ctaText: "Dominate Local Search",
    ctaTextAr: "تصدّر البحث المحلي"
  }
];

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return servicesData.find(service => service.slug === slug);
}
