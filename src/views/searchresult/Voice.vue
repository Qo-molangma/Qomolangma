<template>
<div class="voice">
  <ul>
        <li v-for="(item,index) in voice"
        :key="index">
        <img :src="item.trackInfo.cover_path" alt="">
        <p>分类：{{item.trackInfo.category_title}}</p>
        <p> {{item.trackInfo.title}}</p>
        <!-- <p>{{item.trackInfo.tags}}</p> -->
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