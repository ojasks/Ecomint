export const findAlternative = (name) => {
  const lower = name.toLowerCase()

  if (lower.includes("plastic bottle")) {
    return {
      name: "Bamboo Bottle",
      url: "https://www.amazon.in/dp/B09XJ7BZT9"
    }
  }

  if (lower.includes("plastic toothbrush")) {
    return {
      name: "Bamboo Toothbrush",
      url: "https://www.amazon.in/dp/B098TWR1TG"
    }
  }

  return null
}
