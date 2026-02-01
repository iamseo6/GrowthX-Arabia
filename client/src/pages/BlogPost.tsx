import { useEffect } from "react";
import { Link, useParams, useLocation } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowLeft, ArrowRight, User, Sparkles } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { getBlogPostBySlug, blogPosts } from "@/lib/blog-data";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import blogAiMiddleEast from "@/assets/images/blog-ai-middle-east.png";
import blogWorkflowAutomation from "@/assets/images/blog-workflow-automation.png";
import blogAiSeoArabic from "@/assets/images/blog-ai-seo-arabic.png";

const imageMap: Record<string, string> = {
  "blog-ai-middle-east": blogAiMiddleEast,
  "blog-workflow-automation": blogWorkflowAutomation,
  "blog-ai-seo-arabic": blogAiSeoArabic,
};

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const [, setLocation] = useLocation();
  const { language } = useLanguage();
  const isRTL = language === "ar";

  const post = getBlogPostBySlug(slug || "");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) {
    return (
      <div className={`min-h-screen bg-[#0a0a0f] ${isRTL ? "rtl" : "ltr"}`} dir={isRTL ? "rtl" : "ltr"}>
        <Navbar />
        <div className="pt-32 pb-20 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">
            {isRTL ? "المقال غير موجود" : "Post Not Found"}
          </h1>
          <p className="text-gray-400 mb-8">
            {isRTL ? "لم نتمكن من العثور على المقال المطلوب" : "We couldn't find the post you're looking for."}
          </p>
          <Link href="/blog">
            <span className="inline-flex items-center gap-2 text-primary hover:underline">
              {isRTL ? <ArrowRight className="w-4 h-4" /> : <ArrowLeft className="w-4 h-4" />}
              {isRTL ? "العودة إلى المدونة" : "Back to Blog"}
            </span>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const translations = {
    backToBlog: isRTL ? "العودة إلى المدونة" : "Back to Blog",
    relatedPosts: isRTL ? "مقالات ذات صلة" : "Related Posts",
    readMore: isRTL ? "اقرأ المزيد" : "Read More",
  };

  const relatedPosts = blogPosts
    .filter((p) => p.slug !== post.slug)
    .slice(0, 2);

  const content = isRTL ? post.contentAr : post.content;

  return (
    <div className={`min-h-screen bg-[#0a0a0f] ${isRTL ? "rtl" : "ltr"}`} dir={isRTL ? "rtl" : "ltr"}>
      <Navbar />
      
      <main className="pt-24 pb-20">
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link href="/blog">
              <span className="inline-flex items-center gap-2 text-gray-400 hover:text-primary transition-colors mb-8 cursor-pointer">
                {isRTL ? <ArrowRight className="w-4 h-4" /> : <ArrowLeft className="w-4 h-4" />}
                {translations.backToBlog}
              </span>
            </Link>

            <div className="mb-8">
              <span className="inline-block px-4 py-1 bg-primary/20 text-primary text-sm rounded-full border border-primary/30 mb-4">
                {isRTL ? post.categoryAr : post.category}
              </span>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6" data-testid="blog-post-title">
                {isRTL ? post.titleAr : post.title}
              </h1>

              <div className="flex flex-wrap items-center gap-4 text-gray-400 mb-6">
                <span className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  {isRTL ? post.authorAr : post.author}
                </span>
                <span className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {new Date(post.date).toLocaleDateString(isRTL ? "ar-SA" : "en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
                <span className="flex items-center gap-2 relative group/time">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  >
                    <Clock className="w-4 h-4 text-primary" />
                  </motion.div>
                  <span className="relative">
                    {isRTL ? post.readTimeAr : post.readTime}
                    <motion.span 
                      className="absolute -bottom-0.5 left-0 h-0.5 bg-primary/40 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 2, ease: "easeOut", delay: 0.5 }}
                    />
                  </span>
                </span>
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden mb-12">
              <img
                src={imageMap[post.image]}
                alt={isRTL ? post.titleAr : post.title}
                className="w-full h-64 md:h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f]/50 to-transparent" />
            </div>

            <div 
              className="prose prose-lg prose-invert max-w-none
                prose-headings:text-white prose-headings:font-bold
                prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
                prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
                prose-p:text-gray-300 prose-p:leading-relaxed prose-p:mb-4
                prose-strong:text-white prose-strong:font-semibold
                prose-ul:text-gray-300 prose-ul:my-4
                prose-li:my-1
                prose-a:text-primary prose-a:no-underline hover:prose-a:underline"
              data-testid="blog-post-content"
            >
              {content.split('\n').map((paragraph, index) => {
                const trimmed = paragraph.trim();
                if (!trimmed) return null;
                
                if (trimmed.startsWith('## ')) {
                  return (
                    <h2 key={index} className="text-2xl font-bold text-white mt-10 mb-4">
                      {trimmed.replace('## ', '')}
                    </h2>
                  );
                }
                if (trimmed.startsWith('### ')) {
                  return (
                    <h3 key={index} className="text-xl font-bold text-white mt-8 mb-3">
                      {trimmed.replace('### ', '')}
                    </h3>
                  );
                }
                if (trimmed.startsWith('**') && trimmed.endsWith('**')) {
                  return (
                    <p key={index} className="text-white font-semibold mt-6 mb-2">
                      {trimmed.replace(/\*\*/g, '')}
                    </p>
                  );
                }
                if (trimmed.startsWith('- ')) {
                  return (
                    <li key={index} className="text-gray-300 ml-4 list-disc">
                      {trimmed.replace('- ', '').replace(/\*\*/g, '')}
                    </li>
                  );
                }
                if (/^\d+\./.test(trimmed)) {
                  return (
                    <li key={index} className="text-gray-300 ml-4 list-decimal">
                      {trimmed.replace(/^\d+\.\s*/, '').replace(/\*\*/g, '')}
                    </li>
                  );
                }
                return (
                  <p key={index} className="text-gray-300 leading-relaxed mb-4">
                    {trimmed.split(/(\*\*[^*]+\*\*)/).map((part, i) => {
                      if (part.startsWith('**') && part.endsWith('**')) {
                        return <strong key={i} className="text-white">{part.replace(/\*\*/g, '')}</strong>;
                      }
                      return part;
                    })}
                  </p>
                );
              })}
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="mt-16 p-8 rounded-2xl bg-gradient-to-br from-primary/20 via-accent/10 to-primary/5 border border-primary/20 text-center"
            >
              <div className="inline-flex p-3 rounded-full bg-primary/10 mb-6">
                <Sparkles className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                {isRTL 
                  ? "هل أنت مستعد لأتمتة أعمالك؟" 
                  : "Ready to Automate Your Business?"}
              </h2>
              <p className="text-gray-400 mb-8 max-w-xl mx-auto">
                {isRTL
                  ? "انضم إلى الشركات الرائدة في المنطقة التي تستخدم الذكاء الاصطناعي لتحقيق كفاءة أعلى بـ 10 أضعاف."
                  : "Join leading businesses across the region using AI to achieve 10x efficiency."}
              </p>
              <Link href="/get-started">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold px-8 py-6 text-lg rounded-xl shadow-lg shadow-primary/20 transition-all hover:scale-105 active:scale-95" data-testid="blog-cta-get-started">
                  {isRTL ? "ابدأ الآن" : "Get Started Now"}
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </article>

        {relatedPosts.length > 0 && (
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
            <h2 className="text-2xl font-bold text-white mb-8">
              {translations.relatedPosts}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {relatedPosts.map((relatedPost, index) => (
                <motion.div
                  key={relatedPost.slug}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group"
                >
                  <Link href={`/blog/${relatedPost.slug}`}>
                    <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 hover:border-primary/50 transition-all duration-300 flex">
                      <div className="w-1/3 relative overflow-hidden">
                        <img
                          src={imageMap[relatedPost.image]}
                          alt={isRTL ? relatedPost.titleAr : relatedPost.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="w-2/3 p-4">
                        <span className="text-xs text-primary mb-2 block">
                          {isRTL ? relatedPost.categoryAr : relatedPost.category}
                        </span>
                        <h3 className="text-lg font-bold text-white group-hover:text-primary transition-colors line-clamp-2 mb-2">
                          {isRTL ? relatedPost.titleAr : relatedPost.title}
                        </h3>
                        <span className="text-primary text-sm flex items-center gap-1">
                          {translations.readMore}
                          {isRTL ? <ArrowLeft className="w-3 h-3" /> : <ArrowRight className="w-3 h-3" />}
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
}
