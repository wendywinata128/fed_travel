<template>
  <div class="about">
    <nama-aplikasi />
    <section1 />
    <section2 />
    <footer-app />
  </div>
</template>

<style scoped></style>

<script>
import Section1 from "../components/about-section/latarBelakang.vue";
import Section2 from "../components/about-section/ourTeam.vue";
import NamaAplikasi from "../components/about-section/namaAplikasi.vue";
import FooterApp from "../components/home-section/footer/FooterApp.vue";
export default {
  name: "About",
  components: { Section1, Section2, NamaAplikasi, FooterApp, },
  data() {
    return {};
  },
  methods: {},
};
</script>
