<script setup lang="ts">
import { useMediaControls } from '@vueuse/core'
import { onMounted, ref, watch } from 'vue'
import type { VideoFileInfo } from '@/stores/app'
import SolarPauseBold from '~icons/solar/pause-bold'
import SolarPlayBold from '~icons/solar/play-bold'
import SolarStopBold from '~icons/solar/stop-bold'
import { useAppStore } from '@/stores/app'

const appStore = useAppStore()

const props = defineProps({
  video: {
    type: Object as () => VideoFileInfo
  }
})

const videoElement = ref()
const { playing, currentTime, duration, volume, ended } = useMediaControls(videoElement, {
  src: props.video?.url
})

const valueToReadableTime = (value: number) => {
  const minutes = Math.floor(value / 60)
  const seconds = Math.floor(value % 60)
  return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`
}

// Change initial media properties
onMounted(() => {
  volume.value = 1
  currentTime.value = 0
  playing.value = true
})

watch(ended, () => {
  if (ended.value) {
    appStore.clearVideoToPlay()
  }
})
</script>

<template>
  <video class="aspect-video" ref="videoElement" />
  <div class="w-full h-full p-8 flex flex-row justify-center items-center gap-8">
    <button @click="playing = !playing">
      <SolarPlayBold class="w-12 h-12" v-if="!playing" />
      <SolarPauseBold class="w-12 h-12" v-else />
    </button>
    <button @click="appStore.clearVideoToPlay">
      <SolarStopBold class="w-12 h-12" />
    </button>
    <div class="w-full text-end">
      <span>{{ valueToReadableTime(currentTime) }} / {{ valueToReadableTime(duration) }}</span>
    </div>
  </div>
</template>

<style lang="css" scoped></style>
