import { setOptions, importLibrary } from "@googlemaps/js-api-loader"
setOptions({
  key: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
  v: "weekly",
})

async function getPlaceDetails(placeId) {
    const {Place} = await importLibrary("places")

    const place = new Place({
        id:placeId,
    })

    await place.fetchFields({
        fields: ["displayName","rating","formattedAddress","userRatingCount","googleMapsURI","photos"],
    })
    return place
}

export {getPlaceDetails}