interface FeatureSectionProps {
  badge: string;
  title: string;
  description: string;
  imageLeft?: boolean;
  children?: React.ReactNode;
}

export function FeatureSection({ badge, title, description, imageLeft = false, children }: FeatureSectionProps) {
  return (
    <section className="bg-white overflow-clip w-full py-16">
      <div className={`box-border content-stretch flex flex-col ${imageLeft ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 lg:gap-[140px] items-center justify-start px-4 md:px-8 lg:px-[300px] relative w-full`}>
        <div className="flex-1">
          <div className="bg-[#333333] inline-block px-4 py-2 rounded-full mb-6">
            <span className="text-white text-sm font-medium">{badge}</span>
          </div>
          <h2 className="font-['Playfair_Display:Regular',_sans-serif] text-[32px] lg:text-[48px] leading-[56px] text-[#1c1e20] mb-6">
            {title}
          </h2>
          <p className="font-['Inter:Regular',_sans-serif] text-[16px] leading-[24px] text-[#999999]">
            {description}
          </p>
        </div>
        <div className="flex-1">
          {children || (
            <div className="aspect-[4/3] bg-gradient-to-br from-slate-50 to-slate-200 rounded-lg flex items-center justify-center">
              <div className="text-center p-8">
                <div className="text-4xl mb-4">⚙️</div>
                <p className="text-gray-500">Interface utilisateur</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}