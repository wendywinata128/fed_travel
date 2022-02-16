<template>
  <div class="about">   
     <nama-aplikasi/>
     <section1/>
     <section2/>
     <Footer />
  </div>
</template>


<style scoped>
</style>


<script>
import Section1 from "../components/about-section/latarBelakang.vue";
import Section2 from "../components/about-section/ourTeam.vue";
import NamaAplikasi from "../components/about-section/namaAplikasi.vue";
import Footer from "../components/home-section/footer/Footer.vue";
export default {
  name: "About",
  components: {Section1,Section2,NamaAplikasi,Footer},
  data() {
     return {
     }
  },
  methods: {
  }
};
</script>