import React from "react";
import classNames from "classnames";
import { observer } from "mobx-react-lite";
import FiltersStore from "../../store/FiltersStore";
import ModalStore from "../../store/ModalStore";
import styles from "./styles.module.scss";

function TableRow({ fund, performanceRage }) {
  const {
    fundCode,
    iconName,
    title,
    type,
    year,
    totalFund,
    investers,
    performance,
    tradeLink,
    fundLink,
  } = fund;

  const performanceValue = performance[performanceRage];

  const performanceValueString =
    performance[performanceRage] !== null
      ? `${performance[performanceRage]}%`
      : "-";

  function filterRow() {
    if (FiltersStore.activeFilter === "همه صندوق ها") return false;
    return FiltersStore.activeFilter != type;
  }

  function openAppModal() {
    ModalStore.toggleModal();
  }

  return (
    <div
      className={classNames(styles.TableRow, {
        [styles.deactive]: filterRow(),
      })}
      id={`fund-${fundCode}`}
    >
      <div className={styles.cell}>
        <img
          className={styles.fundIcon}
          src={`${window.EMOFID.theme_url}/assets/images/funds/mofid/${iconName}.svg`}
        />
        <span className={styles.fundName}>صندوق {title}</span>
      </div>
      <div className={styles.cell}>{type}</div>
      <div className={styles.cell}>{year}</div>
      <div className={styles.cell}>{totalFund}</div>
      <div className={styles.cell}>{investers}</div>
      <div
        className={classNames(
          styles.cell,
          styles.cellPrice,
          {
            [styles.positive]: performanceValue >= 0,
          },
          { [styles.negative]: performanceValue < 0 }
        )}
      >
        {performanceValueString}
      </div>
      <div className={styles.cell}>
        <a className="Button outline ml-3" onClick={openAppModal}>
          خرید و فروش
        </a>
        <a
          className={classNames(styles.more, "flex align-center t-12")}
          href={fundLink}
        >
          مشاهده صندوق
        </a>
      </div>
    </div>
  );
}

export default observer(TableRow);
