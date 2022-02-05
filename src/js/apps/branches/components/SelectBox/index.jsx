import classNames from "classnames";
import React, { useState, useRef, useEffect } from "react";
import SelectDropDown from "../SelectDropDown/index.jsx";
import styles from "./styles.module.scss";

function SelectBox() {
  const [items, setItems] = useState([]);

  const inputEl = useRef(null);
  const [activeDrop, setActiveDrop] = useState(false);
  const [inputValue, setInputValue] = useState("");

  function handleChangeValue(e) {
    setInputValue(e.target.value);
  }

  function showDrop() {
    setActiveDrop(true);
  }

  function hideDrop() {
    setActiveDrop(false);
  }

  function selectHandler(item) {
    console.log("selected", item.id);
    setInputValue(item.name);
    inputEl.current.blur();
  }

  useEffect(async () => {
    let response = await fetch(
      `http://localhost/api/cities.php?name=${inputValue}`
    );
    if (response.ok) {
      response = await response.json();
      setItems(response.data);
    }
  }, [inputValue]);

  return (
    <div className={classNames(styles.SelectBox, "relative")}>
      <input
        className="w-100 radius-small t-16 text-darker"
        type="text"
        placeholder="مثال: تهران"
        onFocus={showDrop}
        onBlur={hideDrop}
        ref={inputEl}
        value={inputValue}
        onChange={handleChangeValue}
      />
      <SelectDropDown
        items={items}
        active={activeDrop}
        selectHandler={selectHandler}
      />
    </div>
  );
}

export default SelectBox;
