<template>
  <div class="free">
    <van-sidebar v-model="activeKey">
      <van-sidebar-item
        v-for="item in titleList"
        :key="item.categoryId"
        :title="item.title"
        :to="{ name: `${item.categoryId}` }"
      />
    </van-sidebar>
    <router-view></router-view>
  </div>
</template>

<script>
import { get } from "../../utils/tool";
export default {
  data() {
    return {
      activeKey: 0,
      titleList: [],
      tabList: [],
    };
  },
  created() {
    this.loadData();
    this.$router.push({
      name: "0",
    });
  },
  methods: {
    async loadData() {
      const res = await get(
        "https://m.ximalaya.com/m-revision/page/rank/queryRankClusterDetail"
      );
      const data = res.data[0].categoryInfos;
      this.titleList = data;
      // console.log(this.titleList);
    },
  },
};
</script>

<style lang="scss">
.free {
  width: 100%;
  height: 100%;
  display: flex;
  .van-sidebar {
    width: 80px;
    margin-right: 0;
  }
  .router-view {
    flex: 1;
  }
}
</style>
