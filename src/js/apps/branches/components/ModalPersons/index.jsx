import React from "react";
import classNames from "classnames";
import DataStore from "../../store/DataStore";
import styles from "./styles.module.scss";

function ModalPersons() {
  const { persons } = DataStore.active_branch;

  const personsList = persons.map((person, index) => {
    return (
      <div
        className={classNames(styles.person, "flex-column", "px-2", "mb-6")}
        key={index}
      >
        <img
          alt={person.name}
          src={person.image}
          className="mb-3 w-100 h-auto radius-small"
        />
        <h3 className="t-14 text-darker text-center mb-1">{person.name}</h3>
        <h4 className="t-12 text-light text-center">{person.position}</h4>
      </div>
    );
  });

  return (
    <div className={classNames(styles.ModalPersons, "py-6")}>
      <div className={classNames(styles.wrapper, "flex-column", "mx-auto")}>
        <h2 className="t-16 text-dark text-center mb-5">همکاران شعبه</h2>
        <div className={classNames(styles.persons, "flex", "wrap")}>
          {personsList}
        </div>
      </div>
    </div>
  );
}

export default ModalPersons;
