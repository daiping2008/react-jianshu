import axios from 'axios'

const baseUrl = 'http://localhost:3030'

export const get = url => (
  (params={}) => (
    axios.get(baseUrl+url, {
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