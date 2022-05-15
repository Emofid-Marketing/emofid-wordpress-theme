import React, { useState } from "react";
import StockChart from "../../components/StockChart/index.jsx";
import DataStore from "../../store/Data";
import styles from "./styles.module.scss";

function CompareChart() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const checkItems = [
    { name: "مسکن", id: "house" },
    { name: "طلا", id: "imami_goldcoin" },
    { name: "شاخص کل بورس", id: "overall_index" },
  ];

  function handleChange(index) {
    setSelectedIndex(index);
    setTimeout(() => {
      DataStore.setActiveSries(checkItems[index]);
    }, 0);
  }

  const checkList = checkItems.map((item, index) => {
    return (
      <label className={styles.checkItem} key={index}>
        <input
          type="radio"
          name="second-series"
          checked={index === selectedIndex ? true : false}
          onChange={() => handleChange(index)}
        />
        <span>{item.name}</span>
      </label>
    );
  });

  return (
    <div className={styles.CompareChart}>
      <div className={styles.caption}>
        بازدهی سرمایه بر مبنای پرتفوی پیشنهادی:
      </div>
      <StockChart />
      <div className={styles.checkRow}>{checkList}</div>
    </div>
  );
}

export default CompareChart;
