'use client'

import Image from 'next/image'
import { cn } from '@/lib/utils'

interface CaseStudyImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  aspectRatio?: string
  variant?: 'full' | 'contained'
  className?: string
  caption?: string
}

export function CaseStudyImage({
  src,
  alt,
  width = 1200,
  height = 800,
  aspectRatio = '16/9',
  variant = 'contained',
  className,
  caption,
}: CaseStudyImageProps) {
  return (
    <figure className={cn('my-8', className)}>
      <div
        className={cn(
          // Dot grid background
          'relative flex items-center justify-center rounded-lg overflow-hidden',
          'bg-zinc-100 dark:bg-zinc-900',
          '[background-image:radial-gradient(circle,_theme(colors.zinc.300)_1px,_transparent_1px)] dark:[background-image:radial-gradient(circle,_theme(colors.zinc.700)_1px,_transparent_1px)]',
          '[background-size:20px_20px]',
          variant === 'full' ? 'p-0' : 'p-6 sm:p-10',
        )}
        style={{ aspectRatio }}
      >
        <div
          className={cn(
            'relative h-full',
            variant === 'full' ? 'w-full' : 'w-full max-w-[85%]',
            'flex items-center justify-center',
          )}
        >
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            className={cn(
              'rounded object-contain w-full h-full',
              variant === 'full' ? 'rounded-none' : 'shadow-lg',
            )}
          />
        </div>
      </div>
      {caption && (
        <figcaption className="mt-3 text-xs text-muted-foreground text-center">
          {caption}
        </figcaption>
      )}
    </figure>
  )
}
