<template>
  <select
    :id="id"
    class="form-select"
    @input="$emit('update:id', $event.target.value)"
  >
    <option value="0" selected>Not bound to a server</option>
    <option
      :key="server.Server.id"
      v-for="server in value"
      :value="server.Server.id"
    >
      {{ server.Server.name }}
    </option>
  </select>
</template>

<script>
export default {
  name: "Servers",
  props: {
    id: String,
    value: Array,
  },
};
</script>