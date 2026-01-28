import { integrations } from "@/lib/Constants";

export function NativeIntegration() {
  return (
    <section className="integration-native-bg py-10">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">
          Built-in integrations for your AI chatbot
        </h2>

        <p className="text-gray-500 mb-10 text-lg leading-relaxed sm:leading-8">
          Set up powerful AI chatbot integrations in minutes — no coding
          required.
        </p>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {integrations.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition flex flex-col"
            >
              <img
                src={item.icon}
                alt={item.title}
                className="w-8 h-8 mb-4 object-contain"
              />

              <h3 className="font-semibold text-gray-900 mb-2 text-xl">
                {item.title}
              </h3>

              <p className="text-gray-600 mb-4 leading-relaxed">{item.desc}</p>

              <button className="text-gray-400 text-sm hover:underline mt-auto mr-auto cursor-pointer">
                View integration →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
