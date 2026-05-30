import { createContext, useState } from "react";
import { useQuery } from "@tanstack/react-query";

import { type PointOfInterest } from "../types/pointOfInterest.types";

import { fetchPointsOfInterest } from "../api/fetchPointsOfInterest";

interface SearchPointsOfInterestContextType {
  pointsOfInterest: PointOfInterest[];
  isLoading: boolean;
  isError: boolean;
  error: Error | null;
  makeSearch: (query: string) => void;
  // TODO
};

const SearchPointsOfInterestContext = createContext<SearchPointsOfInterestContextType | null>(null);
export { SearchPointsOfInterestContext };

interface SearchPointsOfInterestContextProps {
  children: React.ReactNode;
}

export function SearchPointsOfInterestProvider({ children }: SearchPointsOfInterestContextProps) {
  const [searchQuery, setSearchQuery] = useState<string | null>(null);

  const { data: pointsOfInterest = [], isLoading, isError, error } = useQuery({
    queryKey: ['pointsOfInterest', searchQuery],
    queryFn: () => fetchPointsOfInterest(searchQuery!),
    enabled: searchQuery !== null, // Fetches data only when searchQuery exists
    staleTime: Infinity,
  });

  const makeSearch = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <SearchPointsOfInterestContext.Provider value={{ pointsOfInterest, isLoading, isError, error, makeSearch }}>
      {children}
    </SearchPointsOfInterestContext.Provider>
  );
}
