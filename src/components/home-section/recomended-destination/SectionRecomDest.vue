<template>
  <div
    class="section-recom-dest"
    :style="{
      backgroundImage: destinationChoosen.backgroundBigger,
    }"
  >
    <div
      class="new-photo"
      v-if="isChangingPicture"
      :style="{
        backgroundImage: destinationChanging.backgroundBigger,
      }"
    ></div>
    <div class="hero">
      <div class="detail">
        <div v-if="!isChangingText">
          <div data-aos="fade-right">Rekomendasi Destinasi</div>
          <h1 data-aos="fade-right" data-aos-delay="200">
            {{ destinationChanging.name }}
          </h1>
          <p data-aos="fade-right" data-aos-delay="400">
            Nikmati keindahan alam {{ destinationChanging.name }} yang tidak
            akan pernah anda lupakan seumur hidup, selalu teringat dibenak anda,
            dan selalu layak untuk menjadi cerita anda.
          </p>
          <custom-button
            class="mt-4"
            title="Lihat Lebih Banyak"
            color="#FF5A5F"
            data-aos="fade-right"
            data-aos-delay="600"
          />
        </div>
      </div>
      <div class="container-section">
        <div class="container-destination">
          <destination-item
            v-for="destination in destinations"
            :key="destination.id"
            :destination="destination"
            :onClickItem="changePicture"
          />
        </div>
        <div class="actions flex mt-6 gap-4">
          <div
            class="action circle"
            @click="() => scrollDestination('left')"
            data-aos="fade-up"
          >
            <i class="fas fa-chevron-left"></i>
          </div>
          <div
            class="action circle"
            @click="() => scrollDestination('right')"
            data-aos="fade-up"
          >
            <i class="fas fa-chevron-right"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CustomButton from "../../CustomButton.vue";
import DestinationItem from "./DestinationItem.vue";

export default {
  components: { CustomButton, DestinationItem },
  name: "",
  data() {
    return {
      clickRange: 0,
      isChangingPicture: false,
      isChangingText: false,
      isDestinationHide: false,
      destinationChanging: {
        name: "Indonesia",
        duration: "8 Days",
        price: "Rp 1,000,000",
        background: `url(${require("@/assets/recomended-destination/indonesia.jpg")})`,
        backgroundBigger: `url(${require("@/assets/bg-home-section2.png")})`,
      },
      destinationChoosen: {
        name: "Indonesia",
        duration: "8 Days",
        price: "Rp 1,000,000",
        background: `url(${require("@/assets/recomended-destination/indonesia.jpg")})`,
        backgroundBigger: `url(${require("@/assets/bg-home-section2.png")})`,
      },
      destinations: [
        {
          name: "Swiss",
          duration: "15 Days",
          price: "Rp 10,000,000",
          background: `url(${require("@/assets/recomended-destination/swiss.png")})`,
          backgroundBigger: `url(${require("@/assets/recomended-destination/swiss2.jpg")})`,
        },
        {
          name: "Indonesia",
          duration: "8 Days",
          price: "Rp 1,000,000",
          background: `url(${require("@/assets/recomended-destination/indonesia.jpg")})`,
          backgroundBigger: `url(${require("@/assets/bg-home-section2.png")})`,
        },
        {
          name: "Italy",
          duration: "15 Days",
          price: "Rp 15,000,000",
          background: `url(${require("@/assets/recomended-destination/italy.png")}`,
          backgroundBigger: `url(${require("@/assets/recomended-destination/italy2.jpg")}`,
        },
        {
          name: "Swiss",
          duration: "15 Days",
          price: "Rp 10,000,000",
          background: `url(${require("@/assets/recomended-destination/swiss.png")})`,
          backgroundBigger: `url(${require("@/assets/recomended-destination/swiss2.jpg")})`,
        },
        {
          name: "Indonesia",
          duration: "8 Days",
          price: "Rp 1,000,000",
          background: `url(${require("@/assets/recomended-destination/indonesia.jpg")})`,
          backgroundBigger: `url(${require("@/assets/bg-home-section2.png")})`,
        },
        {
          name: "Italy",
          duration: "15 Days",
          price: "Rp 15,000,000",
          background: `url(${require("@/assets/recomended-destination/italy.png")}`,
          backgroundBigger: `url(${require("@/assets/recomended-destination/italy2.jpg")}`,
        },
      ],
    };
  },
  methods: {
    scrollDestination(direction) {
      document.querySelector(".container-destination").scrollLeft +=
        direction == "right" ? 500 : -500;
    },
    changePicture(destination) {
      this.destinationChanging = destination;
      this.isChangingText = true;
      this.isChangingPicture = true;
      this.toggleDestination();

      setTimeout(() => {
        this.isChangingText = false;
      }, 600);

      setTimeout(() => {
        this.destinationChoosen = destination;
        this.isChangingPicture = false;
      }, 1700);
    },
    toggleDestination() {
      this.isDestinationHide = !this.isDestinationHide;
    },
  },
  mounted() {
    const circles = document.querySelectorAll(".circle-play");
    const destinationEl = document.querySelectorAll(".destination");

    circles.forEach((circle, idx) => {
      destinationEl[idx].addEventListener("mouseenter", () => {
        circle.classList.add("moving");
      });

      destinationEl[idx].addEventListener("mouseleave", () => {
        circle.classList.remove("moving");
      });

      destinationEl[idx].addEventListener("mousemove", (e) => {
        circle.style.top = `${
          e.clientY - destinationEl[idx].getBoundingClientRect().top - 32
        }px`;
        circle.style.left = `${
          e.clientX - destinationEl[idx].getBoundingClientRect().left - 32
        }px`;
      });
    });
  },
};
</script>

<style `scoped>
.section-recom-dest {
  height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  background-size: cover;
  background-position: center;
}

.section-recom-dest::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to bottom, rgba(255, 255, 255, 0), #000);
  z-index: 1;
}

.hero {
  z-index: 2;
  margin: 0 64px;
  display: flex;
}

.hero .detail {
  flex-basis: 50%;
  flex-grow: 0;
}

.hero .container-section {
  flex-basis: 50%;
  flex-grow: 0;
  overflow: hidden;
  /* background: red; */
  position: relative;
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
  padding: 5px 0;
  scroll-behavior: smooth;
  gap: 30px;
  padding: 0 10px;
  margin-left: 10px;
  overflow: hidden;
  transform: translateX(0%);
  transition: 1s ease;
  position: relative;
}

.hero .container-destination.hide {
  transform: translateX(100%);
}

.hero .container-destination.hide .action {
  transform: rotate(90deg);
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

.new-photo {
  position: absolute;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  animation: change-photo-anim 1.5s cubic-bezier(0.175, 0.23, 0.32, 1.275)
    forwards;
}

@keyframes change-photo-anim {
  0% {
    transform: scale(0);
    opacity: 0;
  }

  100% {
    transform: scale(1);
    z-index: 0;
    opacity: 1;
  }
}

.highlight-destination {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 50px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  align-content: center;
  padding: 0px 20px;
  gap: 30px;
}

.video {
  height: 140px;
  width: 100%;
  background: black;
  border-radius: 4px;
  overflow: hidden;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.35);
  transition: 1s ease;
}

.video.hide {
  transform: scale(0);
}
</style>
