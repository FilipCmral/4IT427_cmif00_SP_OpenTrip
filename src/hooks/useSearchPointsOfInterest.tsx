import { useContext } from "react";
import { SearchPointsOfInterestContext } from "../context/SearchPointsOfInterestContext";

export function useSearchPointsOfInterest() {
  const context = useContext(SearchPointsOfInterestContext);
  if (!context) throw new Error("useSearchPointsOfInterest must be used within a SearchPointsOfInterestProvider");
  return context;
}