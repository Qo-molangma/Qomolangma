<template>
  <div class="more">
    <keep-alive>
      <Header />
    </keep-alive>
    <van-tabs>
      <van-tab
        v-for="(item, index) in title"
        :key="index"
        :title="`${item.clusterName}`"
        :to="{ name: `${item.clusterCode}` }"
      >
      </van-tab>
    </van-tabs>
    <router-view></router-view>
  </div>
</template>

<script>
import { get } from "../utils/tool";
import Header from "../components/Header";

export default {
  components: { Header },
  data() {
    return {
      title: [],
    };
  },
  created() {
    this.loadData();
    this.$router.push({
      name:"free"
    })
  },
  methods: {
    async loadData() {
      const res = await get(
        "https://m.ximalaya.com/m-revision/page/rank/queryRankClusterDetail"
      );
      const data = res.data;
      // console.log(data);
      this.title = data;
      // console.log(this.title);
    },
  },
};
</script>

<style>
.more {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: auto;
}
.van-sidebar {
  margin-right: 300px;
  text-align: center;
}
.van-tabs {
  color: #808080;
}
.van-tab :hover {
  font-size: 16px;
  color: black;
}
</style>
