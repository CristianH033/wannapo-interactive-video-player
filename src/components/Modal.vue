<script setup lang="ts">
import { useAnimate } from '@vueuse/core'
import VideoPlayer from './VideoPlayer.vue'
import { useAppStore } from '@/stores/app'
import { ref } from 'vue'

const appStore = useAppStore()

const modalWrapper = ref()
const modalWindow = ref()

useAnimate(
  modalWindow,
  [
    { opacity: 0, transform: 'scale(0.8)' },
    { opacity: 1, transform: 'scale(1)' }
  ],
  {
    delay: 100,
    duration: 300,
    easing: 'ease-in-out',
    fill: 'forwards'
  }
)
</script>

<template>
  <div
    class="p-8 fixed w-screen h-dvh flex justify-center items-center bg-background/90"
    ref="modalWrapper"
  >
    <div
      class="opacity-0 bg-background overflow-hidden rounded-xl w-full max-w-4xl h-auto max-h-dvh shadow-3xl shadow-foreground-50/90"
      ref="modalWindow"
    >
      <VideoPlayer :video="appStore.videoFileToPlay" />
    </div>
  </div>
</template>

<style lang="css" scoped></style>
