import React from "react";
import { useEffect } from "react";
import Highcharts from "highcharts";
import highcharts3d from "highcharts/highcharts-3d";
import chartConfig from "./config";
import DataStore from "../../store/Data";
import { observer } from "mobx-react-lite";

function DonutChart() {
  useEffect(() => {
    highcharts3d(Highcharts);
    Highcharts.chart("donut-chart", chartConfig(DataStore.distribution));
  }, [DataStore.distribution]);

  return (
    <div id="donut-chart" style={{ width: "100%", height: "200px" }}></div>
  );
}

export default observer(DonutChart);
