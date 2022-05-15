import React, { useState } from "react";
import DataStore from "../../store/Data";
import classNames from "classnames";
import styles from "./styles.module.scss";

function RiskSwitcher() {
  const [activeId, setActiveId] = useState(1);

  const options = [
    { label: "کم ریسک", id: "low" },
    { label: "توأم با ریسک", id: "medium" },
    { label: "پر ریسک", id: "high" },
  ];

  function handleSwitch(index) {
    setActiveId(index + 1);
    DataStore.setLoading(true);
    DataStore.setRisk(options[index].id);
  }

  const optionsList = options.map((item, index) => {
    return (
      <span
        key={index}
        className={classNames({ [styles.active]: activeId === index + 1 })}
        onClick={() => handleSwitch(index)}
      >
        {item.label}
      </span>
    );
  });

  return (
    <div
      className={classNames(styles.RiskSwitcher, styles[`state-${activeId}`])}
    >
      <span className={styles.label}>میزان ریسک</span>
      <div className={styles.wrapper}>{optionsList}</div>
    </div>
  );
}

export default RiskSwitcher;
