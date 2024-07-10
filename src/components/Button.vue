<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'link'
  }>(),
  {
    variant: 'primary'
  }
)
</script>

<template>
  <button
    class="btn flex flex-row gap-2 justify-center items-center"
    :class="{
      'btn-primary': props.variant === 'primary',
      'btn-secondary': props.variant === 'secondary',
      'btn-outline': props.variant === 'outline',
      'btn-ghost': props.variant === 'ghost',
      'btn-link': props.variant === 'link'
    }"
  >
    <slot></slot>
  </button>
</template>
