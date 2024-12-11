"use client"

import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { AudioFile } from "@/types/workspace"
import { formatDuration } from "@/lib/utils"
import { PauseIcon, PlayIcon, Volume2Icon } from "lucide-react"
import { useEffect, useRef, useState } from "react"

interface AudioPlayerProps {
  file: AudioFile
}

export function AudioPlayer({ file }: AudioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [volume, setVolume] = useState(1)
  const audioRef = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    const updateTime = () => setCurrentTime(audio.currentTime)
    audio.addEventListener("timeupdate", updateTime)
    return () => audio.removeEventListener("timeupdate", updateTime)
  }, [])

  const togglePlayPause = () => {
    if (!audioRef.current) return
    if (isPlaying) {
      audioRef.current.pause()
    } else {
      audioRef.current.play()
    }
    setIsPlaying(!isPlaying)
  }

  const handleTimeChange = (value: number[]) => {
    if (!audioRef.current) return
    audioRef.current.currentTime = value[0]
    setCurrentTime(value[0])
  }

  const handleVolumeChange = (value: number[]) => {
    if (!audioRef.current) return
    audioRef.current.volume = value[0]
    setVolume(value[0])
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 border-t bg-background p-4">
      <audio ref={audioRef} src={file.url} />
      <div className="container flex items-center gap-4">
        <Button
          variant="ghost"
          size="icon"
          onClick={togglePlayPause}
          className="h-10 w-10"
        >
          {isPlaying ? (
            <PauseIcon className="h-5 w-5" />
          ) : (
            <PlayIcon className="h-5 w-5" />
          )}
        </Button>

        <div className="flex-1">
          <Slider
            value={[currentTime]}
            max={file.duration}
            step={1}
            onValueChange={handleTimeChange}
            className="mb-2"
          />
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>{formatDuration(currentTime)}</span>
            <span>{formatDuration(file.duration)}</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Volume2Icon className="h-5 w-5" />
          <Slider
            value={[volume]}
            max={1}
            step={0.1}
            onValueChange={handleVolumeChange}
            className="w-24"
          />
        </div>
      </div>
    </div>
  )
}