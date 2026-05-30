import { PointOfInterestDetailsButton } from "./PointOfInterestDetailsButton";

interface PointOfInterestCardProps {
  id: string;
  name: string;
  kinds: string; //Comma-separated list of categories. https://dev.opentripmap.com/en/catalog.tree.json
  rate: string; //Rating of the place. The value is a string with a number 
}

export function PointOfInterestCard({ id, name, kinds, rate }: PointOfInterestCardProps) {
  return (
    <div>
      <h3>{name}</h3>
      <p>Kinds: {kinds}</p>
      <p>Rating: {rate}⭐</p>
      <PointOfInterestDetailsButton pointOfInterestId={id} />
    </div>
  );
}