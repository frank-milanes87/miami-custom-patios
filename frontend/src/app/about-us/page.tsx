import type { Metadata } from "next";
import { AboutHero } from "@/components/about/AboutHero";
import AboutProcessSection from "@/components/about/AboutProcessSection";
import AboutWhySection from "@/components/about/AboutWhySection";
import AboutContractorNetwork from "@/components/about/AboutContractorNetwork";
import AboutTransparencySection from "@/components/about/AboutTransparencySection";
import AboutServicesSection from "@/components/about/AboutServicesSection";
import AboutCoordinationSection from "@/components/about/AboutCoordinationSection";
import AboutContactSection from "@/components/about/AboutContactSection";
import BackToTop from "@/components/BackToTop";

export const metadata: Metadata = {
  title: "About Us | Miami Custom Patios",
  description:
    "One team managing your project from estimate to final walkthrough, with licensed and insured partners doing the building.",
};

export default function AboutUsPage() {
  return (
    <main className="bg-[var(--light-bg)]">
      <AboutHero />
      <AboutProcessSection />
      <AboutWhySection />
      <AboutContractorNetwork />
      <AboutTransparencySection />
      <AboutServicesSection />
      <AboutCoordinationSection />
      <AboutContactSection />
      <BackToTop />
    </main>
  );
}