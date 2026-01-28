export function HeroIntegration() {
  return (
    <section className="integration-hero-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Text Content */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              AI Chatbot Integrations
            </h2>
            <p className="text-gray-500 leading-relaxed sm:leading-8 max-w-md mx-auto md:mx-0">
              Connect your AI chatbot with the tools you already use to automate
              workflows and sync customer data.
            </p>
          </div>

          {/* Image */}
          <div className="flex justify-center md:justify-end">
            <img
              src="/images/integration/hero-integration.png"
              alt="Integrations"
              className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
