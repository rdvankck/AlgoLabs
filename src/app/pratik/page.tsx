'use client';

import Link from 'next/link';
import { useState } from 'react';
import { problems } from '@/data/problems';

// Kategoriler ID ve gösterilecek isim ile tanımlanır
const categories = [
  { id: 'tumü', name: 'Tümü' },
  { id: 'diziler', name: 'Diziler' },
  { id: 'string', name: 'String' },
  { id: 'graflar', name: 'Graflar' },
  { id: 'dinamik-programlama', name: 'Dinamik Programlama' },
  { id: 'bagli-listeler', name: 'Bağlı Listeler' }, 
  { id: 'agaclar', name: 'Ağaçlar' },
];

export default function PratikPage() {
  const [searchTerm, setSearchTerm] = useState('');
  // Başlangıçta 'Tümü' kategorisi seçilidir
  const [selectedCategory, setSelectedCategory] = useState('tumü');

  // Problemleri önce arama terimine, sonra seçili kategoriye göre filtrele
  const filteredProblems = problems
    .filter(p => p.title.toLowerCase().includes(searchTerm.toLowerCase()))
    .filter(p => {
      // Eğer seçili kategori 'tumü' ise, tüm problemleri göster
      if (selectedCategory === 'tumü') {
        return true;
      }
      // Değilse, sadece o kategoriye ait problemleri göster
      return p.category === selectedCategory;
    });

  return (
    <div className="container mx-auto px-4 py-12 text-white">
      <h1 className="text-5xl font-extrabold text-center mb-4">Pratik Modülü</h1>
      <p className="text-xl text-center text-gray-200 mb-12">Algoritmik problem çözme becerilerinizi geliştirin.</p>

      {/* Filtreleme ve Arama */}
      <div className="mb-8 p-6 bg-white/20 backdrop-blur-lg rounded-lg shadow-lg border border-white/30">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <input
            type="text"
            placeholder="Soru ara..."
            className="w-full md:w-1/3 p-2 rounded-md bg-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map(cat => (
              <button 
                key={cat.id} 
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  selectedCategory === cat.id 
                    ? 'bg-teal-500' // Aktif buton rengi
                    : 'bg-teal-600 hover:bg-teal-700' // Pasif buton rengi
                }`}
                onClick={() => setSelectedCategory(cat.id)} // Tıklandığında kategori ID'sini set et
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Soru Listesi */}
      <div className="space-y-4">
        {filteredProblems.map(problem => (
          <Link key={problem.id} href={`/pratik/${problem.id}`}>
            <div className="bg-white/20 backdrop-blur-lg rounded-lg p-6 flex justify-between items-center shadow-lg border border-white/30 hover:bg-white/30 transition-colors cursor-pointer mb-10">
              <div>
                <h3 className="text-xl font-semibold">{problem.title}</h3>
                {/* Kategori adını göstermek için küçük bir ekleme */}
                <p className="text-gray-300 text-sm capitalize">{problem.category.replace('-', ' ')}</p>
              </div>
              <span
                className={`px-3 py-1 rounded-full text-sm font-semibold
                  ${problem.difficulty === 'Kolay' ? 'bg-green-500/80' : ''}
                  ${problem.difficulty === 'Orta' ? 'bg-yellow-500/80' : ''}
                  ${problem.difficulty === 'Zor' ? 'bg-red-500/80' : ''}`}>
                {problem.difficulty}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}