<template>
  <div class="about">
     <section1/>
     <section2/>
  </div>
</template>


<style scoped>

</style>


<script>
import Section1 from "../components/about-section/aboutSection.vue";
import Section2 from "../components/about-section/aboutSection2.vue";
export default {
  name: "About",
  components: {Section1,Section2 },
  data() {
     return {
     }
  },
  methods: {
  }
};
</script>