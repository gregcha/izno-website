import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export function ContactSection() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      // Here you would typically send the email to your backend
      console.log("Email submitted:", email);
      setTimeout(() => {
        setIsSubmitted(false);
        setEmail("");
      }, 3000);
    }
  };

  return (
    <section id="contact" className="py-16 relative">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-50 to-slate-100" />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 md:px-8">
        <div className="bg-[#1c1e20] rounded-[20px] py-16 px-8 text-center">
          <h2 className="font-['Playfair_Display:Regular',_sans-serif] text-[60px] lg:text-[80px] leading-[88px] text-white mb-8">
            Get in Touch
          </h2>
          
          {isSubmitted ? (
            <div className="text-center">
              <div className="text-green-400 text-4xl mb-4">✓</div>
              <p className="text-white text-lg">Merci ! Nous vous contactons bientôt.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <Input
                  type="email"
                  placeholder="louis@pearson-hardman.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 bg-white rounded-[10px] border-[rgba(136,136,136,0.1)] text-[#999999]"
                  required
                />
                <Button 
                  type="submit"
                  className="bg-white hover:bg-gray-100 text-[#0e0e0e] px-8 py-4 rounded-[10px] font-semibold"
                >
                  Submit
                </Button>
              </div>
            </form>
          )}
          
          <div className="mt-8 text-center">
            <span className="text-[#999999] text-sm">Or email </span>
            <a href="mailto:hello@vesence.com" className="text-white text-sm hover:underline">
              hello@vesence.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}