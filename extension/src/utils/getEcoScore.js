export const getEcoScore = (name) => {
  if (!name) return "D";
  
  const title = name.toLowerCase();
  
  // Positive matches
  if (title.includes("bamboo") || 
      title.includes("organic") ||
      title.includes("recycled")) return "A";
      
  if (title.includes("cotton") ||
      title.includes("paper") ||
      title.includes("wood")) return "B";
      
  // Negative matches
  if (title.includes("plastic") ||
      title.includes("pvc") ||
      title.includes("polystyrene")) return "D";
      
  return "C"; // Default for unknown products
}