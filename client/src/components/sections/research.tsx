import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Share2, 
  Cpu, 
  Bitcoin, 
  BarChart4, 
  Brain, 
  Network,
  type LucideIcon
} from "lucide-react";

interface ResearchArea {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface Project {
  title: string;
  description: string;
  tags: string[];
}

const researchAreas: ResearchArea[] = [
  {
    icon: Share2,
    title: "Complex Networks",
    description: "Analysis of network structures, dynamics, and patterns in biological, social, and technological systems."
  },
  {
    icon: Network,
    title: "Dynamics on & of Networks",
    description: "Epidemic spreading and rumor spreading in various network structures and models."
  },
  {
    icon: Bitcoin,
    title: "Blockchain",
    description: "Distributed ledger technologies, smart contracts, and decentralized applications for secure transactions."
  },
  {
    icon: BarChart4,
    title: "Data Analytics",
    description: "Data analytic using complex network tools, statistical analysis, and visualization of large datasets."
  },
  {
    icon: Cpu,
    title: "Quantum Computing",
    description: "Quantum algorithms, quantum information processing, and quantum computing applications."
  },
  {
    icon: Brain,
    title: "Link Prediction",
    description: "Developing techniques to predict missing links and future connections in evolving networks."
  }
];

const currentProjects: Project[] = [
    {
    title: "International Research Internship",
    description: "3-month internship at University of Tartu, Estonia (June 1, 2018 – August 30, 2018) working on blockchain-based secured framework for information propagation on online social networks.",
    tags: ["Blockchain", "Research Internship", "International Collaboration"]
  }
];

export default function ResearchSection() {
  return (
    <section id="research" className="py-16 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="font-serif text-3xl font-bold text-primary mb-12 text-center">
          Research Interests
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {researchAreas.map((area, index) => {
            const IconComponent = area.icon;
            
            return (
              <Card key={index} className="bg-white hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <IconComponent className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="font-serif text-xl font-bold mb-3">{area.title}</CardTitle>
                  <CardDescription className="text-base text-neutral-800">{area.description}</CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        <div className="mt-12">
          <h3 className="font-serif text-2xl font-bold text-primary mb-6">Current Projects</h3>
          
          <div className="space-y-6">
            {currentProjects.map((project, index) => (
              <Card key={index} className="bg-white">
                <CardContent className="pt-6">
                  <CardTitle className="font-serif text-lg font-bold mb-2">{project.title}</CardTitle>
                  <p className="mb-3">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="outline" className="bg-primary/10 text-primary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
