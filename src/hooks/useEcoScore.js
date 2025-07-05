export const useEcoScore = (title) => {
  const lower = title.toLowerCase()
  if (lower.includes("bamboo")) return "A"
  if (lower.includes("cotton")) return "B"
  if (lower.includes("plastic")) return "C"
  return "D"
}
