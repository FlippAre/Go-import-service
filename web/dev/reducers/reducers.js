import * as actions from '../actions'

function buttonClicker(state=initialState, action) {
  switch (action.type) {
    case BUTTON_CLICKED:
      return !state
    default:
      return state

  }
}
