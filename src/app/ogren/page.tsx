'use client';

import { useState } from 'react';
import Link from 'next/link';
import { learningTopics } from '@/data/learningTopics';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/cjs/styles/hljs';

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

export default function OgrenPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('tumü');
  const [expandedTopicId, setExpandedTopicId] = useState<string | null>(null); // Açık olan konunun ID'si

  const handleTopicClick = (topicId: string) => {
    setExpandedTopicId(expandedTopicId === topicId ? null : topicId);
  };

  const filteredTopics = learningTopics
    .filter(topic => topic.title.toLowerCase().includes(searchTerm.toLowerCase()))
    .filter(topic => {
      if (selectedCategory === 'tumü') {
        return true;
      }
      return topic.category === selectedCategory;
    });

  return (
    <div className="container mx-auto py-12 px-4 text-white">
      <h1 className="text-4xl font-bold text-center mb-4">Öğrenme Modülü</h1>
      <p className="text-xl text-center text-gray-200 mb-12">Algoritma ve veri yapıları konularını derinlemesine öğrenin.</p>

      {/* Filtreleme ve Arama */}
      <div className="mb-8 p-6 bg-white/20 backdrop-blur-lg rounded-lg shadow-lg border border-white/30">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <input
            type="text"
            placeholder="Konu ara..."
            className="w-full md:w-1/3 p-2 rounded-md bg-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map(cat => (
              <button 
                key={cat.id} 
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  selectedCategory === cat.id 
                    ? 'bg-teal-500' 
                    : 'bg-teal-600 hover:bg-teal-700'
                }`}
                onClick={() => setSelectedCategory(cat.id)}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Konu Listesi */}
      <ul className="w-full">
        {filteredTopics.map(topic => (
          <div
            key={topic.id}
            className="bg-white/20 backdrop-blur-lg rounded-lg shadow-lg border border-white/30 mb-10 p-4
                       transform transition-transform duration-200 hover:translate-x-1"
          >
            <li className="flex flex-col">
              <div 
                className="flex items-center justify-between mb-2 cursor-pointer"
                onClick={() => handleTopicClick(topic.id)}
              >
                <h2 className="text-xl font-semibold text-white">
                  {topic.title}
                </h2>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold
                    ${topic.difficulty === 'Başlangıç' ? 'bg-green-500/80' : ''}
                    ${topic.difficulty === 'Orta' ? 'bg-yellow-500/80' : ''}
                    ${topic.difficulty === 'İleri' ? 'bg-red-500/80' : ''}`}
                >
                  {topic.difficulty}
                </span>
              </div>

              {expandedTopicId !== topic.id && (
                <span className="text-sm text-gray-200 mt-2">Daha fazla bilgi için tıklayınız...</span>
              )}

              {expandedTopicId === topic.id && (
                <div className="mt-4">
                  <p className="text-gray-200 mb-4">{topic.description}</p>

                  {topic.qa.map((item, qaIndex) => (
                    <div key={qaIndex} className="mb-4">
                      <h4 className="font-semibold text-teal-300 mb-2">Soru: {item.question}</h4>
                      <div className="text-gray-200">
                        {item.answer.split('```javascript').map((part, index) => {
                          if (index % 2 === 1) {
                            const code = part.split('```')[0];
                            return (
                              <SyntaxHighlighter language="javascript" style={atomOneDark} key={index}>
                                {code}
                              </SyntaxHighlighter>
                            );
                          } else {
                            return <p key={index}>{part}</p>;
                          }
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
}