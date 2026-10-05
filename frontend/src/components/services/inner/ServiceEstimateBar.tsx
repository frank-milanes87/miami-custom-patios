"use client";

import { useLang } from "@/lib/lang";

export default function ServiceEstimateBar() {
  const { lang } = useLang();

  return (
    <div className="border-y border-black/10 bg-[var(--warm)]">
      <div className="section-shell grid gap-4 py-6 sm:grid-cols-[1fr_1fr_2fr] sm:items-center">
        <p className="text-[10px] font-bold uppercase tracking-widest">
          {lang === "en" ? "Virtual estimates" : "Estimados virtuales"}

          <strong className="ml-3 text-[var(--accent)]">
            {lang === "en" ? "FREE" : "GRATIS"}
          </strong>
        </p>

        <p className="text-[10px] font-bold uppercase tracking-widest">
          {lang === "en" ? "In-home estimates" : "Estimados en el hogar"}

          <strong className="ml-3 text-[var(--accent)]">
            $75
          </strong>
        </p>

        <p className="text-xs leading-5 text-black/60">
          {lang === "en"
            ? "In-home estimates are $75 and reimbursed if you move forward with your project within 30 days of receiving the estimate."
            : "Los estimados en el hogar cuestan $75 y se reembolsan si continúa con su proyecto dentro de los 30 días de recibir el estimado."}
        </p>
      </div>
    </div>
  );
}