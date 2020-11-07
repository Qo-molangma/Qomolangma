<template>
  <div class="material">
    <h2>TA的信息</h2>
    <p>简介：{{ personalSignature }}</p>
    <p>听众等级：</p>
    <div class="interest-box">
      <span>兴趣：</span>
      <div class="interest">
        <a href="javascript:;" v-for="(i, index) in interests" :key="index">{{
          i
        }}</a>
      </div>
    </div>
  </div>
</template>
<script>
import { get, getAnchorSessionStorage } from "../../../utils/tool";
export default {
  name: "anchormaterial",
  data() {
    return {
      interests: [],
      userGrade: 0,
      personalSignature: "",
    };
  },
  methods: {
    async loadMaterial() {
      let res = await get(
        `https://m.ximalaya.com/m-revision/page/anchor/queryAnchorPage/${getAnchorSessionStorage()}?pageSize=20&tabType=2`
      );
      this.interests = res.data.profile.interests;
      this.userGrade = res.data.profile.userGrade;
      this.personalSignature = res.data.anchorInfo.userInfo.personalSignature;
    },
  },
  created() {
    this.loadMaterial();
  },
};
</script>

<style scoped>
.material {
  padding: 5px 28px;
  overflow: auto;
}
.material h2 {
  height: 50px;
  font-size: 19px;
  color: #333;
  line-height: 50px;
}
.material p {
  color: #666;
  font-size: 14px;
  margin-bottom: 10px;
}
.material .interest {
  display: flex;
  flex-wrap: wrap;
}
.material .interest-box {
  display: flex;
}
.material .interest-box span {
  width: 86px;
  font-size: 14px;
  color: #666;
}
.material .interest a {
  display: block;
  height: 28px;
  width: auto;
  margin: 4px 8px;
  padding: 0 6px;
  background-color: #eee;
  font-size: 12px;
  line-height: 28px;
  /* flex-direction: column; */
}
</style>
