function Group({ items, copy }) {
  return (
    <ul
      className="marquee-group"
      data-marquee-copy={copy ? "true" : undefined}
      aria-hidden={copy ? "true" : undefined}
    >
      {items.map((item, index) => (
        <li 
          key={`${item.name}-${index}`} 
          className="marquee-item flex flex-col items-center justify-center gap-2 shrink-0"
        >
          {item.logo ? (
            <img 
              src={item.logo} 
              alt={`${item.name} logo`} 
              className="h-30 w-auto object-contain shrink-0" 
            />
          ) : null}
          
          <span className="font-pretty text-2xl">{item.name}</span>
          <span className="pt-1 border-t w-full text-center text-sm">{item.title}</span>
        </li>
      ))}
    </ul>
  );
}

export default function SponPartMarquee({ items, label = "Sponsor and partner slots", className = "" }) {
  return (
    <div className={`marquee ${className}`} role="group" aria-label={label}>
      <div className="marquee-track">
        <Group items={items} />
        <Group items={items} copy />
      </div>
    </div>
  );
}
