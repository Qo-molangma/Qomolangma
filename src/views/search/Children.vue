<template>
  <div class="buss">
    <ul>
      <li v-for="(item, index) in children" :key="index">
        <span class="order">{{ index + 1 }}</span>
        <span class="context"> {{ item.title }}</span>
        <span class="will"><van-icon :name='item.will'/></span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
data(){
    return {
        children:[
        {title:"老丁说股",will:'exchange'},
        {title:"米小圈上学记",will:'down'},
        {title:"有声的紫禁",will:'back-top'},
        {title:"宝宝巴士",will:'down'},
        {title:"上门女婿",will:'down'},
        {title:"郭德纲",will:'down'},
        {title:"三国演义",will:'back-top'},
        {title:"百家讲坛",will:'down'},
        {title:"儿童睡前故事",will:'down'},
        {title:"鬼吹灯",will:'down'},
        {title:"岳云鹏",will:'down'},
        {title:"郭德纲单口相声",will:'down'},
        {title:"猴子警长探案记",will:'down'},
        {title:"西游记",will:'down'},
        {title:"红楼梦",will:'down'},
        {title:"凡人修仙记",will:'back-top'},
        {title:"德云社",will:'down'},
        {title:"植物大战僵尸",will:'down'},
        {title:"神探迈克狐",will:'down'},
        ]
}},
methods:{},
created(){}
}
</script>

<style>
.buss ul {
  padding: 10px 22px;
  background-color: white;
}
.buss ul li {
  text-align: left;
  line-height: 45px;
  font-size: 16px;
  color: #333;
  height: 45px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.buss ul li .context {
  flex: 1;
}
.buss ul li .order {
  padding: 0 8px;
}
.buss ul li:nth-child(1) .order{
color: red;
font-size: 20px;
}
.buss ul li:nth-child(2) .order{
color: #f86442;
font-size: 20px;
}
.buss ul li:nth-child(3) .order{
color: #f8a642;
font-size: 20px;
}
</style>
