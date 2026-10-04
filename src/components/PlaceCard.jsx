import { useState } from "react"
import { useLanguage } from "../i18n/LanguageContext"

export default function PlaceCard({ place }) {
  const [imageFailed, setImageFailed] = useState(false)
  const { language, t } = useLanguage()
  const name = place.displayName || t.place
  return (
    <article className="place-card">
      <div className="place-photo-container">
        {place.photoUrl && !imageFailed ? (
          <img src={place.photoUrl} alt={name} loading="lazy" onError={() => setImageFailed(true)} className="place-photo" />
        ) : (
          <div className="photo-placeholder"><span aria-hidden="true">≈</span>{t.noPhoto}</div>
        )}
        <span className="place-region">{t.regions[place.region] || place.region}</span>
      </div>
      <div className="place-content">
        <h2>{name}</h2>
        <p className="place-rating">
          <strong>{place.rating != null ? "★ " + place.rating : t.noRating}</strong>
          {place.userRatingCount != null && <span> · {place.userRatingCount.toLocaleString(language === "tr" ? "tr-TR" : "en-GB")} {t.reviews}</span>}
        </p>
        <p className="place-address">{place.formattedAddress || t.noAddress}</p>
        {place.googleMapsURI ? (
          <a className="maps-button" href={place.googleMapsURI} target="_blank" rel="noopener noreferrer" aria-label={name + " · " + t.maps}>
            {t.maps}<span aria-hidden="true">↗</span>
          </a>
        ) : <p className="provider-credit">{t.noMaps}</p>}
      </div>
    </article>
  )
}
