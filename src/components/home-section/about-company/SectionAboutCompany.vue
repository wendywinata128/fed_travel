<template>
  <div class="section-about-company">
    <div class="bg"></div>
    <div class="container">
      <h1 data-aos="fade-right">Kami Memberikan<br />Kenangan Terbaik</h1>
      <p data-aos="fade-left">
        Kemana pun kamu mau pergi, percayakan rencana tersebut kepada kami,
        karena kami adalah orang yang tepat untuk menemani perjalananmu.
      </p>

      <div class="our-value" v-if="isShowed">
        <value-item
          :title="value.title"
          :value="value.value"
          :description="value.description"
          v-for="(value, idx) in companyValueData"
          :key="idx"
          data-aos="zoom-out"
          :data-aos-delay="(idx + 1) * 300"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ValueItem from "../../ValueItem.vue";
export default {
  components: { ValueItem },
  name: "section-about-company",
  data() {
    return {
      companyValueData: [
        {
          title: "Perjalanan",
          value: 8532,
          description: "Total perjalanan yang telah kami jalani",
        },
        {
          title: "Pengalaman memandu",
          value: 4782,
          description: "Total pengalaman memandu yang kami miliki",
        },
        {
          title: "Kerjasama",
          value: 90,
          description: "Total kerja sama dengan perusahaan traveling",
        },
        {
          title: "Destinasi",
          value: 1223,
          description: "Total destinasi terbaik yang kami tawarkan",
        },
      ],
      isShowed: false,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.counterOnScrollListener);
  },
  methods: {
    setNumber() {},
    counterOnScrollListener() {
      const containerOurValue = document.querySelector(
        ".section-about-company"
      );

      if (
        containerOurValue.getBoundingClientRect().top <
          window.innerHeight / 2 - 200 &&
        containerOurValue.getBoundingClientRect().top >= -1 * window.innerHeight
      ) {
        this.isShowed = true;
      } else {
        this.isShowed = false;
      }
    },
  },
};
</script>

<style scoped>
.section-about-company {
  height: 100vh;
  position: relative;
  overflow: hidden;
  background: #161619;
}

.bg {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0);
  z-index: 1;
  backdrop-filter: blur(240px);
}

.section-about-company::before,
.section-about-company::after {
  content: "";
  position: absolute;
  width: 600px;
  height: 600px;
  background: rgba(147, 147, 147, 0.25);
  z-index: 0;
  border-radius: 50%;
  transform: translate(-50%, 30%);
}

.section-about-company::after {
  bottom: 0;
  right: 0;
  transform: translate(50%, 30%);
}

.container {
  max-width: 1200px;
  padding: 32px 16px;
  margin: 0 auto;
  position: relative;
  z-index: 100;
}

h1 {
  font-size: 48px;
  font-weight: bold;
}

p {
  width: 400px;
  margin-left: auto;
}

.our-value {
  display: grid;
  /* background: orange; */
  width: fit-content;
  grid-template-columns: auto auto;
  justify-items: flex-end;
  gap: 40px;
  column-gap: 80px;
  margin-left: auto;
  margin-top: 64px;
}
</style>
