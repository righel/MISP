<template>
  <select
    :id="id"
    class="form-select"
    @input="$emit('update:id', $event.target.value)"
  >
    <option value="" disabled selected>Please select a role</option>
    <option :key="role.Role.id" v-for="role in value" :value="role.Role.id">
      {{ role.Role.name }}
    </option>
  </select>
</template>

<script>
export default {
  name: "Roles",
  props: {
    id: String,
    value: Array,
  },
};
</script>