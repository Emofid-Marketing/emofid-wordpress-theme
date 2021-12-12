import classNames from "classnames";
import React, { useState } from "react";
import { observer } from "mobx-react-lite";
import FiltersStore from "../../store/FiltersStore";
import styles from "./styles.module.scss";

function TabFilters() {
  const [activeTab, setActiveTab] = useState("همه صندوق ها");

  function handleClickTab(tabId) {
    setActiveTab(tabId);
    FiltersStore.setActiveFilter(tabId);
  }

  return (
    <div className={classNames(styles.TabFilters)}>
      <div className={classNames(styles.inner, "flex")}>
        {FiltersStore.filterTypes.map((fundType, index) => {
          return (
            <div
              className={classNames(styles.item, {
                [styles.active]: fundType === activeTab,
              })}
              key={index}
              onClick={() => handleClickTab(fundType)}
            >
              {fundType}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default observer(TabFilters);
