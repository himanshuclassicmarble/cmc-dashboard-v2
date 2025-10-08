import { Button } from "@/components/ui/button";
import { LayoutDashboardIcon, FileTextIcon } from "lucide-react";
import Link from "next/link";

const Page = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center gap-6 p-4 bg-background">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-foreground mb-2">Navigation</h1>
      </div>

      <div className="flex flex-col gap-4 w-full max-w-md">
        <Link href="/dashboard" passHref className="w-full">
          <Button
            variant="outline"
            className="w-full h-20 flex items-center gap-4 text-lg hover:bg-accent hover:text-accent-foreground transition-all"
          >
          
            <LayoutDashboardIcon className="w-6 h-6" />
            <span>Dashboard</span>
          </Button>
        </Link>

        <Link href="/associate-report" passHref className="w-full">
          <Button
            variant="outline"
            className="w-full h-20 flex items-center gap-4 text-lg hover:bg-accent hover:text-accent-foreground transition-all"
          >
            <FileTextIcon className="w-6 h-6" />
            <span>Associate Report</span>
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Page;
