type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "start" | "center";
  inverted?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "start",
  inverted = false,
}: SectionHeadingProps) {
  const centered = align === "center";

  return (
    <div className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow && (
        <span
          className={`section-eyebrow ${inverted ? "section-eyebrow-inverted" : ""}`}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={`section-title ${inverted ? "text-white" : "text-brand-950"}`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-5 text-base leading-8 sm:text-lg ${
            inverted ? "text-white/70" : "text-slate-600"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
