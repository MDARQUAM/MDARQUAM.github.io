import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import {
  insertContactMessageSchema,
  insertPublicationSchema,
  insertResearchProjectSchema,
  insertResearchAreaSchema,
  insertCourseSchema,
  insertStudentSchema
} from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Publications API routes
  app.get("/api/publications", async (req: Request, res: Response) => {
    try {
      const publications = await storage.getPublications();
      res.json(publications);
    } catch (error) {
      console.error("Error fetching publications:", error);
      res.status(500).json({ error: "Failed to fetch publications" });
    }
  });
  
  app.get("/api/publications/:id", async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const publication = await storage.getPublication(Number(id));
      
      if (!publication) {
        return res.status(404).json({ error: "Publication not found" });
      }
      
      res.json(publication);
    } catch (error) {
      console.error(`Error fetching publication ${req.params.id}:`, error);
      res.status(500).json({ error: "Failed to fetch publication" });
    }
  });
  
  app.post("/api/publications", async (req: Request, res: Response) => {
    try {
      const validatedData = insertPublicationSchema.parse(req.body);
      const newPublication = await storage.createPublication(validatedData);
      res.status(201).json(newPublication);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ error: error.errors });
      }
      console.error("Error creating publication:", error);
      res.status(500).json({ error: "Failed to create publication" });
    }
  });
  
  // Research Projects API routes
  app.get("/api/research-projects", async (req: Request, res: Response) => {
    try {
      const projects = await storage.getResearchProjects();
      res.json(projects);
    } catch (error) {
      console.error("Error fetching research projects:", error);
      res.status(500).json({ error: "Failed to fetch research projects" });
    }
  });
  
  app.get("/api/research-projects/:id", async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const project = await storage.getResearchProject(Number(id));
      
      if (!project) {
        return res.status(404).json({ error: "Research project not found" });
      }
      
      res.json(project);
    } catch (error) {
      console.error(`Error fetching research project ${req.params.id}:`, error);
      res.status(500).json({ error: "Failed to fetch research project" });
    }
  });
  
  // Research Areas API routes
  app.get("/api/research-areas", async (req: Request, res: Response) => {
    try {
      const areas = await storage.getResearchAreas();
      res.json(areas);
    } catch (error) {
      console.error("Error fetching research areas:", error);
      res.status(500).json({ error: "Failed to fetch research areas" });
    }
  });
  
  // Courses API routes
  app.get("/api/courses", async (req: Request, res: Response) => {
    try {
      const courses = await storage.getCourses();
      res.json(courses);
    } catch (error) {
      console.error("Error fetching courses:", error);
      res.status(500).json({ error: "Failed to fetch courses" });
    }
  });
  
  // Students (Advisees) API routes
  app.get("/api/students", async (req: Request, res: Response) => {
    try {
      const students = await storage.getStudents();
      res.json(students);
    } catch (error) {
      console.error("Error fetching students:", error);
      res.status(500).json({ error: "Failed to fetch students" });
    }
  });
  
  // Contact Form API route
  app.post("/api/contact", async (req: Request, res: Response) => {
    try {
      const validatedData = insertContactMessageSchema.parse(req.body);
      const newMessage = await storage.createContactMessage(validatedData);
      res.status(201).json({ 
        success: true, 
        message: "Your message has been sent successfully.",
        id: newMessage.id
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ 
          success: false,
          error: "Invalid form data",
          details: error.errors 
        });
      }
      console.error("Error sending contact message:", error);
      res.status(500).json({ 
        success: false,
        error: "Failed to send your message. Please try again later." 
      });
    }
  });
  
  const httpServer = createServer(app);
  return httpServer;
}
