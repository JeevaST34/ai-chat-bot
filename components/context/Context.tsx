import { ArrowRight, CheckCircle } from "lucide-react";
import ContextFeature from "./ContextFeature";
import Image from "next/image";
import { ContextFeatures } from "@/lib/Constants";

export default function Context() {
  return (
    <div className="w-full min-h-screen">
      {/* HERO */}
      <section className="context-hero-gradient ">
        <div className="max-w-7xl mx-auto px-6 pt-20 text-center">
          <p className="text-sm font-medium text-blue-600">
            AI-Powered Platform
          </p>

          <h1 className="mt-4 text-4xl font-bold text-gray-900">
            Context Engineering
          </h1>

          <p className="mt-4 max-w-3xl mx-auto text-gray-500">
            Control how your AI chatbot understands, remembers, and responds
            across conversations.
          </p>

          <div className="mt-20 rounded-2xl p-6">
            <Image
              src="/images/context/context-hero.png"
              alt="Context engineering"
              width={1200}
              height={600}
              className="w-full rounded-xl"
            />
          </div>
        </div>
      </section>

      {/* FEATURE LIST */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 space-y-10">
          {ContextFeatures.map((item, index) => (
            <div
              key={index}
              className={`grid md:grid-cols-2 gap-12 items-center rounded-2xl p-10 border context-feature-bg`}
            >
              <div className={index % 2 ? "md:order-2" : ""}>
                <h3 className="text-3xl font-semibold text-gray-900 mb-4">
                  {item.title}
                </h3>

                <p className="text-gray-600 mb-6 max-w-xl line-clamp-3">
                  {item.description}
                </p>

                <ul className="space-y-3">
                  {item.points.map((point, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-amber-400" />
                      <span className="text-gray-700">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className={index % 2 ? "md:order-1" : ""}>
                <Image
                  src={item.image}
                  alt={item.title}
                  width={600}
                  height={400}
                  className="w-full rounded-2xl"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CORE FEATURES */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900">
                Core Context <br /> Engineering Features
              </h2>

              <p className="mt-4 text-gray-600 max-w-lg">
                Advanced tools that transform chatbots into intelligent systems.
              </p>

              <div className="mt-10 space-y-5 rounded-2xl bg-blue-50 p-5 shadow-sm">
                <ContextFeature
                  icon="brain"
                  title="Memory & Retrieval"
                  desc="Embeddings retrieve only relevant knowledge instead of flooding the model with data, ensuring faster and more precise answers."
                  color="text-pink-500"
                  isLast={false}
                />

                <ContextFeature
                  icon="sliders"
                  title="Adaptive Context"
                  desc="Chatbots adapt continuously using personalization signals and live data streams without retraining."
                  color="text-violet-600"
                  isLast={false}
                />

                <ContextFeature
                  icon="zap"
                  title="Real-Time Optimization"
                  desc="Dynamic context adjustment based on conversation flow, user feedback, and performance metrics."
                  color="text-orange-500"
                  isLast={true}
                />
              </div>
            </div>

            <Image
              src="/images/context/context-profile.png"
              alt="AI Context"
              width={600}
              height={400}
              className="rounded-3xl mx-auto"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid md:grid-cols-[1fr_2fr] gap-8">
            <div className="relative rounded-2xl context-cta-left p-10 flex items-center justify-center">
              <div className="absolute inset-0 rounded-2xl context-radial-bg" />
              <Image
                src="/images/context/context-core-image.png"
                alt="Chatbot UI"
                width={400}
                height={300}
                className="relative z-10 max-w-xs w-full"
              />
            </div>

            <div className="rounded-2xl context-cta-right px-12 py-10 text-white flex items-center">
              <div className="max-w-md">
                <h3 className="text-xl font-semibold">
                  Design Smarter AI Conversations
                </h3>

                <p className="mt-4 text-sm text-blue-100">
                  Context engineering enables reliable, adaptive AI systems.
                </p>

                <button className="mt-6 inline-flex items-center gap-2 rounded-md bg-white px-5 py-2.5 text-sm font-medium text-blue-900 hover:bg-slate-100 transition">
                  Explore our AI Chatbot Platform
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
