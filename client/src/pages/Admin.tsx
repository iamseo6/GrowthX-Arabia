import { useQuery } from "@tanstack/react-query";
import { ContactSubmission } from "@shared/schema";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Loader2 } from "lucide-react";

export default function AdminPage() {
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
          <CardHeader>
            <CardTitle className="text-3xl font-heading font-bold text-white">Contact Submissions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="border-white/10 hover:bg-white/5">
                    <TableHead className="text-muted-foreground font-semibold">Name</TableHead>
                    <TableHead className="text-muted-foreground font-semibold">Email</TableHead>
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
                      <TableCell colSpan={4} className="text-center py-20 text-muted-foreground">
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