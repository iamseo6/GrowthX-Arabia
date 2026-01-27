import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSubmissionSchema } from "@shared/schema";
import { fromError } from "zod-validation-error";
import { isAuthenticated } from "./auth";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  app.post("/api/contact", async (req, res) => {
    try {
      console.log("Received contact submission request body:", req.body);
      const validationResult = insertContactSubmissionSchema.safeParse(req.body);
      
      if (!validationResult.success) {
        console.error("Validation failed:", validationResult.error);
        return res.status(400).json({
          error: fromError(validationResult.error).toString(),
        });
      }

      const submission = await storage.createContactSubmission(validationResult.data);
      console.log("Successfully saved submission:", submission);
      
      return res.status(201).json(submission);
    } catch (error) {
      console.error("Error creating contact submission:", error);
      return res.status(500).json({ error: "Failed to submit contact form" });
    }
  });

  app.get("/api/contact", isAuthenticated, async (_req, res) => {
    try {
      const submissions = await storage.getContactSubmissions();
      return res.json(submissions);
    } catch (error) {
      console.error("Error fetching contact submissions:", error);
      return res.status(500).json({ error: "Failed to fetch submissions" });
    }
  });

  return httpServer;
}
