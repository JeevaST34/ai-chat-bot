"use client";

import React, { useState } from "react";
import { plans } from "@/lib/Constants";
import { Check } from "lucide-react";

export function PricingSection() {
  const [billing, setBilling] = useState<"yearly" | "monthly">("yearly");

  return (
    <section className="w-full py-20 px-6 bg-gray-50">
      {/* HEADER */}
      <div className="text-center mb-12 max-w-2xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900">
          Simple pricing for every stage of your AI chatbot journey
        </h2>
        <p className="text-gray-600 mt-3">
          Start free, scale as conversations grow, and automate support with
          confidence.
        </p>
      </div>

      {/* BILLING TOGGLE */}
      <div className="flex justify-center mb-4">
        <div className="bg-white shadow rounded-full p-1 flex gap-1">
          {["yearly", "monthly"].map((type) => (
            <button
              key={type}
              onClick={() => setBilling(type as any)}
              className={`px-6 py-2 rounded-full text-sm font-medium cursor-pointer transition ${
                billing === type
                  ? "bg-blue-600 text-white"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              {type === "yearly" ? "Yearly (Save 20%)" : "Monthly"}
            </button>
          ))}
        </div>
      </div>
      <div className="flex justify-center mb-12">
        <p className="text-sm text-gray-600 ">Cancel anytime. No hidden fees</p>
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
              <span className="text-sm text-gray-500"> / month</span>
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
              className={`cursor-pointer mt-auto w-full py-3 rounded-xl font-semibold transition ${
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

      {/* ENTERPRISE */}
      <div className="max-w-7xl mx-auto mt-20 px-6">
        <div className="relative enterprise-card bg-white">
          <div className="grid md:grid-cols-2 lg:enterprise-grid items-center">
            {/* IMAGE */}
            <div className="enterprise-soft-bg md:rounded-e-sm rounded-3xl p-8 flex justify-center">
              <img
                src="/images/pricing/Social.png"
                alt="Enterprise Network"
                className="max-w-full object-contain"
              />
            </div>

            {/* CONTENT */}
            <div className="p-8 md:p-12">
              <h3 className="text-lg font-medium enterprise-accent mb-3">
                Enterprise
              </h3>

              <p className="text-sm leading-relaxed text-slate-600 mb-8 max-w-xl">
                The global use, no limit, no border of scale. Make your business
                cloud operate 24/7.
              </p>

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
                    <span className="enterprise-check rounded-full flex items-center justify-center shrink-0">
                      <Check
                        size={11}
                        strokeWidth={2}
                        className="text-blue-600"
                      />
                    </span>
                    <span
                      className={`text-sm leading-relaxed ${
                        i === 0
                          ? "font-semibold text-slate-900"
                          : "text-slate-800"
                      }`}
                    >
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="enterprise-soft-bg rounded-xl p-4 inline-flex gap-4 flex-wrap">
                <button className="cursor-pointer px-6 py-2 rounded-lg border border-slate-300 text-sm font-medium text-slate-800 hover:bg-white transition">
                  Let’s talk
                </button>
                <button className="cursor-pointer px-6 py-2 rounded-lg bg-blue-600 text-sm font-medium text-white hover:bg-blue-700 transition">
                  Request Enterprise Demo
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
