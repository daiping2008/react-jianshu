import * as actionTypes from './actionTypes'
import {getHeaderList} from '../../../api'

export const searchFocus = () => ({
  type: actionTypes.SEARCH_FOCUS
})

export const searchBlur = () => ({
  type: actionTypes.SEARCH_BLUR
})

export const handleMouseEnter = () => ({
  type: actionTypes.MOUSE_ENTER
})

export const handleMouseLeave = () => ({
  type: actionTypes.MOUSE_LEAVE
})

export const getList = () => {
  return dispatch => {
    getHeaderList()
    console.log(123)
  }
}