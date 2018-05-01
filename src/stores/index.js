import { LoadingStore } from "./loadingStore";
import { PopularStore } from "./domain/popularStore";
class RootStore {
  loadingStore: LoadingStore;
  popularStore: PopularStore;
  constructor() {
    this.loadingStore = new LoadingStore();
    this.popularStore = new PopularStore();
  }
}
export default new RootStore();
