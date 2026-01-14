import { VendorComparisonFeatures } from "@/lib/Constants";
import { Check, X } from "lucide-react";
import Image from "next/image";

const vendors = [
  "Intercom (Fin AI)",
  "FreshDesk (Freddy AI)",
  "Tidio (Lyro AI)",
  "Zendesk",
  "HelpScout",
  "Crisp",
];


export  function VendorComparison() {
  return (
    <>
      <section className="bg-gray-100 py-24">
        <div className="max-w-7xl mx-auto bg-white rounded-md shadow-xl px-10 py-20">
          {/* HEADER */}
          <div className="md:flex gap-10 items-center mb-20">
            <div>
              <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-6">
                Still doubting? <br />
                Here are the top 5 leading vendors compared
              </h2>
              <p className="text-medium text-gray-600 max-w-xl">
                Compare the top 5 leading customer support platform and see how
                they embed AI in their platform. Looking for more? There's a
                dedicated guide for each of the vendor shown below.
              </p>
            </div>

            <div className="md:flex hidden justify-end">
              <Image src="/images/articles/comparison-illustration.png" alt="Comparison Illustration" width={288} height={180} />
            </div>
          </div>

          {/* TABLE */}
          <div className="relative overflow-x-auto">
            <div className="min-w-225">
              <table className="w-full text-sm text-center">
                <thead>
                  <tr className="border-b text-[#1f2b4d]">
                    <th className="text-left py-5"> </th>
                    {vendors.map((v) => (
                      <th key={v} className="py-5 font-medium">
                        {v}
                      </th>
                    ))}
                  </tr>
                </thead>

                <tbody>
                  {VendorComparisonFeatures.map((row) => (
                    <tr key={row.name} className="border-b last:border-none">
                      <td className="text-left py-6 text-[#5b6b94] font-medium">
                        {row.name}
                      </td>

                      {row.values.map((v, i) => (
                        <td key={i}>
                          {v ? (
                            <span className="inline-flex w-7 h-7 bg-blue-600 rounded-full items-center justify-center">
                              <Check size={16} className="text-white" />
                            </span>
                          ) : (
                            <span className="inline-flex w-7 h-7 bg-gray-200 rounded-full items-center justify-center">
                              <X size={14} className="text-gray-400" />
                            </span>
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}

                  {/* CTA ROW */}
                  <tr>
                    <td className="text-left py-6 text-[#5b6b94] font-medium">
                      See detailed comparison
                    </td>
                    {vendors.map((_, i) => (
                      <td
                        key={i}
                        className="text-blue-600 font-medium cursor-pointer"
                      >
                        Learn more
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
