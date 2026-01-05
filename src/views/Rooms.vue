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
     <div className="hero-wrap" style="background-image: url('/images/bg_3.jpg');">
                <div className="overlay"></div>
                <div className="container">
                    <div className="row no-gutters slider-text d-flex align-itemd-center justify-content-center">
                        <div className="col-md-9 ftco-animate text-center d-flex align-items-end justify-content-center">
                            <div className="text">
                                <p className="breadcrumbs mb-2"><span className="mr-2"><Link to="/">Home</Link></span> <span>Rooms</span></p>
                                <h1 className="mb-4 bread">Rooms</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className="ftco-section ftco-no-pb ftco-room">
                <div className="container-fluid px-0">
                    <div className="row no-gutters justify-content-center mb-5 pb-3">
                        <div className="col-md-7 heading-section text-center ftco-animate">
                            <span className="subheading">Harbor Lights Rooms</span>
                            <h2 className="mb-4">Hotel Master's Rooms</h2>
                        </div>
                    </div>
                    <div className="row no-gutters">
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