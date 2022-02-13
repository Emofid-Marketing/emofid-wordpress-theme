import React from "react";
import classNames from "classnames";
import DataStore from "../../store/DataStore";
import styles from "./styles.module.scss";

function ModalServices() {
  const { title, services } = DataStore.active_branch;

  const servicesList = services.map((service, index) => (
    <li
      className={classNames(
        { [styles.has]: service.status },
        "text-medium",
        "t-14",
        "mb-4",
        "flex",
        "align-center"
      )}
      key={index}
    >
      <i></i>
      {service.title}
    </li>
  ));

  return (
    <div
      className={classNames(
        styles.ModalServices,
        "flex-column",
        "mx-auto",
        "mb-6"
      )}
    >
      <h2 className="t-18 text-darker text-center mb-5">{title}</h2>
      <div className={classNames(styles.wrapper, "flex")}>
        <div
          className={classNames(
            styles.label,
            "t-16",
            "text-dark",
            "text-center"
          )}
        >
          خدمات شعبه
        </div>
        <ul
          className={classNames(styles.items, "flex-column", "flex-1", "pr-6")}
        >
          {servicesList}
        </ul>
      </div>
    </div>
  );
}

export default ModalServices;
