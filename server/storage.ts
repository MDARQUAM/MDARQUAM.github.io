import { 
  users, 
  publications, 
  researchProjects, 
  researchAreas, 
  courses, 
  students, 
  contactMessages,
  type User, 
  type InsertUser,
  type Publication,
  type InsertPublication,
  type ResearchProject,
  type InsertResearchProject,
  type ResearchArea,
  type InsertResearchArea,
  type Course,
  type InsertCourse,
  type Student,
  type InsertStudent,
  type ContactMessage,
  type InsertContactMessage
} from "@shared/schema";
import { db } from "./db";
import { eq } from "drizzle-orm";

export interface IStorage {
  // User methods
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Publication methods
  getPublications(): Promise<Publication[]>;
  getPublication(id: number): Promise<Publication | undefined>;
  createPublication(publication: InsertPublication): Promise<Publication>;
  updatePublication(id: number, publication: Partial<InsertPublication>): Promise<Publication | undefined>;
  deletePublication(id: number): Promise<boolean>;
  
  // Research project methods
  getResearchProjects(): Promise<ResearchProject[]>;
  getResearchProject(id: number): Promise<ResearchProject | undefined>;
  createResearchProject(project: InsertResearchProject): Promise<ResearchProject>;
  updateResearchProject(id: number, project: Partial<InsertResearchProject>): Promise<ResearchProject | undefined>;
  deleteResearchProject(id: number): Promise<boolean>;
  
  // Research area methods
  getResearchAreas(): Promise<ResearchArea[]>;
  getResearchArea(id: number): Promise<ResearchArea | undefined>;
  createResearchArea(area: InsertResearchArea): Promise<ResearchArea>;
  updateResearchArea(id: number, area: Partial<InsertResearchArea>): Promise<ResearchArea | undefined>;
  deleteResearchArea(id: number): Promise<boolean>;
  
  // Course methods
  getCourses(): Promise<Course[]>;
  getCourse(id: number): Promise<Course | undefined>;
  createCourse(course: InsertCourse): Promise<Course>;
  updateCourse(id: number, course: Partial<InsertCourse>): Promise<Course | undefined>;
  deleteCourse(id: number): Promise<boolean>;
  
  // Student methods
  getStudents(): Promise<Student[]>;
  getStudent(id: number): Promise<Student | undefined>;
  createStudent(student: InsertStudent): Promise<Student>;
  updateStudent(id: number, student: Partial<InsertStudent>): Promise<Student | undefined>;
  deleteStudent(id: number): Promise<boolean>;
  
  // Contact message methods
  getContactMessages(): Promise<ContactMessage[]>;
  getContactMessage(id: number): Promise<ContactMessage | undefined>;
  createContactMessage(message: InsertContactMessage): Promise<ContactMessage>;
  markContactMessageAsRead(id: number): Promise<boolean>;
  deleteContactMessage(id: number): Promise<boolean>;
}

export class DatabaseStorage implements IStorage {
  // User methods
  async getUser(id: number): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.username, username));
    return user;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const [user] = await db.insert(users).values(insertUser).returning();
    return user;
  }
  
  // Publication methods
  async getPublications(): Promise<Publication[]> {
    return await db.select().from(publications).orderBy(publications.year);
  }
  
  async getPublication(id: number): Promise<Publication | undefined> {
    const [publication] = await db.select().from(publications).where(eq(publications.id, id));
    return publication;
  }
  
  async createPublication(publication: InsertPublication): Promise<Publication> {
    const [newPublication] = await db.insert(publications).values(publication).returning();
    return newPublication;
  }
  
  async updatePublication(id: number, publication: Partial<InsertPublication>): Promise<Publication | undefined> {
    const [updatedPublication] = await db
      .update(publications)
      .set({ ...publication, updatedAt: new Date() })
      .where(eq(publications.id, id))
      .returning();
    return updatedPublication;
  }
  
  async deletePublication(id: number): Promise<boolean> {
    const [deletedPublication] = await db
      .delete(publications)
      .where(eq(publications.id, id))
      .returning({ id: publications.id });
    return !!deletedPublication;
  }
  
  // Research project methods
  async getResearchProjects(): Promise<ResearchProject[]> {
    return await db.select().from(researchProjects);
  }
  
  async getResearchProject(id: number): Promise<ResearchProject | undefined> {
    const [project] = await db.select().from(researchProjects).where(eq(researchProjects.id, id));
    return project;
  }
  
  async createResearchProject(project: InsertResearchProject): Promise<ResearchProject> {
    const [newProject] = await db.insert(researchProjects).values(project).returning();
    return newProject;
  }
  
  async updateResearchProject(id: number, project: Partial<InsertResearchProject>): Promise<ResearchProject | undefined> {
    const [updatedProject] = await db
      .update(researchProjects)
      .set({ ...project, updatedAt: new Date() })
      .where(eq(researchProjects.id, id))
      .returning();
    return updatedProject;
  }
  
  async deleteResearchProject(id: number): Promise<boolean> {
    const [deletedProject] = await db
      .delete(researchProjects)
      .where(eq(researchProjects.id, id))
      .returning({ id: researchProjects.id });
    return !!deletedProject;
  }
  
  // Research area methods
  async getResearchAreas(): Promise<ResearchArea[]> {
    return await db.select().from(researchAreas);
  }
  
  async getResearchArea(id: number): Promise<ResearchArea | undefined> {
    const [area] = await db.select().from(researchAreas).where(eq(researchAreas.id, id));
    return area;
  }
  
  async createResearchArea(area: InsertResearchArea): Promise<ResearchArea> {
    const [newArea] = await db.insert(researchAreas).values(area).returning();
    return newArea;
  }
  
  async updateResearchArea(id: number, area: Partial<InsertResearchArea>): Promise<ResearchArea | undefined> {
    const [updatedArea] = await db
      .update(researchAreas)
      .set({ ...area, updatedAt: new Date() })
      .where(eq(researchAreas.id, id))
      .returning();
    return updatedArea;
  }
  
  async deleteResearchArea(id: number): Promise<boolean> {
    const [deletedArea] = await db
      .delete(researchAreas)
      .where(eq(researchAreas.id, id))
      .returning({ id: researchAreas.id });
    return !!deletedArea;
  }
  
  // Course methods
  async getCourses(): Promise<Course[]> {
    return await db.select().from(courses);
  }
  
  async getCourse(id: number): Promise<Course | undefined> {
    const [course] = await db.select().from(courses).where(eq(courses.id, id));
    return course;
  }
  
  async createCourse(course: InsertCourse): Promise<Course> {
    const [newCourse] = await db.insert(courses).values(course).returning();
    return newCourse;
  }
  
  async updateCourse(id: number, course: Partial<InsertCourse>): Promise<Course | undefined> {
    const [updatedCourse] = await db
      .update(courses)
      .set({ ...course, updatedAt: new Date() })
      .where(eq(courses.id, id))
      .returning();
    return updatedCourse;
  }
  
  async deleteCourse(id: number): Promise<boolean> {
    const [deletedCourse] = await db
      .delete(courses)
      .where(eq(courses.id, id))
      .returning({ id: courses.id });
    return !!deletedCourse;
  }
  
  // Student methods
  async getStudents(): Promise<Student[]> {
    return await db.select().from(students);
  }
  
  async getStudent(id: number): Promise<Student | undefined> {
    const [student] = await db.select().from(students).where(eq(students.id, id));
    return student;
  }
  
  async createStudent(student: InsertStudent): Promise<Student> {
    const [newStudent] = await db.insert(students).values(student).returning();
    return newStudent;
  }
  
  async updateStudent(id: number, student: Partial<InsertStudent>): Promise<Student | undefined> {
    const [updatedStudent] = await db
      .update(students)
      .set({ ...student, updatedAt: new Date() })
      .where(eq(students.id, id))
      .returning();
    return updatedStudent;
  }
  
  async deleteStudent(id: number): Promise<boolean> {
    const [deletedStudent] = await db
      .delete(students)
      .where(eq(students.id, id))
      .returning({ id: students.id });
    return !!deletedStudent;
  }
  
  // Contact message methods
  async getContactMessages(): Promise<ContactMessage[]> {
    return await db.select().from(contactMessages).orderBy(contactMessages.createdAt);
  }
  
  async getContactMessage(id: number): Promise<ContactMessage | undefined> {
    const [message] = await db.select().from(contactMessages).where(eq(contactMessages.id, id));
    return message;
  }
  
  async createContactMessage(message: InsertContactMessage): Promise<ContactMessage> {
    const [newMessage] = await db.insert(contactMessages).values(message).returning();
    return newMessage;
  }
  
  async markContactMessageAsRead(id: number): Promise<boolean> {
    const [updatedMessage] = await db
      .update(contactMessages)
      .set({ read: true })
      .where(eq(contactMessages.id, id))
      .returning({ id: contactMessages.id });
    return !!updatedMessage;
  }
  
  async deleteContactMessage(id: number): Promise<boolean> {
    const [deletedMessage] = await db
      .delete(contactMessages)
      .where(eq(contactMessages.id, id))
      .returning({ id: contactMessages.id });
    return !!deletedMessage;
  }
}

export const storage = new DatabaseStorage();
