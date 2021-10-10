import { makeAutoObservable } from "mobx";
import funds from "../data/funds";

class CalculatorStore {

  investment = 1000000;
  years = 3;
  fundId = 1;

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
    return funds.find(o => o.id === id);
  }

  getFundValue() {
    let fund = this.findFundIndexById(this.fundId);
    return Math.floor(fund.ratios[this.years] * this.investment);
  }

  getFundData() {
    let fund = this.findFundIndexById(this.fundId);
    return fund;
  }

}

export default new CalculatorStore();
