'use client'

import Image from 'next/image'
import { useState, useRef, useCallback, useEffect } from 'react'
import { cn } from '@/lib/utils'

interface CaseStudyCompareProps {
  before: { src: string; alt: string; label?: string }
  after: { src: string; alt: string; label?: string }
  aspectRatio?: string
  className?: string
  caption?: string
  defaultPosition?: number // 0–100
}

export function CaseStudyCompare({
  before,
  after,
  aspectRatio = '16/9',
  className,
  caption,
  defaultPosition = 50,
}: CaseStudyCompareProps) {
  const [position, setPosition] = useState(defaultPosition)
  const [containerWidth, setContainerWidth] = useState(9999)
  const containerRef = useRef<HTMLDivElement>(null)
  const dragging = useRef(false)

  useEffect(() => {
    if (!containerRef.current) return
    const ro = new ResizeObserver(([entry]) => setContainerWidth(entry.contentRect.width))
    ro.observe(containerRef.current)
    return () => ro.disconnect()
  }, [])

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return
    const { left, width } = containerRef.current.getBoundingClientRect()
    const pct = Math.min(100, Math.max(0, ((clientX - left) / width) * 100))
    setPosition(pct)
  }, [])

  // Desktop: follow mouse without clicking
  const onMouseMove = (e: React.MouseEvent) => updatePosition(e.clientX)

  // Touch/mobile: still requires drag
  const onPointerDown = (e: React.PointerEvent) => {
    if (e.pointerType === 'mouse') return
    dragging.current = true
    ;(e.currentTarget as HTMLElement).setPointerCapture(e.pointerId)
    updatePosition(e.clientX)
  }

  const onPointerMove = (e: React.PointerEvent) => {
    if (e.pointerType === 'mouse' || !dragging.current) return
    updatePosition(e.clientX)
  }

  const onPointerUp = () => {
    dragging.current = false
  }

  return (
    <figure className={cn('my-8', className)}>
      <div
        ref={containerRef}
        className="relative rounded-lg overflow-hidden select-none cursor-col-resize"
        style={{ aspectRatio }}
        onMouseMove={onMouseMove}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
      >
        {/* After — full size base layer */}
        <Image
          src={after.src}
          alt={after.alt}
          fill
          draggable={false}
          className="object-cover"
        />

        {/* Before — clip div shrinks, inner div stays full container width so image doesn't resize */}
        <div
          className="absolute inset-y-0 left-0 overflow-hidden"
          style={{ width: `${position}%` }}
        >
          <div className="absolute inset-y-0 left-0" style={{ width: containerWidth }}>
            <Image
              src={before.src}
              alt={before.alt}
              fill
              draggable={false}
              className="object-cover"
            />
          </div>
        </div>

        {/* Divider line */}
        <div
          className="absolute top-0 bottom-0 w-px bg-white shadow-[0_0_6px_rgba(0,0,0,0.4)] z-10 pointer-events-none"
          style={{ left: `${position}%` }}
        />

        {/* Drag handle */}
        <div
          className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 z-10 pointer-events-none flex items-center justify-center w-8 h-8 rounded-full bg-white shadow-md"
          style={{ left: `${position}%` }}
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="text-zinc-500">
            <path d="M4 7H1M1 7L3 5M1 7L3 9M10 7H13M13 7L11 5M13 7L11 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>

        {/* Labels */}
        {before.label && (
          <div
            className="absolute bottom-3 left-3 z-10 pointer-events-none text-[10px] font-medium uppercase tracking-wider text-white bg-black/40 backdrop-blur-sm px-2 py-0.5 rounded transition-opacity"
            style={{ opacity: position > 15 ? 1 : 0 }}
          >
            {before.label}
          </div>
        )}
        {after.label && (
          <div
            className="absolute bottom-3 right-3 z-10 pointer-events-none text-[10px] font-medium uppercase tracking-wider text-white bg-black/40 backdrop-blur-sm px-2 py-0.5 rounded transition-opacity"
            style={{ opacity: position < 85 ? 1 : 0 }}
          >
            {after.label}
          </div>
        )}
      </div>

      {caption && (
        <figcaption className="mt-2 text-xs text-muted-foreground text-center">
          {caption}
        </figcaption>
      )}
    </figure>
  )
}
