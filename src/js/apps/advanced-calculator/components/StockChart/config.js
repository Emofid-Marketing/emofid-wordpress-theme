import moment from "jalali-moment";
import numeral from "numeral";
import DataStore from "../../store/Data";

const config = (series) => {

  return {
    chart: {
      backgroundColor: "transparent",
      style: {
        fontFamily: "dana",
      },
    },
    colors: ['#2AFFD6', '#ffffff', '#ffce5a', '#34e883'],
    rangeSelector: {
      selected: 4,
      inputEnabled: false,
      buttons: [
        {
          type: "week",
          count: 1,
          text: "w",
        },
        {
          type: "month",
          count: 1,
          text: "1m",
        },
        {
          type: "month",
          count: 3,
          text: "3m",
        },
        {
          type: "month",
          count: 6,
          text: "6m",
        },
        {
          type: "year",
          count: 1,
          text: "1y",
        },
        {
          type: "all",
          text: "All",
        },
      ],
      buttonTheme: {
        fill: "none",
        stroke: "#fff",
        "stroke-width": 1,
        r: 2,
        style: {
          color: "#fff",
          fontFamily: "tahoma",
        },
      },
    },
    yAxis: {
      labels: {
        style: {
          color: '#ccc',
        }
      },
      // plotLines: [
      //   {
      //     value: 0,
      //     width: 2,
      //     color: "orange",
      //     dashStyle: "Dash",
      //   },
      //   {
      //     value: 500,
      //     width: 2,
      //     color: "orange",
      //     dashStyle: "Dash",
      //   },
      // ],
      // plotBands: [{}],
      alignTicks: false,
      gridLineColor: "rgba(255, 255, 255, 0.15)",
    },
    plotOptions: {
      series: {
        turboThreshold: 1000000,
        showInNavigator: true,
      },
    },

    tooltip: {
      useHTML: true,
      backgroundColor: '#00243c',
      formatter: function () {
        var s = "";
        this.points.forEach((point, i) => {
          s += "<div class='series-item'><span class='dot' style='background-color: " + point.color + ";'></span><strong class='key'>" + DataStore.activeSeries[point.colorIndex].name + ":</strong><span class='value'>" + numeral(point.y).format("0,0") + "</span></div>";
        });
        return "<div class='stock-tooltip'><div class='date'>تاریخ: " + moment(this.x).format("YYYY/MM/DD") + "</div>" + s + "</div>";
      }
    },
    series: series,
    xAxis: {
      type: "datetime",
      labels: {
        useHTML: true,
        formatter: function () {
          return (
            "<div style='font: 10px dana;display: block; direction: rtl; color: #ccc;'>" +
            moment(this.value).format("YYYY/MM/DD") +
            "</div>"
          );
        },
      },
    },
    credits: {
      enabled: false,
    },
    navigator: {
      enabled: true,
      series: {
        type: "areaspline",
        dataGrouping: {
          smoothed: false,
        },
        marker: {
          enabled: false,
        },
      },
    },
  }
}

export default config;
