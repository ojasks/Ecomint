export const getEcoScore = (name) => {
  const title = name.toLowerCase()
  if (title.includes("bamboo")) return "A"
  if (title.includes("cotton")) return "B"
  if (title.includes("plastic")) return "C"
  return "D"
}
