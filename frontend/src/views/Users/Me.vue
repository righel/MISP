<template>
  <div>
    <SideMenu :menuId="'globalActions'" />
    <div class="content">
      <ViewUser :user="user" v-if="user" />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import SideMenu from "@/components/menu/SideMenu";
import ViewUser from "@/components/users/View";

export default {
  name: "Me",
  title: "Users",
  components: {
    SideMenu,
    ViewUser,
  },
  methods: {
    ...mapActions(["fetchUser"]),
  },
  computed: mapGetters(["user"]),
  created() {
    this.fetchUser("me");
  },
};
</script>