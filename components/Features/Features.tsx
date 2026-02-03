"use client";

import { Check, ArrowUpRight } from "lucide-react";

import { otherFeatures } from "@/lib/Constants";
import Image from "next/image";
import { primaryFeatures } from "@/lib/Constants";
/* ---------------------------------- */
/* DATA CONFIG */
/* ---------------------------------- */

const tabs = ["Customer Support Team", "Agency", "E-commerce Business"];

const bulletPoints = [
  "Intelligent Conversational AI",
  "Multi-Seed Responses",
  "Learning from Conversations",
];

/* ---------------------------------- */
/* COMPONENT */
/* ---------------------------------- */

export function Features() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-8 py-16">
        {/* Header */}
        <div className="text-center mb-14">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            AI Chatbot solutions for outstanding <br /> customer support
          </h1>
          <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
            Automate conversations, resolve issues faster, and scale support
            with AI-powered chatbots.
          </p>
        </div>

        {/* Tabs */}
        <p className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight text-center mb-16">
          Core AI Chatbot Capabilities
        </p>

        {/* Hero Section */}
        <div className="grid sm:grid-cols-2 gap-8 md:gap-16 mb-20">
          <div>
            <h2 className="md:text-4xl text-2xl font-semibold text-gray-900 leading-tight sm:text-left text-center">
              Customer Support <br /> All Rounders
            </h2>

            <div className="flex gap-3 mt-6 sm:justify-start justify-center">
              <button className="px-6 py-2.5 bg-blue-600 text-white rounded-lg text-sm cursor-pointer hover:bg-blue-700">
                Pricing
              </button>
              <button className="px-6 py-2.5 border rounded-lg text-sm text-gray-700 cursor-pointer hover:bg-gray-50Free">
                View Plans
              </button>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-4">
              Use AI to engage customers instantly, understand intent, and route
              conversations automatically.
            </h3>

            <div className="space-y-3 mb-6">
              {bulletPoints.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <span className="w-5 h-5 flex items-center justify-center rounded-full bg-blue-100">
                    <Check className="w-3 h-3 text-blue-600" />
                  </span>
                  <span className="text-sm text-gray-700">{item}</span>
                </div>
              ))}
            </div>

            <p className="text-sm text-gray-600">
              Ideal for teams needing a smart support system with Helpdesk,
              Messengers and AI in one platform.
            </p>
          </div>
        </div>

        {/* Primary Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
          {primaryFeatures.map((feature) => {
            const Icon = feature.icon;

            return (
              <div key={feature.title} className="group cursor-pointer">
                <div
                  className={`
            relative rounded-[28px] p-5
            shadow-[0_10px_45px_rgba(0,0,0,0.08)]
            transition-all duration-300
            group-hover:-translate-y-1
            ${feature.cardBg}
          `}
                >
                  {/* Arrow */}
                  <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white border border-gray-200 flex items-center justify-center">
                    <ArrowUpRight className="w-4 h-4 text-gray-600" />
                  </div>

                  {/* Icon */}
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${feature.iconBg}`}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-[17px] font-semibold text-gray-900 mb-1">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">
                    {feature.description}
                  </p>

                  {/* Preview container */}
                  <div className={`rounded-2xl p-4 ${feature.previewBg}`}>
                    <div className="bg-white rounded-xl shadow-sm p-3">
                      {/* Header */}
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs font-semibold text-gray-700">
                          Inbox
                        </span>
                        <span className="text-xs text-gray-400">
                          All channels
                        </span>
                      </div>

                      {/* Chat list */}
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 rounded-lg px-2 py-1.5 hover:bg-gray-50">
                          <div className="w-7 h-7 rounded-full bg-gray-200" />
                          <div className="flex-1">
                            <p className="text-xs font-medium text-gray-700">
                              Roydn Aminoff
                            </p>
                            <p className="text-[11px] text-gray-400 truncate">
                              Please provide more info…
                            </p>
                          </div>
                          <span className="text-[10px] text-gray-400">2h</span>
                        </div>

                        <div className="flex items-center gap-2 rounded-lg px-2 py-1.5 hover:bg-gray-50">
                          <div className="w-7 h-7 rounded-full bg-gray-200" />
                          <div className="flex-1">
                            <p className="text-xs font-medium text-gray-700">
                              Angel Dodds
                            </p>
                            <p className="text-[11px] text-gray-400 truncate">
                              Thanks for the update
                            </p>
                          </div>
                          <span className="text-[10px] text-gray-400">5h</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Other Features */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900">
            Advanced AI Chatbot features
          </h2>
          <p className="text-sm text-gray-500 mt-2">
            Extra capabilities to streamline your workflows
          </p>
        </div>

        <div className="grid lg:grid-cols-4 sm:grid-cols-2  gap-6">
          {otherFeatures.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group cursor-pointer rounded-xl border border-gray-200 bg-white transition hover:shadow-[0_10px_30px_rgba(0,0,0,0.06)] overflow-hidden"
              >
                {/* Content (WITH padding) */}
                <div className="p-4">
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className={`w-9 h-9 rounded-lg flex items-center justify-center ${item.iconBg}`}
                    >
                      <Icon
                        className={`w-5 h-5 ${
                          item.dark ? "text-white" : "text-white"
                        }`}
                      />
                    </div>

                    <h4 className="text-sm font-semibold text-gray-900">
                      {item.title}
                    </h4>
                  </div>
                </div>

                {/* Image Preview (NO padding) */}
                <div className={`p-2 ${item.gradient}`}>
                  <div className={`relative h-50`}>
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={1200}
                      height={400}
                      className="absolute inset-0 mx-auto h-full object-fill"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
