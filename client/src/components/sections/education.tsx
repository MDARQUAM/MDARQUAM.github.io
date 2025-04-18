import { Card, CardContent } from "@/components/ui/card";

interface EducationItem {
  degree: string;
  institution: string;
  year: string;
  thesis?: string;
  supervisor?: string;
  distinction?: string;
}

const educationData: EducationItem[] = [
  {
    degree: "Ph.D. in Computer Science & Engineering",
    institution: "National Institute of Technology Delhi, India",
    thesis: "Modelling of Disease and Information Dynamics in Complex Networks"
  },
  {
    degree: "M.Tech in Computer Engineering",
    institution: "University College of Engineering, RTU, Kota",
     },
  {
    degree: "B.E. in Computer Engineering",
    institution: "Jamia Millia Islamia",
     },
  
];

export default function EducationSection() {
  return (
    <section id="education" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="font-serif text-3xl font-bold text-primary mb-12 text-center">
          Education & Qualifications
        </h2>
        
        <div className="max-w-3xl mx-auto">
          {educationData.map((item, index) => (
            <div key={index} className="mb-10 relative pl-8 border-l-2 border-primary">
              <div className="absolute w-4 h-4 bg-accent rounded-full -left-[9px] top-1"></div>
              <h3 className="font-serif text-xl font-bold mb-2">{item.degree}</h3>
              <p className="text-neutral-600 mb-1">{item.institution}</p>
              <p className="text-sm text-neutral-600 mb-3">{item.year}</p>
              {item.thesis && <p>{item.thesis}</p>}
              {item.supervisor && <p className="italic mt-2">Supervisor: {item.supervisor}</p>}
              {item.distinction && <p>{item.distinction}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
