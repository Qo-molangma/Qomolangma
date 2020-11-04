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
    path: "/Searchresult",
    name: "Searchresult",
    component: () => import("../views/Searchresult.vue"),
    children: [
      {
        path: "album",
        name: "album",
        component: () => import("../views/searchresult/Album.vue"),
      },
      {
        path: "voice",
        name: "voice",
        component: () => import("../views/searchresult/Voice.vue"),
      },
      {
        path: "anchor",
        name: "anchor2",
        component: () => import("../views/searchresult/Anchor.vue"),
      },
    ],
  },
  {
    path: "/details",
    name: "details",
    components: () => import("../views/Details"),
  },
  {
    path: "/gengduo",
    name: "more",
    component: () => import("../views/More.vue"),
    children: [
      {
        //免费榜
        path: "free",
        name: "free",
        component: () => import("../views/pages/free.vue"),
        children: [
          {
            path: "all",
            name: "0",
            component: () => import("../views/pages/free/all.vue"),
          },
          {
            path: "youshengshu2",
            name: "3",
            component: () => import("../views/pages/free/youshengshu.vue"),
          },
          {
            path: "xiangsheng2",
            name: "12",
            component: () => import("../views/pages/free/xiangsheng.vue"),
          },
          {
            path: "ertong2",
            name: "6",
            component: () => import("../views/pages/free/ertong.vue"),
          },
          {
            path: "renwen2",
            name: "39",
            component: () => import("../views/pages/free/renwen.vue"),
          },
          {
            path: "lishi2",
            name: "9",
            component: () => import("../views/pages/free/lishi.vue"),
          },
          {
            path: "yinyue2",
            name: "2",
            component: () => import("../views/pages/free/yinyue.vue"),
          },
          {
            path: "jiaoyupeixun2",
            name: "13",
            component: () => import("../views/pages/free/jiaoyupeixun.vue"),
          },
          {
            path: "waiyu2",
            name: "5",
            component: () => import("../views/pages/free/waiyu.vue"),
          },
          {
            path: "yule2",
            name: "4",
            component: () => import("../views/pages/free/yule.vue"),
          },
          {
            path: "qingganshenghuo2",
            name: "10",
            component: () => import("../views/pages/free/qingganshenghuo.vue"),
          },
          {
            path: "shangyecaijing2",
            name: "8",
            component: () => import("../views/pages/free/shangyecaijing.vue"),
          },
          {
            path: "toutiao2",
            name: "1",
            component: () => import("../views/pages/free/toutiao.vue"),
          },
          {
            path: "jiankangyangsheng2",
            name: "7",
            component: () =>
              import("../views/pages/free/jiankangyangsheng.vue"),
          },
          {
            path: "guangboju2",
            name: "15",
            component: () => import("../views/pages/free/guangboju.vue"),
          },
          {
            path: "xiqu2",
            name: "16",
            component: () => import("../views/pages/free/xiqu.vue"),
          },
          {
            path: "ITkeji2",
            name: "18",
            component: () => import("../views/pages/free/ITkeji.vue"),
          },
          {
            path: "lvyou2",
            name: "22",
            component: () => import("../views/pages/free/lvyou.vue"),
          },
          {
            path: "yingshi2",
            name: "23",
            component: () => import("../views/pages/free/yingshi.vue"),
          },
          {
            path: "shishangshenghuo2",
            name: "31",
            component: () => import("../views/pages/free/shishangshenghuo.vue"),
          },
          {
            path: "qiche2",
            name: "21",
            component: () => import("../views/pages/free/qiche.vue"),
          },
          {
            path: "erciyuan2",
            name: "24",
            component: () => import("../views/pages/free/erciyuan.vue"),
          },
          {
            path: "diantai2",
            name: "17",
            component: () => import("../views/pages/free/diantai.vue"),
          },
        ],
      },
      {
        //攀升榜
        path: "rise",
        name: "rise",
        component: () => import("../views/pages/rise.vue"),
        children: [
          {
            path: "zongbang2",
            name: "155",
            component: () => import("../views/pages/rise/zongbang.vue"),
          },
          {
            path: "xinpin2",
            name: "157",
            component: () => import("../views/pages/rise/xinpin.vue"),
          },
          {
            path: "youshengshu3",
            name: "158",
            component: () => import("../views/pages/rise/youshengshu.vue"),
          },
          {
            path: "xiangshengpingshu3",
            name: "161",
            component: () => import("../views/pages/rise/xiangsheng.vue"),
          },
          {
            path: "ertong3",
            name: "159",
            component: () => import("../views/pages/rise/ertong.vue"),
          },
          {
            path: "renwen3",
            name: "180",
            component: () => import("../views/pages/rise/renwen.vue"),
          },
          {
            path: "lishi3",
            name: "168",
            component: () => import("../views/pages/rise/lishi.vue"),
          },
          {
            path: "yinyue3",
            name: "163",
            component: () => import("../views/pages/rise/yinyue.vue"),
          },
          {
            path: "jiaoyupeixun3",
            name: "170",
            component: () => import("../views/pages/rise/jiaoyupeixun.vue"),
          },
          {
            path: "waiyu3",
            name: "165",
            component: () => import("../views/pages/rise/waiyu.vue"),
          },
          {
            path: "yule3",
            name: "164",
            component: () => import("../views/pages/rise/yule.vue"),
          },
          {
            path: "qingganshenghuo3",
            name: "169",
            component: () => import("../views/pages/rise/qingganshenghuo.vue"),
          },
          {
            path: "shangyecaijing3",
            name: "167",
            component: () => import("../views/pages/rise/shangyecaijing.vue"),
          },
          {
            path: "toutiao3",
            name: "162",
            component: () => import("../views/pages/rise/toutiao.vue"),
          },
          {
            path: "jiankangyangsheng3",
            name: "166",
            component: () =>
              import("../views/pages/rise/jiankangyangsheng.vue"),
          },
          {
            path: "guangboju3",
            name: "171",
            component: () => import("../views/pages/rise/guangboju.vue"),
          },
          {
            path: "xiqu3",
            name: "172",
            component: () => import("../views/pages/rise/xiqu.vue"),
          },
          {
            path: "ITkeji3",
            name: "174",
            component: () => import("../views/pages/rise/ITkeji.vue"),
          },
          {
            path: "lvyou3",
            name: "178",
            component: () => import("../views/pages/rise/lvyou.vue"),
          },
          {
            path: "yinghsi3",
            name: "177",
            component: () => import("../views/pages/rise/yingshi.vue"),
          },
          {
            path: "shishangshenghuo3",
            name: "179",
            component: () => import("../views/pages/rise/shishangshenghuo.vue"),
          },
          {
            path: "qiche3",
            name: "175",
            component: () => import("../views/pages/rise/qiche.vue"),
          },
          {
            path: "erciyuan3",
            name: "176",
            component: () => import("../views/pages/rise/erciyuan.vue"),
          },
          {
            path: "diantai3",
            name: "173",
            component: () => import("../views/pages/rise/diantai.vue"),
          },
        ],
      },
      {
        //付费榜
        path: "paid",
        name: "paid",
        component: () => import("../views/pages/paid.vue"),
        children: [
          {
            path: "remen4",
            name: "95",
            component: () => import("../views/pages/paid/remen.vue"),
          },
          {
            path: "xinpin4",
            name: "160",
            component: () => import("../views/pages/paid/xinpin.vue"),
          },
          {
            path: "VIP4",
            name: "348",
            component: () => import("../views/pages/paid/VIP.vue"),
          },
          {
            path: "biaosheng4",
            name: "349",
            component: () => import("../views/pages/paid/biaosheng.vue"),
          },
          {
            path: "youshengshu4",
            name: "98",
            component: () => import("../views/pages/paid/youshengshu.vue"),
          },
          {
            path: "renwen4",
            name: "124",
            component: () => import("../views/pages/paid/renwen.vue"),
          },
          {
            path: "jiaoyupeixun4",
            name: "108",
            component: () => import("../views/pages/paid/jiaoyupeixun.vue"),
          },
          {
            path: "shangyecaijing4",
            name: "103",
            component: () => import("../views/pages/paid/shangyecaijing.vue"),
          },
          {
            path: "lishi4",
            name: "104",
            component: () => import("../views/pages/paid/lishi.vue"),
          },
          {
            path: "waiyu4",
            name: "350",
            component: () => import("../views/pages/paid/waiyu.vue"),
          },
          {
            path: "ertong4",
            name: "101",
            component: () => import("../views/pages/paid/ertong.vue"),
          },
          {
            path: "xiangshengpingshu4",
            name: "107",
            component: () =>
              import("../views/pages/paid/xiangshengpingshu.vue"),
          },
          {
            path: "yishu4",
            name: "351",
            component: () => import("../views/pages/paid/yishu.vue"),
          },
        ],
      },
      {
        //订阅榜
        path: "subscribe",
        name: "subscribe",
        component: () => import("../views/pages/subscribe.vue"),
        children: [
          {
            path: "remen5",
            name: "217",
            component: () => import("../views/pages/subscribe/remen.vue"),
          },
          {
            path: "toutiao5",
            name: "218",
            component: () => import("../views/pages/subscribe/toutiao.vue"),
          },
          {
            path: "yinyue5",
            name: "219",
            component: () => import("../views/pages/subscribe/yinyue.vue"),
          },
          {
            path: "youshengshu5",
            name: "220",
            component: () => import("../views/pages/subscribe/youshengshu.vue"),
          },
          {
            path: "yule5",
            name: "221",
            component: () => import("../views/pages/subscribe/yule.vue"),
          },
          {
            path: "waiyu5",
            name: "222",
            component: () => import("../views/pages/subscribe/waiyu.vue"),
          },
          {
            path: "ertong5",
            name: "223",
            component: () => import("../views/pages/subscribe/ertong.vue"),
          },
          {
            path: "jiankangyangsheng5",
            name: "224",
            component: () =>
              import("../views/pages/subscribe/jiankangyangsheng.vue"),
          },
          {
            path: "shangyecaijing5",
            name: "225",
            component: () =>
              import("../views/pages/subscribe/shangyecaijing.vue"),
          },
          {
            path: "lishi5",
            name: "226",
            component: () => import("../views/pages/subscribe/lishi.vue"),
          },
          {
            path: "qingganshenghuo5",
            name: "227",
            component: () =>
              import("../views/pages/subscribe/qingganshenghuo.vue"),
          },
          {
            path: "xiangshengpingshu5",
            name: "229",
            component: () =>
              import("../views/pages/subscribe/xiangshengpingshu.vue"),
          },
          {
            path: "jiaoyupeixun5",
            name: "230",
            component: () =>
              import("../views/pages/subscribe/jiaoyupeixun.vue"),
          },
          {
            path: "guangboju5",
            name: "232",
            component: () => import("../views/pages/subscribe/guangboju.vue"),
          },
          {
            path: "xiqu5",
            name: "233",
            component: () => import("../views/pages/subscribe/xiqu.vue"),
          },
          {
            path: "diantai5",
            name: "234",
            component: () => import("../views/pages/subscribe/diantai.vue"),
          },
          {
            path: "ITkeji5",
            name: "235",
            component: () => import("../views/pages/subscribe/ITkeji.vue"),
          },
          {
            path: "qiche5",
            name: "238",
            component: () => import("../views/pages/subscribe/qiche.vue"),
          },
          {
            path: "lvyou5",
            name: "239",
            component: () => import("../views/pages/subscribe/lvyou.vue"),
          },
          {
            path: "yingshi5",
            name: "240",
            component: () => import("../views/pages/subscribe/yingshi.vue"),
          },
          {
            path: "erciyuan5",
            name: "241",
            component: () => import("../views/pages/subscribe/erciyuan.vue"),
          },
          {
            path: "shishangshenghuo5",
            name: "245",
            component: () =>
              import("../views/pages/subscribe/shishangshenghuo.vue"),
          },
          {
            path: "renwen5",
            name: "246",
            component: () => import("../views/pages/subscribe/renwen.vue"),
          },
        ],
      },
      {
        //主播榜
        path: "anchor",
        name: "anchor",
        component: () => import("../views/pages/anchor.vue"),
        children: [
          {
            path: "xiangshengpingshu6",
            name: "202",
            component: () =>
              import("../views/pages/anchor/xiangshengpingshu.vue"),
          },
          {
            path: "ertong6",
            name: "192",
            component: () => import("../views/pages/anchor/ertong.vue"),
          },
          {
            path: "lishirenwen6",
            name: "195",
            component: () => import("../views/pages/anchor/lishirenwen.vue"),
          },
          {
            path: "peixunjiangzuo6",
            name: "203",
            component: () => import("../views/pages/anchor/peixunjiangzuo.vue"),
          },
          {
            path: "jiaoyujigou6",
            name: "210",
            component: () => import("../views/pages/anchor/jiaoyujigou.vue"),
          },
          {
            path: "shetuanjigou6",
            name: "200",
            component: () => import("../views/pages/anchor/shetuanjigou.vue"),
          },
          {
            path: "waiyu6",
            name: "191",
            component: () => import("../views/pages/anchor/waiyu.vue"),
          },
          {
            path: "zongyiyule6",
            name: "190",
            component: () => import("../views/pages/anchor/zongyiyule.vue"),
          },
          {
            path: "qingganshenghuo6",
            name: "196",
            component: () =>
              import("../views/pages/anchor/qingganshenghuo.vue"),
          },
          {
            path: "shangyecaijing6",
            name: "194",
            component: () => import("../views/pages/anchor/shangyecaijing.vue"),
          },
          {
            path: "xiqu6",
            name: "213",
            component: () => import("../views/pages/anchor/xiqu.vue"),
          },
          {
            path: "ITkeji6",
            name: "205",
            component: () => import("../views/pages/anchor/ITkeji.vue"),
          },
          {
            path: "lvyou6",
            name: "212",
            component: () => import("../views/pages/anchor/lvyou.vue"),
          },
          {
            path: "qiche6",
            name: "211",
            component: () => import("../views/pages/anchor/qiche.vue"),
          },
          {
            path: "diantai6",
            name: "204",
            component: () => import("../views/pages/anchor/diantai.vue"),
          },
          {
            path: "meinvzhubo6",
            name: "198",
            component: () => import("../views/pages/anchor/meinvzhubo.vue"),
          },
          {
            path: "zixun6",
            name: "187",
            component: () => import("../views/pages/anchor/zixun.vue"),
          },
          {
            path: "shuoshuren6",
            name: "207",
            component: () => import("../views/pages/anchor/shuoshuren.vue"),
          },
          {
            path: "tiyu6",
            name: "216",
            component: () => import("../views/pages/anchor/tiyu.vue"),
          },
          {
            path: "qita6",
            name: "197",
            component: () => import("../views/pages/anchor/qita.vue"),
          },
        ],
      },
      {
        //好评榜
        path: "reputation",
        name: "reputation",
        component: () => import("../views/pages/reputation.vue"),
        children: [
          {
            path: "remen7",
            name: "248",
            component: () => import("../views/pages/reputation/remen.vue"),
          },
          {
            path: "toutiao7",
            name: "249",
            component: () => import("../views/pages/reputation/toutiao.vue"),
          },
          {
            path: "yinyue7",
            name: "250",
            component: () => import("../views/pages/reputation/yinyue.vue"),
          },
          {
            path: "youshengshu7",
            name: "251",
            component: () =>
              import("../views/pages/reputation/youshengshu.vue"),
          },
          {
            path: "yule7",
            name: "252",
            component: () => import("../views/pages/reputation/yule.vue"),
          },
          {
            path: "waiyu7",
            name: "253",
            component: () => import("../views/pages/reputation/waiyu.vue"),
          },
          {
            path: "ertong7",
            name: "254",
            component: () => import("../views/pages/reputation/ertong.vue"),
          },
          {
            path: "yangshengjiankang7",
            name: "255",
            component: () =>
              import("../views/pages/reputation/yangshengjiankang.vue"),
          },
          {
            path: "shangyecaijing7",
            name: "256",
            component: () =>
              import("../views/pages/reputation/shangyecaijing.vue"),
          },
          {
            path: "lishi7",
            name: "257",
            component: () => import("../views/pages/reputation/lishi.vue"),
          },
          {
            path: "qingganshenghuo7",
            name: "258",
            component: () =>
              import("../views/pages/reputation/qingganshenghuo.vue"),
          },
          {
            path: "guangboju7",
            name: "263",
            component: () => import("../views/pages/reputation/guangboju.vue"),
          },
          {
            path: "jiaoyupeixun7",
            name: "261",
            component: () =>
              import("../views/pages/reputation/jiaoyupeixun.vue"),
          },
          {
            path: "xiangshengpingshu7",
            name: "260",
            component: () =>
              import("../views/pages/reputation/xiangshengpingshu.vue"),
          },
          {
            path: "xiqu7",
            name: "264",
            component: () => import("../views/pages/reputation/xiqu.vue"),
          },
          {
            path: "diantai7",
            name: "265",
            component: () => import("../views/pages/reputation/diantai.vue"),
          },
          {
            path: "ITkeji7",
            name: "266",
            component: () => import("../views/pages/reputation/ITkeji.vue"),
          },
          {
            path: "qiche7",
            name: "269",
            component: () => import("../views/pages/reputation/qiche.vue"),
          },
          {
            path: "lvyou7",
            name: "270",
            component: () => import("../views/pages/reputation/lvyou.vue"),
          },
          {
            path: "yingshi7",
            name: "271",
            component: () => import("../views/pages/reputation/yingshi.vue"),
          },
          {
            path: "erciyuan7",
            name: "272",
            component: () => import("../views/pages/reputation/erciyuan.vue"),
          },
          {
            path: "shishangshenghuo7",
            name: "276",
            component: () =>
              import("../views/pages/reputation/shishangshenghuo.vue"),
          },
          {
            path: "renwen7",
            name: "277",
            component: () => import("../views/pages/reputation/renwen.vue"),
          },
        ],
      },
    ],
  },
  {
    path: "/search",
    name: "sousuo",
    component: () => import("../views/Search.vue"),
    children: [
      {
        path: "hot",
        name: "hot",
        component: () => import("../views/search/Hot.vue"),
      },
      {
        path: "soundbooks",
        name: "soundbooks",
        component: () => import("../views/search/Soundbooks.vue"),
      },
      {
        path: "storytelling",
        name: "storytelling",
        component: () => import("../views/search/Storytelling.vue"),
      },
      {
        path: "sound",
        name: "sound",
        component: () => import("../views/search/Sound.vue"),
      },
      {
        path: "history",
        name: "history",
        component: () => import("../views/search/History.vue"),
      },
      {
        path: "music",
        name: "music",
        component: () => import("../views/search/Music.vue"),
      },
      {
        path: "humanity",
        name: "humanity",
        component: () => import("../views/search/Humanity.vue"),
      },
      {
        path: "bussinessfin",
        name: "bussinessfin",
        component: () => import("../views/search/BussinessFin.vue"),
      },
      {
        path: "other",
        name: "other",
        component: () => import("../views/search/Other.vue"),
      },
    ],
  },
  {
    path: "/details",
    name: "details",
    component: () => import("../views/Details.vue"),
  },
  {
    path: "/playpage",
    name: "playpage",
    component: () => import("../views/Playpage.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
