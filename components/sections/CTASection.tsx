"use client";

import Image from "next/image";

export default function CTASection() {
  return (
    <section className="w-full">
      {/* Background */}
      <div className="w-full cta-radial-bg">
        <div className="cta-max mx-auto px-6 py-24 flex flex-col items-center text-center">
          {/* Heading */}
          <h2 className="text-white font-semibold text-2xl sm:text-3xl md:text-4xl leading-tight tracking-tight mb-4">
            Still scrolling? We both know
            <br />
            you're interested.
          </h2>

          {/* Subtext */}
          <p className="text-white/80 text-sm leading-relaxed cta-text-max mb-6">
            Let&apos;s chat about AI Agents the old-fashioned way. Get a demo
            tailored to your requirements.
          </p>

          {/* CTA Button */}
          <button className="h-10 px-5 rounded-md bg-green-500 hover:bg-green-600 text-white text-sm font-semibold transition mb-10">
            Schedule a Demo
          </button>

          {/* Badges */}
          <div className="flex items-center justify-center gap-5 flex-wrap">
            {[
              "/images/CTA/badge-1.svg",
              "/images/CTA/badge-2.svg",
              "/images/CTA/badge-3.svg",
              "/images/CTA/badge-4.svg",
            ].map((src, index) => (
              <Image
                key={index}
                src={src}
                alt="G2 Badge"
                width={72}
                height={88}
                className="w-16 h-auto"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
