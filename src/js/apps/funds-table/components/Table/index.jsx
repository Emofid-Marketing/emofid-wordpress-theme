import classNames from "classnames";
import React, { useEffect, useState } from "react";
import fundsTableColumns from "../../data/fundsTableColumns";
import TableRow from "../TableRow/index.jsx";
import funds from "../../data/funds";
import styles from "./styles.module.scss";
import numeral from "numeral";

function Table() {
  const [fundsData, setFundsData] = useState(false);

  useEffect(async () => {
    let response = await fetch(
      "https://fundsapi.emofid.com/api/Investment/Returns"
    );
    if (response.ok) {
      let data = [];
      let jsonData = await response.json();
      jsonData.forEach((fund) => {
        if (!fund.staticInfo) return;
        // console.log(fund.staticInfo.enName);
        let thisFund = {
          iconName: fund.staticInfo.enName.toLowerCase(),
          title: fund.title,
          type: fund.staticInfo.fundType,
          year: fund.staticInfo.startDateFa.split("-")[0],
          totalFund: numeral(Math.floor(fund.aum / 1000000000)).format("0,0"),
          investers: numeral(fund.currentInvestorsNumber).format("0,0"),
          performance: fund.return1Y,
          tradeLink: "#$",
          fundLink: "#%",
        };
        data.push(thisFund);
      });
      setFundsData(data);
    }
  }, []);

  if (!fundsData) return <div>Loading</div>;

  return (
    <div
      className={classNames(
        styles.Table,
        "flex-column",
        "mb-8",
        "hide-scrollbar"
      )}
    >
      <div className={classNames(styles.inner, "flex-column")}>
        <div className={styles.head}>
          {fundsTableColumns.map((item, index) => {
            return (
              <div className={styles.item} key={index}>
                <span>{item.label}</span>
              </div>
            );
          })}
        </div>
        <div className={styles.body}>
          {fundsData.map((fund, index) => {
            return <TableRow key={index} fund={fund} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Table;
