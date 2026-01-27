import { ArrowRight, CheckCircle } from "lucide-react";
import ContextFeature from "./ContextFeature";
import Image from "next/image";
import { ContextFeatures } from "@/lib/Constants";

export default function Context() {
  return (
    <div className="w-full min-h-screen ">
      {/* ================= HERO ================= */}
      <section className="bg-[linear-gradient(180deg,#EEF4FF_0%,#F8FAFF_45%,#FDF2F2_85%,white_65%)]">
        <div className="max-w-7xl mx-auto px-6 pt-20 text-center">
          <p className="text-sm font-medium text-blue-600">
            AI-Powered Platform
          </p>

          <h1 className="mt-4 text-4xl font-bold text-gray-900">
            Context Engineering
          </h1>

          <p className="mt-4 max-w-3xl mx-auto text-gray-500">
            The art and science of shaping intelligent AI conversations —
            designing what the model knows, remembers, and prioritizes at every
            interaction to deliver human-like understanding.
          </p>

          <div className="mt-20 rounded-2xl p-6">
            <Image
              src="/images/context/context-hero.png"
              alt="Context engineering "
              width={1200}
              height={600}
              className="w-full rounded-xl"
            />
          </div>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className=" max-w-7xl mx-auto px-6 space-y-10  ">
          {ContextFeatures.map((item, index) => (
            <div
              key={index}
              className={`grid md:grid-cols-2 gap-12 items-center bg-blue-50 border border-blue-200 rounded-2xl p-10 ${
                index % 2 !== 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Text Block */}
              <div className={`${index % 2 !== 0 ? "md:order-2" : ""}`}>
                <h3 className="text-3xl font-semibold text-gray-900 mb-4">
                  {item.title}
                </h3>

                <p className="text-gray-600 mb-6 max-w-xl line-clamp-3">
                  {item.description}
                </p>

                <ul className="space-y-3 mb-6">
                  {item.points.map((point, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-amber-400" />
                      <span className="text-gray-700">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Image Block */}
              <div className={`${index % 2 !== 0 ? "md:order-1" : ""}`}>
                <Image
                  src={item.image}
                  alt={item.title}
                  width={600}
                  height={400}
                  className="relative z-10 w-full rounded-2xl "
                />
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* ================= CORE CONTEXT FEATURES (NEW) ================= */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            {/* Left */}
            <div>
              <h2 className="text-4xl font-bold text-gray-900">
                Core Context <br /> Engineering Features
              </h2>

              <p className="mt-4 text-gray-600 max-w-lg">
                Advanced tools and techniques that transform basic chatbots into
                intelligent conversational partners[citation:5]
              </p>

              <div className="mt-10 space-y-5 rounded-2xl bg-blue-50 p-5 shadow-sm">
                <ContextFeature
                  icon="brain"
                  title="Memory & Retrieval"
                  desc="Embeddings retrieve only relevant knowledge instead of flooding the model with data, ensuring faster, precise answers[citation:1]."
                  color="text-pink-500"
                  isLast={false}
                />
                <ContextFeature
                  icon="sliders"
                  title="Adaptive Context"
                  desc="Chatbots adapt continuously using personalization signals and live data streams without retraining[citation:9]."
                  color=" text-violet-600"
                  isLast={false}
                />
                <ContextFeature
                  icon="zap"
                  title="Real-Time Optimization"
                  desc="Dynamic context adjustment based on conversation flow, user feedback, and performance metrics[citation:5]."
                  color="text-orange-500"
                  isLast={true}
                />
              </div>
            </div>

            {/* Right */}
            <div className="relative">
              <Image
                src="/images/context/context-profile.png"
                alt="AI Context"
                width={600}
                height={400}
                className=" rounded-3xl lg:h-full sm:h-100 mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-white">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8 items-stretch">
            {/* LEFT CARD */}
            <div className="flex items-center justify-center relative rounded-2xl bg-[#EDF4FF] p-10">
              <div className="absolute inset-0 rounded-2xl bg-[radial-gradient(circle_at_center,#93C5FD_0%,transparent_70%)] " />

              <Image
                src="/images/context/context-core-image.png"
                alt="Chatbot UI"
                width={400}
                height={300}
                className="w-full max-w-xs z-1"
              />
            </div>

            {/* RIGHT CARD */}
            <div className="relative flex items-center rounded-2xl bg-[#0B3F8C] px-12 py-10 text-white">
              {/* Text Content */}
              <div className="max-w-md">
                <h3 className="text-xl font-semibold">
                  Design Smarter AI Conversations
                </h3>

                <p className="mt-4 text-sm text-blue-100 leading-relaxed">
                  Context engineering transforms basic chatbots into
                  intelligent, reliable conversational systems that understand,
                  remember, and adapt — delivering enterprise-grade AI
                  experiences[citation:7].
                </p>

                <button className="mt-6 inline-flex items-center gap-2 rounded-md bg-white hover:bg-white/94 px-5 py-2.5 text-sm font-medium text-[#0B3F8C] cursor-pointer">
                  Explore our AI Chatbot Platform
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* Illustration */}
              <div className=" ms-auto mb-auto w-50 hidden lg:block">
                <Image
                  src="/images/context/context-illustration.png"
                  alt="Illustration"
                  width={200}
                  height={150}
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
