<template>
  <div class="nav-menu py-4 px-16 flex justify-between items-center w-full">
    <h1 class="py-4 logo text-xl font-semi"><router-link to="/">DolanTravel.</router-link></h1>
    <ul class="flex gap-8">
      <li>Our Services</li>
     <li> <router-link to="/about">About Us</router-link></li>
      <li class="special">Book Now</li>
    </ul>
  </div>
</template>

<style scoped>
.nav-menu {
  position: relative;
  z-index: 2;
}

li {
  padding: 4px 16px;
}
li.special {
  background: rgb(110, 30, 240);
  border-radius: 20px;
}
</style>

<script>
export default {
  name: "navigation",
};
</script>
