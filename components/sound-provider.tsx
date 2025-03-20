"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

interface SoundContextType {
  isSoundEnabled: boolean
  toggleSound: () => void
  playSound: (soundName: string) => void
}

const SoundContext = createContext<SoundContextType | undefined>(undefined)

interface SoundProviderProps {
  children: ReactNode
}

export function SoundProvider({ children }: SoundProviderProps) {
  const [isSoundEnabled, setIsSoundEnabled] = useState(false)
  const [sounds, setSounds] = useState<Record<string, HTMLAudioElement>>({})

  useEffect(() => {
    // Initialize sounds
    const soundEffects = {
      click: new Audio("/click.mp3"),
      hover: new Audio("/hover.mp3"),
      success: new Audio("/success.mp3"),
    }

    // Preload sounds
    Object.values(soundEffects).forEach((audio) => {
      audio.load()
      audio.volume = 0.5
    })

    setSounds(soundEffects)

    // Check if sound was previously enabled
    const savedSoundPreference = localStorage.getItem("jumanji-sound-enabled")
    if (savedSoundPreference) {
      setIsSoundEnabled(savedSoundPreference === "true")
    }

    return () => {
      // Cleanup
      Object.values(soundEffects).forEach((audio) => {
        audio.pause()
        audio.src = ""
      })
    }
  }, [])

  // Save sound preference when it changes
  useEffect(() => {
    localStorage.setItem("jumanji-sound-enabled", isSoundEnabled.toString())
  }, [isSoundEnabled])

  const toggleSound = () => {
    setIsSoundEnabled((prev) => !prev)

    // Play a sound to indicate the change if enabling
    if (!isSoundEnabled && sounds.click) {
      sounds.click.play().catch((err) => console.error("Error playing sound:", err))
    }
  }

  const playSound = (soundName: string) => {
    if (!isSoundEnabled || !sounds[soundName]) return

    // Clone the audio to allow multiple plays
    const sound = sounds[soundName].cloneNode() as HTMLAudioElement
    sound.play().catch((err) => console.error("Error playing sound:", err))
  }

  return <SoundContext.Provider value={{ isSoundEnabled, toggleSound, playSound }}>{children}</SoundContext.Provider>
}

export function useSoundContext() {
  const context = useContext(SoundContext)
  if (context === undefined) {
    throw new Error("useSoundContext must be used within a SoundProvider")
  }
  return context
}

