<template>
  <router-link
    v-if="menuItem.spa"
    :to="menuItem.url"
    custom
    v-slot="{ href, navigate }"
  >
    <li class="nav-item">
      <a class="nav-link" :href="href" @click="navigate">
        {{ menuItem.name }}
      </a>
    </li>
  </router-link>
  <div v-if="!menuItem.spa">
    <li class="nav-item">
      <a class="nav-link" :href="menuItem.url">
        {{ menuItem.name }}
      </a>
    </li>
  </div>
</template>

<script>
export default {
  name: "MenuItem",
  props: {
    menuItem: Object,
  },
};
</script>