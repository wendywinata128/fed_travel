<template>
  <div class="section-recom-dest">
    <div class="hero flex">
      <div class="detail">
        <span>Recomended Destination</span>
        <h1>INDONESIA</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus amet
          ac iaculis sit vestibulum interdum vel euismod. Condimentum lacus,
          suspendisse eu eget.
        </p>
        <custom-button
          class="mt-4"
          title="View More"
          color="rgb(110, 30, 240)"
        />
      </div>
      <div class="container-section">
        <div class="container-destination">
          <div
            v-for="destination in destinations"
            :key="destination.id"
            class="destination"
            :style="{
              backgroundImage: destination.background,
            }"
          >
            <div class="detail-destination w-full">
              <h4 class="text-xl font-bold">{{ destination.name }}</h4>
              <div class="price flex gap-4 items-center">
                <title-value title="Duration" :value="destination.duration" />
                <div class="line"></div>
                <title-value title="From" :value="destination.price" />
              </div>
            </div>
          </div>
        </div>
        <div class="actions flex mt-6 gap-4">
          <div class="action circle" @click="() => scrollDestination('left')">
            &lt;
          </div>
          <div class="action circle" @click="() => scrollDestination('right')">
            &gt;
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CustomButton from "../CustomButton.vue";
import TitleValue from "../TitleValue.vue";
export default {
  components: { TitleValue, CustomButton },
  name: "",
  data() {
    return {
      clickRange: 0,
      destinations: [
        {
          name: "Swiss",
          duration: "15 Days",
          price: "Rp 10,000,000",
          background: `url(${require("@/assets/recomended-destination/swiss.png")})`,
        },
        {
          name: "Italy",
          duration: "15 Days",
          price: "Rp 15,000,000",
          background: `url(${require("@/assets/recomended-destination/italy.png")}`,
        },
        {
          name: "Japan",
          duration: "12 Days",
          price: "Rp 18,000,000",
          background: `url(${require("@/assets/recomended-destination/italy.png")}`,
        },
        {
          name: "Japan",
          duration: "12 Days",
          price: "Rp 18,000,000",
          background: `url(${require("@/assets/recomended-destination/italy.png")}`,
        },
        {
          name: "Japan",
          duration: "12 Days",
          price: "Rp 18,000,000",
          background: `url(${require("@/assets/recomended-destination/italy.png")}`,
        },
      ],
    };
  },
  methods: {
    scrollDestination(direction) {
      document.querySelector(".container-destination").scrollLeft +=
        direction == "right" ? 500 : -500;
    },
  },
};
</script>

<style `scoped>
.section-recom-dest {
  height: 100vh;
  background: url("../../assets/bg-home-section2.png");
  display: flex;
  align-items: center;
  position: relative;
}

.section-recom-dest::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to bottom, rgba(255, 255, 255, 0), #000);
  z-index: 0;
}

.hero {
  z-index: 2;
  padding: 0 64px;
}

.hero .detail {
  flex: 1;
}

.hero .container-section {
  flex: 1;
}

.hero .detail h1 {
  font-size: 64px;
  font-weight: bold;
}

.hero .detail p {
  text-align: justify;
  margin-bottom: 16px;
}

.hero .detail button {
  text-align: left;
}

.hero .container-destination {
  display: flex;
  gap: 30px;
  padding-left: 20px;
  scroll-behavior: smooth;
  overflow: hidden;
  width: 100%;
}

.hero .container-destination .destination {
  flex-basis: 250px;
  overflow: hidden;
  height: 340px;
  background-size: cover;
  flex-shrink: 0;
  border-radius: 4px;
  overflow: hidden;
  position: relative;
  display: flex;
  align-items: flex-end;
  padding: 16px;
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.35);
  word-break: break-all;
}

.hero .container-destination .destination::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0),
    rgba(0, 0, 0, 0.8)
  );
  z-index: 0;
}

.hero .container-destination .detail-destination {
  z-index: 2;
}

.hero .container-section .actions {
  padding-left: 20px;
}

.action.circle {
  width: 40px;
  height: 40px;
  border: 1px solid white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: 0.4s ease;
}

.action.circle:hover {
  background: black;
  border: 1px solid black;
}
</style>
