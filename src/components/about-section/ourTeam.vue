<template>     
     <div class="about-section">     
      <div class="container-hero">     
        <navigation-menu/>
        <div class="center" >
          <div class="hero py-10 px-16">        
              <h1 class="left">Our</h1>          
              <h1 class="right">Team</h1>
          </div>
        </div>     
        <div class="center" >
          <div class="hero py-10 px-16">        
           <img src="../../assets/Team-one" alt="">
          </div>
        </div>              
      </div>
  
  </div>
</template>

<style scoped>

.about-section {
  width: 100%;
  height: 100%;
  background: #161616;
  position: relative;
}

.container-hero .center{
  position: relative;
  display: flex;
  flex-direction: column;  
  align-items: center;
}

.about-section .container-hero {
  position: relative;
  display: flex;
  flex-direction: column;
}

.about-section .hero {
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;  
  width: 800px;
}
.about-section .hero .left{
  align-items: left;
  text-align: left;
}

.about-section .hero .right{
  align-items: right;
  text-align: right;
}

.about-section .hero p {
  color: rgba(255, 255, 255, 0.8);
  width: 600px;
  text-align: center;
}

.hero h1 {
  font-size: 150px;
  font-weight: bold;
  color: white;
  word-spacing: 8px;
}

.hero h1 div {
  overflow: hidden;
  transition: 1s cubic-bezier(0.39, 0.575, 0.565, 1);
  width: fit-content;
  margin: 0 auto;
  position: relative;
  color: rgb(250, 136, 28);
  text-shadow: 0px 0px 8px rgba(250, 136, 28, 0.25);
}

.hero h1 div.hide {
  opacity: 0%;
  transform: translateY(-50%);
}

.container-partner {
  height: 30%;
  padding-top: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  /* background: #000; */
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