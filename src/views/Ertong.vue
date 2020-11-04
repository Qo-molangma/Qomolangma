<template>
  <div class="ertong">
    <van-grid :column-num="5">
      <van-grid-item
        v-for="(item, index) in zmtomato"
        :key="index"
        :icon="item.img"
        :text="item.name"
      />
    </van-grid>
    <div class="list-view" v-for="item in listView" :key="item.order">
      <div class="list-view-header">
        <h2 class="list-view-title">{{ item.moduleInfo.displayName }}</h2>
      </div>
      <div class="album-ver">
        <section
          class="album-wrap"
          v-for="v in item.albumBriefDetailInfos.slice(0, 3)"
          :key="v.id"
        >
          <a href="" class="album-container">
            <div class="album-cover">
              <img
                :src="`https://imagev2.xmcdn.com/${v.albumInfo.cover}`"
                alt=""
              />
            </div>
            <div class="album-desc">
              <p>{{ v.albumInfo.title }}</p>
            </div>
          </a>
        </section>
      </div>
      <div class="album-hor">
        <a href="" v-for="h in item.albumBriefDetailInfos.slice(3)" :key="h.id">
          <div class="album">
            <div class="album-cover">
              <img
                :src="`https://imagev2.xmcdn.com/${h.albumInfo.cover}`"
                alt=""
              />
            </div>
            <div class="content">
              <h3 class="album-title">{{ h.albumInfo.title }}</h3>
              <p class="album-content">{{ h.albumInfo.salePoint }}</p>
              <div class="album-info">
                <span class="count">
                  章节:
                  {{ h.statCountInfo.trackCount }}
                </span>
                <span class="count">
                  播放次数:
                  {{ h.statCountInfo.playCount }}
                </span>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
     <div class="list-view">
      <div class="list-view-header">
        <h2 class="list-view-title">更多推荐</h2>
      </div>
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="数据加载完毕..."
        @load="onLoad"
      >
        <div class="album-hor">
          <a href="" v-for="item in albumList" :key="item.data.id">
            <div class="album">
              <div class="album-cover">
                <img
                  :src="`https://imagev2.xmcdn.com/${item.data.albumInfo.cover}`"
                  alt=""
                />
              </div>
              <div class="content">
                <h3 class="album-title">{{ item.data.albumInfo.title }}</h3>
                <p class="album-content">{{ item.data.albumInfo.salePoint }}</p>
              </div>
            </div>
          </a>
        </div>
      </van-list>
    </div>
  </div>
</template>

<script>
import { get } from "../utils/tool";
import "../assets/classify.scss";
import "../assets/common.scss";

export default {
  components: {},
  data() {
    return {
      zmtomato: [],
      listView: [],
      moreSound: [],
      list: [],
      loading: false,
      finished: false,
      albumList:[],
    };
  },
  created() {
    this.loadData();
  },
  methods: {
    async loadData() {
      const res = await get(
        "https://m.ximalaya.com/m-revision/page/index/queryIndexCategoryTabContent?moduleKey=ertong"
      );
      // console.log(res);
      const data = res.data.moduleContent;
      this.zmtomato = data.tomatoes;
      // console.log(this.zmtomato);
      this.listView = data.moduleRankDatas;
      // console.log(this.listView);
      const moreSound = await get(
        "https://m.ximalaya.com/m-revision/page/index/queryCategoryFeed?moduleKey=ertong"
      );

      this.loading = true;

      this.moreSound = [...this.moreSound, ...moreSound.data.materials];

      this.albumList = this.moreSound.filter(function (v) {
        return (v.type === "album");
      });

      // console.log(this.moreSound);

      this.loading = false;
    },
    onLoad() {
      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
      this.loadData();
      if (this.moreSound.length >= 60) {
        this.finished = true;
      }
    },
  },
};
</script>

<style lang="scss">
</style>