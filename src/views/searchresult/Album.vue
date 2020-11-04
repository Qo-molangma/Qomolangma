<template>
<div class="albums">
  <ul>
        <li v-for="(item,index) in albums"
        :key="index">
        <img :src="item.albumInfo.cover_path" alt="">
        <!-- <p>{{item.albumInfo.personDescribe}}</p> -->
        <p> {{item.albumInfo.title}}</p>
        <p>评分：{{item.albumInfo.score}}</p>
        <!-- <p>{{item.albunInfo.tags}}</p> -->
        </li>
    </ul>
</div>

</template>

<script>
import {mapState} from "vuex"  //computed
export default {
    data(){
        return {
        }
    },
computed:{
    ...mapState(["albums"]),
}

}
</script>

<style>
.albums{
    display: flex;

}
.albums ul{
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