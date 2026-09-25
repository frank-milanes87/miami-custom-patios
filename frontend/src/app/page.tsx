import Hero from "@/components/Hero";
import Credentials from "@/components/Credentials";
import Services from "@/components/Services";
import CustomPergolas from "@/components/CustomPergolas";
import Projects from "@/components/Projects";
import AboutSouthFlorida from "@/components/AboutSouthFlorida";
import ProjectPartners from "@/components/ProjectPartners";
import ProcessSection from "@/components/ProcessSection";
import ReviewsSection from "@/components/ReviewsSection";
import FaqSection from "@/components/FaqSection";
import FinalCtaSection from "@/components/FinalCtaSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <main>
      <Hero />
      <Credentials />
      <Services />
      <CustomPergolas />
      <Projects />
      <AboutSouthFlorida />
      <ProjectPartners />
      <ProcessSection />
      <ReviewsSection />
      <FaqSection />
      <FinalCtaSection />
      <ContactSection />
    </main>
  );
}