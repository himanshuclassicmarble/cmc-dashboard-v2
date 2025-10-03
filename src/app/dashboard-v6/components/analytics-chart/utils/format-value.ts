// function for the formatting the dat aof the chart
export const formatValue = (
  value: number,
  metric: "value" | "quantity" = "value",
): string => {
  const decimals = metric === "quantity" ? 1 : 2;

  // checks if decimal is present if true then add decimal or no decimal
  const hasDecimals = value % 1 !== 0;
  const finalDecimals = hasDecimals ? decimals : 0;

  return value.toLocaleString("en-IN", {
    minimumFractionDigits: finalDecimals,
    maximumFractionDigits: decimals,
  });
};
