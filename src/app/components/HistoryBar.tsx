}"use client";
import styles from "../HistoryBar.module.css";
import { Person } from "../types/person";

interface HistoryBarProps {
  history: Person[];
  onSelect: (person: Person) => void;
}

export function HistoryBar({ history, onSelect }: HistoryBarProps) {
  return (
    <div className={styles.historyBar}>
      <h3>History</h3>
      <ul className={styles.historyList}>
        {history.map((person, index) => (
          <li key={index} onClick={() => onSelect(person)} className={styles.historyItem}>
            <img
              src={person.profile || "/default-avatar.png"}
              alt={person.name}
              className={styles.historyImage}
            />
            <span>{person.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
