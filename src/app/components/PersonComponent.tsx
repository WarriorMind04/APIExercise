"use client";
import { useState } from "react";
import styles from "./Card.module.css";
import { Person } from "../types/person";

interface PersonComponentProps {
  person: Person;
}

export function PersonComponent({ person }: PersonComponentProps) {
  const [activeProperty, setActiveProperty] = useState<keyof Person>("name");

  const iconConfig = [
    { property: "name" as keyof Person, icon: "👤", text: "Hi, my name is" },
    {
      property: "email" as keyof Person,
      icon: "✉️",
      text: "My email address is",
    },
    {
      property: "birthday" as keyof Person,
      icon: "📝",
      text: "My birthday is",
    },
    {
      property: "phone" as keyof Person,
      icon: "📍",
      text: "My phone number is",
    },
    {
      property: "password" as keyof Person,
      icon: "🔒",
      text: "My password is",
    },
  ];

  const activeText =
    iconConfig.find((item) => item.property === activeProperty)?.text ||
    "Hi, My name is";

  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img
          src={person.profile || "/default-avatar.png"}
          alt="Profile"
          className={styles.profileImage}
        />
      </div>

      <div className={styles.infoSection}>
        <h2>{activeText}</h2>
        <p className={styles.propertyValue}>{person[activeProperty]}</p>
      </div>

      <div className={styles.iconGrid}>
        {iconConfig.map(({ property, icon }) => (
          <button
            key={property}
            className={`${styles.iconButton} ${
              activeProperty === property ? styles.active : ""
            }`}
            onMouseEnter={() => setActiveProperty(property)}
          >
            {icon}
          </button>
        ))}
      </div>
    </div>
  );
}
