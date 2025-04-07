<script setup lang="ts">
import { VueFinalModal } from 'vue-final-modal'
import Input from '@/components/base/Input.vue'

const form = ref({
  name: null,
  phone: null
})

const emit = defineEmits<{
  (e: 'confirm'): void
}>()

const onSubmit = async () => {
  await $fetch('api/send-request', {
    method: 'POST',
    body: form.value
  })

  emit('confirm')
}
</script>

<template>
  <VueFinalModal
      class="modal"
      content-class="modal__content"
      overlay-transition="vfm-fade"
      content-transition="vfm-fade"
  >
    <h1>Оставить заявку</h1>
    <p>Бесплатная консультация</p>
    <form @submit.prevent="onSubmit">
      <Input v-model="form.name" label="Ваше имя"/>
      <Input v-maska="'+7 (###) ###-##-##'" v-model="form.phone" label="Номер телефона"/>
      <div class="modal__button-container">
        <button type="submit" class="button --white">
          Отправить
        </button>
      </div>
    </form>
    <slot />
  </VueFinalModal>
</template>