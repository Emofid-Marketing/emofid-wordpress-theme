import React, { useState } from "react";
import classNames from "classnames";
import formatNumber from "../../services/formatNumber";
import styles from "./styles.module.scss";

function Slider(props) {
  const {
    label,
    min,
    max,
    step,
    initValue,
    className,
    prefix,
    suffix,
    format,
    handler,
  } = props;

  const [value, setValue] = useState(initValue);

  function handleChange(e) {
    setValue(e.target.value);
    handler(e.target.value);
  }

  function computedLabel() {
    var newValue = format ? formatNumber(value) : formatNumber(value);
    newValue = suffix ? `${newValue} ${suffix}` : newValue;
    newValue = prefix ? `${prefix} ${newValue}` : newValue;

    return newValue;
  }

  return (
    <div className={classNames(styles.Slider, "flex-column", className)}>
      <div
        className={classNames(
          styles.label,
          "flex",
          "justify-space-between",
          "align-center",
          "mb-2"
        )}
      >
        <span className="t-14 lh-30">{label}</span>
        <span className="t-14 lh-30 strong">{computedLabel()}</span>
      </div>
      <input
        type="range"
        dir="ltr"
        className={classNames("cursor-pointer")}
        value={value}
        min={min}
        max={max}
        step={step}
        onChange={handleChange}
      />
    </div>
  );
}

export default Slider;
