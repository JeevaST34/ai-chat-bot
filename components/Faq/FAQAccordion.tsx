"use client";

import { useState } from "react";
import { faqs } from "@/lib/Constants";

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(1);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-24">
      <div className="max-w-225 mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-[36px] font-semibold text-[#0f172a] mb-4">
            Frequently Asked Question
          </h2>
          <p className="text-[#6b7280] text-[16px] max-w-160 mx-auto">
            Find quick answers to the most common questions about our AI Chatbot platform
          </p>
        </div>

        {/* FAQ List */}
        <div className="divide-y divide-[#e5e7eb]">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div key={index} className="py-5">

                {/* OPEN STATE */}
                {isOpen ? (
                  <div className="bg-[#0b3f8f] rounded-[10px] px-6 py-5 text-white">

                    {/* Question */}
                    <button
                      onClick={() => toggleFAQ(index)}
                      className="w-full flex items-center justify-between text-left"
                    >
                      <span className="text-[16px] font-medium">
                        {faq.question}
                      </span>
                      <span className="text-[22px] leading-none">×</span>
                    </button>

                    {/* Divider */}
                    <div className="h-px bg-white/20 my-4" />

                    {/* Answer */}
                    <p className="text-[14px] leading-6 text-white/90">
                      {faq.answer}
                    </p>
                  </div>
                ) : (
                  /* CLOSED STATE */
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex items-center justify-between text-left py-4"
                  >
                    <span className="text-[16px] font-medium text-[#0f172a]">
                      {faq.question}
                    </span>
                    <span className="text-[#9ca3af] text-[22px] leading-none">
                      +
                    </span>
                  </button>
                )}

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
