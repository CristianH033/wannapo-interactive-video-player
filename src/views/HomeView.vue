<script setup lang="ts">
import Modal from '@/components/Modal.vue'
import VideoList from '@/components/VideoList.vue'
import { useAppStore } from '@/stores/app'

const appStore = useAppStore()
</script>

<template>
  <div class="w-full h-dvh grid grid-cols-1 grid-rows-[1fr_auto]">
    <div
      class="w-full h-full p-8 overflow-y-auto flex flex-row justify-center items-center min-h-0"
    >
      <VideoList class="m-auto" />
    </div>
    <footer class="w-full flex flex-row flex-wrap justify-center items-center">
      <img class="w-32" src="@/assets/img/logos/Mesa de trabajo 1 copia 2-100.jpg " alt="" />
      <img class="w-32" src="@/assets/img/logos/Mesa de trabajo 1 copia 5-100.jpg " alt="" />
      <img class="w-32" src="@/assets/img/logos/Mesa de trabajo 1-100.jpg" alt="" />
      <img class="w-32" src="@/assets/img/logos/Mesa de trabajo 1 copia 3-100.jpg" alt="" />
      <img class="w-32" src="@/assets/img/logos/Mesa de trabajo 1 copia 6-100.jpg " alt="" />
      <img class="w-32" src="@/assets/img/logos/Mesa de trabajo 1 copia 4-100.jpg" alt="" />
      <img class="w-32" src="@/assets/img/logos/Mesa de trabajo 1 copia-100.jpg" alt="" />
    </footer>
    <Transition name="fade" mode="out-in">
      <Modal v-if="appStore.videoFileToPlay" />
    </Transition>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 300ms ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
