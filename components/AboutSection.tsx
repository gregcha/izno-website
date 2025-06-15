import imgImage14 from "../imports/1920WLight";

export function AboutSection() {
  return (
    <section className="bg-white w-full">
      <div className="overflow-clip relative w-full">
        <div className="box-border content-stretch flex flex-col lg:flex-row gap-8 lg:gap-[140px] items-start justify-start px-4 md:px-8 lg:px-[300px] py-16 lg:py-[67px] relative w-full">
          <div className="flex-1">
            <div className="box-border content-stretch flex flex-col gap-2.5 items-start justify-start leading-[0] p-0 relative text-left text-nowrap">
              <div className="flex flex-col font-['Playfair_Display:Regular',_sans-serif] font-normal justify-center relative shrink-0 text-[#999999] text-[24px] lg:text-[32px]">
                <p className="block leading-[56px] text-nowrap whitespace-pre">
                  Dès réception d'un appel d'offre,
                </p>
              </div>
              <div className="flex flex-col font-['Playfair_Display:Regular',_sans-serif] font-normal justify-center leading-[normal] relative shrink-0 text-[#1c1e20] text-[28px] lg:text-[40px] whitespace-pre">
                <p className="block mb-0">Identifiez les profils</p>
                <p className="block mb-0">{`les plus pertinents `}</p>
                <p className="block">en quelques secondes parmi :</p>
              </div>
              <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center not-italic relative shrink-0 text-[20px] lg:text-[24px] text-neutral-600">
                <ul className="list-disc space-y-2 ml-6">
                  <li>
                    <span className="leading-[normal]">
                      Vos consultants en inter-contrat
                    </span>
                  </li>
                  <li>
                    <span className="leading-[normal]">
                      Vos consultants en fin de mission
                    </span>
                  </li>
                  <li>
                    <span className="leading-[normal]">{`Votre vivier de candidats "dormants"`}</span>
                  </li>
                  <li>
                    <span className="leading-[normal]">
                      Un base de plus de 20 millions de profils à jour
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <div className="aspect-[16/9] bg-center bg-cover bg-no-repeat rounded-lg border border-zinc-200">
              {/* Placeholder for the dashboard image */}
              <div className="w-full h-full bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-4xl mb-4">📊</div>
                  <h3 className="text-xl font-semibold text-gray-700 mb-2">Dashboard IZNO</h3>
                  <p className="text-gray-500">Interface de recherche intelligente</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}