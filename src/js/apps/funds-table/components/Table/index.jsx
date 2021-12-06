import classNames from "classnames";
import React from "react";
import fundsTableColumns from "../../data/fundsTableColumns";
import TableRow from "../TableRow/index.jsx";
import funds from "../../data/funds";
import styles from "./styles.module.scss";

function Table() {
  return (
    <div
      className={classNames(
        styles.Table,
        "flex-column",
        "mb-8",
        "hide-scrollbar"
      )}
    >
      <div className={classNames(styles.inner, "flex-column")}>
        <div className={styles.head}>
          {fundsTableColumns.map((item, index) => {
            return (
              <div className={styles.item} key={index}>
                <span>{item.label}</span>
              </div>
            );
          })}
        </div>
        <div className={styles.body}>
          {funds.map((fund, index) => {
            return <TableRow key={index} fund={fund} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Table;
