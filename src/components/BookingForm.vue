<script setup>
import { ref, onMounted, watch } from 'vue';
import Swal from 'sweetalert2';

const rooms = ref([]);
const formData = ref({
  check_in: '',
  check_out: '',
  room_category_id: '',
  guest_count: '1'
});
const selectedRoomMaxGuests = ref(6);

onMounted(() => {
  fetch('http://localhost:5000/api/rooms')
    .then(res => res.json())
    .then(data => {
      rooms.value = data;
      if (data.length > 0) {
        formData.value.room_category_id = data[0].id;
      }
    })
    .catch(err => console.error(err));
});

watch(() => formData.value.room_category_id, (newId) => {
  const room = rooms.value.find(r => r.id === parseInt(newId));
  if (room) {
    selectedRoomMaxGuests.value = room.max_adults;
  }
});

const handleSubmit = async () => {
  try {
    const response = await fetch('http://localhost:5000/api/book', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...formData.value,
        email: 'guest@example.com'
      })
    });
    const result = await response.json();

    if (result.success) {
      Swal.fire('Booking Confirmed!', 'We look forward to seeing you.', 'success');
    } else {
      Swal.fire('Availability Issue', result.message, 'error');
    }
  } catch (err) {
    Swal.fire('System Error', 'Could not connect to server', 'warning');
  }
};
</script>

<template>
  <form @submit.prevent="handleSubmit" class="booking-form aside-stretch">
    <div class="row">
      <div class="col-md d-flex py-md-4">
        <div class="form-group align-self-stretch d-flex align-items-end">
          <div class="wrap align-self-stretch py-3 px-4">
            <label>Check-in Date</label>
            <input type="date" class="form-control" v-model="formData.check_in" required>
          </div>
        </div>
      </div>
      <div class="col-md d-flex py-md-4">
        <div class="form-group align-self-stretch d-flex align-items-end">
          <div class="wrap align-self-stretch py-3 px-4">
            <label>Check-out Date</label>
            <input type="date" class="form-control" v-model="formData.check_out" required>
          </div>
        </div>
      </div>
      <div class="col-md d-flex py-md-4">
        <div class="form-group align-self-stretch d-flex align-items-end">
          <div class="wrap align-self-stretch py-3 px-4">
            <label>Room</label>
            <div class="form-field">
              <div class="select-wrap">
                <div class="icon"><span class="ion-ios-arrow-down"></span></div>
                <select v-model="formData.room_category_id" class="form-control">
                  <option v-for="room in rooms" :key="room.id" :value="room.id">{{ room.name }}</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md d-flex py-md-4">
        <div class="form-group align-self-stretch d-flex align-items-end">
          <div class="wrap align-self-stretch py-3 px-4">
            <label>Guests</label>
            <div class="form-field">
              <div class="select-wrap">
                <div class="icon"><span class="ion-ios-arrow-down"></span></div>
                <select v-model="formData.guest_count" class="form-control">
                  <option v-for="n in selectedRoomMaxGuests" :key="n" :value="n">{{ n }} Adult</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md d-flex">
        <div class="form-group d-flex align-self-stretch">
          <button type="submit" class="btn btn-primary py-5 py-md-3 px-4 align-self-stretch d-block">
            <span>Check Availability <small>Best Price Guaranteed!</small></span>
          </button>
        </div>
      </div>
    </div>
  </form>
</template>