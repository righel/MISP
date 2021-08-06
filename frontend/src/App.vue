<template>
  <div id="app">
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";

export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
};
</script>

<style>
@import "~bootstrap/dist/css/bootstrap.css";

html,
body {
  height: 100%;
  font-size: 12px;
}

#app {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.content {
  float: left;
  flex: 1 0 auto;
  padding: 20px;
  width: calc(100% - 200px);
  border-left: 1px solid;
}
</style>
