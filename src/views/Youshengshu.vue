<template>
  <div class="youshengshu">
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
        <h2 class="list-view-title">{{ item.moduleInfo.displayName}}</h2>
      </div>
      
    </div>
  </div>
</template>

<script>
import { get } from "../utils/tool";
import "../assets/classify.scss";
import "../assets/youshengshu.scss";


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
        "https://m.ximalaya.com/m-revision/page/index/queryIndexCategoryTabContent?moduleKey=youshengshu"
      );
      // console.log(res);
      const data = res.data.moduleContent;
      this.zmtomato = data.tomatoes;
      // console.log(this.zmtomato);
      this.listView = data.moduleRankDatas;
      // console.log(this.listView);
    },
  },
};
</script>

<style lang="scss">
</style>