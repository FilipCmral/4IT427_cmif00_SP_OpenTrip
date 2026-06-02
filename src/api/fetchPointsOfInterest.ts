import { type PointOfInterestSimple } from "../types/pointOfInterest.types";

const apiKey = import.meta.env.VITE_API_KEY;
const apiKeyParamString = `&apikey=${apiKey}`;

export async function fetchPointsOfInterest(cityName: string,): Promise<PointOfInterestSimple[]> {
  const defaultLimit = 300; // Limit for number of points of interest
  const defaultRadius = 10000; // Radius in meters
  const defaultFormat = "json";

  const fetchCityDetailsResponse = await fetch(
    `https://api.opentripmap.com/0.1/en/places/geoname?name=${encodeURIComponent(cityName)}${apiKeyParamString}`,
  );

  if (!fetchCityDetailsResponse.ok) {
    throw new Error(`Failed to fetch city details for city: ${cityName}`);
  }

  const cityDetails = await fetchCityDetailsResponse.json();
  console.log(cityDetails);
  const { lat, lon } = cityDetails;

  const pointsOfInterestResponse = await fetch(
    `https://api.opentripmap.com/0.1/en/places/radius?lang=en&radius=${defaultRadius}&lon=${lon}&lat=${lat}&limit=${defaultLimit}&format=${defaultFormat}${apiKeyParamString}`,
  );

  if (!pointsOfInterestResponse.ok) {
    throw new Error(`Failed to fetch points of interest for city: ${cityName}`);
  }

  const pointsOfInterestData = await pointsOfInterestResponse.json();

  pointsOfInterestData.sort((a: PointOfInterestSimple, b: PointOfInterestSimple) => {
    const rateA = parseFloat(a.rate);
    const rateB = parseFloat(b.rate);

    return rateB - rateA;
  });
  console.log(pointsOfInterestData);

  return pointsOfInterestData as PointOfInterestSimple[];
}
