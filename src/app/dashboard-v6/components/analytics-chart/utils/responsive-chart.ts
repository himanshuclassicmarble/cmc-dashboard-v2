import { SCREEN_BREAKPOINTS } from "../constants";

// Screensize manipulation for the Slider to work properly.
export const getScreenSize = (width: number) => {
  if (width < SCREEN_BREAKPOINTS.MOBILE) return "mobile";
  if (width < SCREEN_BREAKPOINTS.TABLET) return "tablet";
  return "desktop";
};

// font size change in the chart
export const getFontSize = (screenSize: string) => {
  switch (screenSize) {
    case "mobile":
      return 8;
    case "tablet":
      return 9;
    default:
      return 10;
  }
};

// how many data to visible at a time on a tab or phone
export const getVisibleDataCount = (screenSize: string) => {
  switch (screenSize) {
    case "mobile":
      return 4;
    case "tablet":
      return 6;
    default:
      return Infinity;
  }
};
