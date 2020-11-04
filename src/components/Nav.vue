<template>
  <div class="nav">
    <van-tabs>
      <van-tab
        v-for="(item, index) in Tablist"
        :key="index"
        :title="item.moduleName"
        :to="{ name: item.moduleKey }"
      >
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import { get } from "../utils/tool";

export default {
  data() {
    return {
      Tablist: [],
    };
  },

  created() {
    this.tabList();
  },
  methods: {
    async tabList() {
      const res = await get(
        "https://m.ximalaya.com/m-revision/page/index/queryIndexTabModule"
      );
      this.Tablist = res.data;
      // console.log(this.Tablist);
    },
  },
};
</script>

<style lang="scss">
.nav {
  width: 100%;
  height: 40px;
  .van-tabs {
    width: 100%;
    .van-tab--active .van-tab__text {
      font-size: 18px;
      height: 26.5px;
      line-height: 26.5px;
      position: relative;
      color: #40404c;
    }
  }
}
</style>