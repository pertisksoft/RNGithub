import { create } from "apisauce";
import config from "../config";
import store from "../stores";
const api = create({
  baseURL: config.apiBaseURL,
  headers: { Accept: "application/vnd.github.mercy-preview+json" }
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
  return api.get(path + "?" + tranformGetParam(params)).then(res => res.data);
};

export const apiPost = (path, params) => {
  return api.post(path, params).then(res => res.data);
};

tranformGetParam = obj => {
  const result = Object.keys(obj).reduce(
    (prev, key, i) => `${prev}${i !== 0 ? "&" : ""}${key}=${obj[key]}`,
    ""
  );
  return result;
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
