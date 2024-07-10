import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import thumb1 from '@/assets/img/thumbs/1.png'
import thumb2 from '@/assets/img/thumbs/2.png'
import thumb3 from '@/assets/img/thumbs/3.png'
import thumb4 from '@/assets/img/thumbs/4.png'
import thumb5 from '@/assets/img/thumbs/5.png'
import thumb6 from '@/assets/img/thumbs/6.png'
import thumb7 from '@/assets/img/thumbs/7.png'
import thumb8 from '@/assets/img/thumbs/8.png'

const ACCEPTED_EXTENSIONS = ['mp4', 'm4v', 'mov', 'avi', 'mkv', 'webm', 'mpg', 'mpeg', 'wmv']

export interface VideoFileInfo {
  file?: File
  name?: string
  fileName?: string
  thumbnail?: string
  url?: string
}

export const useAppStore = defineStore('app', () => {
  const appName = ref<string>('Wannapo Interactive Video Player')

  const fileList = ref<FileList | undefined>(undefined)

  const videoFilesInfo = ref([
    {
      name: 'Jenny Herrera',
      fileName: 'Poder Diversidad - Jenny Herrera_Alkosto 3m.mp4',
      thumbnail: thumb1
    },
    {
      name: 'Coronel Sandra Mora',
      fileName: 'Poder Diversidad Coronel Sandra Mora 3min.mp4',
      thumbnail: thumb2
    },
    {
      name: 'Jose Daniel Monsalve',
      fileName: 'Poder Diversidad Jose Daniel Monsalve 3min 4k.mp4',
      thumbnail: thumb3
    },
    {
      name: 'Lilibeth Rubio',
      fileName: 'Poder Diversidad Lilibeth Rubio 3min Exito 4k.mp4',
      thumbnail: thumb4
    },
    {
      name: 'Manuel Londono',
      fileName: 'Poder Diversidad Manuel Londono EPM 3min 4k.mp4',
      thumbnail: thumb5
    },
    {
      name: 'Maria Victoria Vega',
      fileName: 'Poder Diversidad Maria Victoria Vega 3min Diageo 4k.mp4',
      thumbnail: thumb6
    },
    {
      name: 'Sandra Hinestroza',
      fileName: 'Poder Diversidad Sandra Hinestroza 3min 4k.mp4',
      thumbnail: thumb7
    },
    {
      name: 'Sebastian Giraldo',
      fileName: 'Poder Diversidad Sebastian Giraldo  Casa Carlota 3m_1.mp4',
      thumbnail: thumb8
    }
  ])

  const videoFileToPlay = ref<VideoFileInfo | undefined>(undefined)

  const getAppName = computed(() => {
    return appName
  })

  const getVideoFileList = computed(() => {
    return Array.from(fileList.value || []).filter((file) => {
      return (
        file.size > 0 && ACCEPTED_EXTENSIONS.includes(file.name.split('.').pop()?.toLowerCase()!)
      )
    })
  })

  const getVideoFileListInfo = computed((): VideoFileInfo[] => {
    return getVideoFileList.value
      .filter((file) => {
        // if file name is in videoFilesInfo array filename
        return videoFilesInfo.value.some((videoFile) => videoFile.fileName === file.name)
      })
      .map((file) => {
        const videoFileInfo = videoFilesInfo.value.find(
          (videoFile) => videoFile.fileName === file.name
        )

        return {
          url: getVideoUrl(file),
          file: file as File,
          ...videoFileInfo
        }
      })
  })

  const videoListIsEmpty = computed(() => {
    return getVideoFileList.value.length === 0
  })

  const setAppName = (name: string) => {
    appName.value = name
  }

  const setFileList = (files: FileList | undefined) => {
    fileList.value = files
  }

  const selectVideoToPlay = (videoFile: VideoFileInfo) => {
    videoFileToPlay.value = videoFile
  }

  const clearVideoToPlay = () => {
    videoFileToPlay.value = undefined
  }

  const getVideoUrl = (file: File): string => {
    return URL.createObjectURL(file)
  }

  return {
    appName,
    videoFileToPlay,
    getAppName,
    getVideoFileList,
    getVideoFileListInfo,
    videoListIsEmpty,
    setAppName,
    setFileList,
    selectVideoToPlay,
    clearVideoToPlay
  }
})
