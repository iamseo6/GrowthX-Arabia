import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSubmissionSchema } from "@shared/schema";
import { fromError } from "zod-validation-error";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  app.post("/api/contact", async (req, res) => {
    try {
      const validationResult = insertContactSubmissionSchema.safeParse(req.body);
      
      if (!validationResult.success) {
        return res.status(400).json({
          error: fromError(validationResult.error).toString(),
        });
      }

      const submission = await storage.createContactSubmission(validationResult.data);
      
      return res.status(201).json(submission);
    } catch (error) {
      console.error("Error creating contact submission:", error);
      return res.status(500).json({ error: "Failed to submit contact form" });
    }
  });

  return httpServer;
}
