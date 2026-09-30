"use client";
import { useLang } from "@/lib/lang";

type ServicesHeroProps = {
    copy: {
        eyebrow: string;
        title: string;
        description: string;
    };
};

export default function ServicesHero({ copy }: ServicesHeroProps) {
    const { lang } = useLang();

    const titleLines = copy.title.split("|");

    const scrollToServices = () => {
        document.getElementById("services-list")?.scrollIntoView({
            behavior: "smooth",
        });
    };

    return (
        <section className="bg-[var(--black)] pt-18 text-white">
            <div className="mx-auto grid w-full max-w-[1440px] gap-10 px-6 py-14 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 lg:px-12 lg:py-20">
                <div className="flex flex-col justify-between">
                    <div>
                        <p className="text-xs font-medium uppercase tracking-[0.28em] text-[var(--accent)]">
                            {copy.eyebrow}
                        </p>

                        <h1 className="mt-6 text-[2.6rem] font-semibold uppercase leading-[0.98] tracking-[-0.03em] sm:text-6xl lg:text-7xl xl:text-[5.5rem]">
                            {titleLines.map((line, index) => (
                                <span
                                    key={line}
                                    className={`block ${index === titleLines.length - 1
                                            ? "text-[var(--accent)]"
                                            : ""
                                        }`}
                                >
                                    {line}
                                </span>
                            ))}
                        </h1>

                        <p className="mt-8 max-w-xl border-l border-white/15 pl-5 text-base leading-7 text-white/60">
                            {copy.description}
                        </p>
                    </div>

                    <button
                        type="button"
                        onClick={scrollToServices}
                        className="group mt-12 inline-flex w-fit cursor-pointer items-center gap-3 text-[11px] font-bold uppercase tracking-[0.25em] text-white/60 transition-colors hover:text-white"
                    >
                        {lang === "en" ? "Explore Services" : "Explorar Servicios"}

                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-[var(--accent)] transition-transform group-hover:translate-y-1"
                            aria-hidden="true"
                        >
                            <path d="M12 5v14" />
                            <path d="m19 12-7 7-7-7" />
                        </svg>
                    </button>
                </div>

                <div className="relative">
                    <img
                        src="/assets/images/project2.webp"
                        alt={
                            lang === "en"
                                ? "Custom pergola with ceiling fan in a tropical Miami courtyard"
                                : "Pérgola personalizada con ventilador de techo en un patio tropical de Miami"
                        }
                        className="aspect-[4/3] w-full object-cover lg:aspect-[4/5] lg:max-h-[620px]"
                    />

                    <span className="absolute -left-8 top-0 hidden text-[10px] font-bold uppercase tracking-[0.35em] text-white/50 [writing-mode:vertical-rl] rotate-180 lg:block">
                        Miami / South Florida
                    </span>

                    <span className="mt-3 block text-[10px] font-bold uppercase tracking-[0.3em] text-white/50 lg:hidden">
                        Miami / South Florida
                    </span>
                </div>
            </div>
        </section>
    );
}