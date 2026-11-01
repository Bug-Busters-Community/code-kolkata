import { useState } from "react";
import siteConfig from "../data/siteConfig";
import { IconChevronDown } from "./Icons";
import SectionHeading from "./SectionHeading";

export default function FaqSection() {
  const [openFaqIdx, setOpenFaqIdx] = useState(null);

  const toggleFaq = (idx) => {
    setOpenFaqIdx(openFaqIdx === idx ? null : idx);
  };

  return (
    <section className="py-20 bg-[#02080a] border-t border-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Frequently Asked Questions"
          title="Got Questions?"
        />

        <div className="space-y-4">
          {siteConfig.faqs.map((faq, idx) => {
            const isOpen = openFaqIdx === idx;
            return (
              <div key={idx} className="rounded-xl bg-slate-950 border border-slate-800 overflow-hidden">
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left px-6 py-4 flex justify-between items-center text-white font-medium hover:text-[#19d3c5] focus:outline-none focus:ring-2 focus:ring-[#19d3c5]"
                >
                  <span className="text-base">{faq.q}</span>
                  <IconChevronDown isOpen={isOpen} />
                </button>
                {isOpen && (
                  <div className="px-6 pb-4 text-sm text-gray-400 border-t border-slate-900 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
