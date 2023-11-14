import React from "react";
import styles from "./Button.module.css";
function Button({ message = "contact me" }) {
  return <button className={styles.button}>{message}</button>;
}

export default Button;
