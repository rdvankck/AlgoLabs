import Link from 'next/link';

const testTypes = [
  {
    title: 'Teorik Bilgi Testi',
    description: 'Veri yapıları ve algoritmalar hakkındaki temel bilginizi ölçmek için tasarlanmış çoktan seçmeli sorular. Zaman kısıtlaması yoktur.',
    link: '/test/teorik',
    buttonText: 'Teste Başla',
  },
  {
    title: 'Kodlama Meydan Okuması',
    description: 'Belirli bir süre içinde bir algoritma problemini çözmeniz gereken pratik bir test. Problem çözme hızınızı ve doğruluğunuzu ölçer.',
    link: '/test/kodlama',
    buttonText: 'Meydan Oku',
  },
];

export default function TestPage() {
  return (
    <div className="container mx-auto px-4 py-12 text-white">
      <h1 className="text-5xl font-extrabold text-center mb-4">Test Modülü</h1>
      <p className="text-xl text-center text-gray-200 mb-12">Bilginizi sınayın ve ne kadar ilerlediğinizi görün.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {testTypes.map(test => (
          <div key={test.title} className="bg-white/20 backdrop-blur-lg rounded-lg p-8 flex flex-col items-center text-center shadow-lg border border-white/30">
            <h3 className="text-2xl font-bold mb-4">{test.title}</h3>
            <p className="text-gray-200 mb-6 flex-grow">{test.description}</p>
            <Link href={test.link}>
              <button className="bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 px-6 rounded-md transition-colors duration-200">
                {test.buttonText}
              </button>
            </Link>
          </div>
        ))}
      </div>

      {/* Geçmiş Sonuçlar ve İlerleme */}
      <div className="bg-white/20 backdrop-blur-lg rounded-lg p-8 shadow-lg border border-white/30">
        <h2 className="text-3xl font-bold text-center mb-6">İlerleme Grafiğiniz</h2>
        <div className="h-64 bg-white/10 rounded-md flex items-center justify-center">
          <p className="text-gray-300">Yakında burada ilerleme grafiğiniz gösterilecek.</p>
        </div>
      </div>
    </div>
  );
}
