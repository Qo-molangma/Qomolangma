import { instance } from "./request";

/**
 * 请求数据
 * @param {*} url
 * @param {*} params
 */

export const get = (url, params) => instance.get(url, { params });
//拿到localstorage
export function getLocalstorage() {
    if (!localStorage.getItem('searchHistory')) {
        return []
    }
    return JSON.parse(localStorage.getItem('searchHistory'))
}
//设置localstorage
export function setLocalstorage(data) {
    let localArr
    if (!localStorage.getItem('searchHistory')) {
        localArr = []
    } else {
        localArr = JSON.parse(localStorage.getItem('searchHistory'))
    }
    localArr.push(data)
    localStorage.setItem('searchHistory', JSON.stringify(localArr))
}
//清空localstorage
export function removeLocalstorage() {
    localStorage.removeItem("searchHistory")
}