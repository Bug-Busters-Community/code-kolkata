import event from "../config/event";
import Card from "./ui/Card";
import { Icon } from "./ui/Icon";

export default function TrackGrid({ tracks = event.tracks, className = "" }) {
  return (
    <ul className={`grid gap-4 sm:grid-cols-2 xl:grid-cols-4 ${className}`}>
      {tracks.map((track, index) => (
        <li key={track.title}>
          <Card className="flex h-full flex-col">
            <div className="flex items-start justify-between gap-3">
              <span className="icon-box">
                <Icon name={track.icon} size={22} />
              </span>
              <span
                aria-hidden="true"
                className="font-pixel text-[0.55rem] tracking-[0.1em] text-primary/35"
              >
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>

            <h3 className="display-3 mt-5 text-text">{track.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{track.desc}</p>

            <ul className="mt-auto flex flex-wrap gap-1.5 border-t border-line-soft pt-4">
              {track.tags.map((tag) => (
                <li key={tag} className="chip">
                  {tag}
                </li>
              ))}
            </ul>
          </Card>
        </li>
      ))}
    </ul>
  );
}
