<script setup lang="ts">
const model = defineModel()

const props = defineProps<{
  label: string
}>()
</script>

<template>
  <label class="input">
    <span>{{ props.label }}</span>
    <input v-model="model" type="text" :label="label">
  </label>
</template>