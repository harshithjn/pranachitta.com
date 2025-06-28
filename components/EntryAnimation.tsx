"use client"

import { useState, useEffect } from "react"

interface EntryAnimationProps {
  onComplete: () => void
}

export default function EntryAnimation({ onComplete }: EntryAnimationProps) {
  const [stage, setStage] = useState(0)

  useEffect(() => {
    const timer1 = setTimeout(() => setStage(1), 300) // Logo appears
    const timer2 = setTimeout(() => setStage(2), 1000) // "Prana Chitta" appears
    const timer3 = setTimeout(() => setStage(3), 1600) // "Ashram" appears
    const timer4 = setTimeout(() => setStage(4), 2200) // Tagline appears
    const timer5 = setTimeout(() => setStage(5), 2800) // Decorative elements appear
    const timer6 = setTimeout(() => setStage(6), 3800) // Start exit animation
    const timer7 = setTimeout(() => onComplete(), 4500) // Complete

    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
      clearTimeout(timer3)
      clearTimeout(timer4)
      clearTimeout(timer5)
      clearTimeout(timer6)
      clearTimeout(timer7)
    }
  }, [onComplete])

  return (
    <div className="fixed inset-0 z-50 bg-white flex items-center justify-center overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-green-50/30">
        <div 
          className={`absolute inset-0 bg-gradient-radial from-primary-custom/5 via-transparent to-transparent transition-all duration-2000 ${
            stage >= 1 ? "scale-150 opacity-100" : "scale-50 opacity-0"
          }`}
        ></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center">
        {/* Icon container with enhanced animations */}
        <div className="relative mb-12">
          {/* Multiple ripple effects */}
          <div
            className={`absolute inset-0 w-32 h-32 mx-auto border border-primary-custom/20 rounded-full transition-all duration-2000 ease-out ${
              stage >= 1 ? "scale-300 opacity-0" : "scale-100 opacity-100"
            }`}
          ></div>
          <div
            className={`absolute inset-0 w-28 h-28 mx-auto border border-primary-custom/30 rounded-full transition-all duration-1800 ease-out delay-200 ${
              stage >= 1 ? "scale-250 opacity-0" : "scale-100 opacity-100"
            }`}
          ></div>
          <div
            className={`absolute inset-0 w-24 h-24 mx-auto border-2 border-primary-custom/40 rounded-full transition-all duration-1600 ease-out delay-400 ${
              stage >= 1 ? "scale-200 opacity-0" : "scale-100 opacity-100"
            }`}
          ></div>

          {/* Logo with sophisticated entrance */}
          <div
            className={`relative w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto shadow-lg transition-all duration-1200 ease-out ${
              stage >= 1 
                ? "scale-100 opacity-100 rotate-0 blur-0" 
                : "scale-0 opacity-0 rotate-180 blur-sm"
            }`}
            style={{
              transform: stage >= 1 
                ? "translateY(0) scale(1) rotate(0deg)" 
                : "translateY(20px) scale(0.3) rotate(180deg)"
            }}
          >
            <img
              src="https://res.cloudinary.com/dbewukdt0/image/upload/v1750762022/Transparent-01_x7azvw.png"
              alt="Prana Chitta Ashram Logo"
              className={`h-20 w-20 object-contain transition-all duration-1000 ${
                stage >= 1 ? "scale-100" : "scale-75"
              }`}
            />
            
            {/* Subtle glow effect */}
            <div 
              className={`absolute inset-0 rounded-full bg-primary-custom/10 transition-all duration-1500 ${
                stage >= 1 ? "scale-110 opacity-100" : "scale-50 opacity-0"
              }`}
            ></div>
          </div>

          {/* Floating particles */}
          <div className={`absolute -top-4 -left-4 w-2 h-2 bg-primary-custom/30 rounded-full transition-all duration-2000 ${
            stage >= 1 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}></div>
          <div className={`absolute -top-2 right-2 w-1 h-1 bg-primary-custom/40 rounded-full transition-all duration-2000 delay-300 ${
            stage >= 1 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}></div>
          <div className={`absolute -bottom-2 -right-2 w-1.5 h-1.5 bg-primary-custom/35 rounded-full transition-all duration-2000 delay-500 ${
            stage >= 1 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}></div>
        </div>

        {/* Text content with staggered animations */}
        <div className="space-y-6">
          {/* Prana Chitta - appears at stage 2 */}
          <h1
            className={`font-merienda text-4xl lg:text-5xl font-bold text-gray-900 transition-all duration-1000 ease-out ${
              stage >= 2 
                ? "translate-y-0 opacity-100 scale-100 blur-0" 
                : "translate-y-8 opacity-0 scale-95 blur-sm"
            }`}
            style={{
              transform: stage >= 2 
                ? "translateY(0) scale(1)" 
                : "translateY(32px) scale(0.95)"
            }}
          >
            Prana Chitta
          </h1>

          {/* Ashram - appears at stage 3 */}
          <h2
            className={`font-merienda text-2xl lg:text-3xl font-bold text-primary-custom transition-all duration-1000 ease-out ${
              stage >= 3 
                ? "translate-y-0 opacity-100 scale-100 blur-0" 
                : "translate-y-8 opacity-0 scale-95 blur-sm"
            }`}
            style={{
              transform: stage >= 3 
                ? "translateY(0) scale(1)" 
                : "translateY(32px) scale(0.95)"
            }}
          >
            Ashram
          </h2>

          {/* Tagline - appears at stage 4 */}
          <p
            className={`font-merienda text-lg lg:text-xl text-primary-custom font-medium italic transition-all duration-1000 ease-out ${
              stage >= 4 
                ? "translate-y-0 opacity-100 scale-100 blur-0" 
                : "translate-y-8 opacity-0 scale-95 blur-sm"
            }`}
            style={{
              transform: stage >= 4 
                ? "translateY(0) scale(1)" 
                : "translateY(32px) scale(0.95)"
            }}
          >
            Breathing into loving awareness
          </p>
        </div>

        {/* Enhanced decorative elements - appear at stage 5 */}
        <div
          className={`flex items-center justify-center space-x-6 mt-12 transition-all duration-1200 ease-out ${
            stage >= 5 
              ? "translate-y-0 opacity-100 scale-100" 
              : "translate-y-6 opacity-0 scale-90"
          }`}
        >
          <div 
            className={`h-0.5 bg-gradient-to-r from-transparent via-primary-custom to-transparent transition-all duration-1000 ${
              stage >= 5 ? "w-16" : "w-0"
            }`}
          ></div>
          
          <div className={`relative transition-all duration-800 delay-300 ${
            stage >= 5 ? "scale-100 opacity-100" : "scale-0 opacity-0"
          }`}>
            <div className="w-3 h-3 bg-primary-custom rounded-full"></div>
            <div className="absolute inset-0 w-3 h-3 bg-primary-custom/30 rounded-full animate-ping"></div>
          </div>
          
          <div 
            className={`h-0.5 bg-gradient-to-r from-transparent via-primary-custom to-transparent transition-all duration-1000 delay-200 ${
              stage >= 5 ? "w-16" : "w-0"
            }`}
          ></div>
        </div>

        {/* Breathing effect overlay */}
        <div 
          className={`absolute inset-0 pointer-events-none transition-all duration-3000 ${
            stage >= 2 && stage < 6 ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="absolute inset-0 bg-gradient-radial from-primary-custom/5 via-transparent to-transparent animate-pulse"></div>
        </div>
      </div>

      {/* Smooth exit animation overlay */}
      <div
        className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
          stage >= 6 
            ? "bg-white/0 backdrop-blur-0 opacity-0 pointer-events-none scale-110" 
            : "bg-white/100 backdrop-blur-0 opacity-100 scale-100"
        }`}
      ></div>
    </div>
  )
}
