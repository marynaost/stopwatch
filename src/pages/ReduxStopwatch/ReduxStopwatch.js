import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { pause, start, stop, seconds, stopped } from 'redux/actions'

const styles = {
  clockface: {
    fontSize: 64,
    fontWeight: 500,
    textAlign: 'center',
  },
}

export default function ReduxStopwatch(params) {
  const time = useSelector(state => state.time.timer)
  const isStart = useSelector(state => state.time.start)
  const isStopped = useSelector(state => state.time.isStopped)
  const isActive = useSelector(state => state.time.isActive)
  const dispatch = useDispatch()

  useEffect(() => {
    let interval
    if (isStart === true) {
      interval = setInterval(() => {
        dispatch(seconds())
      }, 50)
    }

    return () => {
      clearInterval(interval)
    }
  }, [dispatch, isStart, isStopped])

  return (
    <>
      <div style={styles.clockface}>
        <span>{'0' + Math.floor((time / 60000) % 60)}:</span>
        <span>{('0' + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
        <span>{('0' + ((time / 10) % 100)).slice(-2)}</span>
        <div>
          {isStopped ? (
            <button
              style={{ marginRight: '10px' }}
              disabled={isActive}
              onClick={() => {
                dispatch(stopped())
                dispatch(start())
              }}
            >
              Start
            </button>
          ) : (
            <button
              style={{ marginRight: '10px' }}
              disabled={isActive}
              onClick={() => dispatch(start())}
            >
              Start
            </button>
          )}

          <button
            style={{ marginRight: '10px' }}
            onClick={() => {
              dispatch(stop())
            }}
          >
            Stop
          </button>
          <button
            onClick={() => {
              dispatch(pause())
            }}
          >
            Pause
          </button>
        </div>
      </div>
    </>
  )
}
