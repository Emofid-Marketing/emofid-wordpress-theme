import React from "react";
import styles from "./styles.module.scss";

function Loading() {
  return (
    <div className={styles.Loading}>
      <span className={styles.spinner}></span>
      <span className={styles.text}>در حال بارگذاری ماشین حساب</span>
    </div>
  );
}

export default Loading;
