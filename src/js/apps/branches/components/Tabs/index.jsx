import React, { useState } from "react";
import classNames from "classnames";
import { observer } from "mobx-react-lite";
import DataStore from "../../store/DataStore";
import styles from "./styles.module.scss";

function Tabs({ handlerFunction }) {
  const [selectedTab, setSelectedTab] = useState(1);

  const tabs = [
    { id: 1, title: "شعب کارگزاری مفید", name: "branches" },
    { id: 2, title: "دفاتر پیشخوان", name: "offices" },
  ];

  function selectTab(tabId) {
    setSelectedTab(tabId);
    handlerFunction(tabId);
  }

  const TabsMap = tabs.map((item) => {
    return (
      <div
        className={classNames(styles.tab, {
          [styles.active]: item.id === selectedTab,
        })}
        onClick={() => selectTab(item.id)}
        key={item.id}
      >
        <span className={styles.statistics}>
          ({DataStore[item.name].count} مورد)
        </span>
        <span className={styles.title}>{item.title}</span>
      </div>
    );
  });

  return <div className={styles.Tabs}>{TabsMap}</div>;
}

export default observer(Tabs);
