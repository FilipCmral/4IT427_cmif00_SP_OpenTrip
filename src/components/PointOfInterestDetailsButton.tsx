import { Link } from "react-router-dom";

interface PointOfInterestDetailsButtonProps {
  pointOfInterestId: string;
}

export function PointOfInterestDetailsButton({ pointOfInterestId }: PointOfInterestDetailsButtonProps) {
  return (
    <Link to={`/points-of-interest/${pointOfInterestId}`}>
      <button >
        See more
      </button>
    </Link>
  );
}