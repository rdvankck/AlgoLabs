'use client';
import { problems } from "@/data/problems";
import { useState } from "react";
import React from 'react';

export default function ProblemPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = React.use(params);
  const problem = problems.find((p) => p.id === resolvedParams.slug);
  const [code, setCode] = useState(problem?.starterCode || "");
  const [output, setOutput] = useState("");

  if (!problem) {
    return <p className="text-center text-gray-600 py-12">Soru bulunamadı.</p>;
  }

  const runCode = () => {
    try {
      const consoleOutput: string[] = [];
      const originalConsoleLog = console.log;
      console.log = (...args: unknown[]) => {
        consoleOutput.push(args.map(arg => String(arg)).join(' '));
      };

      eval(code);

      console.log = originalConsoleLog;
      setOutput(consoleOutput.join('\n'));
    } catch (error: unknown) {
      if (error instanceof Error) {
        setOutput(`Hata: ${error.message}`);
      } else {
        setOutput(`Bilinmeyen bir hata oluştu.`);
      }
    }
  };

  return (
    <div className="flex flex-col md:flex-row h-[calc(100vh-64px)]">
      {/* Sol Taraf: Soru Açıklaması */}
      <div className="w-full md:w-1/2 p-4 overflow-y-auto bg-white border-r border-gray-200">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          {problem.title}
        </h2>
        <p className="text-gray-700 whitespace-pre-wrap leading-relaxed">
          {problem.description}
        </p>
      </div>

      {/* Sağ Taraf: Kod Editörü ve Sonuçlar */}
      <div className="w-full md:w-1/2 flex flex-col bg-white">
        <div className="p-4 border-b border-gray-200">
          <h3 className="text-xl font-bold text-gray-800">Kod Editörü</h3>
        </div>
        <textarea
          value={code}
          onChange={(e) => setCode(e.target.value)}
          className="w-full flex-grow bg-gray-800 text-gray-200 border-none rounded-b-lg p-4
                     font-mono text-sm resize-none outline-none focus:ring-2 focus:ring-teal-500"
          style={{ minHeight: '300px' }}
        />
        <div className="p-4 border-t border-gray-200 flex justify-end space-x-4">
          <button
            onClick={runCode}
            className="bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-6 rounded-md
                       transition-colors duration-200"
          >
            Kodu Çalıştır
          </button>
          {/* Testi Gönder butonu daha sonra eklenecek */}
        </div>
        <div className="p-4 border-t border-gray-200">
          <h3 className="text-xl font-bold text-gray-800 mb-2">Çıktı Konsolu</h3>
          <pre className="bg-gray-800 text-gray-200 p-4 rounded-md min-h-[100px] max-h-[200px]
                          overflow-auto whitespace-pre-wrap font-mono text-sm">
            {output || "Kod çıktısı burada görünecek."}
          </pre>
        </div>
      </div>
    </div>
  );
}