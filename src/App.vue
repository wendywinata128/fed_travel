<template>
  <div id="app">
    <navigation-menu />
    <router-view />
    <footer-app />
  </div>
</template>

<script>
import FooterApp from "./components/home-section/footer/FooterApp.vue";
import NavigationMenu from "./components/NavigationMenu.vue";
export default {
  components: { NavigationMenu, FooterApp },
  name: "app",
};
</script>

<style>
* {
  font-family: "Inter", sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  height: 100%;
  width: 100%;
  background: #161619;
  color: white;
  overflow-x: hidden;
  -ms-overflow-style: none;
  scrollbar-width: none;
}

#app::-webkit-scrollbar {
  display: none;
}

body::-webkit-scrollbar {
  display: none;
}

.line {
  height: 26px;
  width: 2px;
  margin-top: 12px;
  background: rgba(255, 255, 255, 0.4);
  position: relative;
}
</style>
