import { useState } from "react";
import { useLanguage } from "@/lib/language-context";
import { useMutation } from "@tanstack/react-query";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { Link } from "wouter";
import { 
  CheckCircle2, 
  ArrowRight, 
  ArrowLeft, 
  Sparkles, 
  Shield, 
  Clock, 
  Users,
  Building2,
  Zap,
  BarChart3,
  Bot,
  Search,
  Target,
  MapPin,
  HelpCircle
} from "lucide-react";

const translations = {
  en: {
    title: "Get Started",
    subtitle: "Let's build your automation strategy",
    step1Title: "Select Your Service",
    step1Subtitle: "What automation solution are you looking for?",
    step2Title: "Company Details",
    step2Subtitle: "Tell us about your business",
    step3Title: "Project Requirements",
    step3Subtitle: "Help us understand your needs",
    step4Title: "Contact Information",
    step4Subtitle: "How can we reach you?",
    next: "Continue",
    back: "Back",
    submit: "Submit Request",
    submitting: "Submitting...",
    successTitle: "Request Submitted!",
    successMessage: "Our team will review your requirements and contact you within 24 hours.",
    backToHome: "Back to Home",
    services: [
      { id: "workflow-automation", name: "Workflow Automation", desc: "n8n, Make integrations", icon: "Zap" },
      { id: "ai-chatbots", name: "AI Chatbots & Agents", desc: "Conversational AI", icon: "Bot" },
      { id: "crm-automation", name: "CRM Automation", desc: "GoHighLevel integration", icon: "Users" },
      { id: "data-analytics", name: "Data Analytics", desc: "Business intelligence", icon: "BarChart3" },
      { id: "ai-seo", name: "AI Automated SEO", desc: "SEO automation", icon: "Search" },
      { id: "ai-google-ads", name: "AI Google Ads", desc: "PPC management", icon: "Target" },
      { id: "ai-local-seo", name: "AI Local SEO", desc: "GBP optimization", icon: "MapPin" },
      { id: "explore-options", name: "Explore Options / Custom Solution", desc: "Not sure? Let's discuss", icon: "HelpCircle" }
    ],
    industries: ["E-commerce", "Healthcare", "Real Estate", "Finance", "Retail", "Manufacturing", "Technology", "Other"],
    budgetRanges: ["$1,000 - $5,000", "$5,000 - $15,000", "$15,000 - $50,000", "$50,000+"],
    timelines: ["ASAP (Within 2 weeks)", "1-3 months", "3-6 months", "Just exploring"],
    companyName: "Company Name",
    website: "Website (optional)",
    industry: "Industry",
    selectIndustry: "Select your industry",
    budgetRange: "Budget Range",
    timeline: "Timeline",
    projectDescription: "Project Description (optional)",
    projectPlaceholder: "Describe what you're looking to automate...",
    firstName: "First Name",
    lastName: "Last Name",
    email: "Email Address",
    phone: "Phone Number (optional)",
    preferWhatsApp: "I prefer WhatsApp for communication",
    trustBadges: ["Trusted by 50+ companies", "Average 10x ROI", "24-hour response time"],
    socialProof: "Join 50+ companies already automating with us"
  },
  ar: {
    title: "ابدأ الآن",
    subtitle: "دعنا نبني استراتيجية الأتمتة الخاصة بك",
    step1Title: "اختر خدمتك",
    step1Subtitle: "ما حل الأتمتة الذي تبحث عنه؟",
    step2Title: "تفاصيل الشركة",
    step2Subtitle: "أخبرنا عن عملك",
    step3Title: "متطلبات المشروع",
    step3Subtitle: "ساعدنا في فهم احتياجاتك",
    step4Title: "معلومات التواصل",
    step4Subtitle: "كيف يمكننا الوصول إليك؟",
    next: "متابعة",
    back: "رجوع",
    submit: "إرسال الطلب",
    submitting: "جاري الإرسال...",
    successTitle: "تم إرسال الطلب!",
    successMessage: "سيراجع فريقنا متطلباتك ويتواصل معك خلال 24 ساعة.",
    backToHome: "العودة للرئيسية",
    services: [
      { id: "workflow-automation", name: "أتمتة سير العمل", desc: "تكاملات n8n و Make", icon: "Zap" },
      { id: "ai-chatbots", name: "روبوتات الدردشة الذكية", desc: "الذكاء الاصطناعي المحادثي", icon: "Bot" },
      { id: "crm-automation", name: "أتمتة إدارة العملاء", desc: "تكامل GoHighLevel", icon: "Users" },
      { id: "data-analytics", name: "تحليلات البيانات", desc: "ذكاء الأعمال", icon: "BarChart3" },
      { id: "ai-seo", name: "SEO الآلي بالذكاء الاصطناعي", desc: "أتمتة SEO", icon: "Search" },
      { id: "ai-google-ads", name: "إعلانات جوجل الآلية", desc: "إدارة PPC", icon: "Target" },
      { id: "ai-local-seo", name: "SEO المحلي الآلي", desc: "تحسين GBP", icon: "MapPin" },
      { id: "explore-options", name: "استكشف الخيارات / حل مخصص", desc: "غير متأكد؟ دعنا نناقش", icon: "HelpCircle" }
    ],
    industries: ["التجارة الإلكترونية", "الرعاية الصحية", "العقارات", "المالية", "التجزئة", "التصنيع", "التكنولوجيا", "أخرى"],
    budgetRanges: ["1,000$ - 5,000$", "5,000$ - 15,000$", "15,000$ - 50,000$", "+50,000$"],
    timelines: ["فوراً (خلال أسبوعين)", "1-3 أشهر", "3-6 أشهر", "أستكشف فقط"],
    companyName: "اسم الشركة",
    website: "الموقع الإلكتروني (اختياري)",
    industry: "الصناعة",
    selectIndustry: "اختر صناعتك",
    budgetRange: "نطاق الميزانية",
    timeline: "الجدول الزمني",
    projectDescription: "وصف المشروع (اختياري)",
    projectPlaceholder: "صف ما تريد أتمتته...",
    firstName: "الاسم الأول",
    lastName: "اسم العائلة",
    email: "البريد الإلكتروني",
    phone: "رقم الهاتف (اختياري)",
    preferWhatsApp: "أفضل التواصل عبر واتساب",
    trustBadges: ["موثوق من 50+ شركة", "متوسط عائد 10 أضعاف", "استجابة خلال 24 ساعة"],
    socialProof: "انضم لأكثر من 50 شركة تستخدم الأتمتة معنا"
  }
};

const iconMap: Record<string, React.ComponentType<any>> = {
  Zap,
  Bot,
  Users,
  BarChart3,
  Search,
  Target,
  MapPin,
  HelpCircle
};

export default function GetStarted() {
  const { language, isRTL } = useLanguage();
  const { toast } = useToast();
  const t = translations[language];
  
  const [currentStep, setCurrentStep] = useState(1);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const [formData, setFormData] = useState({
    selectedService: "",
    companyName: "",
    website: "",
    industry: "",
    budgetRange: "",
    timeline: "",
    projectDescription: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    preferWhatsApp: "no"
  });

  const mutation = useMutation({
    mutationFn: async (data: typeof formData) => {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });
      if (!response.ok) {
        throw new Error("Failed to submit");
      }
      return response.json();
    },
    onSuccess: () => {
      setIsSuccess(true);
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to submit. Please try again.",
        variant: "destructive"
      });
    }
  });

  const updateFormData = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const canProceed = () => {
    switch (currentStep) {
      case 1: return formData.selectedService !== "";
      case 2: return formData.companyName !== "" && formData.industry !== "";
      case 3: return formData.budgetRange !== "" && formData.timeline !== "";
      case 4: return formData.firstName !== "" && formData.lastName !== "" && formData.email !== "";
      default: return false;
    }
  };

  const handleNext = () => {
    if (currentStep < 4) setCurrentStep(prev => prev + 1);
  };

  const handleBack = () => {
    if (currentStep > 1) setCurrentStep(prev => prev - 1);
  };

  const handleSubmit = () => {
    mutation.mutate(formData);
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4" dir={isRTL ? "rtl" : "ltr"}>
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center max-w-md"
        >
          <div className="w-20 h-20 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-10 h-10 text-emerald-400" />
          </div>
          <h1 className="text-3xl font-bold text-white mb-4">{t.successTitle}</h1>
          <p className="text-slate-300 mb-8">{t.successMessage}</p>
          <Link href="/">
            <Button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700" data-testid="button-success-back-home">
              {t.backToHome}
            </Button>
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900" dir={isRTL ? "rtl" : "ltr"}>
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Link href="/" className="inline-flex items-center text-slate-400 hover:text-white mb-8 transition-colors" data-testid="link-back-to-home">
          <ArrowLeft className={`w-4 h-4 ${isRTL ? "ml-2 rotate-180" : "mr-2"}`} />
          {t.backToHome}
        </Link>

        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">{t.title}</h1>
          <p className="text-slate-400">{t.subtitle}</p>
        </div>

        <div className="flex justify-center mb-8">
          <div className="flex items-center gap-2">
            {[1, 2, 3, 4].map((step) => (
              <div key={step} className="flex items-center">
                <div 
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-all ${
                    step < currentStep 
                      ? "bg-emerald-500 text-white" 
                      : step === currentStep 
                        ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white" 
                        : "bg-slate-700 text-slate-400"
                  }`}
                  data-testid={`step-indicator-${step}`}
                >
                  {step < currentStep ? <CheckCircle2 className="w-5 h-5" /> : step}
                </div>
                {step < 4 && (
                  <div className={`w-12 h-1 mx-1 ${step < currentStep ? "bg-emerald-500" : "bg-slate-700"}`} />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="flex gap-2 justify-center mb-8" data-testid="trust-badges">
          {t.trustBadges.map((badge, i) => (
            <div key={i} className="flex items-center gap-1 text-xs text-slate-400 bg-slate-800/50 px-3 py-1.5 rounded-full" data-testid={`trust-badge-${i}`}>
              {i === 0 && <Users className="w-3 h-3" />}
              {i === 1 && <Sparkles className="w-3 h-3" />}
              {i === 2 && <Clock className="w-3 h-3" />}
              {badge}
            </div>
          ))}
        </div>

        <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: isRTL ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: isRTL ? 20 : -20 }}
              transition={{ duration: 0.3 }}
            >
              {currentStep === 1 && (
                <div>
                  <h2 className="text-2xl font-bold text-white mb-2">{t.step1Title}</h2>
                  <p className="text-slate-400 mb-6">{t.step1Subtitle}</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {t.services.map((service) => {
                      const IconComponent = iconMap[service.icon];
                      return (
                        <button
                          key={service.id}
                          type="button"
                          data-testid={`service-${service.id}`}
                          onClick={() => updateFormData("selectedService", service.name)}
                          className={`p-4 rounded-xl border-2 text-left transition-all ${
                            formData.selectedService === service.name
                              ? "border-cyan-500 bg-cyan-500/10"
                              : "border-slate-700 hover:border-slate-600 bg-slate-800/50"
                          }`}
                        >
                          <div className="flex items-start gap-3">
                            <div className={`p-2 rounded-lg ${formData.selectedService === service.name ? "bg-cyan-500/20" : "bg-slate-700"}`}>
                              {IconComponent && <IconComponent className={`w-5 h-5 ${formData.selectedService === service.name ? "text-cyan-400" : "text-slate-400"}`} />}
                            </div>
                            <div>
                              <h3 className="font-semibold text-white">{service.name}</h3>
                              <p className="text-sm text-slate-400">{service.desc}</p>
                            </div>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {currentStep === 2 && (
                <div>
                  <h2 className="text-2xl font-bold text-white mb-2">{t.step2Title}</h2>
                  <p className="text-slate-400 mb-6">{t.step2Subtitle}</p>
                  <div className="space-y-4">
                    <div>
                      <Label className="text-white">{t.companyName} *</Label>
                      <Input
                        data-testid="input-company-name"
                        value={formData.companyName}
                        onChange={(e) => updateFormData("companyName", e.target.value)}
                        className="mt-1.5 bg-slate-900/50 border-slate-700 text-white"
                        placeholder={t.companyName}
                      />
                    </div>
                    <div>
                      <Label className="text-white">{t.website}</Label>
                      <Input
                        data-testid="input-website"
                        value={formData.website}
                        onChange={(e) => updateFormData("website", e.target.value)}
                        className="mt-1.5 bg-slate-900/50 border-slate-700 text-white"
                        placeholder="https://example.com"
                      />
                    </div>
                    <div>
                      <Label className="text-white">{t.industry} *</Label>
                      <RadioGroup
                        value={formData.industry}
                        onValueChange={(value) => updateFormData("industry", value)}
                        className="mt-2 grid grid-cols-2 md:grid-cols-4 gap-2"
                      >
                        {t.industries.map((industry) => (
                          <div key={industry} className="flex items-center">
                            <RadioGroupItem value={industry} id={industry} className="peer sr-only" />
                            <Label
                              htmlFor={industry}
                              data-testid={`industry-${industry}`}
                              className="flex-1 cursor-pointer rounded-lg border-2 border-slate-700 bg-slate-800/50 px-3 py-2 text-center text-sm text-slate-300 transition-all peer-data-[state=checked]:border-cyan-500 peer-data-[state=checked]:bg-cyan-500/10 peer-data-[state=checked]:text-white hover:border-slate-600"
                            >
                              {industry}
                            </Label>
                          </div>
                        ))}
                      </RadioGroup>
                    </div>
                  </div>
                </div>
              )}

              {currentStep === 3 && (
                <div>
                  <h2 className="text-2xl font-bold text-white mb-2">{t.step3Title}</h2>
                  <p className="text-slate-400 mb-6">{t.step3Subtitle}</p>
                  <div className="space-y-6">
                    <div>
                      <Label className="text-white">{t.budgetRange} *</Label>
                      <RadioGroup
                        value={formData.budgetRange}
                        onValueChange={(value) => updateFormData("budgetRange", value)}
                        className="mt-2 grid grid-cols-2 gap-2"
                      >
                        {t.budgetRanges.map((range) => (
                          <div key={range} className="flex items-center">
                            <RadioGroupItem value={range} id={`budget-${range}`} className="peer sr-only" />
                            <Label
                              htmlFor={`budget-${range}`}
                              data-testid={`budget-${range}`}
                              className="flex-1 cursor-pointer rounded-lg border-2 border-slate-700 bg-slate-800/50 px-4 py-3 text-center text-slate-300 transition-all peer-data-[state=checked]:border-cyan-500 peer-data-[state=checked]:bg-cyan-500/10 peer-data-[state=checked]:text-white hover:border-slate-600"
                            >
                              {range}
                            </Label>
                          </div>
                        ))}
                      </RadioGroup>
                    </div>
                    <div>
                      <Label className="text-white">{t.timeline} *</Label>
                      <RadioGroup
                        value={formData.timeline}
                        onValueChange={(value) => updateFormData("timeline", value)}
                        className="mt-2 grid grid-cols-2 gap-2"
                      >
                        {t.timelines.map((timeline) => (
                          <div key={timeline} className="flex items-center">
                            <RadioGroupItem value={timeline} id={`timeline-${timeline}`} className="peer sr-only" />
                            <Label
                              htmlFor={`timeline-${timeline}`}
                              data-testid={`timeline-${timeline}`}
                              className="flex-1 cursor-pointer rounded-lg border-2 border-slate-700 bg-slate-800/50 px-4 py-3 text-center text-slate-300 transition-all peer-data-[state=checked]:border-cyan-500 peer-data-[state=checked]:bg-cyan-500/10 peer-data-[state=checked]:text-white hover:border-slate-600"
                            >
                              {timeline}
                            </Label>
                          </div>
                        ))}
                      </RadioGroup>
                    </div>
                    <div>
                      <Label className="text-white">{t.projectDescription}</Label>
                      <Textarea
                        data-testid="input-project-description"
                        value={formData.projectDescription}
                        onChange={(e) => updateFormData("projectDescription", e.target.value)}
                        className="mt-1.5 bg-slate-900/50 border-slate-700 text-white min-h-[100px]"
                        placeholder={t.projectPlaceholder}
                      />
                    </div>
                  </div>
                </div>
              )}

              {currentStep === 4 && (
                <div>
                  <h2 className="text-2xl font-bold text-white mb-2">{t.step4Title}</h2>
                  <p className="text-slate-400 mb-6">{t.step4Subtitle}</p>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label className="text-white">{t.firstName} *</Label>
                        <Input
                          data-testid="input-first-name"
                          value={formData.firstName}
                          onChange={(e) => updateFormData("firstName", e.target.value)}
                          className="mt-1.5 bg-slate-900/50 border-slate-700 text-white"
                        />
                      </div>
                      <div>
                        <Label className="text-white">{t.lastName} *</Label>
                        <Input
                          data-testid="input-last-name"
                          value={formData.lastName}
                          onChange={(e) => updateFormData("lastName", e.target.value)}
                          className="mt-1.5 bg-slate-900/50 border-slate-700 text-white"
                        />
                      </div>
                    </div>
                    <div>
                      <Label className="text-white">{t.email} *</Label>
                      <Input
                        data-testid="input-email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => updateFormData("email", e.target.value)}
                        className="mt-1.5 bg-slate-900/50 border-slate-700 text-white"
                      />
                    </div>
                    <div>
                      <Label className="text-white">{t.phone}</Label>
                      <Input
                        data-testid="input-phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => updateFormData("phone", e.target.value)}
                        className="mt-1.5 bg-slate-900/50 border-slate-700 text-white"
                      />
                    </div>
                    <div className="flex items-center gap-2">
                      <Checkbox
                        id="whatsapp"
                        data-testid="checkbox-whatsapp"
                        checked={formData.preferWhatsApp === "yes"}
                        onCheckedChange={(checked) => updateFormData("preferWhatsApp", checked ? "yes" : "no")}
                      />
                      <Label htmlFor="whatsapp" className="text-slate-300 cursor-pointer">
                        {t.preferWhatsApp}
                      </Label>
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-slate-900/50 rounded-xl border border-slate-700">
                    <div className="flex items-center gap-2 text-emerald-400 mb-2">
                      <Shield className="w-4 h-4" />
                      <span className="text-sm font-medium">Your data is secure</span>
                    </div>
                    <p className="text-xs text-slate-400">
                      We respect your privacy. Your information will only be used to contact you about your project.
                    </p>
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          <div className={`flex justify-between mt-8 ${isRTL ? "flex-row-reverse" : ""}`}>
            <Button
              variant="outline"
              onClick={handleBack}
              disabled={currentStep === 1}
              className={`border-slate-700 text-slate-300 hover:bg-slate-700 ${currentStep === 1 ? "invisible" : ""}`}
              data-testid="button-back"
            >
              <ArrowLeft className={`w-4 h-4 ${isRTL ? "ml-2 rotate-180" : "mr-2"}`} />
              {t.back}
            </Button>

            {currentStep < 4 ? (
              <Button
                onClick={handleNext}
                disabled={!canProceed()}
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700"
                data-testid="button-next"
              >
                {t.next}
                <ArrowRight className={`w-4 h-4 ${isRTL ? "mr-2 rotate-180" : "ml-2"}`} />
              </Button>
            ) : (
              <Button
                onClick={handleSubmit}
                disabled={!canProceed() || mutation.isPending}
                className="bg-gradient-to-r from-emerald-500 to-cyan-600 hover:from-emerald-600 hover:to-cyan-700"
                data-testid="button-submit"
              >
                {mutation.isPending ? t.submitting : t.submit}
                {!mutation.isPending && <CheckCircle2 className={`w-4 h-4 ${isRTL ? "mr-2" : "ml-2"}`} />}
              </Button>
            )}
          </div>
        </div>

        <div className="text-center mt-8" data-testid="social-proof">
          <p className="text-slate-500 text-sm flex items-center justify-center gap-2">
            <Building2 className="w-4 h-4" />
            {t.socialProof}
          </p>
        </div>
      </div>
    </div>
  );
}
