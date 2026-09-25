"use client";

import { useEffect, useState } from "react";
import { useLang } from "@/lib/lang";

export default function BackToTop() {
  const { lang } = useLang();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 600);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label={lang === "en" ? "Back to top" : "Volver arriba"}
      title={lang === "en" ? "Back to top" : "Volver arriba"}
      className={`fixed bottom-6 right-5 z-50 flex h-11 w-11 items-center justify-center border border-[var(--accent)] bg-[var(--black)] text-[var(--accent)] shadow-lg transition-all duration-500 hover:bg-[var(--accent)] hover:text-white sm:bottom-8 sm:right-8 ${
        isVisible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-4 w-4"
        aria-hidden="true"
      >
        <path d="M12 19V5" />
        <path d="m5 12 7-7 7 7" />
      </svg>
    </button>
  );
}