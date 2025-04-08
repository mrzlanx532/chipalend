<script setup lang="ts">
import useSendForm from '@/composables/useSendForm'

const { errors, form, onSubmit, onFocus } = useSendForm()

const emit = defineEmits<{
  (e: 'confirm'): void
}>()

const onSubmitWithEmit = () => {
  if (onSubmit()) {
    emit('confirm')
  }
}
</script>

<template>
  <div id="contacts" class="open-form">
    <div class="container" v-gsap.whenVisible.once.from='{ autoAlpha: 0, start: "top 80%", end: "bottom 10%"}'>
      <h2 class="open-form__header">Оставить заявку</h2>
      <div class="open-form__subheader">
        Укажите номер телефона и мы свяжемся с вами <br>
        для обсуждения всех деталей по организации праздника
      </div>
      <div class="open-form__form-container">
        <input @focus="onFocus('name')" ref="nameTemplateRef" class="open-form__input" :class="{'--error': errors.name}" v-model="form.name" placeholder="Имя">
        <input @focus="onFocus('phone')" class="open-form__input" :class="{'--error': errors.phone}" v-maska="'+7 (###) ###-##-##'" v-model="form.phone" placeholder="Номер"/>
        <button class="button --not-white" type="button" @click="onSubmitWithEmit">Отправить</button>
      </div>
    </div>
  </div>
</template>