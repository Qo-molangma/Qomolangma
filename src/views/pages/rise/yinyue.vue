<template>
  <div class="xs">
    <div class="album-hor">
      <a href="javascript:;" v-for="i in list" :key="i.id">
        <div class="album">
          <div class="album-cover">
            <img :src="`https://imagev2.xmcdn.com/${i.albumInfo.cover}`" alt="" />
            <div class="content">
              <h3 class="album-title">{{ i.albumInfo.title }}</h3>
              <p class="album-content">{{ i.albumInfo.customTitle }}</p>
              <div class="album-info">
                <span class="count">
                  章节:
                  {{ i.statCountInfo.trackCount }}
                </span>
                <span class="count">
                  播放次数:
                  {{ i.statCountInfo.followerCount }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
import "../../../assets/page.scss";
import { get } from "../../../utils/tool";
export default {
  data() {
    return {
      list: [],
    };
  },
  created() {
    this.loadList();
  },
  methods: {
    async loadList() {
      const res = await get(
        "https://m.ximalaya.com/m-revision/page/rank/queryRank?clusterCode=rise&categoryCode=yinyue"
      );
      console.log(res.data);
      this.list = res.data.rankModuleInfoList;
    },
  },
};
</script>

<style lang="scss" >

img {
  border-radius: 0px !important;
}
</style>