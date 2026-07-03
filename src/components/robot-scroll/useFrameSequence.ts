import { useEffect, useState } from 'react'
import type { FrameSequenceOptions, FrameSequenceResult } from './types'

function frameUrl(basePath: string, format: string, index: number): string {
  const padded = String(index).padStart(3, '0')
  return `${basePath}/frame_${padded}.${format}`
}

function loadImage(src: string): Promise<HTMLImageElement | null> {
  return new Promise((resolve) => {
    const img = new Image()
    img.onload = () => resolve(img)
    img.onerror = () => {
      console.error(`useFrameSequence: failed to load frame ${src}`)
      resolve(null)
    }
    img.src = src
  })
}

export function useFrameSequence({
  frameCount,
  basePath,
  format,
}: FrameSequenceOptions): FrameSequenceResult {
  const [frames, setFrames] = useState<HTMLImageElement[]>([])
  const [loadProgress, setLoadProgress] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    let cancelled = false
    setFrames([])
    setLoadProgress(0)
    setIsLoaded(false)

    let loadedCount = 0
    const total = frameCount

    const loaders = Array.from({ length: total }, (_, i) =>
      loadImage(frameUrl(basePath, format, i + 1)).then((img) => {
        loadedCount += 1
        if (!cancelled) setLoadProgress(loadedCount / total)
        return img
      }),
    )

    Promise.all(loaders).then((results) => {
      if (cancelled) return
      setFrames(results.filter((img): img is HTMLImageElement => img !== null))
      setIsLoaded(true)
    })

    return () => {
      cancelled = true
    }
  }, [frameCount, basePath, format])

  return { frames, isLoaded, loadProgress }
}
