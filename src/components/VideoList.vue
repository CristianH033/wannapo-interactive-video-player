<script setup lang="ts">
import { useAppStore } from '@/stores/app'
import { useFileDialog } from '@vueuse/core'
import Button from './Button.vue'
import SolarPlayLineDuotone from '~icons/solar/play-line-duotone'
import SolarFolderOpenLineDuotone from '~icons/solar/folder-open-line-duotone'
import SvgSpinnersBlocksScale from '~icons/svg-spinners/blocks-scale'

const appStore = useAppStore()

const { open, onChange } = useFileDialog({
  accept: 'video/mp4,video/x-m4v,video/*', // Set to accept only video files
  directory: true // Select directories instead of files if set true
})

const openFolder = () => {
  open()
}

onChange((files) => {
  /** do something with files */
  if (files) {
    appStore.setFileList(files)
  }
})
</script>

<template>
  <div class="w-full flex flex-col gap-8 justify-center items-center">
    <Button v-if="appStore.videoFileListInfoIsEmpty" @click="openFolder">
      <SvgSpinnersBlocksScale v-if="appStore.isLoading" class="w-8 h-8" />
      <SolarFolderOpenLineDuotone v-else class="w-8 h-8" />
      <span>{{ appStore.isLoading ? 'Cargando...' : 'Seleccionar Carpeta' }}</span>
    </Button>
    <div v-else class="w-full grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-8">
      <div
        v-for="videoFile in appStore.getVideoFileListInfo"
        class="rounded-lg border overflow-hidden flex flex-col justify-between cursor-pointer hover:shadow-foreground-50/30 hover:scale-105 hover:shadow-2xl active:scale-95 transition"
        :key="videoFile.name"
        @click="appStore.selectVideoToPlay(videoFile)"
      >
        <div
          class="aspect-video relative"
          :style="{
            backgroundImage: `url(${videoFile.thumbnail})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }"
        >
          <SolarPlayLineDuotone class="w-8 h-8 absolute bottom-2 left-2" />
        </div>
        <div class="w-full p-4">
          <p>{{ videoFile.name }}</p>
        </div>
      </div>
    </div>
    <!-- <div v-if="!appStore.videoFileListInfoIsEmpty">
      <Button @click="reset">Recargar Lista</Button>
    </div> -->
  </div>
</template>

<style lang="css" scoped></style>
