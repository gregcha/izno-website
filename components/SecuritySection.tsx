import { Shield, Clock, Search } from "lucide-react";

export function SecuritySection() {
  const features = [
    {
      icon: Clock,
      title: "Zero Data Retention",
      description: "We enforce a strict zero-data-retention policy."
    },
    {
      icon: Shield,
      title: "Enterprise-Grade Security", 
      description: "Industry level protection with SAML and SSO authentication."
    },
    {
      icon: Search,
      title: "Controlled Data Residency",
      description: "Strict geographical data residency measures for data processing."
    }
  ];

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <div className="bg-[#333333] inline-block px-4 py-2 rounded-full mb-6">
            <span className="text-white text-sm font-medium">Security</span>
          </div>
          <h2 className="font-['Playfair_Display:Regular',_sans-serif] text-[60px] lg:text-[80px] leading-[88px] text-[#1c1e20] mb-6">
            Built on Trust
          </h2>
          <p className="font-['Inter:Medium',_sans-serif] text-[20px] leading-[28px] text-[#999999] max-w-4xl mx-auto">
            Vesence ensures the security and privacy of your data with industry-leading measures.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-[#1c1e20] rounded-2xl p-8 border border-[#333333]">
              <div className="bg-[#333333] rounded-lg w-12 h-12 flex items-center justify-center mb-6">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-['Inter:Medium',_sans-serif] text-[20px] leading-[28px] text-white mb-4">
                {feature.title}
              </h3>
              <p className="font-['Inter:Regular',_sans-serif] text-[16px] leading-[24px] text-[#999999]">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}