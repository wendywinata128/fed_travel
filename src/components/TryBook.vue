<template>
  <div class="try-book">
    <div class="input-group">
      <div class="title">Lokasi</div>
      <select name="Destinasi" placeholder="Destinasi">
        <option value="Japan">Japan</option>
        <option value="Swiss">Swiss</option>
        <option value="Indonesia">Indonesia</option>
        <option value="Indonesia">Italy</option>
      </select>
    </div>
    <div class="input-group">
      <div class="title">Tanggal</div>
      <input type="date" placeholder="Pilih Tanggal" />
    </div>
    <div class="input-group">
      <div class="title">Budget Pergi</div>
      <input type="number" placeholder="Masukan Budget Pergi" />
    </div>
    <div class="action">
      <custom-button
        title="Booking Sekarang"
        color="#FF5A5F"
        class="btn-booking"
      />
    </div>
  </div>
</template>

<script>
import CustomButton from "./CustomButton.vue";
export default {
  components: { CustomButton },
  name: "",
};
</script>

<style scoped>
.try-book {
  width: 1000px;
  height: 90px;
  z-index: 2;
  bottom: 0;
  left: 50%;
  position: absolute;
  background: white;
  margin-left: auto;
  margin-right: auto;
  margin-top: auto;
  border-radius: 8px;
  transform: translate(-50%, 50%);
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 1);
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  color: black;
  padding: 0 24px;
}

.try-book > * {
  flex: 2;
}

input,
select {
  border: 0;
  outline: none;
  color: rgb(4, 4, 121);
  padding: 0;
  margin: 0;
}

select {
  margin-left: -4px;
}

input:focus,
select:focus {
  outline: none;
}

.action {
  flex: none;
}

.btn-booking {
  color: white;
  border-radius: 4px;
  width: fit-content;
  margin: 0 auto;
}
</style>
