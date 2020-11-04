<template>
<div class="anchor">
    <ul>
        <li v-for="(item,index) in anchor"
        :key="index">
        <img :src="item.userInfo.smallPic" alt="">
        <p>{{item.userInfo.personDescribe}}</p>
        <p> {{item.userInfo.nickname}}</p>
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
.anchor{
    display: flex;

}
li{
    display: flex;
align-items: center;    
}
img{
    display: inline-block;
}
p{
    display: inline-block;
}
</style>