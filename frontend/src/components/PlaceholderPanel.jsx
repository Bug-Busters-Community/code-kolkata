export default function PlaceholderPanel({ icon, title, description, compact = false }) {
  return (
    <div
      className={`max-w-2xl mx-auto rounded-2xl bg-slate-950 border border-dashed border-[#19d3c5]/40 text-center ${
        compact ? "p-8 mt-6" : "p-10"
      }`}
    >
      <div
        className={`rounded-full bg-[#19d3c5]/10 text-[#19d3c5] flex items-center justify-center mx-auto ${
          compact ? "w-12 h-12 mb-3" : "w-16 h-16 mb-4"
        }`}
      >
        {icon}
      </div>
      <h3 className={`${compact ? "text-lg" : "text-xl"} font-bold text-white mb-2`}>
        {title}
      </h3>
      <p className="text-sm text-gray-400 leading-relaxed">{description}</p>
    </div>
  );
}
