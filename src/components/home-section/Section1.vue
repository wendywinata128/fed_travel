<template>
  <div class="section1">
    <div class="container-hero">
      <navigation-menu> </navigation-menu>
      <div class="hero py-16 px-16">
        <h1 class="mb-2">
          Plan Your Dream
          <div :class="[hideText ? 'hide' : '']">
            {{ heroText[counterText] }}
          </div>
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu ut pretium
          mi eget luctus. Elementum consequat diam magnis posuere convallis.
        </p>
      </div>
      <try-book />
    </div>
    <div class="container-partner">
      <img src="@/assets/logo-partner.png" alt="" />
    </div>
  </div>
</template>

<script>
import NavigationMenu from "../NavigationMenu.vue";
import TryBook from "../TryBook.vue";
export default {
  name: "Section1",
  components: { NavigationMenu, TryBook },
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
.section1 {
  width: 100%;
  height: 100vh;
  background: #161616;
}

.section1 .container-hero {
  background-image: url("../../assets/bg-home-section1.png");
  position: relative;
  height: 70%;
  display: flex;
  flex-direction: column;
}

.section1 .container-hero::before {
  content: "";
  width: 100%;
  height: 100%;
  background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0), #000);
  position: absolute;
  bottom: 0;
}

.section1 .hero {
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.section1 .hero p {
  color: rgba(255, 255, 255, 0.8);
  width: 600px;
  text-align: center;
}

.hero h1 {
  font-size: 42px;
  font-weight: bold;
  color: white;
  word-spacing: 8px;
}

.hero h1 div {
  overflow: hidden;
  transition: 1s cubic-bezier(0.39, 0.575, 0.565, 1);
  width: fit-content;
  margin: 0 auto;
  position: relative;
  color: rgb(250, 136, 28);
  text-shadow: 0px 0px 8px rgba(250, 136, 28, 0.25);
}

.hero h1 div.hide {
  opacity: 0%;
  transform: translateY(-50%);
}

.container-partner {
  height: 30%;
  padding-top: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  /* background: #000; */
}
</style>
