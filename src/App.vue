<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
* {
  font-family: "Inter", sans-serif;
  margin: 0;
  padding: 0;
}
#app {
  height: 100%;
  width: 100%;
  background: black;
  color: white;
}

.line {
  height: 26px;
  width: 2px;
  margin-top: 12px;
  background: rgba(255, 255, 255, 0.4);
  position: relative;
}
</style>
