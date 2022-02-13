import { makeAutoObservable } from "mobx";

class DataStore {

  active_city_name = "تهران";
  active_city_id = 329;
  active_branch = null;

  branches = {
    count: 0,
    data: []
  };

  offices = {
    count: 0,
    data: []
  };

  constructor() {
    makeAutoObservable(this);
  }

  setBranches(branches) {
    this.branches = branches;
  }

  setOffices(offices) {
    this.offices = offices;
  }

  setActiveCityId(cityId) {
    this.active_city_id = cityId;
  }

  setActiveCityName(cityName) {
    this.active_city_name = cityName;
  }

  setActiveBranch(branch) {
    this.active_branch = branch;
  }
}

export default new DataStore();
