<script setup lang="ts">
const model = defineModel()
const emit = defineEmits(['focus'])

const props = withDefaults(defineProps<{
  label: string,
  error: boolean
}>(), {
  error: false
})
</script>

<template>
  <label class="input" :class="{'--error': error}">
    <span>{{ props.label }}</span>
    <input @focus="emit('focus')" v-model="model" type="text" :label="label">
  </label>
</template>