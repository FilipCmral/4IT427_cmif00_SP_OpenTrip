interface SearchButtonProps {
  buttonName: string;
  buttonText: string;
}

export function SearchButton({ buttonName, buttonText }: SearchButtonProps) {
  return (
    <button type="submit" name={buttonName}>
      {buttonText}
    </button>
  );
}