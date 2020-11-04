import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [{
        path: "/",
        name: "tuijian",
        component: () =>
            import ("../views/Tuijian.vue"),
    },
    {
        path: "/youshengshu",
        name: "youshengshu",
        component: () =>
            import ("../views/Youshengshu.vue"),
    },
    {
        path: "/xiangsheng",
        name: "xiangsheng",
        component: () =>
            import ("../views/Xiangsheng.vue"),
    },
    {
        path: "/yinyue",
        name: "yinyue",
        component: () =>
            import ("../views/Yinyue.vue"),
    },
    {
        path: "/ertong",
        name: "ertong",
        component: () =>
            import ("../views/Ertong.vue"),
    },
    {
        path: "/toutiao",
        name: "toutiao",
        component: () =>
            import ("../views/Toutiao.vue"),
    },
    {
        path: "/renwen",
        name: "renwen",
        component: () =>
            import ("../views/Renwen.vue"),
    },
    {
        path: "/qinggan",
        name: "qinggan",
        component: () =>
            import ("../views/Qinggan.vue"),
    },
    {
        path: "/lishi",
        name: "lishi",
        component: () =>
            import ("../views/Lishi.vue"),
    },
    {
        path: "/keji",
        name: "keji",
        component: () =>
            import ("../views/Keji.vue"),
    },
    {
        path: "/gengduo",
        name: "more",
        component: () =>
            import ("../views/More.vue"),
    },
    {
        path: "/searchresult",
        name: "searchresult",
        component: () =>
            import ("../views/Searchresult.vue"),
    },
    {
        path: "/search",
        name: "sousuo",
        component: () =>
            import ("../views/Search.vue"),
        children: [{
                path: "hot",
                name: "hot",
                component: () =>
                    import ("../views/search/Hot.vue"),
            }, {
                path: "soundbooks",
                name: "soundbooks",
                component: () =>
                    import ("../views/search/Soundbooks.vue"),
            }, {
                path: "storytelling",
                name: "storytelling",
                component: () =>
                    import ("../views/search/Storytelling.vue"),
            }, {
                path: "sound",
                name: "sound",
                component: () =>
                    import ("../views/search/Sound.vue"),
            }, {
                path: "history",
                name: "history",
                component: () =>
                    import ("../views/search/History.vue"),
            },
            {
                path: "music",
                name: "music",
                component: () =>
                    import ("../views/search/Music.vue"),
            },
            {
                path: "humanity",
                name: "humanity",
                component: () =>
                    import ("../views/search/Humanity.vue"),
            },
            {
                path: "bussinessfin",
                name: "bussinessfin",
                component: () =>
                    import ("../views/search/BussinessFin.vue"),
            },
            {
                path: "other",
                name: "other",
                component: () =>
                    import ("../views/search/Other.vue"),
            },
        ]
    },
    {
        path: "/Searchresult",
        name: "Searchresult",
        component: () =>
            import ("../views/Searchresult.vue"),
        children: [{
                path: "album",
                name: "album",
                component: () =>
                    import ("../views/searchresult/Album.vue"),
            },
            {
                path: "voice",
                name: "voice",
                component: () =>
                    import ("../views/searchresult/Voice.vue"),
            },
            {
                path: "anchor",
                name: "anchor",
                component: () =>
                    import ("../views/searchresult/Anchor.vue"),
            },
        ]
    },
];

const router = new VueRouter({
    routes,
});

export default router;