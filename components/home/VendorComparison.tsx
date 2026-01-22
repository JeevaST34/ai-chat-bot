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

export function VendorComparison() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-300 mx-auto bg-[#F7F9FC] rounded-[18px] border border-[#E6ECF5] px-12 py-20">
        {/* HEADER */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-16 mb-20">
          <div className="max-w-xl">
            <h2 className="text-[28px] md:text-[40px] leading-tight font-semibold text-[#1F2B4D] mb-6">
              Still doubting?
              <br />
              Here are the top 5 leading vendors compared
            </h2>

            <p className="text-[15px] leading-relaxed text-[#6B7AAE]">
              Compare the top 5 leading customer support platform and see how
              they embed AI in their platform. Looking for more? There's a
              dedicated guide for each of the vendor shown below.
            </p>
          </div>

          <div className="hidden md:block">
            <Image
              src="/images/articles/comparison-illustration.png"
              alt="Comparison Illustration"
              width={260}
              height={220}
              priority
            />
          </div>
        </div>

        {/* TABLE */}
        <div className="relative overflow-x-auto">
          <table className="min-w-225 w-full border-collapse text-center">
            {/* TABLE HEADER */}
            <thead>
              <tr className="border-b border-[#E6ECF5]">
                <th className="py-6 text-left text-sm font-medium text-[#6B7AAE]" />
                {vendors.map((vendor) => (
                  <th
                    key={vendor}
                    className="py-6 text-[14px] font-medium text-[#1F2B4D]"
                  >
                    {vendor}
                  </th>
                ))}
              </tr>
            </thead>

            {/* TABLE BODY */}
            <tbody>
              {VendorComparisonFeatures.map((row) => (
                <tr
                  key={row.name}
                  className="border-b border-[#E6ECF5] last:border-none"
                >
                  <td className="py-6 text-left text-[14px] font-medium text-[#6B7AAE]">
                    {row.name}
                  </td>

                  {row.values.map((value, i) => (
                    <td key={i} className="py-6">
                      {value ? (
                        <span className="inline-flex w-6.5 h-6.5 rounded-full bg-[#2563EB] items-center justify-center">
                          <Check
                            size={15}
                            className="text-white stroke-[2.5]"
                          />
                        </span>
                      ) : (
                        <span className="inline-flex w-6.5 h-6.5 rounded-full bg-[#E6ECF5] items-center justify-center">
                          <X
                            size={14}
                            className="text-[#9AA6C8] stroke-[2.5]"
                          />
                        </span>
                      )}
                    </td>
                  ))}
                </tr>
              ))}

              {/* CTA ROW */}
              <tr>
                <td className="py-6 text-left text-[14px] font-medium text-[#6B7AAE]">
                  See detailed comparison
                </td>

                {vendors.map((_, i) => (
                  <td
                    key={i}
                    className="py-6 text-[14px] font-medium text-[#2563EB] hover:underline cursor-pointer"
                  >
                    Learn more
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
