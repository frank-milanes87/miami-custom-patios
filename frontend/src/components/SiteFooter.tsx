"use client";

import Link from "next/link";
import { useLang } from "@/lib/lang";

const navigation = [
    {
        en: "Home",
        es: "Inicio",
        href: "/",
    },
    {
        en: "Services",
        es: "Servicios",
        href: "#services",
    },
    {
        en: "Portfolio",
        es: "Proyectos",
        href: "#portfolio",
    },
    {
        en: "About Us",
        es: "Nosotros",
        href: "#about",
    },
    {
        en: "Reviews",
        es: "Reseñas",
        href: "#reviews",
    },
    {
        en: "Contact",
        es: "Contacto",
        href: "#contact",
    },
];

const services = [
    {
        en: "Pergolas & Patio Covers",
        es: "Pérgolas y Cubiertas para Patios",
        href: "#services",
    },
    {
        en: "Modern Mailboxes",
        es: "Buzones Modernos",
        href: "#services",
    },
    {
        en: "Fencing & Epoxy Floors",
        es: "Cercas y Pisos de Epoxi",
        href: "#services",
    },
    {
        en: "Impact Products",
        es: "Productos de Impacto",
        href: "#services",
    },
    {
        en: "Accordion Shutters",
        es: "Persianas Acordeón",
        href: "#services",
    },
];
function PhoneIcon() {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            className="h-4 w-4 shrink-0"
            aria-hidden="true"
        >
            <path
                d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384Z"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}
export default function SiteFooter() {
    const { lang } = useLang();

    const content = {
        en: {
            description:
                "Luxury outdoor living, thoughtfully designed for South Florida.",
            navigate: "Navigate",
            services: "Services",
            connect: "Connect",
            call: "(305) 563-4756",
            email: "info@miamicustompatios.com",
            areas: (
                <>
                    Miami-Dade
                    <br />
                    Broward
                    <br />
                    South Florida
                </>
            ),
            copyright: "© 2026 Miami Custom Patios. All rights reserved.",
            location: "Miami, Florida · South Florida",
        },
        es: {
            description:
                "Espacios exteriores de lujo, diseñados cuidadosamente para el Sur de Florida.",
            navigate: "Navegación",
            services: "Servicios",
            connect: "Contacto",
            call: "(305) 563-4756",
            email: "info@miamicustompatios.com",
            areas: (
                <>
                    Miami-Dade
                    <br />
                    Broward
                    <br />
                    Sur de Florida
                </>
            ),
            copyright: "© 2026 Miami Custom Patios. Todos los derechos reservados.",
            location: "Miami, Florida · Sur de Florida",
        },
    };

    const t = content[lang];

    return (
        <footer className="bg-[#110c0d] pb-24 pt-16 text-white lg:pb-10">
            <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
                <div className="grid gap-12 border-b border-white/10 pb-12 md:grid-cols-2 lg:grid-cols-4">
                    <div>
                        <Link href="/" className="inline-flex">
                            <img
                                src="/assets/images/logo.webp"
                                alt="Miami Custom Patios"
                                className="h-28 w-auto object-contain object-left"
                            />
                        </Link>

                        <p className="mt-5 max-w-xs font-manrope text-sm leading-6 text-[#a9a3a4]">
                            {t.description}
                        </p>
                    </div>

                    <div>
                        <p className="font-sora text-xs font-bold uppercase tracking-[0.08em] text-[#c78951]">
                            {t.navigate}
                        </p>

                        <ul className="mt-5 space-y-3">
                            {navigation.map((item) => (
                                <li key={item.en}>
                                    <Link
                                        href={item.href}
                                        className="font-manrope text-sm text-[#a9a3a4] transition-colors hover:text-white"
                                    >
                                        {item[lang]}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <p className="font-sora text-xs font-bold uppercase tracking-[0.08em] text-[#c78951]">
                            {t.services}
                        </p>

                        <ul className="mt-5 space-y-3">
                            {services.map((service) => (
                                <li key={service.en}>
                                    <Link
                                        href={service.href}
                                        className="font-manrope text-sm text-[#a9a3a4] transition-colors hover:text-white"
                                    >
                                        {service[lang]}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <p className="font-sora text-xs font-bold uppercase tracking-[0.08em] text-[#c78951]">
                            {t.connect}
                        </p>

                        <div className="mt-5 space-y-3 font-manrope text-sm text-[#a9a3a4]">
                            <a
                                href="tel:+13055634756"
                                className="block transition-colors hover:text-white"
                            >
                                {t.call}
                            </a>

                            <a
                                href="mailto:info@miamicustompatios.com"
                                className="block break-all transition-colors hover:text-white"
                            >
                                {t.email}
                            </a>

                            <p>{t.areas}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="fixed inset-x-0 bottom-0 z-[110] grid grid-cols-2 border-t border-white/10 bg-[#110c0d] p-2 shadow-[0_-10px_35px_rgba(0,0,0,0.45)] xl:hidden">
                <a
                    href="tel:+13055634756"
                    className="flex h-11 items-center justify-center gap-2 font-sora text-[11px] font-semibold uppercase tracking-[0.06em] text-white transition-colors hover:bg-white/5 text-center"
                >
                    <PhoneIcon />
                    {lang === "es" ? "Llamar ahora" : "Call Now"}
                </a>

                <Link
                    href="/estimate"
                    className="flex h-11 items-center justify-center bg-[#c78951] font-sora text-[11px] font-semibold uppercase tracking-[0.06em] text-white transition-colors hover:bg-[#b47742] text-center"
                >
                    {lang === "es"
                        ? "Solicitar Cotización Gratis"
                        : "Get a Free Estimate"}
                </Link>
            </div>
        </footer>
    );
}