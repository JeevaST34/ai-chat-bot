import React from "react";

export function WebsiteBuilders() {
  const data = [
    { title: "Webflow", img: "/images/integration/webflow.png" },
    { title: "WordPress", img: "/images/integration/wordpress.png" },
    { title: "Shopify", img: "/images/integration/shopify.png" },
    { title: "Carrd", img: "/images/integration/carrd.png" },
  ];

  return (
    <>
      <section className="bg-[#F9F9FF] py-10">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-semibold text-gray-900 mb-2">
            Website Builders & CMS
          </h2>
          <p className="text-gray-900 mb-10 font-light text-xl">
            Launch a chatbot on your website in minutes using your favourite
            website builder and content management system.
          </p>
        </div>
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6">
          {data.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-xl py-10 flex flex-col items-center shadow-sm hover:shadow-md transition"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-20 h-20 object-contain mb-5"
              />

              <h3 className="font-medium text-gray-900 mb-1 text-xl">
                {item.title}
              </h3>

              <button className="text-gray-400 text-sm hover:underline cursor-pointer ">
                View Integration →
              </button>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

