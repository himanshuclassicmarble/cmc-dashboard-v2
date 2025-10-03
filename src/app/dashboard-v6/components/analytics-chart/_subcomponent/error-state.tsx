import { Card, CardContent } from "@/components/ui/card";

export const ErrorState = ({ message }: { message: string }) => (
  <Card className="w-full mx-auto">
    <CardContent className="flex items-center justify-center p-8">
      <p className="text-muted-foreground">{message}</p>
    </CardContent>
  </Card>
);
