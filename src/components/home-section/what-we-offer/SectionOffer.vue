<template>
  <div class="section-offer">
    <div class="title">
      <h1>OUR<br /><b>OFFERS</b></h1>
      <div class="actions flex mt-6 gap-4">
        <div
          class="action circle"
          v-if="!isDestinationHide"
          @click="() => scrollDestination('left')"
          data-aos="fade-up"
        >
          &lt;
        </div>
        <div
          class="action circle"
          v-if="!isDestinationHide"
          @click="() => scrollDestination('right')"
          data-aos="fade-up"
        >
          &gt;
        </div>
      </div>
    </div>
    <div class="container-offer">
      <div class="offer" v-for="(offer, idx) in offers" :key="idx">
        {{ offer.title }}
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
        { title: "Travel Plans" },
        { title: "Travel Plans" },
        { title: "Travel Plans" },
        { title: "Travel Plans" },
      ],
    };
  },
};
</script>

<style scoped>
.section-offer {
  background: #161616;
  padding: 64px 64px;
  display: flex;
  align-items: center;
}

.container-offer {
  display: flex;
  margin: 0 60px;
  gap: 20px;
}

.container-offer .offer {
  height: 400px;
  width: 250px;
  border: 1px solid white;
  border-radius: 4px;
  padding: 8px;
}

h1 {
  font-size: 64px;
  font-weight: bold;
}

h1 b {
  background: rgb(110, 30, 240);
  padding: 0 8px;
  border-radius: 2px;
}
</style>
