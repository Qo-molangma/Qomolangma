<template>
<div class="voice">
  <ul>
        <li v-for="(item,index) in voice"
        :key="index">
        <img :src="item.trackInfo.cover_path" alt="">
        <div class="right">
            <p>分类：{{item.trackInfo.category_title}}</p>
            <p>标题：{{item.trackInfo.title}}</p>
        </div>
        </li>
    </ul>
</div>

</template>

<script>
import {mapState} from "vuex"  //computed
export default {
computed:{
    ...mapState(["voice"]),
}

}
</script>

<style>
.voice{
    display: flex;
}
.right {
    margin-left: 15px;
}
.right p{
    display: block;
}
.right .description{
    font-size: 14px;
    color: #444;
}
.voice ul{
    padding: 10px 12px;
}
li{
    display: flex;
align-items: center;    
margin-bottom: 5px;
}
img{
    display: inline-block;
}
p{
    display: inline-block;
}
</style>