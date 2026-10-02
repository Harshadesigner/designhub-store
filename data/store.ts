export default function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="max-w-2xl">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-200">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-black text-white md:text-4xl">{title}</h2>
      {description ? <p className="mt-3 text-slate-300">{description}</p> : null}
    </div>
  );
}
