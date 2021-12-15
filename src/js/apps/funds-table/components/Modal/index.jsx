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
            برای خرید و فروش صندوق ها به اپ مفید مراجعه کنید. پس از ورود
            میتوانید خرید و فروش را انجام دهید.
          </p>
          <a className="Button outline blue medium mb-4" href="#">
            بیشتر بدانید
          </a>
          <div className={classNames(styles.downloads, "flex")}>
            <a className={classNames(styles.android, "mx-2")} href="#"></a>
            <a className={classNames(styles.ios, "mx-2")} href="#"></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default observer(Modal);