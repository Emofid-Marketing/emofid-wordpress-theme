import React, { useEffect, useRef } from "react";
import { observer } from "mobx-react-lite";
import Highcharts from "highcharts/highstock";
import moment from "jalali-moment";
import getDataSet from "../../services/getDataSet";
import dateFormats from "../../data/dateFormats";
import DataStore from "../../store/Data";
import config from "./config";
import "./styles.scss";

function StockChart() {
  const isInitialMount = useRef(true);

  async function createChart(rerender = false, refetch = true) {
    moment.locale("fa");
    Highcharts.dateFormats = dateFormats;
    const { period, risk, value } = DataStore;
    const dataSets = await getDataSet(period, risk, value, refetch);

    if (rerender) Highcharts.stockChart("stock-chart", config(dataSets));
  }

  useEffect(() => {
    createChart(true);
  }, [DataStore.period, DataStore.risk, DataStore.value]);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      createChart(true, false);
    }
  }, [DataStore.activeSeries]);

  const loading = DataStore.stockChartLoading ? (
    <div className="stockchart-loading">
      <div className="inner">
        <span className="spinner"></span>
        <span className="text">در حال رسم نمودار</span>
      </div>
    </div>
  ) : null;

  return (
    <div className="stock-chart-wrapper">
      {loading}
      <div id="stock-chart" style={{ width: "100%", height: "300px" }}></div>
    </div>
  );
}

export default observer(StockChart);
