export interface Executive {
  id: number;
  name: string;
  designation: string;
  email: string;
  avatar: string;
}

export interface FilterHeaderProps {
  executives: Executive[];
  marbleTypes: string[];
}

// use in the marble-type-selector.tsx
export interface MarbleTypeSelectorProps {
  marbleTypes: string[];
  selectedMarble: string;
  onSelectMarbleAction: (marble: string) => void;
}
