<template>
  <div>
    <SideMenu :menuId="'administration'" />
    <IndexUsers :users="users" v-if="users" />
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import SideMenu from "@/components/menu/SideMenu";
import IndexUsers from "@/components/users/Index";

export default {
  name: "Index",
  title: "List Users",
  components: {
    SideMenu,
    IndexUsers,
  },
  methods: {
    ...mapActions(["fetchUsers"]),
  },
  computed: mapGetters(["users"]),
  created() {
    this.fetchUsers();
  },
};
</script>
