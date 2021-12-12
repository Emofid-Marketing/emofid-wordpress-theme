import React from "react";
import classNames from "classnames";
import styles from "./styles.module.scss";

function Loading() {
  return (
    <div
      className={classNames(
        styles.Loading,
        "flex-column",
        "align-center",
        "mx-auto",
        "mb-5"
      )}
    >
      <div className={classNames(styles.spinner, "mb-3")}></div>
      <span className="text-medium strong">
        در حال بارگذاری اطلاعات صندوق ها
      </span>
    </div>
  );
}

export default Loading;
