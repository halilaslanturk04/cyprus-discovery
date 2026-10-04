import { useLanguage } from "../i18n/LanguageContext"

export default function Header({ onHome }) {
  const { language, setLanguage, t } = useLanguage()
  return (
    <header className="site-header">
      <div className="shell header-content">
        <button className="brand" onClick={onHome} aria-label={t.home}>
          <img className="brand-logo" src="/images/brand/logo.png" alt="" width="56" height="56" />
          <span className="brand-name">Cyprus <span>Discovery</span></span>
        </button>
        <div className="language-switch" role="group" aria-label="Language / Dil">
          <button lang="tr" aria-label="Türkçe" aria-pressed={language === "tr"} onClick={() => setLanguage("tr")}>TR</button>
          <button lang="en" aria-label="English" aria-pressed={language === "en"} onClick={() => setLanguage("en")}>EN</button>
        </div>
      </div>
    </header>
  )
}
