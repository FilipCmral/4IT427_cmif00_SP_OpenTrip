import { type PointOfInterest } from "../types/pointOfInterest.types";

const apiKey = import.meta.env.VITE_API_KEY;

export async function fetchPointsOfInterest(
  cityName: string,
): Promise<PointOfInterest[]> {
  const defaultLimit = 100; // Limit for number of points of interest
  const defaultRadius = 10000; // Radius in meters
  const defaultFormat = "json";

  const fetchCityDetailsResponse = await fetch(
    `https://api.opentripmap.com/0.1/en/places/geoname?name=${encodeURIComponent(cityName)}
        &key=${apiKey}`,
  );

  if (!fetchCityDetailsResponse.ok) {
    throw new Error(`Failed to fetch city details for city: ${cityName}`);
  }

  const cityDetails = await fetchCityDetailsResponse.json();
  const { lattitude, longitude } = cityDetails;

  const pointsOfInterestResponse = await fetch(
    `https://api.opentripmap.com/0.1/en/places/geoname
        ?radius=${defaultRadius}
        &lon=${longitude}
        &lat=${lattitude}
        &limit=${defaultLimit}
        &format=${defaultFormat}
        &key=${apiKey}`,
  );

  if (!pointsOfInterestResponse.ok) {
    throw new Error(`Failed to fetch points of interest for city: ${cityName}`);
  }

  const pointsOfInterestData = await pointsOfInterestResponse.json();
  return pointsOfInterestData as PointOfInterest[];
}
