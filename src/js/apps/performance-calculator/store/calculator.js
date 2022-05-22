import { makeAutoObservable } from "mobx";

class CalculatorStore {

  investment = 1000000;
  years = 3;
  fundId = "10600";
  funds = [];


  constructor() {
    makeAutoObservable(this);
  }

  setInvestment(value) {
    this.investment = value;
  }

  setYears(value) {
    this.years = value;
  }

  setFundId(value) {
    this.fundId = value;
  }


  findFundIndexById(id) {
    return this.funds.find(o => o.id === id);
  }

  getFundValue() {
    let fund = this.findFundIndexById(this.fundId);
    return Math.floor((1 + fund.ratios[this.years]) * this.investment);
  }

  getFundData() {
    let fund = this.findFundIndexById(this.fundId);
    return fund;
  }

  setFunds(funds) {
    this.funds = funds;
  }

}

export default new CalculatorStore();
