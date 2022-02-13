import React from "react";
import { observer } from "mobx-react-lite";
import DataStore from "../../store/DataStore";
import cols from "../../data/branchesColumns";
import TableRow from "../TableRow/index.jsx";
import styles from "./styles.module.scss";

function TableBody() {
  const columns = cols.map((item, index) => {
    return (
      <div className={styles.column} key={index}>
        <span>{item.title}</span>
      </div>
    );
  });

  const Rows =
    DataStore.branches.count !== 0 ? (
      DataStore.branches.data.map((branch) => {
        return <TableRow branch={branch} key={branch.id} />;
      })
    ) : (
      <div className={styles.noResult}>هیچ شعبه ای در این شهر یافت نشد.</div>
    );

  return (
    <div className={styles.TableBody}>
      <div className={styles.tableHead}>{columns}</div>
      <div className={styles.tableBody}>{Rows}</div>
    </div>
  );
}

export default observer(TableBody);
