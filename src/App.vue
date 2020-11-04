<template>
  <div id="app">
    <keep-alive>
      <Header />
    </keep-alive>
    <Nav />
    <keep-alive>
      <div class="content">
        <router-view class="" />
      </div>
    </keep-alive>
  </div>
</template>

<script>
import Header from "./components/Header";
import Nav from "./components/Nav";
import "./assets/reset.scss";

export default {
  name: "app",
  components: {
    Header,
    Nav,
  },
};
</script>

<style lang="scss">
#app {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .content {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
    overflow: auto;
  }
}
</style>
