export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  action,
  id,
  className = "",
}) {
  const centered = align === "center";

  return (
    <div className={`flex flex-col gap-5 ${centered ? "items-center text-center" : ""} ${className}`}>
      <div className={`flex max-w-3xl flex-col gap-3 ${centered ? "items-center" : ""}`}>
        {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
        <h2 id={id} className="display-2">
          {title}
        </h2>
        {description ? <p className="lede text-base">{description}</p> : null}
      </div>
      {action ? <div className="flex flex-wrap gap-3">{action}</div> : null}
    </div>
  );
}
