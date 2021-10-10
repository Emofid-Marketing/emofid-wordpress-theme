import React from "react";
import classNames from "classnames";
import { observer } from "mobx-react-lite";
import styles from "./styles.module.scss";
import TabBar from "../TabBar/index.jsx";
import Calculator from "../Calculator/index.jsx";
import calculator from "../../store/calculator";

function CalculatorBox() {
  return (
    <div
      className={classNames(
        styles.CalculatorBox,
        "bg-white",
        "p-5",
        "radius-small",
        "shadow-small-center"
      )}
    >
      <TabBar />
      <Calculator fundId={calculator.fundId} />
    </div>
  );
}

export default observer(CalculatorBox);
