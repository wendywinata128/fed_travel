<template>
  <div>
    <section-1 />
    <section-about-company />
    <section-entry-data />
    <section-2 />
    <section-offer />
    <section-testimonial />
    <Footer />
  </div>
</template>

<script>
import Section1 from "../components/home-section/Section1.vue";
import Section2 from "../components/home-section/recomended-destination/SectionRecomDest.vue";
import SectionEntryData from "../components/other-section/SectionEntryData.vue";
import SectionAboutCompany from "../components/home-section/about-company/SectionAboutCompany.vue";
import SectionOffer from "../components/home-section/what-we-offer/SectionOffer.vue";
import SectionTestimonial from "../components/home-section/testimonial/SectionTestimonial.vue";
import Footer from "../components/home-section/footer/Footer.vue";

export default {
  name: "Home",
  components: {
    Section2,
    Section1,
    SectionEntryData,
    SectionAboutCompany,
    SectionOffer,
    SectionTestimonial,
    Footer,
  },
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
