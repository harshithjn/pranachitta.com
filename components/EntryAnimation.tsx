"use client"
import { useState, useEffect } from "react"
import { Leaf } from "lucide-react"

interface EntryAnimationProps {
  onComplete: () => void
}

export default function EntryAnimation({ onComplete }: EntryAnimationProps) {
  const [stage, setStage] = useState(0)

  useEffect(() => {
    const timer1 = setTimeout(() => setStage(1), 500)
    const timer2 = setTimeout(() => setStage(2), 1500)
    const timer3 = setTimeout(() => setStage(3), 2500)
    const timer4 = setTimeout(() => onComplete(), 3200)

    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
      clearTimeout(timer3)
      clearTimeout(timer4)
    }
  }, [onComplete])

  return (
    <div className="fixed inset-0 z-50 bg-white flex items-center justify-center overflow-hidden">
      {/* Background subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-green-50/30"></div>

      {/* Main content */}
      <div className="relative z-10 text-center">
        {/* Icon container */}
        <div className="relative mb-8">
          <div
  className={`w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto transition-all duration-1000 ${
    stage >= 1 ? "scale-100 opacity-100" : "scale-50 opacity-0"
  }`}
>
  <img
    src="https://res.cloudinary.com/dbewukdt0/image/upload/v1750762022/Transparent-01_x7azvw.png" // replace with your actual image URL
    alt="Icon"
    className="h-20 w-20 object-contain"
  />
</div>


          {/* Ripple effect */}
          <div
            className={`absolute inset-0 w-24 h-24 mx-auto border-2 border-primary-custom/30 rounded-full transition-all duration-1500 ${
              stage >= 1 ? "scale-150 opacity-0" : "scale-100 opacity-100"
            }`}
          ></div>
          <div
            className={`absolute inset-0 w-24 h-24 mx-auto border-2 border-primary-custom/20 rounded-full transition-all duration-1500 delay-300 ${
              stage >= 1 ? "scale-200 opacity-0" : "scale-100 opacity-100"
            }`}
          ></div>
        </div>

        {/* Text content */}
        <div className="space-y-4">
          <h1
            className={`font-merienda text-4xl lg:text-5xl font-bold text-gray-900 transition-all duration-1000 delay-500 ${
              stage >= 2 ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
          >
            Prana Chitta
          </h1>
          <h2
            className={`font-merienda text-2xl lg:text-3xl font-bold text-primary-custom transition-all duration-1000 delay-700 ${
              stage >= 2 ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
          >
            Ashram
          </h2>
          <p
            className={`font-merienda text-lg lg:text-xl text-primary-custom font-medium italic transition-all duration-1000 delay-900 ${
              stage >= 2 ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
          >
            Breathing into loving awareness
          </p>
        </div>

        {/* Decorative elements */}
        <div
          className={`flex items-center justify-center space-x-4 mt-8 transition-all duration-1000 delay-1100 ${
            stage >= 2 ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
          <div className="w-12 h-0.5 bg-primary-custom"></div>
          <div className="w-2 h-2 bg-primary-custom rounded-full"></div>
          <div className="w-12 h-0.5 bg-primary-custom"></div>
        </div>
      </div>

      {/* Exit animation overlay */}
      <div
        className={`absolute inset-0 bg-white transition-all duration-700 ${
          stage >= 3 ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      ></div>
    </div>
  )
}
