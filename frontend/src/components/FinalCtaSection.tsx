"use client";

import { useLang } from "@/lib/lang";

export default function FinalCtaSection() {
  const { t } = useLang();

  return (
    <section className="relative overflow-hidden bg-[#110c0d] py-24 text-white sm:py-28 lg:py-32">
      <img
        src="/assets/images/project6.webp"
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-40"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-[#110c0d]/40 via-[#110c0d]/30 to-[#110c0d]/70" />

      <div className="relative mx-auto max-w-7xl px-6 text-center sm:px-8 lg:px-10">
        <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#c78951]">
          {t.home.eyebrow}
        </p>

        <h2 className="mx-auto mt-5 max-w-4xl font-sora text-4xl font-medium uppercase leading-[1.05] tracking-[-0.035em] sm:text-5xl lg:text-6xl">
          {t.home.title}
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-white/55 sm:text-base">
          {t.home.description}
        </p>

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <button
            type="button"
            className="h-13 rounded-none bg-[#c78951] px-7 text-xs font-bold uppercase tracking-widest text-white transition-all duration-300 hover:bg-[#b87843] hover:shadow-[0_8px_30px_rgba(199,137,81,0.2)]"
          >
            {t.home.estimate}
          </button>

          <a
            href="tel:+13055634756"
            className="inline-flex h-13 items-center justify-center gap-3 rounded-none border border-white/20 bg-transparent px-7 text-xs font-bold uppercase tracking-widest text-white transition-all duration-300 hover:border-[#c78951] hover:bg-white/5"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.8 12.8 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.8 12.8 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>

            {t.home.call}
          </a>
        </div>

        <p className="mx-auto mt-6 max-w-xl text-xs leading-5 text-white/40">
          {t.home.reimbursement}
        </p>
      </div>
    </section>
  );
}