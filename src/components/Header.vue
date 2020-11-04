<template>
  <div class="header">
    <img class="logo" src="../assets/logo.png" alt="logo" @click="goTuijian" title="Qomolangma" />
    <van-button
      style="background: grey"
      size="normal"
      class="search-btn"
      @click="search"
      icon="search"
      >搜索</van-button
    >
  </div>
</template>

<script>
export default {
  name: "Head",
  methods: {
    search() {
      this.$router.push({
        name: "sousuo",
      });
      document.querySelector(".nav").style.display = "none";
    },
    goTuijian(){
      this.$router.push({
        name:"tuijian"
      })
      document.querySelector(".nav").style.display = "block";
    }
  },
};
</script>

<style lang="scss">
.header {
  width: 100%;
  height: 50px;
  background: #a7a7a7;
  display: flex;
  align-items: center;
  justify-content: space-around;

  .logo {
    height: 2rem;
    width: 5rem;
  }

  .search-btn {
    width: 60%;
    height: 60%;
    border-radius: 1rem;
  }
}
</style>