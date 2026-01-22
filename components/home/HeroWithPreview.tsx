"use client";

import Image from "next/image";
import { Button } from "../common";

interface HeroWithPreviewProps {
  badge?: string;
  title: string;
  subtitle?: string;
  buttonText: string;
  image: string;
}

export function HeroWithPreview({
  badge,
  title,
  subtitle,
  buttonText,
  image,
}: HeroWithPreviewProps) {
  return (
    <section className="w-full bg-[#FCFCFD]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <div className="rounded-3xl bg-[#F9FAFF] px-6 sm:px-10 lg:px-16 py-16 text-center">
          {/* BADGE */}
          {badge && (
            <div className="flex justify-center mb-6">
              <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-xs font-medium text-blue-600 shadow-sm">
                ✨ {badge}
              </span>
            </div>
          )}

          {/* TITLE */}
          <h1 className="text-[28px] sm:text-[36px] lg:text-[42px] font-semibold text-gray-900 leading-tight max-w-3xl mx-auto mb-4">
            {title}
          </h1>

          {/* SUBTITLE */}
          {subtitle && (
            <p className="text-gray-600 text-[15px] max-w-xl mx-auto mb-8">
              {subtitle}
            </p>
          )}

          {/* CTA */}
          <div className="flex justify-center mb-14">
            <Button text={buttonText} />
          </div>

          {/* IMAGE PREVIEW */}
          <div className="relative max-w-5xl mx-auto">
            <div className="">
              <Image
                src={image}
                alt="Product preview"
                width={1200}
                height={700}
                className="w-full rounded-xl"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
