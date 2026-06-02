import { getPointOfInterestMainCategory } from "@/utils/getPointOfInterestMainCategory";

import { PointOfInterestDetailsButton } from "./PointOfInterestDetailsButton";

import styles from './PointOfInterestCard.module.css';


interface PointOfInterestCardProps {
  id: string;
  name: string;
  kinds: string; //Comma-separated list of categories. https://dev.opentripmap.com/en/catalog.tree.json
  rate: string; //Rating of the place. The value is a string with a number 
}

export function PointOfInterestCard({ id, name, kinds, rate }: PointOfInterestCardProps) {
  const mainCategoryFormatted = getPointOfInterestMainCategory(kinds);

  return (
    <div className={styles.card}>
      <h3 className={styles.name}>{name}</h3>
      {mainCategoryFormatted && <p className={styles.category}>{mainCategoryFormatted}</p>}
      <p className={styles.rating}>Rating: {rate}⭐</p>
      <div className={styles.footer}>
        <PointOfInterestDetailsButton pointOfInterestId={id} />
      </div>
    </div>
  );
}