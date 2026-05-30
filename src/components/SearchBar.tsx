import { useState } from "react";

interface SearchBarProps {
  searchBarName: string;
  searchPlaceholder?: string;
  labelText?: string;
}

export function SearchBar({ searchBarName, searchPlaceholder, labelText }: SearchBarProps) {
  const [value, setValue] = useState("");

  return (
    <div>
      <label htmlFor={searchBarName}>{labelText || ""}</label>
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