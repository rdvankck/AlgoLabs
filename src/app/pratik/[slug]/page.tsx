'use client';
import { problems } from "@/data/problems";
import { useState } from "react";
import React from 'react';
import Editor from 'react-simple-code-editor';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import { updateUserProfile, getUserProfile } from '@/utils/localStorageUtils';

const customAtomOneDark = {
  ...atomOneDark,
  hljs: {
    ...atomOneDark.hljs,
    color: '#e5e7eb !important', // text-gray-200 rengi
    lineHeight: '1.4',
  },
  'pre[class*="language-"]': {
    ...atomOneDark['pre[class*="language-"]'],
    margin: '0px',
    border: '0px',
    padding: '10px',
    lineHeight: '1.4',
    boxSizing: 'border-box',
    tabSize: 4,
    whiteSpace: 'pre-wrap',
  },
};

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
      const newOutput = consoleOutput.join('\n');
      setOutput(newOutput);

      // Check if code execution was successful (you might want a more robust check)
      if (!newOutput.startsWith("Hata:") && problem?.id) {
        const currentUser = localStorage.getItem('algolabs_last_logged_in_user');
        if (currentUser) {
          updateUserProfile(currentUser, {
            solvedProblems: [...(getUserProfile(currentUser).solvedProblems || []), problem.id]
          });
        }
      }

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
        <div className="flex-grow bg-gray-900 rounded-b-lg overflow-hidden"> {/* bg-gray-900 olarak değiştirildi */}
          <Editor
            value={code}
            onValueChange={code => setCode(code)}
            highlight={code => (
              <SyntaxHighlighter language="javascript" style={customAtomOneDark}>
                {code}
              </SyntaxHighlighter>
            )}
            style={{
              fontFamily: '"Fira code", "Fira Mono", monospace',
              fontSize: 14,
              minHeight: '300px',
              lineHeight: '1.4',
              boxSizing: 'border-box',
              tabSize: 4,
              verticalAlign: 'top',
            }}
            className="w-full h-full code-editor-container"
          />
        </div>
        <div className="p-4 border-t border-gray-200">
          <h3 className="text-xl font-bold text-gray-800 mb-2">Çıktı Konsolu</h3>
          <pre className="bg-gray-800 text-white p-4 rounded-md min-h-[100px] max-h-[200px]
                          overflow-auto whitespace-pre-wrap font-mono text-sm">
            {output || "Kod çıktısı burada görünecek."}
          </pre>
        </div>
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
      </div>
    </div>
  );
}