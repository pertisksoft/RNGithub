import { create } from "apisauce";
import config from "../config";
import store from "../stores";
const api = create({
  baseURL: config.apiBaseURL,
  headers: { Accept: "application/json" }
  //TODO Timeout
  //timeout: 10000
});

api.addResponseTransform(res => {
  res.data = transformResponse(res);
  store.loadingStore.noCallApi--;
});

api.addRequestTransform(req => {
  store.loadingStore.noCallApi++;
});

export const apiGet = (path, params) => {
  return api.get(path, { params: params }).then(res => res.data);
};

export const apiPost = (path, params) => {
  return api.post(path, params).then(res => res.data);
};

transformResponse = res => {
  if (res && res.ok == false) {
    // standard api
    return {
      data: null,
      is_success: false,
      messages: [res.data],
      status: res.status,
      date: new Date()
    };
  }
  res.data.status = res.status;
  res.data.date = new Date();
  return res.data;
};
