import { useEffect, useState } from "react"
import { LanguageContext } from "./LanguageContext"
import { translations } from "./translations"

function readLanguage() {
  try { return localStorage.getItem("cyprus-language") === "en" ? "en" : "tr" }
  catch { return "tr" }
}
export default function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(readLanguage)
  useEffect(() => {
    document.documentElement.lang = language
    try { localStorage.setItem("cyprus-language", language) } catch { /* Storage may be unavailable. */ }
  }, [language])
  return (
    <LanguageContext.Provider value={{ language, setLanguage, t: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  )
}
