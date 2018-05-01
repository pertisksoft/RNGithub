import { LoadingStore } from "./loadingStore";

class RootStore {
  loadingStore: LoadingStore;

  constructor() {
    this.loadingStore = new LoadingStore();
  }
}
export default new RootStore();
