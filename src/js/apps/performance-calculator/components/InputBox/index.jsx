import React from "react";
import classNames from "classnames";
import calculator from "../../store/calculator";
import Slider from "../Slider/index.jsx";
import styles from "./styles.module.scss";

function InputBox() {
  return (
    <div className={classNames(styles.InputBox, "flex-column")}>
      <Slider
        label="مبلغ سرمایه گذاری"
        initValue={calculator.investment}
        handler={(value) => calculator.setInvestment(value)}
        min={1000000}
        max={1000000000}
        step={1000000}
        format={true}
        className="mb-5"
      />
      <Slider
        label="مدت سرمایه گذاری"
        initValue={calculator.years}
        handler={(value) => calculator.setYears(value)}
        min={1}
        max={7}
        step={2}
        suffix="سال اخیر"
        className="mb-5"
      />
    </div>
  );
}

export default InputBox;
