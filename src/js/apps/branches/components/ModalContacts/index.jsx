import React from "react";
import classNames from "classnames";
import DataStore from "../../store/DataStore";
import styles from "./styles.module.scss";

function ModalContacts() {
  const { working_hours, contacts, socials } = DataStore.active_branch;

  const phone = contacts.phone ? (
    <div className="flex align-center mb-3">
      <div
        className={classNames(
          styles.phone,
          "t-16",
          "text-dark",
          "ml-2",
          "flex",
          "align-center"
        )}
      >
        تلفن:
      </div>
      <div className="t-14 text-medium">{contacts.phone}</div>
    </div>
  ) : null;

  const fax = contacts.fax ? (
    <div className="flex align-center mb-3">
      <div
        className={classNames(
          styles.fax,
          "t-16",
          "text-dark",
          "ml-2",
          "flex",
          "align-center"
        )}
      >
        نمابر:
      </div>
      <div className="t-14 text-medium">{contacts.fax}</div>
    </div>
  ) : null;

  const telegram = socials.telegram ? (
    <div className="flex align-center mb-3">
      <a
        className={classNames(
          styles.telegram,
          "t-14",
          "ml-2",
          "flex",
          "align-center"
        )}
        href={socials.telegram}
        targe="_blank"
      >
        ارتباط با تلگرام
      </a>
    </div>
  ) : null;

  const whatsapp = socials.whatsapp ? (
    <div className="flex align-center mb-3">
      <a
        className={classNames(
          styles.whatsapp,
          "t-14",
          "ml-2",
          "flex",
          "align-center"
        )}
        href={socials.whatsapp}
        targe="_blank"
      >
        ارتباط با واتساپ
      </a>
    </div>
  ) : null;

  return (
    <div className={classNames(styles.ModalContacts, "flex-column", "mx-auto")}>
      <div
        className={classNames(
          styles.workHours,
          "flex",
          "justify-center",
          "align-center",
          "mb-5"
        )}
      >
        <span className={classNames(styles.key, "t-16", "text-dark", "ml-2")}>
          ساعت کار شعبه:
        </span>
        <span className="t-12 text-medium">{working_hours}</span>
      </div>
      <div className="row">
        <div className="col-xs-12 col-md-6 flex-column">
          {phone}
          {fax}
        </div>
        <div
          className={classNames(
            styles.socialsWrapper,
            "col-xs-12",
            "col-md-6",
            "flex-column"
          )}
        >
          {telegram}
          {whatsapp}
        </div>
      </div>
    </div>
  );
}

export default ModalContacts;
