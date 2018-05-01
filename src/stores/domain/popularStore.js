import { observable } from "mobx";
import { apiGet, apiPost } from "../../api";

export class PopularStore {
  @observable populars = {};

  search(payload) {
    this.populars = {};
    apiGet("search/repositories", payload).then(res => {
      console.log("search", res);
      this.populars = res;
    });
  }
}
