import React, { useState } from "react";
import fundsTableColumns from "../../data/fundsTableColumns";
import filters from "../../data/filters";
import styles from "./styles.module.scss";

function TableHead({ filterHandler }) {
  const [range, setRange] = useState("return1M");

  function handleFilterChange(e) {
    setRange(e.target.value);
    filterHandler(e.target.value);
  }

  const Filter = ({ index }) =>
    index === 5 ? (
      <select
        className={styles.filter}
        value={range}
        onChange={handleFilterChange}
      >
        <optgroup>
          {filters.map((item, index) => (
            <option key={index} value={item.value}>
              {item.label}
            </option>
          ))}
        </optgroup>
      </select>
    ) : null;

  return (
    <div className={styles.TableHead}>
      {fundsTableColumns.map((item, index) => {
        return (
          <div className={styles.item} key={index}>
            <span>{item.label}</span>
            <Filter index={index} />
          </div>
        );
      })}
    </div>
  );
}

export default TableHead;
