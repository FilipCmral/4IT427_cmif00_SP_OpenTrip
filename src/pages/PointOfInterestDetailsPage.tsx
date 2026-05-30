import { useContext } from 'react';

import { PointOfInterestDetailsContext } from '../context/PointOfInterestDetailsContext.tsx';

export function PointOfInterestDetailsPage() {
  const { pointOfInterestDetails } = useContext(PointOfInterestDetailsContext)!;

  return (
    <>
      <h1>Point of Interest Details</h1>
      {pointOfInterestDetails && (
        <div>
          <h2>{pointOfInterestDetails.name}</h2>
          <p>{pointOfInterestDetails.wikipedia_extracts.text}</p>
        </div>
      )}
    </>
  );
}