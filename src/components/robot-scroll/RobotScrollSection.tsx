import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useFrameSequence } from './useFrameSequence'
import type { RobotScrollSectionProps } from './types'
import logo from '../../assets/brand/LINKA_COM_LOGO_SEM_FUNDO.png'

gsap.registerPlugin(ScrollTrigger)

const DESKTOP_FRAME_COUNT = 109
const MOBILE_FRAME_COUNT = 72
const MOBILE_BREAKPOINT = 768

function drawContain(
  ctx: CanvasRenderingContext2D,
  img: HTMLImageElement,
  canvasWidth: number,
  canvasHeight: number,
) {
  const imgRatio = img.width / img.height
  const canvasRatio = canvasWidth / canvasHeight

  let drawWidth: number
  let drawHeight: number

  if (imgRatio > canvasRatio) {
    drawWidth = canvasWidth
    drawHeight = drawWidth / imgRatio
  } else {
    drawHeight = canvasHeight
    drawWidth = drawHeight * imgRatio
  }

  const offsetX = (canvasWidth - drawWidth) / 2
  const offsetY = (canvasHeight - drawHeight) / 2

  ctx.clearRect(0, 0, canvasWidth, canvasHeight)
  ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight)
}

export default function RobotScrollSection({ scrollLength = 400 }: RobotScrollSectionProps) {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const stickyRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const logoRef = useRef<HTMLDivElement>(null)
  const rafRef = useRef<number | null>(null)
  const frameIndexRef = useRef(0)

  const LOGO_REVEAL_START = 0.85

  const [shouldLoad, setShouldLoad] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [reducedMotion, setReducedMotion] = useState(false)

  useEffect(() => {
    const mql = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReducedMotion(mql.matches)
    const onChange = (e: MediaQueryListEvent) => setReducedMotion(e.matches)
    mql.addEventListener('change', onChange)

    const checkMobile = () => setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    checkMobile()
    window.addEventListener('resize', checkMobile)

    return () => {
      mql.removeEventListener('change', onChange)
      window.removeEventListener('resize', checkMobile)
    }
  }, [])

  useEffect(() => {
    const wrapper = wrapperRef.current
    if (!wrapper) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true)
          observer.disconnect()
        }
      },
      { rootMargin: '200px' },
    )
    observer.observe(wrapper)

    return () => observer.disconnect()
  }, [])

  const basePath = isMobile ? '/robot-scroll/frames-mobile' : '/robot-scroll/frames'
  const frameCount = isMobile ? MOBILE_FRAME_COUNT : DESKTOP_FRAME_COUNT

  const { frames, isLoaded } = useFrameSequence(
    shouldLoad
      ? { frameCount, basePath, format: 'webp' }
      : { frameCount: 0, basePath, format: 'webp' },
  )

  useEffect(() => {
    if (reducedMotion || !isLoaded || frames.length === 0) return

    const canvas = canvasRef.current
    const sticky = stickyRef.current
    if (!canvas || !sticky) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resize = () => {
      const dpr = window.devicePixelRatio || 1
      const rect = sticky.getBoundingClientRect()
      canvas.width = rect.width * dpr
      canvas.height = rect.height * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      ctx.imageSmoothingEnabled = true
      ctx.imageSmoothingQuality = 'high'
      const frame = frames[frameIndexRef.current]
      if (frame) drawContain(ctx, frame, rect.width, rect.height)
    }

    let resizeTimer: ReturnType<typeof setTimeout>
    const debouncedResize = () => {
      clearTimeout(resizeTimer)
      resizeTimer = setTimeout(resize, 150)
    }

    resize()
    window.addEventListener('resize', debouncedResize)

    const renderFrame = () => {
      const rect = sticky.getBoundingClientRect()
      const frame = frames[frameIndexRef.current]
      if (frame) drawContain(ctx, frame, rect.width, rect.height)
      rafRef.current = null
    }

    const scrollTrigger = ScrollTrigger.create({
      trigger: wrapperRef.current,
      start: 'top top',
      end: 'bottom bottom',
      scrub: true,
      pin: stickyRef.current,
      onUpdate: (self) => {
        const index = Math.round(self.progress * (frames.length - 1))
        if (index !== frameIndexRef.current) {
          frameIndexRef.current = index
        }
        if (rafRef.current === null) {
          rafRef.current = requestAnimationFrame(renderFrame)
        }
        if (logoRef.current) {
          const reveal = Math.max(
            0,
            (self.progress - LOGO_REVEAL_START) / (1 - LOGO_REVEAL_START),
          )
          logoRef.current.style.opacity = String(reveal)
        }
      },
    })

    return () => {
      scrollTrigger.kill()
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current)
      window.removeEventListener('resize', debouncedResize)
      clearTimeout(resizeTimer)
    }
  }, [frames, isLoaded, reducedMotion])

  if (reducedMotion) {
    return (
      <section className="relative h-screen w-full overflow-hidden bg-brand-black">
        <img
          src={`${basePath}/frame_${String(frameCount).padStart(3, '0')}.webp`}
          alt="Linka — inteligência que desperta"
          className="absolute inset-0 h-full w-full object-contain"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <img src={logo} alt="Linka Comunicações" className="w-48 md:w-64" />
        </div>
      </section>
    )
  }

  return (
    <div ref={wrapperRef} style={{ height: `${scrollLength}vh` }} className="relative w-full">
      <div ref={stickyRef} className="relative h-screen w-full overflow-hidden bg-brand-black">
        <canvas ref={canvasRef} className="h-full w-full" />
        <div
          ref={logoRef}
          className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-0"
        >
          <img src={logo} alt="Linka Comunicações" className="w-48 md:w-64" />
        </div>
      </div>
    </div>
  )
}
