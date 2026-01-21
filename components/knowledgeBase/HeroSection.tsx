"use client";

import Image from "next/image";

export  function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-linear-to-b from-[#EEF4FF] via-[#F3F7FF] to-[#FFF5F0]">
      {/* Background blur accents */}
      <div className="absolute -top-30 -left-30 h-90 w-90 rounded-full bg-blue-300/20 blur-[120px]" />
      <div className="absolute -bottom-30 -right-30 h-90 w-90 rounded-full bg-pink-300/20 blur-[120px]" />

      <div className="relative mx-auto  px-6 pt-30 pb-24 text-center">
        {/* Badge */}
        <p className="mb-5 text-[13px] font-medium tracking-wide text-blue-600">
          AI-Powered Platform
        </p>

        {/* Heading */}
        <h1 className="mx-auto max-w-215 text-[44px] font-semibold leading-[1.15] text-gray-900 sm:text-[52px]">
          Intelligent Knowledge
          <br />
          Management Platform
        </h1>

        {/* Description */}
        <p className="mx-auto mt-6 max-w-180 text-[16px] leading-[1.6] text-gray-600">
          Centralize, tag, and access your documents instantly using AI-powered
          knowledge workflows and chatbot intelligence.
        </p>

        {/* Feature Pills */}
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          {[
            { label: "Smart Tagging", icon: "🏷️" },
            { label: "Version Control", icon: "🔁" },
            { label: "AI Search", icon: "🔍" },
          ].map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-2 rounded-xl bg-white px-4 py-2 text-[14px] font-medium text-gray-700 shadow-[0_6px_20px_rgba(0,0,0,0.08)]"
            >
              <span className="text-blue-600">{item.icon}</span>
              {item.label}
            </div>
          ))}
        </div>

        {/* Dashboard Preview */}
        <div className="mt-18 flex justify-center">
          <div className="relative w-full max-w-250 overflow-hidden rounded-2xl shadow-[0_30px_80px_rgba(0,0,0,0.12)]">
            <Image
              src="/images/knowledgeBase/hero-img.png"
              alt="Knowledge base dashboard"
              width={1200}
              height={720}
              className="w-full object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
