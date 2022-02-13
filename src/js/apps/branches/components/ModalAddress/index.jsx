import React from "react";
import classNames from "classnames";
import DataStore from "../../store/DataStore";
import styles from "./styles.module.scss";

function ModalAddress() {
  const { address } = DataStore.active_branch;

  return (
    <div className={styles.ModalAddress}>
      <div className="flex-column">
        <div
          className={classNames(
            styles.address,
            "flex",
            "align-center",
            "justify-center",
            "mb-6"
          )}
        >
          <span
            className={classNames(
              styles.label,
              "flex",
              "align-center",
              "t-16",
              "text-dark",
              "ml-1"
            )}
          >
            نشانی:
          </span>
          <div className="t-14 text-medium">{address}</div>
        </div>
      </div>
    </div>
  );
}

export default ModalAddress;
