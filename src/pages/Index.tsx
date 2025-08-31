import { HeroSection } from "@/components/ui/hero-section";
import { BenefitsSection } from "@/components/ui/benefits-section";
import { ProgramSection } from "@/components/ui/program-section";
import { TestimonialsSection } from "@/components/ui/testimonials-section";
import { PricingSection } from "@/components/ui/pricing-section";
import { Footer } from "@/components/ui/footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <BenefitsSection />
      <ProgramSection />
      <TestimonialsSection />
      <PricingSection />
      <Footer />
    </div>
  );
};

export default Index;
