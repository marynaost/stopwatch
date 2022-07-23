import { useState, useRef } from 'react'

const styles = {
  clockface: {
    fontSize: 64,
    fontWeight: 500,
    textAlign: 'center',
  },
}

export default function ReactHooksStopwatch() {
  const [time, setTime] = useState(0)
  const [isActive, setIsActive] = useState(false)
  const [isStopped, setIsStopped] = useState(false)

  const intervalId = useRef()

  const handleStart = () => {
    if (isStopped === true) {
      setTime(0)
    }
    setIsActive(true)

    intervalId.current = setInterval(() => {
      setTime(prevTime => prevTime + 50)
    }, 50)
  }

  const handleStop = () => {
    setIsStopped(true)
    setIsActive(false)
    clearInterval(intervalId.current)
  }

  const handlePause = () => {
    setIsStopped(false)
    setIsActive(false)
    clearInterval(intervalId.current)
  }

  return (
    <div style={styles.clockface}>
      <span>{'0' + Math.floor((time / 60000) % 60)}:</span>
      <span>{('0' + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
      <span>{('0' + ((time / 10) % 100)).slice(-2)}</span>
      <div>
        <button
          style={{ marginRight: '10px' }}
          type="button"
          disabled={isActive}
          onClick={handleStart}
        >
          Start
        </button>
        <button
          style={{ marginRight: '10px' }}
          type="button"
          onClick={handleStop}
        >
          Stop
        </button>
        <button type="button" onClick={handlePause}>
          Pause
        </button>
      </div>
    </div>
  )
}
