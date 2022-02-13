import React from "react";
import { observer } from "mobx-react-lite";
import DataStore from "../../store/DataStore.js";
import OfficeRow from "../OfficeRow/index.jsx";
import cols from "../../data/officesColumns.js";
import styles from "./styles.module.scss";

function OfficesTable() {
  const columns = cols.map((item, index) => {
    return (
      <div className={styles.column} key={index}>
        <span>{item.title}</span>
      </div>
    );
  });

  const Rows =
    DataStore.offices.count !== 0 ? (
      DataStore.offices.data.map((branch) => {
        return <OfficeRow office={branch} key={branch.id} />;
      })
    ) : (
      <div className={styles.noResult}>
        هیچ دفتر پیشخوانی در این شهر یافت نشد!
      </div>
    );

  return (
    <div className={styles.OfficesTable}>
      <div className={styles.tableHead}>{columns}</div>
      <div className={styles.tableBody}>{Rows}</div>
    </div>
  );
}

export default observer(OfficesTable);
