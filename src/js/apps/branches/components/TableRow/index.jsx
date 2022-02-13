import React from "react";
import DataStore from "../../store/DataStore";
import styles from "./styles.module.scss";

function TableRow({ branch }) {
  const { id, name, thumbnail, address, phone, fax } = branch;

  async function handleRowClick() {
    let response = await fetch(
      `https://emofid.arsamnet.com/api/branches/${id}`
    );
    response = await response.json();
    DataStore.setActiveBranch(response);
  }

  const thumbnailUrl = thumbnail
    ? thumbnail
    : `${window.EMOFID.theme_url}/assets/images/pages/branches/default-branch-thumbnail.svg`;

  return (
    <div className={styles.TableRow} onClick={handleRowClick}>
      <div className={styles.cell}>
        <img
          className={styles.thumbnail}
          alt={name}
          src={thumbnailUrl}
          width="50"
          height="50"
        />
        <div className={styles.titles}>
          <span className={styles.city}>{DataStore.active_city_name}</span>
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
