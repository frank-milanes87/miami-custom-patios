export default function ProjectPartners() {
  const partners = [
    {
      location: "Medley, FL",
      name: "American Aluminum Fabricators",
      category: "Precision-Fabricated Impact Products",
      description:
        "Impact windows, doors and structural-grade aluminum components.",
      number: "01",
    },
    {
      location: "Miami, FL",
      name: "Garcell Designs",
      category: "Interior Design Collaboration",
      description:
        "Full-scope interior design consultation and styling.",
      number: "02",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#fef8fa] py-24 sm:py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <div className="grid border-t border-black/10 lg:grid-cols-2">
          {partners.map((partner, index) => (
            <article
              key={partner.name}
              className={`group relative flex min-h-[420px] flex-col justify-between border-b border-black/10 py-10 sm:py-12 lg:min-h-[500px] lg:py-14 ${
                index === 0
                  ? "lg:border-r lg:pr-14"
                  : "lg:pl-14"
              }`}
            >
              {/* Top */}
              <div className="flex items-center justify-between">
                <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#5f5a54]">
                  Project partner · {partner.location}
                </p>

                <span className="font-sora text-xs tracking-[0.15em] text-black/30">
                  {partner.number}
                </span>
              </div>

              {/* Main content */}
              <div className="mt-16 sm:mt-20">
                <h3 className="max-w-xl font-sora text-3xl font-medium leading-[1.08] tracking-[-0.035em] text-[#110c0d] sm:text-4xl lg:text-[2.7rem]">
                  {partner.name}
                </h3>

                <div className="mt-6 h-px w-10 bg-[#c78951] transition-all duration-500 group-hover:w-20" />

                <p className="mt-6 max-w-md font-sora text-base font-medium leading-6 text-[#c78951] sm:text-lg">
                  {partner.category}
                </p>

                <p className="mt-4 max-w-md text-sm leading-7 text-[#5f5a54] sm:text-[15px]">
                  {partner.description}
                </p>
              </div>

              {/* Bottom */}
              <div className="mt-12 flex items-center">
                <button
                  type="button"
                  className="group/button inline-flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.22em] text-[#110c0d] cursor-pointer"
                >
                  <span className="relative">
                    Learn More
                    <span className="absolute -bottom-2 left-0 h-px w-full origin-left bg-[#110c0d] transition-transform duration-300 group-hover/button:scale-x-0" />
                  </span>

                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-black/15 transition-all duration-300 group-hover/button:border-[#c78951] group-hover/button:bg-[#c78951]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                      className="transition-transform duration-300 group-hover/button:translate-x-0.5 group-hover/button:-translate-y-0.5"
                    >
                      <path d="M5 12h14" />
                      <path d="m13 6 6 6-6 6" />
                    </svg>
                  </span>
                </button>
              </div>

              {/* Subtle hover accent */}
              <div className="pointer-events-none absolute bottom-0 left-0 h-[2px] w-0 bg-[#c78951] transition-all duration-500 group-hover:w-full" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}