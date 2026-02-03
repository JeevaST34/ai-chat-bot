import React from "react";
import { Eye, Palette, Plane } from "lucide-react";
import Image from "next/image";
import { Card } from "@/components/common/Card";

export default function AnalyticsDashboard() {
  return (
    <div className="w-full min-h-screen bg-white">
      {/* HERO */}
      <section className="bg-[linear-gradient(180deg,#EEF4FF_0%,#F8FAFF_45%,#FDF2F2_85%,white_65%)]">
        <div className="max-w-7xl mx-auto px-6 pt-16 text-center">
          <p className="text-sm font-medium text-blue-600">
            AI-Powered Platform
          </p>

          <h1 className="mt-4 text-4xl font-bold text-gray-900">
            Turn AI Chatbot Data into Actionable Insights
          </h1>

          <p className="mt-4 max-w-3xl mx-auto text-gray-500">
            Understand conversations, measure performance, and improve your AI
            chatbot with real-time insights.
          </p>

          <div className="mt-16 rounded-2xl p-6">
            <Image
              src="/images/analytics/analytic-hero.png"
              alt="Analytics hero"
              width={1200}
              height={600}
              className="w-full h-auto rounded-xl"
            />
          </div>
        </div>
      </section>

      {/* CLARITY */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <p className="inline-flex items-center gap-1 text-sm text-gray-500 border rounded-full px-3 py-1">
            <Eye size={14} />
            Clarity
          </p>

          <h2 className="mt-4 text-3xl md:text-4xl font-semibold text-gray-900">
            Working smarter starts with seeing clearer
          </h2>
        </div>

        {/* HERO CARD */}
        <div className="grid md:grid-cols-2 gap-12 items-center rounded-2xl p-10 bg-slate-50 bg-analytic-hero">
          <div>
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 leading-snug">
              An omnichannel analytics to get out of the guess work
            </h3>

            <p className="mt-4 text-sm text-gray-500 max-w-md">
              Data is collected and reported per channel as soon as messages are
              received.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              {[
                "WhatsApp",
                "Instagram",
                "Messenger",
                "Email",
                "SMS",
                "Telegram",
                "X",
                "Line",
                "Viber",
                "Chat Widget",
                "Phone",
              ].map((item) => (
                <span
                  key={item}
                  className="px-3 py-1 text-xs rounded-full border bg-white text-gray-600"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="flex justify-center">
            <Image
              src="/images/analytics/analytics-orbit.png"
              alt="Analytics Orbit"
              width={400}
              height={400}
            />
          </div>
        </div>

        {/* LOWER CARDS */}
        <div className="mt-12 grid md:grid-cols-2 gap-8">
          <Card
            title="Surface key metrics instantly"
            description="Run service health checks and improve customer support."
            ctaText="Get started for free"
            imageSrc="/images/analytics/instant-illustration.png"
            layout="stacked"
          />
          <Card
            title="See hotspots when they happen"
            description="Understand traffic peaks and plan team resources better."
            ctaText="Get started for free"
            imageSrc="/images/analytics/hotspots-illustration.png"
            layout="stacked"
          />
        </div>
      </section>

      {/* PERSONALIZE */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <p className="inline-flex items-center gap-1 text-sm text-gray-500 border rounded-full px-3 py-1">
            <Palette size={14} />
            Personalize
          </p>

          <h2 className="mt-4 text-3xl md:text-4xl font-semibold text-gray-900">
            Personalize analytics for real clarity
          </h2>

          <Image
            src="/images/analytics/Showcase-import-metrics.png"
            alt="Metrics showcase"
            width={1000}
            height={400}
            className="mx-auto mt-8"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card
            title="Timezone-based analytics"
            description="See data aligned with your local working hours."
            ctaText="Get started for free"
            imageSrc="/images/analytics/CSAT-1.png"
            layout="stacked"
          />
          <Card
            title="Pick the right formula"
            description="Use averages, minimums, or moving averages."
            ctaText="Get started for free"
            imageSrc="/images/analytics/CSAT-2.png"
            layout="stacked"
          />
        </div>
      </section>

      {/* ENGAGE */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <p className="inline-flex items-center gap-1 text-sm text-gray-500 border rounded-full px-3 py-1">
            <Plane size={14} />
            Engage
          </p>

          <h2 className="mt-4 text-3xl md:text-4xl font-semibold text-gray-900">
            Give teams clear AI chatbot performance reports
          </h2>
        </div>

        <div className="space-y-10">
          <Card
            title="The cockpit every team deserves"
            titleClassName="text-3xl md:text-4xl"
            description="Build and share dashboards for every department."
            ctaText="Use Crisp for free"
            imageSrc="/images/analytics/engage-cockpit-illustration.png"
            layout="stacked"
          />

          <Card
            title="Export and share dashboards"
            titleClassName="text-3xl md:text-4xl"
            description="Turn analytics into impactful reports instantly."
            ctaText="Use Crisp for free"
            imageSrc="/images/analytics/engage-export-illustration.png"
            layout="stacked"
          />
        </div>
      </section>
    </div>
  );
}
