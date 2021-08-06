<template>
  <div>
    <SideMenu :menuId="'administration'" />
    <div class="content">
      <AddUser />
    </div>
  </div>
</template>

<script>
import SideMenu from "@/components/menu/SideMenu";
import AddUser from "@/components/users/Add";

export default {
  name: "Add",
  title: "Add Users",
  components: {
    SideMenu,
    AddUser,
  },
};
</script>