<template>
  <div class="search">
    <form action="/">
      <van-search
        v-model="value"
        show-action
        placeholder="请输入搜索关键词"
        @search="onSearch(value)"
        @cancel="onCancel"
      />
    </form>
    <p class="his-tip">
      <span>搜索记录</span>
      <van-icon name="delete" @click="delHis" />
    </p>
    <p class="his-btn">
      <a
        type="default"
        style="background-color: #f3f4f5"
        v-for="(item, index) in Localstorage"
        :key="index"
        @click="searchClick(item)"
        >{{ item }}</a
      >
    </p>

    <van-tabs v-model="active" swipeable>
      <van-tab
        v-for="item in hotCategory"
        :key="item.name"
        :to="{ name: `${item.name}` }"
        :title="item.word"
      >
        <router-view></router-view>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import { Toast } from "vant";
import {
  getLocalstorage,
  setLocalstorage,
  removeLocalstorage,
} from "../utils/tool";
// import { get } from "../utils/tool";
export default {
  data() {
    return {
      value: "",
      active: "",
      hotCategory: [
        { name: "hot", word: "热门" },
        { name: "soundbooks", word: "有声书" },
        { name: "storytelling", word: "相声评书" },
        { name: "sound", word: "有声" },
        { name: "history", word: "历史" },
        { name: "music", word: "音乐" },
        { name: "humanity", word: "人文" },
        { name: "bussinessfin", word: "商业财经" },
        { name: "other", word: "其他" },
      ],
      Localstorage: [],
      hotWord: [
        "米小圈上学记",
        "有声的紫禁",
        "丹田芳",
        "上门女婿",
        "鬼故事",
        "郭德纲",
        "三国演义",
        "百家讲坛",
        "儿童睡前故事",
        "老丁说股",
        "鬼吹灯",
        "岳云鹏",
        "郭德纲单口相声",
        "猴子警长探案记",
        "西游记",
        "红楼梦",
        "凡人修仙记",
        "德云社",
        "植物大战僵尸",
        "神探迈克狐",
      ],
    };
  },
  methods: {
    searchClick(item) {
      this.$router.push({ name: "Searchresult", params: { item: item } });
    },
    //删除历史记录
    async delHis() {
      await removeLocalstorage();
      document.querySelector(".his-tip").remove();
      document.querySelector(".his-btn").remove();
    },
    async onSearch(val) {
      setLocalstorage(val);
      this.searchClick(val);
    },
    onCancel() {
      Toast("取消");
      this.$router.push({
        name: "tuijian",
      });
      document.querySelector(".nav").style.display = "block";
    },
    //加载历史搜索
    async loadSerachHistory() {
      let result = await getLocalstorage();
      this.Localstorage = result;
      console.log(result);
    },
  },
  created() {
    this.$router.push({ name: "hot" });
    this.loadSerachHistory();
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
  overflow: auto;
  background-color: white;
}
.nav {
  display: none;
}
.his-btn {
  margin-left: 12px;
  margin-right: 12px;
  a {
    margin-left: 10px;
    display: inline-block;
    height: 27px;
    padding: 8px;
    line-height: 27px;
  }
}
.his-tip {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0 5px;
  margin-left: 12px;
  margin-right: 12px;
}
</style>
