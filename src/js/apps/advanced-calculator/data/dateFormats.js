import moment from "jalali-moment";

const dateFormats = {
  a: function (ts) {
    return moment(ts).format("dddd");
  },
  A: function (ts) {
    return moment(ts).format("dddd");
  },
  d: function (ts) {
    return moment(ts).format("DD");
  },
  e: function (ts) {
    return moment(ts).format("D");
  },
  b: function (ts) {
    return moment(ts).format("MMMM");
  },
  B: function (ts) {
    return moment(ts).format("MMMM");
  },
  m: function (ts) {
    return moment(ts).format("MM");
  },
  y: function (ts) {
    return moment(ts).format("YY");
  },
  Y: function (ts) {
    return moment(ts).format("YYYY");
  },
  W: function (ts) {
    return moment(ts).format("ww");
  },
};

export default dateFormats;
