import ContactHero from "@/components/contact/ContactHero";
import ContactInformation from "@/components/contact/ContactInformation";
import ContactForm from "@/components/contact/ContactForm";
import ContactServiceAreaSection from "@/components/contact/ContactServiceAreaSection";
import ServiceAreaSection  from "@/components/contact/ServiceAreaSection";
import CTA  from "@/components/contact/CTA";
import BackToTop from "@/components/BackToTop";

export default function ProjectsPage() {
  return (
    <main className="bg-[var(--light-bg)]">
      <ContactHero />
      <ContactInformation />
      <ContactForm />
      <ContactServiceAreaSection />
      <ServiceAreaSection  />
      <CTA  />
         <BackToTop />
    </main>
  );
}