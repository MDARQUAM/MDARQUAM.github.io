import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FileText, Link2, Quote } from "lucide-react";

interface Publication {
  id: number;
  title: string;
  authors: string;
  venue: string;
  year: string;
  type: "Journal" | "Conference" | "Book Chapter";
  tags: string[];
  links: {
    pdf?: string;
    doi?: string;
    cite?: string;
  };
}

const publications: Publication[] = [
  {
    id: 1,
    title: "Statistical Analysis of the Properties of Geometric Network with Node Mobility",
    authors: "Arquam, Md and Tiwari, Utkarsh and Kumari, Suchi",
    venue: "2024 IEEE 29th Asia Pacific Conference on Communications (APCC)",
    year: "2024",
    type: "Journal",
    tags: [" Complex Network", "Epidemic Spreading", "Contact Network", "Random Geometry"],
    links: {
      pdf: "#",
      doi: "#",
      cite: "#"
    }
  },
  {
    id: 2,
    title: "Maximization of Communication Network Throughput using Dynamic Traffic Allocation Scheme",
    authors: "Arquam, M., S Kumari.",
    venue: "17th Asian Conference on Intelligent Information and Database Systems",
    year: "2025",
    type: "Conference",
    tags: ["Communication Network", "Throughput", "Dynamic Traffic Allocation", "QoS", "Bandwidth utilization"],
    links: {
      pdf: "#",
      doi: "#",
      cite: "#"
    }
  },
  {
    id: 3,
    title: "Recent Advances in Computer Vision: Algorithms and Applications",
    authors: "Arquam, M., & Singh, R.",
    venue: "In Computational Intelligence in Pattern Recognition (pp. 215-240). Springer",
    year: "2020",
    type: "Book Chapter",
    tags: ["Computer Vision", "Pattern Recognition", "Survey"],
    links: {
      pdf: "#",
      doi: "#",
      cite: "#"
    }
  }
];

export default function PublicationsSection() {
  const [filter, setFilter] = useState<string>("all");
  
  const filteredPublications = publications.filter(pub => {
    if (filter === "all") return true;
    return pub.type.toLowerCase().includes(filter.toLowerCase());
  });

  return (
    <section id="publications" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="font-serif text-3xl font-bold text-primary mb-12 text-center">
          Publications
        </h2>
        
        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-md shadow-sm" role="group">
            <Button
              variant={filter === "all" ? "default" : "outline"}
              className={filter === "all" ? "bg-primary text-white" : "bg-primary/10 text-primary hover:bg-primary/20"}
              onClick={() => setFilter("all")}
            >
              All Publications
            </Button>
            <Button
              variant={filter === "journal" ? "default" : "outline"}
              className={filter === "journal" ? "bg-primary text-white" : "bg-primary/10 text-primary hover:bg-primary/20"}
              onClick={() => setFilter("journal")}
            >
              Journal Papers
            </Button>
            <Button
              variant={filter === "conference" ? "default" : "outline"}
              className={filter === "conference" ? "bg-primary text-white" : "bg-primary/10 text-primary hover:bg-primary/20"}
              onClick={() => setFilter("conference")}
            >
              Conference Papers
            </Button>
            <Button
              variant={filter === "book" ? "default" : "outline"}
              className={filter === "book" ? "bg-primary text-white" : "bg-primary/10 text-primary hover:bg-primary/20"}
              onClick={() => setFilter("book")}
            >
              Books & Chapters
            </Button>
          </div>
        </div>
        
        <div className="space-y-6 max-w-4xl mx-auto">
          {filteredPublications.map((pub) => (
            <Card 
              key={pub.id} 
              className="publication-card bg-white border border-gray-200 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <CardContent className="p-6">
                <div className="flex justify-between items-start">
                  <h3 className="font-serif text-lg font-bold mb-3">{pub.title}</h3>
                  <Badge variant="outline" className="bg-primary/10 text-primary text-xs px-2 py-1">
                    {pub.type}
                  </Badge>
                </div>
                <p className="font-mono text-sm mb-3">{pub.authors} ({pub.year})</p>
                <p className="mb-4">{pub.venue}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {pub.tags.map((tag, i) => (
                    <Badge key={i} variant="secondary" className="text-neutral-600 text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex flex-wrap gap-3">
                  {pub.links.pdf && (
                    <a href={pub.links.pdf} className="text-primary hover:text-accent text-sm flex items-center">
                      <FileText className="h-4 w-4 mr-1" /> PDF
                    </a>
                  )}
                  {pub.links.doi && (
                    <a href={pub.links.doi} className="text-primary hover:text-accent text-sm flex items-center">
                      <Link2 className="h-4 w-4 mr-1" /> DOI
                    </a>
                  )}
                  {pub.links.cite && (
                    <a href={pub.links.cite} className="text-primary hover:text-accent text-sm flex items-center">
                      <Quote className="h-4 w-4 mr-1" /> Cite
                    </a>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
          
          <div className="text-center mt-8">
            <Button variant="link" className="text-primary hover:text-accent font-semibold">
              View all publications
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
