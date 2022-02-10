<template>
  <div class="about">          
    
    
  </div>
</template>

<style scoped>
.back{  
  position: absolute;
  background-color: #1c1e1e;
  width: 100%;
  height: 100%;
  top: 0px;
  opacity: 20%;
  z-index: 0;
}

.about {
  height: 100vh;
  width: 100%;
  background-color: #161616;
  position: relative;
}


.about .hero {
  position: relative;
  z-index: 2;
  align-content: center;
  width:700px;
}

.hero h1 {
  font-size: 42px;
  font-weight: bold;
  color: white;
  word-spacing: 8px;
  width: 100%;
  display: flex;
}
</style>

<script>
export default {
  name: "about-section2",  
  data() {
     return {
     }
  },
  methods: {
   
  }
};
</script>