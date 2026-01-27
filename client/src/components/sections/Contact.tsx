import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertContactSubmissionSchema, type InsertContactSubmission } from "@shared/schema";
import { useMutation } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";

export function Contact() {
  const { toast } = useToast();
  const form = useForm<InsertContactSubmission>({
    resolver: zodResolver(insertContactSubmissionSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    },
  });

  const mutation = useMutation({
    mutationFn: async (data: InsertContactSubmission) => {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      
      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || "Failed to submit form");
      }
      
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Message Sent!",
        description: "We'll get back to you within 24 hours.",
      });
      form.reset();
    },
    onError: (error: Error) => {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertContactSubmission) => {
    mutation.mutate(data);
  };

  return (
    <section id="contact" className="py-24 bg-background relative">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
            Ready to <span className="text-primary">Transform?</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Schedule a consultation with our AI architects today.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Card className="glass-card border-white/10">
            <CardContent className="p-8 md:p-12">
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">First Name</label>
                    <Input 
                      {...form.register("firstName")}
                      placeholder="John" 
                      className="bg-white/5 border-white/10 h-12"
                      data-testid="input-firstName" 
                    />
                    {form.formState.errors.firstName && (
                      <p className="text-xs text-destructive">{form.formState.errors.firstName.message}</p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Last Name</label>
                    <Input 
                      {...form.register("lastName")}
                      placeholder="Doe" 
                      className="bg-white/5 border-white/10 h-12"
                      data-testid="input-lastName" 
                    />
                    {form.formState.errors.lastName && (
                      <p className="text-xs text-destructive">{form.formState.errors.lastName.message}</p>
                    )}
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">Email</label>
                  <Input 
                    {...form.register("email")}
                    type="email" 
                    placeholder="john@company.com" 
                    className="bg-white/5 border-white/10 h-12"
                    data-testid="input-email" 
                  />
                  {form.formState.errors.email && (
                    <p className="text-xs text-destructive">{form.formState.errors.email.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Message</label>
                  <Textarea 
                    {...form.register("message")}
                    placeholder="Tell us about your automation needs..." 
                    className="bg-white/5 border-white/10 min-h-[150px]"
                    data-testid="textarea-message" 
                  />
                  {form.formState.errors.message && (
                    <p className="text-xs text-destructive">{form.formState.errors.message.message}</p>
                  )}
                </div>

                <Button 
                  type="submit"
                  disabled={mutation.isPending}
                  className="w-full h-12 text-lg font-bold bg-gradient-to-r from-primary to-accent hover:opacity-90"
                  data-testid="button-submit"
                >
                  {mutation.isPending ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}