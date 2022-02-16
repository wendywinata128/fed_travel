<template>
  <div class="services-page">
    <section1/>
  </div>
</template>

<style scoped>
.services-page {
  background: #161619;
  min-height: 100vh;
}
</style>


<script>
import Section1 from "../components/services-section/bookNow.vue";
export default {
  name: "services-page",
  components: { Section1},
  data() {
    return {};
  },
  methods: {},
};
</script>
