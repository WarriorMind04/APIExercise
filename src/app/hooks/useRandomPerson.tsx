import { useState, useEffect } from "react";
import { Person } from "../types/peopleResponse";

const useRandomPerson = () => {
  const [person, setPerson] = useState<Person | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchNewPerson = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://randomuser.me/api/");
      const data = await response.json();
      setPerson(data.results[0]);
    } catch (error) {
      console.error("Error fetching new person:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNewPerson();
  }, []);

  return {
    person,
    loading,
    fetchNewPerson,
  };
};
