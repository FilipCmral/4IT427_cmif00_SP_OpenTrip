import { useState } from "react";

import styles from './SearchBar.module.css';

interface SearchBarProps {
  searchBarName: string;
  searchPlaceholder?: string;
  labelText?: string;
}

export function SearchBar({ searchBarName, searchPlaceholder, labelText }: SearchBarProps) {
  const [value, setValue] = useState("");

  return (
    <div className={styles.wrapper}>
      <label className={styles.label} htmlFor={searchBarName}>{labelText || ""}</label>
      <input
        className={styles.input}
        name={searchBarName}
        type="text"
        placeholder={searchPlaceholder || ""}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
}