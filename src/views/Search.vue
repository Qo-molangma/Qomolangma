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
</form>  <button @click="fanhui">返回</button>
<van-button type="default" v-for="(item,index) in Localstorage" :key="index">{{item}}</van-button>

  </div>
  
  

</template>

<script>
import {loadHotWord} from '../utils/search'
import { Toast } from 'vant';
import {getLocalstorage} from '../utils/tool'
import {get} from '../utils/tool'
export default {
  data() {
    return {
      value: '',
      hotCategory:[],
      Localstorage:[]
    };
  },
  methods: {
    async onSearch(val) {
      Toast(val);
      // setLocalstorage(val)
      // let serachResult=await  get(`https://m.ximalaya.com/revision/seo/getTdk?typeName=SEARCH&uri=%2Fsearch%2F${val}&tdkType=wap`)
    },
    onCancel() {
      Toast('取消');
    },
      fanhui(){
      this.$router.push({
        name:'tuijian'
      })

    },
   async loadBoardHotCategory(){
        // let result=await loadHotCategory()
      let result=await get('https://m.ximalaya.com/hotWordBillboardCategory')
        this.hotCategory=result
        console.log(result);
      },
     async loadHotWords(){
        let result=await loadHotWord()
        this.hotWords=result
        console.log(result);
      },
     async loadSerachHistory(){
      
       let result=await getLocalstorage()
        this.Localstorage=result
      }
    },
      created(){
      this.loadBoardHotCategory()
      this.loadHotWords()
      this.loadSerachHistory()

      // document.querySelector(".nav").style.display="block"

    }
    };
</script>

<style lang="scss">
.search {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right:0;
  background: grey;
  overflow: auto;
}
</style>