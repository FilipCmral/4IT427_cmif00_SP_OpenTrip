import { PointOfInterestDetailsButton } from "./PointOfInterestDetailsButton";

import styles from './PointOfInterestCard.module.css';

interface PointOfInterestCardProps {
  id: string;
  name: string;
  kinds: string; //Comma-separated list of categories. https://dev.opentripmap.com/en/catalog.tree.json
  rate: string; //Rating of the place. The value is a string with a number 
}

export function PointOfInterestCard({ id, name, kinds, rate }: PointOfInterestCardProps) {
  let mainCategoryFormatted = null;

  if (kinds) {
    console.log('Kinds:', kinds);
    const kindsArray = kinds.split(',');
    const mainCategory = kindsArray[kindsArray.length-1];
    console.log('Main category:', mainCategory);
    const mainCategoryWordSplit = mainCategory.split('_');
    mainCategoryFormatted = mainCategoryWordSplit.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    mainCategoryFormatted = mainCategoryFormatted.replace(/ And /g, ' & ');
}

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