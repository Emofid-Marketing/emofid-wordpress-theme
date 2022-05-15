import React, { useState } from "react";
import Slider from "../../../performance-calculator/components/Slider/index.jsx";
import DataStore from "../../store/Data";
import styles from "./styles.module.scss";

function TopInputs() {
  const [delayTimeOut, setDelayTimeOut] = useState(null);

  function changeValue(value) {
    clearTimeout(delayTimeOut);
    setDelayTimeOut(
      setTimeout(() => {
        DataStore.setValue(value);
        DataStore.setLoading(true);
      }, 1000)
    );
  }

  function changePeriod(value) {
    clearTimeout(delayTimeOut);
    setDelayTimeOut(
      setTimeout(() => {
        DataStore.setPeriod(value);
        DataStore.setLoading(true);
      }, 1000)
    );
  }

  return (
    <div className={styles.TopInputs}>
      <Slider
        label="مبلغ سرمایه گذاری"
        min={1000000}
        max={1000000000}
        step={1000000}
        initValue={1000000}
        className={styles.Slider}
        suffix="تومان"
        handler={changeValue}
      />
      <Slider
        label="مدت زمان سرمایه گذاری"
        min={1}
        max={5}
        step={2}
        initValue={3}
        className={styles.Slider}
        suffix="سال اخیر"
        handler={changePeriod}
      />
    </div>
  );
}

export default TopInputs;
