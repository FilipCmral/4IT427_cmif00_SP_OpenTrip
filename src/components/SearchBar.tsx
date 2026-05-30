import { useState } from "react";

interface SearchBarProps {
  searchBarName: string;
  searchPlaceholder?: string;
}

export function SearchBar({ searchBarName, searchPlaceholder }: SearchBarProps) {
  const [value, setValue] = useState("");

  return (
    <div>
      <input
        name={searchBarName}
        type="text"
        placeholder={searchPlaceholder || ""}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
}