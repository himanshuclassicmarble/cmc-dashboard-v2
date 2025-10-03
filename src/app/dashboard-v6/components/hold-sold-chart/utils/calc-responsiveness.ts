export const calculateResponsiveFontSize = (windowWidth: number): number =>
  Math.min(8, Math.max(6, windowWidth / 120));
