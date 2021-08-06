<template>
  <select
    :id="id"
    class="form-select"
    @input="$emit('update:id', $event.target.value)"
  >
    <option value="" disabled selected>Choose organisation</option>
    <option
      :key="organisation.Organisation.id"
      v-for="organisation in value"
      :value="organisation.Organisation.id"
    >
      {{ organisation.Organisation.name }}
    </option>
  </select>
</template>

<script>
export default {
  name: "Organisations",
  props: {
    id: String,
    value: Array,
  },
};
</script>