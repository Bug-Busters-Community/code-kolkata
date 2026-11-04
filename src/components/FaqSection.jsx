import { useState } from "react";
import event from "../config/event";
import { Icon } from "./ui/Icon";
import SectionHeading from "./ui/SectionHeading";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="section section-rule" aria-labelledby="faq-title">
      <div className="shell grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <SectionHeading
          id="faq-title"
          eyebrow="FAQ"
          title={
            <>
              Questions,
              <br />
              answered.
            </>
          }
          description="Everything participants ask before hitting register. Still stuck? Ping the community handle and a human will reply."
        />

        <div className="divide-y divide-line border-y border-line">
          {event.faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const panelId = `faq-panel-${index}`;
            const buttonId = `faq-button-${index}`;

            return (
              <div key={faq.q}>
                <h3>
                  <button
                    type="button"
                    id={buttonId}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="flex min-h-16 w-full items-center justify-between gap-4 py-4 text-left transition-colors hover:text-primary"
                  >
                    <span className="flex items-start gap-3">
                      <span className="mt-1 font-pixel text-[0.5rem] text-primary">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="text-base font-medium leading-snug text-text">{faq.q}</span>
                    </span>
                    <span
                      className={`mt-1 flex-none text-muted transition-transform duration-300 ${
                        isOpen ? "rotate-180 text-primary" : ""
                      }`}
                    >
                      <Icon name="chevronDown" size={18} />
                    </span>
                  </button>
                </h3>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  hidden={!isOpen}
                  className="pb-5 pl-8 pr-8 text-sm leading-relaxed text-muted"
                >
                  {faq.a}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
