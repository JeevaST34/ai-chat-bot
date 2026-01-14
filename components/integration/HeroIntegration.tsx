function HeroIntegration() {
  return (
    <section className="bg-linear-to-b from-[#EEF4FF] via-[#F3F7FF] to-[#FFF5F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          
          {/* Text Content */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Landbot Integrations
            </h2>
            <p className="text-gray-500 leading-relaxed sm:leading-8 max-w-md mx-auto md:mx-0">
              Enhance your conversational experiences by connecting your
              chatbots with your favourite apps using our easy-to-set-up
              integrations.
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

export default HeroIntegration;
