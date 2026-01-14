"use client";

import React, { useState } from "react";
import { plans } from "@/lib/Constants";

export  function PricingSection() {
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
      <div className="grid md:grid-cols-4 gap-6 max-w-7xl mx-auto">
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

            <ul className="mt-6 space-y-3 text-gray-700">
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
      <div className="max-w-5xl mx-auto mt-24">
        <div className="rounded-3xl border border-gray-200 bg-linear-to-br from-gray-50 via-white to-gray-100 shadow-xl p-12 md:p-16 relative overflow-hidden">
          {/* Subtle gradient bubbles */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-linear-to-br from-blue-200 to-purple-200 rounded-full opacity-20 blur-2xl"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-linear-to-br from-purple-200 to-pink-200 rounded-full opacity-20 blur-2xl"></div>

          <h3 className="text-4xl font-bold text-gray-900 mb-4">Enterprise</h3>

          <p className="text-lg text-gray-600 mb-10 max-w-2xl leading-relaxed">
            Built for organizations with high security, high volume, and custom
            AI automation needs. Scale globally with dedicated infrastructure
            and guaranteed uptime.
          </p>

          <div className="grid sm:grid-cols-2 gap-6 mb-10">
            {[
              "Custom AI model & training pipeline",
              "Dedicated infrastructure & region control",
              "99.9% SLA with priority engineering support",
              "SSO + RBAC + SOC2-compliant processes",
              "Advanced analytics & workflow automation",
              "Unlimited users and conversations",
            ].map((feature, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-md bg-blue-500/10 flex items-center justify-center">
                  <span className="text-blue-600 text-sm font-bold">✓</span>
                </div>
                <span className="text-gray-800">{feature}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <button className="px-8 py-3 bg-linear-to-r from-blue-600 to-blue-500 text-white rounded-xl font-semibold shadow-sm hover:shadow-md transition">
              Contact Sales
            </button>
            <p className="text-gray-500 text-sm">
              Custom pricing tailored to your automation needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
 