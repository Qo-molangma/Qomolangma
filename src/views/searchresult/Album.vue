<template>
<div class="albums">
    <ul>
        <li v-for="(item,index) in albums"
        :key="index">
        <img :src="item.albumInfo.cover_path" alt="" >
        <div class="right">
            <p> {{item.albumInfo.title}}</p>
            <p class="pingfen">评分：{{item.albumInfo.score}}</p>
        </div>
        </li>
    </ul>
    <!-- <p class="load-more tc" @click="loadMore">
        加载更多<van-icon name="arrow-down" color="#ff7500" />
    </p> -->
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
    ,
    created(){
        console.log(this.albums);
    },
    methods:{
    }

}
</script>

<style>
.albums ul{
    padding: 10px 12px;
}
.right{
    margin-left: 15px;
}
.right .pingfen{
    color: #aaa;
}
li{
    display: flex;
    align-items: center;    
    margin-bottom: 5px;
}
img{
    display: inline-block;
}
</style>