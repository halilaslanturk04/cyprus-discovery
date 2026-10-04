import { useEffect, useMemo, useState } from "react"
import places from "../data/places"
import { getPlaceDetails } from "../services/googlePlaces"

export default function usePlaces(region, category, subCategory) {
  const [googlePlaces, setGooglePlaces] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const filteredPlaces = useMemo(() => places.filter(place =>
    place.region === region && place.categories.some(item =>
      item.category === category && (!subCategory || item.subCategories === subCategory)
    )
  ), [region, category, subCategory])

  useEffect(() => {
    let active = true
    async function fetchPlaces() {
      try {
        const results = await Promise.all(filteredPlaces.map(async place => {
          const details = await getPlaceDetails(place.placeId)
          return {
            ...place,
            displayName: details.displayName,
            rating: details.rating,
            formattedAddress: details.formattedAddress,
            userRatingCount: details.userRatingCount,
            googleMapsURI: details.googleMapsURI,
            photoUrl: details.photos?.[0]?.getURI(),
          }
        }))
        if (active) setGooglePlaces(results)
      } catch {
        if (active) setError(true)
      } finally {
        if (active) setLoading(false)
      }
    }
    fetchPlaces()
    return () => { active = false }
  }, [filteredPlaces])
  return { googlePlaces, loading, error }
}
