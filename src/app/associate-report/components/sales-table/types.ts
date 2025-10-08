export type TableRow = {
  key: string;
  qty: number;
  rev: number;
  revPercent: number;
  arv: number;
};

export type TableTotal = {
  qty: number;
  rev: number;
  revPercent: number;
  arv: number;
};

export type SalesTableUnit = {
  tableTitle: string;
  tableKey: string;
  tableData: TableRow[];
  tableTotal: TableTotal;
};

export type SalesTableProps = {
  table: SalesTableUnit;
  tableColor?: string;
  className?: string;
  quartor: string;
};
