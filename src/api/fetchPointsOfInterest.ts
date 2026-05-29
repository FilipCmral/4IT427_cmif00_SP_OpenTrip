import { type PointOfInterest } from '../types/pointOfInterest.types';

export async function fetchPointsOfInterest(cityName: string): Promise<PointOfInterest[]> {
    const defaultLimit = 100; // Default limit for number of points of interest
    const defaultRadius = 10000; // Default radius in meters
    const defaultFormat = 'json'; // Default response format


    const response = await fetch(`https://api.opentripmap.com/0.1/en/places/geoname
        ?name=${encodeURIComponent(cityName)}
        &radius=${defaultRadius}
        &limit=${defaultLimit}
        &format=${defaultFormat}
        `);
    if (!response.ok) {
        throw new Error(`Failed to fetch points of interest for city: ${cityName}`);
    }

    const data = await response.json();
    return data as PointOfInterest[];
}  