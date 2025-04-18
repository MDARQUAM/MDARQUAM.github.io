import {
  Brain,
  Database,
  Eye,
  GraduationCap,
  Laptop,
  Network,
  Bot,
  Share2,
  Cpu,
  BarChart4,
  FileCode2,
  Bitcoin,
  type LucideProps
} from "lucide-react";

export type Icon = React.ComponentType<React.SVGProps<SVGSVGElement>>;

export const Icons = {
  MachineLearning: Bot,
  ComputerVision: Eye,
  PatternRecognition: Network,
  ArtificialIntelligence: Brain,
  BigDataAnalytics: Database,
  HealthcareInformatics: Laptop,
  GraduationCap: GraduationCap,
  ComplexNetworks: Share2,
  QuantumComputing: Cpu,
  DataAnalytics: BarChart4,
  DataScience: FileCode2,
  Blockchain: Bitcoin
};

export const ResearchGateIcon = (props: LucideProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M12 2H2v10h10V2zM5 5.5h4M5 8h4M5 10.5h4M22 2h-8v10h8V2zM18 5.5h-2M18 8h-2M18 10.5h-2M12 14H2v8h10v-8zM5 17.5h4M5 20h4M22 14h-8v8h8v-8zM18 17.5h-2M18 20h-2z" />
  </svg>
);

export const GoogleScholarIcon = (props: LucideProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M5.242 13.769L0 9.5 12 0l12 9.5-5.242 4.269C17.548 11.249 14.978 9.5 12 9.5c-2.977 0-5.548 1.748-6.758 4.269z" />
    <path d="M12 10a7 7 0 1 0 0 14 7 7 0 0 0 0-14z" />
  </svg>
);

export const OrcidIcon = (props: LucideProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2z" />
    <circle cx="12" cy="7" r="1" />
    <path d="M11 9h2v8h-2z" />
  </svg>
);
