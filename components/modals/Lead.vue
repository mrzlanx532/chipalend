<script setup lang="ts">
import { VueFinalModal } from 'vue-final-modal'
import Input from '@/components/base/Input.vue'

defineProps<{
  title?: string
}>()

const emit = defineEmits<{
  (e: 'confirm'): void
}>()
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
    <form>
      <Input />
      <Input />
    </form>
    <slot />
    <button @click="emit('confirm')">
      Confirm
    </button>
  </VueFinalModal>
</template>