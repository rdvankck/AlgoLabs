"use client";

import { useState } from 'react';
import { testQuestions } from '@/data/testQuestions';

const codeQuestions = testQuestions.filter(q => q.type === 'code');

export default function KodlamaTestPage() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [code, setCode] = useState(codeQuestions[0].starterCode || '');
  const [result, setResult] = useState('');

  const runCode = () => {
    try {
      // DİKKAT: eval kullanımı güvenlik riski oluşturur. Bu sadece bir prototip içindir.
      // Gerçek bir uygulamada, kod sunucu tarafında güvenli bir sanal alanda çalıştırılmalıdır.
      const func = new Function(`return ${code}`)();
      const output = func(); // Test senaryoları burada daha karmaşık olabilir
      setResult(`Çıktı: ${output}`);
    } catch (error) {
      setResult(`Hata: ${error.message}`);
    }
  };

  const nextQuestion = () => {
    setResult('');
    if (currentQuestionIndex < codeQuestions.length - 1) {
      const newIndex = currentQuestionIndex + 1;
      setCurrentQuestionIndex(newIndex);
      setCode(codeQuestions[newIndex].starterCode || '');
    } else {
      // Test bitti
      alert("Kodlama meydan okuması tamamlandı!");
    }
  };

  const question = codeQuestions[currentQuestionIndex];

  return (
    <div className="container mx-auto px-4 py-12 text-white">
      <h1 className="text-3xl font-bold text-center mb-8">Kodlama Meydan Okuması</h1>
      <div className="bg-white/20 backdrop-blur-lg rounded-lg p-8 shadow-lg border border-white/30">
        <h2 className="text-2xl mb-4">{question.question}</h2>
        
        <div className="bg-gray-900 rounded-lg p-4 my-4">
          <textarea 
            className="w-full h-64 bg-transparent text-white font-mono focus:outline-none"
            value={code}
            onChange={(e) => setCode(e.target.value)}
          />
        </div>

        <div className="flex justify-between items-center">
          <button onClick={runCode} className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-md">
            Kodu Çalıştır
          </button>
          <button onClick={nextQuestion} className="bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-6 rounded-md">
            {currentQuestionIndex < codeQuestions.length - 1 ? 'Sonraki Soru' : 'Testi Bitir'}
          </button>
        </div>

        {result && (
          <div className="mt-6 p-4 bg-black/50 rounded-lg">
            <h3 className="font-semibold">Sonuç:</h3>
            <pre className="text-white/80">{result}</pre>
          </div>
        )}
      </div>
    </div>
  );
}
