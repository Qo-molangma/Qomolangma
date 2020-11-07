<template>
  <div class="anc-det">
    <div class="anchor-info">
      <div class="img-box"><img :src="ancPic" alt="" /></div>
      <div class="anchor-msg">
        <h1>{{ nickname }}</h1>
        <p class="short-intro">简介：{{ shortIntro }}</p>
        <p class="vertify">喜马认证：{{ vertifyMsg }}</p>
      </div>
    </div>
    <div class="follow">
      <span class="following">关注<b>{{ following }}</b></span>
      <span> | </span>
      <span class="follower">粉丝<b>{{ follower }}</b></span>
    </div>
    <a href="javascript:;" class="attention">+ 关注</a>


  <van-tabs v-model="active" swipeable>
      <van-tab
        v-for="(item,index) in category"
        :key="index"
        :to="{ name: `${item.name}` }"
        :title="item.word"
      >
        <router-view></router-view>
      </van-tab>
    </van-tabs>

   
  </div>
</template>

<script>
import {
  get,
  getAnchorSessionStorage,
  getsmallPicSessionStorage,
} from "../../utils/tool";
export default {
  name: "anchordetail",
  data() {
    return {
      active:0,
      ancDetail: {},
      ancPic: "",
      following: 0,
      follower: 0,
      nickname: "",
      shortIntro: "",
      vertifyMsg: "",
      anchorGrade:0,
      category:[{name:"anchormaterial",word:"资料"},{name:"anchoralbum",word:"专辑"}]
    };
  },
  methods: {
    async loadAnchorDetail() {
      let res = await get(
        `https://m.ximalaya.com/m-revision/page/anchor/queryAnchorPage/${getAnchorSessionStorage()}?pageSize=20&tabType=0`
      );
      this.ancDetail = res.data;
      this.follower = res.data.anchorInfo.statCountInfo.followerCount;
      this.following = res.data.anchorInfo.statCountInfo.followingCount;
      this.vertifyMsg = res.data.anchorInfo.userInfo.ptitle;
      this.shortIntro = res.data.anchorInfo.userInfo.personalSignature;
      this.ancPic = getsmallPicSessionStorage();
      this.nickname = res.data.anchorInfo.userInfo.nickname;
      this.$router.push({name:"anchormaterial"})
    },
  },
  created() {
    this.loadAnchorDetail();
  },
};
</script>

<style scoped>
.anc-det{
  padding-top: 10px;
}
.search-btn {
  display: none;
}
.anchor-info {
  display: flex;
  width: 92%;
  margin: auto;
}
.anchor-info .img-box {
  width: 85px;
  height: 85px;
  border-radius: 50%;
}
.anchor-info .img-box img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}
.anchor-info .anchor-msg{
  margin-left: 20px;
}
.anchor-info .anchor-msg h1 {
  font-family: PingFangSC-Semibold;
  font-size: 18px;
  color: #40404c;
  line-height: 25px;
  margin-bottom: 12px;
}
.anchor-info .anchor-msg .short-intro {
  font-family: PingFangSC-Medium;
  font-size: 12px;
  line-height: 25px;
  color: #858585;
}
.anchor-info .anchor-msg .vertify {
  font-family: PingFangSC-Medium;
  font-size: 12px;
  color: #858585;
  overflow: hidden;
  white-space: nowrap;
  width: 274px;
  -o-text-overflow: ellipsis;
  -webkit-text-overflow: ellipsis;
  text-overflow: ellipsis;
  margin-bottom: 6px;
}

.short-intro {
  background-color: #eee;
  margin-bottom: 10px;
}
.anchor-msg {
}
.follow{
  display: flex;
  justify-content: center;
  margin-top: 18px;
}
.follow .following{
  font-size: 12px;
  padding:0 15px;
  color: #555;
}
.follow .follower{
  font-size: 12px;
  padding:0 15px;
  color: #555;
}
.follow  b{
  padding: 0 15px;
  color: black;
}
.attention{
    width: 102px;
    height: 30px;
    display: block;
    font-family: PingFangSC-Semibold;
    font-size: 16px;
    color: #fff;
    background: #f86442;
    border-radius: 18px;
    text-align: center;
    line-height: 30px;
    margin: 14px auto 12px;
}
</style>
