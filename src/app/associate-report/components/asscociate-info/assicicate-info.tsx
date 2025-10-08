import { Card } from "@/components/ui/card";
import { AssociateInfoProps } from "./types";

const AssociateInfo = ({ associateInfo }: AssociateInfoProps) => {
  const { associateName, designation } = associateInfo;

  return (
    <Card className="w-full h-full px-4 py-2 flex flex-row justify-between items-center gap-1.5 rounded-2xl shadow-none hover:bg-muted/20 transition-all duration-200">
      <div className="flex flex-col ">
        <h3 className="text-sm font-semibold text-foreground truncate">
          {associateName}
        </h3>
        <p className="text-xs text-muted-foreground truncate">{designation}</p>
      </div>
    </Card>
  );
};

export default AssociateInfo;
