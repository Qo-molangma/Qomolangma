<template>
  <div class="search">
    <h1>搜索页</h1>
    <button @click="fanhui">返回</button>
  </div>
</template>

<script>
import { get } from "../utils/tool";
export default {
  methods: {
    fanhui() {
      this.$router.push({
        name: "tuijian",
      });
      document.querySelector(".nav").style.display = "block";
    },
    async loadNav() {
      const res = await get("https://m.ximalaya.com/hotWordBillboardCategory");
      console.log(res);
    },
  },
  created() {
    this.loadNav();
  },
};
</script>

<style lang="scss">
.search {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: grey;
  overflow: auto;
}
</style>