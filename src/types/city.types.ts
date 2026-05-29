// https://dev.opentripmap.org/docs#/#model-Geoname

export interface City {
  name: string;
  country: string; // ISO-3166 2-letter country code
  lon: number; // Longitude
  lat: number; // Latitude
  population: number;
}