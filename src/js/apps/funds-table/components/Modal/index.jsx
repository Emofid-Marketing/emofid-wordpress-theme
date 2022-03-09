import classNames from "classnames";
import React from "react";
import { observer } from "mobx-react-lite";
import ModalStore from "../../store/ModalStore";
import styles from "./styles.module.scss";

function Modal() {
  function clickOutsideModal() {
    ModalStore.toggleModal();
  }

  return (
    <div
      className={classNames(styles.Modal, { [styles.show]: ModalStore.show })}
      onClick={clickOutsideModal}
    >
      <div
        className={classNames(styles.box, "flex-column")}
        onClick={(e) => e.stopPropagation()}
      >
        <img
          className={classNames("w-100", "h-auto")}
          src={`${window.EMOFID.theme_url}/assets/images/pages/funds/funds-modal-cover.png`}
        />
        <div
          className={classNames(
            styles.content,
            "flex-column",
            "align-center",
            "pt-6",
            "pb-5",
            "px-3"
          )}
        >
          <h2 className="t-18 text-darker mb-3">اپلیکیشن مفید</h2>
          <p className="t-14 text-medium mb-4">
            با استفاده از اپلیکیشن مفید می‌توانید از طریق تلفن همراه خود خرید واحد‌های صندوق را انجام دهید.
          </p>
          <div className={classNames(styles.downloads, "flex")}>
            <a className={classNames(styles.android, "mx-2")} href="https://play.google.com/store/apps/details?id=com.emofid.rnmofid&hl=en&gl=US"></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default observer(Modal);
