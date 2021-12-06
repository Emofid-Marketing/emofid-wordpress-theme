import React from "react";
import classNames from "classnames";
import styles from "./styles.module.scss";

function TableRow({ fund }) {
  const {
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

  return (
    <div className={styles.TableRow}>
      <div className={styles.cell}>
        <img
          className={styles.fundIcon}
          src={`${window.EMOFID.theme_url}/dist/images/funds/mofid/${iconName}.svg`}
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
            [styles.positive]: performance >= 0,
          },
          { [styles.negative]: performance < 0 }
        )}
      >
        {performance}%
      </div>
      <div className={styles.cell}>
        <a className="Button outline ml-3" href={tradeLink}>
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

export default TableRow;
