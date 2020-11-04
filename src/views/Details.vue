<template>
  <div class="detail-page">
    <div class="detail-head">
      <img
        alt="习近平新时代中国特色社会主义思想学习纲要"
        src="//imagev2.xmcdn.com/group62/M08/57/04/wKgMZ1z7asCSSAR8AAFp44juMnc336.jpg!op_type=3&amp;columns=144&amp;rows=144&amp;magick=webp"
      />
      <div class="play-count"><van-icon name="service-o" />&nbsp;1.51亿</div>
    </div>

    <h3 class="detail-title">
      &nbsp;<van-icon
        name="arrow-down"
        color="#ff7500"
      />
    </h3>
    <div class="intro">
      <p
        data-flag="normal"
        style="
          color: #333333;
          font-weight: normal;
          font-size: 16px;
          line-height: 30px;
          font-family: Helvetica, Arial, sans-serif;
          hyphens: auto;
          text-align: left;
        "
        lang="en"
      >
        <b
          ><b
            >《习近平新时代中国特色社会主义思想学习纲要》一书由中共中央宣传部组织编写，学习出版社、人民出版社联合出版。</b
          ></b
        >
      </p>
      <span><br /></span>
      <p
        style="
          color: #333333;
          font-weight: normal;
          font-size: 16px;
          line-height: 30px;
          font-family: Helvetica, Arial, sans-serif;
          hyphens: auto;
          text-align: left;
        "
        data-flag="normal"
        lang="en"
      >
        有声内容由学习出版社、喜马拉雅联合出品，西安广播电视台承制。
      </p>
      <span><br /></span>
      <blockquote
        style="
          font-size: 14px;
          margin: 10px 0px;
          color: rgb(102, 102, 102);
          border-left: 5px solid rgb(232, 232, 232);
          padding-left: 15px;
        "
      >
        <p
          data-flag="bk-span"
          style="color: #666666; font-size: 14px"
          lang="en"
        >
          <b>播讲人</b>
        </p>
        <p
          data-flag="bk-span"
          style="color: #666666; font-size: 14px"
          lang="en"
        >
          王 东: 西安广播电视台 主持人
        </p>
        <p
          style="color: #666666; font-size: 14px"
          lang="en"
          data-flag="bk-span"
        >
          鱼承:西安广播电视台 主持人
        </p>
        <p
          style="color: #666666; font-size: 14px"
          lang="en"
          data-flag="bk-span"
        >
          岳 玲：西安广播电视台 新闻主播
        </p>
      </blockquote>
    </div>

    <div>
      <h2 class="txt_2">节目(100)</h2>
      <ul v-for="(item,index) in title" :key="index">
        <van-icon name="play-circle-o" />
        {{item.trackInfo.title}}
      </ul>
      <p class="load-more tc">加载更多<van-icon name="arrow-down" color="#ff7500" /></p>
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
      points:[],
    };
  },
  created() {
    this.loadData();
  },
  methods: {
    async loadData() {
      const res = await get(
        "https://m.ximalaya.com/m-revision/common/album/queryAlbumTrackRecordsByPage?albumId=24004983&page=1&pageSize=10&asc=true&countKeys=play%2Ccomment&v=1604303035067"
      );
      const point = await get(
        "https://m.ximalaya.com/m-revision/common/anchor/queryAnchorAlbumsByPage?anchorId=68181111&page=1&pageSize=1&asc=true"
      );
      const data = res.data.trackDetailInfos;
      const poin = point.data.albumBriefDetailInfos;
      console.log(poin)
      this.points = poin
      //console.log(this.points)
      
      this.title = data;
      
    },
  },
};
</script>

<style lang="scss" scoped>
.detail-head img {
  margin: 0 auto;
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
    color: #f86442;}
.txt_2{
  font-size: 18px;
    line-height: 1.39;
}
</style>