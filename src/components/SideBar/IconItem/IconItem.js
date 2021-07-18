import React from "react";
import styles from "./IconItem.module.css";

function IconItem({ icon, text, fontSize = "0.9rem", noWrap = false }) {
  return (
    <div className={styles.container}>
      <span className={styles.icon}>{icon}</span>
      <div
        style={{
          fontSize,
          wordWrap: "break-word",
          whiteSpace: noWrap ? "noWrap" : "normal",
        }}
      >
        {text}
      </div>
    </div>
  );
}

export default IconItem;
