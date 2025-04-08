<script setup lang="ts">
import { VueFinalModal } from 'vue-final-modal'
import Input from '@/components/base/Input.vue'
import useSendForm from '@/composables/useSendForm'

const props = defineProps<{
  title: string,
  subtitle: string,
  packageName: string | null
}>()

const { errors, form, onSubmit, onFocus } = useSendForm()

const emit = defineEmits<{
  (e: 'confirm'): void
}>()

const onSubmitWithEmit = () => {
  if (onSubmit(props.packageName)) {
    emit('confirm')
  }
}
</script>

<template>
  <VueFinalModal
      class="modal"
      content-class="modal__content"
      overlay-transition="vfm-fade"
      content-transition="vfm-fade"
  >
    <h1>{{ props.title }}</h1>
    <p>{{ props.subtitle }}</p>
    <form @submit.prevent="onSubmitWithEmit">
      <Input @focus="onFocus('name')" :error="errors.name" v-model="form.name" label="Ваше имя"/>
      <Input @focus="onFocus('phone')" :error="errors.phone" v-maska="'+7 (###) ###-##-##'" v-model="form.phone" label="Номер телефона"/>
      <div class="modal__button-container">
        <button type="submit" class="button --white">
          Отправить
        </button>
      </div>
    </form>
    <slot />
  </VueFinalModal>
</template>