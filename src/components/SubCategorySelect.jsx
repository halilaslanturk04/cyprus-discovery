import SelectionLayout from "./SelectionLayout"
import { getSubCategories } from "../data/navigation"
import { useLanguage } from "../i18n/LanguageContext"

export default function SubCategorySelect({ selectedCategory, setSelectedSubCategory, setSelectedCategory, selectedRegion }) {
  const { t } = useLanguage()
  return (
    <SelectionLayout
      onBack={() => setSelectedCategory("")}
      eyebrow={t.regions[selectedRegion] + " · " + t.categories[selectedCategory]}
      title={t.subTitle}
      description={t.subDescription}
    >
      <div className="subcategory-grid">
        {getSubCategories(selectedRegion, selectedCategory).map(id => (
          <button key={id} className="choice-card explore-card" onClick={() => setSelectedSubCategory(id)}>
            <span className="explore-icon" aria-hidden="true">🧭</span>
            <span className="choice-title">{t.subCategories[id]}</span>
            <span className="explore-action">{t.explore}<span aria-hidden="true">↗</span></span>
          </button>
        ))}
      </div>
    </SelectionLayout>
  )
}
