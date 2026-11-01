export default function SectionHeading({ eyebrow, title, className = "text-center mb-12" }) {
  return (
    <div className={className}>
      <h2 className="text-xs uppercase font-extrabold tracking-widest text-[#19d3c5] mb-2">
        {eyebrow}
      </h2>
      {title && (
        <p className="text-3xl sm:text-4xl font-bold text-white">{title}</p>
      )}
    </div>
  );
}
