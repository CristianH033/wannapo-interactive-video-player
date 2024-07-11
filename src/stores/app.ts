import { generateVideoThumbnail } from '@/lib/utils/video.utils'
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

const ACCEPTED_VIDEO_EXTENSIONS = ['mp4', 'm4v', 'mov', 'avi', 'mkv', 'webm', 'mpg', 'mpeg', 'wmv']
const ACCEPTED_IMG_EXTENSIONS = ['png', 'jpg', 'jpeg', 'webp']

export interface VideoFileInfo {
  file?: File
  name?: string
  fileName?: string
  thumbnail?: string
  url?: string
}

export const useAppStore = defineStore('app', () => {
  const appName = ref<string>('Wannapo Interactive Video Player')
  const isLoading = ref<boolean>(false)
  const fileList = ref<FileList | undefined>(undefined)
  const videoFilesInfo = ref<VideoFileInfo[]>([])
  const videoFileToPlay = ref<VideoFileInfo | undefined>(undefined)

  const getAppName = computed(() => {
    return appName
  })

  const getVideoFileListInfo = computed((): VideoFileInfo[] => {
    return videoFilesInfo.value
  })

  const videoFileListInfoIsEmpty = computed(() => {
    return getVideoFileListInfo.value.length === 0
  })

  const setAppName = (name: string) => {
    appName.value = name
  }

  const setFileList = async (files: FileList | undefined) => {
    isLoading.value = true

    const videoFiles = getVideoFiles(files)
    const imageFiles = getImageFiles(files)

    const videoFilesNames = videoFiles.map((file) => file.name.split('.').slice(0, -1).join('.'))
    const imageFilesNames = imageFiles.map((file) => file.name.split('.').slice(0, -1).join('.'))

    const matchedFilesNames = videoFilesNames.filter((name) => imageFilesNames.includes(name))

    fileList.value = files
    videoFilesInfo.value = await (() =>
      Promise.all(
        videoFiles.map(async (file) => {
          let thumbnailUrl = ''

          if (matchedFilesNames.includes(file.name.split('.').slice(0, -1).join('.'))) {
            thumbnailUrl = URL.createObjectURL(
              imageFiles.find(
                (imageFile) =>
                  imageFile.name.split('.').slice(0, -1).join('.') ===
                  file.name.split('.').slice(0, -1).join('.')
              ) as File
            )
          } else {
            thumbnailUrl = await generateVideoThumbnail(file, 3)
          }

          return {
            file,
            name: file.name.split('.').slice(0, -1).join('.'),
            fileName: file.name,
            thumbnail: thumbnailUrl,
            url: URL.createObjectURL(file)
          }
        })
      ))()

    isLoading.value = false
  }

  const selectVideoToPlay = (videoFile: VideoFileInfo) => {
    videoFileToPlay.value = videoFile
  }

  const clearVideoToPlay = () => {
    videoFileToPlay.value = undefined
  }

  const getVideoFiles = (files: FileList | undefined): File[] => {
    return Array.from(files || []).filter((file) => {
      return (
        file.size > 0 &&
        ACCEPTED_VIDEO_EXTENSIONS.includes(file.name.split('.').pop()?.toLowerCase()!)
      )
    })
  }

  const getImageFiles = (files: FileList | undefined): File[] => {
    return Array.from(files || []).filter((file) => {
      return (
        file.size > 0 &&
        ACCEPTED_IMG_EXTENSIONS.includes(file.name.split('.').pop()?.toLowerCase()!)
      )
    })
  }

  return {
    appName,
    isLoading,
    fileList,
    videoFilesInfo,
    videoFileToPlay,
    getAppName,
    getVideoFileListInfo,
    videoFileListInfoIsEmpty,
    setAppName,
    setFileList,
    selectVideoToPlay,
    clearVideoToPlay
  }
})
