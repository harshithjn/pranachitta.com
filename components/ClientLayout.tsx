"use client"
import { useState, useEffect } from "react"
import type React from "react"

import EntryAnimation from "./EntryAnimation"

interface ClientLayoutProps {
  children: React.ReactNode
}

export default function ClientLayout({ children }: ClientLayoutProps) {
  const [showEntry, setShowEntry] = useState(true)
  const [hasVisited, setHasVisited] = useState(false)

  useEffect(() => {
    // Check if user has already visited in this session
    const visited = sessionStorage.getItem("hasVisited")
    if (visited) {
      setShowEntry(false)
      setHasVisited(true)
    }
  }, [])

  const handleEntryComplete = () => {
    setShowEntry(false)
    setHasVisited(true)
    sessionStorage.setItem("hasVisited", "true")
  }

  if (showEntry && !hasVisited) {
    return <EntryAnimation onComplete={handleEntryComplete} />
  }

  return <>{children}</>
}
