"use client";

import { useLang } from "@/lib/lang";

export default function LangToggle() {
  const { lang, setLang } = useLang();

  return (
    <div className="flex items-center gap-1 text-xs font-bold tracking-widest">
      <button
        type="button"
        onClick={() => setLang("en")}
        className={lang === "en" ? "text-[#c49a5a]" : "text-black/50"}
      >
        EN
      </button>

      <span className="text-black/20">|</span>

      <button
        type="button"
        onClick={() => setLang("es")}
        className={lang === "es" ? "text-[#c49a5a]" : "text-black/50"}
      >
        ES
      </button>
    </div>
  );
}