const initialState = {
  timer: 0,
  start: false,
  isActive: false,
  isStopped: false,
}

const timeReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'START':
      return {
        ...state,
        start: true,
        isActive: true,
        isStopped: false,
      }

    case 'STOP':
      return {
        ...state,
        start: false,
        isActive: false,
        isStopped: true,
      }

    case 'PAUSE':
      return {
        ...state,
        start: false,
        isActive: false,
        isStopped: false,
      }

    case 'SECONDS':
      return {
        ...state,
        isActive: true,
        timer: state.timer + 50,
        isStopped: false,
      }

    case 'STOPPED':
      return {
        ...initialState,
        isActive: false,
      }

    default:
      return state
  }
}

export default timeReducer
