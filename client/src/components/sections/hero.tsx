import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Linkedin, 
  Download,
  ExternalLink
} from "lucide-react";
import { GoogleScholarIcon, OrcidIcon, ResearchGateIcon } from "@/components/icons";
import profileImage from "@/assets/Arquam.jpeg";
import cvPdf from "@/assets/CV_AUS.pdf";

export default function HeroSection() {
  return (
    <section id="home" className="py-16 md:py-24 bg-secondary">
      {/* Institute Header */}
      <div className="bg-primary text-white py-3 mb-8">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-3 md:mb-0">
            <h1 className="text-lg md:text-xl font-bold">Indian Institute of Information Technology Sonepat</h1>
            <p className="text-sm md:text-base text-white/80">An Institution of National Importance under MoE, Govt. of India</p>
          </div>
          <div className="text-sm md:text-base">
            <p className="text-white/90">IIT Delhi Techno Park, Rajiv Gandhi Education City</p>
            <p className="text-white/90">Rai, Sonepat, Haryana - 131029, India</p>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/3 mb-8 md:mb-0 flex justify-center">
          <div className="relative">
            <div className="h-64 w-64 rounded-full overflow-hidden border-4 border-white shadow-lg">
              <img 
                src={profileImage} 
                alt="Dr. Md Arquam" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-2 -right-2 bg-primary text-white px-3 py-1 rounded-full shadow-md">
              <i className="fas fa-graduation-cap mr-1"></i> Faculty
            </div>
          </div>
        </div>
        <div className="md:w-2/3 md:pl-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-4">Dr. Md Arquam</h2>
          <h3 className="text-xl font-semibold text-neutral-600 mb-4">Assistant Professor</h3>
          <p className="text-lg mb-6">Department of Computer Science and Engineering<br />Indian Institute of Information Technology Sonepat</p>
          <div className="mb-6">
            <p className="mb-4">
              Welcome to my academic profile. I specialize in <span className="font-semibold">Complex Networks, Dynamics on & of Networks, Blockchain, and Data Analytics</span>. My research focuses on epidemic spreading, rumor spreading, evolving networks, and quantum computing.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href={cvPdf} download="CV_Mohammad_Arquam.pdf">
              <Button variant="default" className="bg-primary hover:bg-primary/90">
                <Download className="mr-2 h-4 w-4" /> Download CV
              </Button>
            </a>
            <a href="http://iiitsonepat.ac.in/" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
                <ExternalLink className="mr-2 h-4 w-4" /> Visit Institute
              </Button>
            </a>
            <div className="flex space-x-3 mt-3 md:mt-0">
              <a 
                href="https://scholar.google.co.in/citations?user=zEyTSS4AAAAJ&hl=en" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-neutral-100 hover:bg-neutral-200 p-3 rounded-full transition-colors" 
                title="Google Scholar"
                aria-label="Google Scholar"
              >
                <GoogleScholarIcon className="h-5 w-5 text-neutral-800" />
              </a>
              <a 
                href="https://www.researchgate.net/profile/Md-Arquam-2/stats" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-neutral-100 hover:bg-neutral-200 p-3 rounded-full transition-colors" 
                title="ResearchGate"
                aria-label="ResearchGate"
              >
                <ResearchGateIcon className="h-5 w-5 text-neutral-800" />
              </a>
              <a 
                href="https://www.linkedin.com/in/mdarquam/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-neutral-100 hover:bg-neutral-200 p-3 rounded-full transition-colors" 
                title="LinkedIn"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5 text-neutral-800" />
              </a>
              <a 
                href="https://orcid.org/0000-0001-7193-2089" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-neutral-100 hover:bg-neutral-200 p-3 rounded-full transition-colors" 
                title="ORCID"
                aria-label="ORCID"
              >
                <OrcidIcon className="h-5 w-5 text-neutral-800" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
