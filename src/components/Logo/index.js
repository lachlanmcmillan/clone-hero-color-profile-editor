import React from "react";
import styles from "./Logo.module.css";

export const Logo = (props) => (
  <div className={styles.logo}>
    {/* <img className={styles.img} src="/images/ch.png" /> */}
    <h1 className={styles.text}>Clone Hero Note Editor</h1>
  </div>
);
