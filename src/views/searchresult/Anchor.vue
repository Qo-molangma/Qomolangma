<template>
<div class="anchor">
    <ul>
        <li v-for="(item,index) in anchor"
        @click="toAnchorDetail(item.userInfo.uid,item.userInfo.smallPic)"
        :key="index">
        <img :src="item.userInfo.smallPic" alt="">
        <div class="right">
            <p>{{item.userInfo.nickname}}</p>
            <p class="description">介绍：{{item.userInfo.personDescribe}}</p>
            <p class="followers">粉丝：{{item.userInfo.followers_counts | wanren}}</p>
        </div>
        </li>
    </ul>
</div>

</template>

<script>
import {setAnchorSessionStorage} from "../../utils/tool"
import {mapState} from "vuex"  //computed
export default {
computed:{
    ...mapState(["anchor"]),
},
methods:{
    toAnchorDetail(id,pic){
        console.log(this.$route);
    setAnchorSessionStorage(id,pic)
    this.$router.push({
        name: "anchordetail",
        query: { id: id},
    });
}
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
.right .followers{
    color: #bbb;
}
</style>