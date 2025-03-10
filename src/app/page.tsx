"use client";

import { useState } from "react";
import { PersonComponent } from "./components/PersonComponent";
import { HistoryBar } from "./components/HistoryBar";
import { useRandomPerson } from "./hooks/useRandomPerson";
import styles from "./App.module.css";
import { Person } from "./types/person";

export default function App() {
  const { currentPerson, personHistory, loading, error, fetchData } =
    useRandomPerson();

  const handleSelectPerson = (person: Person) => {};

  return (
    <div className={styles.appContainer}>
      <div className={styles.leftSide}>
        <HistoryBar
          history={personHistory}
          onSelect={handleSelectPerson}
          selectedPerson={currentPerson}
        />
      </div>

      <div className={styles.centerContent}>
        <h1 className={styles.centeredTitle}>Person Details</h1>

        {loading && <p className={styles.loading}>Loading...</p>}
        {error && <p className={styles.error}>Error: {error}</p>}

        {currentPerson ? (
          <PersonComponent person={currentPerson} />
        ) : (
          <p>Select a person from the history or generate a new one.</p>
        )}

        <button className={styles.generateButton} onClick={fetchData}>
          Generate Random Person
        </button>
      </div>
    </div>
  );
}
