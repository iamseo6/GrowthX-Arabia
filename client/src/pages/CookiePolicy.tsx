import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function CookiePolicy() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-32 max-w-4xl">
        <h1 className="text-4xl font-heading font-bold mb-8 text-white">Cookie Policy</h1>
        <div className="prose prose-invert max-w-none text-muted-foreground space-y-6">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">1. What are Cookies?</h2>
            <p>Cookies are small text files that are stored on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and provide information to the owners of the site.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. How We Use Cookies</h2>
            <p>We use cookies to understand how you use our website and to improve your experience. This includes keeping you logged in and remembering your preferences.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. Managing Cookies</h2>
            <p>Most web browsers allow you to control cookies through their settings. However, if you limit the ability of websites to set cookies, you may worsen your overall user experience.</p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
