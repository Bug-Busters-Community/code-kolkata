import { useState } from "react";
import victoriaBackdrop from "../assets/VictoriaMemorial.jpg";
import BrandLogo from "../components/ui/BrandLogo";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import { Icon } from "../components/ui/Icon";
import Marquee from "../components/ui/Marquee";
import Reveal from "../components/ui/Reveal";
import event from "../config/event";
import { scrollToTop } from "../lib/smoothScroll";

const COMMUNITY_CATEGORIES = [
  "Developer & Open Source Community",
  "College / Campus Tech Chapter",
  "AI, Data Science & ML Club",
  "Design, UI/UX & Creative Network",
  "Robotics & Hardware Builders",
  "Startup, Incubator & Founder Hub",
  "Tech Media, Podcast & Newsletter",
  "Women in Tech & Diversity Group",
  "Other Builder Community",
];

const COMMUNITY_SIZES = [
  "Under 500 members",
  "500 – 1,500 members",
  "1,500 – 5,000 members",
  "5,000 – 15,000 members",
  "15,000+ members",
];

const initialValues = {
  name: "",
  email: "",
  phone: "",
  role: "",
  communityName: "",
  category: COMMUNITY_CATEGORIES[0],
  size: COMMUNITY_SIZES[1],
  city: "Kolkata",
  website: "",
  howYouCanHelp: "",
  whatYouWant: "",
  agree: false,
};

function validate(values) {
  const errors = {};

  if (values.name.trim().length < 2) {
    errors.name = "Enter your full name.";
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email.trim())) {
    errors.email = "Enter a valid email address.";
  }
  const digitsOnly = values.phone.replace(/\D/g, "");
  if (digitsOnly.length < 10) {
    errors.phone = "Enter a valid phone number (at least 10 digits).";
  }
  if (values.role.trim().length < 2) {
    errors.role = "Enter your role or designation (e.g. Community Lead, Founder).";
  }
  if (values.communityName.trim().length < 2) {
    errors.communityName = "Enter your community or organization name.";
  }
  if (values.city.trim().length < 2) {
    errors.city = "Enter your primary city or region.";
  }
  if (values.website.trim().length < 3) {
    errors.website = "Provide a website, LinkedIn, Instagram, Discord or Twitter link.";
  }
  if (values.howYouCanHelp.trim().length < 20) {
    errors.howYouCanHelp = "Please describe how your community can help us (min 20 characters).";
  }
  if (values.whatYouWant.trim().length < 20) {
    errors.whatYouWant = "Please share what support or perks you expect from us (min 20 characters).";
  }
  if (!values.agree) {
    errors.agree = "You must agree to the partnership guidelines and code of conduct.";
  }

  return errors;
}

export default function PartnerRegister() {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  const update = (field) => (changeEvent) => {
    const value =
      changeEvent.target.type === "checkbox"
        ? changeEvent.target.checked
        : changeEvent.target.value;

    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
    if (submitError) setSubmitError(null);
  };

  const blur = (field) => () => {
    setTouched((current) => ({ ...current, [field]: true }));
    const nextErrors = validate(values);
    setErrors((current) => ({ ...current, [field]: nextErrors[field] }));
  };

  const showError = (field) => Boolean(touched[field] && errors[field]);

  const handleSubmit = async (submitEvent) => {
    submitEvent.preventDefault();
    setSubmitError(null);
    const nextErrors = validate(values);
    const allTouched = Object.keys(values).reduce((acc, key) => {
      acc[key] = true;
      return acc;
    }, {});

    setTouched(allTouched);
    setErrors(nextErrors);

    const firstInvalid = [
      "name",
      "email",
      "phone",
      "role",
      "communityName",
      "city",
      "website",
      "howYouCanHelp",
      "whatYouWant",
      "agree",
    ].find((field) => nextErrors[field]);

    if (firstInvalid) {
      document.getElementById(`reg-${firstInvalid}`)?.focus();
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch("/api/community-partner", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(data.error || "Failed to submit partner application. Please try again.");
      }

      setSubmitted(true);
      scrollToTop();
    } catch (err) {
      console.error("Partner form submission error:", err);
      setSubmitError(
        err.message || "An unexpected error occurred while saving your form. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const fieldClass = (field) =>
    `field font-sans ${showError(field) ? "" : touched[field] && values[field] ? "field-ok" : ""}`;

  return (
    <div className="relative isolate min-h-screen bg-ink text-text">
      {/* ======================================================================
          HERO LANDING SECTION (with Victoria Memorial Background)
         ====================================================================== */}
      <section className="relative isolate overflow-hidden border-b border-line pb-16 pt-[calc(var(--nav-h)+2rem)] lg:pb-24 lg:pt-[calc(var(--nav-h)+3rem)]">
        {/* Victoria Memorial Background & Atmospheric Layering */}
        <div className="absolute inset-0 -z-10" aria-hidden="true">
          <img
            src={victoriaBackdrop}
            alt="Victoria Memorial Kolkata"
            className="h-full w-full scale-105 object-cover opacity-35 blur-[2px] transition-transform duration-1000"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/75 via-ink/88 to-ink" />
          <div className="absolute inset-0 grid-lines grid-fade opacity-70" />
          <div className="absolute inset-0 scanlines opacity-50" />
        </div>

        <div className="shell relative z-10 flex flex-col items-center text-center">
          {/* Brand Logo & Monogram Badges */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <span className="flex h-12 w-12 items-center justify-center overflow-hidden border border-primary/60 bg-primary/10 p-1 shadow-lg shadow-primary/10">
              <BrandLogo alt="Code Kolkata" />
            </span>
            <div className="flex items-center gap-2 border border-line bg-ink-2/80 px-3 py-1.5 backdrop-blur-sm">
              <span className="font-pixel text-[0.45rem] uppercase tracking-[0.14em] text-primary">
                Bug Busters
              </span>
              <span className="text-line">&times;</span>
              <span className="font-pixel text-[0.45rem] uppercase tracking-[0.14em] text-secondary">
                Anibotix
              </span>
            </div>
          </div>

          {/* Eyebrow Callout */}
          <p className="mt-6 font-pixel text-[0.55rem] uppercase leading-relaxed tracking-[0.18em] text-primary">
            <span className="text-gold" aria-hidden="true">✦ </span>
            Community Partner Program 
            <span className="text-gold" aria-hidden="true"> ✦</span>
          </p>

          {/* Main Headline in Road Rage Font */}
          <h1
            className="font-heading mt-4 max-w-4xl text-[clamp(2.75rem,7.5vw,5.75rem)] uppercase leading-[1.08] tracking-[0.06em] text-text"
            style={{ fontFamily: "'Road Rage', cursive" }}
          >
            Bring your <span className="accent">community.</span>
            <br />
            Own the <span className="text-secondary">room.</span>
          </h1>

          {/* Subtitle in Space Grotesk Font */}
          <p className="mt-5 max-w-2xl font-sans text-base leading-relaxed text-muted sm:text-lg">
            Join forces with Code Kolkata as a Community Partner. Amplify your reach, unlock reserved hacker passes for your top builders, and co-host Bengal&apos;s premier 24-hour developer weekend.
          </p>

          {/* Feature Chips */}
          <ul className="mt-7 flex flex-wrap items-center justify-center gap-2 font-sans">
            <li className="chip">
              <Icon name="users" size={13} />
              6 Community Slots
            </li>
            <li className="chip">
              <Icon name="compass" size={13} />
              10 Campus Chapters
            </li>
            <li className="chip">
              <Icon name="calendar" size={13} />
              {event.dates.label}
            </li>
            <li className="chip chip-primary">
              <Icon name="mapPin" size={13} />
              {event.venue.city}
            </li>
          </ul>

          {/* Jump to Form Anchor */}
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href="#partner-form" className="btn btn-primary font-sans font-medium uppercase tracking-wider">
              Fill Partner Application <Icon name="arrowRight" size={15} />
            </a>
            <Button to="/partners" variant="secondary" className="font-sans font-medium uppercase tracking-wider">
              Explore Partner Perks
            </Button>
          </div>
        </div>
      </section>

      {/* ======================================================================
          FORM & LANDING CONTENT SECTION
         ====================================================================== */}
      <section id="partner-form" className="relative section" aria-labelledby="register-form-title">
        {/* Subtle Victoria background continuation */}
        <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none opacity-20" aria-hidden="true">
          <img
            src={victoriaBackdrop}
            alt=""
            className="h-full w-full object-cover blur-[8px]"
          />
          <div className="absolute inset-0 bg-ink/95" />
          <div className="absolute inset-0 grid-lines opacity-40" />
        </div>

        <div className="shell grid gap-10 lg:grid-cols-[1.18fr_0.82fr] lg:items-start">
          <Reveal>
            {submitted ? (
              /* Success / Confirmation Card */
              <div className="corner-ticks relative border border-primary/40 bg-ink-2/95 p-6 sm:p-10 shadow-2xl backdrop-blur-md">
                <span className="icon-box h-14 w-14 border border-primary/50 bg-primary/10 text-primary">
                  <Icon name="check" size={28} />
                </span>

                {/* Heading in Road Rage */}
                <h2
                  id="register-form-title"
                  className="font-heading mt-6 text-3xl uppercase tracking-wider text-text sm:text-4xl"
                  style={{ fontFamily: "'Road Rage', cursive" }}
                >
                  Application <span className="accent">received!</span>
                </h2>

                {/* Space Grotesk Body */}
                <p className="mt-3 font-sans text-sm leading-relaxed text-muted sm:text-base">
                  Thank you for submitting your Community Partner application! We review submissions continuously within <strong>48 to 72 hours</strong>. A confirmation email has been dispatched via Resend to <strong>{values.email}</strong>.
                </p>

                <div className="mt-7 border-t border-line pt-4">
                  <p className="font-pixel text-[0.5rem] uppercase tracking-[0.14em] text-primary">
                    // SUBMITTED DETAILS SUMMARY
                  </p>
                </div>

                <dl className="mt-4 divide-y divide-line-soft border-y border-line font-sans">
                  {[
                    { label: "Lead Name", value: values.name },
                    { label: "Role / Designation", value: values.role },
                    { label: "Email Address", value: values.email },
                    { label: "Phone / WhatsApp", value: values.phone },
                    { label: "Community Name", value: values.communityName },
                    { label: "Category", value: values.category },
                    { label: "Member Reach", value: values.size },
                    { label: "City / Region", value: values.city },
                    { label: "Link / Handle", value: values.website },
                    { label: "How You Can Support Us", value: values.howYouCanHelp },
                    { label: "What You Expect From Us", value: values.whatYouWant },
                  ].map((row) => (
                    <div key={row.label} className="py-3 first:pt-0 last:pb-0">
                      <dt className="font-pixel text-[0.45rem] uppercase leading-relaxed tracking-[0.1em] text-muted">
                        {row.label}
                      </dt>
                      <dd className="mt-1 whitespace-pre-wrap break-words font-sans text-sm text-text">
                        {row.value}
                      </dd>
                    </div>
                  ))}
                </dl>

                <div className="mt-7 flex flex-wrap gap-3">
                  <Button onClick={() => setSubmitted(false)} variant="ghost" className="font-sans font-medium uppercase tracking-wider">
                    Submit another response
                  </Button>
                  <Button to="/partners" variant="secondary" className="font-sans font-medium uppercase tracking-wider">
                    View Partner Wall
                  </Button>
                </div>
              </div>
            ) : (
              /* The Partner Form */
              <div className="corner-ticks relative border border-line bg-ink-2/90 p-6 sm:p-10 shadow-2xl backdrop-blur-md">
                {/* Terminal Header Bar */}
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-line pb-4">
                  <div className="flex items-center gap-2">
                    <span className="flex items-center gap-1.5" aria-hidden="true">
                      <span className="h-2.5 w-2.5 border border-secondary/60 bg-secondary/20" />
                      <span className="h-2.5 w-2.5 border border-gold/60 bg-gold/20" />
                      <span className="h-2.5 w-2.5 border border-primary/60 bg-primary/20" />
                    </span>
                    <span className="font-pixel text-[0.45rem] uppercase tracking-[0.12em] text-muted">
                      partner_application.sh
                    </span>
                  </div>
                  <span className="chip chip-primary font-pixel text-[0.45rem] uppercase">
                    Slots Open
                  </span>
                </div>

                <div className="mt-6">
                  {/* Form Main Title in Road Rage */}
                  <h2
                    id="register-form-title"
                    className="font-heading text-3xl uppercase tracking-wider text-text sm:text-4xl"
                    style={{ fontFamily: "'Road Rage', cursive" }}
                  >
                    COMMUNITY PARTNER <span className="accent">REGISTRATION</span>
                  </h2>
                  <p className="mt-1 font-sans text-xs leading-relaxed text-muted sm:text-sm">
                    Tell us about your community, member reach, and how we can collaborate.
                  </p>
                </div>

                <form onSubmit={handleSubmit} noValidate className="mt-8 font-sans">
                  {/* Section 01: Lead Contact */}
                  <div className="mb-4">
                    <h3
                      className="font-heading text-xl uppercase tracking-wider text-primary"
                      style={{ fontFamily: "'Road Rage', cursive" }}
                    >
                      01 // Point of Contact
                    </h3>
                    <p className="font-sans text-xs text-muted">
                      Who is our primary liaison for coordination and pass allocations?
                    </p>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="reg-name" className="field-label">
                        Full name <span aria-hidden="true">*</span>
                      </label>
                      <input
                        id="reg-name"
                        name="name"
                        type="text"
                        className={fieldClass("name")}
                        value={values.name}
                        onChange={update("name")}
                        onBlur={blur("name")}
                        placeholder="e.g. Ada Lovelace"
                        autoComplete="name"
                        aria-invalid={showError("name")}
                        aria-describedby={showError("name") ? "reg-name-error" : undefined}
                        required
                      />
                      {showError("name") ? (
                        <p id="reg-name-error" className="field-error">
                          <Icon name="close" size={12} className="mt-0.5" />
                          {errors.name}
                        </p>
                      ) : null}
                    </div>

                    <div>
                      <label htmlFor="reg-role" className="field-label">
                        Your role / designation <span aria-hidden="true">*</span>
                      </label>
                      <input
                        id="reg-role"
                        name="role"
                        type="text"
                        className={fieldClass("role")}
                        value={values.role}
                        onChange={update("role")}
                        onBlur={blur("role")}
                        placeholder="e.g. Community Lead, Founder"
                        aria-invalid={showError("role")}
                        aria-describedby={showError("role") ? "reg-role-error" : undefined}
                        required
                      />
                      {showError("role") ? (
                        <p id="reg-role-error" className="field-error">
                          <Icon name="close" size={12} className="mt-0.5" />
                          {errors.role}
                        </p>
                      ) : null}
                    </div>

                    <div>
                      <label htmlFor="reg-email" className="field-label">
                        Email address <span aria-hidden="true">*</span>
                      </label>
                      <input
                        id="reg-email"
                        name="email"
                        type="email"
                        className={fieldClass("email")}
                        value={values.email}
                        onChange={update("email")}
                        onBlur={blur("email")}
                        placeholder="lead@community.org"
                        autoComplete="email"
                        aria-invalid={showError("email")}
                        aria-describedby={showError("email") ? "reg-email-error" : undefined}
                        required
                      />
                      {showError("email") ? (
                        <p id="reg-email-error" className="field-error">
                          <Icon name="close" size={12} className="mt-0.5" />
                          {errors.email}
                        </p>
                      ) : null}
                    </div>

                    <div>
                      <label htmlFor="reg-phone" className="field-label">
                        Phone / WhatsApp <span aria-hidden="true">*</span>
                      </label>
                      <input
                        id="reg-phone"
                        name="phone"
                        type="tel"
                        className={fieldClass("phone")}
                        value={values.phone}
                        onChange={update("phone")}
                        onBlur={blur("phone")}
                        placeholder="+91 98765 43210"
                        autoComplete="tel"
                        aria-invalid={showError("phone")}
                        aria-describedby={showError("phone") ? "reg-phone-error" : undefined}
                        required
                      />
                      {showError("phone") ? (
                        <p id="reg-phone-error" className="field-error">
                          <Icon name="close" size={12} className="mt-0.5" />
                          {errors.phone}
                        </p>
                      ) : null}
                    </div>
                  </div>

                  {/* Section 02: Community Info */}
                  <div className="mb-4 mt-9 border-t border-line pt-7">
                    <h3
                      className="font-heading text-xl uppercase tracking-wider text-primary"
                      style={{ fontFamily: "'Road Rage', cursive" }}
                    >
                      02 // Community Profile
                    </h3>
                    <p className="font-sans text-xs text-muted">
                      Tell us about your audience, chapter type, and footprint.
                    </p>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="sm:col-span-2">
                      <label htmlFor="reg-communityName" className="field-label">
                        Community / Chapter name <span aria-hidden="true">*</span>
                      </label>
                      <input
                        id="reg-communityName"
                        name="communityName"
                        type="text"
                        className={fieldClass("communityName")}
                        value={values.communityName}
                        onChange={update("communityName")}
                        onBlur={blur("communityName")}
                        placeholder="e.g. Kolkata Dev Club, GDG on Campus, DesignGuild"
                        aria-invalid={showError("communityName")}
                        aria-describedby={showError("communityName") ? "reg-communityName-error" : undefined}
                        required
                      />
                      {showError("communityName") ? (
                        <p id="reg-communityName-error" className="field-error">
                          <Icon name="close" size={12} className="mt-0.5" />
                          {errors.communityName}
                        </p>
                      ) : null}
                    </div>

                    <div>
                      <label htmlFor="reg-category" className="field-label">
                        Community category
                      </label>
                      <select
                        id="reg-category"
                        name="category"
                        className="field font-sans"
                        value={values.category}
                        onChange={update("category")}
                      >
                        {COMMUNITY_CATEGORIES.map((cat) => (
                          <option key={cat} value={cat}>
                            {cat}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="reg-size" className="field-label">
                        Community size / reach
                      </label>
                      <select
                        id="reg-size"
                        name="size"
                        className="field font-sans"
                        value={values.size}
                        onChange={update("size")}
                      >
                        {COMMUNITY_SIZES.map((sizeOption) => (
                          <option key={sizeOption} value={sizeOption}>
                            {sizeOption}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="reg-city" className="field-label">
                        Primary city / region <span aria-hidden="true">*</span>
                      </label>
                      <input
                        id="reg-city"
                        name="city"
                        type="text"
                        className={fieldClass("city")}
                        value={values.city}
                        onChange={update("city")}
                        onBlur={blur("city")}
                        placeholder="e.g. Kolkata, West Bengal"
                        aria-invalid={showError("city")}
                        aria-describedby={showError("city") ? "reg-city-error" : undefined}
                        required
                      />
                      {showError("city") ? (
                        <p id="reg-city-error" className="field-error">
                          <Icon name="close" size={12} className="mt-0.5" />
                          {errors.city}
                        </p>
                      ) : null}
                    </div>

                    <div>
                      <label htmlFor="reg-website" className="field-label">
                        Website / social link <span aria-hidden="true">*</span>
                      </label>
                      <input
                        id="reg-website"
                        name="website"
                        type="text"
                        className={fieldClass("website")}
                        value={values.website}
                        onChange={update("website")}
                        onBlur={blur("website")}
                        placeholder="https://linkedin.com/company/... or @handle"
                        aria-invalid={showError("website")}
                        aria-describedby={showError("website") ? "reg-website-error" : undefined}
                        required
                      />
                      {showError("website") ? (
                        <p id="reg-website-error" className="field-error">
                          <Icon name="close" size={12} className="mt-0.5" />
                          {errors.website}
                        </p>
                      ) : null}
                    </div>
                  </div>

                  {/* Section 03: Partnership Synergy */}
                  <div className="mb-4 mt-9 border-t border-line pt-7">
                    <h3
                      className="font-heading text-xl uppercase tracking-wider text-primary"
                      style={{ fontFamily: "'Road Rage', cursive" }}
                    >
                      03 // Mutual Collaboration
                    </h3>
                    <p className="font-sans text-xs text-muted">
                      Partnership is swap-based: you bring reach and teams, we bring visibility and passes.
                    </p>
                  </div>

                  <div className="space-y-5">
                    <div>
                      <label htmlFor="reg-howYouCanHelp" className="field-label">
                        <span>
                          How can your community support us? <span aria-hidden="true">*</span>
                        </span>
                        <span className="font-sans text-[0.7rem] lowercase text-muted">
                          {values.howYouCanHelp.length} chars (min 20)
                        </span>
                      </label>
                      <textarea
                        id="reg-howYouCanHelp"
                        name="howYouCanHelp"
                        className={fieldClass("howYouCanHelp")}
                        value={values.howYouCanHelp}
                        onChange={update("howYouCanHelp")}
                        onBlur={blur("howYouCanHelp")}
                        placeholder="e.g. Cross-promotional outreach, circulating hackathon announcements, bringing active hacker teams, co-hosting a pre-event meetup, proposing judges or workshop mentors..."
                        aria-invalid={showError("howYouCanHelp")}
                        aria-describedby={showError("howYouCanHelp") ? "reg-howYouCanHelp-error" : undefined}
                        rows={4}
                        required
                      />
                      {showError("howYouCanHelp") ? (
                        <p id="reg-howYouCanHelp-error" className="field-error">
                          <Icon name="close" size={12} className="mt-0.5" />
                          {errors.howYouCanHelp}
                        </p>
                      ) : null}
                    </div>

                    <div>
                      <label htmlFor="reg-whatYouWant" className="field-label">
                        <span>
                          What do you want / expect from us? <span aria-hidden="true">*</span>
                        </span>
                        <span className="font-sans text-[0.7rem] lowercase text-muted">
                          {values.whatYouWant.length} chars (min 20)
                        </span>
                      </label>
                      <textarea
                        id="reg-whatYouWant"
                        name="whatYouWant"
                        className={fieldClass("whatYouWant")}
                        value={values.whatYouWant}
                        onChange={update("whatYouWant")}
                        onBlur={blur("whatYouWant")}
                        placeholder="e.g. Logo spotlight on event deck and website, dedicated passes for top members, co-branded track or challenge, stage mentions, shoutouts on socials..."
                        aria-invalid={showError("whatYouWant")}
                        aria-describedby={showError("whatYouWant") ? "reg-whatYouWant-error" : undefined}
                        rows={4}
                        required
                      />
                      {showError("whatYouWant") ? (
                        <p id="reg-whatYouWant-error" className="field-error">
                          <Icon name="close" size={12} className="mt-0.5" />
                          {errors.whatYouWant}
                        </p>
                      ) : null}
                    </div>
                  </div>

                  {/* Agreement Checkbox */}
                  <div className="mt-8 border-t border-line pt-5">
                    <div className="checkbox-row">
                      <input
                        id="reg-agree"
                        name="agree"
                        type="checkbox"
                        checked={values.agree}
                        onChange={update("agree")}
                        onBlur={blur("agree")}
                        aria-invalid={showError("agree")}
                        aria-describedby={showError("agree") ? "reg-agree-error" : undefined}
                      />
                      <label htmlFor="reg-agree" className="font-sans text-sm leading-relaxed text-muted">
                        I confirm that I represent this community, and agree to uphold the Code Kolkata Code of Conduct
                        and mutual collaboration commitments.
                      </label>
                    </div>
                    {showError("agree") ? (
                      <p id="reg-agree-error" className="field-error">
                        <Icon name="close" size={12} className="mt-0.5" />
                        {errors.agree}
                      </p>
                    ) : null}
                  </div>

                  {/* Submission Error Banner */}
                  {submitError ? (
                    <div className="mt-5 flex items-start gap-3 border border-danger/40 bg-danger/10 p-4 text-danger">
                      <Icon name="close" size={16} className="mt-0.5 shrink-0" />
                      <div>
                        <p className="font-pixel text-[0.5rem] uppercase tracking-[0.1em]">Submission failed</p>
                        <p className="mt-1 font-sans text-xs leading-relaxed">{submitError}</p>
                      </div>
                    </div>
                  ) : null}

                  {/* Actions */}
                  <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                    <Button type="submit" variant="primary" disabled={isSubmitting} className="font-sans font-medium uppercase tracking-wider">
                      {isSubmitting ? (
                        <>Submitting application...</>
                      ) : (
                        <>
                          Submit partner application <Icon name="arrowRight" size={15} />
                        </>
                      )}
                    </Button>
                    <Button to="/partners" variant="ghost" className="font-sans font-medium uppercase tracking-wider">
                      View partner tiers
                    </Button>
                  </div>

                  <p className="mt-4 font-sans text-xs leading-relaxed text-muted">
                    Forms are stored in our secure database. A confirmation email will be delivered to your inbox upon submission.
                  </p>
                </form>
              </div>
            )}
          </Reveal>

          {/* ==================================================================
              RIGHT SIDEBAR: ORGANIZERS & PERKS
             ================================================================== */}
          <Reveal delay={120} className="space-y-6">
            {/* Host Organizers Card with Logos */}
            <Card className="corner-ticks p-6 bg-ink-2/80 backdrop-blur-sm">
              <p className="font-pixel text-[0.5rem] uppercase tracking-[0.14em] text-primary">
                Co-Organized By
              </p>

              <div className="mt-4 space-y-4">
                {event.organizers.map((org) => (
                  <div key={org.name} className="flex items-start gap-3 border border-line-soft bg-ink/60 p-3.5">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center border border-primary/40 bg-primary/10 font-pixel text-[0.6rem] text-primary">
                      {org.monogram}
                    </span>
                    <div className="min-w-0 flex-1">
                      <h4 className="font-heading text-lg uppercase tracking-wide text-text leading-tight">
                        {org.name}
                      </h4>
                      <p className="font-pixel text-[0.42rem] uppercase tracking-[0.1em] text-primary mt-0.5">
                        {org.role}
                      </p>
                      <p className="mt-1.5 font-sans text-xs leading-relaxed text-muted line-clamp-2">
                        {org.blurb}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* What Partners Receive Card */}
            <Card className="p-6 bg-ink-2/80 backdrop-blur-sm">
              <h3
                className="font-heading text-2xl uppercase tracking-wider text-text"
                style={{ fontFamily: "'Road Rage', cursive" }}
              >
                What partners <span className="accent">receive</span>
              </h3>
              <p className="mt-1 font-sans text-xs text-muted">
                Every partnership is designed to maximize member value and spotlight your brand.
              </p>

              <ul className="mt-5 space-y-3 font-sans">
                {[
                  "Community logo on site partner wall, stage loop and event banners",
                  "Guaranteed reserved seat allocation for your top builders",
                  "Joint social media shoutouts across LinkedIn, X and Instagram",
                  "Opportunity to host a community demo desk or mentor office hour",
                  "Direct access to sponsor toolkits, cloud credits and mixer sessions",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-xs leading-relaxed text-muted sm:text-sm">
                    <span className="mt-0.5 shrink-0 text-primary">
                      <Icon name="check" size={15} />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>

            {/* Timeline Sequence */}
            <Card className="p-6 bg-ink-2/80 backdrop-blur-sm">
              <h3
                className="font-heading text-2xl uppercase tracking-wider text-text"
                style={{ fontFamily: "'Road Rage', cursive" }}
              >
                Selection <span className="text-secondary">timeline</span>
              </h3>

              <ol className="mt-4 space-y-4 font-sans">
                {[
                  {
                    step: "01",
                    title: "Submit Application",
                    desc: "Takes 2 minutes. We review community reach, alignment and proposed perks.",
                  },
                  {
                    step: "02",
                    title: "Alignment Sync",
                    desc: "Our partnership team confirms deliverables and issues your partner kit.",
                  },
                  {
                    step: "03",
                    title: "Joint Launch & Passes",
                    desc: "Official announcement goes live and reserved member passes are distributed.",
                  },
                ].map((item) => (
                  <li key={item.step} className="flex gap-3">
                    <span className="step-index font-pixel text-[0.55rem] text-primary/80">
                      {item.step}
                    </span>
                    <div>
                      <span
                        className="block font-heading text-base uppercase tracking-wider text-text"
                        style={{ fontFamily: "'Road Rage', cursive" }}
                      >
                        {item.title}
                      </span>
                      <span className="mt-0.5 block text-xs leading-relaxed text-muted">
                        {item.desc}
                      </span>
                    </div>
                  </li>
                ))}
              </ol>
            </Card>

            {/* Questions Teaser */}
            <div className="border border-dashed border-primary/35 bg-primary/5 p-5">
              <p className="font-pixel text-[0.45rem] uppercase tracking-[0.14em] text-primary">
                Have custom ideas?
              </p>
              <p className="mt-2 font-sans text-xs leading-relaxed text-muted">
                Need bulk passes for a campus delegation or looking to sponsor a community prize track? Connect directly with our team.
              </p>
              <div className="mt-4">
                <Button to="/team" variant="ghost" className="font-sans text-xs uppercase tracking-wider">
                  Contact organizing team <Icon name="arrowRight" size={13} />
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ======================================================================
          MARQUEE STRIP (Same as Landing Page)
         ====================================================================== */}
      <section className="border-t border-line overflow-hidden py-4 bg-ink-2/60">
        <Marquee items={event.marquee} label="Community Partner Wall" />
      </section>
    </div>
  );
}
