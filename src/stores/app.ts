import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', () => {
  const appName = ref<string>('Vue + Vite + Pinia + PWA App')

  const getAppName = computed(() => {
    return appName
  })

  const setAppName = (name: string) => {
    appName.value = name
  }

  return {
    getAppName,
    setAppName
  }
})
