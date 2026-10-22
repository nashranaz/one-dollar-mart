import { useEffect, useState } from 'react'

export default function CountdownTimer() {
  const [seconds, setSeconds] = useState(2 * 3600 + 18 * 60 + 45)
  useEffect(() => {
    const timer = setInterval(() => setSeconds((value) => value > 0 ? value - 1 : 2 * 3600 + 18 * 60 + 45), 1000)
    return () => clearInterval(timer)
  }, [])

  const hours = String(Math.floor(seconds / 3600)).padStart(2, '0')
  const minutes = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0')
  const secs = String(seconds % 60).padStart(2, '0')
  return <b className="countdown-time">{hours}:{minutes}:{secs}</b>
}
