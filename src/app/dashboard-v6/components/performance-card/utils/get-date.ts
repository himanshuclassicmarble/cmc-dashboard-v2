import { TabType } from "../../performance-card/types";

export const currentDate = new Date();

export const getDateDisplay = (activeTab: TabType): string => {
  switch (activeTab) {
    case "Today":
      return currentDate.toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      });

    case "MTD":
      return currentDate.toLocaleDateString("en-GB", {
        month: "long",
        year: "numeric",
      });

    case "YTD":
      // Financial year starts from April 1st
      const currentYear = currentDate.getFullYear();
      const currentMonth = currentDate.getMonth() + 1;
      const fyStartYear = currentMonth >= 4 ? currentYear : currentYear - 1;
      const fyEndYear = fyStartYear + 1;
      return `FY ${fyStartYear}-${fyEndYear.toString().slice(-2)}`;

    default:
      return "";
  }
};
