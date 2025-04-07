<script setup lang="ts">
const { $notyf } = useNuxtApp()

let isErrorsExists = false

const nameTemplateRef = useTemplateRef<HTMLDivElement>('nameTemplateRef')

const errors = ref({
  name: '',
  phone: '',
})

const formData = ref({
  name: '',
  phone: ''
})

const onClick = async () => {
  isErrorsExists = false

  if (!formData.value.name.length) {
    errors.value.name = true
    isErrorsExists = true
  }

  if (formData.value.phone.length < 18) {
    errors.value.phone = true
    isErrorsExists = true
  }

  if (isErrorsExists) {
    $notyf.error({
      message: 'Заполните форму',
      duration: 3000,
      position: {
        x: 'center',
        y: 'bottom'
      },
    })
    return
  }

  await $fetch('api/send-request', {
    method: 'POST',
    body: formData.value
  })

  formData.value = {
    name: '',
    phone: '',
  }

  $notyf.success({
    message: 'Заявка отправлена',
    duration: 3000,
    position: {
      x: 'center',
      y: 'bottom'
    },
  })

  errors.value = {
    name: '',
    phone: ''
  }
}

const onFocus = (propertyName: string) => {
  errors.value[propertyName] = ''
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
        <input @focus="onFocus('name')" ref="nameTemplateRef" class="open-form__input" :class="{'--error': errors.name}" v-model="formData.name" placeholder="Имя">
        <input @focus="onFocus('phone')" class="open-form__input" :class="{'--error': errors.phone}" v-maska="'+7 (###) ###-##-##'" v-model="formData.phone" placeholder="Номер"/>
        <button class="button --not-white" type="button" @click="onClick">Получить консультацию</button>
      </div>
    </div>
  </div>
</template>