import React from "react";
import classNames from "classnames";
import { observer } from "mobx-react-lite";
import formatNumber from "../../services/formatNumber";
import calculator from "../../store/calculator";
import styles from "./styles.module.scss";

function PriceViewBox() {
  function fundValue() {
    return formatNumber(calculator.getFundValue());
  }

  return (
    <div
      className={classNames(
        styles.PriceViewBox,
        "flex-column",
        "align-center",
        "mb-5"
      )}
    >
      <div className={classNames(styles.label, "t-14", "lh-30", "text-light")}>
        نتیجه سرمایه گذاری شما (تومان)
      </div>
      <div className={styles.value}>{fundValue()} تومان</div>
    </div>
  );
}

export default observer(PriceViewBox);
