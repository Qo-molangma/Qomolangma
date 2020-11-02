import { instance } from "./request";

/**
 * 请求数据
 * @param {*} url
 * @param {*} params
 */

export const get = (url, params) => instance.get(url, { params });
