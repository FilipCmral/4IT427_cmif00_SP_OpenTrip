import { useQuery } from "@tanstack/react-query";

import { fetchPointsOfInterest } from "../api/fetchPointsOfInterest";

export function useSearch(query: string) {
  // TODO create search state and search function
  const {data: searchedPointsOfInterest = [], /*isLoading, isError, error*/} = useQuery({
      queryKey: ['pointsOfInterest', query],
      queryFn: () => fetchPointsOfInterest(query),
      enabled: true,
      staleTime: Infinity,
    });
    return searchedPointsOfInterest;
}