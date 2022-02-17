<template>
  <div class="recom-trip">
    <div class="header">
      <h1>Trip Pilihan Untuk Anda</h1>
    </div>
    <div class="container-card">
      <div
        class="card-trip"
        v-for="(trip, idx) in tripData"
        :key="idx"
        :style="{
          backgroundImage: trip.image,
        }"
      >
        <div class="card-header">
          <h2>{{ trip.name }}</h2>
          <i class="fas fa-long-arrow-alt-right text-2xl"></i>
        </div>
        <div class="card-body">
          <div class="packet">{{ `${trip.packet} Paket Tersedia` }}</div>
          <div class="start-price">{{ `Mulai dari ${trip.startPrice}` }}</div>
        </div>
      </div>
    </div>
    <custom-button
      :title="'Lihat Lebih Banyak'"
      color="#FF5A5F"
      class="btn-look-more"
    />
  </div>
</template>

<script>
import CustomButton from "../CustomButton.vue";
export default {
  components: { CustomButton },
  name: "recom-trip",
  data() {
    return {
      tripData: [
        {
          name: "Swiss",
          packet: "3",
          startPrice: "Rp 10.000.000",
          image: `url(${require("@/assets/recomended-destination/swiss.png")})`,
        },
        {
          name: "Indonesia",
          packet: "4",
          startPrice: "Rp 8.000.000",
          image: `url(${require("@/assets/recomended-destination/indonesia.jpg")})`,
        },
        {
          name: "Italy",
          packet: "7",
          startPrice: "Rp 17.000.000",
          image: `url(${require("@/assets/recomended-destination/italy.png")})`,
        },
        {
          name: "Swiss",
          packet: "3",
          startPrice: "Rp 10.000.000",
          image: `url(${require("@/assets/recomended-destination/swiss.png")})`,
        },
        {
          name: "Indonesia",
          packet: "4",
          startPrice: "Rp 8.000.000",
          image: `url(${require("@/assets/recomended-destination/indonesia.jpg")})`,
        },
        {
          name: "Italy",
          packet: "7",
          startPrice: "Rp 17.000.000",
          image: `url(${require("@/assets/recomended-destination/italy.png")})`,
        },
      ],
    };
  },
};
</script>

<style scoped>
.recom-trip {
  padding: 32px 64px;
}

.header {
  margin-bottom: 32px;
}

h1 {
  font-size: 32px;
  font-weight: bold;
}

.container-card {
  display: grid;
  grid-template-columns: auto auto auto;
  gap: 40px;
}

.card-trip {
  height: 400px;
  background-size: cover;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 16px 24px;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.75);
}

.card-trip > * {
  z-index: 2;
}

.card-trip::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: linear-gradient(
    to bottom,
    rgba(15, 15, 15, 0),
    rgba(15, 15, 15, 0.7)
  );
  z-index: 0;
}

.card-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 0 16px 0;
}

.card-trip h2 {
  font-size: 24px;
  font-weight: bold;
}

.card-body {
  border-top: 1px solid white;
  padding: 16px 0 0 0;
  display: flex;
  justify-content: space-between;
}

.start-price {
  color: #fa7579;
}

.btn-look-more {
  display: block;
  margin: 0 auto;
  width: fit-content;
  margin-top: 32px;
}
</style>
