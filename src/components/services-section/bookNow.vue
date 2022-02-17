<template>
  <div class="book-now">
    <div class="container-hero py-20">
      <navigation-menu />
      <div class="hero py-20 px-16">
        <div class="container-word mr-10" data-aos="fade-right"
            data-aos-delay="600">     
            <h3>Jalani Perjalanan Terbaik untuk Anda</h3>
            <p class="mt-5">
            Dengan Dolan Trip Anda dapat membuat rencana perjalanan Anda maupun memilih berbagai trip yang telah disiapkan yang akan membuat memori terindah dalam hidup anda
            </p>   
            <custom-button
            class="mt-8 buttonstyle"
            title="Lihat"
            color="#FF5A5F"/>       
        </div>
        <div class="container-form py-5 px-5"  data-aos="fade-left"  data-aos-delay="600">   
          <form action="">
              <label for=""> Destinasi <span>*</span></label>
              <select name="Destinasi" placeholder="Destinasi">
                <option disabled selected value> Pilih Destinasi </option>
                <option value="Japan">Japan</option>
                <option value="Swiss">Swiss</option>
                <option value="Indonesia">Indonesia</option>              
                <option value="Indonesia">Italy</option>   
              </select>                         
              <div class="form-position">
                <div class="pr-1">
                  <label for=""> Tanggal <span>*</span></label>
                  <input type="date" id="destinasi" name="Tanggal" style="color: gray;" placeholder="Destinasi">       
                </div>
              <div class="pl-1">
                <label for=""> Peserta <span>*</span></label>
                <input type="number" id="destinasi" name="Jumlah" placeholder="Jumlah">       
              </div>              
              </div>
              <label for=""> Jenis Trip <span>*</span></label>
              <div class="grid-container mt-3 mb-3">
              <label class="container">
                <input type="radio" checked="checked" name="radio">Tanpa Tour Guide
                <span class="checkmark"></span>
              </label>
              <label class="container">
                <input type="radio" name="radio">Dengan Tour Guide
                <span class="checkmark"></span>
              </label>
              </div>
              <label for=""> Budget Perjalanan <span>*</span></label>
              <div class="slidecontainer">
                <input type="range" min="500000" max="100000000" value="1000000" class="slider" id="myRange" style="width : 100%;">
                <input type="text" id="demo" name="Destinasi" placeholder="Destinasi">   
               
              </div>
                <custom-button
                style="width:100%"
                class="mt-10"
                title="Lihat Perjalanan Yang Direkomendasikan"
                color="#FF5A5F"/>    
          </form>  
         
           
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

.grid-container {
  display: grid;
  grid-template-columns: auto auto auto;
}

.container {
  display: flex;
  flex-direction: row;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 13px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.container input {
  position: absolute;  
  opacity: 0;
  cursor: pointer;
}

.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  background-color: #eee;
  border-radius: 100%;
}

.container:hover input ~ .checkmark {
  background-color: #ccc;
}

.container input:checked ~ .checkmark {
  background-color: #FF5A5F;
}

.slidecontainer p{
  color: #FF5A5F;
}

.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

.container input:checked ~ .checkmark:after {
  display: block;
}

.container .checkmark:after {
 	top: 4.7px;
	left: 4.7px;
	width: 16px;
	height: 16px;
	border-radius: 50%;
	background: white;
}


input[type="range"]::-webkit-slider-thumb {
  background-color: #FF5A5F;
}

select {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
  border: 2px solid #ccc;
  -webkit-transition: 0.5s;
  transition: 0.5s;
  color: gray;
  border-radius: 4px;
  outline: none;
}


input[type=text] {
  width: 100%;
  padding: 12px 20px;
  color: gray;
  margin: 8px 0;
  box-sizing: border-box;
  border: 2px solid #ccc;
  -webkit-transition: 0.5s;
  transition: 0.5s;
  border-radius: 4px;
  outline: none;
}

input[type=number] {
  width: 100%;
  padding: 12px 20px;
  color: gray;
  margin: 8px 0;
  box-sizing: border-box;
  border: 2px solid #ccc;
  -webkit-transition: 0.5s;
  transition: 0.5s;
  border-radius: 4px;
  outline: none;
}

input[type=date] {
  width: 100%;
  height: 55%;
  padding: 12px 20px;
  margin: 8px 0;
  color: gray;
  box-sizing: border-box;
  border: 2px solid #ccc;
  -webkit-transition: 0.5s;
  transition: 0.5s;
  border-radius: 4px;
  outline: none;
}

.container-form .form-position{
  flex: 5;
  display: flex;
  flex-direction: row;
}

input[type=text]:focus {
  border: 2px solid #FF5A5F;
}

input[type=date]:focus {
  border: 2px solid #FF5A5F;
}

input[type=number]:focus {
  border: 2px solid #FF5A5F;
}

.buttonstyle{
    width: 100px ;
}
.book-now {
  width: 100%;
  height: 100%;
  background: #161616;
  position: relative;
}

.book-now .container-hero {  
  display: flex;
  flex-direction: row;
  background-size: cover;
}

.book-now .container-hero::before {
  width: 100%;
  height: 100%;
  background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0), #000);
  position: absolute;
  bottom: 0;
}

.book-now .hero .container-word {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  text-align: left;
}

.book-now .hero .container-word p {
  color: rgba(255, 255, 255, 0.8);
  width: 600px;
  line-height: 35px;
  text-align: left;
  align-items: left;
}

.book-now .hero .container-form{
  width: 100%;
  font-weight: bold;
  position: relative;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: left;
  text-align: left;
  border-radius: 10px 10px;
}

.book-now .hero .container-form span{
  color: #FF5A5F;
}

.book-now .hero .container-form label{
  color: gray;
}


.hero .container-word h3 {
  font-size: 65px;
  line-height: 80px;
  font-weight: bold;
  color: white;
}


.container-partner {
  height: 30%;
  padding-top: 30px;
  display: flex;
  align-items: left;
  /* background: #000; */
}
</style>

<script>
import NavigationMenu from "../NavigationMenu.vue";
import CustomButton from "../CustomButton.vue";
export default {
  name: "book-now",
  components: { NavigationMenu,CustomButton},
  data() {
    return {};
  },
  methods: {},mounted(){
    var slider = document.getElementById("myRange");
    var output = document.getElementById("demo");
    var temp = slider.value.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
    output.value= "Rp. " + temp;
    slider.oninput = function() {
    output.value = "Rp. " + this.value.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
}
  }
};
</script>
