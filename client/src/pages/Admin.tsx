import { useQuery, useMutation } from "@tanstack/react-query";
import { ContactSubmission, Lead } from "@shared/schema";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Loader2, LogOut, Users, MessageSquare } from "lucide-react";
import { useAuth } from "@/hooks/use-auth";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function AdminPage() {
  const { logoutMutation } = useAuth();
  const { data: submissions, isLoading: submissionsLoading } = useQuery<ContactSubmission[]>({
    queryKey: ["/api/contact"],
  });

  const { data: leads, isLoading: leadsLoading } = useQuery<Lead[]>({
    queryKey: ["/api/leads"],
  });

  const isLoading = submissionsLoading || leadsLoading;

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-background">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background py-20">
      <div className="container mx-auto px-4">
        <Card className="glass-card border-white/10 bg-card/50 backdrop-blur-xl">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-3xl font-heading font-bold text-white">Admin Dashboard</CardTitle>
            <Button 
              variant="outline" 
              size="sm" 
              onClick={() => logoutMutation.mutate()}
              disabled={logoutMutation.isPending}
              className="border-white/10 hover:bg-white/5"
              data-testid="button-logout"
            >
              <LogOut className="h-4 w-4 mr-2" />
              Logout
            </Button>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="leads" className="w-full">
              <TabsList className="mb-6 bg-slate-800/50">
                <TabsTrigger value="leads" className="data-[state=active]:bg-primary" data-testid="tab-leads">
                  <Users className="h-4 w-4 mr-2" />
                  Leads ({leads?.length || 0})
                </TabsTrigger>
                <TabsTrigger value="contacts" className="data-[state=active]:bg-primary" data-testid="tab-contacts">
                  <MessageSquare className="h-4 w-4 mr-2" />
                  Contact Messages ({submissions?.length || 0})
                </TabsTrigger>
              </TabsList>

              <TabsContent value="leads">
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow className="border-white/10 hover:bg-white/5">
                        <TableHead className="text-muted-foreground font-semibold">Name</TableHead>
                        <TableHead className="text-muted-foreground font-semibold">Company</TableHead>
                        <TableHead className="text-muted-foreground font-semibold">Service</TableHead>
                        <TableHead className="text-muted-foreground font-semibold">Budget</TableHead>
                        <TableHead className="text-muted-foreground font-semibold">Timeline</TableHead>
                        <TableHead className="text-muted-foreground font-semibold">Contact</TableHead>
                        <TableHead className="text-muted-foreground font-semibold text-right">Date</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {leads?.map((lead) => (
                        <TableRow key={lead.id} className="border-white/5 hover:bg-white/5 transition-colors" data-testid={`lead-row-${lead.id}`}>
                          <TableCell className="font-medium text-white whitespace-nowrap">
                            {lead.firstName} {lead.lastName}
                          </TableCell>
                          <TableCell className="text-muted-foreground">
                            <div>
                              <p className="font-medium text-white">{lead.companyName}</p>
                              <p className="text-xs text-muted-foreground">{lead.industry}</p>
                            </div>
                          </TableCell>
                          <TableCell className="text-muted-foreground">
                            <span className="px-2 py-1 bg-primary/20 text-primary rounded-full text-xs font-medium">
                              {lead.selectedService}
                            </span>
                          </TableCell>
                          <TableCell className="text-muted-foreground whitespace-nowrap">{lead.budgetRange}</TableCell>
                          <TableCell className="text-muted-foreground whitespace-nowrap">{lead.timeline}</TableCell>
                          <TableCell className="text-muted-foreground">
                            <div>
                              <p>{lead.email}</p>
                              {lead.phone && <p className="text-xs">{lead.phone} {lead.preferWhatsApp === 'yes' && '(WhatsApp)'}</p>}
                            </div>
                          </TableCell>
                          <TableCell className="text-muted-foreground text-right whitespace-nowrap">
                            {new Date(lead.createdAt).toLocaleDateString(undefined, {
                              year: 'numeric',
                              month: 'short',
                              day: 'numeric'
                            })}
                          </TableCell>
                        </TableRow>
                      ))}
                      {(!leads || leads.length === 0) && (
                        <TableRow>
                          <TableCell colSpan={7} className="text-center py-20 text-muted-foreground">
                            <div className="flex flex-col items-center gap-2">
                              <Users className="h-12 w-12 text-muted-foreground/30" />
                              <p className="text-lg font-medium">No leads yet</p>
                              <p className="text-sm">Leads from the Get Started funnel will appear here</p>
                            </div>
                          </TableCell>
                        </TableRow>
                      )}
                    </TableBody>
                  </Table>
                </div>
              </TabsContent>

              <TabsContent value="contacts">
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow className="border-white/10 hover:bg-white/5">
                        <TableHead className="text-muted-foreground font-semibold">Name</TableHead>
                        <TableHead className="text-muted-foreground font-semibold">Email</TableHead>
                        <TableHead className="text-muted-foreground font-semibold">Website</TableHead>
                        <TableHead className="text-muted-foreground font-semibold">Message</TableHead>
                        <TableHead className="text-muted-foreground font-semibold text-right">Date</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {submissions?.map((submission) => (
                        <TableRow key={submission.id} className="border-white/5 hover:bg-white/5 transition-colors" data-testid={`contact-row-${submission.id}`}>
                          <TableCell className="font-medium text-white whitespace-nowrap">
                            {submission.firstName} {submission.lastName}
                          </TableCell>
                          <TableCell className="text-muted-foreground">{submission.email}</TableCell>
                          <TableCell className="text-muted-foreground">
                            {submission.website ? (
                              <a href={submission.website} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                                {submission.website.replace(/^https?:\/\//, '')}
                              </a>
                            ) : (
                              <span className="text-muted-foreground/50">-</span>
                            )}
                          </TableCell>
                          <TableCell className="text-muted-foreground max-w-md">
                            <p className="line-clamp-2">{submission.message}</p>
                          </TableCell>
                          <TableCell className="text-muted-foreground text-right whitespace-nowrap">
                            {new Date(submission.createdAt).toLocaleDateString(undefined, {
                              year: 'numeric',
                              month: 'short',
                              day: 'numeric'
                            })}
                          </TableCell>
                        </TableRow>
                      ))}
                      {(!submissions || submissions.length === 0) && (
                        <TableRow>
                          <TableCell colSpan={5} className="text-center py-20 text-muted-foreground">
                            <div className="flex flex-col items-center gap-2">
                              <MessageSquare className="h-12 w-12 text-muted-foreground/30" />
                              <p className="text-lg font-medium">No messages yet</p>
                              <p className="text-sm">Contact form submissions will appear here</p>
                            </div>
                          </TableCell>
                        </TableRow>
                      )}
                    </TableBody>
                  </Table>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}