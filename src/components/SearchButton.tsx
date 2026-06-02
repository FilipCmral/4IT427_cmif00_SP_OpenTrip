import styles from './SearchButton.module.css';

interface SearchButtonProps {
  buttonName: string;
  buttonText: string;
}

export function SearchButton({ buttonName, buttonText }: SearchButtonProps) {
  return (
    <button className={styles.button}  type="submit" name={buttonName}>
      {buttonText}
    </button>
  );
}