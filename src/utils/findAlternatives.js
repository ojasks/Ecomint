const ALTERNATIVES_DB = {
  "plastic bottle": {
    name: "Stainless Steel Water Bottle",
    url: "https://example.com/eco-bottle",
    score: "A"
  },
  "plastic toothbrush": {
    name: "Bamboo Toothbrush (4-pack)",
    url: "https://example.com/bamboo-brush",
    score: "A"
  },
  // Add more mappings
  "plastic bag": {
    name: "Organic Cotton Tote Bag",
    url: "https://example.com/cotton-tote",
    score: "A"
  }
};

export const findAlternative = (name) => {
  if (!name) return null;
  
  const lower = name.toLowerCase();
  
  // Find exact matches first
  for (const [keyword, alternative] of Object.entries(ALTERNATIVES_DB)) {
    if (lower.includes(keyword)) {
      return alternative;
    }
  }
  
  // Fallback for similar products
  if (lower.includes("plastic")) {
    return {
      name: "Eco-friendly Alternative Kit",
      url: "https://example.com/eco-alternatives",
      score: "B"
    };
  }
  
  return null;
};