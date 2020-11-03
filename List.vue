<template>
  <div class="list">
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <van-card
        v-for="item in product"
        :key="item._id"
        :num="item.quantity"
        :price="item.price"
        desc="描述信息"
        :title="item.name"
        :thumb="item.coverImg | dalImg"
        :thumb-link="'/#/detail?id=' + item._id"
      >
        <template #tags>
          <van-tag plain type="danger">热卖</van-tag>
          <van-tag plain type="danger">超值</van-tag>
        </template>
        <template #footer>
          <van-button size="mini" @click="add(item)"> 加入购物车</van-button>
          <van-button size="mini">购买</van-button>
        </template>
      </van-card>
    </van-list>
  </div>
</template>

<script>
import { loadProducts } from "../services/products";
import { addToCart } from "../services/carts";
import { Notify } from "vant";
import { mapActions } from "vuex";
// import { List } from 'vant';
export default {
  data() {
    return {
      product: [],
      pages: 1,
      page: 1,
      loading: false,
      finished: false,
    };
  },
  methods: {
    ...mapActions("cart", ["loadCartData"]),
    async add(item) {
      let result = await addToCart(item._id, 1);
      console.log(result);
      if (result.data.code == "success") {
        Notify({ type: "success", message: "加入购物车成功" });
      } else {
        Notify({ type: "danger", message: "加入购物车失败" });
      }
      this.loadCartData();
    },
    async loadData() {
      this.loading = true;
      let result = await loadProducts({ page: this.page });
      this.product = [...this.product, ...result.data.products];
      this.pages = result.data.pages;
      this.page++;
      this.loading = false;
    },
    //拉到底部时候会触发onLoad事件
    onLoad() {
      console.log("加载更多");
      if (this.pages >= this.page) {
        this.loadData();
      } else {
        this.finished = true;
      }
    },
  },
  created() {
    console.log("组件创建成功了");
    // if(this.pages >=this.page){
    //   this.loadData();
    //   } else{
    //    this. finished=true
    //   }
  },
};
</script>

<style scoped>
.list {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}
</style>
