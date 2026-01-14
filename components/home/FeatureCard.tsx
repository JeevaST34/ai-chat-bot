"use client";

import Image from "next/image";
import { Button } from "../common";

interface FeatureCardProps {
  title: string;
  description: string;
  btnText: string;
  image: string;
  imageAlt?: string;
  reverse?: boolean;
  layout?: "default" | "stacked";
}

export default function FeatureCard({
  title,
  description,
  btnText,
  image,
  imageAlt = "",
  reverse = false,
  layout = "default", // "default" | "stacked"
}: FeatureCardProps) {
  const isStacked = layout === "stacked";

  return (
    <div
      className={`
        flex items-center gap-12 bg-[#FCFCFD] p-5 rounded-3xl
        ${
          isStacked
            ? "flex-col text-left"
            : "flex-col lg:flex-row justify-between"
        }
        ${!isStacked && reverse ? "lg:flex-row-reverse text-right" : ""}
      `}
    >
      {/* TEXT SECTION */}
      <div className={`max-w-xl ${isStacked ? "mx-auto" : ""}`}>
        <h2 className="text-[28px] sm:text-[34px] font-semibold text-gray-900 leading-tight mb-4">
          {title}
        </h2>

        <p className="text-gray-600 text-[15px] leading-relaxed mb-6">
          {description}
        </p>

        <div
          className={
            isStacked ? "flex justify-start" : reverse ? "flex justify-end" : ""
          }
        >
          <Button text={btnText} />
        </div>
      </div>

      {/* IMAGE SECTION */}
      <div
        className={`relative w-full ${isStacked ? "max-w-3xl" : "max-w-130"}`}
      >
        <div className="">
          <Image
            src={image}
            alt={imageAlt}
            width={900}
            height={600}
            className={`h-auto rounded-xl ${
              isStacked ? "w-full" : "w-1/2 mx-auto"
            }`}
            priority
          />
        </div>
      </div>
    </div>
  );
}
