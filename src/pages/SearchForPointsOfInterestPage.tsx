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
        <h1 className={styles.title}>
            <span className={styles.firstLetter}>O</span><span className={styles.secondLetter}>p</span><span className={styles.thirdLetter}>e</span><span className={styles.fourthLetter}>n</span> 
           <span className={styles.firstLetter}>T</span><span className={styles.secondLetter}>r</span><span className={styles.thirdLetter}>i</span><span className={styles.fourthLetter}>p</span>  
           <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor" className="bi bi-geo-alt-fill" viewBox="0 0 16 16"><path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/></svg>
        </h1>
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