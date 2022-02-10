<template>
  <button :style="cssProps" @click="onClicked">{{ title }}</button>
</template>

<script>
export default {
  name: "custom-button",
  props: {
    title: String,
    color: String,
  },
  computed: {
    cssProps() {
      return {
        "--background": this.color,
      };
    },
  },
  methods: {
    onClicked() {
      this.$emit("onClickedButton");
    },
  },
  mounted() {},
};
</script>

<style scoped>
button {
  background: var(--background);
  box-shadow: 0px 0px 8px var(--background);
  padding: 8px 32px;
  border-radius: 20px;
}
</style>
