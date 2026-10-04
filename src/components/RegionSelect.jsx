import SelectionLayout from "./SelectionLayout"
import { regions } from "../data/navigation"
import { useLanguage } from "../i18n/LanguageContext"

export default function RegionSelect({ setSelectedRegion }) {
  const { t } = useLanguage()
  return (
    <div className="region-screen">
      <SelectionLayout
        eyebrow={t.start}
        title={<>{t.regionTitle[0]}<br /><span className="accent-text">{t.regionTitle[1]}</span></>}
        description={t.regionDescription}
      >
        <div className="region-grid">
          {regions.map(region => (
            <button key={region.id} className="region-card" onClick={() => setSelectedRegion(region.id)}>
              <img
                src={"/images/regions/" + region.photo}
                alt=""
                width={region.width}
                height={region.height}
                style={{ objectPosition: region.position }}
                className="region-photo"
              />
              <span className="region-overlay" />
              <span className="region-name">{t.regions[region.id]}</span>
            </button>
          ))}
        </div>
      </SelectionLayout>
    </div>
  )
}
