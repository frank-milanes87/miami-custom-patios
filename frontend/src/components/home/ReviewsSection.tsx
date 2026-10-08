"use client";

import { useLang } from "@/lib/lang";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";

const reviews = [
  {
    quote: {
      en: "The project turned out awesome! Every person that comes to my house can't believe how it looks in the back compared to before.",
      es: "¡El proyecto ha quedado genial! Todos los que vienen a mi casa no se pueden creer cómo ha quedado la parte de atrás en comparación con antes.",
    },
    name: "Joseph X.",
    project: {
      en: "Miami · South Florida",
      es: "Miami · Sur de Florida",
    },
  },
];
export default function ReviewsSection() {
  const { lang } = useLang();
  const [swiper, setSwiper] = useState<SwiperType | null>(null);

  const content = {
    en: {
      eyebrow: "Client Review Preview",
      title: "What Our Customers Say",
      description:
        "Hear from our customers about their experience working with Miami Custom Patios.",
      previous: "Previous review",
      next: "Next review",
      stars: "Five stars",
    },
    es: {
      eyebrow: "Vista previa de la reseña del cliente",
      title: "Lo que dicen nuestros clientes",
      description:
        "Descubre qué opinan nuestros clientes sobre su experiencia trabajando con Miami Custom Patios.",
      previous: "Reseña anterior",
      next: "Siguiente reseña",
      stars: "Cinco estrellas",
    },
  };

  const t = content[lang];
  const showArrows = reviews.length > 1;

  return (
    <section
      id="reviews"
      className="scroll-mt-18 bg-[var(--background)] py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[var(--accent)]">
              {t.eyebrow}
            </p>

            <h2 className="mt-5 font-sora text-4xl font-semibold uppercase leading-tight tracking-[-0.03em] text-[var(--black)] sm:text-5xl">
              {t.title}
            </h2>

            <p className="mt-6 max-w-md text-sm leading-6 text-[var(--text)]">
              {t.description}
            </p>

            {showArrows && (
              <div className="mt-8 flex gap-2">
                <button
                  type="button"
                  aria-label={t.previous}
                  onClick={() => swiper?.slidePrev()}
                  className="cursor-pointer flex h-9 w-9 items-center justify-center rounded-md border border-black/10 bg-[var(--background)] text-[var(--black)] shadow-sm transition-colors hover:bg-[var(--accent)] hover:text-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="m15 18-6-6 6-6" />
                  </svg>
                </button>

                <button
                  type="button"
                  aria-label={t.next}
                  onClick={() => swiper?.slideNext()}
                  className="cursor-pointer flex h-9 w-9 items-center justify-center rounded-md border border-black/10 bg-[var(--background)] text-[var(--black)] shadow-sm transition-colors hover:bg-[var(--accent)] hover:text-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </button>
              </div>
            )}
          </div>

          <div className="min-w-0 border-l-2 border-[var(--accent)] bg-[#f5eee8] p-8 sm:p-12">
            <Swiper
              onSwiper={setSwiper}
              slidesPerView={1}
              spaceBetween={24}
              loop={showArrows}
              speed={600}
              allowTouchMove={showArrows}
              className="w-full"
            >
              {reviews.map((review, index) => (
                <SwiperSlide key={index}>
                  <div>
                    <p
                      className="text-[var(--accent)]"
                      aria-label={t.stars}
                    >
                      ★★★★★
                    </p>

                    <blockquote className="mt-8 text-2xl font-medium leading-10 text-[var(--black)]">
                      “{review.quote[lang]}”
                    </blockquote>

                    <div className="mt-10 border-t border-black/10 pt-5">
                      <strong className="text-[var(--black)]">
                        {review.name}
                      </strong>

                      <p className="mt-1 text-xs uppercase tracking-widest text-[var(--text)]">
                        {review.project[lang]}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}