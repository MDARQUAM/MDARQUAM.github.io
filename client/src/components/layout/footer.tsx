import { Button } from "@/components/ui/button";
import { Facebook, GitPullRequest, Linkedin, Twitter } from "lucide-react";
import { GoogleScholarIcon, ResearchGateIcon } from "@/components/icons";

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="font-serif text-2xl font-bold mb-2">Dr. Md Arquam</h2>
            <p className="text-white/80">Assistant Professor</p>
            <p className="text-white/80">Indian Institute of Information Technology Sonepat</p>
          </div>
          
          <div className="text-center mb-6 md:mb-0">
            <p className="text-white/80">&copy; {new Date().getFullYear()} Dr. Md Arquam. All rights reserved.</p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
              <a 
                href="https://www.linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-accent transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-accent transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
              <a 
                href="https://www.researchgate.net" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-accent transition-colors"
                aria-label="ResearchGate"
              >
                <ResearchGateIcon size={18} />
              </a>
              <a 
                href="https://scholar.google.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-accent transition-colors"
                aria-label="Google Scholar"
              >
                <GoogleScholarIcon size={18} />
              </a>
            </div>
            <a 
              href="#" 
              className="text-white/80 hover:text-white transition-colors text-sm"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
