"use client";

import React, { useState } from "react";
import { plans } from "@/lib/Constants";
import { Check } from "lucide-react";

export function PricingSection() {
  const [billing, setBilling] = useState("yearly");

  const enterprise = {
    name: "Enterprise",
    price: "Talk to Sales",
    features: [
      "Custom AI Models",
      "Dedicated infrastructure",
      "99.9% SLA & SSO",
      "Unlimited automation workflows",
    ],
    button: "Contact Sales",
  };

  return (
    <section className="w-full py-20 px-6 bg-gray-50">
      {/* HEADER */}
      <div className="text-center mb-12 max-w-2xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900">
          Plans that scale with your AI chatbot needs
        </h2>
        <p className="text-gray-600 mt-3">
          Choose the right plan for your business and automate support at scale.
        </p>
      </div>

      {/* BILLING TOGGLE */}
      <div className="flex justify-center mb-12">
        <div className="bg-white shadow rounded-full p-1 flex gap-1">
          <button
            onClick={() => setBilling("yearly")}
            className={`px-6 py-2 rounded-full text-sm font-medium ${
              billing === "yearly"
                ? "bg-blue-600 text-white"
                : "text-gray-700 hover:bg-gray-100"
            }`}
          >
            Yearly (Save 20%)
          </button>
          <button
            onClick={() => setBilling("monthly")}
            className={`px-6 py-2 rounded-full text-sm font-medium ${
              billing === "monthly"
                ? "bg-blue-600 text-white"
                : "text-gray-700 hover:bg-gray-100"
            }`}
          >
            Monthly
          </button>
        </div>
      </div>

      {/* PRICING GRID */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`rounded-2xl border p-8 shadow-lg flex flex-col ${
              plan.highlighted
                ? "border-blue-600 bg-blue-50 shadow-xl"
                : "border-gray-200 bg-white"
            }`}
          >
            {plan.tag && (
              <span className="px-3 py-1 text-xs font-semibold bg-blue-600 text-white rounded-full mb-3 self-start">
                {plan.tag}
              </span>
            )}

            <h3 className="text-xl font-bold text-gray-900">{plan.name}</h3>

            <p className="mt-4 text-4xl font-bold text-gray-900">
              {billing === "yearly"
                ? plan.price.yearly === 0
                  ? "Free"
                  : `$${plan.price.yearly}`
                : plan.price.monthly === 0
                  ? "Free"
                  : `$${plan.price.monthly}`}
              <span className="text-sm text-gray-500">/month</span>
            </p>

            <ul className="mt-6 space-y-3 text-gray-700 mb-5">
              {plan.features.map((f, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-blue-600 text-xl leading-none">•</span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>

            <button
              className={`mt-auto w-full py-3 rounded-xl font-semibold transition ${
                plan.highlighted
                  ? "bg-blue-600 text-white hover:bg-blue-700"
                  : "bg-gray-900 text-white hover:bg-gray-800"
              }`}
            >
              {plan.button || "Get Started"}
            </button>
          </div>
        ))}
      </div>
      {/* ENTERPRISE SECTION - MINIMAL GRADIENT */}
      <div className="max-w-7xl mx-auto mt-20 px-4 sm:px-6">
        <div className="relative rounded-[26px] border-[3px] border-[#2563FF] bg-white">
          {/* Top-right arrow */}
          <div className="absolute top-5 right-5 w-9 h-9 rounded-full border border-[#E5EAF3] flex items-center justify-center text-[#6B7AAE] text-sm">
            ↗
          </div>

          <div className="grid lg:grid-cols-[1.15fr_1fr] md:grid-cols-2 items-center">
            {/* LEFT VISUAL CARD */}
            <div className="bg-[#F6F7F9] rounded-[22px] p-6 md:p-8 flex items-center justify-center">
              <img
                src="/images/pricing/Social.png"
                alt="Enterprise Network"
                className="max-w-full object-contain"
              />
            </div>

            {/* RIGHT CONTENT */}
            <div className="p-8 md:p-12 overflow-hidden">
              {/* TITLE */}
              <h3 className="text-[19px] font-medium text-[#2563FF] mb-3">
                Enterprise
              </h3>

              {/* DESCRIPTION */}
              <p className="text-[15px] leading-[1.7] text-[#4F5D8C] mb-8 max-w-105">
                The Global use, no limit, no border of scale. Make your business
                cloud operate 24/7.
              </p>

              {/* FEATURES */}
              <ul className="space-y-3 mb-10">
                {[
                  "Got Everything from Business",
                  "Custom AI Training Model",
                  "SAML SSO",
                  "Customized AI Model",
                  "24/7 Support",
                  "Specific solution for Enterprise",
                  "99.9% SLA commitment",
                  "Dedicated infrastructure",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-0.5 w-4.5 h-4.5 rounded-full border border-[#2563FF] flex items-center justify-center shrink-0">
                      <Check
                        size={11}
                        strokeWidth={2}
                        className="text-[#2563FF]"
                      />
                    </span>

                    <span
                      className={`text-[15px] leading-[1.6] ${
                        i === 0
                          ? "font-semibold text-[#1F2B4D]"
                          : "font-normal text-[#1F2B4D]"
                      }`}
                    >
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA CONTAINER */}
              <div className="bg-[#F6F7F9] rounded-[14px] p-4 inline-flex gap-4 flex-wrap">
                <button className="px-6 py-2.25 rounded-lg border border-[#C9D2E3] text-[14px] font-medium text-[#1F2B4D] hover:bg-white transition">
                  Let’s talk
                </button>

                <button className="px-6 py-2.25 rounded-lg bg-[#2563FF] text-[14px] font-medium text-white hover:bg-blue-600 transition">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
