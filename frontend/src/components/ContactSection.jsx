import { useState } from "react";
import event from "../config/event";
import Button from "./ui/Button";
import Card from "./ui/Card";
import { Icon, SocialIcon } from "./ui/Icon";
import SectionHeading from "./ui/SectionHeading";

const initialForm = { name: "", email: "", message: "" };

export default function ContactSection() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("");

  const handleChange = (field) => (changeEvent) => {
    setForm((current) => ({ ...current, [field]: changeEvent.target.value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
    setStatus("");
  };

  const handleSubmit = (submitEvent) => {
    submitEvent.preventDefault();

    const nextErrors = {};
    if (form.name.trim().length < 2) nextErrors.name = "Tell us who you are.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(form.email.trim())) {
      nextErrors.email = "Use a valid email address.";
    }
    if (form.message.trim().length < 10) nextErrors.message = "Add a little more detail (10+ characters).";

    setErrors(nextErrors);
    const firstInvalid = ["name", "email", "message"].find((field) => nextErrors[field]);
    if (firstInvalid) {
      document.getElementById(`contact-${firstInvalid}`)?.focus();
      return;
    }

    setStatus(
      "Message validated. This preview build has no inbox connected yet — reach us on Instagram in the meantime.",
    );
    setForm(initialForm);
  };

  const fieldClass = (field) =>
    `field ${errors[field] ? "" : form[field] ? "field-ok" : ""}`;

  return (
    <section className="section section-rule" aria-labelledby="contact-title">
      <div className="shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <SectionHeading
            id="contact-title"
            eyebrow="Contact"
            title={
              <>
                Talk to the
                <br />
                <span className="accent">crew.</span>
              </>
            }
            description="Participation questions, accessibility requests, partnership decks — send it through the form or slide into the Instagram DMs."
          />

          <ul className="mt-8 space-y-3">
            {event.socials
              .filter((social) => social.href)
              .map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex min-h-12 items-center gap-3 border border-line bg-ink-2/60 px-4 py-3 transition-colors hover:border-primary hover:text-primary"
                  >
                    <SocialIcon name={social.icon} size={18} />
                    <span className="text-sm">{social.handle}</span>
                    <Icon name="arrowUpRight" size={15} className="ml-auto" />
                  </a>
                </li>
              ))}
            {event.contactEmail ? (
              <li>
                <a
                  href={`mailto:${event.contactEmail}`}
                  className="flex min-h-12 items-center gap-3 border border-line bg-ink-2/60 px-4 py-3 transition-colors hover:border-primary hover:text-primary"
                >
                  <Icon name="mail" size={18} />
                  <span className="text-sm">{event.contactEmail}</span>
                </a>
              </li>
            ) : null}
          </ul>
        </div>

        <Card padded={false} interactive={false} className="p-6 sm:p-8">
          <form onSubmit={handleSubmit} noValidate>
            <div className="space-y-5">
              <div>
                <label htmlFor="contact-name" className="field-label">
                  Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  className={fieldClass("name")}
                  value={form.name}
                  onChange={handleChange("name")}
                  placeholder="Ada Lovelace"
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? "contact-name-error" : undefined}
                  autoComplete="name"
                />
                {errors.name ? (
                  <p id="contact-name-error" className="field-error">
                    <Icon name="close" size={12} className="mt-0.5" />
                    {errors.name}
                  </p>
                ) : null}
              </div>

              <div>
                <label htmlFor="contact-email" className="field-label">
                  Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  className={fieldClass("email")}
                  value={form.email}
                  onChange={handleChange("email")}
                  placeholder="you@example.com"
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? "contact-email-error" : undefined}
                  autoComplete="email"
                />
                {errors.email ? (
                  <p id="contact-email-error" className="field-error">
                    <Icon name="close" size={12} className="mt-0.5" />
                    {errors.email}
                  </p>
                ) : null}
              </div>

              <div>
                <label htmlFor="contact-message" className="field-label">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  rows={5}
                  className={fieldClass("message")}
                  value={form.message}
                  onChange={handleChange("message")}
                  placeholder="What do you need from the organizers?"
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? "contact-message-error" : undefined}
                />
                {errors.message ? (
                  <p id="contact-message-error" className="field-error">
                    <Icon name="close" size={12} className="mt-0.5" />
                    {errors.message}
                  </p>
                ) : null}
              </div>
            </div>

            <Button type="submit" variant="primary" className="mt-6 w-full">
              Send message <Icon name="send" size={15} />
            </Button>

            <p className="mt-3 text-xs leading-relaxed text-muted" aria-live="polite">
              {status || "Preview build — the form validates locally and does not send data yet."}
            </p>
          </form>
        </Card>
      </div>
    </section>
  );
}
