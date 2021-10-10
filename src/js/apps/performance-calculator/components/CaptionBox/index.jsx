import React from "react";
import { observer } from "mobx-react-lite";
import classNames from "classnames";
import formatNumber from "../../services/formatNumber";
import calculator from "../../store/calculator";
import styles from "./styles.module.scss";

function CaptionBox() {
  return (
    <div
      className={classNames(
        styles.CaptionBox,
        "px-6",
        "py-4",
        "radius-small",
        "flex-column",
        "align-center"
      )}
    >
      <p className="t-16 lh-26 text-medium text-center mb-4">
        اگر از
        <strong>{calculator.years}</strong>
        سال اخیر تا امروز در صندوق
        <strong>{calculator.getFundData().title}</strong>
        سرمایه گذاری کرده بودید،
        <strong>
          {calculator.getFundData().ratios[calculator.years] * 100}%
        </strong>
        بازدهی کسب می کردید و سرمایه شما به مبلغ
        <strong>{formatNumber(calculator.getFundValue())} تومان</strong>
        رسیده بود.
      </p>
      <a className="Button blue medium mx-auto" href="#">
        مشاوره رایگان سرمایه گذاری
      </a>
    </div>
  );
}

export default observer(CaptionBox);
