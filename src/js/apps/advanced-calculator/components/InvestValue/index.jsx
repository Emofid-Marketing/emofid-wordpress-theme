import { observer } from "mobx-react-lite";
import React from "react";
import numeral from "numeral";
import DataStore from "../../store/Data";
import styles from "./styles.module.scss";

function InvestValue() {
  const value = numeral(DataStore.return.value).format("0,0");

  return (
    <div className={styles.InvestValue}>
      <span className={styles.title}>ارزش دارایی شما پس از سرمایه گذاری:</span>
      <div className={styles.value}>
        <span className={styles.amount}>{value}</span>
        <span className={styles.label}>تومان</span>
      </div>
      <div className={styles.caption}>
        اگر از
        <strong>{DataStore.period}</strong>
        سال اخیر تا امروز در این پرتفو سرمایه گذاری کرده بودید،
        <strong>{DataStore.return.percent}% بازدهی</strong>
        کسب می کردید و سرمایه شما به مبلغ
        <strong>{value} تومان</strong>
        رسیده بود.
      </div>
    </div>
  );
}

export default observer(InvestValue);
