<script setup lang="ts">
const formData = ref({
  name: null,
  phone: null
})

</script>

<template>
  <div class="open-form">
    <div class="container" v-gsap.whenVisible.once.from='{ autoAlpha: 0, delay: 0.2, y: 10 }'>
      <h2 class="open-form__header">Остались вопросы?</h2>
      <div class="open-form__subheader">
        Укажите номер телефона и мы свяжемся с вами <br>
        для обсуждения всех деталей по организации праздника
      </div>
      <div class="open-form__form-container">
        <input class="open-form__input" v-model="formData.name" placeholder="Имя">
        <input class="open-form__input" v-model="formData.phone" placeholder="Номер"/>
        <button class="button --not-white">Получить консультацию</button>
      </div>
    </div>
  </div>
</template>