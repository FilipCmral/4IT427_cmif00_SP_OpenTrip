import { useState } from 'react'
import { useQuery } from '@tanstack/react-query';

import { fetchPointsOfInterest } from './api/fetchPointsOfInterest';
import type { PointOfInterest } from './types/pointOfInterest.types';

function App() {
  const {data: serverPointsOfInterest = [], /*isLoading, isError, error*/} = useQuery({
    queryKey: ['pointsOfInterest'],
    queryFn: () => fetchPointsOfInterest("Prague"), // TODO make city name dynamic
    retry: 2,                   // 2x retry on failure
  });
  //const [clientPointsOfInterest, setClientPointsOfInterest] = useState<PointOfInterest[]>(serverPointsOfInterest || []);
  console.log(serverPointsOfInterest);


  return (
    <>
      <h1>Points of Interest in Prague</h1>
      <ul>
        {serverPointsOfInterest.map((point) => (
          <li key={point.id}>{point.name}</li>
        ))}
      </ul>
    </>
  )
}



export default App
