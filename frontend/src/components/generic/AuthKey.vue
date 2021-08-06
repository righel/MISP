<template>
  <span class="privacy-value quickSelect authkey">
    {{ showPlaintext ? value : "****************************************" }}
  </span>
  &nbsp;
  <font-awesome-icon
    :icon="icon"
    @click="togglePlaintext"
    class="useCursorPointer"
  />
  ( <a href="#" @click="resetAuthKey">reset</a> )
</template>

<script>
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";

export default {
  name: "View",
  props: {
    value: String,
  },
  data() {
    return {
      showPlaintext: false,
    };
  },
  computed: {
    icon() {
      return this.showPlaintext ? faEyeSlash : faEye;
    },
  },
  methods: {
    togglePlaintext() {
      this.showPlaintext = !this.showPlaintext;
    },
    resetAuthKey(e) {
      e.preventDefault();
      alert("TODO: reset authkey not implemented");
    },
  },
};
</script>