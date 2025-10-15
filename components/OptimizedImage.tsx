'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

interface OptimizedImageProps {
  src: string
  alt: string
  className?: string
  fill?: boolean
  width?: number
  height?: number
  priority?: boolean
  quality?: number
  sizes?: string
  loading?: 'lazy' | 'eager'
  objectFit?: 'cover' | 'contain' | 'fill'
  placeholder?: 'blur' | 'empty'
  onLoad?: () => void
  hoverScale?: boolean
}

export default function OptimizedImage({
  src,
  alt,
  className = '',
  fill = false,
  width,
  height,
  priority = false,
  quality = 85,
  sizes = '100vw',
  loading = 'lazy',
  objectFit = 'cover',
  placeholder = 'empty',
  onLoad,
  hoverScale = false
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [hasError, setHasError] = useState(false)

  const handleLoad = () => {
    setIsLoaded(true)
    onLoad?.()
  }

  const handleError = () => {
    setHasError(true)
  }

  if (hasError) {
    return (
      <div className={`bg-gradient-to-br from-pink-100 to-pink-200 flex items-center justify-center ${className}`}>
        <div className="text-pink-400 text-center">
          <div className="text-2xl mb-2">📷</div>
          <div className="text-sm">Imagen no disponible</div>
        </div>
      </div>
    )
  }

  const imageProps = {
    src,
    alt,
    quality,
    loading,
    priority,
    sizes,
    onLoad: handleLoad,
    onError: handleError,
    className: `${className} ${
      hoverScale ? 'transition-transform duration-300 group-hover:scale-105' : ''
    } ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`,
    style: {
      objectFit: objectFit as any
    }
  }

  return (
    <div className="relative">
      {/* Skeleton loader */}
      {!isLoaded && (
        <div className={`absolute inset-0 bg-gradient-to-br from-pink-100 to-pink-200 animate-pulse ${className}`}>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
        </div>
      )}
      
      {fill ? (
        <Image
          {...imageProps}
          fill
          placeholder={placeholder}
        />
      ) : (
        <Image
          {...imageProps}
          width={width}
          height={height}
          placeholder={placeholder}
        />
      )}
    </div>
  )
}