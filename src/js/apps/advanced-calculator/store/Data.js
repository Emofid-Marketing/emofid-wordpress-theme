import { makeAutoObservable } from "mobx";

class DataStore {

  loading = true;
  stockChartLoading = false;
  fetchedData = false;
  period = 3;
  risk = 'low';
  value = 1000000;
  return = {
    value: 1000000,
    percent: 0,
  };
  distribution = [
    ["صندوق های سهامی", 50],
    ["صندوق های درامد ثابت", 30],
    ["صندوق طلا", 20],
  ];
  activeSeries = [
    { name: 'پرتفوی پیشنهادی', id: 'invested' },
    { name: 'مسکن', id: 'house' },
  ];

  constructor() {
    makeAutoObservable(this);
  }

  setPeriod(newPeriod) {
    this.period = newPeriod;
  }

  setRisk(newRisk) {
    this.risk = newRisk;
  }

  setValue(newValue) {
    this.value = newValue;
  }

  setReturn(returnValue) {
    this.return = returnValue;
  }

  setLoading(status) {
    this.loading = status;
  }

  setStockChartLoading(status) {
    this.stockChartLoading = status;
  }

  setDistribution(dist) {
    this.distribution = dist;
  }

  setActiveSries(item) {
    this.activeSeries = [
      { name: 'پرتفوی پیشنهادی', id: 'invested' },
      item
    ]
  }

  setFetchedData(data) {
    this.fetchedData = data;
  }
}

export default new DataStore();
