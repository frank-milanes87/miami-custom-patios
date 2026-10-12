"use client";

import { useLang } from "@/lib/lang";

const reviews = [
  {
    id: 1,
    quote: {
      en: "The project turned out awesome! Every person that comes to my house can't believe how it looks in the back compared to before.",
      es: "¡El proyecto quedó increíble! Todas las personas que vienen a mi casa no pueden creer cómo luce el patio trasero en comparación con antes.",
    },
    author: "Joseph X.",
    location: {
      en: "Miami · South Florida",
      es: "Miami · Sur de Florida",
    },
  },
];

export default function FeaturedReviews() {
  const { lang } = useLang();
  const isSpanish = lang === "es";

  const content = isSpanish
    ? {
        eyebrow: "OPINIONES REALES",
        title: "Experiencias reales de propietarios del sur de Florida",
        description:
          "Cada proyecto es diferente. Nuestro objetivo es ofrecer una experiencia basada en una comunicación clara, una planificación cuidadosa y atención a cada detalle.",
        reviewLabel: "OPINIÓN DEL CLIENTE",
        experienceLabel: "Experiencia del cliente",
        brand: "MIAMI CUSTOM PATIOS",
        region: "SUR DE FLORIDA",
      }
    : {
        eyebrow: "REAL CUSTOMER STORIES",
        title: "Real experiences from South Florida homeowners",
        description:
          "Every project is different. Our goal is to deliver an experience built on clear communication, thoughtful planning and attention to every detail.",
        reviewLabel: "CUSTOMER REVIEW",
        experienceLabel: "Customer experience",
        brand: "MIAMI CUSTOM PATIOS",
        region: "SOUTH FLORIDA",
      };

  return (
    <section
      aria-labelledby="featured-reviews-title"
      className="relative isolate overflow-hidden bg-[#f7f4ef] py-20 sm:py-24 lg:py-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-20 -z-10 h-96 w-96 rounded-full bg-[#c78951]/[0.07] blur-[100px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 bottom-0 -z-10 h-96 w-96 rounded-full bg-[#c78951]/[0.06] blur-[100px]"
      />

      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-3xl text-center">
          <div className="flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-[#c78951]" />

            <p className="font-sora text-[10px] font-bold uppercase tracking-[0.28em] text-[#a96f3d] sm:text-[11px]">
              {content.eyebrow}
            </p>

            <span className="h-px w-8 bg-[#c78951]" />
          </div>

          <h2
            id="featured-reviews-title"
            className="mt-6 font-sora text-3xl font-semibold uppercase leading-tight tracking-[-0.04em] text-[#171112] sm:text-4xl md:text-5xl"
          >
            {content.title}
          </h2>

          <p className="mx-auto mt-5 max-w-2xl font-manrope text-sm leading-7 text-[#716669] sm:text-base sm:leading-8">
            {content.description}
          </p>
        </div>

        <div
          className={`mx-auto mt-12 grid max-w-6xl gap-5 sm:mt-16 ${
            reviews.length > 1
              ? "md:grid-cols-2 xl:grid-cols-3"
              : "max-w-5xl"
          }`}
        >
          {reviews.map((review, index) => (
            <article
              key={review.id}
              className="group relative flex min-h-[360px] flex-col overflow-hidden border border-[#171112]/10 bg-[#fbf9f5] p-6 transition-all duration-500 hover:-translate-y-1 hover:border-[#c78951]/40 hover:shadow-[0_24px_70px_rgba(23,17,18,0.08)] sm:min-h-[390px] sm:p-9 lg:p-10"
              style={{
                animation: `reviewReveal .8s ease-out ${index * 140}ms both`,
              }}
            >
              <div className="absolute left-0 top-0 h-[2px] w-0 bg-[#c78951] transition-all duration-700 group-hover:w-full" />

              <div className="flex items-start justify-between gap-4">
                <span
                  aria-hidden="true"
                  className="font-sora text-7xl leading-[0.8] text-[#c78951]/80 sm:text-8xl"
                >
                  “
                </span>

                <div className="mt-1 flex items-center gap-2 border border-[#c78951]/20 px-3 py-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#c78951]" />

                  <span className="font-sora text-[8px] font-bold uppercase tracking-[0.16em] text-[#8e6748] sm:text-[9px]">
                    {content.reviewLabel}
                  </span>
                </div>
              </div>

              <blockquote className="mt-5 flex-1 font-sora text-xl font-medium leading-[1.55] tracking-[-0.025em] text-[#21191a] sm:text-2xl sm:leading-[1.5]">
                {review.quote[isSpanish ? "es" : "en"]}
              </blockquote>

              <div className="mt-9 h-px w-full bg-[#171112]/10" />

              <div className="mt-6 flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-[#c78951]/35 bg-[#c78951]/[0.08] font-sora text-sm font-semibold uppercase text-[#a96f3d]">
                  {review.author
                    .split(" ")
                    .map((part) => part[0])
                    .join("")
                    .slice(0, 2)}
                </div>

                <div className="min-w-0">
                  <p className="font-sora text-sm font-semibold text-[#21191a]">
                    {review.author}
                  </p>

                  <p className="mt-1 font-manrope text-xs text-[#857879]">
                    {review.location[isSpanish ? "es" : "en"]}
                  </p>
                </div>

                <div className="ml-auto hidden text-right sm:block">
                  <p className="font-sora text-[9px] font-semibold uppercase tracking-[0.14em] text-[#a96f3d]">
                    {content.experienceLabel}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 flex items-center justify-center gap-4 sm:mt-16">
          <span className="h-px w-10 bg-[#c78951]/50 sm:w-16" />

          <p className="font-sora text-[9px] font-semibold uppercase tracking-[0.2em] text-[#8d7f80] sm:text-[10px]">
            {content.brand}
          </p>

          <span className="h-px w-10 bg-[#c78951]/50 sm:w-16" />
        </div>
      </div>

      <style jsx>{`
        @keyframes reviewReveal {
          from {
            opacity: 0;
            transform: translateY(24px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          article {
            animation: none !important;
            transition: none !important;
          }
        }
      `}</style>
    </section>
  );
}