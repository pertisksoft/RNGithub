import { observable } from "mobx";
import { apiGet, apiPost } from "../api";

export class LoadingStore {
  @observable noCallApi = 0;
}
