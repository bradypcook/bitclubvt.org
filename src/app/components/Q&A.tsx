"use client";
import React from "react";

interface QA {
  question: string;
  answer: string;
}

interface QuestionsAndAnswersProps {
  title: string;
  items: QA[];
}

export default function QuestionsAndAnswers({ title, items }: QuestionsAndAnswersProps) {
  return (
    <section className="py-20 bg-[#FDF8E8] px-6 md:px-12 lg:px-24">
      {/* Title */}
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-black">
        {title}
      </h2>

      {/* Q&A List */}
      <div className="space-y-10 max-w-5xl mx-auto">
        {items.map((qa, idx) => (
          <div key={idx} className="space-y-3">
            {/* Question */}
            <h3 className="text-xl md:text-2xl font-semibold text-[#F26645]">
              {qa.question}
            </h3>

            {/* Answer */}
            <p className="text-lg md:text-xl text-[#861F41] leading-relaxed">
              {qa.answer}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}