<template>
  <div
    class="destination"
    :style="{
      backgroundImage: destination.background,
    }"
  >
    <div class="detail-destination w-full">
      <div class="flex justify-between items-center">
        <h4 class="text-xl font-bold">{{ destination.name }}</h4>
        <div class="circle-play" @click="setItemClicked">
          <i class="fas fa-play"></i>
        </div>
      </div>
      <div class="price flex gap-4 items-center">
        <title-value title="Duration" :value="destination.duration" />
        <div class="line"></div>
        <title-value title="From" :value="destination.price" />
      </div>
    </div>
  </div>
</template>

<script>
import TitleValue from "../../TitleValue.vue";
export default {
  components: { TitleValue },
  name: "destination-item",
  props: ["destination", "onClickItem"],
  methods: {
    setItemClicked() {
      this.onClickItem(this.destination);
    },
  },
};
</script>

<style scoped>
.destination {
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
  transition: 1s ease;
}

.destination::before {
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
  transition: 1s ease;
}

.destination:hover:before {
  /* background: rgba(0, 0, 0, 0.6); */
}

.detail-destination {
  z-index: 2;
}

.circle-play {
  width: 64px;
  height: 64px;
  border-radius: 32px;
  border: 1px solid white;
  opacity: 0%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
}

.circle-play .fa-play {
  transform: scale(0);
  transition: 0.8s cubic-bezier(0.075, 0.82, 0.165, 1);
  transition-delay: 0.6s;
  font-size: 32px;
}

.circle-play.moving {
  position: absolute;
  animation: circleOpenAnimation 0.6s linear forwards;
  cursor: pointer;
}

.circle-play.moving .fa-play {
  transform: scale(1) translateX(2px);
}

@keyframes circleOpenAnimation {
  0% {
    transform: scale(5);
    opacity: 0%;
  }

  100% {
    transform: scale(1);
    opacity: 100%;
  }
}
</style>
