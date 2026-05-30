import { SearchBar } from "./SearchBar";
import { SearchButton } from "./SearchButton";

interface SearchPointsOfInterestFormProps {
  onSearch: (query: string) => void;
}

export function SearchPointsOfInterestForm({ onSearch }: SearchPointsOfInterestFormProps) {

  return (
    <>
      <form onSubmit={(e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const query = formData.get("searchBar") as string;
        onSearch(query);
      }}>
        <SearchBar searchBarName="searchBar" searchPlaceholder="Prague, Berlin, London..." />
        <SearchButton buttonName="searchSubmitButton" buttonText="Search" />
      </form>
      
    </>
  );
}