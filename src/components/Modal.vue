<script setup lang="ts">
import VideoPlayer from './VideoPlayer.vue'
import { useAppStore } from '@/stores/app'

const appStore = useAppStore()
</script>

<template>
  <div class="p-8 fixed w-screen h-dvh flex justify-center items-center bg-foreground-50/50">
    <div class="bg-background overflow-hidden rounded-md w-full max-w-3xl h-auto max-h-dvh">
      <VideoPlayer :video="appStore.videoFileToPlay" />
    </div>
  </div>
</template>

<style lang="css" scoped></style>
