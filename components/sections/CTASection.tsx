"use client";

import Image from "next/image";

export default function CTASection() {
  return (
    <section className="w-full">
      {/* Background */}
      <div
        className="w-full"
        style={{
          background:
            "radial-gradient(120% 120% at 50% 0%, #1677FF 0%, #00428B 66%)",
        }}
      >
        <div
          className="
           max-w-300
            mx-auto
            px-6
            py-24
            flex
            flex-col
            items-center
            text-center
          "
        >
          {/* Heading */}
          <h2
            className="
              text-white
              font-semibold
              text-[28px]
              sm:text-[32px]
              md:text-[36px]
              leading-tight-[1.25]
              tracking-[-0.01em]
              mb-4
            "
          >
            Still scrolling? We both know
            <br />
            you're interested.
          </h2>

          {/* Subtext */}
          <p
            className="
              text-white/80
              text-[13px]
              sm:text-[14px]
              leading-[1.6]
              max-w-115
              mb-6
            "
          >
            Let's chat about AI Agents the old-fashioned way. Get a demo
            tailored to your requirements.
          </p>

          {/* CTA Button */}
          <button
            className="
              h-10
              px-5
              rounded-md
              bg-[#22C55E]
              hover:bg-[#16A34A]
              text-white
              text-[13px]
              font-semibold
              transition
              mb-10
            "
          >
            Schedule a Demo
          </button>

          {/* Badges */}
          <div
            className="
              flex
              items-center
              justify-center
              gap-5
              flex-wrap
            "
          >
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
                className="w-16 sm:w-18h-auto"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
