<template>
  <router-link :to="`\/roles/view/${value.id}`"> {{ value.name }}</router-link>
</template>

<script>
export default {
  name: "Role",
  props: {
    value: Object,
  },
};
</script>