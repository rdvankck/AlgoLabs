import { learningTopics } from "@/data/learningTopics";
import Link from "next/link";
import React from 'react';

export default function LearningTopicPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = React.use(params);
  const topic = learningTopics.find((t) => t.id === resolvedParams.slug);

  if (!topic) {
    return <p className="text-center text-gray-600 py-12">Konu bulunamadı.</p>;
  }

  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-4">
        {topic.title}
      </h1>
      <p className="text-xl text-center text-gray-600 mb-12">
        {topic.description}
      </p>

      <div className="mt-8">
        {topic.qa.map((item, index) => (
          <details key={index} className="bg-white shadow-md rounded-lg mb-4 overflow-hidden">
            <summary className="flex items-center justify-between p-4 cursor-pointer bg-gray-50 hover:bg-gray-100 transition-colors duration-200">
              <h2 className="text-lg font-semibold text-gray-800">Soru: {item.question}</h2>
              <svg className="w-5 h-5 text-gray-600 transform transition-transform duration-200 group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </summary>
            <div className="p-4 border-t border-gray-200">
              <p className="text-gray-700">Cevap: {item.answer}</p>
            </div>
          </details>
        ))}
      </div>
      <div className="mt-8 text-center">
        <Link href="/ogren">
          <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-md transition-colors duration-200">
            Tüm Konulara Dön
          </button>
        </Link>
      </div>
    </div>
  );
}