import Image from "next/image";

export const UploadSection = () => {
  return (
    <div className=" bg-white w-full flex flex-col max-w-7xl mx-auto md:flex-row items-center md:items-start justify-start gap-4 md:gap-6 lg:gap-8 px-6 md:px-16 py-6 md:py-16">
      {/* LEFT SIDE CONTENT */}
      <div className="w-full md:w-[48%]">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
          Intelligent Upload
        </h2>

        <p className="text-gray-600 text-lg mt-2">
          Smart document processing with AI analysis
        </p>

        {/* Upload Box */}
        <div className="mt-8 bg-[#1677FF] text-white p-10 md:p-12 rounded-2xl shadow-lg w-full cursor-pointer transition hover:opacity-90">
          <div className="flex flex-col items-center justify-center">
            <div className="text-4xl mb-4">⬆️</div>

            <p className="text-xl font-semibold text-center">
              Drop files or click to upload
            </p>

            <p className="text-white/80 mt-2 text-sm text-center">
              Supports 50+ file formats with instant AI analysis
            </p>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE IMAGE */}
      <div className="w-full md:w-[48%] flex justify-center md:justify-start mt-6 md:mt-0">
        <Image
          src="/images/knowledgeBase/upload.png"
          alt="Document upload preview"
          width={580}
          height={380}
          className="object-contain"
          priority
        />
      </div>
    </div>
  );
};
