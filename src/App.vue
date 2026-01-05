<script setup>
import { onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';

const route = useRoute();

const reloadScripts = () => {
  const scriptUrl = "/js/main.js";
  
  // Remove existing
  const existingScript = document.querySelector(`script[src="${scriptUrl}"]`);
  if (existingScript) existingScript.remove();

  // Add new
  const script = document.createElement("script");
  script.src = scriptUrl;
  script.async = true;
  document.body.appendChild(script);
};

// Reload scripts when route changes
watch(() => route.path, () => {
  setTimeout(() => {
    reloadScripts();
  }, 100); // 100ms delay to allow DOM render
});

onMounted(() => {
  // Initial load
  setTimeout(() => {
    reloadScripts();
  }, 100);
});
</script>

<template>
  <Navbar />
  <router-view />
  <Footer />
</template>