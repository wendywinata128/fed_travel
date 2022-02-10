<template>
  <div>
    <section-1 />
    <section-offer />
    <section-2 />
    <section-entry-data />
  </div>
</template>

<script>
import Section1 from "../components/home-section/Section1.vue";
import Section2 from "../components/home-section/recomended-destination/SectionRecomDest.vue";
import SectionEntryData from "../components/other-section/SectionEntryData.vue";
import SectionOffer from "../components/home-section/what-we-offer/SectionOffer.vue";

export default {
  name: "Home",
  components: { Section2, Section1, SectionEntryData, SectionOffer },
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
