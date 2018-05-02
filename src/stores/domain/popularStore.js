import { observable } from "mobx";
import { apiGet, apiPost } from "../../api";

export class PopularStore {
  @observable populars = { items: [] };

  search(payload) {
    this.populars = { items: [] };
    apiGet("search/repositories", payload).then(res => {
      //console.log("search", res);
      this.populars = res;
    });
  }
}
