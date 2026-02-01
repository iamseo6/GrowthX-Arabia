import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { useLanguage } from "@/lib/language-context";

const testimonials = [
  {
    name: "Ahmed Al-Rashid",
    nameAr: "أحمد الراشد",
    role: "CEO, TechVentures Dubai",
    roleAr: "الرئيس التنفيذي، تك فينتشرز دبي",
    quote: "GrowthX Arabia transformed our lead generation process. We went from manually qualifying leads to having an AI system that does it in seconds. Our sales team's productivity has increased by 300%.",
    quoteAr: "حولت GrowthX Arabia عملية توليد العملاء المحتملين لدينا. انتقلنا من تأهيل العملاء يدويًا إلى نظام ذكاء اصطناعي يقوم بذلك في ثوانٍ. زادت إنتاجية فريق المبيعات لدينا بنسبة 300%.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    name: "Fatima Hassan",
    nameAr: "فاطمة حسن",
    role: "Operations Director, PropTech MENA",
    roleAr: "مديرة العمليات، بروبتك الشرق الأوسط",
    quote: "The CRM automation they built for us eliminated 95% of our manual data entry. Our team now focuses on what matters - closing deals and building relationships.",
    quoteAr: "أتمتة CRM التي بنوها لنا قضت على 95% من إدخال البيانات اليدوي. يركز فريقنا الآن على ما يهم - إتمام الصفقات وبناء العلاقات.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    name: "Khalid Al-Mansour",
    nameAr: "خالد المنصور",
    role: "Founder, Digital Growth Agency",
    roleAr: "المؤسس، وكالة النمو الرقمي",
    quote: "Working with GrowthX Arabia was a game-changer. Their GoHighLevel expertise helped us automate client onboarding completely. We've cut onboarding time by 80% and our client satisfaction scores are at an all-time high.",
    quoteAr: "العمل مع GrowthX Arabia كان نقطة تحول. خبرتهم في GoHighLevel ساعدتنا على أتمتة تأهيل العملاء بالكامل. قللنا وقت التأهيل بنسبة 80% ودرجات رضا العملاء في أعلى مستوياتها.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/52.jpg"
  },
  {
    name: "Sara Al-Qasimi",
    nameAr: "سارة القاسمي",
    role: "Marketing Head, LuxeCart Arabia",
    roleAr: "رئيسة التسويق، لوكس كارت العربية",
    quote: "The e-commerce automation they implemented reduced our shipping errors by 92%. Our customers now receive real-time tracking updates, and our NPS jumped by 35 points.",
    quoteAr: "الأتمتة التجارية التي نفذوها قللت أخطاء الشحن لدينا بنسبة 92%. يتلقى عملاؤنا الآن تحديثات تتبع في الوقت الفعلي، وارتفع NPS لدينا بـ 35 نقطة.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/68.jpg"
  },
  {
    name: "Dr. Mohammed Al-Farsi",
    nameAr: "د. محمد الفارسي",
    role: "Director, Elite Medical Center",
    roleAr: "المدير، المركز الطبي النخبة",
    quote: "Patient no-shows were costing us significantly. GrowthX Arabia's smart appointment system reduced no-shows by 70% and tripled our 5-star reviews through automated follow-ups.",
    quoteAr: "كان عدم حضور المرضى يكلفنا بشكل كبير. نظام المواعيد الذكي من GrowthX Arabia قلل عدم الحضور بنسبة 70% وضاعف تقييماتنا ثلاث مرات من خلال المتابعة الآلية.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/76.jpg"
  },
  {
    name: "Layla Ibrahim",
    nameAr: "ليلى إبراهيم",
    role: "CEO, Influencer Hub KSA",
    roleAr: "الرئيسة التنفيذية، هاب المؤثرين السعودية",
    quote: "Their social media automation is incredible. We're now producing 5x more content with the same team, and our engagement rates have doubled. Best investment we've made.",
    quoteAr: "أتمتة وسائل التواصل الاجتماعي لديهم مذهلة. ننتج الآن 5 أضعاف المحتوى بنفس الفريق، ومعدلات التفاعل تضاعفت. أفضل استثمار قمنا به.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/89.jpg"
  }
];

export function Testimonials() {
  const { language } = useLanguage();

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
            {language === "ar" ? (
              <>ماذا يقول <span className="text-primary">عملاؤنا</span></>
            ) : (
              <>What Our <span className="text-primary">Clients Say</span></>
            )}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {language === "ar" 
              ? "اكتشف كيف ساعدنا الشركات في جميع أنحاء الشرق الأوسط على تحويل عملياتها باستخدام الذكاء الاصطناعي والأتمتة."
              : "Discover how we've helped businesses across the Middle East transform their operations with AI and automation."
            }
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card border border-white/10 rounded-2xl p-6 hover:border-primary/30 transition-all duration-300"
              data-testid={`testimonial-card-${index}`}
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              
              <Quote className="h-8 w-8 text-primary/30 mb-4" />
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                "{language === "ar" ? testimonial.quoteAr : testimonial.quote}"
              </p>
              
              <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                <img
                  src={testimonial.image}
                  alt={language === "ar" ? testimonial.nameAr : testimonial.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-primary/30"
                />
                <div>
                  <p className="font-semibold text-white">
                    {language === "ar" ? testimonial.nameAr : testimonial.name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {language === "ar" ? testimonial.roleAr : testimonial.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
