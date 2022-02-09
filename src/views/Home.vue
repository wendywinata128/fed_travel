<template>
  <div>
    <section-1 />
    <section-2 />
  </div>
</template>

<script>
import Section1 from "../components/home-section/Section1.vue";
import Section2 from "../components/home-section/SectionRecomDest.vue";

export default {
  name: "Home",
  components: { Section2, Section1 },
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
