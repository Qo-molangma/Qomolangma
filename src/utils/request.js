import axios from "axios";
import { Notify } from "vant";

export const instance = axios.create({
  timeout: 5000, //请求超过5s
});

// 全局拦截
// Add a request interceptor
// 全局请求拦截,网络请求之前触发
instance.interceptors.request.use(
  function(config) {
    // Do something before request is sent
    config.headers.authorization = "Bearer " + localStorage.getItem("token");
    return config;
  },
  function(error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
// 全局响应拦截,网络请求完成之后触发
instance.interceptors.response.use(
  function(response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response.data;
  },
  function(error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    if (error && error.message.indexOf("timeout") > -1) {
      // alert("网络超时了");
      Notify({ type: "warning", message: "网络不稳定,请刷新重试" });
    }
    if (error.response && error.response.status === 401) {
      Notify({ type: "danger", message: "用户信息异常,请重新登录" });
      setTimeout(() => {
        window.location.href = "/#/login";
      });
    }
    return Promise.reject(error);
  }
);

/**
 * 请求数据
 * @param {*} url
 * @param {*} params
 */
