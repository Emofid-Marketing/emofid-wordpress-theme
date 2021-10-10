import classNames from "classnames";
import React, { useState } from "react";
import calculator from "../../store/calculator";
import funds from "../../data/funds";
import TabBarItem from "../TabBarItem/index.jsx";

function TabBar() {
  const [activeTabId, setActiveTabId] = useState(1);

  function handleSelect(id) {
    setActiveTabId(id);
    calculator.setFundId(id);
  }

  return (
    <div className={classNames("flex")}>
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
  );
}

export default TabBar;
