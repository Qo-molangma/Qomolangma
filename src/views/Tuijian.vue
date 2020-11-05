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
        <a href="javascript:;"  @click="more">
          <i></i>
          更多
        </a>
      </div>
      <ul
        class="list-view-body"
        v-for="i in item.rankingContentInfoList.rankModuleInfoList"
        :key="i.id"
      >
        <li class="list-view-item">
          <div class="album" @click="toDetails(i)">
            <div class="album-cover">
              <img
                :src="`https://imagev2.xmcdn.com/${i.albumInfo.cover}`"
                alt=""
              />
            </div>
            <div class="content">
              <h3 class="album-title">{{ i.albumInfo.title }}</h3>
              <p class="album-content">{{ i.albumInfo.salePoint }}</p>
              <div class="album-info">
                <span class="count">
                  章节:
                  {{ i.statCountInfo.trackCount }}
                </span>
                <span class="count">
                  播放次数:
                  {{ i.statCountInfo.playCount }}
                </span>
              </div>
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
import {setSessionStorage} from "../utils/tool"

export default {
  components: {},
  data() {
    return {
      zmtomato: [],
      listView: [],
      newList: [],
    };
  },
  created() {
    this.loadData();
  },
  methods: {
    toDetails(i){
      this.$router.push({name:"details",params:{item:i},query:{item:i}})
      setSessionStorage(i)
      document.querySelector('.nav').style.display="none"
    },
    async loadData() {
      const res = await get(
        "https://m.ximalaya.com/m-revision/page/index/queryIndexTabContent?moduleKey=tuijian"
      );
      // console.log(res);
      const data = res.data.moduleContent;
      this.zmtomato = data.tomatoes;
      // console.log(this.zmtomato);
      this.listView = data.moduleRankDatas;
      // console.log(this.listView);
    },
    more() {
      this.$router.push({
        name: "more",
      });
      document.querySelector(".nav").style.display = "none"
    },
  },
};
</script>
<style>
</style>