'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  onClick?: () => void
  variant?: 'primary' | 'secondary' | 'whatsapp' | 'outline' | 'glass'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  icon?: ReactNode
  disabled?: boolean
  className?: string
  href?: string
  external?: boolean
}

export default function Button({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  icon,
  disabled = false,
  className = '',
  href,
  external = false
}: ButtonProps) {
  
  const baseClasses = "relative inline-flex items-center justify-center font-semibold transition-all duration-300 rounded-xl border-0 overflow-hidden group cursor-pointer"
  
  const sizeClasses = {
    sm: "px-4 py-2 text-sm gap-2",
    md: "px-6 py-3 text-base gap-2",
    lg: "px-8 py-4 text-lg gap-3",
    xl: "px-10 py-5 text-xl gap-4"
  }
  
  const variantClasses = {
    primary: `
      bg-gradient-to-r from-pink-500 to-purple-600 text-white
      shadow-lg shadow-pink-500/25
      hover:shadow-xl hover:shadow-pink-500/40
      hover:scale-105
      before:absolute before:inset-0 before:bg-gradient-to-r before:from-pink-400 before:to-purple-500 before:opacity-0 before:transition-opacity before:duration-300
      hover:before:opacity-100
    `,
    secondary: `
      bg-gradient-to-r from-gray-700 to-gray-800 text-white
      shadow-lg shadow-gray-900/25
      hover:shadow-xl hover:shadow-gray-900/40
      hover:scale-105
      before:absolute before:inset-0 before:bg-gradient-to-r before:from-gray-600 before:to-gray-700 before:opacity-0 before:transition-opacity before:duration-300
      hover:before:opacity-100
    `,
    whatsapp: `
      bg-gradient-to-r from-green-500 to-green-600 text-white
      shadow-lg shadow-green-500/25
      hover:shadow-xl hover:shadow-green-500/40
      hover:scale-105
      before:absolute before:inset-0 before:bg-gradient-to-r before:from-green-400 before:to-green-500 before:opacity-0 before:transition-opacity before:duration-300
      hover:before:opacity-100
    `,
    outline: `
      bg-transparent text-white border-2 border-pink-500/50
      hover:border-pink-500 hover:bg-pink-500/10
      hover:scale-105
      shadow-lg shadow-pink-500/10
      hover:shadow-xl hover:shadow-pink-500/20
    `,
    glass: `
      bg-white/10 text-white border border-white/20 backdrop-blur-md
      hover:bg-white/20 hover:border-white/30
      hover:scale-105
      shadow-lg shadow-black/10
      hover:shadow-xl hover:shadow-black/20
    `
  }
  
  const disabledClasses = disabled ? 
    "opacity-50 cursor-not-allowed hover:scale-100 hover:shadow-none" : ""
  
  const classes = `
    ${baseClasses}
    ${sizeClasses[size]}
    ${variantClasses[variant]}
    ${disabledClasses}
    ${className}
  `.trim().replace(/\s+/g, ' ')
  
  const content = (
    <>
      {/* Background Shine Effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-700" />
      </div>
      
      {/* Content */}
      <span className="relative z-10 flex items-center gap-2">
        {icon && <span className="flex-shrink-0">{icon}</span>}
        {children}
      </span>
    </>
  )
  
  if (href) {
    return (
      <motion.a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        className={classes}
        onClick={onClick}
        whileHover={{ scale: disabled ? 1 : 1.05 }}
        whileTap={{ scale: disabled ? 1 : 0.95 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        {content}
      </motion.a>
    )
  }
  
  return (
    <motion.button
      className={classes}
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
      whileHover={{ scale: disabled ? 1 : 1.05 }}
      whileTap={{ scale: disabled ? 1 : 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {content}
    </motion.button>
  )
}