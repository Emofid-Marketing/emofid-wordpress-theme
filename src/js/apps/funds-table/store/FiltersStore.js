import { makeAutoObservable } from "mobx";

class FiltersStore {

  activeFilter = "همه صندوق ها";
  filterTypes = ["همه صندوق ها"];

  constructor() {
    makeAutoObservable(this);
  }

  setActiveFilter(filterId) {
    this.activeFilter = filterId;
  }

  addFilterType(filterType) {
    if (this.filterTypes.indexOf(filterType) === -1) {
      this.filterTypes.push(filterType);
    }
  }


}

export default new FiltersStore();
