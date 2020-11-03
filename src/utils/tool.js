import { instance } from "./request";

/**
 * 请求数据
 * @param {*} url
 * @param {*} params
 */

export const get = (url, params) => instance.get(url, { params });
export function getLocalstorage() {
    return localStorage.getItem('searchHistory')
}
export function setLocalstorage(data) {
    return localStorage.setItem('searchHistory', data)
}