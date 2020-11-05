<template>
  <div class="playpage">
    <div class="back">
      <van-icon name="arrow-left" @click="backHandle" class="to-back" />
    </div>
    <div class="play">
      <h3>{{ title }}</h3>
      <div class="img">
        <img :src="picUrl" alt="" />
      </div>
      <audio
        @pause="pauseHandle"
        :src="audioUrl"
        controls
        loop
        @play="playHandle"
      >
      </audio>
    </div>
    <div class="comment">
      <strong>{{ commentCount }}条评论</strong>
      <ul>
        <li v-for="(item, index) in comments" :key="index" class="comment-item">
          <img :src="item.smallHeader | http" alt="" />
          <div class="nc">
            <h4>{{ item.nickname }}</h4>
            <span v-html="item.content" class="com-content"></span>
            <div class="likes">
              {{item.likes}}
                <van-icon name="good-job" color="#ddd" size='12' class="good" />
            </div>
          </div>
        </li>
      </ul>
      <p class="dian" v-if="isCommentsNull!=0" @click="loadMore">加载更多...</p>
    </div>
  </div>
</template>

<script>
import { get } from "../utils/tool";
export default {
  data() {
    return {
      audioUrl: "",
      picUrl: "",
      title: "",
      comments: [],
      isCommentsNull:0,
      commentCount: 0,
      page:1,
      pages:1,
    };
  },
  methods: {
    async loadPlay() {
      console.log(this.$route.query.infoId);
      let res = await get(
        `http://liveroom.ximalaya.com/mobile/v1/track/share/content?trackId=${this.$route.query.infoId}&tpName=weixin&device=h5`
      );
      this.audioUrl = res.audioUrl;
      this.picUrl = res.picUrl;
      this.title = res.title;
      console.log(res);
    },
    async loadComment() {
      let res = await get(
        `https://m.ximalaya.com/m-revision/common/track/queryTrackCommentsFirstPage?trackId=${this.$route.query.infoId}&pageSize=10&page=1`
      );
      console.log(res);
      this.comments = res.data.comments;
      this.isCommentsNull= this.comments.length
      this.commentCount = res.data.totalCount;
      this.pages=res.data.pageSize
    },
    async loadMore(){
        this.page++;
        if (this.page <= this.pages){
          let res=await get(`https://m.ximalaya.com/m-revision/common/track/queryTrackCommentsFirstPage?trackId=${this.$route.query.infoId}&pageSize=10&page=${this.page}`)
          this.comments=[...this.comments,...res.data.comments]
        }else{
          document.querySelector(".dian").html="没有更多了";
        }
    },
    pauseHandle() {
      console.log("停了");
      document.querySelector(".img").style.animationPlayState = "paused";
    },
    playHandle() {
      console.log("播放了");
      document.querySelector(".img").style.animationPlayState = "running";
    },
    backHandle() {
      this.$router.push({ name: "details" });
    },
  },
  created() {
    this.loadPlay();
    this.loadComment();
  },
};
</script>

<style>
.play {
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 15px 0;
  padding-top: 0;
}
.back {
  padding: 18px 0 0 15px;
}
.to-back {
  font-size: 19px;
}
.play h3 {
  font-size: 16px;
  line-height: 25px;
  text-align: center;
  margin-bottom: 14px;
  padding: 2px 45px;
  height: auto;
  color: #666;
}
.play .img {
  width: 150px;
  height: 150px;
  margin-bottom: 14px;
  animation: myfirst 15s infinite linear;
  border-radius: 100% !important;
  animation-play-state: paused;
}
.play .img img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}
.comment strong {
  font-weight: bold;
}
.comment {
  padding: 0 14px;
  padding-top: 14px;
}
.comment .dian {
  text-align: center;
  margin-bottom: 30px;
  font-size: 14px;
}
.comment-item img {
  width: 37px;
  height: 37px;
  border-radius: 50%;
  margin-right: 8px;
}
.comment-item {
  display: flex;
  margin-bottom: 10px;
  margin-top: 15px;
}
.comment-item .nc {
  display: flex;
  align-self: start;
  flex-direction: column;
  position: relative;
  width:332px;
}
.comment-item .nc .likes{
  position: absolute;
  right: 2px;
  top: 23px;
  font-size: 12px;
  color: #ccc;
}
.comment-item .nc h4 {
  line-height: 20px;
  margin-bottom: 4px;
  color: #666;
  font-size: 12px;
}
.comment-item .nc span {
  display: inline-block ;
  color: #333;
  line-height: 23.5px;
  width: 270px;
  font-size: 13px;
}
.comment-item .nc .com-content .emoji {
  display: inline-block;
  width: 20px;
  height: 20px;
}
@-webkit-keyframes myfirst {
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(180deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.nav {
  display: none;
}
</style>
