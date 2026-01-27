import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-32 max-w-4xl">
        <h1 className="text-4xl font-heading font-bold mb-8 text-white">Terms of Service</h1>
        <div className="prose prose-invert max-w-none text-muted-foreground space-y-6">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
            <p>By accessing or using GrowthX Arabia's services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. Description of Service</h2>
            <p>GrowthX Arabia provides AI automation services and digital transformation consulting. We reserve the right to modify or discontinue any service at any time without notice.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. User Obligations</h2>
            <p>You agree to use our services only for lawful purposes and in accordance with these Terms. You are responsible for maintaining the confidentiality of any account information.</p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
