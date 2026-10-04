import { regions } from "../data/navigation"
import { useLanguage } from "../i18n/LanguageContext"
export default function Footer() {
  const { t } = useLanguage()
  return (
    <footer className="shell site-footer">
      <div className="footer-content">
        <span>Cyprus Discovery · {t.footer}</span>
        <span>{regions.map(region => t.regions[region.id]).join(" · ")}</span>
      </div>
    </footer>
  )
}
