'use client'

import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import { Toaster } from 'react-hot-toast'
import { useState, useEffect } from 'react'
import { ChatBot } from '@/components/ChatBotNew'
import { NavBar } from '@/components/NavBarNew'
import { Footer } from '@/components/Footer'
import LoadingScreen from '@/components/LoadingScreenNew'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter'
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair'
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isLoading, setIsLoading] = useState(true)

  const handleLoadingComplete = () => {
    setIsLoading(false)
  }

  return (
    <html lang="es" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <title>Lizo Belleza - Diseño & Elegancia</title>
        <meta name="description" content="Descubre la mejor colección de productos de belleza y barbería. Calidad premium, diseño elegante y la mejor experiencia de compra." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#e11d48" />
        <link rel="icon" href="/logo y carrusel/Logolizo.jpg" />
        
        {/* Wompi Scripts */}
        <script src="https://checkout.wompi.co/widget.js" async></script>
      </head>
      <body className={`${inter.className} antialiased`}>
        {isLoading && <LoadingScreen onComplete={handleLoadingComplete} />}
        
        <div className={`flex flex-col min-h-screen transition-all duration-1000 ${
          isLoading ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
        }`}>
          <NavBar />
          <main className="flex-1 bg-gradient-to-b from-white via-gray-50/30 to-white">
            {children}
          </main>
          <Footer />
        </div>
        
        <ChatBot />
        
        <Toaster 
          position="top-right"
          toastOptions={{
            duration: 4000,
            style: {
              background: 'rgb(255, 255, 255)',
              color: 'rgb(75, 85, 99)',
              border: '1px solid rgb(229, 231, 235)',
              borderRadius: '12px',
              boxShadow: '0 8px 32px rgba(225, 29, 72, 0.15)',
              fontWeight: '500',
              fontFamily: 'var(--font-inter)',
            },
            success: {
              style: {
                background: 'rgb(254, 242, 242)',
                color: 'rgb(153, 27, 27)',
                border: '1px solid rgb(225, 29, 72)',
              },
              iconTheme: {
                primary: '#e11d48',
                secondary: '#ffffff',
              },
            },
            error: {
              style: {
                background: 'rgb(254, 242, 242)',
                color: 'rgb(153, 27, 27)',
                border: '1px solid rgb(248, 113, 113)',
              },
              iconTheme: {
                primary: '#ef4444',
                secondary: '#fef2f2',
              },
            },
          }}
        />
      </body>
    </html>
  )
}