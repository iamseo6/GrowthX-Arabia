import { useEffect } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight, ArrowLeft } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { blogPosts } from "@/lib/blog-data";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { NewsletterPopup } from "@/components/NewsletterPopup";
import blogAiMiddleEast from "@/assets/images/blog-ai-middle-east.png";
import blogWorkflowAutomation from "@/assets/images/blog-workflow-automation.png";
import blogAiSeoArabic from "@/assets/images/blog-ai-seo-arabic.png";

const imageMap: Record<string, string> = {
  "blog-ai-middle-east": blogAiMiddleEast,
  "blog-workflow-automation": blogWorkflowAutomation,
  "blog-ai-seo-arabic": blogAiSeoArabic,
};

export default function Blog() {
  const { language, t } = useLanguage();
  const isRTL = language === "ar";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const translations = {
    title: language === "ar" ? "المدونة" : "Blog",
    subtitle: language === "ar" 
      ? "رؤى وأخبار حول الذكاء الاصطناعي والأتمتة في الشرق الأوسط"
      : "Insights and news about AI and automation in the Middle East",
    readMore: language === "ar" ? "اقرأ المزيد" : "Read More",
  };

  return (
    <div className={`min-h-screen bg-[#0a0a0f] ${isRTL ? "rtl" : "ltr"}`} dir={isRTL ? "rtl" : "ltr"}>
      <Navbar />
      
      <main className="pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {translations.title}
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              {translations.subtitle}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
                data-testid={`blog-card-${post.slug}`}
              >
                <Link href={`/blog/${post.slug}`}>
                  <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 hover:border-primary/50 transition-all duration-300 h-full flex flex-col">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={imageMap[post.image]}
                        alt={isRTL ? post.titleAr : post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] to-transparent opacity-60" />
                      <span className="absolute top-4 left-4 px-3 py-1 bg-primary/20 backdrop-blur-sm text-primary text-sm rounded-full border border-primary/30">
                        {isRTL ? post.categoryAr : post.category}
                      </span>
                    </div>
                    
                    <div className="p-6 flex flex-col flex-grow">
                      <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {new Date(post.date).toLocaleDateString(isRTL ? "ar-SA" : "en-US", {
                            year: "numeric",
                            month: "short",
                            day: "numeric",
                          })}
                        </span>
                        <span className="flex items-center gap-1.5 relative group/time">
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                          >
                            <Clock className="w-4 h-4 text-primary" />
                          </motion.div>
                          <span className="relative">
                            {isRTL ? post.readTimeAr : post.readTime}
                            <motion.span 
                              className="absolute -bottom-0.5 left-0 h-0.5 bg-primary/40 rounded-full"
                              initial={{ width: 0 }}
                              whileInView={{ width: "100%" }}
                              transition={{ duration: 1.5, ease: "easeOut" }}
                            />
                          </span>
                        </span>
                      </div>
                      
                      <h2 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors line-clamp-2">
                        {isRTL ? post.titleAr : post.title}
                      </h2>
                      
                      <p className="text-gray-400 mb-4 flex-grow line-clamp-3">
                        {isRTL ? post.excerptAr : post.excerpt}
                      </p>
                      
                      <div className="flex items-center text-primary font-medium group-hover:gap-2 transition-all">
                        {translations.readMore}
                        {isRTL ? (
                          <ArrowLeft className="w-4 h-4 mr-1 group-hover:mr-2 transition-all" />
                        ) : (
                          <ArrowRight className="w-4 h-4 ml-1 group-hover:ml-2 transition-all" />
                        )}
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </main>

      <NewsletterPopup />
      <Footer />
    </div>
  );
}
