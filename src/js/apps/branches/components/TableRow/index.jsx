import React from "react";
import styles from "./styles.module.scss";

function TableRow({ branch }) {
  const { id, name, thumbnail, address, phone, fax } = branch;

  return (
    <div className={styles.TableRow} key={id}>
      <div className={styles.cell}>
        <img className={styles.thumbnail} alt={name} src={thumbnail} />
        <div className={styles.titles}>
          <span className={styles.city}>تهران</span>
          <span className={styles.name}>{name}</span>
        </div>
      </div>
      <div className={styles.cell}>{address}</div>
      <div className={styles.cell}>{phone}</div>
      <div className={styles.cell}>{fax}</div>
      <div className={styles.cell}>
        <button className={styles.onMap}>مشاهده روی نقشه</button>
      </div>
    </div>
  );
}

export default TableRow;
