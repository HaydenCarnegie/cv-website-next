'use client'

import Image from 'next/image'
import { useState, useRef, useCallback, useEffect } from 'react'
import { cn } from '@/lib/utils'
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'

interface CarouselSlide {
  src: string
  darkSrc?: string
  alt: string
  width?: number
  height?: number
}

interface CaseStudyCarouselProps {
  slides: CarouselSlide[]
  aspectRatio?: string
  variant?: 'full' | 'contained'
  className?: string
  caption?: React.ReactNode
}

type Direction = 'left' | 'right'

function useSlideTransition(len: number) {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState<Direction>('left')
  // Increments on every transition so SlideItem can use it as a key to re-trigger animation
  const [epoch, setEpoch] = useState(0)

  const go = useCallback((next: number, dir: Direction) => {
    setDirection(dir)
    setCurrent(next)
    setEpoch(e => e + 1)
  }, [])

  const prev = useCallback(() => {
    go(current === 0 ? len - 1 : current - 1, 'right')
  }, [current, len, go])

  const next = useCallback(() => {
    go(current === len - 1 ? 0 : current + 1, 'left')
  }, [current, len, go])

  const jumpTo = useCallback((i: number) => {
    go(i, i > current ? 'left' : 'right')
  }, [current, go])

  return { current, direction, epoch, prev, next, jumpTo }
}

export function CaseStudyCarousel({
  slides,
  aspectRatio = '16/9',
  variant = 'contained',
  className,
  caption,
}: CaseStudyCarouselProps) {
  const { current, direction, epoch, prev, next, jumpTo } = useSlideTransition(slides.length)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)

  const dragStartX = useRef<number | null>(null)
  const dragging = useRef(false)

  const onPointerDown = (e: React.PointerEvent) => {
    dragStartX.current = e.clientX
    dragging.current = false
    ;(e.currentTarget as HTMLElement).setPointerCapture(e.pointerId)
  }

  const onPointerMove = (e: React.PointerEvent) => {
    if (dragStartX.current === null) return
    if (Math.abs(e.clientX - dragStartX.current) > 5) dragging.current = true
  }

  const onPointerUp = (e: React.PointerEvent) => {
    if (dragStartX.current === null) return
    const delta = e.clientX - dragStartX.current
    if (dragging.current) {
      if (delta < -40) next()
      else if (delta > 40) prev()
    } else {
      setLightboxIndex(current)
      setLightboxOpen(true)
    }
    dragStartX.current = null
    dragging.current = false
  }

  // Keyboard nav in lightbox
  useEffect(() => {
    if (!lightboxOpen) return
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') setLightboxIndex(i => (i === 0 ? slides.length - 1 : i - 1))
      if (e.key === 'ArrowRight') setLightboxIndex(i => (i === slides.length - 1 ? 0 : i + 1))
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [lightboxOpen, slides.length])

  return (
    <>
      <figure className={cn('my-8', className)}>
        <div
          className={cn(
            'relative flex items-center justify-center rounded-lg overflow-hidden select-none',
            'bg-zinc-100 dark:bg-zinc-900',
            '[background-image:radial-gradient(circle,_theme(colors.zinc.300)_1px,_transparent_1px)] dark:[background-image:radial-gradient(circle,_theme(colors.zinc.700)_1px,_transparent_1px)]',
            '[background-size:20px_20px]',
            variant === 'full' ? 'p-0' : 'p-6 sm:p-10',
            'cursor-zoom-in',
          )}
          style={{ aspectRatio }}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
        >
          {/* Slides */}
          <div
            className={cn(
              'relative h-full overflow-hidden',
              variant === 'full' ? 'w-full' : 'w-full max-w-[85%]',
              'flex items-center justify-center',
            )}
          >
            {slides.map((slide, i) => (
              <SlideItem
                key={i === current ? `active-${epoch}` : i}
                slide={slide}
                isActive={i === current}
                direction={direction}
                variant={variant}
              />
            ))}
          </div>

          {/* Prev/next arrows */}
          {slides.length > 1 && (
            <>
              <button
                onClick={e => { e.stopPropagation(); prev() }}
                onPointerDown={e => e.stopPropagation()}
                aria-label="Previous slide"
                className="absolute left-3 top-1/2 -translate-y-1/2 z-10 rounded-full bg-black/30 hover:bg-black/50 backdrop-blur-sm p-1.5 text-white transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={e => { e.stopPropagation(); next() }}
                onPointerDown={e => e.stopPropagation()}
                aria-label="Next slide"
                className="absolute right-3 top-1/2 -translate-y-1/2 z-10 rounded-full bg-black/30 hover:bg-black/50 backdrop-blur-sm p-1.5 text-white transition-colors"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </>
          )}
        </div>

        {/* Dot indicators */}
        {slides.length > 1 && (
          <div className="flex items-center justify-center gap-1.5 mt-3">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => jumpTo(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={cn(
                  'rounded-full transition-all duration-200',
                  i === current
                    ? 'w-4 h-1.5 bg-zinc-700 dark:bg-zinc-300'
                    : 'w-1.5 h-1.5 bg-zinc-300 dark:bg-zinc-600 hover:bg-zinc-400 dark:hover:bg-zinc-500',
                )}
              />
            ))}
          </div>
        )}

        {caption && (
          <figcaption className="mt-2 text-xs text-muted-foreground text-center">
            {caption}
          </figcaption>
        )}
      </figure>

      {/* Lightbox */}
      <Dialog open={lightboxOpen} onOpenChange={setLightboxOpen}>
        <DialogContent
          showCloseButton={false}
          className="max-w-[95vw] sm:max-w-[95vw] w-[95vw] max-h-[95vh] h-[95vh] p-0 bg-black/95 border-zinc-800 overflow-hidden"
        >
          <DialogTitle className="sr-only">{slides[lightboxIndex]?.alt}</DialogTitle>

          {/* Close */}
          <button
            onClick={() => setLightboxOpen(false)}
            aria-label="Close lightbox"
            className="absolute top-4 right-4 z-20 rounded-full bg-zinc-600/80 hover:bg-zinc-500/80 dark:bg-white/10 dark:hover:bg-white/20 p-2 text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Image */}
          <div className="flex items-center justify-center w-full h-full p-8 min-h-[60vh] bg-zinc-100 dark:bg-zinc-900 [background-image:radial-gradient(circle,_theme(colors.zinc.300)_1px,_transparent_1px)] dark:[background-image:radial-gradient(circle,_theme(colors.zinc.700)_1px,_transparent_1px)] [background-size:20px_20px]">
            {(() => {
              const slide = slides[lightboxIndex]
              if (!slide) return null
              return (
                <>
                  <Image
                    src={slide.src}
                    alt={slide.alt}
                    width={2400}
                    height={1600}
                    className={cn('object-contain max-h-[80vh] w-auto rounded', slide.darkSrc && 'dark:hidden')}
                  />
                  {slide.darkSrc && (
                    <Image
                      src={slide.darkSrc}
                      alt={slide.alt}
                      width={2400}
                      height={1600}
                      className="object-contain max-h-[80vh] w-auto rounded hidden dark:block"
                    />
                  )}
                </>
              )
            })()}
          </div>

          {/* Lightbox prev/next */}
          {slides.length > 1 && (
            <>
              <button
                onClick={() => setLightboxIndex(i => (i === 0 ? slides.length - 1 : i - 1))}
                aria-label="Previous image"
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 rounded-full bg-zinc-600/80 hover:bg-zinc-500/80 dark:bg-white/10 dark:hover:bg-white/20 p-2.5 text-white transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => setLightboxIndex(i => (i === slides.length - 1 ? 0 : i + 1))}
                aria-label="Next image"
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 rounded-full bg-zinc-600/80 hover:bg-zinc-500/80 dark:bg-white/10 dark:hover:bg-white/20 p-2.5 text-white transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-xs text-zinc-400 tabular-nums">
                {lightboxIndex + 1} / {slides.length}
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}

// Keyed by `active-${epoch}` at the call site when active, so React remounts it
// on every transition and the entry animation always plays from the correct side.
function SlideItem({
  slide,
  isActive,
  direction,
  variant,
}: {
  slide: CarouselSlide
  isActive: boolean
  direction: Direction
  variant: 'full' | 'contained'
}) {
  const enterAnim = direction === 'left'
    ? 'animate-[slide-in-from-right_320ms_ease_forwards]'
    : 'animate-[slide-in-from-left_320ms_ease_forwards]'

  if (!isActive) {
    return <div className="absolute inset-0 opacity-0 pointer-events-none" />
  }

  const imgClass = cn(
    'rounded object-contain w-full h-full',
    variant === 'full' ? 'rounded-none' : 'shadow-lg',
  )

  return (
    <div className={cn('absolute inset-0 flex items-center justify-center', enterAnim)}>
      <Image
        src={slide.src}
        alt={slide.alt}
        width={slide.width ?? 1200}
        height={slide.height ?? 800}
        draggable={false}
        className={cn(imgClass, slide.darkSrc && 'dark:hidden')}
      />
      {slide.darkSrc && (
        <Image
          src={slide.darkSrc}
          alt={slide.alt}
          width={slide.width ?? 1200}
          height={slide.height ?? 800}
          draggable={false}
          className={cn(imgClass, 'hidden dark:block')}
        />
      )}
    </div>
  )
}
