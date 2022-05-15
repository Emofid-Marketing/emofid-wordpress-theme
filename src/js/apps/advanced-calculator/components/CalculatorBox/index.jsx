import React from "react";
import TopInputs from "../../components/TopInputs/index.jsx";
import Presentation from "../../components/Presentation/index.jsx";
import styles from "./styles.module.scss";

function CalculatorBox() {
  return (
    <div className={styles.CalculatorBox}>
      <TopInputs />
      <Presentation />
    </div>
  );
}

export default CalculatorBox;
