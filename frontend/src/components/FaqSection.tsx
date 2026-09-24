"use client";

import { useState } from "react";

export default function FaqSection() {
  const faqs = [
    "Are virtual estimates free?",
    "How much is an in-home estimate?",
    "Is the $75 in-home estimate fee refundable?",
    "Do you provide 3D CAD renderings?",
    "What areas do you serve?",
    "Do projects require permits?",
    "Are your products designed for South Florida weather?",
    "Do you offer financing?",
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="relative overflow-hidden bg-[#f5eee8] py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 sm:px-8 lg:grid-cols-[0.7fr_1.3fr] lg:px-10">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#c78951]">
            Common questions
          </p>

          <h2 className="mt-5 max-w-md font-sora text-4xl font-medium uppercase leading-[1.05] tracking-[-0.035em] text-[#110c0d] sm:text-5xl lg:text-6xl">
            Plan With Confidence
          </h2>
        </div>

        <div className="border-t border-black/10">
          {faqs.map((question, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={question}
                className={`group border-b border-black/10 transition-all duration-500 ${
                  isOpen ? "bg-white/35" : "hover:bg-white/20"
                }`}
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() =>
                    setOpenIndex(isOpen ? null : index)
                  }
                  className="flex w-full items-center justify-between gap-6 px-5 py-6 text-left sm:px-6 sm:py-7 cursor-pointer"
                >
                  <div className="flex items-center gap-5">
                    <span
                      className={`font-sora text-[10px] font-medium tracking-[0.2em] transition-colors duration-300 ${
                        isOpen
                          ? "text-[#c78951]"
                          : "text-black/25"
                      }`}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span
                      className={`font-sora text-sm font-medium leading-6 transition-colors duration-300 sm:text-base ${
                        isOpen
                          ? "text-[#110c0d]"
                          : "text-[#110c0d]/80 group-hover:text-[#110c0d]"
                      }`}
                    >
                      {question}
                    </span>
                  </div>

                  <span
                    className={`relative flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-all duration-500 ${
                      isOpen
                        ? "rotate-180 border-[#c78951] bg-[#c78951] text-white"
                        : "border-black/15 text-black/45 group-hover:border-[#c78951] group-hover:text-[#c78951]"
                    }`}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4"
                      aria-hidden="true"
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </span>
                </button>

                <div
                  className={`grid transition-[grid-template-rows,opacity] duration-500 ease-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="pb-7 pl-[3.25rem] pr-12 sm:pl-[3.5rem]">
                      <div className="h-px w-8 bg-[#c78951] mb-4" />

                      <p className="max-w-2xl text-sm leading-7 text-[#5f5a54]">
                        Placeholder content for client approval.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}