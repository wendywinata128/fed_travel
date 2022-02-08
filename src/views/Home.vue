<template>
  <div class="home">
    <navigation-menu> </navigation-menu>
    <div class="hero py-16 px-16">
      <h1 class="mb-2">
        Plan Your
        <span :class="[hideText ? 'hide' : '']">{{
          heroText[counterText]
        }}</span>
      </h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu ut pretium
        mi eget luctus. Elementum consequat diam magnis posuere convallis.
      </p>
    </div>
  </div>
</template>

<script>
import NavigationMenu from "../components/NavigationMenu.vue";
export default {
  name: "Home",
  components: { NavigationMenu },
  data() {
    return {
      heroText: ["Holiday", "Memory", "Journey", "Trip"],
      counterText: 0,
      hideText: false,
    };
  },
  methods: {
    startTextAnimation() {
      setInterval(() => {
        this.hideText = true;
        setTimeout(() => {
          this.hideText = false;
          this.counterText++;
          if (this.counterText == this.heroText.length) this.counterText = 0;
        }, 2000);
      }, 4000);
    },
  },
  mounted() {
    this.startTextAnimation();
  },
};
</script>

<style scoped>
.home {
  height: 100vh;
  width: 100%;
  background-image: url("../assets/bg-home-section1.png");
  position: relative;
}

.home::before {
  content: "";
  width: 100%;
  height: 100%;
  background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0), #000);
  position: absolute;
  bottom: 0;
}

.home .hero {
  position: relative;
  z-index: 2;
  align-content: center;
  width: 700px;
}

.home .hero p {
  color: rgba(255, 255, 255, 0.8);
}

.hero h1 {
  font-size: 42px;
  font-weight: bold;
  color: white;
  word-spacing: 8px;
  width: 100%;
  display: flex;
}

.hero h1 span {
  width: 50%;
  margin-left: 16px;
  overflow: hidden;
  transition: 1s cubic-bezier(0.39, 0.575, 0.565, 1);
}

.hero h1 span.hide {
  opacity: 0%;
  transform: translateY(-50%);
}
</style>
