<template>
  <div class="about">          
      <div class="back"></div>
     <div class="hero py-16 px-16">
      <h1 data-aos="fade-right" class="mb-2">
       Latar Belakang
      </h1>
      <p data-aos="zoom-in" >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, eligendi ab tempore in officiis rem minima incidunt quod illum ipsam corporis repudiandae optio expedita nostrum nam molestias dignissimos impedit? Ipsa. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur officia sint necessitatibus nisi praesentium iure harum est? Sequi fugiat ducimus porro possimus! Possimus perspiciatis totam, reiciendis eius sint perferendis recusandae!     
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, corporis. Illo veritatis repellendus qui, expedita culpa nam. Officiis labore, at perferendis quasi quod harum quisquam minus quas distinctio? Voluptatem, aliquid. </p>
    </div>
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
  background-image: url("../../assets/bg-about.jpg");
  position: relative;
}

.about::before {
  content: "";
  width: 100%;
  height: 100%;
  background-image: linear-gradient(to bottom, rgba(200, 200, 200, 0), #1c1e1e);
  position: absolute;
  bottom: 0;
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