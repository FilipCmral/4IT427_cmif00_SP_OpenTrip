import { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { PointOfInterestDetailsContext } from '../context/PointOfInterestDetailsContext.tsx';

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
    <>
      <h1>Point of Interest Details</h1>
      {pointOfInterestDetails && (
        <div>
          <h2>{pointOfInterestDetails.name}</h2>
          <p>Rating: {pointOfInterestDetails.rate}⭐</p>
          {pointOfInterestDetails?.address && (
            <p>
              {pointOfInterestDetails.address.road} {pointOfInterestDetails.address.house_number}, {pointOfInterestDetails.address.city} {pointOfInterestDetails.address.postcode}
            </p>
          )}
          <p>{pointOfInterestDetails?.wikipedia_extracts?.text ?? "No description available. :("}</p>
          {pointOfInterestDetails?.wikipedia && (
            <p>
              <a href={pointOfInterestDetails.wikipedia} target="_blank" rel="noopener noreferrer">
                Read more on Wikipedia
              </a>
            </p>
          )}
          <img src={imageUrl} alt={pointOfInterestDetails.name}></img>
        </div>
      )}
    </>
  );
}