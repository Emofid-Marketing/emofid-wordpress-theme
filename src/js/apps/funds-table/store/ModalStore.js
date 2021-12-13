import { makeAutoObservable } from "mobx";

class ModalStore {

  show = false;

  constructor() {
    makeAutoObservable(this);
  }

  toggleModal() {
    this.show = !this.show;
  }

}

export default new ModalStore();
