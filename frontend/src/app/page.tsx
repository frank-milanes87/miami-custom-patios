import Hero from "@/components/home/Hero";
import Credentials from "@/components/home/Credentials";
import Services from "@/components/home/Services";
import CustomPergolas from "@/components/home/CustomPergolas";
import Projects from "@/components/home/Projects";
import AboutSouthFlorida from "@/components/home/AboutSouthFlorida";
import WhoWeAre from "@/components/home/WhoWeAre";
import ProjectPartners from "@/components/home/ProjectPartners";
import ProcessSection from "@/components/home/ProcessSection";
import ReviewsSection from "@/components/home/ReviewsSection";
import FaqSection from "@/components/home/FaqSection";
import FinalCtaSection from "@/components/home/FinalCtaSection";
import ContactSection from "@/components/home/ContactSection";
import BackToTop from "@/components/BackToTop";

export default function Home() {
  return (
    <main>
      <Hero />
      <Credentials />
      <Services />
      <CustomPergolas />
      <Projects />
      <AboutSouthFlorida />
      < WhoWeAre />
      <ProjectPartners />
      <ProcessSection />
      <ReviewsSection />
      <FaqSection />
      <FinalCtaSection />
      <ContactSection />
      <BackToTop />
    </main>
  );
}