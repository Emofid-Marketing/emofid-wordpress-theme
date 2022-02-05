import React from "react";
import Tabs from "../../components/Tabs/index.jsx";
import TableBody from "../../components/TableBody/index.jsx";
import styles from "./styles.module.scss";

function Table() {
  return (
    <div className={styles.Table}>
      <Tabs />
      <TableBody />
    </div>
  );
}

export default Table;
