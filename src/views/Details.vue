<template>
  <div class="detail-page">
    <div class="detail-head">
      <img :src="src" />
      <div class="play-count">
        <van-icon name="service-o" />{{ playCount | wan }}
      </div>
      <p class="nickname">作者: {{ nickname }}</p>
    </div>
    <div>
      <h2 class="txt_2">节目({{ trackCount }})</h2>
      <ul class="list">
        <li v-for="(item, index) in title" :key="index" @click="toPlay(id,item.trackInfo.id)">
          <van-icon name="play-circle-o" size="20"/>
          <span>
            {{ item.trackInfo.title }}
          </span>
        </li>
      </ul>
      <p class="load-more tc" @click="loadMore">
        加载更多<van-icon name="arrow-down" color="#ff7500" />
      </p>
      <p class="nomore">没有更多了</p>
    </div>
  </div>
</template>

<script>
import { get } from "../utils/tool";
import "../assets/classify.scss";

export default {
  components: {},
  data() {
    return {
      title: [],
      points: [],
      src: "",
      playCount: 0,
      trackCount: 0,
      nickname: "",
      page:1,
      pages:1,
      id:0,
      infoId:0
    };
  },
  created() {
    this.loadData();
    console.log(this.$route);
    this.src =
      "https://imagev2.xmcdn.com/" + this.$route.query.item.albumInfo.cover;
    this.playCount = this.$route.query.item.statCountInfo.playCount;
    this.trackCount = this.$route.query.item.statCountInfo.trackCount;
    this.nickname = this.$route.query.item.anchorInfo.nickname;
    this.id=this.$route.query.item.id
  },
  methods: {
    async loadData() {
      const res = await get(
        `https://m.ximalaya.com/m-revision/common/album/queryAlbumTrackRecordsByPage?albumId=${this.$route.query.item.id}&page=1&pageSize=10&asc=true&countKeys=play%2Ccomment&v=1604303035067`
      );
      const data = res.data.trackDetailInfos;
      console.log(res);
      console.log(this.infoId);
      this.pages=Math.ceil(res.data.totalCount/res.data.pageSize)  
      console.log(this.pages);
      this.title = data;
    },
  async  loadMore(){
    this.page++
    if(this.page<=this.pages){
        let res= await get( `https://m.ximalaya.com/m-revision/common/album/queryAlbumTrackRecordsByPage?albumId=${this.$route.query.item.id}&page=${this.page}&pageSize=10&asc=true&countKeys=play%2Ccomment&v=1604303035067`)
        this.title=[...this.title,...res.data.trackDetailInfos]
    }else{
      document.querySelector('.load-more').remove()
      document.querySelector('.nomore').style.display="block"
    }
    },
    toPlay(id,infoId){
        this.$router.push({name:"playpage",query:{id:id,infoId:infoId}})
    }
  },
  filters: {},
};
</script>

<style lang="scss" scoped>
.detail-head{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.detail-head img {
  margin: 0 auto;
}
.list {
  padding: 2px 12px;
}
.list li {
  display: flex;
  justify-content: flex-start;
  font-size: 16px;
  border-bottom: 1px solid #aaa;
  padding: 12px 0;
  color: #333;
}
.list span {
  margin-left: 10px;
}
.play-count {
  margin: 0 auto;
  width: 129px;
  background: #808080;
  text-align: center;
  padding: 4px 10px 4px 5px;
  white-space: nowrap;
  font-size: 12px;
  line-height: 1.42;
  font-weight: 700;
  color: #fff;
  position: relative;
  top: -24px;
  opacity: 0.5;
}
.detail-title {
  color: rgba(0, 0, 0, 0.8);
  text-align: center;
}
.nickname {
  text-align: center;
  font-size: 14px;
  color: #222;
}
.intro {
  padding: 10px 15px 0;
}
.load-more {
  display: block;
  text-align: center;
  padding: 17px 0;
  font-size: 15px;
  line-height: 1.4;
  font-weight: 700;
  color: #f86442;
}
.txt_2 {
  font-size: 18px;
  line-height: 1.39;
  font-weight: bold;
  text-indent: 2em;
}
.nomore{
display: none;
text-align: center;
}
</style>