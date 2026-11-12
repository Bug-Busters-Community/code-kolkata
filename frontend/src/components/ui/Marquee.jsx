function Group({ items, copy }) {
  return (
    <ul
      className="marquee-group"
      data-marquee-copy={copy ? "true" : undefined}
      aria-hidden={copy ? "true" : undefined}
    >
      {items.map((item, index) => (
        <li key={index} className="marquee-item">
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function Marquee({ items, label = "Sponsor and partner slots", className = "" }) {
  return (
    <div className={`marquee ${className}`} role="group" aria-label={label}>
      <div className="marquee-track">
        <Group items={items} />
        <Group items={items} copy />
      </div>
    </div>
  );
}
