import PlaceCard from "./PlaceCard"
import SelectionLayout from "./SelectionLayout"
import { LoadingResults, EmptyResults } from "./ResultsState"
import usePlaces from "../hooks/usePlaces"
import { useLanguage } from "../i18n/LanguageContext"

export default function Results({ setSelectedSubCategory, selectedRegion, selectedCategory, selectedSubCategory, setSelectedCategory }) {
  const { t } = useLanguage()
  const { googlePlaces, loading, error } = usePlaces(selectedRegion, selectedCategory, selectedSubCategory)
  const breadcrumb = [t.regions[selectedRegion], t.categories[selectedCategory], t.subCategories[selectedSubCategory]].filter(Boolean).join(" · ")

  function goBack() {
    if (selectedSubCategory) setSelectedSubCategory("")
    else setSelectedCategory("")
  }

  return (
    <SelectionLayout onBack={goBack} eyebrow={breadcrumb} title={t.resultTitle} description={t.resultDescription}>
      {loading ? <LoadingResults /> : error || googlePlaces.length === 0 ? (
        <EmptyResults error={error} onBack={goBack} />
      ) : (
        <>
          <p className="results-note">{googlePlaces.length} {googlePlaces.length === 1 ? t.point : t.points}</p>
          <div className="results-grid">
            {googlePlaces.map(place => <PlaceCard key={place.id} place={place} />)}
          </div>
          <p className="provider-credit">{t.googleCredit}</p>
        </>
      )}
    </SelectionLayout>
  )
}
