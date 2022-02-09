<template>
  <button :style="cssProps">{{ title }}</button>
</template>

<script>
export default {
  name: "custom-button",
  props: ["title", "color"],
  computed: {
    cssProps() {
      return {
        "--background": this.color,
      };
    },
  },
  mounted() {
  },
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
