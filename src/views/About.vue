<template>
  <div class="about">
    <navigation-menu> </navigation-menu>
     <div class="hero py-16 px-16">
      <h1 data-aos="fade-right" class="mb-2">
       Latar Belakang
      </h1>
      <p data-aos="zoom-in" >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu ut pretium
        mi eget luctus. Elementum consequat diam magnis posuere convallis.
      </p>
    </div>
  </div>
</template>


<style scoped>
.about {
  height: 100vh;
  width: 100%;
  background-image: url("../assets/background_aboutus.jpg");
  position: relative;
}

.about::before {
  content: "";
  width: 100%;
  height: 100%;
  background-image: linear-gradient(to bottom, rgba(200, 200, 200, 0), #1c1e1e);
  position: absolute;
  bottom: 0;
}

.about .hero {
  position: relative;
  z-index: 2;
  align-content: center;
  width:700px;
}

.hero h1 {
  font-size: 42px;
  font-weight: bold;
  color: white;
  word-spacing: 8px;
  width: 100%;
  display: flex;
}
</style>


<script>
import NavigationMenu from "../components/NavigationMenu.vue";
export default {
  name: "About",
  components: { NavigationMenu },
  data() {
     return {
     }
  },
  methods: {
   
  },
};
</script>