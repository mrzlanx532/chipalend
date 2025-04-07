<script setup lang="ts">
import { Splide, SplideSlide } from '@splidejs/vue-splide';

const options = ref({
  width: '100%',
  rewind: true,
  autoWidth: true,
  pagination: false,
  type: 'loop',
  drag: 'free',
  autoplay: true,
  interval: 0,
  arrows: false,
  pauseOnHover: false,
  speed: 3000,
  easing: 'linear'
})

const images = ref([
  'hello-kitty.png',
  'minecraft.png',
  'pirates.png',
  'sonic.png',
  'spider-man.png',
  'spongebob.png',
  'transformers.png',
  'winx.png',
  'barbi-and-ken.png',
])

onMounted(() => {
  options.value.interval = 3000
})
</script>

<template>
  <div id="gallery" class="gallery">
    <div class="gallery__container">
      <h2 class="gallery__header container" v-gsap.whenVisible.once.from='{ autoAlpha: 0, start: "top 80%", end: "bottom 10%"}'>Фотографии с празников</h2>
      <Splide :options="options" aria-label="Vue Splide Example">
        <SplideSlide class="gallery__images" v-for="image in images">
          <img class="item"  :src="'/img/costumes/' + image"/>
        </SplideSlide>
      </Splide>
    </div>
  </div>
</template>