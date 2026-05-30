import { useQuery } from "@tanstack/react-query";
import { createContext, useState } from "react";

import { type PointOfInterest } from "../types/pointOfInterest.types";

import { fetchPointsOfInterest } from "../api/fetchPointsOfInterest";

interface SearchPointsOfInterestContextType {
  pointsOfInterest: PointOfInterest[];
  isLoading: boolean;
  isError: boolean;
  error: Error | null;
  makeSearch: (query: string) => void;
  formTitle?: string;
  updateFormTitle?: (query: string) => void;
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
    updateFormTitle(query);
  };

  const [formTitle, setFormTitle] = useState("Search for points of interest in different Cities");
  const updateFormTitle = (query: string) => {
    setFormTitle(`Search results for points of interest in ${query}`);
  }

  return (
    <SearchPointsOfInterestContext.Provider value={{ pointsOfInterest, isLoading, isError, error, makeSearch, formTitle, updateFormTitle }}>
      {children}
    </SearchPointsOfInterestContext.Provider>
  );
}
