import { SearchBar } from "./SearchBar";
import { SearchButton } from "./SearchButton";
import { useSearchPointsOfInterest } from "@/hooks/useSearchPointsOfInterest";

interface SearchPointsOfInterestFormProps {
  onSearch: (query: string) => void;
  updateFormTitle?: (query: string) => void;
}

export function SearchPointsOfInterestForm({ onSearch, updateFormTitle }: SearchPointsOfInterestFormProps) {
  const { formTitle } = useSearchPointsOfInterest();

  return (
    <>
      <h2>{formTitle}</h2>
      <form onSubmit={(e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const query = formData.get("searchBar") as string;
        onSearch(query);
        if (updateFormTitle) {
          updateFormTitle(query);
        }
      }}>
        <SearchBar searchBarName="searchBar" searchPlaceholder="Prague, Berlin, London..." labelText="City Name: " />
        <SearchButton buttonName="searchSubmitButton" buttonText="Search" />
      </form>
      
    </>
  );
}