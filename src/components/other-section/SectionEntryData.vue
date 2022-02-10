<template>
  <div class="data-entry flex items-center pl-4" :style="cssProps">
    <custom-button
      title="Pindah"
      color="rgba(255, 0, 0, 1)"
      @onClickedButton="changeSection"
    />
    <div class="container-data">
      <div
        class="container-content"
        v-for="(content, idx) in contents"
        :style="{ '--index': idx * 90 + 'deg' }"
        :key="idx"
      >
        <div class="content">
          {{ content }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CustomButton from "../CustomButton.vue";
export default {
  components: { CustomButton },
  name: "entry-data",
  data() {
    return {
      contents: [1, 2, 3, 4],
      section: 0,
    };
  },
  computed: {
    cssProps() {
      return {
        "--rotate-items": -1 * this.section * 90 + "deg",
      };
    },
  },
  methods: {
    changeSection() {
      console.log("masuk");
      this.section++;
    },
  },
};
</script>

<style scoped>
.data-entry {
  height: 100vh;
  overflow: hidden;
}

.container-data {
  height: 150vh;
  width: 150vh;
  border: 1px solid white;
  border-radius: 50%;
  margin-left: auto;
  transform: translate(50%, 0vh) rotate(var(--rotate-items));
  display: flex;
  align-items: center;
  position: relative;
  transition: 2s ease;
}

.container-content {
  width: 50%;
  height: 1px;
  transform-origin: right center;
  transform: rotate(var(--index));
  position: absolute;
}

.content {
  width: 300px;
  height: 300px;
  background: white;
  transform: translate(-50%, calc(-50% - 1px));
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  font-size: 32px;
}
</style>
