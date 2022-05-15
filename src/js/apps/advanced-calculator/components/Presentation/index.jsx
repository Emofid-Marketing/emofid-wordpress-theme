import React from "react";
import classNames from "classnames";
import DataStore from "../../store/Data";
import RiskSwitcher from "../../components/RiskSwitcher/index.jsx";
import InvestValue from "../../components/InvestValue/index.jsx";
import PortfoChart from "../../components/PortfoChart/index.jsx";
import CompareChart from "../../components/CompareChart/index.jsx";
import styles from "./styles.module.scss";
import { observer } from "mobx-react-lite";

function Presentation() {
  const Loading = DataStore.loading ? (
    <div className={styles.loadingOverally}>
      <div className={styles.inner}>
        <span className={styles.spinner}></span>
        <span className={styles.text}>در حال محاسبه پرتفوی پیشنهادی</span>
      </div>
    </div>
  ) : null;

  return (
    <div
      className={classNames(styles.Presentation, {
        [styles.loading]: DataStore.loading,
      })}
    >
      {Loading}
      <RiskSwitcher />
      <div className={styles.top}>
        <InvestValue />
        <PortfoChart />
      </div>
      <CompareChart />
    </div>
  );
}

export default observer(Presentation);
