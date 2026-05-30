import { useQuery } from "@tanstack/react-query";
import { createContext, useState } from "react";

import { type PointOfInterest } from "../types/pointOfInterest.types";

import { fetchPointOfInterestDetails } from "../api/fetchPointOfInterestDetails";

interface PointOfInterestDetailsContextType {
  pointOfInterestDetails: PointOfInterest | undefined;
  isLoading: boolean;
  isError: boolean;
  error: Error | null;
  getPointOfInterestDetails: (id: string) => void;
};

const PointOfInterestDetailsContext = createContext<PointOfInterestDetailsContextType | null>(null);
export { PointOfInterestDetailsContext };

interface PointOfInterestDetailsContextProps {
  children: React.ReactNode;
}

export function PointOfInterestDetailsProvider({ children }: PointOfInterestDetailsContextProps) {
  const [pointOfInterestId, setPointOfInterestId] = useState<string | null>(null);

  const { data: pointOfInterestDetails, isLoading, isError, error } = useQuery({
    queryKey: ['pointOfInterestDetails', pointOfInterestId],
    queryFn: () => fetchPointOfInterestDetails(pointOfInterestId!),
    staleTime: Infinity,
  });

  const getPointOfInterestDetails = (id: string) => {
    setPointOfInterestId(id);
  }

  return (
    <PointOfInterestDetailsContext.Provider value={{ pointOfInterestDetails, isLoading, isError, error, getPointOfInterestDetails }}>
      {children}
    </PointOfInterestDetailsContext.Provider>
  );
}
