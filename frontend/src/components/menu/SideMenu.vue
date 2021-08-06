<template>
  <div class="actions sideMenu">
    <ul
      class="nav nav-pills flex-column mb-auto"
      v-for="(menuChildBlock, index) in menuItems[menuId].children"
      :key="`menublock-${index}`"
    >
      <div class="dropdown-divider" v-if="index > 0"></div>

      <div v-for="menuChildItem in menuChildBlock" :key="menuChildItem.id">
        <router-link
          v-if="menuChildItem.spa"
          :to="menuChildItem.url"
          custom
          v-slot="{ href, navigate }"
        >
          <li class="nav-item">
            <a
              :class="[
                menuChildItem.url === $route.path ? 'active' : '',
                'nav-link',
              ]"
              :href="href"
              @click="navigate"
            >
              {{ menuChildItem.name }}
            </a>
          </li>
        </router-link>
        <div v-if="!menuChildItem.spa">
          <li class="nav-item">
            <a
              :class="[
                menuChildItem.url === $route.path ? 'active' : '',
                'nav-link',
              ]"
              :href="menuChildItem.url"
            >
              {{ menuChildItem.name }}
            </a>
          </li>
        </div>
      </div>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "SideMenu",
  props: {
    menuId: String,
  },
  computed: mapGetters(["menuItems"]),
};
</script>

<style scoped>
.sideMenu {
  width: 200px;
  float: left;
}
</style>