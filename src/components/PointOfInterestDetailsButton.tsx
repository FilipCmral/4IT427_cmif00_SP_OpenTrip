import { Link } from "react-router-dom";

import styles from './PointOfInterestDetailsButton.module.css';

interface PointOfInterestDetailsButtonProps {
  pointOfInterestId: string;
}

export function PointOfInterestDetailsButton({ pointOfInterestId }: PointOfInterestDetailsButtonProps) {
  return (
    <Link className={styles.link} to={`/points-of-interest/${pointOfInterestId}`}>
      See more
    </Link>
  );
}