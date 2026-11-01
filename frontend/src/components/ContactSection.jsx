import { useState } from "react";
import siteConfig from "../data/siteConfig";
import { IconInstagram, IconSend } from "./Icons";
import SectionHeading from "./SectionHeading";

export default function ContactSection() {
  const [contactForm, setContactForm] = useState({ name: "", email: "", message: "" });
  const [contactStatus, setContactStatus] = useState("");

  const handleContactSubmit = (e) => {
    e.preventDefault();
    if (!contactForm.name || !contactForm.email || !contactForm.message) {
      setContactStatus("Please complete all required fields.");
      return;
    }
    // Explicit demo message explaining no backend is connected
    setContactStatus("Demo mode: Input validated, but messages cannot be sent until a backend service is connected.");
    setContactForm({ name: "", email: "", message: "" });
  };

  return (
    <section className="py-20 bg-[#02080a] border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Contact Us" title="Get In Touch" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="p-8 rounded-2xl bg-slate-950 border border-slate-800 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Official Channels</h3>
              <p className="text-sm text-gray-400 mb-6">
                Have questions regarding participation, partnerships, or event updates? Reach out via our official community handle.
              </p>

              <div className="space-y-4">
                <a
                  href={siteConfig.instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg bg-slate-900 hover:border-[#19d3c5] border border-transparent transition-colors text-gray-300"
                >
                  <IconInstagram />
                  <span>{siteConfig.instagramHandle}</span>
                </a>
              </div>
            </div>
          </div>

          <form onSubmit={handleContactSubmit} className="p-8 rounded-2xl bg-slate-950 border border-slate-800 space-y-4">
            <div>
              <label className="block text-xs uppercase font-bold text-gray-400 mb-1">Name</label>
              <input
                type="text"
                value={contactForm.name}
                onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                className="w-full px-4 py-2.5 rounded-lg bg-slate-900 border border-slate-800 text-white focus:outline-none focus:border-[#19d3c5]"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label className="block text-xs uppercase font-bold text-gray-400 mb-1">Email</label>
              <input
                type="email"
                value={contactForm.email}
                onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                className="w-full px-4 py-2.5 rounded-lg bg-slate-900 border border-slate-800 text-white focus:outline-none focus:border-[#19d3c5]"
                placeholder="your.email@example.com"
              />
            </div>
            <div>
              <label className="block text-xs uppercase font-bold text-gray-400 mb-1">Message</label>
              <textarea
                rows={4}
                value={contactForm.message}
                onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                className="w-full px-4 py-2.5 rounded-lg bg-slate-900 border border-slate-800 text-white focus:outline-none focus:border-[#19d3c5]"
                placeholder="How can we help you?"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-[#19d3c5] text-[#02080a] font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-[#19d3c5]/90 transition-colors focus:outline-none focus:ring-2 focus:ring-[#19d3c5]"
            >
              <IconSend /> Send Message
            </button>
            {contactStatus && <p className="text-xs text-[#19d3c5] mt-2 text-center">{contactStatus}</p>}
          </form>
        </div>
      </div>
    </section>
  );
}
