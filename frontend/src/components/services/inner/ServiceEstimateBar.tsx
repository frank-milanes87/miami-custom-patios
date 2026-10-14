
"use client";

import { useLang } from "@/lib/lang";

type ServiceEstimateBarProps = {
  content: {
    virtualLabel: string;
    virtualPrice: string;
    inHomeLabel: string;
    inHomePrice: string;
    description: string;
  };
};

export default function ServiceEstimateBar({
  content,
}: ServiceEstimateBarProps) {
  const { lang } = useLang();

  return (
    <section
      id="estimate-info"
      className="scroll-mt-40 border-y border-black/10 bg-[var(--warm)]"
      aria-label={
        lang === "en"
          ? "Estimate information"
          : "Información de estimados"
      }
    >
      <div className="section-shell grid gap-6 py-7 sm:grid-cols-2 lg:grid-cols-[1fr_1fr_1.8fr] lg:items-center lg:gap-8">
          <p className="text-[10px] font-bold uppercase tracking-widest">
            {content.virtualLabel}
          
          <strong className="ml-3 text-[var(--accent)]">
            {content.virtualPrice}
          </strong></p>

          <p className="text-[10px] font-bold uppercase tracking-widest">
            {content.inHomeLabel}
             <strong className="ml-3 text-[var(--accent)]">
            {content.inHomePrice}
          </strong>
          </p>
         

        <div>
          <p className="text-xs leading-5 text-black/60">
            {content.description}
          </p>
        </div>
      </div>
    </section>
  );
}
