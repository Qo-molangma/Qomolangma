<template>
<div class="anchor">
    <ul>
        <li v-for="(item,index) in anchor"
        :key="index">
        <img :src="item.userInfo.smallPic" alt="">
        <div class="right">
            <p>{{item.userInfo.nickname}}</p>
            <p class="description">介绍：{{item.userInfo.personDescribe}}</p>
        </div>
        </li>
    </ul>
</div>

</template>

<script>
import {mapState} from "vuex"  //computed
export default {
computed:{
    ...mapState(["anchor"]),
}
}
</script>

<style>
.anchor img{
display: inline-block;
width: 80px;
height: 80px;
border-radius: 50%;
}
.anchor{
    padding: 0 15px;
}
li{
    display: flex;
    align-items: center;    
}
.right{
    margin-left: 15px;
}
.right p{
    display: block;
}
.right .description{
    font-size: 14px;
    color: #444;
}
</style>