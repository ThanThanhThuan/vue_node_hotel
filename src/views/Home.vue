<script setup>
import { ref, onMounted } from 'vue';
import BookingForm from '../components/BookingForm.vue';

const featuredRooms = ref([]);

onMounted(() => {
  fetch('http://localhost:5000/api/rooms')
    .then(res => res.json())
    .then(data => featuredRooms.value = data);
});
</script>

<template>
  <div class="hero">
    <section class="home-slider owl-carousel">
      <div class="slider-item" style="background-image: url('/images/bg_1.jpg');">
        <div class="overlay"></div>
        <div class="container">
          <div class="row no-gutters slider-text align-items-center justify-content-end">
            <div class="col-md-6 ftco-animate">
              <div class="text">
                <h2>More than a hotel... an experience</h2>
                <h1 class="mb-3">Hotel for the whole family, all year round.</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="slider-item" style="background-image: url('/images/bg_2.jpg');">
        <div class="overlay"></div>
        <div class="container">
          <div class="row no-gutters slider-text align-items-center justify-content-end">
            <div class="col-md-6 ftco-animate">
              <div class="text">
                <h2>Harbor Lights Hotel &amp; Resort</h2>
                <h1 class="mb-3">It feels like staying in your own home.</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>

  <section class="ftco-booking ftco-section ftco-no-pt ftco-no-pb">
    <div class="container">
      <div class="row no-gutters">
        <div class="col-lg-12">
          <BookingForm />
        </div>
      </div>
    </div>
  </section>

  <!-- Featured Rooms -->
  <section class="ftco-section ftco-no-pb ftco-room">
    <div class="container-fluid px-0">
      <div class="row no-gutters justify-content-center mb-5 pb-3">
        <div class="col-md-7 heading-section text-center ftco-animate">
          <span class="subheading">Harbor Lights Rooms</span>
          <h2 class="mb-4">Hotel Master's Rooms</h2>
        </div>
      </div>
      <div class="row no-gutters">
        <div v-for="(room, index) in featuredRooms" :key="room.id" class="col-lg-6">
          <div class="room-wrap d-md-flex ftco-animate">
            <a href="#" class="img" :class="{'order-md-last': index % 2 !== 0}" :style="{backgroundImage: `url('${room.image_url}')`}"></a>
            <div class="half d-flex align-items-center" :class="index % 2 !== 0 ? 'right-arrow' : 'left-arrow'">
              <div class="text p-4 text-center">
                <p class="star mb-0"><span class="ion-ios-star"></span><span class="ion-ios-star"></span><span class="ion-ios-star"></span><span class="ion-ios-star"></span><span class="ion-ios-star"></span></p>
                <p class="mb-0"><span class="price mr-1">${{ room.price }}</span> <span class="per">per night</span></p>
                <h3 class="mb-3"><router-link :to="`/rooms/${room.slug}`">{{ room.name }}</router-link></h3>
                <p class="pt-1"><router-link :to="`/rooms/${room.slug}`" class="btn-custom px-3 py-2 rounded">View Details <span class="icon-long-arrow-right"></span></router-link></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>