export function getPointOfInterestMainCategory(kinds: string): string | null {
  if (!kinds) {
    return null;
  }

  const kindsArray = kinds.split(',');
  const mainCategory = kindsArray[kindsArray.length-1];
  const mainCategoryWordSplit = mainCategory.split('_');
  let mainCategoryFormatted = mainCategoryWordSplit.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  mainCategoryFormatted = mainCategoryFormatted.replace(/ And /g, ' & ');
  return mainCategoryFormatted;
}