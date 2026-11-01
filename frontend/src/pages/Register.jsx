import { useState } from "react";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import { Icon } from "../components/ui/Icon";
import PageHeader from "../components/ui/PageHeader";
import Reveal from "../components/ui/Reveal";
import event from "../config/event";

const initialValues = {
  name: "",
  email: "",
  college: "",
  teamName: "",
  teamSize: "2",
  track: event.tracks[0].title,
  agree: false,
};

function validate(values) {
  const errors = {};

  if (values.name.trim().length < 2) errors.name = "Enter your full name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email.trim())) {
    errors.email = "Enter a valid email address.";
  }
  if (values.college.trim().length < 2) errors.college = "Add your college, company or community.";
  if (!values.agree) errors.agree = "Accept the community code of conduct to continue.";

  return errors;
}

export default function Register() {
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
    setTouched({ name: true, email: true, college: true, agree: true });
    setErrors(nextErrors);

    const firstInvalid = ["name", "email", "college", "agree"].find((field) => nextErrors[field]);
    if (firstInvalid) {
      document.getElementById(`reg-${firstInvalid}`)?.focus();
      return;
    }

    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const fieldClass = (field) =>
    `field ${showError(field) ? "" : touched[field] && values[field] ? "field-ok" : ""}`;

  const registrationHref = event.registration.url;

  return (
    <>
      <PageHeader
        index="03"
        breadcrumb="Register"
        eyebrow="Registration"
        title={
          <>
            Claim your
            <br />
            <span className="accent">seat.</span>
          </>
        }
        description="One application per builder. Team up before the event or join a team at check-in — either way, we need your details on the list."
        chips={[
          { label: event.registration.isOpen ? "Applications open" : event.registration.label, icon: "spark" },
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
                <h2 className="display-2 mt-5">Application validated.</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  Every field passed the local checks. This preview build has no registration backend connected,
                  so nothing was sent — wire the form to your form service to go live.
                </p>

                <dl className="mt-6 divide-y divide-line-soft border-y border-line">
                  {[
                    { label: "Name", value: values.name },
                    { label: "Email", value: values.email },
                    { label: "Team", value: values.teamName || "Solo / match me" },
                    { label: "Track", value: values.track },
                    { label: "Team size", value: `${values.teamSize} ${values.teamSize === "1" ? "person" : "people"}` },
                  ].map((row) => (
                    <div key={row.label} className="grid grid-cols-[5.5rem_1fr] gap-3 py-3">
                      <dt className="font-pixel text-[0.45rem] uppercase leading-relaxed tracking-[0.1em] text-muted">
                        {row.label}
                      </dt>
                      <dd className="text-sm text-text">{row.value}</dd>
                    </div>
                  ))}
                </dl>

                <div className="mt-6 flex flex-wrap gap-3">
                  <Button onClick={() => setSubmitted(false)} variant="ghost">
                    Edit application
                  </Button>
                  <Button to="/schedule" variant="secondary">
                    See the schedule
                  </Button>
                </div>
              </Card>
            ) : (
              <Card padded={false} interactive={false} className="p-6 sm:p-8">
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-line pb-4">
                  <h2 id="register-form-title" className="display-3">
                    Builder application
                  </h2>
                  <span className={`chip ${event.registration.isOpen ? "chip-primary" : "chip-danger"}`}>
                    {event.registration.isOpen ? "Open" : "Opening soon"}
                  </span>
                </div>

                <form onSubmit={handleSubmit} noValidate className="mt-6">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="sm:col-span-2">
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
                        placeholder="Ada Lovelace"
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

                    <div className="sm:col-span-2">
                      <label htmlFor="reg-email" className="field-label">
                        Email <span aria-hidden="true">*</span>
                      </label>
                      <input
                        id="reg-email"
                        name="email"
                        type="email"
                        className={fieldClass("email")}
                        value={values.email}
                        onChange={update("email")}
                        onBlur={blur("email")}
                        placeholder="you@example.com"
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

                    <div className="sm:col-span-2">
                      <label htmlFor="reg-college" className="field-label">
                        College / community <span aria-hidden="true">*</span>
                      </label>
                      <input
                        id="reg-college"
                        name="college"
                        type="text"
                        className={fieldClass("college")}
                        value={values.college}
                        onChange={update("college")}
                        onBlur={blur("college")}
                        placeholder="Your college, company or community"
                        autoComplete="organization"
                        aria-invalid={showError("college")}
                        aria-describedby={showError("college") ? "reg-college-error" : undefined}
                        required
                      />
                      {showError("college") ? (
                        <p id="reg-college-error" className="field-error">
                          <Icon name="close" size={12} className="mt-0.5" />
                          {errors.college}
                        </p>
                      ) : null}
                    </div>

                    <div>
                      <label htmlFor="reg-team" className="field-label">
                        Team name <span className="text-muted/60">· optional</span>
                      </label>
                      <input
                        id="reg-team"
                        name="teamName"
                        type="text"
                        className={`field ${values.teamName ? "field-ok" : ""}`}
                        value={values.teamName}
                        onChange={update("teamName")}
                        placeholder="Null Pointer Exception"
                        aria-describedby="reg-team-help"
                      />
                      <p id="reg-team-help" className="field-help">
                        Solo? Leave it blank and we will match you at check-in.
                      </p>
                    </div>

                    <div>
                      <label htmlFor="reg-size" className="field-label">
                        Team size
                      </label>
                      <select
                        id="reg-size"
                        name="teamSize"
                        className="field"
                        value={values.teamSize}
                        onChange={update("teamSize")}
                      >
                        {["1", "2", "3", "4"].map((size) => (
                          <option key={size} value={size}>
                            {size} {size === "1" ? "person" : "people"}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="sm:col-span-2">
                      <label htmlFor="reg-track" className="field-label">
                        Preferred track
                      </label>
                      <select
                        id="reg-track"
                        name="track"
                        className="field"
                        value={values.track}
                        onChange={update("track")}
                      >
                        {event.tracks.map((track) => (
                          <option key={track.title} value={track.title}>
                            {track.title}
                          </option>
                        ))}
                      </select>
                      <p className="field-help">Not binding — you can switch at the opening keynote.</p>
                    </div>
                  </div>

                  <div className="mt-6 border-t border-line pt-5">
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
                        I agree to follow the community code of conduct and help keep the room welcoming for
                        everyone.
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
                      Submit application <Icon name="arrowRight" size={15} />
                    </Button>
                    {registrationHref ? (
                      <Button href={registrationHref} variant="ghost">
                        Use the external form
                      </Button>
                    ) : null}
                  </div>

                  <p className="mt-4 text-xs leading-relaxed text-muted">{event.registration.formNote}</p>
                </form>
              </Card>
            )}
          </Reveal>

          <Reveal delay={120} className="space-y-4">
            <Card className="p-6">
              <p className="font-pixel text-[0.5rem] uppercase tracking-[0.12em] text-primary">
                What you get
              </p>
              <ul className="mt-4 space-y-3">
                {[
                  "24 hours of build time with power, Wi-Fi and meals",
                  "Mentor office hours across every track",
                  "A demo table and a stage slot if you make the finals",
                  "Event swag and a certificate for every finisher",
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
                Timeline
              </p>
              <ol className="mt-4 space-y-4">
                {[
                  { step: "01", title: "Apply", desc: "Submit this form. Takes two minutes." },
                  { step: "02", title: "Confirm", desc: "We email your seat and the check-in window." },
                  { step: "03", title: "Show up", desc: "ID, laptop, charger. We handle the rest." },
                ].map((item) => (
                  <li key={item.step} className="flex gap-3">
                    <span className="font-pixel text-[0.5rem] text-primary/70">{item.step}</span>
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
                Applications
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {event.registration.isOpen
                  ? "Applications are open. Seats are confirmed by email."
                  : "Applications open with the theme reveal. Follow the community handle for the exact drop time."}
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
