<template>
  <div class="services-page">
    <section1 />
    <recom-trip />
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
import RecomTrip from "../components/services-section/RecomTrip.vue";
export default {
  name: "services-page",
  components: { Section1, RecomTrip },
  data() {
    return {};
  },
  methods: {},
};
</script>
