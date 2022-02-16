<template>
  <div class="section-testimonial">
    <h2>Testimoni</h2>
    <h1>Apa <b>Kata</b> Mereka</h1>
    <div class="content">
      <div class="container-images" data-aos="fade-right">
        <div class="img-1">
          <img src="@/assets/testimonial/person-1.jpg" alt="" />
        </div>
        <div class="img-2">
          <img src="@/assets/testimonial/person-2.jpg" alt="" />
        </div>
      </div>
      <div class="container-details">
        <p class="quote" data-aos="fade-left">
          “Pergi menggunakan Dolan Travel emang memberikan pengalaman yang
          terbaik. Kita gaperlu pusing-pusing membuat plan holiday semuanya
          sudah terjamin asik. Dan pastinya kita bisa sesuaikan budget yang kita
          miliki”
        </p>
        <h3 class="name" data-aos="fade-up">Diana Russel</h3>
        <div class="job" data-aos="fade-up">Mahasiswa</div>

        <div class="actions flex items-center gap-4" data-aos="fade-in">
          <div class="action">
            <i class="fas fa-chevron-left"></i>
          </div>
          <div class="action">
            <i class="fas fa-chevron-right"></i>
          </div>

          <div>1/8</div>

          <div class="line-progress"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "section-testimonial",
};
</script>

<style scoped>
.section-testimonial {
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px 0;
}

h2 {
  font-size: 24px;
}

h1 {
  font-size: 48px;
  font-weight: bold;
  position: relative;
  padding-bottom: 8px;
}

h1::before {
  content: "";
  position: absolute;
  height: 4px;
  width: 40%;
  background: #febb02;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
}

h1 b {
  color: #febb02;
}

.content {
  display: flex;
  gap: 20px;
  margin: 30px 0;
  height: 100%;
  width: 100%;
}

.content .container-details {
  flex: 1;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-basis: 50%;
}

.content .container-images {
  flex: 1;
  flex-basis: 50%;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.container-images .img-1 {
  width: 300px;
  height: 400px;
  background: whitesmoke;
  position: absolute;
  transform: scale(0.8) translateX(-30%);
  overflow: hidden;
  position: relative;
}

.container-images .img-1::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.45);
}
.container-images .img-2 {
  width: 300px;
  height: 400px;
  background: gray;
  position: absolute;
  transform: scale(1) translateX(50%);
  overflow: hidden;
}

img {
  object-fit: cover;
  width: 100%;
  height: 100%;
}

.container-details .quote {
  font-size: 24px;
  width: 600px;
  margin-bottom: 24px;
}

.container-details .name {
  font-weight: 500;
}

.container-details .job {
  color: rgba(255, 255, 255, 0.7);
  font-size: 14px;
  margin-bottom: 24px;
}

.actions {
  color: rgba(255, 255, 255, 0.7);
}

.line-progress {
  height: 2px;
  background: rgba(255, 255, 255, 0.7);
  width: 300px;
}

.action:hover {
  color: rgba(255, 255, 255, 1);
  cursor: pointer;
}
</style>
