import { useQuery, useMutation } from "@tanstack/react-query";
import { ContactSubmission } from "@shared/schema";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Loader2, LogOut } from "lucide-react";
import { useAuth } from "@/hooks/use-auth";
import { Button } from "@/components/ui/button";

export default function AdminPage() {
  const { logoutMutation } = useAuth();
  const { data: submissions, isLoading, error } = useQuery<ContactSubmission[]>({
    queryKey: ["/api/contact"],
  });

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-background">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-background text-destructive">
        Error loading submissions: {(error as Error).message}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background py-20">
      <div className="container mx-auto px-4">
        <Card className="glass-card border-white/10 bg-card/50 backdrop-blur-xl">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-3xl font-heading font-bold text-white">Contact Submissions</CardTitle>
            <Button 
              variant="outline" 
              size="sm" 
              onClick={() => logoutMutation.mutate()}
              disabled={logoutMutation.isPending}
              className="border-white/10 hover:bg-white/5"
            >
              <LogOut className="h-4 w-4 mr-2" />
              Logout
            </Button>
          </CardHeader>
          <CardContent>
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
                    <TableRow key={submission.id} className="border-white/5 hover:bg-white/5 transition-colors">
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
                          <p className="text-lg font-medium">No submissions yet</p>
                          <p className="text-sm">New leads will appear here automatically</p>
                        </div>
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}