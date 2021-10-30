import React from "react";
import classNames from "classnames";
import funds from "../../data/funds";
import styles from "./styles.module.scss";
import InputBox from "../InputBox/index.jsx";
import PriceViewBox from "../PriceViewBox/index.jsx";
import CaptionBox from "../CaptionBox/index.jsx";

function Calculator({ fundId }) {
  const index = funds
    .map(function (fund) {
      return fund.id;
    })
    .indexOf(fundId);

  const fund = funds[index];

  return (
    <div
      className={classNames(
        styles.Calculator,
        "flex-column",
        "align-center",
        "py-5"
      )}
    >
      <div className={classNames(styles.data, "flex", "align-center", "mb-7")}>
        <img
          src={`${window.EMOFID.theme_url}/dist/images/funds/mofid/${fund.iconName}.svg`}
          width="70"
          height="70"
          className="ml-5"
        />
        <div className={classNames(styles.innerData, "flex", "align-center")}>
          <span className={classNames(styles.chartIcon, "ml-3")}></span>
          <div className={classNames(styles.fundAttr, "flex-column", "ml-5")}>
            <span className="flex t-12">
              <span>نوع صندوق</span>
              <i className={classNames(styles.helpIcon, "mr-2")}></i>
            </span>
            <span className="t-14 strong">{fund.fundType}</span>
          </div>
          <span className={classNames(styles.chartIcon, "ml-3")}></span>
          <div className={classNames(styles.fundAttr, "flex-column")}>
            <span className="flex t-12">
              <span>میزان ریسک</span>
              <i className={classNames(styles.helpIcon, "mr-2")}></i>
            </span>
            <span className="t-14 strong">{fund.risk}</span>
          </div>
        </div>
      </div>
      <InputBox />
      <PriceViewBox />
      <CaptionBox />
    </div>
  );
}

export default Calculator;
