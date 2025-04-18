import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BriefcaseIcon, GraduationCapIcon, AwardIcon } from "lucide-react";

interface PositionItem {
  role: string;
  institution: string;
  period: string;
  location?: string;
  type: "academic" | "industry" | "teaching" | "certification";
}

const positionData: PositionItem[] = [
  {
    role: "Assistant Professor",
    institution: "Indian Institute of Information Technology, Sonepat",
    period: "April 19, 2024 - Present",
    location: "Sonepat, Haryana",
    type: "academic"
  },
  {
    role: "Assistant Professor",
    institution: "School of Computing Science and Engineering, Galgotias University",
    period: "October 14, 2022 - November 16, 2023",
    location: "Greater Noida",
    type: "academic"
  },
  {
    role: "Teaching Assistant",
    institution: "Department of Computer Science and Engineering, National Institute of Technology",
    period: "August 08, 2016 - July 23, 2021",
    location: "Delhi",
    type: "teaching"
  },
  {
    role: "Assistant Professor",
    institution: "Department of Computer Science and Engineering, Ideal Institute of Technology",
    period: "January 22, 2016 - June 30, 2016",
    location: "Ghaziabad, U.P.",
    type: "academic"
  },
  {
    role: "Assistant Professor",
    institution: "Department of Computer Science and Engineering, National Institute of Technology",
    period: "March 03, 2015 - June 02, 2015",
    location: "Delhi",
    type: "academic"
  },
  {
    role: "Teaching Assistant",
    institution: "Department of Computer Science and Engineering, University College of Engineering, Rajasthan Technical University",
    period: "August 25, 2012 - June 30, 2014",
    location: "Kota",
    type: "teaching"
  },
  {
    role: "Network Engineer",
    institution: "TVS Net Technologies Ltd",
    period: "October 17, 2011 - June 30, 2012",
    type: "industry"
  },
  {
    role: "Network Engineer",
    institution: "Targus Technologies Pvt. Ltd",
    period: "September 23, 2010 - October 15, 2011",
    type: "industry"
  },
  {
    role: "Desktop Support Engineer",
    institution: "Progressive Infovision Pvt. Ltd",
    period: "October 25, 2009 - September 23, 2010",
    type: "industry"
  },
  {
    role: "Cisco Certified Network Associate",
    institution: "Cisco",
    period: "Cisco ID: CSCO11741724",
    type: "certification"
  }
];

export default function ExperienceSection() {
  // Filter positions by type
  const academicPositions = positionData.filter(position => position.type === "academic");
  const industryPositions = positionData.filter(position => position.type === "industry");
  const teachingPositions = positionData.filter(position => position.type === "teaching");
  const certifications = positionData.filter(position => position.type === "certification");
  
  return (
    <section id="experience" className="py-16 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="font-serif text-3xl font-bold text-primary mb-12 text-center">
          Professional Experience
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-6">
              <GraduationCapIcon className="h-7 w-7 text-primary mr-3" />
              <h3 className="font-serif text-2xl font-bold text-primary">Academic Positions</h3>
            </div>
            
            <div className="space-y-4">
              {academicPositions.map((position, index) => (
                <Card key={index} className="bg-white">
                  <CardContent className="p-5">
                    <h4 className="font-serif text-lg font-bold mb-1">{position.role}</h4>
                    <p className="text-neutral-700 mb-1">{position.institution}</p>
                    <div className="flex flex-wrap justify-between items-center">
                      <Badge variant="outline" className="bg-primary/5 mt-2">{position.period}</Badge>
                      {position.location && (
                        <span className="text-sm text-neutral-500">{position.location}</span>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          <div>
            <div className="flex items-center mb-6">
              <BriefcaseIcon className="h-7 w-7 text-primary mr-3" />
              <h3 className="font-serif text-2xl font-bold text-primary">Industry Experience</h3>
            </div>
            
            <div className="space-y-4">
              {industryPositions.map((position, index) => (
                <Card key={index} className="bg-white">
                  <CardContent className="p-5">
                    <h4 className="font-serif text-lg font-bold mb-1">{position.role}</h4>
                    <p className="text-neutral-700 mb-1">{position.institution}</p>
                    <div className="flex flex-wrap justify-between items-center">
                      <Badge variant="outline" className="bg-primary/5 mt-2">{position.period}</Badge>
                      {position.location && (
                        <span className="text-sm text-neutral-500">{position.location}</span>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="mt-8">
              <div className="flex items-center mb-6">
                <AwardIcon className="h-7 w-7 text-primary mr-3" />
                <h3 className="font-serif text-2xl font-bold text-primary">Certifications</h3>
              </div>
              
              <div className="space-y-4">
                {certifications.map((certification, index) => (
                  <Card key={index} className="bg-white">
                    <CardContent className="p-5">
                      <h4 className="font-serif text-lg font-bold mb-1">{certification.role}</h4>
                      <p className="text-neutral-700 mb-1">{certification.institution}</p>
                      <Badge variant="outline" className="bg-primary/5 mt-2">{certification.period}</Badge>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        <div>
          <div className="flex items-center mb-6">
            <GraduationCapIcon className="h-7 w-7 text-primary mr-3" />
            <h3 className="font-serif text-2xl font-bold text-primary">Teaching Experience</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {teachingPositions.map((position, index) => (
              <Card key={index} className="bg-white">
                <CardContent className="p-5">
                  <h4 className="font-serif text-lg font-bold mb-1">{position.role}</h4>
                  <p className="text-neutral-700 mb-1">{position.institution}</p>
                  <div className="flex flex-wrap justify-between items-center">
                    <Badge variant="outline" className="bg-primary/5 mt-2">{position.period}</Badge>
                    {position.location && (
                      <span className="text-sm text-neutral-500">{position.location}</span>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
        <div className="mt-12 bg-white p-6 rounded-lg">
          <h3 className="font-serif text-xl font-bold text-primary mb-4">Teaching Responsibilities</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Teaching Students of B. Tech. and M. Tech (Computer Science & Engineering)</li>
            <li>Guiding Students to complete their projects</li>
            <li>Maintenance and Monitoring of Computer Lab of Department of Computer Science and Engineering, Galgotias University</li>
            <li>Maintenance and Monitoring of Computer Lab of NIT Delhi</li>
          </ul>
          
          <h3 className="font-serif text-xl font-bold text-primary mb-4 mt-8">Industry Responsibilities</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Installation and Troubleshooting of Cisco routers and Switches</li>
            <li>Installation and Troubleshooting of Servers and Network Devices</li>
            <li>IOS updation, backup and restoration of routers and switches</li>
            <li>Patching of cables and provide connection of servers to network devices</li>
            <li>Providing Support and monitoring of Data Center Operation</li>
            <li>Coordination with different internal department and service providers for incident escalation, tracking and closure</li>
            <li>Independently handling Fault Management System (FMS) for installation of Network devices and maintenance, achievement of customer satisfaction and quality requirements to ensure satisfactory best solutions to customer problems in adherence to Service Level Agreement</li>
          </ul>
          
          <h3 className="font-serif text-xl font-bold text-primary mb-4 mt-8">Technical Skills</h3>
          <div className="space-y-3">
            <div className="flex flex-wrap gap-2 items-center">
              <span className="font-medium">Programming Languages:</span>
              <Badge variant="outline" className="bg-primary/5">C</Badge>
              <Badge variant="outline" className="bg-primary/5">C++</Badge>
              <Badge variant="outline" className="bg-primary/5">Python</Badge>
              <Badge variant="outline" className="bg-primary/5">Java</Badge>
              <Badge variant="outline" className="bg-primary/5">LaTeX</Badge>
            </div>
            <div className="flex flex-wrap gap-2 items-center">
              <span className="font-medium">Simulators:</span>
              <Badge variant="outline" className="bg-primary/5">NS2</Badge>
              <Badge variant="outline" className="bg-primary/5">Matlab</Badge>
              <Badge variant="outline" className="bg-primary/5">Packet Tracer</Badge>
              <Badge variant="outline" className="bg-primary/5">VMWARE</Badge>
            </div>
            <div className="flex flex-wrap gap-2 items-center">
              <span className="font-medium">Web Technologies:</span>
              <Badge variant="outline" className="bg-primary/5">HTML</Badge>
              <Badge variant="outline" className="bg-primary/5">XML</Badge>
              <Badge variant="outline" className="bg-primary/5">CSS</Badge>
              <Badge variant="outline" className="bg-primary/5">JavaScript</Badge>
              <Badge variant="outline" className="bg-primary/5">PHP</Badge>
            </div>
            <div className="flex flex-wrap gap-2 items-center">
              <span className="font-medium">Computer Networking:</span>
              <Badge variant="outline" className="bg-primary/5">Ethernet</Badge>
              <Badge variant="outline" className="bg-primary/5">Network Design</Badge>
              <Badge variant="outline" className="bg-primary/5">Routers & Switch Configuration (Cisco)</Badge>
            </div>
          </div>
          
          <h3 className="font-serif text-xl font-bold text-primary mb-4 mt-8">Extra Curricular Activities</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Throughout First class in entire educational career</li>
            <li>Received MHRD Govt. Scholarship for M. Tech and PhD</li>
            <li>Organized workshop on Cloud Computing in RTU</li>
            <li>Delivered multiple Expert talks on Complex Network</li>
          </ul>
        </div>
      </div>
    </section>
  );
}