import Link from "next/link";

const modules = [
  {
    title: "Öğrenme Modülü",
    description:
      "Veri yapıları ve algoritmaları temelden ileri seviyeye, soru-cevap formatında öğrenin. Teorik bilgilerinizi sağlamlaştırın.",
    link: "/ogren",
    buttonText: "Başla",
  },
  {
    title: "Pratik Modülü",
    description:
      "Farklı zorluk seviyelerinde (Kolay, Orta, Zor) ve çeşitli konularda (Diziler, Graflar, Dinamik Programlama vb.) yüzlerce algoritma sorusunu çözün. Dahili kod editörümüzle çözümlerinizi anında test edin ve en optimize sonuçlara ulaşmak için kendinizi geliştirin.",
    link: "/pratik",
    buttonText: "Soruları Gör",
  },
  {
    title: "Test Modülü",
    description:
      "Teorik bilginizi çoktan seçmeli sorularla, pratik becerilerinizi ise zaman kısıtlamalı kodlama meydan okumalarıyla test edin. Performansınızı takip edin, güçlü ve zayıf yönlerinizi keşfedin ve sıralamalarda yükselin.",
    link: "/test",
    buttonText: "Teste Başla",
  },
];

export default function Home() {
  return (
    <>
      {/* Yeni Hero Bölümü */}
      <div className="relative py-16 px-4 overflow-hidden">
        <div className="container mx-auto relative z-10 flex flex-col md:flex-row items-center justify-between">
          {/* Metin İçeriği */}
          <div className="flex flex-col md:flex-row md:items-center w-full">
            <div className="md:w-1/3 mb-4 md:mb-0">
              <h1 className="text-5xl font-extrabold text-gray-900 leading-tight text-left">
                Algoritma Nedir?
              </h1>
            </div>
            <div className="md:w-2/3">
              <p className="text-xl text-gray-700 text-center">
                Algoritma, belirli bir problemi çözmek veya belirli bir görevi yerine getirmek için adım adım izlenmesi gereken talimatlar dizisidir. Bilgisayar bilimlerinde ve günlük hayatımızda karşılaştığımız birçok problemin çözümünde algoritmalar kullanılır. Örneğin, bir yemek tarifi, bir yol tarifi veya bir matematik problemini çözme adımları birer algoritmadır.
              </p>
            </div>
          </div>
        </div>
        {/* Renk Geçişli Arka Plan Efekti */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-br from-teal-400 to-blue-500 opacity-20 rounded-full filter blur-3xl transform -translate-x-1/4 -translate-y-1/4"></div>
          <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-purple-400 to-pink-500 opacity-20 rounded-full filter blur-3xl transform translate-x-1/4 translate-y-1/4"></div>
        </div>
      </div>
      {/* HR etiketi */}
      <hr className="border-t border-gray-300 my-8 w-full container mx-auto" />

      {/* Mevcut Modül Kartları Bölümü */}
      <div className="container mx-auto py-12 px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-4">
          Modüllerimiz
        </h2>
        <p className="text-xl text-center text-gray-200 mb-12">
          Türkçe kaynaklarla algoritmik düşünme becerilerinizi geliştirin.
          Öğrenin, pratik yapın ve kendinizi test edin!
        </p>
        <div className="w-full flex flex-col space-y-5">
          {modules.map((module, index) => {
            const alignmentContainerClass =
              index % 2 !== 0 ? "justify-end" : "justify-start";

            return (
              <div
                key={module.title}
                className={`flex w-full ${alignmentContainerClass}`}
              >
                <div
                  className={`bg-white/20 backdrop-blur-lg rounded-lg shadow-lg border border-white/30 overflow-hidden
                             transform transition-transform duration-200 hover:-translate-y-1
                             flex flex-col w-full md:w-1/2 lg:w-2/5`}
                >
                  <div className="p-6 flex-grow">
                    <h3 className="text-2xl font-semibold text-white mb-3">
                      {module.title}
                    </h3>
                    <p className="text-gray-200 text-sm">
                      {module.description}
                    </p>
                  </div>
                  <div className="p-6 pt-0">
                    <Link href={module.link}>
                      <button className="bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded-md transition-colors duration-200">
                        {module.buttonText}
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
