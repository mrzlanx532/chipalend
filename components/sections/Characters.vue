<script setup lang="ts">
const images = ref([
    'barbi-and-ken.png',
    'hello-kitty.png',
    'minecraft.png',
    'pirates.png',
    'sonic.png',
    'spider-man.png',
    'spongebob.png',
    'transformers.png',
    'winx.png',
])
</script>

<template>
  <div class="characters">
    <div class="characters__container container">
      <h2 class="characters__header">Наши персонажи</h2>
      <div class="characters__images">
        <img v-for="image in images" :src="'/img/costumes/' + image" width="200" height="200" />
      </div>
    </div>
  </div>
</template>