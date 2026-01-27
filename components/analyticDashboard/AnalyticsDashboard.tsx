import React from "react";
import { Eye, Palette, Plane } from "lucide-react";
import Image from "next/image";
import { Card } from "@/components/common/Card";

export default function AnalyticsDashboard() {
  return (
    <div className="w-full min-h-screen  bg-white">
      <section className="bg-[linear-gradient(180deg,#EEF4FF_0%,#F8FAFF_45%,#FDF2F2_85%,white_65%)]">
        <div className="max-w-7xl mx-auto px-6 pt-20 text-center">
          <p className="text-sm font-medium text-blue-600">
            AI-Powered Platform
          </p>

          <h1 className="mt-4 text-4xl font-bold text-gray-900">
            Transform Chatbot Data into Actionable Insights
          </h1>

          <p className="mt-4 max-w-3xl mx-auto text-gray-500">
            Monitor, analyze, and optimize your AI chatbot performance with our
            comprehensive analytics dashboard. Real-time metrics, detailed
            reports, and predictive insights in one platform.
          </p>

          <div className="mt-20 rounded-2xl p-6">
            <Image
              src="/images/analytics/analytic-hero.png"
              alt="Context engineering "
              className="w-full rounded-xl"
              width={400}
              height={400}
            />
          </div>
        </div>
      </section>
      <section className="max-w-7xl mx-auto px-6 py-10">
        {/* HEADER */}
        <div className="text-center mb-12">
          <p className="text-sm text-gray-500 mb-2 mx-auto flex items-center justify-center gap-1 border w-fit px-2 rounded-xl">
            <Eye size={15} />
            Clarity
          </p>
          <h1 className="text-3xl md:text-4xl font-semibold text-gray-900">
            Working smarter starts with seeing clearer
          </h1>
        </div>

        {/* HERO CARD */}
        <div className=" rounded-3xl p-12 grid md:grid-cols-2 gap-12 items-center overflow-hidden bg-[#F7F9FC] bg-[url('/hero-bg-analytic.png')] bg-no-repeat bg-cover bg-center">
          {/* LEFT CONTENT */}
          <div className="relative z-10">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 leading-snug">
              An omnichannel <br />
              analytics to get out <br />
              of the guess work, <br />
              no matter the origin
            </h2>

            <p className="mt-4 text-sm text-gray-500 max-w-md">
              As soon as you start to receive messages, data is collected and
              reported per channels in your dashboards.
            </p>

            {/* CHANNEL TAGS */}
            <div className="mt-6 flex flex-wrap gap-3">
              {[
                "WhatsApp Business",
                "Instagram",
                "Messenger",
                "Email",
                "SMS",
                "Telegram",
                "Twitter (X)",
                "Line",
                "Viber",
                "Chat Widget",
                "Phone",
              ].map((item) => (
                <span
                  key={item}
                  className="px-3 py-1 rounded-full text-xs bg-white border border-gray-200 text-gray-600"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* RIGHT ORBIT */}
          <div className=" flex justify-center">
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
          {/* Card 1 */}
          <Card
            title="Surface key metrics instantly"
            description="Run service health checks and take quick actions that result in customer support improvements."
            ctaText="Get started for free"
            imageSrc="/images/analytics/instant-illustration.png"
            layout="stacked"
          />
          <Card
            title="See hotspots when they happen"
            description="Better understand when support gets flooded to improve your teams performance and plan the right ressources' allocations."
            ctaText="Get started for free"
            imageSrc="/images/analytics/hotspots-illustration.png"
            layout="stacked"
          />
        </div>
      </section>
      <section className="max-w-7xl mx-auto px-6 py-10">
        <div className="text-center mb-12">
          <p className="text-sm text-gray-500 mb-2 mx-auto flex items-center justify-center gap-1 border w-fit px-2 rounded-xl">
            <Palette size={15} />
            Personalize
          </p>
          <h1 className="text-3xl md:text-4xl font-semibold text-gray-900">
            Working smarter starts with seeing clearer
          </h1>
          <div>
            <Image
              src="/images/analytics/Showcase-import-metrics.png"
              alt="Showcase Import Metrics"
              width={1000}
              height={400}
              className="mx-auto mt-8"
            />
          </div>
        </div>
        <div className="mt-12 grid md:grid-cols-2 gap-8">
          {/* Card 1 */}
          <Card
            title="Timezone-based analytics for global clarity"
            description="Personalize your dashboards based on your local hours, not someone else’s.Whether your team is in Paris, New-York, or Hong Kong, you’ll see what truly happens when your day starts."
            ctaText="Get started for free"
            imageSrc="/images/analytics/CSAT-1.png"
            layout="stacked"
          />
          <Card
            title="Pick the formula thattells the real story"
            description="Every dataset can reveal something different. Use averages for team trends,minimums to find outliers, or moving averages to smooth the noise."
            ctaText="Get started for free"
            imageSrc="/images/analytics/CSAT-2.png"
            layout="stacked"
          />
        </div>
        <div className="grid space-y-10 py-10">
          <Card
            title="Visualize your data, your way"
            titleClassName="text-3xl md:text-4xl"
            description="Choose the chart that makes your insights shine, a line to spot trends over a period of time, bar to compare segmented data, treemap to zoom into what matters."
            ctaText="Use Crisp for free"
            imageSrc="/images/analytics/visualize-illustration.png"
            layout="stacked"
          />
          <Card
            title="Zoom in on what truly matters"
            titleClassName="text-3xl md:text-4xl"
            description="Slice your data by segment, country, satisfaction, or team to turn every chart into a decision-making tool. Get straight deep into segmented data to extract the core value of customer data analysis."
            ctaText="Use Crisp for free"
            imageSrc="/images/analytics/zoom-illustration.png"
            layout="stacked"
          />
        </div>
      </section>
      <section className="max-w-7xl mx-auto px-6 py-10">
        <div className="text-center mb-12">
          <p className="text-sm text-gray-500 mb-2 mx-auto flex items-center justify-center gap-1 border w-fit px-2 rounded-xl py-0.5">
            <Plane size={15} />
            Engage
          </p>
          <h1 className="text-3xl md:text-4xl font-semibold text-gray-900">
            Give teams reportings they need to own their impact
          </h1>
        </div>
        <div className="grid space-y-10 py-10">
          <Card
            title="The cockpit every team deserve"
            titleClassName="md:text-4xl text-3xl"
            description="Build and share dashboards tailored to each department. Whether it’s resolution time, first response time per country for the support lead or AI impact for the CEO, everyone’s aligned, engaged, and driving in the same direction."
            ctaText="Use Crisp for free"
            imageSrc="/images/analytics/engage-cockpit-illustration.png"
            layout="stacked"
          />

          <Card
            title="Export any dashboard, and share the story behind the numbers"
            titleClassName="md:text-4xl text-3xl"
            description="Whether it’s for your next team sync, your leadership report, or your product roadmap, one-click exports let you turn support data into real impact, everywhere you need it."
            ctaText="Use Crisp for free"
            imageSrc="/images/analytics/engage-export-illustration.png"
            layout="stacked"
          />
        </div>
      </section>
    </div>
  );
}
