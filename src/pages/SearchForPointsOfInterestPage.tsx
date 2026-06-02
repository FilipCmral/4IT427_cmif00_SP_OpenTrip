import { useSearchPointsOfInterest } from "../hooks/useSearchPointsOfInterest";
import { SearchPointsOfInterestForm } from "../components/SearchPointsOfInterestForm";
import { PointOfInterestCard } from "../components/PointOfInterestCard";

import styles from './SearchForPointsOfInterestPage.module.css';

export function SearchForPointsOfInterestPage() {
  const { pointsOfInterest, makeSearch, updateFormTitle, formTitle } = useSearchPointsOfInterest();

  const filteredPointsOfInterest = pointsOfInterest.filter(
    pointOfInterest => pointOfInterest.name && String(pointOfInterest.name).trim() !== ""
  );

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <h1 className={styles.title}>Open Trip</h1>
        <SearchPointsOfInterestForm onSearch={makeSearch} updateFormTitle={updateFormTitle} />
      </div>

      {filteredPointsOfInterest.length > 0 && (
        <>
          <div className={styles.divider} />
          <div className={styles.resultsHeader}>
            <h2 className={styles.resultsTitle}>{formTitle}</h2>
            <span className={styles.resultsCount}>{filteredPointsOfInterest.length} places</span>
          </div>
        </>
      )}

      <div className={styles.grid}>
        {filteredPointsOfInterest.length === 0 && filteredPointsOfInterest.length === 0 ? (
          <p className={styles.empty}>Search for a city to discover points of interest.</p>
        ) : filteredPointsOfInterest.length === 0 ? (
          <p className={styles.empty}>No results found.</p>
        ) :
        (filteredPointsOfInterest.map((pointOfInterest) => (
          <PointOfInterestCard
            key={pointOfInterest.xid}
            id={pointOfInterest.xid}
            name={pointOfInterest.name}
            kinds={pointOfInterest.kinds}
            rate={pointOfInterest.rate}
          />
        ))
      )}     
      </div> 
    </div>
  );
}