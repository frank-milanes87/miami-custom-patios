"use client";

import { useEffect, useState } from "react";
import { useLang } from "@/lib/lang";

export default function ServiceSectionNav() {
  const { lang } = useLang();
  const [activeSection, setActiveSection] = useState("introduction");

  const items = [
    {
      id: "introduction",
      en: "Overview",
      es: "Resumen",
    },
    {
      id: "offerings",
      en: "What we provide",
      es: "Lo que ofrecemos",
    },
    {
      id: "considerations",
      en: "Planning",
      es: "Planificación",
    },
    {
      id: "faq",
      en: "Questions",
      es: "Preguntas",
    },
  ];

  useEffect(() => {
    const sections = items
      .map((item) => document.getElementById(item.id))
      .filter((section): section is HTMLElement => section !== null);

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              a.boundingClientRect.top - b.boundingClientRect.top
          );

        if (visibleSections.length > 0) {
          setActiveSection(visibleSections[0].target.id);
        }
      },
      {
        root: null,
        rootMargin: "-25% 0px -60% 0px",
        threshold: 0,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <nav
      className="sticky top-18 z-30 border-b border-black/10 bg-[var(--light-bg)]/60 backdrop-blur-md"
      aria-label="Service sections"
    >
      <div className="section-shell grid grid-cols-4">
        {items.map((item, index) => {
          const isActive = activeSection === item.id;

          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              aria-current={isActive ? "location" : undefined}
              className={`relative flex min-h-16 items-center justify-center px-2 py-3 text-center text-[10px] font-bold uppercase tracking-wide transition-all duration-300 sm:text-xs ${
                index < items.length - 1
                  ? "border-r border-black/10"
                  : ""
              } ${
                isActive
                  ? "text-[var(--accent)]"
                  : "text-black/40 hover:text-black"
              }`}
            >
              {lang === "en" ? item.en : item.es}

              <span
                className={`absolute bottom-0 left-1/2 h-0.5 -translate-x-1/2 bg-[var(--accent)] transition-all duration-300 ${
                  isActive ? "w-8 sm:w-10" : "w-0"
                }`}
              />
            </a>
          );
        })}
      </div>
    </nav>
  );
}