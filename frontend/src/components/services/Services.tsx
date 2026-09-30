"use client";

import { useLang } from "@/lib/lang";
import { servicesPageCopy } from "@/data/servicesPageCopy";
import ServicesHero from "./ServicesHero";
import ServicesGrid from "./ServicesGrid";
import ServicesShowcase from "./ServicesShowcase";
import ServicesStatement from "./ServicesStatement";
import ServicesCategories from "./ServicesCategories";
import ServicesCTA from "./ServicesCTA";
import BackToTop from "@/components/BackToTop";

export default function Services() {
  const { lang } = useLang();
  const copy = servicesPageCopy[lang];

  return (
    <main>
      <ServicesHero copy={copy.hero} />
      <ServicesGrid />
       <ServicesShowcase />
       <ServicesStatement />
       <ServicesCategories />
        <ServicesCTA />
        <BackToTop />
    </main>
  );
}