import CategoryIcon from "./CategoryIcon"
import SelectionLayout from "./SelectionLayout"
import { getCategories } from "../data/navigation"
import { useLanguage } from "../i18n/LanguageContext"

export default function CategorySelect({ setSelectedCategory, setSelectedRegion, selectedRegion }) {
  const { t } = useLanguage()
  return (
    <SelectionLayout
      onBack={() => setSelectedRegion("")}
      eyebrow={t.regions[selectedRegion] + " · " + t.yourDay}
      title={t.categoryTitle}
      description={t.categoryDescription}
    >
      <div className="category-grid">
        {getCategories(selectedRegion).map(id => (
          <button key={id} className={"choice-card category-card category-tone-" + id} onClick={() => setSelectedCategory(id)}>
            <span className="choice-icon"><CategoryIcon category={id} /></span>
            <span className="choice-title">{t.categories[id]}<span className="choice-arrow" aria-hidden="true">→</span></span>
            <span className="choice-description">{t.descriptions[id]}</span>
          </button>
        ))}
      </div>
    </SelectionLayout>
  )
}
