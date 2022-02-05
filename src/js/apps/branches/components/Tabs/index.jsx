import React, { useState } from "react";
import classNames from "classnames";
import styles from "./styles.module.scss";

function Tabs() {
  const [selectedTab, setSelectedTab] = useState(1);

  const tabs = [
    { id: 1, title: "شعب کارگزاری مفید" },
    { id: 2, title: "دفاتر پیشخوان" },
  ];

  function selectTab(tabId) {
    setSelectedTab(tabId);
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
        <span className={styles.statistics}>(8 مورد)</span>
        <span className={styles.title}>{item.title}</span>
      </div>
    );
  });

  return <div className={styles.Tabs}>{TabsMap}</div>;
}

export default Tabs;
