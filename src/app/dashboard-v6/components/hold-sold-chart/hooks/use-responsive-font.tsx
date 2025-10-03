import { useEffect, useState } from "react";
import { calculateResponsiveFontSize } from "../utils/calc-responsiveness";

export const useResponsiveFontSize = () => {
  const [fontSize, setFontSize] = useState(7);
  useEffect(() => {
    const updateFontSize = () => {
      if (typeof window !== "undefined") {
        setFontSize(calculateResponsiveFontSize(window.innerWidth));
      }
    };
    updateFontSize();
    window.addEventListener("resize", updateFontSize);
    return () => window.removeEventListener("resize", updateFontSize);
  }, []);
  return fontSize;
};
