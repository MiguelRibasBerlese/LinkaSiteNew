import { useScroll, useTransform, motion } from 'framer-motion'
import { useRef } from 'react'

interface ZoomImage {
  src: string
  alt?: string
  /** Tailwind aspect-ratio class, defaults to the Instagram-post 4:5 ratio */
  aspectClass?: string
}

interface ZoomParallaxProps {
  /** Array of images to be displayed in the parallax effect, max 7 images */
  images: ZoomImage[]
}

export function ZoomParallax({ images }: ZoomParallaxProps) {
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

  return (
    <div ref={container} className="relative h-[300vh]">
      <div className="sticky top-0 h-screen overflow-hidden">
        {images.map(({ src, alt, aspectClass }, index) => {
          const scale = scales[index % scales.length]

          return (
            <motion.div
              key={src}
              style={{ scale }}
              className={`absolute top-0 flex h-full w-full items-center justify-center ${index === 1 ? '[&>div]:!-top-[24vh] [&>div]:!left-[16vh] [&>div]:!h-[18vh]' : ''} ${index === 2 ? '[&>div]:!-top-[2vh] [&>div]:!left-[32vh] [&>div]:!h-[20vh]' : ''} ${index === 3 ? '[&>div]:!top-[22vh] [&>div]:!left-[16vh] [&>div]:!h-[16vh]' : ''} ${index === 4 ? '[&>div]:!top-[22vh] [&>div]:!-left-[16vh] [&>div]:!h-[16vh]' : ''} ${index === 5 ? '[&>div]:!-top-[2vh] [&>div]:!-left-[32vh] [&>div]:!h-[20vh]' : ''} ${index === 6 ? '[&>div]:!-top-[24vh] [&>div]:!-left-[16vh] [&>div]:!h-[18vh]' : ''}`}
            >
              {/* aspectClass matches each image's native ratio (4:5 for the Instagram posts, 16:9 for the center logo), so width follows height instead of being cropped to an independent vw box */}
              <div className={`relative ${aspectClass || 'aspect-[4/5]'} h-[25vh] overflow-hidden rounded-2xl border border-brand-border`}>
                <img
                  src={src}
                  alt={alt || `Trabalho ${index + 1}`}
                  loading="lazy"
                  className="h-full w-full object-cover object-center"
                />
              </div>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
