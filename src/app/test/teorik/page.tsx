"use client";

import { useState } from 'react';
import { testQuestions } from '@/data/testQuestions';

const classicQuestions = testQuestions.filter(q => q.type === 'classic');

export default function TeorikTestPage() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (answer: string) => {
    setSelectedAnswer(answer);
    if (answer === classicQuestions[currentQuestionIndex].correctAnswer) {
      setScore(score + 1);
    }
  };

  const nextQuestion = () => {
    setSelectedAnswer(null);
    if (currentQuestionIndex < classicQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowResult(true);
    }
  };

  if (showResult) {
    return (
      <div className="container mx-auto px-4 py-12 text-white text-center">
        <h1 className="text-4xl font-bold mb-4">Test Sonucu</h1>
        <p className="text-2xl">Toplam {classicQuestions.length} sorudan {score} tanesini doğru cevapladınız.</p>
      </div>
    );
  }

  const question = classicQuestions[currentQuestionIndex];

  return (
    <div className="container mx-auto px-4 py-12 text-white">
      <h1 className="text-3xl font-bold text-center mb-8">Teorik Bilgi Testi</h1>
      <div className="bg-white/20 backdrop-blur-lg rounded-lg p-8 shadow-lg border border-white/30">
        <h2 className="text-2xl mb-6">{question.question}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {question.options?.map(option => (
            <button 
              key={option}
              onClick={() => handleAnswer(option)}
              className={`p-4 rounded-lg text-left transition-colors ${
                selectedAnswer === option
                  ? option === question.correctAnswer ? 'bg-green-500' : 'bg-red-500'
                  : 'bg-white/30 hover:bg-white/40'
              }`}
              disabled={selectedAnswer !== null}
            >
              {option}
            </button>
          ))}
        </div>
        {selectedAnswer && (
          <div className="text-center mt-6">
            <button onClick={nextQuestion} className="bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-6 rounded-md">
              {currentQuestionIndex < classicQuestions.length - 1 ? 'Sonraki Soru' : 'Testi Bitir'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
