import { useEffect, useRef, type CSSProperties, type ReactNode } from 'react'

interface GlowCardProps {
  children: ReactNode
  className?: string
}

const borderGlowStyles = `
  [data-glow]::before {
    pointer-events: none;
    content: "";
    position: absolute;
    inset: calc(var(--border-size) * -1);
    border: var(--border-size) solid transparent;
    border-radius: inherit;
    background-attachment: fixed;
    background-size: calc(100% + (2 * var(--border-size))) calc(100% + (2 * var(--border-size)));
    background-position: 50% 50%;
    background-repeat: no-repeat;
    background-image: radial-gradient(
      var(--spotlight-size) var(--spotlight-size) at calc(var(--x, 0) * 1px) calc(var(--y, 0) * 1px),
      hsl(262 90% 70% / 0.9), transparent 100%
    );
    mask: linear-gradient(transparent, transparent), linear-gradient(white, white);
    mask-clip: padding-box, border-box;
    mask-composite: intersect;
    filter: brightness(1.6);
  }
`

// ponytail: purple-only, size-agnostic version of the original multi-color GlowCard —
// this project has no shadcn/color-variant needs, so those props were dropped.
export function GlowCard({ children, className = '' }: GlowCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const syncPointer = (e: PointerEvent) => {
      cardRef.current?.style.setProperty('--x', e.clientX.toFixed(2))
      cardRef.current?.style.setProperty('--y', e.clientY.toFixed(2))
    }
    document.addEventListener('pointermove', syncPointer)
    return () => document.removeEventListener('pointermove', syncPointer)
  }, [])

  const style: CSSProperties = {
    '--border-size': '2px',
    '--spotlight-size': '260px',
    backgroundImage:
      'radial-gradient(var(--spotlight-size) var(--spotlight-size) at calc(var(--x, 0) * 1px) calc(var(--y, 0) * 1px), hsl(262 85% 65% / 0.16), transparent 100%)',
    backgroundAttachment: 'fixed',
    backgroundSize: 'calc(100% + (2 * var(--border-size))) calc(100% + (2 * var(--border-size)))',
    backgroundPosition: '50% 50%',
    border: 'var(--border-size) solid hsl(262 40% 40% / 0.35)',
  } as CSSProperties

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: borderGlowStyles }} />
      <div ref={cardRef} data-glow style={style} className={`relative ${className}`}>
        {children}
      </div>
    </>
  )
}
