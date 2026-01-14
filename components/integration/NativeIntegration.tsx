import { integrations } from "@/lib/Constants";

export default function NativeIntegration() {

  return (
    <section className="bg-[#F9F9FF] py-10">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-semibold text-gray-900 mb-2">
          Native Integrations
        </h2>
        <p className="text-gray-900 mb-10 text-xl font-light">
          Connect Landbot to the tools you love using our native integrations
          and start exchanging data easily, without coding.
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

              <p className="text-medium text-gray-600 mb-4 leading-relaxed">
                {item.desc}
              </p>

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
