const authReducer = (state = { auth: false }, action: { type: string; payload: never }) => {
  switch (action.type) {
    case 'AUTH':
      return { ...state, auth: true }
    case 'LOGOUT':
      return { ...state, auth: false }
    default:
      return state
  }
}

export default authReducer
