import { useSearchPointsOfInterest } from "../hooks/useSearchPointsOfInterest";
import { SearchPointsOfInterestForm } from "../components/SearchPointsOfInterestForm";
import { PointOfInterestCard } from "../components/PointOfInterestCard";

export function SearchForPointsOfInterestPage() {
  const { pointsOfInterest, makeSearch, updateFormTitle } = useSearchPointsOfInterest();
  return (
    <>
      <SearchPointsOfInterestForm onSearch={makeSearch} updateFormTitle={updateFormTitle} />
        {pointsOfInterest.filter(pointOfInterest => (pointOfInterest.name && String(pointOfInterest.name).trim() !== ""))
        .map((pointOfInterest) => (
          <PointOfInterestCard
            key={pointOfInterest.xid}
            id={pointOfInterest.xid}
            name={pointOfInterest.name}
            kinds={pointOfInterest.kinds}
            rate={pointOfInterest.rate}
          />
        ))}      
    </>
  );
}