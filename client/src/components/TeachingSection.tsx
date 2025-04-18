import { Card, CardContent, CardFooter } from "@/components/ui/card";

interface Course {
  id: number;
  code: string;
  name: string;
  level: string;
  term: string;
  description: string;
  tags: string[];
  materialsLink?: string;
}

interface PreviousCourse {
  id: number;
  code: string;
  name: string;
  level: string;
  term: string;
  students: number;
  rating: string;
}

interface Student {
  id: number;
  name: string;
  period: string;
  topic: string;
}

export default function TeachingSection() {
  const currentCourses: Course[] = [
    {
      id: 1,
      code: "CS501",
      name: "Machine Learning",
      level: "B.Tech 3rd Year",
      term: "Fall 2023",
      description: "Introduction to machine learning concepts, algorithms, and applications. Covers supervised and unsupervised learning techniques, neural networks, and hands-on implementation.",
      tags: ["Core Course", "4 Credits", "Lab Component"],
      materialsLink: "#"
    },
    {
      id: 2,
      code: "CS602",
      name: "Advanced Data Mining",
      level: "M.Tech 1st Year",
      term: "Fall 2023",
      description: "Advanced techniques for knowledge discovery from large datasets, including pattern mining, clustering, classification, and anomaly detection with real-world applications.",
      tags: ["Elective", "3 Credits", "Project-based"],
      materialsLink: "#"
    },
    {
      id: 3,
      code: "CS405",
      name: "Natural Language Processing",
      level: "B.Tech 4th Year",
      term: "Fall 2023",
      description: "Fundamental concepts and techniques in NLP, including text processing, language modeling, syntactic parsing, and modern transformer architectures.",
      tags: ["Elective", "3 Credits", "Lab Component"],
      materialsLink: "#"
    }
  ];

  const previousCourses: PreviousCourse[] = [
    {
      id: 1,
      code: "CS301",
      name: "Data Structures and Algorithms",
      level: "B.Tech 2nd Year",
      term: "2022-2023",
      students: 120,
      rating: "4.8/5"
    },
    {
      id: 2,
      code: "CS502",
      name: "Deep Learning",
      level: "B.Tech 3rd Year",
      term: "2022-2023",
      students: 85,
      rating: "4.7/5"
    },
    {
      id: 3,
      code: "CS601",
      name: "Big Data Analytics",
      level: "M.Tech 1st Year",
      term: "2021-2022",
      students: 45,
      rating: "4.9/5"
    },
    {
      id: 4,
      code: "CS402",
      name: "Database Management Systems",
      level: "B.Tech 2nd Year",
      term: "2021-2022",
      students: 110,
      rating: "4.6/5"
    }
  ];

  const phdStudents: Student[] = [
    {
      id: 1,
      name: "Rahul Kumar",
      period: "2022-present",
      topic: "Deep Learning for Medical Image Analysis"
    },
    {
      id: 2,
      name: "Priya Singh",
      period: "2021-present",
      topic: "Privacy-Preserving Machine Learning for Healthcare"
    }
  ];

  const mtechTopics = [
    "Natural Language Processing for Educational Technology",
    "Explainable AI for Healthcare Decision Support",
    "Federated Learning for Privacy-Preserving Analytics",
    "Computer Vision for Autonomous Systems",
    "Reinforcement Learning for Adaptive User Interfaces"
  ];

  return (
    <section id="teaching" className="section-container py-12 md:py-16 bg-neutral-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-serif font-bold text-3xl text-primary mb-8 text-center">Teaching</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h3 className="font-serif font-semibold text-2xl text-primary mb-4">Current Courses</h3>
            
            <div className="space-y-4">
              {currentCourses.map((course) => (
                <Card key={course.id} className="overflow-hidden">
                  <CardContent className="p-5">
                    <h4 className="font-medium text-lg text-primary mb-1">{course.code}: {course.name}</h4>
                    <p className="text-neutral-medium mb-3">{course.level} | {course.term}</p>
                    <p className="mb-4">{course.description}</p>
                    <div className="flex flex-wrap">
                      {course.tags.map((tag, idx) => (
                        <span key={idx} className="bg-primary bg-opacity-10 text-primary text-xs px-2 py-1 rounded mr-2 mb-2">{tag}</span>
                      ))}
                    </div>
                  </CardContent>
                  {course.materialsLink && (
                    <CardFooter className="border-t border-neutral px-5 py-3 bg-neutral-light">
                      <a href={course.materialsLink} className="text-secondary hover:text-secondary-dark inline-flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                        Course Materials
                      </a>
                    </CardFooter>
                  )}
                </Card>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="font-serif font-semibold text-2xl text-primary mb-4">Previous Courses</h3>
            
            <div className="space-y-4">
              {previousCourses.map((course) => (
                <div key={course.id} className="bg-white rounded-lg shadow-sm px-5 py-4 border-l-4 border-secondary">
                  <h4 className="font-medium text-lg text-primary mb-1">{course.code}: {course.name}</h4>
                  <p className="text-neutral-medium mb-2">{course.level} | {course.term}</p>
                  <div className="flex flex-wrap text-sm">
                    <span className="mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                      {course.students} Students
                    </span>
                    <span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                      </svg>
                      {course.rating} Rating
                    </span>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8">
              <h3 className="font-serif font-semibold text-2xl text-primary mb-4">Student Supervision</h3>
              
              <Card className="p-5">
                <div className="space-y-5">
                  <div>
                    <h4 className="font-medium text-lg text-primary mb-3">Ph.D. Students</h4>
                    <ul className="space-y-2">
                      {phdStudents.map((student) => (
                        <li key={student.id} className="flex items-start">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-secondary mt-1 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path d="M12 14l9-5-9-5-9 5 9 5z" />
                            <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                          </svg>
                          <div>
                            <p className="font-medium">{student.name} ({student.period})</p>
                            <p className="text-sm text-neutral-medium">Topic: {student.topic}</p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-lg text-primary mb-3">M.Tech Students</h4>
                    <p className="mb-2">Currently supervising 5 M.Tech thesis projects in the areas of:</p>
                    <ul className="list-disc pl-5 space-y-1 text-sm">
                      {mtechTopics.map((topic, idx) => (
                        <li key={idx}>{topic}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
