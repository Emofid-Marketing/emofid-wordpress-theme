import React from "react";
import { observer } from "mobx-react-lite";
import ModalTopImages from "../ModalTopImages/index.jsx";
import DataStore from "../../store/DataStore.js";
import styles from "./styles.module.scss";
import ModalServices from "../ModalServices/index.jsx";
import ModalContacts from "../ModalContacts/index.jsx";
import ModalPersons from "../ModalPersons/index.jsx";
import ModalAddress from "../ModalAddress/index.jsx";

function BranchModal() {
  if (!DataStore.active_branch) {
    return null;
  }

  function handleClick() {
    DataStore.setActiveBranch(null);
  }

  function handleClickPropagation(e) {
    e.stopPropagation();
  }

  return (
    <div className={styles.BranchModal} onClick={handleClick}>
      <div className={styles.box} onClick={handleClickPropagation}>
        <ModalTopImages />
        <ModalServices />
        <ModalContacts />
        <ModalPersons />
        <ModalAddress />
      </div>
    </div>
  );
}

export default observer(BranchModal);
