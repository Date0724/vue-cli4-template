import request from './request'

export const api = query => {
  return request({
    url: query.url,
    method: query.method,
    params: query.data
  })
}
