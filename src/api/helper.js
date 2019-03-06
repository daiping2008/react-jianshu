import axios from 'axios'

export const get = url => (
  (params={}) => (
    axios.get(url, {
      params
    }).then(res => {
      let {status, data} = res
      return status === 200 ? data : ''
    }).catch(e => {})
  )
)

export const post = url => (
  (data={}) => (
    axios.post(url, data, {
      'headers': {'Content-Type': 'application/x-www-form-urlencodeed'}
    }).then(res => {
      let {status, data} = res
      return status === 200 ? data : ''
    }).catch(e => {})
  )
)