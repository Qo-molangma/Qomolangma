import Vue from "vue";
import ElementUI from "element-ui";

import Vant from "vant";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { Button, Tab, Tabs, Grid, GridItem, List } from "vant";
import "vant/lib/index.css";
import Vuex from 'vuex'
Vue.use(Vuex)

Vue.config.productionTip = false;

Vue.use(ElementUI);



Vue.use(Vant);

Vue.use(Button, Tab, Tabs, Grid, GridItem, List);

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount("#app");