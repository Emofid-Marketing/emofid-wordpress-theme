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
          src={`${window.EMOFID.theme_url}/assets/images/funds/mofid/${fund.iconName}.svg`}
          width="70"
          height="70"
          className="ml-5"
        />
        <div className={classNames(styles.innerData, "flex", "align-center")}>
          <div className={classNames(styles.fundAttr, "flex-column", "ml-5")}>
            <span className="flex t-12 mb-1">
              <span>نوع صندوق</span>
              <i
                className={classNames(styles.helpIcon, "mr-2", "tooltip")}
                data-tooltip="صندوق‌ها بر اساس نوع فعالیت، ترکیب دارایی‌ها و میزان ریسک و بازده به انواع مختلفی تقسیم می‌شوند."
              ></i>
            </span>
            <span className="t-14 strong">{fund.fundType}</span>
          </div>
          <div className={classNames(styles.fundAttr, "flex-column")}>
            <span className="flex t-12 mb-1">
              <span>میزان ریسک</span>
              <i
                className={classNames(styles.helpIcon, "mr-2")}
                data-tooltip="میزان ریسک به احتمال اختلاف میان میزان بازده واقعی صندوق و بازدهی مورد انتظار اطلاق می‌شود."
              ></i>
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
