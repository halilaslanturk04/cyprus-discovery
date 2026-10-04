import { useLanguage } from "../i18n/LanguageContext"
export default function DiscoverySteps({ currentStep }) {
  const { t } = useLanguage()
  return (
    <nav className="discovery-steps" aria-label={t.steps}>
      {t.stepLabels.map((label, index) => (
        <span key={index} className={"step " + (index === currentStep ? "step-active" : "")} aria-current={index === currentStep ? "step" : undefined}>
          <span>{index + 1}</span><span>{label}</span>
        </span>
      ))}
    </nav>
  )
}
