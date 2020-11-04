<template>
  <div class="search-result">
    <van-tabs v-model="active" swipeable>
      <van-tab
        v-for="(item, index) in category"
        :key="index"
        :title="item.word"
        :to="{ name: `${item.name}` }"
        style=""
        class="cate-nav"
      >
        <router-view></router-view>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import { get } from "../utils/tool";
import { mapActions } from "vuex"; //methods
export default {
  data() {
    return {
      active: 0,
      category: [
        { name: "album", word: "专辑" },
        { name: "voice", word: "声音" },
        { name: "anchor2", word: "主播" },
      ],
    };
  },
  methods: {
    ...mapActions(["search"]),
    handleRes(item) {
      console.log(item);
      this.$store.dispatch("search", item);
    },
    hand() {
      get(
        `https://m.ximalaya.com/m-revision/page/search?kw=宝宝&core=all&page=1&rows=5`
      ).then((res) => {
        console.log(res);
      });
    },
  },
  created() {
    this.handleRes(this.$route.params.item);
    this.$router.push({ name: "album" });
  },
};
</script>

<style lang="scss">
.search-result {
  width: 100%;
  background-color: white;
}
.nav {
  display: none;
}
.cate-nav {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
</style>
