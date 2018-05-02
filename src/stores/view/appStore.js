import { observable } from "mobx";

export class AppStore {
  @observable uiTheme = {};
  @observable routeStore = {};
  @observable langId = "";

  constructor() {
    this.routeStore = { curent: "", prev: "" };
    this.langId = "th";
    this.uiTheme = {};
  }
  updateLang(langId) {
    this.langId = langId;
  }
  updateRoute(routeName) {
    const { prev, curent } = this.routeStore;
    this.routeStore = {
      curent: routeName,
      prev: curent
    };
    console.info("updateRoute", this.routeStore);
  }
  updateTheme(uiTheme) {
    this.uiTheme = uiTheme;
  }
}
