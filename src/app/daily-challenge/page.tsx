'use client';

import { dailyChallenges } from '@/data/dailyChallenges';
import { useEffect, useState } from 'react';

export default function DailyChallengePage() {
  const [challenge, setChallenge] = useState(null);
  const [code, setCode] = useState('');
  const [output, setOutput] = useState('');
  const [showHint, setShowHint] = useState(false);

  useEffect(() => {
    const dayOfYear = Math.floor((new Date() - new Date(new Date().getFullYear(), 0, 0)) / (1000 * 60 * 60 * 24));
    const challengeIndex = dayOfYear % dailyChallenges.length;
    const currentChallenge = dailyChallenges[challengeIndex];
    setChallenge(currentChallenge);
    setCode(currentChallenge.starterCode["JavaScript"]);
  }, []);

  const runCode = () => {
    try {
      const userFunction = new Function('return ' + code)();
      const result = userFunction("apple");
      setOutput(`Çıktı: ${JSON.stringify(result)}`);
    } catch (error) {
      setOutput(`Hata: ${error.message}`);
    }
  };

  if (!challenge) {
    return <div className="container mx-auto px-4 py-12 text-white text-center">Günün sorusu yükleniyor...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-12 text-white">
      <h1 className="text-4xl font-extrabold text-center mb-2">Günün Sorusu</h1>
      <h2 className="text-2xl font-semibold text-center text-teal-300 mb-10">{challenge.title}</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 border border-white/20">
          <h3 className="text-xl font-bold mb-4">Problem Açıklaması</h3>
          <p className="text-gray-300 mb-6 whitespace-pre-line">{challenge.description}</p>

          {challenge.examples.map((example, index) => (
            <div key={index} className="mb-4 bg-black/20 p-4 rounded-md">
              <p className="font-mono text-sm"><span className="font-bold">Girdi:</span> {example.input}</p>
              <p className="font-mono text-sm"><span className="font-bold">Çıktı:</span> {example.output}</p>
              {example.explanation && <p className="text-xs text-gray-400 mt-2">Açıklama: {example.explanation}</p>}
            </div>
          ))}

          <div 
            className="mt-8 flex items-center cursor-pointer text-yellow-400 hover:text-yellow-300 transition-colors"
            onClick={() => setShowHint(!showHint)}
          >
            <span className="text-2xl mr-2">💡</span>
            <span className="font-semibold">İpucu</span>
          </div>
          {showHint && (
            <div className="mt-4 bg-black/20 p-4 rounded-md border border-yellow-400/50">
              <p className="text-gray-300">{challenge.hint}</p>
            </div>
          )}
        </div>

        <div>
          <div className="flex items-center justify-end mb-2">
            <button 
              onClick={runCode}
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-md transition-colors"
            >
              Çalıştır
            </button>
          </div>

          <div className="bg-gray-900 rounded-lg border border-white/20 overflow-hidden">
            <textarea 
              className="w-full h-[400px] bg-transparent text-white font-mono p-4 focus:outline-none resize-none"
              value={code}
              onChange={(e) => setCode(e.target.value)}
            />
          </div>

          {output && (
            <div className="mt-4 bg-black/50 rounded-lg p-4 border border-white/20">
              <h3 className="font-semibold mb-2">Sonuç:</h3>
              <pre className="text-white/80 whitespace-pre-wrap">{output}</pre>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
