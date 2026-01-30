import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSubmissionSchema, insertNewsletterSchema } from "@shared/schema";
import { fromError } from "zod-validation-error";
import { isAuthenticated } from "./auth";
import { sendContactNotification } from "./email";

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
      
      // Send email notification
      const notifyEmail = process.env.NOTIFICATION_EMAIL;
      if (notifyEmail) {
        try {
          await sendContactNotification(validationResult.data, notifyEmail);
          console.log("Email notification sent to:", notifyEmail);
        } catch (emailError) {
          console.error("Failed to send email notification:", emailError);
        }
      }
      
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

  app.post("/api/newsletter", async (req, res) => {
    try {
      const validationResult = insertNewsletterSchema.safeParse(req.body);
      if (!validationResult.success) {
        return res.status(400).json({ error: fromError(validationResult.error).toString() });
      }
      const subscriber = await storage.createNewsletterSubscriber(validationResult.data);
      return res.status(201).json(subscriber);
    } catch (error: any) {
      if (error.code === '23505') { // Unique constraint violation
        return res.status(409).json({ error: "Email already subscribed" });
      }
      console.error("Newsletter error:", error);
      return res.status(500).json({ error: "Failed to subscribe" });
    }
  });

  return httpServer;
}
