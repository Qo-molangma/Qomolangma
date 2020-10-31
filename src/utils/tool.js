import { instance } from "./request";

// 数据请求
export const get = (url, params) => instance.get(url, { params });
