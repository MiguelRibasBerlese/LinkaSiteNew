import { useScroll, useTransform, motion } from 'framer-motion'
import { useRef } from 'react'
import { useIsMobile } from '../../hooks/useIsMobile'

interface ZoomImage {
  src: string
  alt?: string
  /** Tailwind aspect-ratio class, defaults to the Instagram-post 4:5 ratio */
  aspectClass?: string
  /** wraps the image in a link, e.g. to the Instagram post it's from */
  href?: string
}

interface ZoomParallaxProps {
  /** Array of images to be displayed in the parallax effect, max 7 images */
  images: ZoomImage[]
}

// ponytail: sticky scroll-scale (up to 9x, 7 simultaneous transforms) is heavy on mobile GPUs and caused scroll delay,
// so mobile skips the pin/zoom and just gets a static grid of the same images
function ZoomParallaxMobile({ images }: ZoomParallaxProps) {
  return (
    <div className="grid grid-cols-2 gap-3 px-6">
      {images.map(({ src, alt, aspectClass, href }, index) => {
        const img = (
          <img src={src} alt={alt || `Trabalho ${index + 1}`} loading="lazy" className="h-full w-full object-cover object-center" />
        )
        const className = `relative block overflow-hidden rounded-2xl border border-brand-border ${aspectClass || 'aspect-[4/5]'} ${index === 0 ? 'col-span-2' : ''}`
        return href ? (
          <a key={src} href={href} target="_blank" rel="noopener noreferrer" aria-label={alt} className={className}>
            {img}
          </a>
        ) : (
          <div key={src} className={className}>
            {img}
          </div>
        )
      })}
    </div>
  )
}

export function ZoomParallax({ images }: ZoomParallaxProps) {
  const isMobile = useIsMobile()
  const container = useRef(null)
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  })

  const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4])
  const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5])
  const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6])
  const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8])
  const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9])

  const scales = [scale4, scale5, scale6, scale5, scale6, scale8, scale9]

  if (isMobile) return <ZoomParallaxMobile images={images} />

  return (
    <div ref={container} className="relative h-[300dvh]">
      <div className="sticky top-0 h-dvh overflow-hidden">
        {images.map(({ src, alt, aspectClass, href }, index) => {
          const scale = scales[index % scales.length]
          const frameClass = `relative ${aspectClass || 'aspect-[4/5]'} h-[16dvh] overflow-hidden rounded-2xl border border-brand-border sm:h-[25dvh]`
          const img = (
            <img
              src={src}
              alt={alt || `Trabalho ${index + 1}`}
              loading="lazy"
              className="h-full w-full object-cover object-center"
            />
          )

          return (
            <motion.div
              key={src}
              style={{ scale }}
              className={`absolute top-0 flex h-full w-full items-center justify-center ${index === 1 ? '[&>div]:!-top-[16dvh] [&>div]:!left-[30vmin] [&>div]:!h-[12dvh] sm:[&>div]:!-top-[24dvh] sm:[&>div]:!left-[16vmin] sm:[&>div]:!h-[18dvh]' : ''} ${index === 2 ? '[&>div]:!-top-[2dvh] [&>div]:!left-[38vmin] [&>div]:!h-[13dvh] sm:[&>div]:!-top-[2dvh] sm:[&>div]:!left-[32vmin] sm:[&>div]:!h-[20dvh]' : ''} ${index === 3 ? '[&>div]:!top-[15dvh] [&>div]:!left-[30vmin] [&>div]:!h-[11dvh] sm:[&>div]:!top-[22dvh] sm:[&>div]:!left-[16vmin] sm:[&>div]:!h-[16dvh]' : ''} ${index === 4 ? '[&>div]:!top-[15dvh] [&>div]:!-left-[30vmin] [&>div]:!h-[11dvh] sm:[&>div]:!top-[22dvh] sm:[&>div]:!-left-[16vmin] sm:[&>div]:!h-[16dvh]' : ''} ${index === 5 ? '[&>div]:!-top-[2dvh] [&>div]:!-left-[38vmin] [&>div]:!h-[13dvh] sm:[&>div]:!-top-[2dvh] sm:[&>div]:!-left-[32vmin] sm:[&>div]:!h-[20dvh]' : ''} ${index === 6 ? '[&>div]:!-top-[16dvh] [&>div]:!-left-[30vmin] [&>div]:!h-[12dvh] sm:[&>div]:!-top-[24dvh] sm:[&>div]:!-left-[16vmin] sm:[&>div]:!h-[18dvh]' : ''}`}
            >
              {/* aspectClass matches each image's native ratio (4:5 for the Instagram posts, 16:9 for the center logo), so width follows height instead of being cropped to an independent vw box */}
              {/* smaller base height on mobile: dvh-based sizing doesn't shrink with narrow width like vmin offsets do, so without this the cards overlap/touch even at scroll progress 0 */}
              {href ? (
                <a href={href} target="_blank" rel="noopener noreferrer" aria-label={alt} className={frameClass}>
                  {img}
                </a>
              ) : (
                <div className={frameClass}>{img}</div>
              )}
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
