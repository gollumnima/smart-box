import { useEffect, useRef, useState } from 'react'

export const useTimer = (playTime: number, recessTime: number) => {
  const [ding, setDing] = useState(false)
  const [count, setCount] = useState(0)
  const [started, setStarted] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  const updateDing = (play: number, pause: number) => {
    if (count === 0 || count === play) {
      setDing(true)
      return
    }
    if (count === play + pause) {
      setDing(true)
      setCount(0)
      return
    }
    return setDing(false);
  }

  useEffect(() => {
    if (!started) return
    const interval = setInterval(() => {
      updateDing(playTime, recessTime)
      setCount(prev => prev + 1)
    }, 1000)
    console.log({ding, count})
    return () => clearInterval(interval)
  }, [count, started])

  useEffect(() => {
    if (!ding || !audioRef.current) return
    audioRef.current?.play()
  }, [ding, audioRef])

  return { ding, count, audioRef, started, setStarted }
}