import classNames from "classnames";
import React, { useEffect, useState } from "react";
import TableHead from "../TableHead/index.jsx";
import TableRow from "../TableRow/index.jsx";
import Loading from "../Loading/index.jsx";
import filters from "../../data/filters.js";
import styles from "./styles.module.scss";
import FiltersStore from "../../store/FiltersStore.js";
import numeral from "numeral";

function Table() {
  const [fundsData, setFundsData] = useState(false);
  const [performanceRage, setPerformanceRange] = useState("return1M");

  function changePerformanceRange(value) {
    setPerformanceRange(value);
  }

  useEffect(async () => {
    let response = await fetch(
      "https://fundsapi.emofid.com/api/Investment/Returns"
    );
    if (response.ok) {
      let data = [];
      let jsonData = await response.json();
      jsonData.forEach((fund) => {
        if (!fund.staticInfo) return;
        FiltersStore.addFilterType(fund.staticInfo.fundType);
        let thisFund = {
          fundCode: fund.fundCode,
          iconName: fund.staticInfo.enName.toLowerCase(),
          title: fund.title,
          type: fund.staticInfo.fundType,
          year: fund.staticInfo.startDateFa.split("-")[0],
          totalFund: numeral(Math.floor(fund.aum / 1000000000)).format("0,0"),
          investers: numeral(fund.currentInvestorsNumber).format("0,0"),
          performance: {},
          tradeLink: "#$",
          fundLink: "#%",
        };

        filters.forEach((item) => {
          thisFund.performance[item.value] = fund[item.value];
        });

        data.push(thisFund);
      });
      setFundsData(data);
    }
  }, []);

  if (!fundsData) return <Loading />;

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
        <TableHead filterHandler={changePerformanceRange} />
        <div className={styles.body}>
          {fundsData.map((fund, index) => {
            return (
              <TableRow
                key={index}
                fund={fund}
                performanceRage={performanceRage}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Table;
