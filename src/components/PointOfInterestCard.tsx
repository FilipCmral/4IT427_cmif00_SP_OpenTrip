import { PointOfInterestDetailsButton } from "./PointOfInterestDetailsButton";

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
    <div>
      <h3>{name}</h3>
      {mainCategoryFormatted && <p>{mainCategoryFormatted}</p>}
      <p>Rating: {rate}⭐</p>
      <PointOfInterestDetailsButton pointOfInterestId={id} />
    </div>
  );
}