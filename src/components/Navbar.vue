<script setup>
import { useRoute } from 'vue-router';
const route = useRoute();
const isActive = (path) => route.path === path ? 'active' : '';
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
    <div class="container">
      <router-link class="navbar-brand" to="/">THAN Harbor<span>lights</span></router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav">
        <span class="oi oi-menu"></span> Menu
      </button>

      <div class="collapse navbar-collapse" id="ftco-nav">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item" :class="isActive('/')"><router-link to="/" class="nav-link">Home</router-link></li>
          <li class="nav-item" :class="isActive('/rooms')"><router-link to="/rooms" class="nav-link">Our Rooms</router-link></li>
          <li class="nav-item" :class="isActive('/restaurant')"><router-link to="/restaurant" class="nav-link">Restaurant</router-link></li>
          <li class="nav-item" :class="isActive('/about')"><router-link to="/about" class="nav-link">About Us</router-link></li>
          <li class="nav-item" :class="isActive('/blog')"><router-link to="/blog" class="nav-link">Blog</router-link></li>
          <li class="nav-item" :class="isActive('/contact')"><router-link to="/contact" class="nav-link">Contact</router-link></li>
        </ul>
      </div>
    </div>
  </nav>
</template>