import React from "react";
import { observer } from "mobx-react-lite";
import DataStore from "../../store/DataStore";
import styles from "./styles.module.scss";

function ModalTopImages() {
  const { images, title } = DataStore.active_branch;

  const shots = images.shots.map((shot, index) => {
    return <img src={shot.src} title={shot.title} key={index} />;
  });

  function handleClose() {
    DataStore.setActiveBranch(null);
  }

  return (
    <div className={styles.ModalTopImages}>
      <img className={styles.coverImage} src={images.cover} alt={title} />
      <div className={styles.shots}>{shots}</div>
      <span className={styles.close} onClick={handleClose}></span>
    </div>
  );
}

export default observer(ModalTopImages);
