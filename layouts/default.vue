<script setup lang="ts">
import { ModalsContainer } from 'vue-final-modal'
import Footer from '@/components/sections/Footer.vue'
</script>

<template>
  <div id="app">
    <slot />
    <ModalsContainer />
    <Footer />
  </div>
</template>