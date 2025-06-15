import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { FeatureSection } from "./components/FeatureSection";
import { SecuritySection } from "./components/SecuritySection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      
      <AboutSection />
      
      <FeatureSection
        badge="Firm"
        title="Commit To Firm-Wide Standards"
        description="Apply your firm's style guide, best practices, and standards to every delivery across the firm."
      />
      
      <FeatureSection
        badge="Projects"
        title="Ensure Deal Alignment"
        description="Validate key information across multiple documents instantly. Double check information across cap tables, term sheets and SPAs with one-click, straight inside Microsoft Word."
        imageLeft={true}
      />
      
      <FeatureSection
        badge="Documents"
        title="Verify Document Consistency"
        description="Apply firm writing guides, find logical inconsistencies, assess defined terms, and check cross-references in every delivery."
      />
      
      {/* Partnership section */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
          <div className="bg-[#333333] inline-block px-4 py-2 rounded-full mb-6">
            <span className="text-white text-sm font-medium">Partnerships</span>
          </div>
          <h2 className="font-['Playfair_Display:Regular',_sans-serif] text-[32px] lg:text-[48px] leading-[56px] text-[#1c1e20] mb-4">
            Cederquist & Vesence Strategic Partnership
          </h2>
          <p className="font-['Inter:Medium',_sans-serif] text-[16px] lg:text-[20px] leading-[40px] text-[#888888] mb-6 max-w-2xl mx-auto">
            One of the leading Nordic transactional law firms has rolled out Vesence firm-wide.
          </p>
          <button className="font-['Inter:Medium',_sans-serif] text-[20px] leading-[40px] text-black hover:underline mb-8">
            Read more
          </button>
          <div className="aspect-[16/10] bg-gradient-to-br from-amber-50 to-orange-100 rounded-[20px] flex items-center justify-center">
            <div className="text-center p-8">
              <div className="text-6xl mb-4">🤝</div>
              <h3 className="text-2xl font-semibold text-gray-700 mb-2">Strategic Partnership</h3>
              <p className="text-gray-500">Cederquist & Vesence collaboration</p>
            </div>
          </div>
        </div>
      </section>
      
      <SecuritySection />
      
      <ContactSection />
      
      <Footer />
      
      {/* Cookie notice */}
      <div className="fixed bottom-5 left-5 right-5 md:left-auto md:right-5 md:w-[400px] z-50">
        <div className="bg-white rounded-[14px] p-5 shadow-lg border border-gray-100">
          <p className="font-['Inter:Regular',_sans-serif] text-[14px] leading-[21px] text-[#444444] mb-4">
            We use cookies to personalize content, run ads, and analyze traffic.
          </p>
          <button className="bg-[#eeeeee] hover:bg-gray-300 px-4 py-2 rounded-lg font-['Inter:Regular',_sans-serif] text-[13.5625px] text-[#444444] transition-colors">
            Okay
          </button>
        </div>
      </div>
    </div>
  );
}