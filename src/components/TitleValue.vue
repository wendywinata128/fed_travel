<template>
  <div>
    <span class="title">{{ title }}</span>
    <div class="value">{{ value }}</div>
  </div>
</template>

<script>
export default {
  name: "TitleValue",
  props: ["title", "value"],
};
</script>

<style scoped>
.title {
  font-size: 11px;
  color: rgba(255, 255, 255, 0.6);
}

.value {
  font-size: 14px;
}
</style>
