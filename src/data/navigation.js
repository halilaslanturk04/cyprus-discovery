export const regions = [
  { id: "Mağusa", photo: "magusa.jpg", position: "60% 50%", width: 1536, height: 1024 },
  { id: "Girne", photo: "girne.webp", position: "50% 65%", width: 1000, height: 667 },
  { id: "Lefkoşa", photo: "lefkosa.jpg", position: "50% 60%", width: 720, height: 900 },
  { id: "İskele", photo: "iskele.jpg", position: "65% 55%", width: 1920, height: 1080 },
]
export const categories = ["yemek", "deniz", "gezi", "eğlence", "kahvetatlı"]
const subCategories = {
  yemek: ["kahvaltı", "restoran", "meyhane", "fast-food"],
  deniz: ["halk plajı", "beach club"],
  gezi: ["tarih&kültür", "doğa&manzara"],
  eğlence: ["gece kulübü", "bar & pub", "meyhane"],
  kahvetatlı: [],
}
export function getCategories(region) {
  return region === "Lefkoşa" ? categories.filter(id => id !== "deniz") : categories
}
export function getSubCategories(region, category) {
  const items = subCategories[category] || []
  if (region !== "Lefkoşa") return items
  if (category === "gezi") return items.filter(id => id !== "doğa&manzara")
  if (category === "eğlence") return items.filter(id => id !== "gece kulübü")
  return items
}
