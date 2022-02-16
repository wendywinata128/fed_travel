<template>
  <div class="data-entry flex items-center pl-4" :style="cssProps">
    <div class="detail">
      <div class="header" data-aos="fade-right">
        <h1 class="font-bold text-xl title">
          {{ contents[absNumber(section)].title }}
        </h1>
        <div class="number">{{ "0" + (absNumber(section) + 1) }}</div>
      </div>
      <div class="flex" data-aos="fade-up">
        <div class="actions flex flex-col mr-12 gap-2">
          <div class="icon" @click="changeSection('decrement')">
            <i class="fas fa-long-arrow-alt-up text-2xl"></i>
          </div>
          <div class="icon" @click="() => changeSection('increment')">
            <i class="fas fa-long-arrow-alt-down text-2xl"></i>
          </div>
        </div>
        <p class="">{{ contents[absNumber(section)].description }}</p>
      </div>
    </div>
    <div class="container-data">
      <div
        class="container-content"
        v-for="(content, idx) in contents"
        :style="{ '--index': idx * 90 + 'deg' }"
        :key="idx"
      >
        <div class="content">
          {{ idx + 1 }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  name: "entry-data",
  data() {
    return {
      contents: [
        {
          title: "Travel Plans",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu ut pretium mi eget luctus. Elementum consequat diam magnis posuere convallis. Magna nec massa semper fringilla mattis etiam purus. Auctor faucibus gravida vitae risus hac.",
        },
        {
          title: "Travel Plans2",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu ut pretium mi eget luctus. Elementum consequat diam magnis posuere convallis. Magna nec massa semper fringilla mattis etiam purus. Auctor faucibus gravida vitae risus hac.",
        },
        {
          title: "Travel Plans3",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu ut pretium mi eget luctus. Elementum consequat diam magnis posuere convallis. Magna nec massa semper fringilla mattis etiam purus. Auctor faucibus gravida vitae risus hac.",
        },
        {
          title: "Travel Plans4",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu ut pretium mi eget luctus. Elementum consequat diam magnis posuere convallis. Magna nec massa semper fringilla mattis etiam purus. Auctor faucibus gravida vitae risus hac.",
        },
      ],
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
    changeSection(type) {
      if (type === "increment") {
        this.section++;
        if (this.section == 4) this.section = 0;
      } else {
        this.section--;
        if (this.section == -1) this.section = 3;
      }
      console.log("test", type, this.section);
    },
    absNumber(number) {
      return Math.abs(number);
    },
  },
  mounted() {
    // this.changeSection();
  },
};
</script>

<style scoped>
.data-entry {
  height: 100vh;
  overflow: hidden;
  display: flex;
}

.detail {
  padding: 0 0 0 32px;
}

.container-data {
  flex-shrink: 0;
  height: 150vh;
  width: 150vh;
  border: 1px solid white;
  border-radius: 50%;
  /* margin-left: auto; */
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
  width: 150px;
  height: 150px;
  background: white;
  transform: translate(-50%, calc(-50% - 1px));
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  font-size: 32px;
}

.detail p {
  width: 500px;
}

.detail .header {
  position: relative;
  padding-left: 32px;
  margin-bottom: 32px;
}

.detail .number {
  position: absolute;
  font-size: 64px;
  color: rgba(255, 255, 255, 0.7);
  font-weight: bold;
  bottom: -8px;
  left: 8px;
}

.detail .title {
  font-size: 32px;
}

.actions > * {
  color: rgba(255, 255, 255, 0.7);
}

.actions > *:hover {
  color: rgba(255, 255, 255, 1);
  cursor: pointer;
}
</style>
