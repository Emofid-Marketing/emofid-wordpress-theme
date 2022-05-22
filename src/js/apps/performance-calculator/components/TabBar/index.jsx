import classNames from "classnames";
import React, { useState } from "react";
import calculator from "../../store/calculator";
import TabBarItem from "../TabBarItem/index.jsx";
import styles from "./styles.module.scss";

function TabBar() {
  const funds = calculator.funds;
  const [activeTabId, setActiveTabId] = useState("10600");

  function handleSelect(id) {
    setActiveTabId(id);
    calculator.setFundId(id);
  }

  return (
    <div className={classNames(styles.TabBar, "flex-column", "hide-scrollbar")}>
      <div className={classNames("flex", styles.inner)}>
        {funds.map((fund) => {
          return (
            <TabBarItem
              key={fund.id}
              data={fund}
              active={fund.id === activeTabId}
              clickHandler={() => handleSelect(fund.id)}
            />
          );
        })}
      </div>
    </div>
  );
}

export default TabBar;
