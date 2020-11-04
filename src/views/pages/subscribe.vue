<template>
  <div class="subscribe">
    <van-sidebar v-model="activeKey">
      <van-sidebar-item
        v-for="item in titleList"
        :key="item.rankClusterId"
        :title="item.title"
        :to="{ name: `${item.rankClusterId}` }"
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
    };
  },
  created() {
    this.loadData();
    this.$router.push({
      name:"217"
    })
  },
  methods: {
    async loadData() {
      const res = await get(
        "https://m.ximalaya.com/m-revision/page/rank/queryRankClusterDetail"
      );
      const data = res.data[3].categoryInfos;
      this.titleList = data;
      // console.log(this.titleList);
    },
  },
};
</script>

<style lang="scss">
.subscribe {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  .van-sidebar {
    width: 80px;
  }
  .router-view {
    flex: 1;
  }
}
</style>
