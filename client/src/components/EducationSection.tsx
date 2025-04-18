export default function EducationSection() {
  const educations = [
    {
      id: 1,
      degree: "Ph.D. in Computer Science",
      institution: "Indian Institute of Technology",
      period: "2015 - 2020",
      thesis: "Advanced Machine Learning Algorithms for Healthcare Data Analysis",
      achievement: "Received excellence in research award for contributions in healthcare informatics"
    },
    {
      id: 2,
      degree: "M.Tech in Computer Science & Engineering",
      institution: "National Institute of Technology",
      period: "2013 - 2015",
      thesis: "Specialization in Artificial Intelligence and Machine Learning",
      achievement: "Graduated with distinction, top 5% of class"
    },
    {
      id: 3,
      degree: "B.Tech in Computer Science & Engineering",
      institution: "University Engineering College",
      period: "2009 - 2013",
      thesis: "Focus on Programming, Algorithms and System Design",
      achievement: "Received merit scholarship for academic excellence"
    }
  ];

  const certifications = [
    {
      id: 1,
      title: "Advanced Deep Learning Specialization",
      organization: "DeepLearning.AI, 2019",
      description: "Mastery in Neural Networks & Deep Learning"
    },
    {
      id: 2,
      title: "Data Science Professional",
      organization: "IBM, 2018",
      description: "Expert-level data analysis and visualization"
    },
    {
      id: 3,
      title: "Cloud Computing Architecture",
      organization: "AWS, 2017",
      description: "Advanced cloud infrastructure design"
    },
    {
      id: 4,
      title: "Project Management Professional (PMP)",
      organization: "PMI, 2016",
      description: "Expert project management methodologies"
    }
  ];

  return (
    <section id="education" className="section-container py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-serif font-bold text-3xl text-primary mb-8 text-center">Education & Qualifications</h2>
        
        <div className="max-w-3xl mx-auto">
          {educations.map((education) => (
            <div key={education.id} className="mb-8 relative pl-8 border-l-2 border-secondary">
              <div className="absolute -left-2.5 top-1">
                <div className="w-5 h-5 rounded-full bg-secondary"></div>
              </div>
              <div className="bg-neutral-light rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex flex-col sm:flex-row sm:justify-between mb-2">
                  <h3 className="font-serif font-semibold text-xl text-primary">{education.degree}</h3>
                  <span className="text-accent-dark font-medium">{education.period}</span>
                </div>
                <p className="text-neutral-medium mb-1">{education.institution}</p>
                <p className="mb-3">{education.thesis}</p>
                <p className="text-sm text-neutral-medium">{education.achievement}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-10 max-w-3xl mx-auto">
          <h3 className="font-serif font-semibold text-2xl text-primary mb-4">Professional Certifications</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {certifications.map((cert) => (
              <div key={cert.id} className="bg-white border border-neutral rounded-lg p-4 shadow-sm">
                <h4 className="font-medium text-primary mb-1">{cert.title}</h4>
                <p className="text-sm text-neutral-medium mb-2">{cert.organization}</p>
                <div className="flex items-center">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-4 w-4 text-accent mr-2" 
                    viewBox="0 0 24 24" 
                    fill="currentColor"
                  >
                    <path d="M21.179 12.794l.013.014L12 22l-9.192-9.192.013-.014A6.5 6.5 0 0 1 12 3.64a6.5 6.5 0 0 1 9.179 9.154zM4.575 5.383a4.5 4.5 0 0 0 0 6.364L12 19.172l7.425-7.425a4.5 4.5 0 0 0-6.364-6.364L12 6.444l-1.061-1.06a4.5 4.5 0 0 0-6.364 0z"/>
                    <path d="M15 9l-5 5-2.5-2.5" strokeWidth="2" stroke="currentColor" fill="none"/>
                  </svg>
                  <span className="text-sm">{cert.description}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
