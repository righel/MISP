<template>
  <span v-if="!value" class="bold red">No</span>
  <span v-if="value" class="bold green">Yes</span>
</template>

<script>
export default {
  name: "Boolean",
  props: {
    value: Boolean,
  },
};
</script>