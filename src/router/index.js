import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "tuijian",
    component: () => import("../views/Tuijian.vue"),
  },
  {
    path: "/youshengshu",
    name: "youshengshu",
    component: () => import("../views/Youshengshu.vue"),
  },
  {
    path: "/xiangsheng",
    name: "xiangsheng",
    component: () => import("../views/Xiangsheng.vue"),
  },
  {
    path: "/yinyue",
    name: "yinyue",
    component: () => import("../views/Yinyue.vue"),
  },
  {
    path: "/ertong",
    name: "ertong",
    component: () => import("../views/Ertong.vue"),
  },
  {
    path: "/toutiao",
    name: "toutiao",
    component: () => import("../views/Toutiao.vue"),
  },
  {
    path: "/renwen",
    name: "renwen",
    component: () => import("../views/Renwen.vue"),
  },
  {
    path: "/qinggan",
    name: "qinggan",
    component: () => import("../views/Qinggan.vue"),
  },
  {
    path: "/lishi",
    name: "lishi",
    component: () => import("../views/Lishi.vue"),
  },
  {
    path: "/keji",
    name: "keji",
    component: () => import("../views/Keji.vue"),
  },
  {
    path: "/gengduo",
    name: "more",
    component: () => import("../views/More.vue"),
  },
  {
    path: "/search",
    name: "sousuo",
    component: () => import("../views/Search.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
