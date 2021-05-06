const initialState = {
  isAuthenticated: false 
}

export const authReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'ON_LOGIN':
      return {
        ...state,
        isAuthenticated: action.payload ? true : false
      }
    }
  
  switch(action.type) {
    case 'ON_LOGOUT':
      return {
        ...state,
        isAuthenticated: false
      }
      default: return state
  }
  }
