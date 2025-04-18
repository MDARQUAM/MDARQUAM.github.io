interface ResearchArea {
  id: number;
  title: string;
  icon: string;
  description: string;
  tags: string[];
}

interface Project {
  id: number;
  title: string;
  description: string;
  period: string;
  team: string;
  funding: string;
}

export default function ResearchSection() {
  const researchAreas: ResearchArea[] = [
    {
      id: 1,
      title: "Machine Learning & AI",
      icon: "brain",
      description: "Developing novel machine learning algorithms and neural network architectures for complex data analysis and prediction tasks.",
      tags: ["Deep Learning", "Neural Networks", "Reinforcement Learning"]
    },
    {
      id: 2,
      title: "Healthcare Informatics",
      icon: "activity",
      description: "Applying data science and AI techniques to healthcare challenges, including predictive diagnostics, medical image analysis, and personalized medicine.",
      tags: ["Medical Imaging", "Predictive Analytics", "Clinical Decision Support"]
    },
    {
      id: 3,
      title: "Natural Language Processing",
      icon: "message-square",
      description: "Researching advanced NLP techniques for text understanding, sentiment analysis, and intelligent information extraction from unstructured data.",
      tags: ["Transformer Models", "Sentiment Analysis", "Language Generation"]
    },
    {
      id: 4,
      title: "Educational Technology",
      icon: "graduation-cap",
      description: "Investigating innovative approaches to enhance learning outcomes through adaptive learning systems, personalized education, and learning analytics.",
      tags: ["Adaptive Learning", "Learning Analytics", "Student Modeling"]
    },
    {
      id: 5,
      title: "Cybersecurity Analytics",
      icon: "shield",
      description: "Developing advanced techniques for threat detection, anomaly identification, and security optimization using machine learning approaches.",
      tags: ["Threat Detection", "Anomaly Detection", "Security Optimization"]
    },
    {
      id: 6,
      title: "Data Analytics & Visualization",
      icon: "bar-chart-2",
      description: "Exploring innovative approaches for complex data visualization and developing new analytics techniques for extracting actionable insights.",
      tags: ["Visual Analytics", "Exploratory Analysis", "Interactive Dashboards"]
    }
  ];

  const projects: Project[] = [
    {
      id: 1,
      title: "AI-Powered Early Disease Detection System",
      description: "Developing a machine learning framework for early detection of chronic diseases using multimodal data sources including clinical, genetic, and lifestyle information.",
      period: "2022-2024",
      team: "4 Researchers",
      funding: "ICMR Funded"
    },
    {
      id: 2,
      title: "Personalized Adaptive Learning Platform",
      description: "Creating an intelligent tutoring system that adapts to individual student learning patterns to optimize educational outcomes in STEM education.",
      period: "2021-2023",
      team: "3 Researchers",
      funding: "DST Funded"
    },
    {
      id: 3,
      title: "Secure Healthcare Data Exchange Framework",
      description: "Developing a blockchain-based secure framework for healthcare data exchange that ensures privacy while enabling collaborative research.",
      period: "2023-2025",
      team: "5 Researchers",
      funding: "Industry Collaboration"
    }
  ];

  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case "brain":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
          </svg>
        );
      case "activity":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        );
      case "message-square":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        );
      case "graduation-cap":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path d="M12 14l9-5-9-5-9 5 9 5z" />
            <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
          </svg>
        );
      case "shield":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
        );
      case "bar-chart-2":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
        );
      default:
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
        );
    }
  };

  return (
    <section id="research" className="section-container py-12 md:py-16 bg-neutral-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-serif font-bold text-3xl text-primary mb-8 text-center">Research Areas</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {researchAreas.map((area) => (
            <div key={area.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-3 bg-primary"></div>
              <div className="p-5">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center bg-primary-light text-white">
                    {renderIcon(area.icon)}
                  </div>
                  <h3 className="font-serif font-semibold text-xl text-primary ml-3">{area.title}</h3>
                </div>
                <p className="mb-4">{area.description}</p>
                <div className="mt-2">
                  {area.tags.map((tag, idx) => (
                    <span key={idx} className="inline-block bg-secondary-light bg-opacity-20 text-secondary-dark text-xs px-2 py-1 rounded mr-2 mb-2">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 bg-white rounded-lg shadow-md p-6">
          <h3 className="font-serif font-semibold text-2xl text-primary mb-4">Current Research Projects</h3>
          <div className="space-y-6">
            {projects.map((project) => (
              <div key={project.id} className="border-b border-neutral pb-5 last:border-b-0 last:pb-0">
                <h4 className="font-medium text-lg text-primary mb-2">{project.title}</h4>
                <p className="mb-3">{project.description}</p>
                <div className="flex flex-wrap items-center text-sm text-neutral-medium">
                  <span className="mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {project.period}
                  </span>
                  <span className="mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    {project.team}
                  </span>
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    {project.funding}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
