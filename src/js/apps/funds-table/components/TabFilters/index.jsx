import classNames from "classnames";
import React, { useState } from "react";
import fundTypes from "../../data/fundTypes";
import styles from "./styles.module.scss";

function TabFilters() {
  const [activeTab, setActiveTab] = useState(1);

  function handleClickTab(tabId) {
    setActiveTab(tabId);
  }

  return (
    <div className={classNames(styles.TabFilters)}>
      <div className={classNames(styles.inner, "flex")}>
        {fundTypes.map((fundType) => {
          return (
            <div
              className={classNames(styles.item, {
                [styles.active]: fundType.id === activeTab,
              })}
              key={fundType.id}
              onClick={() => handleClickTab(fundType.id)}
            >
              {fundType.title}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default TabFilters;
