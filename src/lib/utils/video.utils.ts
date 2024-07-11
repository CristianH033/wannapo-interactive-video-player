export const generateVideoThumbnail = (file: File, seekTo?: number): Promise<string> => {
  return new Promise((resolve) => {
    const canvas: HTMLCanvasElement = document.createElement('canvas')
    const video: HTMLVideoElement = document.createElement('video')

    // this is important
    video.autoplay = true
    video.muted = true
    video.src = URL.createObjectURL(file)

    video.onloadeddata = () => {
      if (seekTo) {
        seekTo = seekTo < video.duration ? seekTo : video.duration
      } else {
        seekTo = video.duration / 2
      }

      video.currentTime = seekTo
    }

    video.onseeked = () => {
      console.log('Generando miniatura de video para: ', file.name)
      const ctx = canvas.getContext('2d')

      canvas.width = video.videoWidth
      canvas.height = video.videoHeight

      ctx?.drawImage(video, 0, 0, video.videoWidth, video.videoHeight)
      video.pause()
      return resolve(canvas.toDataURL('image/png'))
    }
  })
}
