import { useContext, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

import { PointOfInterestDetailsContext } from '../context/PointOfInterestDetailsContext.tsx';

import styles from './PointOfInterestDetailsPage.module.css';

export function PointOfInterestDetailsPage() {
  const { pointOfInterestDetails, setPointOfInterestId } = useContext(PointOfInterestDetailsContext)!;
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    if (id) {
      setPointOfInterestId(id);
    }
  }, [id, setPointOfInterestId]);

  console.log("xid:", id);
  console.log('Point of Interest Details:', pointOfInterestDetails);
  const imageUrl = pointOfInterestDetails?.preview?.source?.replace(/\d+px-/, '500px-');

  return (
    <div className={styles.page}>
      <Link to="/" className={styles.back}>Back to search</Link>
      {pointOfInterestDetails && (
        <div>
          <h1 className={styles.title}>{pointOfInterestDetails.name}</h1>

          <div className={styles.meta}>
            <span className={styles.rating}>Rating: {pointOfInterestDetails.rate}⭐</span>
            {pointOfInterestDetails?.address && (
              <span className={styles.address}>
                {pointOfInterestDetails.address.road} {pointOfInterestDetails.address.house_number}, {pointOfInterestDetails.address.city} {pointOfInterestDetails.address.postcode}
              </span>
            )}
          </div>

          <img className={styles.image} src={imageUrl} alt={pointOfInterestDetails.name}></img>
          
          <div className={styles.divider} />

          <p className={styles.description}>
            {pointOfInterestDetails?.wikipedia_extracts?.text ?? "No description available. :("}
          </p>
          {pointOfInterestDetails?.wikipedia && (
            <p className={styles.wikiLink}>
              <a href={pointOfInterestDetails.wikipedia} target="_blank" rel="noopener noreferrer">
                Read more on Wikipedia
              </a>
            </p>
          )}
        </div>
      )}
    </div>
  );
}