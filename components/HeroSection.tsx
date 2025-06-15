import { Button } from "./ui/button";

export function HeroSection() {
  const handleDemoRequest = () => {
    // Scroll to contact form
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-white w-full">
      <div className="flex flex-col items-center overflow-clip relative w-full">
        <div className="box-border content-stretch flex flex-col gap-6 items-center justify-start px-4 md:px-8 lg:px-[400px] py-8 relative w-full">
          <div className="flex flex-col font-['Playfair_Display:Medium',_sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#1e1e1e] text-[36px] text-center text-nowrap">
            <p className="block leading-[normal] whitespace-pre">IZNO</p>
          </div>
          <div className="flex flex-col font-['Playfair_Display:Regular',_sans-serif] font-normal justify-center leading-[normal] relative shrink-0 text-[#1c1e20] text-[32px] md:text-[48px] lg:text-[60px] text-center whitespace-pre">
            <p className="mb-0">
              <span>{`L'IA qui `}</span>
              <span className="font-['Playfair_Display:Italic',_sans-serif] font-normal italic text-[#999999]">
                révolutionne
              </span>
            </p>
            <p className="block">
              recherche de profils pour vos appels d'offres.
            </p>
          </div>
          <Button 
            onClick={handleDemoRequest}
            className="bg-[#1c1e20] hover:bg-[#333333] text-white px-[30px] py-4 rounded-[10px] font-semibold text-[18px] transition-colors"
          >
            Demander une démo
          </Button>
        </div>
      </div>
    </section>
  );
}