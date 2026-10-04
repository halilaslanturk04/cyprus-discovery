import { useLanguage } from "../i18n/LanguageContext"
export function LoadingResults() {
  const { t } = useLanguage()
  return (
    <div role="status" aria-live="polite">
      <p className="results-note">{t.loading}</p>
      <div className="results-grid">
        {[1, 2, 3].map(id => (
          <div key={id} className="loading-card" aria-hidden="true">
            <div className="loading-photo" />
            <div className="loading-lines"><span /><span /><span /></div>
          </div>
        ))}
      </div>
    </div>
  )
}
export function EmptyResults({ error, onBack }) {
  const { t } = useLanguage()
  return (
    <div className="empty-state" role={error ? "alert" : undefined}>
      <h2>{error ? t.errorTitle : t.emptyTitle}</h2>
      <p>{error ? t.error : t.emptyDescription}</p>
      <button className="maps-button" onClick={onBack}>{t.returnChoices}</button>
    </div>
  )
}
