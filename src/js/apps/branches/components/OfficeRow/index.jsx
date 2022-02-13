import React from "react";
import DataStore from "../../store/DataStore";
import styles from "./styles.module.scss";

function OfficeRow({ office }) {
  const { office_code, address, phone } = office;

  return (
    <div className={styles.OfficeRow}>
      <div className={styles.cell}>
        <div className={styles.wrapper}>
          <span className={styles.city}>{DataStore.active_city_name}</span>
          <span className={styles.code}>{office_code}</span>
        </div>
      </div>
      <div className={styles.cell}>{address}</div>
      <div className={styles.cell}>{phone}</div>
      <div className={styles.cell}>
        <button className={styles.onMap}>مشاهده روی نقشه</button>
      </div>
    </div>
  );
}

export default OfficeRow;
