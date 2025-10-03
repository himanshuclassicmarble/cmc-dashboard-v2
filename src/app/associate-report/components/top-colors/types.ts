export type ColorMetric = {
  colorName: string;
  currQtr: {
    qty: number;
    rev: number;
  };
  perOfRev: number;
  ARV: number;
};

export type ColorGroup = {
  colorGroup: string;
  colors: ColorMetric[];
  total?: { qty: number; rev: number; perOfRev: number; ARV: number };
};

export interface ColorProps {
  colors: ColorGroup[];
  grandTotal: {
    qty: number;
    rev: number;
    perOfRev: number;
    ARV: number;
  };
  className?: string;
}
