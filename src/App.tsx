import { PointOfInterestCard } from './components/PointOfInterestCard';
import { SearchPointsOfInterestForm } from './components/SearchPointsOfInterestForm';
import { useSearchPointsOfInterest } from './hooks/useSearchPointsOfInterest';

function App() {
  const { pointsOfInterest, makeSearch, updateFormTitle } = useSearchPointsOfInterest();

  return (
    <>
      <SearchPointsOfInterestForm onSearch={makeSearch} updateFormTitle={updateFormTitle} />
        {pointsOfInterest.filter(pointOfInterest => (pointOfInterest.name && String(pointOfInterest.name).trim() !== ""))
        .map((pointOfInterest, pointOfInterestIndex) => (
          <PointOfInterestCard
            key={pointOfInterest.id ? pointOfInterest.id : pointOfInterestIndex}
            id={pointOfInterest.id}
            name={pointOfInterest.name}
            kinds={pointOfInterest.kinds}
            rate={pointOfInterest.rate}
            image={pointOfInterest.image}
            wikipedia_extracts={pointOfInterest.wikipedia_extracts}
          />
        ))}
    </>
  )
}

export default App
