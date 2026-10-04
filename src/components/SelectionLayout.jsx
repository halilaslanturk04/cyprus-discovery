import { useLanguage } from "../i18n/LanguageContext"
export default function SelectionLayout({ eyebrow, title, description, onBack, children }) {
  const { t } = useLanguage()
  return (
    <section className="animate-enter">
      {onBack && (
        <button className="back-button" onClick={onBack}>
          <span className="back-arrow" aria-hidden="true">←</span>{t.back}
        </button>
      )}
      <div className="selection-heading">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="page-title">{title}</h1>
        <p className="selection-description">{description}</p>
      </div>
      {children}
    </section>
  )
}
