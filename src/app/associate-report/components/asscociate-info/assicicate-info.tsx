import { Card } from "@/components/ui/card";
import { AssociateInfoProps } from "./types";

const AssociateInfo = ({ associateInfo }: AssociateInfoProps) => {
  const { associateName, designation, quarter } = associateInfo;

  return (
    <Card className="w-full h-full px-3 py-1 gap-1 flex flex-col md:flex-row justify-between md:items-center rounded-md shadow-none">
      <div className="flex flex-col ">
        <h3 className="text-sm font-semibold text-foreground truncate">
          {associateName}
        </h3>
        <p className="text-xs text-muted-foreground truncate">{designation}</p>
      </div>

      <span className="text-xl font-bold text-foreground ">{quarter}</span>
    </Card>
  );
};

export default AssociateInfo;
