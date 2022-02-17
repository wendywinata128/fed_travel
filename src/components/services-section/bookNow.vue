<template>
  <div class="book-now">
    <div class="container-hero py-20">
      <navigation-menu />
      <div class="hero py-20 px-16">
        <div class="container-word mr-10"   data-aos="fade-right"
            data-aos-delay="600">     
            <h1>Jalani Perjalanan Terbaik untuk Anda</h1>
            <p>
            Dengan Dolan Trip Anda dapat membuat rencana perjalanan Anda maupun memilih berbagai trip yang telah disiapkan yang akan membuat memori terindah dalam hidup anda
            </p>   
            <custom-button
            class="mt-10 buttonstyle"
            title="Lihat"
            color="#FF5A5F"/>       
        </div>
        <div class="container-form py-5 px-5">   
          <form action="">
              <h6>Destinasi <span>*</span></h6>
               <div>
              <label for="price" class="block text-sm font-medium text-gray-700">Price</label>
              <div class="mt-1 relative rounded-md shadow-sm">
                <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span class="text-gray-500 sm:text-sm"> $ </span>
                </div>
                <input type="text" name="price" id="price" class="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md" placeholder="0.00">
                <div class="absolute inset-y-0 right-0 flex items-center">
                  <label for="currency" class="sr-only">Currency</label>
                  <select id="currency" name="currency" class="focus:ring-indigo-500 focus:border-indigo-500 h-full py-0 pl-2 pr-7 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-md">
                    <option>USD</option>
                    <option>CAD</option>
                    <option>EUR</option>
                  </select>
                </div>
              </div>
            </div>
          </form>  
         
           
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
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
  text-align: left;
  align-items: left;
}

.book-now .hero .container-form{
  width: 100%;
  font-weight: bold;
  color: gray;
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



.hero .container-word h1 {
  font-size: 65px;
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
  methods: {},
};
</script>
