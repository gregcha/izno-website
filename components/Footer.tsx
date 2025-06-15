export function Footer() {
  return (
    <footer className="bg-[#1c1e20] py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <h3 className="font-['Playfair_Display:Medium',_sans-serif] text-[24px] text-[#1e1e1e] mb-4">
              Vesence
            </h3>
            <p className="font-['Inter:Regular',_sans-serif] text-[14px] leading-[20px] text-[#999999] mb-4 max-w-xs">
              Agentic AI for Transactional Law Firms.
            </p>
            <a href="mailto:hello@vesence.com" className="font-['Inter:Regular',_sans-serif] text-[14px] leading-[20px] text-[#999999] hover:text-white">
              hello@vesence.com
            </a>
          </div>
          
          <div>
            <h4 className="font-['Inter:Regular',_sans-serif] text-[14px] leading-[20px] text-white mb-4">
              Company
            </h4>
            <ul className="space-y-3">
              <li>
                <button className="font-['Inter:Regular',_sans-serif] text-[14px] leading-[20px] text-[#999999] hover:text-white text-left">
                  Product
                </button>
              </li>
              <li>
                <button className="font-['Inter:Regular',_sans-serif] text-[14px] leading-[20px] text-[#999999] hover:text-white text-left">
                  Security
                </button>
              </li>
              <li>
                <a href="#contact" className="font-['Inter:Regular',_sans-serif] text-[14px] leading-[20px] text-[#999999] hover:text-white hover:bg-[#333333] px-3 py-2 rounded-md transition-colors inline-block">
                  Join Waitlist
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-['Inter:Regular',_sans-serif] text-[14px] leading-[20px] text-white mb-4">
              Resources
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="font-['Inter:Regular',_sans-serif] text-[14px] leading-[20px] text-[#999999] hover:text-white">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="#" className="font-['Inter:Regular',_sans-serif] text-[14px] leading-[20px] text-[#999999] hover:text-white">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <hr className="border-[#333333] mb-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="font-['Inter:Regular',_sans-serif] text-[14px] leading-[20px] text-[#999999]">
            © 2025 Verse Law AB
          </p>
          <button className="font-['Inter:Regular',_sans-serif] text-[14px] leading-[14px] text-[#999999] hover:text-white hover:bg-[#333333] px-3 py-2 rounded-md transition-colors mt-4 md:mt-0">
            Cookie Settings
          </button>
        </div>
      </div>
    </footer>
  );
}