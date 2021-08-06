<template>
  <span v-if="!value" class="bold red">N/A</span>
  <!-- TODO: <span v-if="value" class="bold red">N/A</span> -->
</template>

<script>
export default {
  name: "PGPKey",
  props: {
    value: String,
  },
};
</script>