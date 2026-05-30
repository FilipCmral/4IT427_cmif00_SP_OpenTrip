//import type { PointOfInterest } from './types/pointOfInterest.types';

import { SearchPointsOfInterestForm } from './components/SearchPointsOfInterestForm';
import { useSearchPointsOfInterest } from './hooks/useSearchPointsOfInterest';

function App() {
  const { pointsOfInterest, makeSearch } = useSearchPointsOfInterest();

  return (
    <>
      <SearchPointsOfInterestForm onSearch={makeSearch} />
      <h1>Points of Interest in Prague</h1>
      <ul>
        {pointsOfInterest.map((point) => (
          <li key={point.id}>{point.name}</li>
        ))}
      </ul>
    </>
  )
}



export default App
