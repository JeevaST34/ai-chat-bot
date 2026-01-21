"use client";

import Marquee from "react-fast-marquee";
import Image from "next/image";
import {brands} from "@/lib/Constants";

const topIcons = [
  "/icons/aws.svg",
  "/icons/discord.svg",
  "/icons/github.svg",
  "/icons/google-calendar.svg",
  "/icons/hubspot.svg",
  "/icons/notion.svg",
  "/icons/mailchimp.svg",
  "/icons/jira.svg",
  "/icons/slack.svg",
  "/icons/whatsapp.svg",
];

const bottomIcons = [
  "/icons/brave.svg",
  "/icons/postman.svg",
  "/icons/fire.svg",
  "/icons/analytics.svg",
  "/icons/linear.svg",
  "/icons/google-ads.svg",
  "/icons/google-drive.svg",
  "/icons/openai.svg",
  "/icons/aws-lambda.svg",
  "/icons/search.svg",
];

export function   ToolsMarquee() {
  return (
    <section className="w-full py-28 bg-linear-to-b from-blue-50 to-white overflow-hidden">
      {/* Heading */}
      <h2 className="text-center text-3xl md:text-4xl font-semibold text-gray-900 mb-16">
        Connect with tools where your data lies
      </h2>

      {/* TOP MARQUEE */}
      <Marquee speed={35} gradient={false} pauseOnHover autoFill className="-mb-12.5">
        <div className="flex gap-8 px-8 mb-5">
          {brands.map((brand, i) => (
            <IconCard key={i} src={brand.logo} />
          ))}
        </div>
      </Marquee>

      {/* CENTER HUB */}
      <div className="relative flex justify-center my-14">
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="w-48 h-48 rounded-full border border-blue-200 animate-pulse" />
          <div className="w-32 h-32 rounded-full border border-blue-300 absolute" />
        </div>

        <div className="relative z-10 w-20 h-20 rounded-2xl bg-[#1476fe] flex items-center justify-center shadow-xl">
          <Image src="/images/home/Tars Logo.svg" alt="Core" width={40} height={40} />
        </div>
      </div>

      {/* BOTTOM MARQUEE (REVERSE) */}
      <Marquee
        speed={35}
        gradient={false}
        direction="right"
        pauseOnHover
        autoFill
        className="-mt-7.5"
      >
        <div className="flex gap-8 px-8 mb-3.75">
          {brands.map((brand, i) => (
            <IconCard key={i} src={brand.logo} />
          ))}
        </div>
      </Marquee>
    </section>
  );
}

/* -------------------------------- */
/* Icon Card */
/* -------------------------------- */
export function IconCard({ src }: { src: string }) {
  return (
    <div
      className="
        w-14 h-14 md:w-16 md:h-16
        rounded-xl
        bg-white
        shadow-md
        flex items-center justify-center
        transition-transform
        hover:scale-110
      "
    >
      <Image src={src} alt="img" width={28} height={28} />
    </div>
  );
}
