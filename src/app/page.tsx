"use client";
import { useState } from "react";
import { PersonComponent } from "./components/PersonComponent";
import { HistoryBar } from "./components/HistoryBar";
import { Person } from "./types/person";
import styles from "./App.module.css";

export default function App() {
  const [history, setHistory] = useState<Person[]>([]);
  const [selectedPerson, setSelectedPerson] = useState<Person | null>(null);

  const handleNewPerson = (newPerson: Person) => {
    setHistory((prev) => [newPerson, ...prev]);
    setSelectedPerson(newPerson);
  };

  return (
    <div className={styles.appContainer}>
      <HistoryBar history={history} onSelect={setSelectedPerson} />
      {selectedPerson && <PersonComponent person={selectedPerson} />}
    </div>
  );
}
