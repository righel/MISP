<template>
  <time>{{ createdAt.toLocaleString() }}</time>
</template>

<script>
export default {
  name: "Time",
  props: {
    value: String,
  },
  data() {
    return {
      createdAt: new Date(this.value * 1000),
    };
  },
};
</script>