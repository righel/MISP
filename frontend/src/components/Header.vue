<template>
  <Menu />
</template>

<script>
import Menu from "../components/menu/Menu";
export default {
  name: "Header",
  props: {},
  components: {
    Menu,
  },
};
</script>


<style scoped>
nav {
  height: 50px;
  margin-bottom: 20px;
}
</style>
