<template>
  <li class="nav-item dropdown">
    <a
      class="nav-link dropdown-toggle"
      href="#"
      id="navbarDropdownMenuLink"
      role="button"
      data-bs-toggle="dropdown"
      aria-expanded="false"
    >
      {{ menuItem.name }}
    </a>
    <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
      <div
        :key="`menublock-${index}`"
        v-for="(menuChildBlock, index) in menuItem.children"
      >
        <div class="dropdown-divider" v-if="index > 0"></div>
        <div :key="menuChildItem.id" v-for="menuChildItem in menuChildBlock">
          <router-link
            v-if="menuChildItem.spa"
            :to="menuChildItem.url"
            custom
            v-slot="{ href, navigate }"
          >
            <li>
              <a class="dropdown-item" :href="href" @click="navigate">
                {{ menuChildItem.name }}
              </a>
            </li>
          </router-link>
          <div v-if="!menuChildItem.spa">
            <li>
              <a class="dropdown-item" :href="menuChildItem.url">
                {{ menuChildItem.name }}
              </a>
            </li>
          </div>
        </div>
      </div>
    </ul>
  </li>
</template>

<script>
export default {
  name: "MenuItem",
  props: {
    menuItem: Object,
  },
};
</script>

<style scoped>
.dropdown-menu {
  font-size: 12px;
}
</style>