<template>
  <div class="renwen">
    <van-grid :column-num="5">
      <van-grid-item
        v-for="(item, index) in zmtomato"
        :key="index"
        :icon="item.img"
        :text="item.name"
      />
    </van-grid>
  </div>
</template>

<script>
import { get } from "../utils/tool";
import '../assets/classify.scss'

export default {
  components: {},
  data() {
    return {
      zmtomato: [],
    };
  },
  created() {
    this.loadData();
  },
  methods: {
    async loadData() {
      const res = await get(
        "https://m.ximalaya.com/m-revision/page/index/queryIndexTabContent?moduleKey=renwen"
      );
      // console.log(res);
      this.zmtomato = res.data.moduleContent.tomatoes;
      console.log(this.zmtomato);
    },
  },
};
</script>

<style lang="scss">
</style>