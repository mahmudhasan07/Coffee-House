<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import NavBar from './views/NavBar.vue';
</script>

<template>
  
  <div>
    <NavBar></NavBar>
  </div>
  <RouterView />
</template>

<style ></style>
