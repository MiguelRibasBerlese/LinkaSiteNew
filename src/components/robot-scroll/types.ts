export interface FrameSequenceOptions {
  frameCount: number
  basePath: string
  format: string
}

export interface FrameSequenceResult {
  frames: HTMLImageElement[]
  isLoaded: boolean
  loadProgress: number
}

export interface RobotScrollSectionProps {
  scrollLength?: number
}
