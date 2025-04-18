import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import HeroSection from "@/components/sections/hero";
import EducationSection from "@/components/sections/education";
import ResearchSection from "@/components/sections/research";
import PublicationsSection from "@/components/sections/publications";
import TeachingSection from "@/components/sections/teaching";
import ContactSection from "@/components/sections/contact";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <EducationSection />
        <ResearchSection />
        <PublicationsSection />
        <TeachingSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
