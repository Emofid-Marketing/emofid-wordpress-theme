import React from "react";
import { observer } from "mobx-react-lite";
import DonutChart from "../../components/DonutChart/index.jsx";
import DataStore from "../../store/Data";
import styles from "./styles.module.scss";

function PortfoChart() {
  const distList = DataStore.distribution.map((item, index) => {
    return (
      <div className={styles.item} key={index}>
        <span className={styles.label}>{item[0]}</span>
        <span className={styles.value}>{item[1]} درصد</span>
      </div>
    );
  });

  return (
    <div className={styles.PortfoChart}>
      <div className={styles.chart}>
        <DonutChart />
      </div>
      <div className={styles.details}>{distList}</div>
    </div>
  );
}

export default observer(PortfoChart);
