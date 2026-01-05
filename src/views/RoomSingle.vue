<script setup>
import { ref, onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const room = ref(null);

const fetchRoom = async (slug) => {
  try {
    const res = await fetch(`http://localhost:5000/api/rooms/${slug}`);
    const data = await res.json();
    room.value = data;
  } catch (err) {
    console.error(err);
  }
};

onMounted(() => {
  fetchRoom(route.params.slug);
});

watch(() => route.params.slug, (newSlug) => {
  fetchRoom(newSlug);
});
</script>

<template>
  <div v-if="room">
    <div class="hero-wrap" style="background-image: url('/images/bg_3.jpg');">
      <div class="overlay"></div>
      <div class="container">
        <div class="row no-gutters slider-text d-flex align-itemd-center justify-content-center">
          <div class="col-md-9 ftco-animate text-center d-flex align-items-end justify-content-center">
            <div class="text">
              <p class="breadcrumbs mb-2">
                <span class="mr-2"><router-link to="/">Home</router-link></span>
                <span class="mr-2"><router-link to="/rooms">Rooms</router-link></span>
                <span>{{ room.name }}</span>
              </p>
              <h1 class="mb-4 bread">Room Details</h1>
            </div>
          </div>
        </div>
      </div>
    </div>

    <section class="ftco-section">
      <div class="container">
        <div class="row">
          <div class="col-lg-8">
            <div class="row">
              <div class="col-md-12 ftco-animate">
                <div class="single-slider owl-carousel">
                  <div class="item">
                    <div class="room-img" :style="{backgroundImage: `url('${room.image_url}')`}"></div>
                  </div>
                </div>
              </div>
              <div class="col-md-12 room-single mt-4 mb-5 ftco-animate">
                <h2 class="mb-4">{{ room.name }} <span>- ({{ room.available_quantity }} Available rooms)</span></h2>
                <p>When she reached the first hills of the Italic Mountains...</p>
                <div class="d-md-flex mt-5 mb-5">
                  <ul class="list">
                    <li><span>Max:</span> {{ room.max_adults }} Persons</li>
                    <li><span>Size:</span> {{ room.size }}</li>
                  </ul>
                  <ul class="list ml-md-5">
                    <li><span>View:</span> {{ room.view_type }}</li>
                    <li><span>Bed:</span> {{ room.bed_count }}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <!-- Sidebar omitted for brevity -->
        </div>
      </div>
    </section>
  </div>
  <div v-else class="text-center p-5">Loading...</div>
</template>