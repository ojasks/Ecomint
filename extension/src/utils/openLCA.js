const OPENLCA_API_KEY = "demo";
const OPENLCA_ENDPOINT = "https://api.demo.openlca.org/v1/calculate";

export const fetchSustainabilityScore = async (productName) => {
  try {
    const response = await fetch(OPENLCA_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${OPENLCA_API_KEY}`
      },
      body: JSON.stringify({ product: productName })
    });
    const data = await response.json();
    return {
      score: data.score, // Numerical score (e.g., 8.4)
      grade: getGradeFromScore(data.score), // Letter grade (A-D)
      details: data.impact_categories // Detailed impact breakdown
    };
  } catch (error) {
    console.error('OpenLCA API error:', error);
    return null;
  }
};

function getGradeFromScore(score) {
  if (score >= 8) return "A";
  if (score >= 6) return "B";
  if (score >= 4) return "C";
  return "D";
}