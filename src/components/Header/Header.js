import React from "react";
import styles from "./Header.module.css";

function Header({ value, white }) {
  return (
    <div className={styles.container}>
      <div className={styles.value} style={{ color: white ? "#e64545" : "" }}>
        {value}
      </div>
      <div
        className={styles.underline}
        style={{ backgroundColor: white ? "#e64545" : "" }}
      />
    </div>
  );
}

export default Header;
