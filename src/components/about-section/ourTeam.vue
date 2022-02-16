<template>
  <div class="about-section">
    <div class="container-hero">
      <navigation-menu />
      <div class="center">
        <div class="hero py-10 px-16">
          <h1 class="left">Our&nbsp;</h1>
          <h1 class="right">Team</h1>
        </div>
      </div>    
        <div class="ourteam pb-10">     
          <div class="container">
            <div class="card-profile wrap" data-aos="zoom-in">
                <img class="image" src="../../assets/team-one.jpg" />
                <div class="overlay">
                    <p class="text">William</p>             
                </div>                 
            </div>
            <div class="card-profile wrap" data-aos="zoom-in">
                <img class="image" src="../../assets/team-three.jpg" />
                <div class="overlay">
                    <p class="text">Orza</p>             
                </div>                 
            </div>
             <div class="card-profile wrap" data-aos="zoom-in">
                <img class="image" src="../../assets/team-two.jpg" />
                <div class="overlay">
                    <p class="text">Wendy</p>             
                </div>                 
            </div>
          </div>
        </div>
      </div>
    </div>  
</template>

<style scoped>
.text {
  color: white;
  font-size: 100px;
  font-weight: bold;
  opacity: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  text-align: center;
}

.overlay {
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  z-index: 1;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: #161616;
  visibility: hidden;
  opacity: 0%; 
}

.wrap:hover .overlay {
  visibility: visible;
  opacity: 60%;
}

.container {
  display: flex;
  width: 100%;
  padding: 0% 2%;
  box-sizing: border-box;
  height: 80vh;
}

.card-profile img {
  z-index: 0;
}

.card-profile span {
  z-index: 1;
}

.card-profile {
  border-radius: 20px 20px;
  flex: 2;
  overflow: hidden;
  transition: 0.5;
  margin: 0 2%;
  box-shadow: 0 1.25rem 1.875rem rgba(0, 0, 0, 0.2);
  line-height: 0;
}

.card-profile > img {
  width: 100%;
  height: 80vh;
  object-fit: cover;
  transition: 0.5s;
}

.card-profile > span {
  font-size: 3vh;
  display: block;
  text-align: center;
  height: 5vh;
  line-height: 3.3;
  color: #fff;
  font-weight: bold;
}

.card-profile:hover {
  flex: 1 1 30%;
}

.card-profile:hover > img {
  width: 100%;
  height: 100%;
  opacity: 50%;
  transition: 1s;
}

.about-section {
  width: 100%;
  height: 100%;
  background: #161616;
  position: relative;
  overflow: hidden;
}

.container-hero .center {
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

.about-section .container-hero .hero .right {
  color: #febb02;
}

.about-section .container-hero .hero {
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: row;
  width: 800px;
}
.about-section .hero .left {
  align-items: left;
  text-align: left;
}

.about-section .container-hero .ourteam {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.about-section .hero .right {
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
    return {};
  },
  methods: {},
};
</script>
