import React from "react";
import classNames from "classnames";
import styles from "./styles.module.scss";

function SelectDropDown({ items, active, selectHandler }) {
  function handleSelect(e, itemId) {
    e.preventDefault();
    selectHandler(itemId);
  }

  const Items = items.map((item, index) => {
    return (
      <div
        key={index}
        className={styles.item}
        onMouseDown={(e) => handleSelect(e, item)}
      >
        <span className={styles.name}>{item.name}</span>
        <div className={styles.data}>
          <span>شعب مفید ({item.branches})</span>
          <span>دفاتر پیشخوان ({item.offices})</span>
        </div>
      </div>
    );
  });

  return (
    <div
      className={classNames(styles.SelectDropDown, "absolute", {
        [styles.active]: active,
      })}
    >
      <div className={classNames(styles.inner, "flex-column")}>{Items}</div>
    </div>
  );
}

export default SelectDropDown;
