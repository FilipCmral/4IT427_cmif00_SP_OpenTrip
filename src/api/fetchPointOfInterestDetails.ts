import { type PointOfInterest } from "../types/pointOfInterest.types";

const apiKey = import.meta.env.VITE_API_KEY;
const apiKeyParamString = `?apikey=${apiKey}`;

export async function fetchPointOfInterestDetails(pointOfInterestId: string,): Promise<PointOfInterest> {

  const fetchPointOfInterestResponse = await fetch(
    `https://api.opentripmap.com/0.1/en/places/xid/${encodeURIComponent(pointOfInterestId)}${apiKeyParamString}`,
  );

  if (!fetchPointOfInterestResponse.ok) {
    throw new Error(`Failed to fetch the details for point of interest with ID: ${pointOfInterestId}`);
  }

  const pointsOfInterestData = await fetchPointOfInterestResponse.json();
  console.log(pointsOfInterestData);
  return pointsOfInterestData as PointOfInterest;
}
