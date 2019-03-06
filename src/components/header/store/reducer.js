import * as actionTypes from './actionTypes'
import {fromJS} from 'immutable'

const defaultState = fromJS({
  focused: false,
  mouseIn:false
})

export default (state = defaultState, action) => {

  switch(action.type) {
    case actionTypes.SEARCH_BLUR:
      return state.set('focused', false)
    case actionTypes.SEARCH_FOCUS:
      return  state.set('focused', true)
      case actionTypes.MOUSE_ENTER:
      return state.set('mouseIn', true)
    case actionTypes.MOUSE_LEAVE:
      return  state.set('mouseIn', false)
    default:
    return state
  }
}