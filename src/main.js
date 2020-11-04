import Vue from "vue";
import ElementUI from "element-ui";

import Vant from "vant";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import {
    Button,
    Tab,
    Tabs,
    Grid,
    GridItem,
    List
} from "vant";
import "vant/lib/index.css";
import Vuex from 'vuex'
Vue.use(Vuex)

Vue.config.productionTip = false;

Vue.use(ElementUI);
//过滤器
Vue.filter("wan", (v) => {
    if (v > 10000) {
        let w = Number(v / 10000)
        return w + '万次'
    } else {
        return v + '次'
    }
})

Vue.use(Vant);

Vue.use(Button, Tab, Tabs, Grid, GridItem, List);

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount("#app");