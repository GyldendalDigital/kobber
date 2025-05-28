export const getProficiencyNameByPercentage = (progressInPercent: number) => {
  if (progressInPercent === 0) return "unknown";
  if (progressInPercent < 20) return "low";
  if (progressInPercent < 40) return "some";
  if (progressInPercent < 60) return "basics";
  if (progressInPercent < 80) return "good";
  return "high";
};
