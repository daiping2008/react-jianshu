import * as actionTypes from './actionTypes'
import {fromJS} from 'immutable'
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

export const addHeaderList = (data) => ({
  type: actionTypes.ADD_HEADER_LIST,
  data: fromJS(data),
  totalPage:Math.ceil(data.length/10)
})

export const getList = () => {
  return async dispatch => {
    const res = await getHeaderList()
    const {errno, data} = res
    if (errno === 0) {
      dispatch(addHeaderList(data))
    }
  }
}

export const changePage = (page) => ({
  type: actionTypes.CHANGE_PAGE,
  page
})