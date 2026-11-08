import { useState } from "react";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import { Icon } from "../components/ui/Icon";
import PageHeader from "../components/ui/PageHeader";
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
  // Strip non-digit chars to check length
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

  const update = (field) => (changeEvent) => {
    const value =
      changeEvent.target.type === "checkbox"
        ? changeEvent.target.checked
        : changeEvent.target.value;

    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
  };

  const blur = (field) => () => {
    setTouched((current) => ({ ...current, [field]: true }));
    const nextErrors = validate(values);
    setErrors((current) => ({ ...current, [field]: nextErrors[field] }));
  };

  const showError = (field) => Boolean(touched[field] && errors[field]);

  const handleSubmit = (submitEvent) => {
    submitEvent.preventDefault();
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

    setSubmitted(true);
    scrollToTop();
  };

  const fieldClass = (field) =>
    `field ${showError(field) ? "" : touched[field] && values[field] ? "field-ok" : ""}`;

  return (
    <>
      <PageHeader
        index="03"
        breadcrumb="Community Partner Registration"
        eyebrow="Partner with us"
        title={
          <>
            Bring your
            <br />
            <span className="accent">community.</span>
          </>
        }
        description="Join hands with Code Kolkata as a Community Partner. Amplify your reach, unlock reserved hacker seats for your members, and collaborate on Kolkata's premier builder weekend."
        chips={[
          { label: "Community partner slots open", icon: "users" },
          { label: event.dates.label, icon: "calendar" },
          { label: event.venue.city, icon: "mapPin" },
        ]}
      />

      <section className="section" aria-labelledby="register-form-title">
        <div className="shell grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
          <Reveal>
            {submitted ? (
              <Card padded={false} interactive={false} className="p-6 sm:p-8">
                <span className="icon-box h-14 w-14">
                  <Icon name="check" size={26} />
                </span>
                <h2 id="register-form-title" className="display-2 mt-5">
                  Application received!
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  Thank you for applying to be a Community Partner for Code Kolkata. We review all applications
                  within 48 to 72 hours and will reach out to you directly via email and WhatsApp to coordinate the next steps.
                </p>

                <div className="mt-6 border-t border-line pt-4">
                  <p className="font-pixel text-[0.5rem] uppercase tracking-[0.1em] text-primary">
                    Summary of Submitted Details
                  </p>
                </div>

                <dl className="mt-4 divide-y divide-line-soft border-y border-line">
                  {[
                    { label: "Lead Name", value: values.name },
                    { label: "Email", value: values.email },
                    { label: "Phone", value: values.phone },
                    { label: "Role", value: values.role },
                    { label: "Community Name", value: values.communityName },
                    { label: "Category", value: values.category },
                    { label: "Community Size", value: values.size },
                    { label: "City / Region", value: values.city },
                    { label: "Link / Handle", value: values.website },
                    { label: "How You Can Support Us", value: values.howYouCanHelp },
                    { label: "What You Need From Us", value: values.whatYouWant },
                  ].map((row) => (
                    <div key={row.label} className="py-3 first:pt-0 last:pb-0">
                      <dt className="font-pixel text-[0.45rem] uppercase leading-relaxed tracking-[0.1em] text-muted">
                        {row.label}
                      </dt>
                      <dd className="mt-1 whitespace-pre-wrap break-words text-sm text-text">{row.value}</dd>
                    </div>
                  ))}
                </dl>

                <div className="mt-6 flex flex-wrap gap-3">
                  <Button onClick={() => setSubmitted(false)} variant="ghost">
                    Edit or resubmit application
                  </Button>
                  <Button to="/partners" variant="secondary">
                    View partner program
                  </Button>
                </div>
              </Card>
            ) : (
              <Card padded={false} interactive={false} className="p-6 sm:p-8">
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-line pb-4">
                  <div>
                    <h2 id="register-form-title" className="display-3">
                      Community partner application
                    </h2>
                    <p className="mt-1 text-xs text-muted">
                      Please tell us about your community and how we can collaborate.
                    </p>
                  </div>
                  <span className="chip chip-primary">Open call</span>
                </div>

                <form onSubmit={handleSubmit} noValidate className="mt-6">
                  {/* Point of Contact Header */}
                  <div className="mb-4">
                    <span className="font-pixel text-[0.5rem] uppercase tracking-[0.12em] text-primary">
                      01 / Point of Contact
                    </span>
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
                        Phone / WhatsApp number <span aria-hidden="true">*</span>
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

                  {/* Community Information Header */}
                  <div className="mb-4 mt-8 border-t border-line pt-6">
                    <span className="font-pixel text-[0.5rem] uppercase tracking-[0.12em] text-primary">
                      02 / Community Details
                    </span>
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
                        className="field"
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
                        Community size / member reach
                      </label>
                      <select
                        id="reg-size"
                        name="size"
                        className="field"
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
                        Website / social / community link <span aria-hidden="true">*</span>
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

                  {/* Partnership Synergy Header */}
                  <div className="mb-4 mt-8 border-t border-line pt-6">
                    <span className="font-pixel text-[0.5rem] uppercase tracking-[0.12em] text-primary">
                      03 / Partnership Collaboration
                    </span>
                  </div>

                  <div className="space-y-5">
                    <div>
                      <label htmlFor="reg-howYouCanHelp" className="field-label">
                        <span>
                          How can your community support us? <span aria-hidden="true">*</span>
                        </span>
                        <span className="text-[0.45rem] font-normal lowercase text-muted">
                          {values.howYouCanHelp.length} chars
                        </span>
                      </label>
                      <textarea
                        id="reg-howYouCanHelp"
                        name="howYouCanHelp"
                        className={fieldClass("howYouCanHelp")}
                        value={values.howYouCanHelp}
                        onChange={update("howYouCanHelp")}
                        onBlur={blur("howYouCanHelp")}
                        placeholder="Tell us how you'd like to collaborate (e.g., cross-promotions, sending hacker teams, co-hosting pre-events, recommending speakers or workshop mentors, sharing event announcements)..."
                        aria-invalid={showError("howYouCanHelp")}
                        aria-describedby={showError("howYouCanHelp") ? "reg-howYouCanHelp-error" : "reg-howYouCanHelp-help"}
                        rows={4}
                        required
                      />
                      <p id="reg-howYouCanHelp-help" className="field-help">
                        Help us understand your community&apos;s strengths and how we can activate your members.
                      </p>
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
                        <span className="text-[0.45rem] font-normal lowercase text-muted">
                          {values.whatYouWant.length} chars
                        </span>
                      </label>
                      <textarea
                        id="reg-whatYouWant"
                        name="whatYouWant"
                        className={fieldClass("whatYouWant")}
                        value={values.whatYouWant}
                        onChange={update("whatYouWant")}
                        onBlur={blur("whatYouWant")}
                        placeholder="Tell us what benefits help your community most (e.g., logo spotlight on stage and site, guaranteed passes for your top builders, co-branded hackathon challenge, shoutouts on socials, speaker slots)..."
                        aria-invalid={showError("whatYouWant")}
                        aria-describedby={showError("whatYouWant") ? "reg-whatYouWant-error" : "reg-whatYouWant-help"}
                        rows={4}
                        required
                      />
                      <p id="reg-whatYouWant-help" className="field-help">
                        Every partnership is swap-based. Tell us what value we can deliver to make this a win-win for you.
                      </p>
                      {showError("whatYouWant") ? (
                        <p id="reg-whatYouWant-error" className="field-error">
                          <Icon name="close" size={12} className="mt-0.5" />
                          {errors.whatYouWant}
                        </p>
                      ) : null}
                    </div>
                  </div>

                  {/* Agreement */}
                  <div className="mt-7 border-t border-line pt-5">
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
                      <label htmlFor="reg-agree" className="text-sm leading-relaxed text-muted">
                        I confirm that I represent this community, and agree to uphold the Code Kolkata code of conduct
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

                  <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
                    <Button type="submit" variant="primary">
                      Submit partner application <Icon name="arrowRight" size={15} />
                    </Button>
                  </div>

                  <p className="mt-4 text-xs leading-relaxed text-muted">
                    We review submissions continuously. Confirmed partner logos and co-announcements go live on rolling basis.
                  </p>
                </form>
              </Card>
            )}
          </Reveal>

          <Reveal delay={120} className="space-y-4">
            <Card className="p-6">
              <p className="font-pixel text-[0.5rem] uppercase tracking-[0.12em] text-primary">
                What partners receive
              </p>
              <ul className="mt-4 space-y-3">
                {[
                  "Community logo on site partner wall, stage reel and event deck",
                  "Direct ticket allocation / reserved passes for your active builders",
                  "Joint social media shoutouts across LinkedIn, X, and Instagram",
                  "Opportunity to host a community desk or mentor office hour",
                  "Access to partner lounge, sponsor networking and mixer sessions",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm leading-relaxed text-muted">
                    <span className="mt-0.5 text-primary">
                      <Icon name="check" size={15} />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </Card>

            <Card className="p-6">
              <p className="font-pixel text-[0.5rem] uppercase tracking-[0.12em] text-primary">
                How it works
              </p>
              <ol className="mt-4 space-y-4">
                {[
                  { step: "01", title: "Submit application", desc: "Fill out your community metrics and partnership expectations." },
                  { step: "02", title: "Alignment sync", desc: "Our partnership team confirms deliverables and sets up your slot." },
                  { step: "03", title: "Announcement & passes", desc: "We roll out joint promotional collateral and issue reserved member passes." },
                ].map((item) => (
                  <li key={item.step} className="flex gap-3">
                    <span className="step-index font-pixel text-[0.5rem] text-primary/70">{item.step}</span>
                    <span>
                      <span className="block text-sm font-medium text-text">{item.title}</span>
                      <span className="mt-0.5 block text-xs leading-relaxed text-muted">{item.desc}</span>
                    </span>
                  </li>
                ))}
              </ol>
            </Card>

            <div className="border border-dashed border-primary/30 bg-primary/5 p-4">
              <p className="font-pixel text-[0.45rem] uppercase tracking-[0.1em] text-primary">
                Questions or Custom Swaps?
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Have custom collaboration ideas, venue sponsorship, or need student chapter bulk passes? Reach out to the organizing team via our community channels.
              </p>
              <div className="mt-3">
                <Button to="/team" variant="ghost" className="text-xs">
                  Contact organizing team <Icon name="arrowRight" size={13} />
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
