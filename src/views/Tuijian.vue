<template>
  <div class="tuijian">
    <!-- <h1>你好</h1> -->
    <van-grid :column-num="3">
      <van-grid-item
        v-for="(item, index) in zmtomato"
        :key="index"
        :icon="item.img"
        :text="item.name"
      />
    </van-grid>
    <div class="list-view" v-for="item in listView" :key="item.order">
      <div class="list-view-header">
        <h2 class="list-view-title">{{ item.title }}</h2>
        <a href="">
          <i></i>
          更多
        </a>
      </div>
      <ul class="list-view-body" v-for="(i,index) in item.rankingContentInfoList.rankModuleInfoList" :key="index">
        <li class="list-view-item">
          <div class="album">
            <div class="album-cover"></div>
            <div class="content">
              <h3 class="album-title">{{i.title}}</h3>
              <p class="album-content"></p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { get } from "../utils/tool";
import "../assets/classify.scss";
import "../assets/list-view.scss";

export default {
  components: {},
  data() {
    return {
      zmtomato: [],
      listView: [],
    };
  },
  created() {
    this.loadData();
  },
  methods: {
    async loadData() {
      const res = await get(
        "https://m.ximalaya.com/m-revision/page/index/queryIndexTabContent?moduleKey=tuijian"
      );
      // console.log(res);
      const data = res.data.moduleContent;
      this.zmtomato = data.tomatoes;
      // console.log(this.zmtomato);
      this.listView = data.moduleRankDatas;
      console.log(this.listView);
    },
  },
};
</script>
