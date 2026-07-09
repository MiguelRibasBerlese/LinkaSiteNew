import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { useIsMobile } from '../../hooks/useIsMobile'

// how much earlier the line stops before reaching the marquee row
const FIO_STOP_OFFSET = 55

function buildFioPath(h: number) {
  const segments = Math.max(6, Math.round(h / 700))
  let d = `M 60 0`
  for (let i = 1; i <= segments; i++) {
    const y = (h / segments) * i
    const prevY = (h / segments) * (i - 1)
    const midY = (y + prevY) / 2
    const x = i % 2 === 0 ? 60 : 940
    const prevX = i - 1 === 0 ? 60 : (i - 1) % 2 === 0 ? 60 : 940
    d += ` C ${prevX} ${midY}, ${x} ${midY}, ${x} ${y}`
  }
  return d
}

export default function FioLine() {
  const isMobile = useIsMobile()
  const pathRef = useRef<SVGPathElement>(null)
  const [docHeight, setDocHeight] = useState(4000)
  const reducedMotion =
    typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

  // dasharray/dashoffset are read live off the path element (not React state) so a
  // measurement update never fights the scroll-driven offset on the next render
  const applyOffset = () => {
    const path = pathRef.current
    if (!path) return
    const total = path.getTotalLength()
    path.style.strokeDasharray = String(total)
    if (reducedMotion) {
      path.style.strokeDashoffset = '0'
      return
    }
    const stopEl = document.getElementById('fio-stop')
    const stopY = stopEl
      ? stopEl.getBoundingClientRect().top + window.scrollY - FIO_STOP_OFFSET
      : document.documentElement.scrollHeight
    const scrollRange = stopY - window.innerHeight
    const scrollFrac = scrollRange > 0 ? Math.min(1, Math.max(0, window.scrollY / scrollRange)) : 0
    // small baseline reveal so a hint of the line shows before any scrolling happens
    const MIN_FRAC = 0.04
    const frac = MIN_FRAC + scrollFrac * (1 - MIN_FRAC)
    path.style.strokeDashoffset = String(total * (1 - frac))
  }

  const docHeightRef = useRef(docHeight)
  docHeightRef.current = docHeight

  useEffect(() => {
    let ticking = false

    const update = () => {
      ticking = false
      const stopEl = document.getElementById('fio-stop')
      const height = stopEl
        ? stopEl.getBoundingClientRect().top + window.scrollY - FIO_STOP_OFFSET
        : document.documentElement.scrollHeight
      if (Math.abs(height - docHeightRef.current) > 4) {
        setDocHeight(height)
      }
      applyOffset()
    }
    const onScroll = () => {
      if (!ticking) {
        ticking = true
        requestAnimationFrame(update)
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    update() // sync measurement on mount — don't wait on a rAF tick that may be delayed
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [reducedMotion])

  // re-apply after every render (path geometry can change with docHeight), since the
  // path's `d` attribute changing invalidates the previous getTotalLength() measurement
  useLayoutEffect(() => {
    applyOffset()
  })

  const height = Math.max(docHeight, 3000)
  const d = buildFioPath(height)

  return (
    <svg
      width="100%"
      height={height}
      viewBox={`0 0 1000 ${height}`}
      preserveAspectRatio="none"
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height,
        pointerEvents: 'none',
        zIndex: 1,
      }}
      aria-hidden="true"
    >
      <defs>
        <filter id="fioGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="6" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <linearGradient id="fioGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#8547E4" />
          <stop offset="100%" stopColor="#B48CF0" />
        </linearGradient>
      </defs>
      <path
        ref={pathRef}
        d={d}
        fill="none"
        stroke="url(#fioGrad)"
        strokeWidth={2.5}
        // ponytail: feGaussianBlur over a document-height filter region repaints on every scroll-driven
        // dashoffset write, which is the main source of scroll jank on mobile GPUs — desktop keeps the glow
        filter={isMobile ? undefined : 'url(#fioGlow)'}
        style={{ opacity: 0.85 }}
      />
    </svg>
  )
}
