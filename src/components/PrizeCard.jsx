import Card from "./ui/Card";
import { Icon } from "./ui/Icon";

const TONES = {
  gold: { text: "text-gold", card: "card-gold", icon: "text-gold" },
  primary: { text: "text-primary", card: "", icon: "text-primary" },
  secondary: { text: "text-secondary", card: "card-secondary", icon: "text-secondary" },
};

export default function PrizeCard({ tier, featured = false }) {
  const tone = TONES[tier.tone] ?? TONES.primary;

  return (
    <Card
      className={`flex h-full flex-col ${tone.card} ${featured ? "sm:p-8" : ""}`}
    >
      <div className="flex items-start justify-between gap-3">
        <span className={`font-pixel text-[0.5rem] uppercase tracking-[0.14em] ${tone.text}`}>
          Place {tier.place}
        </span>
        <Icon name="award" size={featured ? 26 : 22} className={tone.icon} />
      </div>

      <h3 className="display-3 mt-4 text-text">{tier.title}</h3>

      <p className={`mt-1 font-display text-[clamp(2rem,4vw,2.75rem)] leading-none ${tone.text}`}>
        {tier.amount}
      </p>

      <p className="mt-3 text-sm leading-relaxed text-muted">{tier.desc}</p>

      <ul className="mt-5 space-y-2 border-t border-line-soft pt-4">
        {tier.perks.map((perk) => (
          <li key={perk} className="flex items-start gap-2 text-sm text-muted">
            <span className="mt-0.5 text-primary">
              <Icon name="check" size={14} />
            </span>
            {perk}
          </li>
        ))}
      </ul>
    </Card>
  );
}
