<template>
  <div class="section-offer">
    <div class="container-img">
      <img src="@/assets/offer/person-paddle.jpg" alt="person with paddle" />
    </div>
    <div class="container-details">
      <h1>Santai, Tinggal Pergi</h1>
      <p>
        Dengan menggunakan Dolan Travel, Anda bisa traveling tanpa pusing
        memikirkan apapun, karna kami telah menyiapkan segalanya untuk Anda
      </p>
      <div class="container-offer">
        <div
          class="offer"
          v-for="(offer, idx) in offers"
          :key="idx"
          @click="offerClicked"
          :class="[idx == 0 ? 'selected' : '']"
        >
          <div class="header">
            <h1>{{ offer.title }}</h1>
            <i class="fas fa-chevron-right"></i>
          </div>
          <p>{{ offer.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "section-offer",
  data() {
    return {
      offers: [
        {
          title: "Travel Plans",
          description:
            "Kami akan menyediakan rencana perjalanan Anda, serta memberikan waktu bebas untuk menikmati wisata di tempat liburan.",
        },
        {
          title: "Akomodasi",
          description:
            "Kami menyediakan rencana perjalanan anda secara lengkap, mulai dari tiket pesawat, tiket wisata, hingga tempat penginapan selama perjalanan",
        },
        {
          title: "Proteksi Perjalanan",
          description:
            "Tidak hanya memberikan kenyamanan selama liburan, kami juga memberikan proteksi dalam bentuk asuransi hingga protokol ketat terhadap pandemi. ",
        },
      ],
    };
  },
  methods: {
    offerClicked(e) {
      e.target.classList.toggle("selected");
    },
  },
};
</script>

<style scoped>
.section-offer {
  background: #161616;
  padding: 64px 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  gap: 120px;
}

.container-img {
  position: relative;
}

.container-img::before {
  content: "";
  position: absolute;
  width: 400px;
  height: 400px;
  left: calc(50% - 200px);
  margin: 0 auto;
  border: 3px solid #febb02;
  transform: translate(25px, -25px);
}

img {
  width: 400px;
  height: 400px;
  object-fit: cover;
  position: relative;
  z-index: 2;
  margin: 0 auto;
}

.container-details {
  width: 500px;
}

.container-details > h1 {
  font-size: 48px;
  font-weight: bold;
  margin-bottom: 4px;
}

.container-details > p {
  color: rgba(255, 255, 255, 0.7);
  font-size: 14px;
  margin-bottom: 32px;
}

.container-offer {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.offer {
  border-bottom: 1px solid white;
  padding: 24px 16px;
  transition: 0.4s linear;
  border-left: 0px solid #febb02;
}

.offer > * {
  pointer-events: none;
}

.offer:hover,
.offer.selected {
  border-left: 5px solid #febb02;
  cursor: pointer;
  background: #4a4a4f;
  border-radius: 2px;
  border-bottom: 0px;
}

.offer .header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: bold;
}

.offer .header h1 {
  font-size: 18px;
}

.offer p {
  height: 0;
  overflow: hidden;
  margin-top: 0px;
  transition: 0.4s linear;
}

.offer.selected p {
  height: 80px;
  margin-top: 8px;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.7);
}
</style>
