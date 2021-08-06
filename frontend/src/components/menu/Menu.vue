<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <div :key="menuItem.id" v-for="menuItem in menuItems">
            <MenuItem v-if="!menuItem.children.length" :menuItem="menuItem" />
            <MenuItemDropdown
              v-if="menuItem.children.length"
              :menuItem="menuItem"
            />
          </div>
        </ul>
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/users/logout">
              Log out
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>


<script>
import { mapGetters, mapActions } from "vuex";
import MenuItem from "./MenuItem";
import MenuItemDropdown from "./MenuItemDropdown";

export default {
  name: "Menu",
  components: {
    MenuItem,
    MenuItemDropdown,
  },
  methods: {
    ...mapActions(["fetchMenu"]),
  },
  computed: mapGetters(["menuItems"]),
  created() {
    this.fetchMenu();
  },
};
</script>
