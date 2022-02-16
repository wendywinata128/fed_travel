<template>
  <div class="container-value">
    <div class="value">
      <h1>{{ this.target }}</h1>
      <div class="title">{{ this.title }}</div>
    </div>
    <p class="description">{{ this.description }}</p>
  </div>
</template>

<script>
export default {
  name: "value-item-component",
  data() {
    return {
      target: 0,
    };
  },
  methods: {
    increaseValue() {
      let increment = Math.round(this.value / 100);

      const intervalIncrement = setInterval(() => {
        this.target += increment;
        if (this.target >= this.value) {
          clearInterval(intervalIncrement);
          this.target = this.value + "+";
        }
      }, 20);
    },
  },
  props: ["value", "title", "description"],
  mounted() {
    this.increaseValue();
  },
};
</script>

<style scoped>
.container-value {
  border-top: 1px solid white;
  width: 300px;
  padding: 15px 0;
  position: relative;
}

h1 {
  font-size: 48px;
  font-weight: bold;
  margin-bottom: 4px;
}

.title {
  position: absolute;
  top: 10px;
  right: 0;
  font-size: 14px;
  font-weight: bold;
}

p {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.7);
}
</style>
