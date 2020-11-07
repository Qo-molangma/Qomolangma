import {get } from "./tool";
export function loadHotCategory() {
    return get("https://m.ximalaya.com/hotWordBillboardCategory");
}
export function loadHotWord() {
    return get('https://search.ximalaya.com/hotWordBillboard/list/2.0?categoryId=-1&size=24')

}