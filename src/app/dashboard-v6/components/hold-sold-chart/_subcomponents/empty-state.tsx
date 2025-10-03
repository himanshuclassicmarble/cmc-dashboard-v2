export const EmptyState: React.FC<{ message: string }> = ({ message }) => (
  <div className="w-full h-full flex items-center justify-center">
    <p className="text-sm text-muted-foreground">{message}</p>
  </div>
);
