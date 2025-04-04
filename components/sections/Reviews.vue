<script setup lang="ts">
import { Carousel, Slide, Navigation, Pagination } from 'vue3-carousel'

const images = Array.from({ length: 12 }, (_, index) => ({
  id: index + 1,
  url: `/img/reviews/review-${index + 1}.png`,
}))

const config = {
  transition: 700,
  slideEffect: 'slide',
  itemsToShow: 1,
  wrapAround: true,
}
</script>

<template>
  <div class="reviews">
    <h2 class="reviews__review-header" v-gsap.whenVisible.once.from='{ autoAlpha: 0, start: "top 90%", end: "bottom 10%"}'>
      Наши отзывы
    </h2>
    <div class="review__reviews-desktop">
      <img v-gsap.desktop.whenVisible.to="{ x: 50, start: 'top bottom', end: 'bottom top', scrub: 1.5 }" src="/img/reviews/review-1.png">
      <img v-gsap.desktop.whenVisible.to="{ x: -50, start: 'top bottom', end: 'bottom top', scrub: 1.5 }" src="/img/reviews/review-2.png">
      <img v-gsap.desktop.whenVisible.to="{ x: 20, start: 'top bottom', end: 'bottom top', scrub: 1.5 }" src="/img/reviews/review-3.png">
      <img v-gsap.desktop.whenVisible.to="{ x: -40, y: -40, start: 'top bottom', end: 'bottom top', scrub: 1.5 }" src="/img/reviews/review-4.png">
      <img v-gsap.desktop.whenVisible.to="{ x: 10, y: 50, start: 'top bottom', end: 'bottom top', scrub: 1.5 }" src="/img/reviews/review-5.png">
      <img v-gsap.desktop.whenVisible.to="{ x: 80, start: 'top bottom', end: 'bottom top', scrub: 1.5 }"  src="/img/reviews/review-6.png">
      <img v-gsap.desktop.whenVisible.to="{ y: -40, start: 'top bottom', end: 'bottom top', scrub: 1.5 }" src="/img/reviews/review-7.png">
      <img v-gsap.desktop.whenVisible.to="{ x: -40, start: 'top bottom', end: 'bottom top', scrub: 1.5 }" src="/img/reviews/review-8.png">
      <img v-gsap.desktop.whenVisible.to="{ x: -50, start: 'top bottom', end: 'bottom top', scrub: 1.5 }" src="/img/reviews/review-9.png">
      <img v-gsap.desktop.whenVisible.to="{ x: -50, start: 'top bottom', end: 'bottom top', scrub: 1.5 }" src="/img/reviews/review-10.png">
      <img v-gsap.desktop.whenVisible.to="{ x: -50, y: 60, start: 'top bottom', end: 'bottom top', scrub: 1.5 }" src="/img/reviews/review-11.png">
      <img v-gsap.desktop.whenVisible.to="{ x: 20, y: -50, start: 'top bottom', end: 'bottom top', scrub: 1.5 }" src="/img/reviews/review-12.png">
    </div>

    <div class="container review__reviews-mobile">
      <Carousel v-bind="config">
        <Slide v-for="image in images" :key="image.id">
          <img :src="image.url" alt="image" />
        </Slide>

        <template #addons>
          <Navigation />
          <Pagination />
        </template>
      </Carousel>
    </div>
  </div>
</template>