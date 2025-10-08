import { useCallback, useEffect, useState } from "react";
import { getScreenSize } from "../utils/responsive-chart";

export const useScreenSize = () => {
  const [screenSize, setScreenSize] = useState("desktop");

  const updateScreenSize = useCallback(() => {
    if (typeof window === "undefined") return;
    setScreenSize(getScreenSize(window.innerWidth));
  }, []);
  // component updater according to the size of the device
  useEffect(() => {
    updateScreenSize();
    window.addEventListener("resize", updateScreenSize);
    return () => window.removeEventListener("resize", updateScreenSize);
  }, [updateScreenSize]);

  return screenSize;
};
