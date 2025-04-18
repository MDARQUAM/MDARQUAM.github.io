import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, User } from "lucide-react";
import { Icons } from "@/components/icons";

interface Course {
  id: number;
  code: string;
  title: string;
  semester: string;
  year: string;
  type: string;
  schedule?: string;
  description: string;
  materials?: string;
}

interface Student {
  id: number;
  name: string;
  year: string;
  topic: string;
}

const currentCourses: Course[] = [
  {
    id: 1,
    code: "UCS004",
    title: "OOPS",
    semester: "2nd",
    year: "2025",
    type: "Core Course",
    schedule: "Monday, Tuesday & Thursday",
    description: "An introduction to programming concepts, algorithms, and applications.",
    materials: "#"
  },
  {
    id: 2,
    code: "UCS014",
    title: "Computer Network",
    semester: "Fall",
    year: "2025",
    type: "Core",
    schedule: "Monday, Wednesday & Thursday",
    description: "Advanced study of Network programming and techniques for network Design analysis",
    materials: "#"
  }
];

const previousCourses: Course[] = [
  {
    id: 3,
    code: "CS211",
    title: "Big Data",
    semester: "Spring",
    year: "2024",
    type: "Core Course",
    description: "Fundamental of Hadoop, Mapreduce, HDFS and their applications."
  },
  {
    id: 4,
    code: "",
    title: "Advanced Artificial Intelligence",
    semester: "Fall",
    year: "2024",
    type: "Elective",
    description: "Advanced concepts in AI including knowledge representation, reasoning, planning, and multi-agent systems."
  },
  ];

const phdStudents: Student[] = [
  {
    id: 1,
    name: "Neha Sehgal",
    year: "2024-Present",
    topic: "Deep Learning for Medical Diagnosis"
  },
  {
    id: 2,
    name: "Faizan Ahmed",
    year: "2025-Present",
    topic: "Complex Network"
  }
  {
    id: 3,
    name: "Yogesh Sharma",
    year: "2024",
    topic: "Soft Computing"
  },
  {
    id: 4,
    name: "Akhilesh Tripathi",
    year: "2024",
    topic: "Finance and Accounting Prediction using Machine Learning"
  },
];

const mtechStudents: Student[] = [
  
  {
    id: 5,
    name: "Ketan",
    year: "2024",
    topic: "Cricket Team Prediction using Machine Learning"
  },
  {
    id: 6,
    name: "Abhishek Tiwari",
    year: "2024",
    topic: "Edge Computing for Real-time Image Processing"
  }
];

export default function TeachingSection() {
  return (
    <section id="teaching" className="py-16 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="font-serif text-3xl font-bold text-primary mb-12 text-center">
          Teaching
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div>
            <h3 className="font-serif text-2xl font-bold text-primary mb-6">Current Courses</h3>
            
            <div className="space-y-6">
              {currentCourses.map((course) => (
                <Card key={course.id} className="bg-white hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <h4 className="font-serif text-lg font-bold mb-2">
                      {course.code}: {course.title}
                    </h4>
                    <p className="text-neutral-600 mb-4">
                      {course.semester} {course.year} | B.Tech {course.code.startsWith("CS4") ? "4th" : "3rd"} Year
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge className="bg-primary/10 text-primary">{course.type}</Badge>
                      {course.schedule && (
                        <Badge variant="secondary" className="text-neutral-600">
                          {course.schedule}
                        </Badge>
                      )}
                    </div>
                    <p className="mb-4">{course.description}</p>
                    {course.materials && (
                      <a href={course.materials} className="text-primary hover:text-accent text-sm flex items-center w-max">
                        <ExternalLink className="h-4 w-4 mr-1" /> Course Materials
                      </a>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="font-serif text-2xl font-bold text-primary mb-6">Previous Courses</h3>
            
            <div className="space-y-6">
              {previousCourses.map((course) => (
                <Card key={course.id} className="bg-white hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <h4 className="font-serif text-lg font-bold mb-2">
                      {course.code}: {course.title}
                    </h4>
                    <p className="text-neutral-600 mb-4">
                      {course.semester} {course.year} | {course.code.startsWith("CS5") ? "M.Tech" : `B.Tech ${course.code.charAt(2)}nd Year`}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge className="bg-primary/10 text-primary">{course.type}</Badge>
                    </div>
                    <p className="mb-4">{course.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-12 max-w-3xl mx-auto">
          <h3 className="font-serif text-2xl font-bold text-primary mb-6 text-center">Student Supervision</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-white">
              <CardContent className="p-6">
                <h4 className="font-serif text-lg font-bold mb-3">Ph.D. Students</h4>
                <ul className="space-y-4">
                  {phdStudents.map((student) => (
                    <li key={student.id} className="flex items-start">
                      <User className="h-5 w-5 mr-2 text-primary mt-1" />
                      <div>
                        <p className="font-semibold">{student.name}</p>
                        <p className="text-sm text-neutral-600">{student.year}</p>
                        <p className="text-sm italic">Topic: {student.topic}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            
            <Card className="bg-white">
              <CardContent className="p-6">
                <h4 className="font-serif text-lg font-bold mb-3">M.Tech Projects</h4>
                <ul className="space-y-4">
                  {mtechStudents.map((student) => (
                    <li key={student.id} className="flex items-start">
                      <User className="h-5 w-5 mr-2 text-primary mt-1" />
                      <div>
                        <p className="font-semibold">{student.name}</p>
                        <p className="text-sm text-neutral-600">{student.year}</p>
                        <p className="text-sm italic">Project: {student.topic}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
