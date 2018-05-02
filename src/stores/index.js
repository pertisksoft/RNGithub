import { LoadingStore } from "./loadingStore";
import { AppStore } from "./view/appStore";

import { PopularStore } from "./domain/popularStore";

class RootStore {
  loadingStore: LoadingStore;
  popularStore: PopularStore;
  appStore: AppStore;
  constructor() {
    this.loadingStore = new LoadingStore();
    this.popularStore = new PopularStore();
    this.appStore = new AppStore();
  }
}
export default new RootStore();
